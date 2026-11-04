// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccessControlAccess,
  AccessControlPrincipalType,
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
  DayOfWeek,
  DocumentStatus,
  EnabledOrDisabledState,
  EnrichmentStrategyMethod,
  FlowConnectionType,
  FlowNodeInputCategory,
  FlowNodeIODataType,
  FlowStatus,
  FlowValidationSeverity,
  FlowValidationType,
  IncludedData,
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
  VpcConfigurationStatus,
  VpcProtocol,
  VpcResolutionMode,
  WebScopeType,
} from "./enums";

/**
 * Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
 *
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
   * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
   *
   * @public
   */
  export interface LambdaMember {
    lambda: string;
    customControl?: never;
    $unknown?: never;
  }

  /**
   * To return the action group invocation results directly in the `InvokeAgent` response, specify `RETURN_CONTROL`.
   *
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
 * The identifier information for an Amazon S3 bucket.
 *
 * @public
 */
export interface S3Identifier {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * The S3 object key for the S3 resource.
   *
   * @public
   */
  s3ObjectKey?: string | undefined;
}

/**
 * Contains details about the OpenAPI schema for the action group. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html). You can either include the schema directly in the `payload` field or you can upload it to an S3 bucket and specify the S3 bucket location in the `s3` field.
 *
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
   * Contains details about the S3 object containing the OpenAPI schema for the action group. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html).
   *
   * @public
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * The JSON or YAML-formatted payload defining the OpenAPI schema for the action group. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html).
   *
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
 * Contains details about a parameter in a function for an action group.
 *
 * This data type is used in the following API operations:
 *
 * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
 * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
 * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
 * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
 * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
 *
 * @public
 */
export interface ParameterDetail {
  /**
   * A description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The data type of the parameter.
   *
   * @public
   */
  type: Type | undefined;

  /**
   * Whether the parameter is required for the agent to complete the function for action group invocation.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * Defines parameters that the agent needs to invoke from the user to complete the function. Corresponds to an action in an action group.
 *
 * This data type is used in the following API operations:
 *
 * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
 * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
 * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
 * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
 * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
 *
 * @public
 */
export interface Function {
  /**
   * A name for the function.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the function and its purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters that the agent elicits from the user to fulfill the function.
   *
   * @public
   */
  parameters?: Record<string, ParameterDetail> | undefined;

  /**
   * Contains information if user confirmation is required to invoke the function.
   *
   * @public
   */
  requireConfirmation?: RequireConfirmation | undefined;
}

/**
 * Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.
 *
 * This data type is used in the following API operations:
 *
 * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
 * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
 * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
 * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
 * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
 *
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
   * A list of functions that each define an action in the action group.
   *
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
   * The unique identifier of the agent for which to create the action group.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent for which to create the action group.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The name to give the action group.
   *
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A description of the action group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specify a built-in or computer use action for this action group. If you specify a value, you must leave the `description`, `apiSchema`, and `actionGroupExecutor` fields empty for this action group.
   *
   * - To allow your agent to request the user for additional information when trying to complete a task, set this field to `AMAZON.UserInput`.
   * - To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to `AMAZON.CodeInterpreter`.
   * - To allow your agent to use an Anthropic computer use tool, specify one of the following values.
   *
   *   > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html).
   *
   *   - `ANTHROPIC.Computer` - Gives the agent permission to use the mouse and keyboard and take screenshots.
   *   - `ANTHROPIC.TextEditor` - Gives the agent permission to view, create and edit files.
   *   - `ANTHROPIC.Bash` - Gives the agent permission to run commands in a bash shell.
   *
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

  /**
   * The configuration settings for a computer use action.
   *
   * > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html).
   *
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
   *
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html).
   *
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  actionGroupState?: ActionGroupState | undefined;

  /**
   * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
   *
   * @public
   */
  functionSchema?: FunctionSchema | undefined;
}

/**
 * Contains details about an action group.
 *
 * @public
 */
export interface AgentActionGroup {
  /**
   * The unique identifier of the agent to which the action group belongs.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent to which the action group belongs.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the action group.
   *
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * The name of the action group.
   *
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The description of the action group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the action group was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the action group was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * If this field is set as `AMAZON.UserInput`, the agent can request the user for additional information when trying to complete a task. The `description`, `apiSchema`, and `actionGroupExecutor` fields must be blank for this action group.
   *
   * During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an [Observation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html) reprompting the user for more information.
   *
   * @public
   */
  parentActionSignature?: ActionGroupSignature | undefined;

  /**
   * The configuration settings for a computer use action.
   *
   * > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html).
   *
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
   *
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html).
   *
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.
   *
   * @public
   */
  functionSchema?: FunctionSchema | undefined;

  /**
   * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  actionGroupState: ActionGroupState | undefined;
}

/**
 * @public
 */
export interface CreateAgentActionGroupResponse {
  /**
   * Contains details about the action group that was created.
   *
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an validation error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why this field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentActionGroupRequest {
  /**
   * The unique identifier of the agent that the action group belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent that the action group belongs to.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the action group to delete.
   *
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * By default, this value is `false` and deletion is stopped if the resource is in use. If you set it to `true`, the resource will be deleted even if the resource is in use.
   *
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
   * The unique identifier of the agent that the action group belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent that the action group belongs to.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the action group for which to get information.
   *
   * @public
   */
  actionGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentActionGroupResponse {
  /**
   * Contains details about the action group.
   *
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * @public
 */
export interface ListAgentActionGroupsRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about an action group.
 *
 * @public
 */
export interface ActionGroupSummary {
  /**
   * The unique identifier of the action group.
   *
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * The name of the action group.
   *
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  actionGroupState: ActionGroupState | undefined;

  /**
   * The description of the action group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the action group was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentActionGroupsResponse {
  /**
   * A list of objects, each of which contains information about an action group.
   *
   * @public
   */
  actionGroupSummaries: ActionGroupSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentActionGroupRequest {
  /**
   * The unique identifier of the agent for which to update the action group.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the agent version for which to update the action group.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the action group.
   *
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * Specifies a new name for the action group.
   *
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * Specifies a new name for the action group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Update the built-in or computer use action for this action group. If you specify a value, you must leave the `description`, `apiSchema`, and `actionGroupExecutor` fields empty for this action group.
   *
   * - To allow your agent to request the user for additional information when trying to complete a task, set this field to `AMAZON.UserInput`.
   * - To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to `AMAZON.CodeInterpreter`.
   * - To allow your agent to use an Anthropic computer use tool, specify one of the following values.
   *
   *   > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html).
   *
   *   - `ANTHROPIC.Computer` - Gives the agent permission to use the mouse and keyboard and take screenshots.
   *   - `ANTHROPIC.TextEditor` - Gives the agent permission to view, create and edit files.
   *   - `ANTHROPIC.Bash` - Gives the agent permission to run commands in a bash shell.
   *
   * During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an [Observation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html) reprompting the user for more information.
   *
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

  /**
   * The configuration settings for a computer use action.
   *
   * > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html).
   *
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
   *
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  actionGroupState?: ActionGroupState | undefined;

  /**
   * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html).
   *
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
   *
   * @public
   */
  functionSchema?: FunctionSchema | undefined;
}

/**
 * @public
 */
export interface UpdateAgentActionGroupResponse {
  /**
   * Contains details about the action group that was updated.
   *
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * Contains details about the Lambda function containing the orchestration logic carried out upon invoking the custom orchestration.
 *
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
   * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
   *
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
 * Details of custom orchestration.
 *
 * @public
 */
export interface CustomOrchestration {
  /**
   * The structure of the executor invoking the actions in custom orchestration.
   *
   * @public
   */
  executor?: OrchestrationExecutor | undefined;
}

/**
 * Details about a guardrail associated with a resource.
 *
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * Configuration for SESSION_SUMMARY memory type enabled for the agent.
 *
 * @public
 */
export interface SessionSummaryConfiguration {
  /**
   * Maximum number of recent session summaries to include in the agent's prompt context.
   *
   * @public
   */
  maxRecentSessions?: number | undefined;
}

/**
 * Details of the memory configuration.
 *
 * @public
 */
export interface MemoryConfiguration {
  /**
   * The type of memory that is stored.
   *
   * @public
   */
  enabledMemoryTypes: MemoryType[] | undefined;

  /**
   * The number of days the agent is configured to retain the conversational context.
   *
   * @public
   */
  storageDays?: number | undefined;

  /**
   * Contains the configuration for SESSION_SUMMARY memory type enabled for the agent.
   *
   * @public
   */
  sessionSummaryConfiguration?: SessionSummaryConfiguration | undefined;
}

/**
 * Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `promptType`. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
 *
 * @public
 */
export interface InferenceConfiguration {
  /**
   * The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for `Top P` determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set `topP` to 0.8, the model only selects the next token from the top 80% of the probability distribution of next tokens.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for `topK` is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set `topK` to 50, the model selects the next token from among the top 50 most likely choices.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * The maximum number of tokens to allow in the generated response.
   *
   * @public
   */
  maximumLength?: number | undefined;

  /**
   * A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * Contains configurations to override a prompt template in one part of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
 *
 * @public
 */
export interface PromptConfiguration {
  /**
   * The step in the agent sequence that this prompt configuration applies to.
   *
   * @public
   */
  promptType?: PromptType | undefined;

  /**
   * Specifies whether to override the default prompt template for this `promptType`. Set this value to `OVERRIDDEN` to use the prompt that you provide in the `basePromptTemplate`. If you leave it as `DEFAULT`, the agent uses a default prompt template.
   *
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * Specifies whether to allow the agent to carry out the step specified in the `promptType`. If you set this value to `DISABLED`, the agent skips that step. The default state for each `promptType` is as follows.
   *
   * - `PRE_PROCESSING` – `DISABLED`
   * - `ORCHESTRATION` – `ENABLED`
   * - `KNOWLEDGE_BASE_RESPONSE_GENERATION` – `ENABLED`
   * - `POST_PROCESSING` – `DISABLED`
   *
   * @public
   */
  promptState?: PromptState | undefined;

  /**
   * Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html). For more information, see [Configure the prompt templates](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts-configure.html).
   *
   * @public
   */
  basePromptTemplate?: string | undefined;

  /**
   * Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `promptType`. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration | undefined;

  /**
   * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `promptType`. If you set the field as `OVERRIDDEN`, the `overrideLambda` field in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) must be specified with the ARN of a Lambda function.
   *
   * @public
   */
  parserMode?: CreationMode | undefined;

  /**
   * The agent's foundation model.
   *
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * If the Converse or ConverseStream operations support the model, `additionalModelRequestFields` contains additional inference parameters, beyond the base set of inference parameters in the `inferenceConfiguration` field.
   *
   * For more information, see *Inference request parameters and response fields for foundation models* in the Amazon Bedrock user guide.
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * Contains configurations to override prompts in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
 *
 * @public
 */
export interface PromptOverrideConfiguration {
  /**
   * Contains configurations to override a prompt template in one part of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptConfigurations: PromptConfiguration[] | undefined;

  /**
   * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the `promptConfigurations` must contain a `parserMode` value that is set to `OVERRIDDEN`. For more information, see [Parser Lambda function in Amazon Bedrock Agents](https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-parser.html).
   *
   * @public
   */
  overrideLambda?: string | undefined;
}

/**
 * Contains details about an agent.
 *
 * @public
 */
export interface Agent {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent.
   *
   * @public
   */
  agentArn: string | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Instructions that tell the agent what it should do and how it should interact with users.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * The status of the agent and whether it is ready for use. The following statuses are possible:
   *
   * - CREATING – The agent is being created.
   * - PREPARING – The agent is being prepared.
   * - PREPARED – The agent is prepared and ready to be invoked.
   * - NOT_PREPARED – The agent has been created but not yet prepared.
   * - FAILED – The agent API operation failed.
   * - UPDATING – The agent is being updated.
   * - DELETING – The agent is being deleted.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * The foundation model used for orchestration by the agent.
   *
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * The description of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the orchestration strategy for the agent.
   *
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * Contains custom orchestration configurations for the agent.
   *
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
   *
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
   *
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The time at which the agent was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the agent was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The time at which the agent was last prepared.
   *
   * @public
   */
  preparedAt?: Date | undefined;

  /**
   * Contains reasons that the agent-related API that you invoked failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * Contains recommended actions to take for the agent-related API that you invoked to succeed.
   *
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * Details about the guardrail associated with the agent.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Contains memory configuration for the agent.
   *
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * The agent's collaboration settings.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * Contains details about the routing configuration of the alias.
 *
 * @public
 */
export interface AgentAliasRoutingConfigurationListItem {
  /**
   * The version of the agent with which the alias is associated.
   *
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * Information on the Provisioned Throughput assigned to an agent alias.
   *
   * @public
   */
  provisionedThroughput?: string | undefined;
}

/**
 * Contains details about the history of the alias.
 *
 * @public
 */
export interface AgentAliasHistoryEvent {
  /**
   * Contains details about the version of the agent with which the alias is associated.
   *
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The date that the alias stopped being associated to the version in the `routingConfiguration` object
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The date that the alias began being associated to the version in the `routingConfiguration` object.
   *
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * Contains details about an alias of an agent.
 *
 * @public
 */
export interface AgentAlias {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the alias of the agent.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The name of the alias of the agent.
   *
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alias of the agent.
   *
   * @public
   */
  agentAliasArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The description of the alias of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains details about the routing configuration of the alias.
   *
   * @public
   */
  routingConfiguration: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The time at which the alias of the agent was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Contains details about the history of the alias.
   *
   * @public
   */
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[] | undefined;

  /**
   * The status of the alias of the agent and whether it is ready for use. The following statuses are possible:
   *
   * - CREATING – The agent alias is being created.
   * - PREPARED – The agent alias is finished being created or updated and is ready to be invoked.
   * - FAILED – The agent alias API operation failed.
   * - UPDATING – The agent alias is being updated.
   * - DELETING – The agent alias is being deleted.
   * - DISSOCIATED - The agent alias has no version associated with it.
   *
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * Information on the failure of Provisioned Throughput assigned to an agent alias.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The invocation state for the agent alias. If the agent alias is running, the value is `ACCEPT_INVOCATIONS`. If the agent alias is paused, the value is `REJECT_INVOCATIONS`. Use the `UpdateAgentAlias` operation to change the invocation state.
   *
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * Contains details about an alias of an agent.
 *
 * @public
 */
export interface AgentAliasSummary {
  /**
   * Contains details about
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains details about the version of the agent with which the alias is associated.
   *
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The status of the alias.
   *
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * The time at which the alias of the agent was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The invocation state for the agent alias. If the agent alias is running, the value is `ACCEPT_INVOCATIONS`. If the agent alias is paused, the value is `REJECT_INVOCATIONS`. Use the `UpdateAgentAlias` operation to change the invocation state.
   *
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * An agent descriptor.
 *
 * @public
 */
export interface AgentDescriptor {
  /**
   * The agent's alias ARN.
   *
   * @public
   */
  aliasArn?: string | undefined;
}

/**
 * An agent collaborator.
 *
 * @public
 */
export interface AgentCollaborator {
  /**
   * The collaborator's agent ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The collaborator's agent version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The collaborator's agent descriptor.
   *
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * The collaborator's collaborator ID.
   *
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * The collaborator's instructions.
   *
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * The collaborator's collaborator name.
   *
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * When the collaborator was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the collaborator was updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The collaborator's relay conversation history.
   *
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;

  /**
   * The collaborator's client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentCollaboratorRequest {
  /**
   * The agent's ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * An agent version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The alias of the collaborator agent.
   *
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * A name for the collaborator.
   *
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * Instruction for the collaborator.
   *
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * A relay conversation history for the collaborator.
   *
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;

  /**
   * A client token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentCollaboratorResponse {
  /**
   * Details about the collaborator.
   *
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentCollaboratorRequest {
  /**
   * An agent ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The agent's version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The collaborator's ID.
   *
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
   * The agent's ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The agent's version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The collaborator's ID.
   *
   * @public
   */
  collaboratorId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentCollaboratorResponse {
  /**
   * Details about the collaborator.
   *
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * @public
 */
export interface ListAgentCollaboratorsRequest {
  /**
   * The agent's ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The agent's version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The maximum number of agent collaborators to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An agent collaborator summary.
 *
 * @public
 */
export interface AgentCollaboratorSummary {
  /**
   * The collaborator's agent ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The collaborator's agent version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The collaborator's ID.
   *
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * The collaborator's agent descriptor.
   *
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * The collaborator's collaboration instruction.
   *
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * The collaborator's relay conversation history.
   *
   * @public
   */
  relayConversationHistory: RelayConversationHistory | undefined;

  /**
   * The collaborator's name.
   *
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * When the collaborator was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the collaborator was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentCollaboratorsResponse {
  /**
   * A list of collaborator summaries.
   *
   * @public
   */
  agentCollaboratorSummaries: AgentCollaboratorSummary[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentCollaboratorRequest {
  /**
   * The agent's ID.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The agent's version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The collaborator's ID.
   *
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * An agent descriptor for the agent collaborator.
   *
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * The collaborator's name.
   *
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * Instruction for the collaborator.
   *
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * A relay conversation history for the collaborator.
   *
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;
}

/**
 * @public
 */
export interface UpdateAgentCollaboratorResponse {
  /**
   * Details about the collaborator.
   *
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * Defines an agent node in your flow. You specify the agent to invoke at this point in the flow. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface AgentFlowNodeConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the alias of the agent to invoke.
   *
   * @public
   */
  agentAliasArn: string | undefined;
}

/**
 * Contains details about a knowledge base that is associated with an agent.
 *
 * @public
 */
export interface AgentKnowledgeBase {
  /**
   * The unique identifier of the agent with which the knowledge base is associated.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent with which the knowledge base is associated.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the association between the agent and the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The description of the association between the agent and the knowledge base.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The time at which the association between the agent and the knowledge base was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the association between the agent and the knowledge base was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Specifies whether to use the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;
}

/**
 * Contains details about a knowledge base associated with an agent.
 *
 * @public
 */
export interface AgentKnowledgeBaseSummary {
  /**
   * The unique identifier of the knowledge base associated with an agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The description of the knowledge base associated with an agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the agent uses the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;

  /**
   * The time at which the knowledge base associated with an agent was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateAgentRequest {
  /**
   * A name for the agent that you create.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Instructions that tell the agent what it should do and how it should interact with users.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * The identifier for the model that you want to be used for orchestration by the agent you create.
   *
   * The `modelId` to provide depends on the type of model or throughput that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - If you use an [imported model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html), specify the ARN of the imported model. You can get the model ARN from a successful call to [CreateModelImportJob](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html) or from the Imported models page in the Amazon Bedrock console.
   *
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * A description of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the type of orchestration strategy for the agent. This is set to `DEFAULT` orchestration type, by default.
   *
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * Contains details of the custom orchestration configured for the agent.
   *
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
   *
   * @public
   */
  agentResourceRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * Any tags that you want to attach to the agent.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Contains configurations to override prompts in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * The unique Guardrail configuration assigned to the agent when it is created.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Contains the details of the memory configured for the agent.
   *
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * The agent's collaboration role.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * @public
 */
export interface CreateAgentResponse {
  /**
   * Contains details about the agent created.
   *
   * @public
   */
  agent: Agent | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRequest {
  /**
   * The unique identifier of the agent to delete.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * By default, this value is `false` and deletion is stopped if the resource is in use. If you set it to `true`, the resource will be deleted even if the resource is in use.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentResponse {
  /**
   * The unique identifier of the agent that was deleted.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The status of the agent.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentResponse {
  /**
   * Contains details about the agent.
   *
   * @public
   */
  agent: Agent | undefined;
}

/**
 * @public
 */
export interface ListAgentsRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about an agent.
 *
 * @public
 */
export interface AgentSummary {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * The status of the agent.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * The description of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the agent was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The latest version of the agent.
   *
   * @public
   */
  latestAgentVersion?: string | undefined;

  /**
   * Details about the guardrail associated with the agent.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAgentsResponse {
  /**
   * A list of objects, each of which contains information about an agent.
   *
   * @public
   */
  agentSummaries: AgentSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PrepareAgentRequest {
  /**
   * The unique identifier of the agent for which to create a `DRAFT` version.
   *
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface PrepareAgentResponse {
  /**
   * The unique identifier of the agent for which the `DRAFT` version was created.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The status of the `DRAFT` version and whether it is ready for use.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The time at which the `DRAFT` version of the agent was last prepared.
   *
   * @public
   */
  preparedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * Specifies a new name for the agent.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * Specifies new instructions that tell the agent what it should do and how it should interact with users.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * The identifier for the model that you want to be used for orchestration by the agent you create.
   *
   * The `modelId` to provide depends on the type of model or throughput that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - If you use an [imported model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html), specify the ARN of the imported model. You can get the model ARN from a successful call to [CreateModelImportJob](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html) or from the Imported models page in the Amazon Bedrock console.
   *
   * @public
   */
  foundationModel: string | undefined;

  /**
   * Specifies a new description of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the type of orchestration strategy for the agent. This is set to `DEFAULT` orchestration type, by default.
   *
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * Contains details of the custom orchestration configured for the agent.
   *
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
   *
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * Contains configurations to override prompts in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * The unique Guardrail configuration assigned to the agent when it is updated.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Specifies the new memory configuration for the agent.
   *
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * The agent's collaboration role.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * @public
 */
export interface UpdateAgentResponse {
  /**
   * Contains details about the agent that was updated.
   *
   * @public
   */
  agent: Agent | undefined;
}

/**
 * Contains details about a version of an agent.
 *
 * @public
 */
export interface AgentVersion {
  /**
   * The unique identifier of the agent that the version belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The name of the agent that the version belongs to.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent that the version belongs to.
   *
   * @public
   */
  agentArn: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The instructions provided to the agent.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * The status of the agent that the version belongs to.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * The foundation model that the version invokes.
   *
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
   *
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
   *
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The time at which the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the version was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A list of reasons that the API operation on the version failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * A list of recommended actions to take for the failed API operation on the version to succeed.
   *
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * Details about the guardrail associated with the agent.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Contains details of the memory configuration on the version of the agent.
   *
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * The agent's collaboration settings.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * Contains details about a version of an agent.
 *
 * @public
 */
export interface AgentVersionSummary {
  /**
   * The name of the agent to which the version belongs.
   *
   * @public
   */
  agentName: string | undefined;

  /**
   * The status of the agent to which the version belongs.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The time at which the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the version was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The description of the version of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Details about the guardrail associated with the agent.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAgentAliasRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A description of the alias of the agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains details about the routing configuration of the alias.
   *
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * Any tags that you want to attach to the alias of the agent.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentAliasResponse {
  /**
   * Contains details about the alias that was created.
   *
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 */
export interface DeleteAgentAliasRequest {
  /**
   * The unique identifier of the agent that the alias belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the alias to delete.
   *
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentAliasResponse {
  /**
   * The unique identifier of the agent that the alias belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the alias that was deleted.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The status of the alias.
   *
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentAliasRequest {
  /**
   * The unique identifier of the agent to which the alias to get information belongs.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the alias for which to get information.
   *
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentAliasResponse {
  /**
   * Contains information about the alias.
   *
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 */
export interface ListAgentAliasesRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentAliasesResponse {
  /**
   * A list of objects, each of which contains information about an alias of the agent.
   *
   * @public
   */
  agentAliasSummaries: AgentAliasSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentAliasRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of the alias.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * Specifies a new name for the alias.
   *
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * Specifies a new description for the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains details about the routing configuration of the alias.
   *
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The invocation state for the agent alias. To pause the agent alias, set the value to `REJECT_INVOCATIONS`. To start the agent alias running again, set the value to `ACCEPT_INVOCATIONS`. Use the `GetAgentAlias`, or `ListAgentAliases`, operation to get the invocation state of an agent alias.
   *
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * @public
 */
export interface UpdateAgentAliasResponse {
  /**
   * Contains details about the alias that was updated.
   *
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 */
export interface CreateVpcConfigurationRequest {
  /**
   * The unique identifier of the knowledge base to associate this VPC configuration with.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the VPC that the knowledge base connects through to reach the resource.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnets, in the VPC identified by `vpcId`, that the knowledge base uses to connect to the resource.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The private IPv4 address or DNS name of the resource you want the knowledge base to reach. The target must be privately reachable from inside your VPC, such as an internal load balancer or a private IP. The following are not supported:
   *
   * - Internet-facing endpoints
   * - Loopback addresses
   * - Link-local addresses
   * - Wildcard addresses
   * - Multicast addresses
   * - IPv6 literals
   *
   * @public
   */
  resourceTarget: string | undefined;

  /**
   * The port on which to reach the resource.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The protocol used to connect to the resource. Specify `HTTP` for plaintext or `HTTPS` for TLS. When you specify `HTTPS`, you must also provide `tlsServerName`.
   *
   * @public
   */
  protocol: VpcProtocol | undefined;

  /**
   * Controls how a domain-name `resourceTarget` is resolved. This applies only when the target is a domain name; it has no effect for IP-address targets, which have no name to resolve. In all cases the resolved address must be reachable from inside your VPC. Valid values:
   *
   * - `IN_VPC` (default, recommended) – The target domain name is resolved privately, using the DNS resolvers of the VPC, such as private Route 53 hosted zones or on-premises DNS reachable from the VPC. Use this for targets that are private to your VPC, such as internal load balancers, private hosted-zone names, or on-premises hosts.
   * - `PUBLIC` – The target domain name is resolved against public DNS resolvers. Select this only when the target's domain name must be resolved through public DNS and the resulting address is still reachable from the VPC, an uncommon split-horizon configuration. If you are unsure, use `IN_VPC`.
   *
   * @public
   */
  resolutionMode: VpcResolutionMode | undefined;

  /**
   * An optional HTTP `Host` header value to send when invoking the resource. Set this only if your resource (or an upstream router or ingress) routes by the `Host` header and that host differs from the target. This setting is independent of `tlsServerName`.
   *
   * @public
   */
  hostHeader?: string | undefined;

  /**
   * The expected TLS server name. The service matches this value against the Subject Alternative Names on your resource's TLS certificate during invocation. This field is required when `protocol` is `HTTPS`. Set it to a hostname on your certificate, such as `app.internal.example.com`. You can use a single leftmost wildcard, such as `*.example.com`. The value must be a hostname without a port.
   *
   * @public
   */
  tlsServerName?: string | undefined;

  /**
   * An optional human-readable name for the VPC configuration. If you don't specify a name, the VPC configuration has no name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An optional description of the VPC configuration. If you don't specify a description, the VPC configuration has no description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcConfigurationResponse {
  /**
   * The unique identifier of the VPC configuration that was created.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;

  /**
   * The current status of the VPC configuration. Immediately after creation this is `CREATING`.
   *
   * @public
   */
  status: VpcConfigurationStatus | undefined;
}

/**
 * The specific filters applied to your data source content. You can filter out or include certain content.
 *
 * @public
 */
export interface PatternObjectFilter {
  /**
   * The supported object type or content type of the data source.
   *
   * @public
   */
  objectType: string | undefined;

  /**
   * A list of one or more inclusion regular expression patterns to include certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
   *
   * @public
   */
  inclusionFilters?: string[] | undefined;

  /**
   * A list of one or more exclusion regular expression patterns to exclude certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
   *
   * @public
   */
  exclusionFilters?: string[] | undefined;
}

/**
 * The configuration of filtering certain objects or content types of the data source.
 *
 * @public
 */
export interface PatternObjectFilterConfiguration {
  /**
   * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
   *
   * @public
   */
  filters: PatternObjectFilter[] | undefined;
}

/**
 * The configuration of filtering the data source content. For example, configuring regular expression patterns to include or exclude certain content.
 *
 * @public
 */
export interface CrawlFilterConfiguration {
  /**
   * The type of filtering that you want to apply to certain objects or content of the data source. For example, the `PATTERN` type is regular expression patterns you can apply to filter your content.
   *
   * @public
   */
  type: CrawlFilterConfigurationType | undefined;

  /**
   * The configuration of filtering certain objects or content types of the data source.
   *
   * @public
   */
  patternObjectFilter?: PatternObjectFilterConfiguration | undefined;
}

/**
 * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
 *
 * @public
 */
export interface ConfluenceCrawlerConfiguration {
  /**
   * The configuration of filtering the Confluence content. For example, configuring regular expression patterns to include or exclude certain content.
   *
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * The endpoint information to connect to your Confluence data source.
 *
 * @public
 */
export interface ConfluenceSourceConfiguration {
  /**
   * The Confluence host URL or instance URL.
   *
   * @public
   */
  hostUrl: string | undefined;

  /**
   * The supported host type, whether online/cloud or server/on-premises.
   *
   * @public
   */
  hostType: ConfluenceHostType | undefined;

  /**
   * The supported authentication type to authenticate and connect to your Confluence instance.
   *
   * @public
   */
  authType: ConfluenceAuthType | undefined;

  /**
   * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Confluence connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/confluence-data-source-connector.html#configuration-confluence-connector).
   *
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * The configuration information to connect to Confluence as your data source for self-managed knowledge bases.
 *
 * @public
 */
export interface ConfluenceDataSourceConfiguration {
  /**
   * The endpoint information to connect to your Confluence data source.
   *
   * @public
   */
  sourceConfiguration: ConfluenceSourceConfiguration | undefined;

  /**
   * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
   *
   * @public
   */
  crawlerConfiguration?: ConfluenceCrawlerConfiguration | undefined;
}

/**
 * Configuration for deletion protection.
 *
 * @public
 */
export interface DeletionProtectionConfiguration {
  /**
   * Enable or disable deletion protection for the connector.
   *
   * @public
   */
  deletionProtectionStatus: EnabledOrDisabledState | undefined;

  /**
   * The threshold is the maximum percentage of documents that a sync job can delete from your index. If a sync would delete more than this percentage, the sync skips its delete phase, leaving your indexed documents in place. Not supported for the Custom connector.
   *
   * @public
   */
  deletionProtectionThreshold?: number | undefined;
}

/**
 * Configuration for audio extraction.
 *
 * @public
 */
export interface AudioExtractionConfiguration {
  /**
   * Whether audio extraction is enabled or disabled.
   *
   * @public
   */
  audioExtractionStatus: EnabledOrDisabledState | undefined;
}

/**
 * Configuration for image extraction.
 *
 * @public
 */
export interface ImageExtractionConfiguration {
  /**
   * Whether image extraction is enabled or disabled.
   *
   * @public
   */
  imageExtractionStatus: EnabledOrDisabledState | undefined;
}

/**
 * Configuration for video extraction.
 *
 * @public
 */
export interface VideoExtractionConfiguration {
  /**
   * Whether video extraction is enabled or disabled.
   *
   * @public
   */
  videoExtractionStatus: EnabledOrDisabledState | undefined;
}

/**
 * Configuration for media extraction settings.
 *
 * @public
 */
export interface MediaExtractionConfiguration {
  /**
   * Configuration for image extraction.
   *
   * @public
   */
  imageExtractionConfiguration?: ImageExtractionConfiguration | undefined;

  /**
   * Configuration for audio extraction.
   *
   * @public
   */
  audioExtractionConfiguration?: AudioExtractionConfiguration | undefined;

  /**
   * Configuration for video extraction.
   *
   * @public
   */
  videoExtractionConfiguration?: VideoExtractionConfiguration | undefined;
}

/**
 * A daily sync. The run time is system-chosen (off-peak) and not configurable.
 *
 * @public
 */
export interface DailySchedule {}

/**
 * The option to run the monthly sync on the last calendar day of each month.
 *
 * @public
 */
export interface LastDayOfMonth {}

/**
 * The day of the month on which a monthly sync runs. Specify exactly one of `dayNumber` or `lastDayOfMonth`.
 *
 * @public
 */
export type DayOfMonth =
  | DayOfMonth.DayNumberMember
  | DayOfMonth.LastDayOfMonthMember
  | DayOfMonth.$UnknownMember;

/**
 * @public
 */
export namespace DayOfMonth {
  /**
   * A specific day of the month, from 1 to 28. Values are capped at 28, so a monthly sync runs in every month, including February.
   *
   * @public
   */
  export interface DayNumberMember {
    dayNumber: number;
    lastDayOfMonth?: never;
    $unknown?: never;
  }

  /**
   * Set this option to run the monthly sync on the last calendar day of each month.
   *
   * @public
   */
  export interface LastDayOfMonthMember {
    dayNumber?: never;
    lastDayOfMonth: LastDayOfMonth;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dayNumber?: never;
    lastDayOfMonth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dayNumber: (value: number) => T;
    lastDayOfMonth: (value: LastDayOfMonth) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A monthly sync on a specified day of the month.
 *
 * @public
 */
export interface MonthlySchedule {
  /**
   * The day of the month on which the monthly sync runs.
   *
   * @public
   */
  dayOfMonth: DayOfMonth | undefined;
}

/**
 * A weekly sync on a specified day of the week.
 *
 * @public
 */
export interface WeeklySchedule {
  /**
   * The day of the week on which the weekly sync runs.
   *
   * @public
   */
  dayOfWeek: DayOfWeek | undefined;
}

/**
 * The recurring schedule on which a managed knowledge base connector automatically syncs its data source. Specify exactly one of `daily`, `weekly`, or `monthly`.
 *
 * @public
 */
export type SyncSchedule =
  | SyncSchedule.DailyMember
  | SyncSchedule.MonthlyMember
  | SyncSchedule.WeeklyMember
  | SyncSchedule.$UnknownMember;

/**
 * @public
 */
export namespace SyncSchedule {
  /**
   * A daily sync that runs once a day at a system-chosen off-peak time. The run time is not configurable.
   *
   * @public
   */
  export interface DailyMember {
    daily: DailySchedule;
    weekly?: never;
    monthly?: never;
    $unknown?: never;
  }

  /**
   * A weekly sync that runs once a week on the specified day of the week.
   *
   * @public
   */
  export interface WeeklyMember {
    daily?: never;
    weekly: WeeklySchedule;
    monthly?: never;
    $unknown?: never;
  }

  /**
   * A monthly sync that runs once a month on the specified day of the month.
   *
   * @public
   */
  export interface MonthlyMember {
    daily?: never;
    weekly?: never;
    monthly: MonthlySchedule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    daily?: never;
    weekly?: never;
    monthly?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    daily: (value: DailySchedule) => T;
    weekly: (value: WeeklySchedule) => T;
    monthly: (value: MonthlySchedule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for managed knowledge base connector data sources.
 *
 * @public
 */
export interface ManagedKnowledgeBaseConnectorConfiguration {
  /**
   * A safeguard against accidental bulk deletion of indexed content.
   *
   * @public
   */
  deletionProtectionConfiguration?: DeletionProtectionConfiguration | undefined;

  /**
   * Configuration for extracting media (images, audio, video) from data source files.
   *
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * Connector-specific parameters. For more information, see [Connect a data source](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-connect-ds.html).
   *
   * @public
   */
  connectorParameters?: __DocumentType | undefined;

  /**
   * The recurring schedule on which the connector automatically syncs this data source. If not specified, the data source is not synced automatically and you start each sync yourself. Not supported for the Custom connector.
   *
   * @public
   */
  syncSchedule?: SyncSchedule | undefined;
}

/**
 * The configuration information to connect to Amazon S3 as your data source for self-managed knowledge bases. To configure this data source for managed knowledge bases, use [managedKnowledgeBaseConnectorConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ManagedKnowledgeBaseConnectorConfiguration.html).
 *
 * @public
 */
export interface S3DataSourceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket that contains your data.
   *
   * @public
   */
  bucketArn: string | undefined;

  /**
   * A list of S3 prefixes to include certain files or content. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html).
   *
   * @public
   */
  inclusionPrefixes?: string[] | undefined;

  /**
   * The account ID for the owner of the S3 bucket.
   *
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.
 *
 * @public
 */
export interface SalesforceCrawlerConfiguration {
  /**
   * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
   *
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * The endpoint information to connect to your Salesforce data source.
 *
 * @public
 */
export interface SalesforceSourceConfiguration {
  /**
   * The Salesforce host URL or instance URL.
   *
   * @public
   */
  hostUrl: string | undefined;

  /**
   * The supported authentication type to authenticate and connect to your Salesforce instance.
   *
   * @public
   */
  authType: SalesforceAuthType | undefined;

  /**
   * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Salesforce connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/salesforce-data-source-connector.html#configuration-salesforce-connector).
   *
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * The configuration information to connect to Salesforce as your data source.
 *
 * @public
 */
export interface SalesforceDataSourceConfiguration {
  /**
   * The endpoint information to connect to your Salesforce data source.
   *
   * @public
   */
  sourceConfiguration: SalesforceSourceConfiguration | undefined;

  /**
   * The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.
   *
   * @public
   */
  crawlerConfiguration?: SalesforceCrawlerConfiguration | undefined;
}

/**
 * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
 *
 * @public
 */
export interface SharePointCrawlerConfiguration {
  /**
   * The configuration of filtering the SharePoint content. For example, configuring regular expression patterns to include or exclude certain content.
   *
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * The endpoint information to connect to your SharePoint data source.
 *
 * @public
 */
export interface SharePointSourceConfiguration {
  /**
   * The identifier of your Microsoft 365 tenant.
   *
   * @public
   */
  tenantId?: string | undefined;

  /**
   * The domain of your SharePoint instance or site URL/URLs.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * A list of one or more SharePoint site URLs.
   *
   * @public
   */
  siteUrls: string[] | undefined;

  /**
   * The supported host type, whether online/cloud or server/on-premises.
   *
   * @public
   */
  hostType: SharePointHostType | undefined;

  /**
   * The supported authentication type to authenticate and connect to your SharePoint site/sites.
   *
   * @public
   */
  authType: SharePointAuthType | undefined;

  /**
   * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [SharePoint connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/sharepoint-data-source-connector.html#configuration-sharepoint-connector).
   *
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * The configuration information to connect to SharePoint as your data source for self-managed knowledge bases.
 *
 * @public
 */
export interface SharePointDataSourceConfiguration {
  /**
   * The endpoint information to connect to your SharePoint data source.
   *
   * @public
   */
  sourceConfiguration: SharePointSourceConfiguration | undefined;

  /**
   * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
   *
   * @public
   */
  crawlerConfiguration?: SharePointCrawlerConfiguration | undefined;
}

/**
 * The rate limits for the URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @public
 */
export interface WebCrawlerLimits {
  /**
   * The max rate at which pages are crawled, up to 300 per minute per host.
   *
   * @public
   */
  rateLimit?: number | undefined;

  /**
   * The max number of web pages crawled from your source URLs, up to 25,000 pages. If the web pages exceed this limit, the data source sync will fail and no web pages will be ingested.
   *
   * @public
   */
  maxPages?: number | undefined;
}

/**
 * The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @public
 */
export interface WebCrawlerConfiguration {
  /**
   * The configuration of crawl limits for the web URLs.
   *
   * @public
   */
  crawlerLimits?: WebCrawlerLimits | undefined;

  /**
   * A list of one or more inclusion regular expression patterns to include certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
   *
   * @public
   */
  inclusionFilters?: string[] | undefined;

  /**
   * A list of one or more exclusion regular expression patterns to exclude certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
   *
   * @public
   */
  exclusionFilters?: string[] | undefined;

  /**
   * The scope of what is crawled for your URLs.
   *
   * You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain "aws.amazon.com" can also include sub domain "docs.aws.amazon.com".
   *
   * @public
   */
  scope?: WebScopeType | undefined;

  /**
   * Returns the user agent suffix for your web crawler.
   *
   * @public
   */
  userAgent?: string | undefined;

  /**
   * A string used for identifying the crawler or bot when it accesses a web server. The user agent header value consists of the `bedrockbot`, UUID, and a user agent suffix for your crawler (if one is provided). By default, it is set to `bedrockbot_UUID`. You can optionally append a custom suffix to `bedrockbot_UUID` to allowlist a specific user agent permitted to access your source URLs.
   *
   * @public
   */
  userAgentHeader?: string | undefined;
}

/**
 * The seed or starting point URL. You should be authorized to crawl the URL.
 *
 * @public
 */
export interface SeedUrl {
  /**
   * A seed or starting point URL.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @public
 */
export interface UrlConfiguration {
  /**
   * One or more seed or starting point URLs.
   *
   * @public
   */
  seedUrls?: SeedUrl[] | undefined;
}

/**
 * The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @public
 */
export interface WebSourceConfiguration {
  /**
   * The configuration of the URL/URLs.
   *
   * @public
   */
  urlConfiguration: UrlConfiguration | undefined;
}

/**
 * The configuration details for the web data source.
 *
 * @public
 */
export interface WebDataSourceConfiguration {
  /**
   * The source configuration details for the web data source.
   *
   * @public
   */
  sourceConfiguration: WebSourceConfiguration | undefined;

  /**
   * The Web Crawler configuration details for the web data source.
   *
   * @public
   */
  crawlerConfiguration?: WebCrawlerConfiguration | undefined;
}

/**
 * The connection configuration for the data source.
 *
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * The type of data source.
   *
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * Contains the configuration for a data source that connects a managed knowledge base to a supported data source connector. Specify this object when the data source type is `MANAGED_KNOWLEDGE_BASE_CONNECTOR`.
   *
   * @public
   */
  managedKnowledgeBaseConnectorConfiguration?: ManagedKnowledgeBaseConnectorConfiguration | undefined;

  /**
   * The configuration information to connect to Amazon S3 as your data source for self-managed knowledge bases. To configure this data source for managed knowledge bases, use [managedKnowledgeBaseConnectorConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ManagedKnowledgeBaseConnectorConfiguration.html).
   *
   * @public
   */
  s3Configuration?: S3DataSourceConfiguration | undefined;

  /**
   * The configuration of web URLs to crawl for your data source. You should be authorized to crawl the URLs.
   *
   * > **Note:** To configure this data source for managed knowledge bases, use [managedKnowledgeBaseConnectorConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ManagedKnowledgeBaseConnectorConfiguration.html). Web crawler data source connector for self-managed knowledge bases is in preview release and is subject to change.
   *
   * @public
   */
  webConfiguration?: WebDataSourceConfiguration | undefined;

  /**
   * The configuration information to connect to Confluence as your data source for self-managed knowledge bases.
   *
   * > **Note:** To configure this data source for managed knowledge bases, use [managedKnowledgeBaseConnectorConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ManagedKnowledgeBaseConnectorConfiguration.html). Confluence data source connector for self-managed knowledge bases is in preview release and is subject to change.
   *
   * @public
   */
  confluenceConfiguration?: ConfluenceDataSourceConfiguration | undefined;

  /**
   * The configuration information to connect to Salesforce as your data source.
   *
   * > **Note:** Salesforce data source connector for self-managed knowledge bases is in preview release and is subject to change.
   *
   * @public
   */
  salesforceConfiguration?: SalesforceDataSourceConfiguration | undefined;

  /**
   * The configuration information to connect to SharePoint as your data source for self-managed knowledge bases.
   *
   * > **Note:** To configure this data source for managed knowledge bases, use [managedKnowledgeBaseConnectorConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ManagedKnowledgeBaseConnectorConfiguration.html). SharePoint data source connector for self-managed knowledge bases is in preview release and is subject to change.
   *
   * @public
   */
  sharePointConfiguration?: SharePointDataSourceConfiguration | undefined;
}

/**
 * Contains the configuration for server-side encryption for your managed knowledge base.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the resource.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
 *
 * @public
 */
export interface FixedSizeChunkingConfiguration {
  /**
   * The maximum number of tokens to include in a chunk.
   *
   * @public
   */
  maxTokens: number | undefined;

  /**
   * The percentage of overlap between adjacent chunks of a data source.
   *
   * @public
   */
  overlapPercentage: number | undefined;
}

/**
 * Token settings for a layer in a hierarchical chunking configuration.
 *
 * @public
 */
export interface HierarchicalChunkingLevelConfiguration {
  /**
   * The maximum number of tokens that a chunk can contain in this layer.
   *
   * @public
   */
  maxTokens: number | undefined;
}

/**
 * Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
 *
 * You configure the number of tokens to overlap, or repeat across adjacent chunks. For example, if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of the second chunk. For each layer, you must also configure the maximum number of tokens in a chunk.
 *
 * @public
 */
export interface HierarchicalChunkingConfiguration {
  /**
   * Token settings for each layer.
   *
   * @public
   */
  levelConfigurations: HierarchicalChunkingLevelConfiguration[] | undefined;

  /**
   * The number of tokens to repeat across chunks in the same layer.
   *
   * @public
   */
  overlapTokens: number | undefined;
}

/**
 * Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
 *
 * With semantic chunking, each sentence is compared to the next to determine how similar they are. You specify a threshold in the form of a percentile, where adjacent sentences that are less similar than that percentage of sentence pairs are divided into separate chunks. For example, if you set the threshold to 90, then the 10 percent of sentence pairs that are least similar are split. So if you have 101 sentences, 100 sentence pairs are compared, and the 10 with the least similarity are split, creating 11 chunks. These chunks are further split if they exceed the max token size.
 *
 * You must also specify a buffer size, which determines whether sentences are compared in isolation, or within a moving context window that includes the previous and following sentence. For example, if you set the buffer size to `1`, the embedding for sentence 10 is derived from sentences 9, 10, and 11 combined.
 *
 * @public
 */
export interface SemanticChunkingConfiguration {
  /**
   * The maximum number of tokens that a chunk can contain.
   *
   * @public
   */
  maxTokens: number | undefined;

  /**
   * The buffer size.
   *
   * @public
   */
  bufferSize: number | undefined;

  /**
   * The dissimilarity threshold for splitting chunks.
   *
   * @public
   */
  breakpointPercentileThreshold: number | undefined;
}

/**
 * Details about how to chunk the documents in the data source. A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 *
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * Knowledge base can split your source data into chunks. A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE`, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
   *
   * - `FIXED_SIZE` – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the `fixedSizeChunkingConfiguration`.
   * - `HIERARCHICAL` – Split documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
   * - `SEMANTIC` – Split documents into chunks based on groups of similar content derived with natural language processing.
   * - `NONE` – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.
   *
   * @public
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
   *
   * @public
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration | undefined;

  /**
   * Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
   *
   * @public
   */
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration | undefined;

  /**
   * Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
   *
   * @public
   */
  semanticChunkingConfiguration?: SemanticChunkingConfiguration | undefined;
}

/**
 * The strategy used for performing context enrichment.
 *
 * @public
 */
export interface EnrichmentStrategyConfiguration {
  /**
   * The method used for the context enrichment strategy.
   *
   * @public
   */
  method: EnrichmentStrategyMethod | undefined;
}

/**
 * Context enrichment configuration is used to provide additional context to the RAG application using Amazon Bedrock foundation models.
 *
 * @public
 */
export interface BedrockFoundationModelContextEnrichmentConfiguration {
  /**
   * The enrichment stategy used to provide additional context. For example, Neptune GraphRAG uses Amazon Bedrock foundation models to perform chunk entity extraction.
   *
   * @public
   */
  enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Context enrichment configuration is used to provide additional context to the RAG application.
 *
 * @public
 */
export interface ContextEnrichmentConfiguration {
  /**
   * The method used for context enrichment. It must be Amazon Bedrock foundation models.
   *
   * @public
   */
  type: ContextEnrichmentType | undefined;

  /**
   * The configuration of the Amazon Bedrock foundation model used for context enrichment.
   *
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfiguration | undefined;
}

/**
 * An Amazon S3 location.
 *
 * @public
 */
export interface S3Location {
  /**
   * The location's URI. For example, `s3://my-bucket/chunk-processor/`.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
 *
 * @public
 */
export interface IntermediateStorage {
  /**
   * An S3 bucket path.
   *
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * A Lambda function that processes documents.
 *
 * @public
 */
export interface TransformationLambdaConfiguration {
  /**
   * The function's ARN identifier.
   *
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * A Lambda function that processes documents.
 *
 * @public
 */
export interface TransformationFunction {
  /**
   * The Lambda function.
   *
   * @public
   */
  transformationLambdaConfiguration: TransformationLambdaConfiguration | undefined;
}

/**
 * A custom processing step for documents moving through a data source ingestion pipeline. To process documents after they have been converted into chunks, set the step to apply to `POST_CHUNKING`.
 *
 * @public
 */
export interface Transformation {
  /**
   * A Lambda function that processes documents.
   *
   * @public
   */
  transformationFunction: TransformationFunction | undefined;

  /**
   * When the service applies the transformation.
   *
   * @public
   */
  stepToApply: StepType | undefined;
}

/**
 * Settings for customizing steps in the data source content ingestion pipeline.
 *
 * You can configure the data source to process documents with a Lambda function after they are parsed and converted into chunks. When you add a post-chunking transformation, the service stores chunked documents in an S3 bucket and invokes a Lambda function to process them.
 *
 * To process chunked documents with a Lambda function, define an S3 bucket path for input and output objects, and a transformation that specifies the Lambda function to invoke. You can use the Lambda function to customize how chunks are split, and the metadata for each chunk.
 *
 * @public
 */
export interface CustomTransformationConfiguration {
  /**
   * An S3 bucket path for input and output objects.
   *
   * @public
   */
  intermediateStorage: IntermediateStorage | undefined;

  /**
   * A Lambda function that processes documents.
   *
   * @public
   */
  transformations: Transformation[] | undefined;
}

/**
 * Contains configurations for using Amazon Bedrock Data Automation as the parser for ingesting your data sources.
 *
 * @public
 */
export interface BedrockDataAutomationConfiguration {
  /**
   * Specifies whether to enable parsing of multimodal data, including both text and/or images.
   *
   * @public
   */
  parsingModality?: ParsingModality | undefined;
}

/**
 * Instructions for interpreting the contents of a document.
 *
 * @public
 */
export interface ParsingPrompt {
  /**
   * Instructions for interpreting the contents of a document.
   *
   * @public
   */
  parsingPromptText: string | undefined;
}

/**
 * Settings for a foundation model used to parse documents for a data source.
 *
 * @public
 */
export interface BedrockFoundationModelConfiguration {
  /**
   * The ARN of the foundation model to use for parsing.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Instructions for interpreting the contents of a document.
   *
   * @public
   */
  parsingPrompt?: ParsingPrompt | undefined;

  /**
   * Specifies whether to enable parsing of multimodal data, including both text and/or images.
   *
   * @public
   */
  parsingModality?: ParsingModality | undefined;
}

/**
 * Settings for parsing document contents. If you exclude this field, the default parser converts the contents of each document into text before splitting it into chunks. Specify the parsing strategy to use in the `parsingStrategy` field and include the relevant configuration, or omit it to use the Amazon Bedrock default parser. For more information, see [Parsing options for your data source](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-advanced-parsing.html).
 *
 * > **Note:** If you specify `BEDROCK_DATA_AUTOMATION` or `BEDROCK_FOUNDATION_MODEL` and it fails to parse a file, the Amazon Bedrock default parser will be used instead.
 *
 * @public
 */
export interface ParsingConfiguration {
  /**
   * The parsing strategy for the data source.
   *
   * For managed knowledge bases, the strategy that you can select depends on the embedding model that your knowledge base uses:
   *
   * - If your knowledge base uses a native multimodal embedding model, specify `MULTI_MODAL_EMBEDDINGS`. With this strategy, files are sent directly to the embedding model instead of being parsed into text. This is the only strategy that is supported for these knowledge bases.
   * - Otherwise, specify `SMART_PARSING`.
   *
   * For more information, see [Customize ingestion for managed knowledge bases](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-customize-ingestion.html).
   *
   * @public
   */
  parsingStrategy: ParsingStrategy | undefined;

  /**
   * If you specify `BEDROCK_FOUNDATION_MODEL` as the parsing strategy for ingesting your data source, use this object to modify configurations for using a foundation model to parse documents.
   *
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration | undefined;

  /**
   * If you specify `BEDROCK_DATA_AUTOMATION` as the parsing strategy for ingesting your data source, use this object to modify configurations for using the Amazon Bedrock Data Automation parser.
   *
   * @public
   */
  bedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration | undefined;
}

/**
 * Contains details about how to ingest the documents in a data source.
 *
 * @public
 */
export interface VectorIngestionConfiguration {
  /**
   * Details about how to chunk the documents in the data source. A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   *
   * @public
   */
  chunkingConfiguration?: ChunkingConfiguration | undefined;

  /**
   * A custom document transformer for parsed data source documents.
   *
   * @public
   */
  customTransformationConfiguration?: CustomTransformationConfiguration | undefined;

  /**
   * Configurations for a parser to use for parsing documents in your data source. If you exclude this field, the default parser will be used.
   *
   * @public
   */
  parsingConfiguration?: ParsingConfiguration | undefined;

  /**
   * The context enrichment configuration used for ingestion of the data into the vector store.
   *
   * @public
   */
  contextEnrichmentConfiguration?: ContextEnrichmentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * The unique identifier of the knowledge base to which to add the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The connection configuration for the data source.
   *
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * The data deletion policy for the data source.
   *
   * You can set the data deletion policy to:
   *
   * - DELETE: Deletes all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the **vector store itself is not deleted**, only the data. This flag is ignored if an Amazon Web Services account is deleted.
   * - RETAIN: Retains all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the **vector store itself is not deleted** if you delete a knowledge base or data source resource.
   *
   * > **Note:** For managed knowledge bases, the only supported option is `DELETE`, which is also the default.
   *
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * Contains details about the server-side encryption for the data source.
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * Contains details about how to ingest the documents in the data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;
}

/**
 * Contains details about a data source.
 *
 * @public
 */
export interface DataSource {
  /**
   * The unique identifier of the knowledge base to which the data source belongs.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the data source. The following statuses are possible:
   *
   * - Available – The data source has been created and is ready for ingestion into the knowledge base.
   * - Deleting – The data source is being deleted.
   *
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * The description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The connection configuration for the data source.
   *
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Contains details about the configuration of the server-side encryption.
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * Contains details about how to ingest the documents in the data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * The data deletion policy for the data source.
   *
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * The time at which the data source was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the data source was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The detailed reasons on the failure to delete a data source.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * Contains details about the data source.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * The unique identifier of the knowledge base from which to delete the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source to delete.
   *
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * The unique identifier of the knowledge base to which the data source that was deleted belonged.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that was deleted.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * The unique identifier of the knowledge base for the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * Contains details about the data source.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * The unique identifier of the knowledge base for which to return a list of information.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a data source.
 *
 * @public
 */
export interface DataSourceSummary {
  /**
   * The unique identifier of the knowledge base to which the data source belongs.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * The description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the data source was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * A list of objects, each of which contains information about a data source.
   *
   * @public
   */
  dataSourceSummaries: DataSourceSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * The unique identifier of the knowledge base for the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Specifies a new name for the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies a new description for the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The connection configuration for the data source that you want to update.
   *
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * The data deletion policy for the data source that you want to update.
   *
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * Contains details about server-side encryption of the data source.
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * Contains details about how to ingest the documents in the data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * Contains details about the data source.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base to remove the resource policy from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The expected revision identifier of the resource policy. Use this to prevent conflicts when multiple users update the same policy concurrently.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * The ARN of the knowledge base that the resource policy was removed from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The revision identifier after the resource policy was deleted.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConfigurationRequest {
  /**
   * The unique identifier of the knowledge base that owns the VPC configuration.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the VPC configuration to delete.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConfigurationResponse {
  /**
   * The unique identifier of the VPC configuration being deleted.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;

  /**
   * The current status of the VPC configuration. Immediately after a delete request this is `DELETING`.
   *
   * @public
   */
  status: VpcConfigurationStatus | undefined;
}

/**
 * The configuration of a connection between a condition node and another node.
 *
 * @public
 */
export interface FlowConditionalConnectionConfiguration {
  /**
   * The condition that triggers this connection. For more information about how to write conditions, see the **Condition** node type in the [Node types](https://docs.aws.amazon.com/bedrock/latest/userguide/node-types.html) topic in the Amazon Bedrock User Guide.
   *
   * @public
   */
  condition: string | undefined;
}

/**
 * The configuration of a connection originating from a node that isn't a Condition node.
 *
 * @public
 */
export interface FlowDataConnectionConfiguration {
  /**
   * The name of the output in the source node that the connection begins from.
   *
   * @public
   */
  sourceOutput: string | undefined;

  /**
   * The name of the input in the target node that the connection ends at.
   *
   * @public
   */
  targetInput: string | undefined;
}

/**
 * The configuration of the connection.
 *
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
   * The configuration of a connection originating from a node that isn't a Condition node.
   *
   * @public
   */
  export interface DataMember {
    data: FlowDataConnectionConfiguration;
    conditional?: never;
    $unknown?: never;
  }

  /**
   * The configuration of a connection originating from a Condition node.
   *
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
 * Contains information about a connection between two nodes in the flow.
 *
 * @public
 */
export interface FlowConnection {
  /**
   * Whether the source node that the connection begins from is a condition node (`Conditional`) or not (`Data`).
   *
   * @public
   */
  type: FlowConnectionType | undefined;

  /**
   * A name for the connection that you can reference.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The node that the connection starts at.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The node that the connection ends at.
   *
   * @public
   */
  target: string | undefined;

  /**
   * The configuration of the connection.
   *
   * @public
   */
  configuration?: FlowConnectionConfiguration | undefined;
}

/**
 * Defines a collector node in your flow. This node takes an iteration of inputs and consolidates them into an array in the output. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface CollectorFlowNodeConfiguration {}

/**
 * Defines a condition in the condition node.
 *
 * @public
 */
export interface FlowCondition {
  /**
   * A name for the condition that you can reference.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Defines the condition. You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in [Node types in prompt flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html#flows-nodes).
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * Defines a condition node in your flow. You can specify conditions that determine which node comes next in the flow. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ConditionFlowNodeConfiguration {
  /**
   * An array of conditions. Each member contains the name of a condition and an expression that defines the condition.
   *
   * @public
   */
  conditions: FlowCondition[] | undefined;
}

/**
 * Contains configurations for an inline code node in your flow. Inline code nodes let you write and execute code directly within your flow, enabling data transformations, custom logic, and integrations without needing an external Lambda function.
 *
 * @public
 */
export interface InlineCodeFlowNodeConfiguration {
  /**
   * The code that's executed in your inline code node. The code can access input data from previous nodes in the flow, perform operations on that data, and produce output that can be used by other nodes in your flow.
   *
   * The code must be valid in the programming `language` that you specify.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The programming language used by your inline code node.
   *
   * The code must be valid in the programming `language` that you specify. Currently, only Python 3 (`Python_3`) is supported.
   *
   * @public
   */
  language: SupportedLanguages | undefined;
}

/**
 * Contains configurations for the input flow node for a flow. This node takes the input from flow invocation and passes it to the next node in the data type that you specify.
 *
 * @public
 */
export interface InputFlowNodeConfiguration {}

/**
 * Contains configurations for an iterator node in a flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.
 *
 * The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
 *
 * @public
 */
export interface IteratorFlowNodeConfiguration {}

/**
 * Contains inference configurations related to model inference for a prompt. For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html).
 *
 * @public
 */
export interface PromptModelInferenceConfiguration {
  /**
   * Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The percentage of most-likely candidates that the model considers for the next token.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The maximum number of tokens to return in the response.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * A list of strings that define sequences after which the model will stop generating.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * Contains inference configurations for the prompt.
 *
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
   * Contains inference configurations for a text prompt.
   *
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
 * The performance-related configuration options for the knowledge base retrieval and generation process.
 *
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * The latency optimization setting.
   *
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * Defines a custom prompt template for orchestrating the retrieval and generation process.
 *
 * @public
 */
export interface KnowledgeBasePromptTemplate {
  /**
   * The text of the prompt template.
   *
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * Configures how the knowledge base orchestrates the retrieval and generation process, allowing for customization of prompts, inference parameters, and performance settings.
 *
 * @public
 */
export interface KnowledgeBaseOrchestrationConfiguration {
  /**
   * A custom prompt template for orchestrating the retrieval and generation process.
   *
   * @public
   */
  promptTemplate?: KnowledgeBasePromptTemplate | undefined;

  /**
   * Contains inference configurations for the prompt.
   *
   * @public
   */
  inferenceConfig?: PromptInferenceConfiguration | undefined;

  /**
   * The additional model-specific request parameters as key-value pairs to be included in the request to the foundation model.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * The performance configuration options for the knowledge base retrieval and generation process.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * Specifies a metadata field to include or exclude during the reranking process.
 *
 * @public
 */
export interface FieldForReranking {
  /**
   * The name of the metadata field to include or exclude during reranking.
   *
   * @public
   */
  fieldName: string | undefined;
}

/**
 * Configures the metadata fields to include or exclude during the reranking process when using selective mode.
 *
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
   * Specifies the metadata fields to include in the reranking process.
   *
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * Specifies the metadata fields to exclude from the reranking process.
   *
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
 * Specifies how metadata fields should be handled during the reranking process.
 *
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * The mode for selecting metadata fields for reranking.
   *
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * The configuration for selective metadata field inclusion or exclusion during reranking.
   *
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * Configures the Amazon Bedrock model used for reranking retrieved results.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Bedrock reranker model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Specifies additional model-specific request parameters as key-value pairs that are included in the request to the Amazon Bedrock reranker model.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Configures the Amazon Bedrock reranker model to improve the relevance of retrieved results.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * Specifies the configuration for the Amazon Bedrock reranker model.
   *
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * Specifies the number of results to return after reranking.
   *
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * Specifies how metadata fields should be handled during the reranking process.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * Specifies how retrieved results from a knowledge base are reranked to improve relevance.
 *
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * Specifies the type of reranking model to use. Currently, the only supported value is `BEDROCK_RERANKING_MODEL`.
   *
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * Specifies the configuration for using an Amazon Bedrock reranker model to rerank retrieved results.
   *
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

/**
 * Contains configurations for a knowledge base node in a flow. This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface KnowledgeBaseFlowNodeConfiguration {
  /**
   * The unique identifier of the knowledge base to query.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * Contains configurations for a guardrail to apply during query and response generation for the knowledge base in this configuration.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * The number of results to retrieve from the knowledge base.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * A custom prompt template to use with the knowledge base for generating responses.
   *
   * @public
   */
  promptTemplate?: KnowledgeBasePromptTemplate | undefined;

  /**
   * Contains inference configurations for the prompt.
   *
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * The configuration for reranking the retrieved results from the knowledge base to improve relevance.
   *
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;

  /**
   * The configuration for orchestrating the retrieval and generation process in the knowledge base node.
   *
   * @public
   */
  orchestrationConfiguration?: KnowledgeBaseOrchestrationConfiguration | undefined;
}

/**
 * Contains configurations for a Lambda function node in the flow. You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface LambdaFunctionFlowNodeConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function to invoke.
   *
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * Contains configurations for a Lex node in the flow. You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface LexFlowNodeConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.
   *
   * @public
   */
  botAliasArn: string | undefined;

  /**
   * The Region to invoke the Amazon Lex bot in.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Contains configurations for the controller node of a DoWhile loop in the flow.
 *
 * @public
 */
export interface LoopControllerFlowNodeConfiguration {
  /**
   * Specifies the condition that determines when the flow exits the DoWhile loop. The loop executes until this condition evaluates to true.
   *
   * @public
   */
  continueCondition: FlowCondition | undefined;

  /**
   * Specifies the maximum number of times the DoWhile loop can iterate before the flow exits the loop.
   *
   * @public
   */
  maxIterations?: number | undefined;
}

/**
 * Contains configurations for the input node of a DoWhile loop in the flow.
 *
 * @public
 */
export interface LoopInputFlowNodeConfiguration {}

/**
 * Contains configurations for an output flow node in the flow. You specify the data type expected for the input into the node in the `type` field and how to return the final output in the `expression` field.
 *
 * @public
 */
export interface OutputFlowNodeConfiguration {}

/**
 * Contains information about a variable in the prompt.
 *
 * @public
 */
export interface PromptInputVariable {
  /**
   * The name of the variable.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Indicates where a cache checkpoint is located. All information before this checkpoint is cached to be accessed on subsequent requests.
 *
 * @public
 */
export interface CachePointBlock {
  /**
   * Indicates that the CachePointBlock is of the default type
   *
   * @public
   */
  type: CachePointType | undefined;
}

/**
 * Contains the content for the message you pass to, or receive from a model. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
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
   * The text in the message.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * Creates a cache checkpoint within a message.
   *
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
 * A message input or response from a model. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
 * @public
 */
export interface Message {
  /**
   * The role that the message belongs to.
   *
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * The content in the message.
   *
   * @public
   */
  content: ContentBlock[] | undefined;
}

/**
 * Contains a system prompt to provide context to the model or to describe how it should behave. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
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
   * The text in the system prompt.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * Creates a cache checkpoint within a tool designation
   *
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
 * Defines tools, at least one of which must be requested by the model. No text is generated but the results of tool use are sent back to the model to help generate a response. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
 * @public
 */
export interface AnyToolChoice {}

/**
 * Defines tools. The model automatically decides whether to call a tool or to generate text instead. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
 * @public
 */
export interface AutoToolChoice {}

/**
 * Defines a specific tool that the model must request. No text is generated but the results of tool use are sent back to the model to help generate a response. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
 * @public
 */
export interface SpecificToolChoice {
  /**
   * The name of the tool.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Defines which tools the model should request when invoked. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
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
   * Defines tools. The model automatically decides whether to call a tool or to generate text instead.
   *
   * @public
   */
  export interface AutoMember {
    auto: AutoToolChoice;
    any?: never;
    tool?: never;
    $unknown?: never;
  }

  /**
   * Defines tools, at least one of which must be requested by the model. No text is generated but the results of tool use are sent back to the model to help generate a response.
   *
   * @public
   */
  export interface AnyMember {
    auto?: never;
    any: AnyToolChoice;
    tool?: never;
    $unknown?: never;
  }

  /**
   * Defines a specific tool that the model must request. No text is generated but the results of tool use are sent back to the model to help generate a response.
   *
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
 * The input schema for the tool. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
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
   * A JSON object defining the input schema for the tool.
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
 * Contains a specification for a tool. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
 * @public
 */
export interface ToolSpecification {
  /**
   * The name of the tool.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the tool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input schema for the tool.
   *
   * @public
   */
  inputSchema: ToolInputSchema | undefined;

  /**
   * Whether the tool schema is strictly enforced.
   *
   * @public
   */
  strict?: boolean | undefined;
}

/**
 * Contains configurations for a tool that a model can use when generating a response. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
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
   * The specification for the tool.
   *
   * @public
   */
  export interface ToolSpecMember {
    toolSpec: ToolSpecification;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * Creates a cache checkpoint within a tool designation
   *
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
 * Configuration information for the tools that the model can use when generating a response. For more information, see [Use a tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html).
 *
 * @public
 */
export interface ToolConfiguration {
  /**
   * An array of tools to pass to a model.
   *
   * @public
   */
  tools: Tool[] | undefined;

  /**
   * Defines which tools the model should request when invoked.
   *
   * @public
   */
  toolChoice?: ToolChoice | undefined;
}

/**
 * Contains configurations to use a prompt in a conversational format. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
 * @public
 */
export interface ChatPromptTemplateConfiguration {
  /**
   * Contains messages in the chat for the prompt.
   *
   * @public
   */
  messages: Message[] | undefined;

  /**
   * Contains system prompts to provide context to the model or to describe how it should behave.
   *
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * An array of the variables in the prompt template.
   *
   * @public
   */
  inputVariables?: PromptInputVariable[] | undefined;

  /**
   * Configuration information for the tools that the model can use when generating a response.
   *
   * @public
   */
  toolConfiguration?: ToolConfiguration | undefined;
}

/**
 * Contains configurations for a text prompt template. To include a variable, enclose a word in double curly braces as in `\{\{variable\}\}`.
 *
 * @public
 */
export interface TextPromptTemplateConfiguration {
  /**
   * The message for the prompt.
   *
   * @public
   */
  text: string | undefined;

  /**
   * A cache checkpoint within a template configuration.
   *
   * @public
   */
  cachePoint?: CachePointBlock | undefined;

  /**
   * An array of the variables in the prompt template.
   *
   * @public
   */
  inputVariables?: PromptInputVariable[] | undefined;
}

/**
 * Contains the message for a prompt. For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html).
 *
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
   * Contains configurations for the text in a message for a prompt.
   *
   * @public
   */
  export interface TextMember {
    text: TextPromptTemplateConfiguration;
    chat?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations to use the prompt in a conversational format.
   *
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
 * Contains configurations for a prompt defined inline in the node.
 *
 * @public
 */
export interface PromptFlowNodeInlineConfiguration {
  /**
   * The type of prompt template.
   *
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * Contains a prompt and variables in the prompt that can be replaced with values at runtime.
   *
   * @public
   */
  templateConfiguration: PromptTemplateConfiguration | undefined;

  /**
   * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to run inference with.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Contains inference configurations for the prompt.
   *
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * Additional fields to be included in the model request for the Prompt node.
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * Contains configurations for a prompt from Prompt management to use in a node.
 *
 * @public
 */
export interface PromptFlowNodeResourceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the prompt from Prompt management.
   *
   * @public
   */
  promptArn: string | undefined;
}

/**
 * Contains configurations for a prompt and whether it is from Prompt management or defined inline.
 *
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
   * Contains configurations for a prompt from Prompt management.
   *
   * @public
   */
  export interface ResourceMember {
    resource: PromptFlowNodeResourceConfiguration;
    inline?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a prompt that is defined inline
   *
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
 * Contains configurations for a prompt node in the flow. You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface PromptFlowNodeConfiguration {
  /**
   * Specifies whether the prompt is from Prompt management or defined inline.
   *
   * @public
   */
  sourceConfiguration: PromptFlowNodeSourceConfiguration | undefined;

  /**
   * Contains configurations for a guardrail to apply to the prompt in this node and the response generated from it.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
 *
 * @public
 */
export interface RetrievalFlowNodeS3Configuration {
  /**
   * The name of the Amazon S3 bucket from which to retrieve data.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * Contains configurations for the service to use for retrieving data to return as the output from the node.
 *
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
   * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
   *
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
 * Contains configurations for a Retrieval node in a flow. This node retrieves data from the Amazon S3 location that you specify and returns it as the output.
 *
 * @public
 */
export interface RetrievalFlowNodeConfiguration {
  /**
   * Contains configurations for the service to use for retrieving data to return as the output from the node.
   *
   * @public
   */
  serviceConfiguration: RetrievalFlowNodeServiceConfiguration | undefined;
}

/**
 * Contains configurations for the Amazon S3 location in which to store the input into the node.
 *
 * @public
 */
export interface StorageFlowNodeS3Configuration {
  /**
   * The name of the Amazon S3 bucket in which to store the input into the node.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * Contains configurations for the service to use for storing the input into the node.
 *
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
   * Contains configurations for the Amazon S3 location in which to store the input into the node.
   *
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
 * Contains configurations for a Storage node in a flow. This node stores the input in an Amazon S3 location that you specify.
 *
 * @public
 */
export interface StorageFlowNodeConfiguration {
  /**
   * Contains configurations for the service to use for storing the input into the node.
   *
   * @public
   */
  serviceConfiguration: StorageFlowNodeServiceConfiguration | undefined;
}

/**
 * Contains configurations for an input in an Amazon Bedrock Flows node.
 *
 * @public
 */
export interface FlowNodeInput {
  /**
   * Specifies a name for the input that you can reference.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the data type of the input. If the input doesn't match this type at runtime, a validation error will be thrown.
   *
   * @public
   */
  type: FlowNodeIODataType | undefined;

  /**
   * An expression that formats the input for the node. For an explanation of how to create expressions, see [Expressions in Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html).
   *
   * @public
   */
  expression: string | undefined;

  /**
   * Specifies how input data flows between iterations in a DoWhile loop.
   *
   * - `LoopCondition` - Controls whether the loop continues by evaluating condition expressions against the input data. Use this category to define the condition that determines if the loop should continue.
   * - `ReturnValueToLoopStart` - Defines data to pass back to the start of the loop's next iteration. Use this category for variables that you want to update for each loop iteration.
   * - `ExitLoop` - Defines the value that's available once the loop ends. Use this category to expose loop results to nodes outside the loop.
   *
   * @public
   */
  category?: FlowNodeInputCategory | undefined;
}

/**
 * Contains configurations for an output from a node.
 *
 * @public
 */
export interface FlowNodeOutput {
  /**
   * A name for the output that you can reference.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the output. If the output doesn't match this type at runtime, a validation error will be thrown.
   *
   * @public
   */
  type: FlowNodeIODataType | undefined;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * By default, this value is `false` and deletion is stopped if the resource is in use. If you set it to `true`, the resource will be deleted even if the resource is in use.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Determines how multiple nodes in a flow can run in parallel. Running nodes concurrently can improve your flow's performance.
 *
 * @public
 */
export interface FlowAliasConcurrencyConfiguration {
  /**
   * The type of concurrency to use for parallel node execution. Specify one of the following options:
   *
   * - `Automatic` - Amazon Bedrock determines which nodes can be executed in parallel based on the flow definition and its dependencies.
   * - `Manual` - You specify which nodes can be executed in parallel.
   *
   * @public
   */
  type: ConcurrencyType | undefined;

  /**
   * The maximum number of nodes that can be executed concurrently in the flow.
   *
   * @public
   */
  maxConcurrency?: number | undefined;
}

/**
 * Contains information about a version that the alias maps to.
 *
 * @public
 */
export interface FlowAliasRoutingConfigurationListItem {
  /**
   * The version that the alias maps to.
   *
   * @public
   */
  flowVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowAliasRequest {
  /**
   * A name for the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the version to which to map the alias.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed in parallel.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow for which to create an alias.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Any tags that you want to attach to the alias of the flow. For more information, see [Tagging resources in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFlowAliasResponse {
  /**
   * The name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the version that the alias is mapped to.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed in parallel.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow that the alias belongs to.
   *
   * @public
   */
  flowId: string | undefined;

  /**
   * The unique identifier of the alias.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alias.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the alias was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias of the flow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteFlowAliasRequest {
  /**
   * The unique identifier of the flow that the alias belongs to.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the alias to be deleted.
   *
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowAliasResponse {
  /**
   * The unique identifier of the flow that the alias belongs to.
   *
   * @public
   */
  flowId: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFlowAliasRequest {
  /**
   * The unique identifier of the flow that the alias belongs to.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the alias for which to retrieve information.
   *
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetFlowAliasResponse {
  /**
   * The name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the version that the alias is mapped to.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed in parallel.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow that the alias belongs to.
   *
   * @public
   */
  flowId: string | undefined;

  /**
   * The unique identifier of the alias of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowAliasesRequest {
  /**
   * The unique identifier of the flow for which aliases are being returned.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about an alias of a flow.
 *
 * This data type is used in the following API operations:
 *
 * - [ListFlowAliases response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowAliases.html#API_agent_ListFlowAliases_ResponseSyntax)
 *
 * @public
 */
export interface FlowAliasSummary {
  /**
   * The name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of configurations about the versions that the alias maps to. Currently, you can only specify one.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed concurrently.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowId: string | undefined;

  /**
   * The unique identifier of the alias of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alias.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the alias was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowAliasesResponse {
  /**
   * A list, each member of which contains information about an alias.
   *
   * @public
   */
  flowAliasSummaries: FlowAliasSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowAliasRequest {
  /**
   * The name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the version to which to map the alias.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed in parallel.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the alias.
   *
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowAliasResponse {
  /**
   * The name of the alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the version that the alias is mapped to.
   *
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * The configuration that specifies how nodes in the flow are executed in parallel.
   *
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowId: string | undefined;

  /**
   * The unique identifier of the alias.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the alias was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateFlowVersionRequest {
  /**
   * The unique identifier of the flow that you want to create a version of.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * A description of the version of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowVersionRequest {
  /**
   * The unique identifier of the flow whose version that you want to delete
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The version of the flow that you want to delete.
   *
   * @public
   */
  flowVersion: string | undefined;

  /**
   * By default, this value is `false` and deletion is stopped if the resource is in use. If you set it to `true`, the resource will be deleted even if the resource is in use.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFlowVersionResponse {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version of the flow being deleted.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetFlowVersionRequest {
  /**
   * The unique identifier of the flow for which to get information.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The version of the flow for which to get information.
   *
   * @public
   */
  flowVersion: string | undefined;

  /**
   * Controls the scope of data returned. Set to `METADATA_ONLY` to return only resource metadata. Set to `ALL_DATA` or omit this field to return the full response.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface ListFlowVersionsRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about a version of a flow.
 *
 * This data type is used in the following API operations:
 *
 * - [ListFlowVersions response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowVersions.html#API_agent_ListFlowVersions_ResponseSyntax)
 *
 * @public
 */
export interface FlowVersionSummary {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow that the version belongs to.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The version of the flow.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListFlowVersionsResponse {
  /**
   * A list, each member of which contains information about a flow.
   *
   * @public
   */
  flowVersionSummaries: FlowVersionSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * Controls the scope of data returned. Set to `METADATA_ONLY` to return only resource metadata. Set to `ALL_DATA` or omit this field to return the full response.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * Details about a cyclic connection detected in the flow.
 *
 * @public
 */
export interface CyclicConnectionFlowValidationDetails {
  /**
   * The name of the connection that causes the cycle in the flow.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about duplicate condition expressions found in a condition node.
 *
 * @public
 */
export interface DuplicateConditionExpressionFlowValidationDetails {
  /**
   * The name of the node containing the duplicate condition expressions.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The duplicated condition expression.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * Details about duplicate connections found between two nodes in the flow.
 *
 * @public
 */
export interface DuplicateConnectionsFlowValidationDetails {
  /**
   * The name of the source node where the duplicate connection starts.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The name of the target node where the duplicate connection ends.
   *
   * @public
   */
  target: string | undefined;
}

/**
 * Details about incompatible data types in a connection between nodes.
 *
 * @public
 */
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
  /**
   * The name of the connection with incompatible data types.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about a flow that contains connections that violate loop boundary rules.
 *
 * @public
 */
export interface InvalidLoopBoundaryFlowValidationDetails {
  /**
   * The name of the connection that violates loop boundary rules.
   *
   * @public
   */
  connection: string | undefined;

  /**
   * The source node of the connection that violates DoWhile loop boundary rules.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The target node of the connection that violates DoWhile loop boundary rules.
   *
   * @public
   */
  target: string | undefined;
}

/**
 * Details about a flow that contains an incompatible node in a DoWhile loop.
 *
 * @public
 */
export interface LoopIncompatibleNodeTypeFlowValidationDetails {
  /**
   * The `Loop` container node that contains an incompatible node.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The node type of the incompatible node in the DoWhile loop. Some node types, like a condition node, aren't allowed in a DoWhile loop.
   *
   * @public
   */
  incompatibleNodeType: IncompatibleLoopNodeType | undefined;

  /**
   * The node that's incompatible in the DoWhile loop.
   *
   * @public
   */
  incompatibleNodeName: string | undefined;
}

/**
 * Details about a malformed condition expression in a node.
 *
 * @public
 */
export interface MalformedConditionExpressionFlowValidationDetails {
  /**
   * The name of the node containing the malformed condition expression.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the malformed condition.
   *
   * @public
   */
  condition: string | undefined;

  /**
   * The error message describing why the condition expression is malformed.
   *
   * @public
   */
  cause: string | undefined;
}

/**
 * Details about a malformed input expression in a node.
 *
 * @public
 */
export interface MalformedNodeInputExpressionFlowValidationDetails {
  /**
   * The name of the node containing the malformed input expression.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the input with the malformed expression.
   *
   * @public
   */
  input: string | undefined;

  /**
   * The error message describing why the input expression is malformed.
   *
   * @public
   */
  cause: string | undefined;
}

/**
 * Details about mismatched input data types in a node.
 *
 * @public
 */
export interface MismatchedNodeInputTypeFlowValidationDetails {
  /**
   * The name of the node containing the input with the mismatched data type.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the input with the mismatched data type.
   *
   * @public
   */
  input: string | undefined;

  /**
   * The expected data type for the node input.
   *
   * @public
   */
  expectedType: FlowNodeIODataType | undefined;
}

/**
 * Details about mismatched output data types in a node.
 *
 * @public
 */
export interface MismatchedNodeOutputTypeFlowValidationDetails {
  /**
   * The name of the node containing the output with the mismatched data type.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the output with the mismatched data type.
   *
   * @public
   */
  output: string | undefined;

  /**
   * The expected data type for the node output.
   *
   * @public
   */
  expectedType: FlowNodeIODataType | undefined;
}

/**
 * Details about a connection missing required configuration.
 *
 * @public
 */
export interface MissingConnectionConfigurationFlowValidationDetails {
  /**
   * The name of the connection missing configuration.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about a missing default condition in a conditional node.
 *
 * @public
 */
export interface MissingDefaultConditionFlowValidationDetails {
  /**
   * The name of the node missing the default condition.
   *
   * @public
   */
  node: string | undefined;
}

/**
 * Details about missing ending nodes (such as FlowOutputNode) in the flow.
 *
 * @public
 */
export interface MissingEndingNodesFlowValidationDetails {}

/**
 * Details about a flow that's missing a required `LoopController` node in a DoWhile loop.
 *
 * @public
 */
export interface MissingLoopControllerNodeFlowValidationDetails {
  /**
   * The DoWhile loop in a flow that's missing a required `LoopController` node.
   *
   * @public
   */
  loopNode: string | undefined;
}

/**
 * Details about a flow that's missing a required `LoopInput` node in a DoWhile loop.
 *
 * @public
 */
export interface MissingLoopInputNodeFlowValidationDetails {
  /**
   * The DoWhile loop in a flow that's missing a required `LoopInput` node.
   *
   * @public
   */
  loopNode: string | undefined;
}

/**
 * Details about a node missing a required configuration.
 *
 * @public
 */
export interface MissingNodeConfigurationFlowValidationDetails {
  /**
   * The name of the node missing a required configuration.
   *
   * @public
   */
  node: string | undefined;
}

/**
 * Details about a missing required input in a node.
 *
 * @public
 */
export interface MissingNodeInputFlowValidationDetails {
  /**
   * The name of the node missing the required input.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the missing input.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * Details about a missing required output in a node.
 *
 * @public
 */
export interface MissingNodeOutputFlowValidationDetails {
  /**
   * The name of the node missing the required output.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the missing output.
   *
   * @public
   */
  output: string | undefined;
}

/**
 * Details about missing starting nodes (such as FlowInputNode) in the flow.
 *
 * @public
 */
export interface MissingStartingNodesFlowValidationDetails {}

/**
 * Details about a flow that contains multiple `LoopController` nodes in a DoWhile loop.
 *
 * @public
 */
export interface MultipleLoopControllerNodesFlowValidationDetails {
  /**
   * The DoWhile loop in a flow that contains multiple `LoopController` nodes.
   *
   * @public
   */
  loopNode: string | undefined;
}

/**
 * Details about a flow that contains multiple `LoopInput` nodes in a DoWhile loop.
 *
 * @public
 */
export interface MultipleLoopInputNodesFlowValidationDetails {
  /**
   * The DoWhile loop in a flow that contains multiple `LoopInput` nodes.
   *
   * @public
   */
  loopNode: string | undefined;
}

/**
 * Details about multiple connections to a single node input.
 *
 * @public
 */
export interface MultipleNodeInputConnectionsFlowValidationDetails {
  /**
   * The name of the node containing the input with multiple connections.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the input with multiple connections to it.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * Details about an unfulfilled node input with no valid connections.
 *
 * @public
 */
export interface UnfulfilledNodeInputFlowValidationDetails {
  /**
   * The name of the node containing the unfulfilled input.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the unfulfilled input. An input is unfulfilled if there are no data connections to it.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * Details about an unknown condition for a connection.
 *
 * @public
 */
export interface UnknownConnectionConditionFlowValidationDetails {
  /**
   * The name of the connection with the unknown condition.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unknown source node for a connection.
 *
 * @public
 */
export interface UnknownConnectionSourceFlowValidationDetails {
  /**
   * The name of the connection with the unknown source.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unknown source output for a connection.
 *
 * @public
 */
export interface UnknownConnectionSourceOutputFlowValidationDetails {
  /**
   * The name of the connection with the unknown source output.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unknown target node for a connection.
 *
 * @public
 */
export interface UnknownConnectionTargetFlowValidationDetails {
  /**
   * The name of the connection with the unknown target.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unknown target input for a connection.
 *
 * @public
 */
export interface UnknownConnectionTargetInputFlowValidationDetails {
  /**
   * The name of the connection with the unknown target input.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unknown input for a node.
 *
 * @public
 */
export interface UnknownNodeInputFlowValidationDetails {
  /**
   * The name of the unknown input.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the node with the unknown input.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * Details about an unknown output for a node.
 *
 * @public
 */
export interface UnknownNodeOutputFlowValidationDetails {
  /**
   * The name of the node with the unknown output.
   *
   * @public
   */
  node: string | undefined;

  /**
   * The name of the unknown output.
   *
   * @public
   */
  output: string | undefined;
}

/**
 * Details about an unreachable node in the flow. A node is unreachable when there are no paths to it from any starting node.
 *
 * @public
 */
export interface UnreachableNodeFlowValidationDetails {
  /**
   * The name of the unreachable node.
   *
   * @public
   */
  node: string | undefined;
}

/**
 * Details about unsatisfied conditions for a connection. A condition is unsatisfied if it can never be true, for example two branches of condition node cannot be simultaneously true.
 *
 * @public
 */
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
  /**
   * The name of the connection with unsatisfied conditions.
   *
   * @public
   */
  connection: string | undefined;
}

/**
 * Details about an unspecified validation that doesn't fit other categories.
 *
 * @public
 */
export interface UnspecifiedFlowValidationDetails {}

/**
 * A union type containing various possible validation issues in the flow.
 *
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
   * Details about a cyclic connection in the flow.
   *
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
   * Details about duplicate connections between nodes.
   *
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
   * Details about duplicate condition expressions in a node.
   *
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
   * Details about an unreachable node in the flow.
   *
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
   * Details about an unknown source node for a connection.
   *
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
   * Details about an unknown source output for a connection.
   *
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
   * Details about an unknown target node for a connection.
   *
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
   * Details about an unknown target input for a connection.
   *
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
   * Details about an unknown condition for a connection.
   *
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
   * Details about a malformed condition expression in a node.
   *
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
   * Details about a malformed input expression in a node.
   *
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
   * Details about mismatched input data types in a node.
   *
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
   * Details about mismatched output data types in a node.
   *
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
   * Details about incompatible data types in a connection.
   *
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
   * Details about missing configuration for a connection.
   *
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
   * Details about a missing default condition in a conditional node.
   *
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
   * Details about missing ending nodes in the flow.
   *
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
   * Details about missing configuration for a node.
   *
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
   * Details about a missing required input in a node.
   *
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
   * Details about a missing required output in a node.
   *
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
   * Details about missing starting nodes in the flow.
   *
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
   * Details about multiple connections to a single node input.
   *
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
   * Details about an unfulfilled node input with no valid connections.
   *
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
   * Details about unsatisfied conditions for a connection.
   *
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
   * Details about an unspecified validation.
   *
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
   * Details about an unknown input for a node.
   *
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
   * Details about an unknown output for a node.
   *
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
   * Details about a flow that's missing a required `LoopInput` node in a DoWhile loop.
   *
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
   * Details about a flow that's missing a required `LoopController` node in a DoWhile loop.
   *
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
   * Details about a flow that contains multiple `LoopInput` nodes in a DoWhile loop.
   *
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
   * Details about a flow that contains multiple `LoopController` nodes in a DoWhile loop.
   *
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
   * Details about a flow that includes incompatible node types in a DoWhile loop.
   *
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
   * Details about a flow that includes connections that violate loop boundary rules.
   *
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
 * Contains information about validation of the flow.
 *
 * This data type is used in the following API operations:
 *
 * - [GetFlow response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html#API_agent_GetFlow_ResponseSyntax)
 * - [GetFlowVersion response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowVersion.html#API_agent_GetFlowVersion_ResponseSyntax)
 *
 * @public
 */
export interface FlowValidation {
  /**
   * A message describing the validation error.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The severity of the issue described in the message.
   *
   * @public
   */
  severity: FlowValidationSeverity | undefined;

  /**
   * Specific details about the validation issue encountered in the flow.
   *
   * @public
   */
  details?: FlowValidationDetails | undefined;

  /**
   * The type of validation issue encountered in the flow.
   *
   * @public
   */
  type?: FlowValidationType | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the definition of a flow.
 *
 * @public
 */
export interface FlowSummary {
  /**
   * The name of the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow. The following statuses are possible:
   *
   * - NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the `DRAFT` version won't contain the latest changes for testing. Send a [PrepareFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html) request to package the latest changes into the `DRAFT` version.
   * - Preparing – The flow is being prepared so that the `DRAFT` version contains the latest changes for testing.
   * - Prepared – The flow is prepared and the `DRAFT` version contains the latest changes for testing.
   * - Failed – The last API operation that you invoked on the flow failed. Send a [GetFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html) request and check the error message in the `validations` field.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the flow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The latest version of the flow.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * A list, each member of which contains information about a flow.
   *
   * @public
   */
  flowSummaries: FlowSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PrepareFlowRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PrepareFlowResponse {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the flow. When you submit this request, the status will be `NotPrepared`. If preparation succeeds, the status becomes `Prepared`. If it fails, the status becomes `FAILED`.
   *
   * @public
   */
  status: FlowStatus | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base to retrieve the resource policy for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The ARN of the knowledge base that the resource policy is associated with.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The JSON-formatted resource policy associated with the knowledge base.
   *
   * @public
   */
  policy: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The revision identifier of the resource policy.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcConfigurationRequest {
  /**
   * The unique identifier of the knowledge base that owns the VPC configuration.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the VPC configuration to retrieve.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;
}

/**
 * Contains the details of a VPC configuration, including its connection settings, resolution mode, and current lifecycle status.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The unique identifier of the VPC configuration.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;

  /**
   * The current lifecycle status of the VPC configuration.
   *
   * @public
   */
  status: VpcConfigurationStatus | undefined;

  /**
   * Additional detail about the current status, such as the cause of a `CREATE_FAILED` or `DELETE_FAILED` status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The identifier of the VPC that the knowledge base connects through to reach the resource.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnets that the knowledge base uses to connect to the resource.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The private IPv4 address or DNS name of the resource.
   *
   * @public
   */
  resourceTarget: string | undefined;

  /**
   * The port on which the resource is reached.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The protocol used to connect to the resource.
   *
   * @public
   */
  protocol: VpcProtocol | undefined;

  /**
   * Specifies how the resource target is resolved.
   *
   * @public
   */
  resolutionMode: VpcResolutionMode | undefined;

  /**
   * The HTTP `Host` header value sent when invoking the resource, if configured.
   *
   * @public
   */
  hostHeader?: string | undefined;

  /**
   * The expected TLS server name that the service matches against the Subject Alternative Names on the resource's TLS certificate. Present when `protocol` is `HTTPS`.
   *
   * @public
   */
  tlsServerName?: string | undefined;

  /**
   * The human-readable name of the VPC configuration, if provided.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the VPC configuration, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the VPC configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the VPC configuration was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetVpcConfigurationResponse {
  /**
   * The VPC configuration, including its connection settings, resolution mode, and current lifecycle status.
   *
   * @public
   */
  vpcConfiguration: VpcConfiguration | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * The unique identifier of the knowledge base for the data ingestion job you want to get information on.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source for the data ingestion job you want to get information on.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the data ingestion job you want to get information on.
   *
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * Contains the statistics for the data ingestion job.
 *
 * @public
 */
export interface IngestionJobStatistics {
  /**
   * The total number of source documents that were scanned. Includes new, updated, and unchanged documents.
   *
   * @public
   */
  numberOfDocumentsScanned?: number | undefined;

  /**
   * The total number of metadata files that were scanned. Includes new, updated, and unchanged files.
   *
   * @public
   */
  numberOfMetadataDocumentsScanned?: number | undefined;

  /**
   * The number of new source documents in the data source that were successfully indexed.
   *
   * @public
   */
  numberOfNewDocumentsIndexed?: number | undefined;

  /**
   * The number of modified source documents in the data source that were successfully indexed.
   *
   * @public
   */
  numberOfModifiedDocumentsIndexed?: number | undefined;

  /**
   * The number of metadata files that were updated or deleted.
   *
   * @public
   */
  numberOfMetadataDocumentsModified?: number | undefined;

  /**
   * The number of source documents that were deleted.
   *
   * @public
   */
  numberOfDocumentsDeleted?: number | undefined;

  /**
   * The number of source documents that failed to be ingested.
   *
   * @public
   */
  numberOfDocumentsFailed?: number | undefined;

  /**
   * The number of source documents that were skipped during ingestion.
   *
   * @public
   */
  numberOfDocumentsSkipped?: number | undefined;
}

/**
 * Contains details about a data ingestion job. Data sources are ingested into a knowledge base so that Large Language Models (LLMs) can use your data.
 *
 * This data type is used in the following API operations:
 *
 * - [StartIngestionJob response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html#API_agent_StartIngestionJob_ResponseSyntax)
 * - [GetIngestionJob response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html#API_agent_GetIngestionJob_ResponseSyntax)
 * - [ListIngestionJob response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html#API_agent_ListIngestionJobs_ResponseSyntax)
 *
 * @public
 */
export interface IngestionJob {
  /**
   * The unique identifier of the knowledge for the data ingestion job.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source for the data ingestion job.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the data ingestion job.
   *
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * The description of the data ingestion job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the data ingestion job.
   *
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * Contains statistics about the data ingestion job.
   *
   * @public
   */
  statistics?: IngestionJobStatistics | undefined;

  /**
   * A list of reasons that the data ingestion job failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The time the data ingestion job started.
   *
   * If you stop a data ingestion job, the `startedAt` time is the time the job was started before the job was stopped.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The time the data ingestion job was last updated.
   *
   * If you stop a data ingestion job, the `updatedAt` time is the time the job was stopped.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The time at which all text content in the data ingestion job finished extraction and became available to query.
   *
   * This time isn't returned until text extraction is complete for all the documents in the job.
   *
   * @public
   */
  textReadyAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * Contains details about the data ingestion job.
   *
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * The definition of a filter to filter the data.
 *
 * @public
 */
export interface IngestionJobFilter {
  /**
   * The name of field or attribute to apply the filter.
   *
   * @public
   */
  attribute: IngestionJobFilterAttribute | undefined;

  /**
   * The operation to apply to the field or attribute.
   *
   * @public
   */
  operator: IngestionJobFilterOperator | undefined;

  /**
   * A list of values that belong to the field or attribute.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * The parameters of sorting the data.
 *
 * @public
 */
export interface IngestionJobSortBy {
  /**
   * The name of field or attribute to apply sorting of data.
   *
   * @public
   */
  attribute: IngestionJobSortByAttribute | undefined;

  /**
   * The order for sorting the data.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * The unique identifier of the knowledge base for the list of data ingestion jobs.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source for the list of data ingestion jobs.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Contains information about the filters for filtering the data.
   *
   * @public
   */
  filters?: IngestionJobFilter[] | undefined;

  /**
   * Contains details about how to sort the data.
   *
   * @public
   */
  sortBy?: IngestionJobSortBy | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a data ingestion job.
 *
 * @public
 */
export interface IngestionJobSummary {
  /**
   * The unique identifier of the knowledge base for the data ingestion job.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source for the data ingestion job.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the data ingestion job.
   *
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * The description of the data ingestion job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the data ingestion job.
   *
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * The time the data ingestion job started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The time the data ingestion job was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The time at which all text content in the data ingestion job finished extraction and became available to query.
   *
   * This time isn't returned until text extraction is complete for all the documents in the job.
   *
   * @public
   */
  textReadyAt?: Date | undefined;

  /**
   * Contains statistics for the data ingestion job.
   *
   * @public
   */
  statistics?: IngestionJobStatistics | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * A list of data ingestion jobs with information about each job.
   *
   * @public
   */
  ingestionJobSummaries: IngestionJobSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionJobRequest {
  /**
   * The unique identifier of the knowledge base for the data ingestion job.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source you want to ingest into your knowledge base.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A description of the data ingestion job.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionJobResponse {
  /**
   * Contains information about the data ingestion job.
   *
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * @public
 */
export interface StopIngestionJobRequest {
  /**
   * The unique identifier of the knowledge base for the data ingestion job you want to stop.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source for the data ingestion job you want to stop.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the data ingestion job you want to stop.
   *
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * @public
 */
export interface StopIngestionJobResponse {
  /**
   * Contains information about the stopped data ingestion job.
   *
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * Contains information about the identifier of the document to ingest into a custom data source.
 *
 * @public
 */
export interface CustomDocumentIdentifier {
  /**
   * The identifier of the document to ingest into a custom data source.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains information that identifies the document.
 *
 * @public
 */
export interface DocumentIdentifier {
  /**
   * The type of data source connected to the knowledge base that contains the document.
   *
   * @public
   */
  dataSourceType: ContentDataSourceType | undefined;

  /**
   * Contains information that identifies the document in an S3 data source.
   *
   * @public
   */
  s3?: S3Location | undefined;

  /**
   * Contains information that identifies the document in a custom data source.
   *
   * @public
   */
  custom?: CustomDocumentIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseDocumentsRequest {
  /**
   * The unique identifier of the knowledge base that is connected to the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the documents.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of objects, each of which contains information to identify a document to delete.
   *
   * @public
   */
  documentIdentifiers: DocumentIdentifier[] | undefined;
}

/**
 * Contains the details for a document that was ingested or deleted.
 *
 * @public
 */
export interface KnowledgeBaseDocumentDetail {
  /**
   * The identifier of the knowledge base that the document was ingested into or deleted from.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the data source connected to the knowledge base that the document was ingested into or deleted from.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The ingestion status of the document. The following statuses are possible:
   *
   * - STARTING – You submitted the ingestion job containing the document.
   * - PENDING – The document is waiting to be ingested.
   * - IN_PROGRESS – The document is being ingested.
   * - INDEXED – The document was successfully indexed.
   * - PARTIALLY_INDEXED – The document was partially indexed.
   * - METADATA_PARTIALLY_INDEXED – You submitted metadata for an existing document and it was partially indexed.
   * - METADATA_UPDATE_FAILED – You submitted a metadata update for an existing document but it failed.
   * - FAILED – The document failed to be ingested.
   * - NOT_FOUND – The document wasn't found.
   * - IGNORED – The document was ignored during ingestion.
   * - DELETING – You submitted the delete job containing the document.
   * - DELETE_IN_PROGRESS – The document is being deleted.
   *
   * @public
   */
  status: DocumentStatus | undefined;

  /**
   * Contains information that identifies the document.
   *
   * @public
   */
  identifier: DocumentIdentifier | undefined;

  /**
   * The reason for the status. Appears alongside the status `IGNORED`.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The date and time at which the document was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseDocumentsResponse {
  /**
   * A list of objects, each of which contains information about the documents that were deleted.
   *
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsRequest {
  /**
   * The unique identifier of the knowledge base that is connected to the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the documents.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * A list of objects, each of which contains information to identify a document for which to retrieve information.
   *
   * @public
   */
  documentIdentifiers: DocumentIdentifier[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsResponse {
  /**
   * A list of objects, each of which contains information about the documents that were retrieved.
   *
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * Contains information about content defined inline in bytes.
 *
 * @public
 */
export interface ByteContentDoc {
  /**
   * The MIME type of the content. For a list of MIME types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). The following MIME types are supported:
   *
   * - text/plain
   * - text/html
   * - text/csv
   * - text/vtt
   * - message/rfc822
   * - application/xhtml+xml
   * - application/pdf
   * - application/msword
   * - application/vnd.ms-word.document.macroenabled.12
   * - application/vnd.ms-word.template.macroenabled.12
   * - application/vnd.ms-excel
   * - application/vnd.ms-excel.addin.macroenabled.12
   * - application/vnd.ms-excel.sheet.macroenabled.12
   * - application/vnd.ms-excel.template.macroenabled.12
   * - application/vnd.ms-excel.sheet.binary.macroenabled.12
   * - application/vnd.ms-spreadsheetml
   * - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
   * - application/vnd.openxmlformats-officedocument.spreadsheetml.template
   * - application/vnd.openxmlformats-officedocument.wordprocessingml.document
   * - application/vnd.openxmlformats-officedocument.wordprocessingml.template
   *
   * @public
   */
  mimeType: string | undefined;

  /**
   * The base64-encoded string of the content.
   *
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * Contains information about content defined inline in text.
 *
 * @public
 */
export interface TextContentDoc {
  /**
   * The text of the content.
   *
   * @public
   */
  data: string | undefined;
}

/**
 * Contains information about content defined inline to ingest into a data source. Choose a `type` and include the field that corresponds to it.
 *
 * @public
 */
export interface InlineContent {
  /**
   * The type of inline content to define.
   *
   * @public
   */
  type: InlineContentType | undefined;

  /**
   * Contains information about content defined inline in bytes.
   *
   * @public
   */
  byteContent?: ByteContentDoc | undefined;

  /**
   * Contains information about content defined inline in text.
   *
   * @public
   */
  textContent?: TextContentDoc | undefined;
}

/**
 * Contains information about the Amazon S3 location of the file containing the content to ingest into a knowledge base connected to a custom data source.
 *
 * @public
 */
export interface CustomS3Location {
  /**
   * The S3 URI of the file containing the content to ingest.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the S3 bucket containing the content to ingest.
   *
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * Contains information about the content to ingest into a knowledge base connected to a custom data source. Choose a `sourceType` and include the field that corresponds to it.
 *
 * @public
 */
export interface CustomContent {
  /**
   * A unique identifier for the document.
   *
   * @public
   */
  customDocumentIdentifier: CustomDocumentIdentifier | undefined;

  /**
   * The source of the data to ingest.
   *
   * @public
   */
  sourceType: CustomSourceType | undefined;

  /**
   * Contains information about the Amazon S3 location of the file from which to ingest data.
   *
   * @public
   */
  s3Location?: CustomS3Location | undefined;

  /**
   * Contains information about content defined inline to ingest into a knowledge base.
   *
   * @public
   */
  inlineContent?: InlineContent | undefined;
}

/**
 * Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source.
 *
 * @public
 */
export interface S3Content {
  /**
   * The S3 location of the file containing the content to ingest.
   *
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * Contains information about the content of a document. Choose a `dataSourceType` and include the field that corresponds to it.
 *
 * @public
 */
export interface DocumentContent {
  /**
   * The type of data source that is connected to the knowledge base to which to ingest this document.
   *
   * @public
   */
  dataSourceType: ContentDataSourceType | undefined;

  /**
   * Contains information about the content to ingest into a knowledge base connected to a custom data source.
   *
   * @public
   */
  custom?: CustomContent | undefined;

  /**
   * Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source
   *
   * @public
   */
  s3?: S3Content | undefined;
}

/**
 * An access control entry specifying a principal and their access level.
 *
 * @public
 */
export interface DocumentAccessControlEntry {
  /**
   * The user identifier.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of principal.
   *
   * @public
   */
  type: AccessControlPrincipalType | undefined;

  /**
   * Whether to allow or deny access.
   *
   * @public
   */
  access: AccessControlAccess | undefined;
}

/**
 * Contains the value of the metadata attribute. Choose a `type` and include the field that corresponds to it.
 *
 * @public
 */
export interface MetadataAttributeValue {
  /**
   * The type of the metadata attribute.
   *
   * @public
   */
  type: MetadataValueType | undefined;

  /**
   * The value of the numeric metadata attribute.
   *
   * @public
   */
  numberValue?: number | undefined;

  /**
   * The value of the Boolean metadata attribute.
   *
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * The value of the string metadata attribute.
   *
   * @public
   */
  stringValue?: string | undefined;

  /**
   * An array of strings that define the value of the metadata attribute.
   *
   * @public
   */
  stringListValue?: string[] | undefined;
}

/**
 * Contains information about a metadata attribute.
 *
 * @public
 */
export interface MetadataAttribute {
  /**
   * The key of the metadata attribute.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Contains the value of the metadata attribute.
   *
   * @public
   */
  value: MetadataAttributeValue | undefined;
}

/**
 * Contains information about the metadata associate with the content to ingest into a knowledge base. Choose a `type` and include the field that corresponds to it.
 *
 * @public
 */
export interface DocumentMetadata {
  /**
   * The type of the source source from which to add metadata.
   *
   * @public
   */
  type: MetadataSourceType | undefined;

  /**
   * An array of objects, each of which defines a metadata attribute to associate with the content to ingest. You define the attributes inline.
   *
   * @public
   */
  inlineAttributes?: MetadataAttribute[] | undefined;

  /**
   * The Amazon S3 location of the file containing metadata to associate with the content to ingest.
   *
   * @public
   */
  s3Location?: CustomS3Location | undefined;

  /**
   * Access control list for the document. Used when metadata type is IN_LINE_ATTRIBUTE.
   *
   * @public
   */
  accessControlList?: DocumentAccessControlEntry[] | undefined;
}

/**
 * Contains information about a document to ingest into a knowledge base and metadata to associate with it.
 *
 * @public
 */
export interface KnowledgeBaseDocument {
  /**
   * Contains the metadata to associate with the document.
   *
   * @public
   */
  metadata?: DocumentMetadata | undefined;

  /**
   * Contains the content of the document.
   *
   * @public
   */
  content: DocumentContent | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsRequest {
  /**
   * The unique identifier of the knowledge base to ingest the documents into.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source connected to the knowledge base that you're adding documents to.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of objects, each of which contains information about the documents to add.
   *
   * @public
   */
  documents: KnowledgeBaseDocument[] | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsResponse {
  /**
   * A list of objects, each of which contains information about the documents that were ingested.
   *
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}
