// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActionGroupSignature,
  ActionInvocationType,
  AgenticRetrieveMemoryMetadataFilterOperator,
  AgenticRetrieveMemoryPersistenceMode,
  AgenticRetrieveRerankingConfigurationType,
  AgenticRetrieveRerankingModelType,
  AgenticRetrieveStatus,
  AgenticRetrieveStep,
  AgenticRetrieveType,
  AttributeType,
  ConfirmationState,
  ConversationRole,
  CreationMode,
  CustomControlMethod,
  DocumentAclMemberRelation,
  DocumentAclMembershipType,
  DocumentOutputFormat,
  ExecutionType,
  ExternalSourceType,
  FileSourceType,
  FileUseCase,
  FlowCompletionReason,
  FlowControlNodeType,
  FlowErrorCode,
  FlowExecutionErrorType,
  FlowExecutionEventType,
  FlowExecutionStatus,
  FlowNodeInputCategory,
  FlowNodeIODataType,
  FoundationModelConfigurationType,
  FoundationModelType,
  GeneratedQueryType,
  GuardrailAction,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailManagedWordType,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailTopicPolicyAction,
  GuardrailTopicType,
  GuardrailWordPolicyAction,
  ImageInputFormat,
  InputQueryType,
  InvocationType,
  ManagedSearchRerankingConfigurationType,
  MemoryType,
  NodeErrorCode,
  NodeType,
  ParameterType,
  PayloadType,
  PerformanceConfigLatency,
  PromptState,
  PromptType,
  QueryTransformationMode,
  QueryTransformationType,
  RelayConversationHistory,
  RequireConfirmation,
  RerankDocumentType,
  RerankingConfigurationType,
  RerankingMetadataSelectionMode,
  RerankQueryContentType,
  RerankSourceType,
  ResponseState,
  RetrievalResultContentColumnType,
  RetrievalResultContentType,
  RetrievalResultLocationType,
  Source,
  TextToSqlConfigurationType,
  Type,
  VectorSearchRerankingConfigurationType,
} from "./enums";
import type {
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InternalServerException,
  ModelNotReadyException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";

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
   * To return the action group invocation results directly in the `InvokeInlineAgent` response, specify `RETURN_CONTROL`.
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
 * A parameter for the API request or function.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the parameter.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The parameters in the API request body.
 *
 * @public
 */
export interface RequestBody {
  /**
   * The content in the request body.
   *
   * @public
   */
  content?: Record<string, Parameter[]> | undefined;
}

/**
 * Contains information about the action group being invoked. For more information about the possible structures, see the InvocationInput tab in [OrchestrationTrace](https://docs.aws.amazon.com/bedrock/latest/userguide/trace-orchestration.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @public
 */
export interface ActionGroupInvocationInput {
  /**
   * The name of the action group.
   *
   * @public
   */
  actionGroupName?: string | undefined;

  /**
   * The API method being used, based off the action group.
   *
   * @public
   */
  verb?: string | undefined;

  /**
   * The path to the API to call, based off the action group.
   *
   * @public
   */
  apiPath?: string | undefined;

  /**
   * The parameters in the Lambda input event.
   *
   * @public
   */
  parameters?: Parameter[] | undefined;

  /**
   * The parameters in the request body for the Lambda input event.
   *
   * @public
   */
  requestBody?: RequestBody | undefined;

  /**
   * The function in the action group to call.
   *
   * @public
   */
  function?: string | undefined;

  /**
   * How fulfillment of the action is handled. For more information, see [Handling fulfillment of the action](https://docs.aws.amazon.com/bedrock/latest/userguide/action-handle.html).
   *
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * The unique identifier of the invocation. Only returned if the `executionType` is `RETURN_CONTROL`.
   *
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * Contains information of the usage of the foundation model.
 *
 * @public
 */
export interface Usage {
  /**
   * Contains information about the input tokens from the foundation model usage.
   *
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * Contains information about the output tokens from the foundation model usage.
   *
   * @public
   */
  outputTokens?: number | undefined;
}

/**
 * Provides information about the execution process for different types of invocations, such as model invocation, knowledge base invocation, agent collaborator invocation, guardrail invocation, and code interpreter Invocation.
 *
 * @public
 */
export interface Metadata {
  /**
   * In the final response, `startTime` is the start time of the agent invocation operation.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * In the final response, `endTime` is the end time of the agent invocation operation.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The total execution time for the specific invocation being processed (model, knowledge base, guardrail, agent collaborator, or code interpreter). It represents how long the individual invocation took.
   *
   * @public
   */
  totalTimeMs?: number | undefined;

  /**
   * The total time it took for the agent to complete execution. This field is only set for the final response.
   *
   * @public
   */
  operationTotalTimeMs?: number | undefined;

  /**
   * A unique identifier associated with the downstream invocation. This ID can be used for tracing, debugging, and identifying specific invocations in customer logs or systems.
   *
   * @public
   */
  clientRequestId?: string | undefined;

  /**
   * Specific to model invocation and contains details about the usage of a foundation model.
   *
   * @public
   */
  usage?: Usage | undefined;
}

/**
 * Contains the JSON-formatted string returned by the API invoked by the action group.
 *
 * @public
 */
export interface ActionGroupInvocationOutput {
  /**
   * The JSON-formatted string returned by the API invoked by the action group.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Contains information about the action group output.
   *
   * @public
   */
  metadata?: Metadata | undefined;
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
 * Contains details about the OpenAPI schema for the action group. For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html). You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the s3 field.
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
   * Contains details about the S3 object containing the OpenAPI schema for the action group.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * The JSON or YAML-formatted payload defining the OpenAPI schema for the action group.
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
  type: ParameterType | undefined;

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
 * @public
 */
export interface FunctionDefinition {
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
 * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
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
    functions: FunctionDefinition[];
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
    functions: (value: FunctionDefinition[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains details of the inline agent's action group.
 *
 * @public
 */
export interface AgentActionGroup {
  /**
   * The name of the action group.
   *
   * @public
   */
  actionGroupName: string | undefined;

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
   *   > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html).
   *
   *   - `ANTHROPIC.Computer` - Gives the agent permission to use the mouse and keyboard and take screenshots.
   *   - `ANTHROPIC.TextEditor` - Gives the agent permission to view, create and edit files.
   *   - `ANTHROPIC.Bash` - Gives the agent permission to run commands in a bash shell.
   *
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

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
   * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
   *
   * @public
   */
  functionSchema?: FunctionSchema | undefined;

  /**
   * The configuration settings for a computer use action.
   *
   * > **Important:** Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html).
   *
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;
}

/**
 * Details about the source of an input image in the result from a function in the action group invocation.
 *
 * @public
 */
export type ImageInputSource =
  | ImageInputSource.BytesMember
  | ImageInputSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageInputSource {
  /**
   * The raw image bytes for the image. If you use an Amazon Web Services SDK, you don't need to encode the image bytes in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about an image in the result from a function in the action group invocation. You can specify images only when the function is a computer use action. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html).
 *
 * @public
 */
export interface ImageInput {
  /**
   * The type of image in the result.
   *
   * @public
   */
  format: ImageInputFormat | undefined;

  /**
   * The source of the image in the result.
   *
   * @public
   */
  source: ImageInputSource | undefined;
}

/**
 * Contains the body of the API response.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControlInvocationResults` field of the [InvokeAgent request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax)
 *
 * @public
 */
export interface ContentBody {
  /**
   * The body of the API response.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * Lists details, including format and source, for the image in the response from the function call. You can specify only one image and the function in the `returnControlInvocationResults` must be a computer use action. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html).
   *
   * @public
   */
  images?: ImageInput[] | undefined;
}

/**
 * Contains information about the API operation that was called from the action group and the response body that was returned.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControlInvocationResults` of the [InvokeAgent request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax)
 *
 * @public
 */
export interface ApiResult {
  /**
   * The action group that the API operation belongs to.
   *
   * @public
   */
  actionGroup: string | undefined;

  /**
   * The HTTP method for the API operation.
   *
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * The path to the API operation.
   *
   * @public
   */
  apiPath?: string | undefined;

  /**
   * Controls the API operations or functions to invoke based on the user confirmation.
   *
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt
   *
   * @public
   */
  responseState?: ResponseState | undefined;

  /**
   * http status code from API execution response (for example: 200, 400, 500).
   *
   * @public
   */
  httpStatusCode?: number | undefined;

  /**
   * The response body from the API operation. The key of the object is the content type (currently, only `TEXT` is supported). The response may be returned directly or from the Lambda function.
   *
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * The agent's ID.
   *
   * @public
   */
  agentId?: string | undefined;
}

/**
 * Contains information about the function that was called from the action group and the response that was returned.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControlInvocationResults` of the [InvokeAgent request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax)
 *
 * @public
 */
export interface FunctionResult {
  /**
   * The action group that the function belongs to.
   *
   * @public
   */
  actionGroup: string | undefined;

  /**
   * Contains the user confirmation information about the function that was called.
   *
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * The name of the function that was called.
   *
   * @public
   */
  function?: string | undefined;

  /**
   * The response from the function call using the parameters. The response might be returned directly or from the Lambda function. Specify `TEXT` or `IMAGES`. The key of the object is the content type. You can only specify one type. If you specify `IMAGES`, you can specify only one image. You can specify images only when the function in the `returnControlInvocationResults` is a computer use action. For more information, see [Configure an Amazon Bedrock Agent to complete tasks with computer use tools](https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html).
   *
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt
   *
   * @public
   */
  responseState?: ResponseState | undefined;

  /**
   * The agent's ID.
   *
   * @public
   */
  agentId?: string | undefined;
}

/**
 * A result from the invocation of an action. For more information, see [Return control to the agent developer](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html) and [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax)
 *
 * @public
 */
export type InvocationResultMember =
  | InvocationResultMember.ApiResultMember
  | InvocationResultMember.FunctionResultMember
  | InvocationResultMember.$UnknownMember;

/**
 * @public
 */
export namespace InvocationResultMember {
  /**
   * The result from the API response from the action group invocation.
   *
   * @public
   */
  export interface ApiResultMember {
    apiResult: ApiResult;
    functionResult?: never;
    $unknown?: never;
  }

  /**
   * The result from the function from the action group invocation.
   *
   * @public
   */
  export interface FunctionResultMember {
    apiResult?: never;
    functionResult: FunctionResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    apiResult?: never;
    functionResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    apiResult: (value: ApiResult) => T;
    functionResult: (value: FunctionResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An action invocation result.
 *
 * @public
 */
export interface ReturnControlResults {
  /**
   * The action's invocation ID.
   *
   * @public
   */
  invocationId?: string | undefined;

  /**
   * The action invocation result.
   *
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;
}

/**
 * Input for an agent collaborator. The input can be text or an action invocation result.
 *
 * @public
 */
export interface AgentCollaboratorInputPayload {
  /**
   * The input type.
   *
   * @public
   */
  type?: PayloadType | undefined;

  /**
   * Input text.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * An action invocation result.
   *
   * @public
   */
  returnControlResults?: ReturnControlResults | undefined;
}

/**
 * An agent collaborator invocation input.
 *
 * @public
 */
export interface AgentCollaboratorInvocationInput {
  /**
   * The collaborator's name.
   *
   * @public
   */
  agentCollaboratorName?: string | undefined;

  /**
   * The collaborator's alias ARN.
   *
   * @public
   */
  agentCollaboratorAliasArn?: string | undefined;

  /**
   * Text or action invocation result input for the collaborator.
   *
   * @public
   */
  input?: AgentCollaboratorInputPayload | undefined;
}

/**
 * Information about a parameter to provide to the API request.
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface ApiParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type for the parameter.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the parameters in the request body.
 *
 * @public
 */
export interface PropertyParameters {
  /**
   * A list of parameters in the request body.
   *
   * @public
   */
  properties?: Parameter[] | undefined;
}

/**
 * The request body to provide for the API request, as the agent elicited from the user.
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface ApiRequestBody {
  /**
   * The content of the request body. The key of the object in this field is a media type defining the format of the request body.
   *
   * @public
   */
  content?: Record<string, PropertyParameters> | undefined;
}

/**
 * Contains information about the API operation that the agent predicts should be called.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControl` field of the [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface ApiInvocationInput {
  /**
   * The action group that the API operation belongs to.
   *
   * @public
   */
  actionGroup: string | undefined;

  /**
   * The HTTP method of the API operation.
   *
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * The path to the API operation.
   *
   * @public
   */
  apiPath?: string | undefined;

  /**
   * The parameters to provide for the API request, as the agent elicited from the user.
   *
   * @public
   */
  parameters?: ApiParameter[] | undefined;

  /**
   * The request body to provide for the API request, as the agent elicited from the user.
   *
   * @public
   */
  requestBody?: ApiRequestBody | undefined;

  /**
   * Contains information about the API operation to invoke.
   *
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;

  /**
   * The agent's ID.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * The agent collaborator's name.
   *
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * Contains information about a parameter of the function.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControl` field of the [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface FunctionParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the parameter.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains information about the function that the agent predicts should be called.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControl` field of the [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface FunctionInvocationInput {
  /**
   * The action group that the function belongs to.
   *
   * @public
   */
  actionGroup: string | undefined;

  /**
   * A list of parameters of the function.
   *
   * @public
   */
  parameters?: FunctionParameter[] | undefined;

  /**
   * The name of the function.
   *
   * @public
   */
  function?: string | undefined;

  /**
   * Contains information about the function to invoke,
   *
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;

  /**
   * The agent's ID.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * The collaborator's name.
   *
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * Contains details about the API operation or function that the agent predicts should be called.
 *
 * This data type is used in the following API operations:
 *
 * - In the `returnControl` field of the [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export type InvocationInputMember =
  | InvocationInputMember.ApiInvocationInputMember
  | InvocationInputMember.FunctionInvocationInputMember
  | InvocationInputMember.$UnknownMember;

/**
 * @public
 */
export namespace InvocationInputMember {
  /**
   * Contains information about the API operation that the agent predicts should be called.
   *
   * @public
   */
  export interface ApiInvocationInputMember {
    apiInvocationInput: ApiInvocationInput;
    functionInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the function that the agent predicts should be called.
   *
   * @public
   */
  export interface FunctionInvocationInputMember {
    apiInvocationInput?: never;
    functionInvocationInput: FunctionInvocationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    apiInvocationInput?: never;
    functionInvocationInput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    apiInvocationInput: (value: ApiInvocationInput) => T;
    functionInvocationInput: (value: FunctionInvocationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information to return from the action group that the agent has predicted to invoke.
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax)
 *
 * @public
 */
export interface ReturnControlPayload {
  /**
   * A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.
   *
   * @public
   */
  invocationInputs?: InvocationInputMember[] | undefined;

  /**
   * The identifier of the action group invocation.
   *
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * Output from an agent collaborator. The output can be text or an action invocation result.
 *
 * @public
 */
export interface AgentCollaboratorOutputPayload {
  /**
   * The type of output.
   *
   * @public
   */
  type?: PayloadType | undefined;

  /**
   * Text output.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * An action invocation result.
   *
   * @public
   */
  returnControlPayload?: ReturnControlPayload | undefined;
}

/**
 * Output from an agent collaborator.
 *
 * @public
 */
export interface AgentCollaboratorInvocationOutput {
  /**
   * The output's agent collaborator name.
   *
   * @public
   */
  agentCollaboratorName?: string | undefined;

  /**
   * The output's agent collaborator alias ARN.
   *
   * @public
   */
  agentCollaboratorAliasArn?: string | undefined;

  /**
   * The output's output.
   *
   * @public
   */
  output?: AgentCollaboratorOutputPayload | undefined;

  /**
   * Contains information about the output from the agent collaborator.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * A source retriever that produced retrieval results.
 *
 * @public
 */
export interface AgenticRetrieveSourceRetriever {
  /**
   * The unique identifier of the source retriever.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * A document that a code execution action reads.
 *
 * @public
 */
export interface AgenticRetrieveCodeExecutionDocument {
  /**
   * The identifier of the document.
   *
   * @public
   */
  documentId?: string | undefined;

  /**
   * The source retriever associated with the document.
   *
   * @public
   */
  sourceRetriever?: AgenticRetrieveSourceRetriever | undefined;
}

/**
 * The details of code that the agent chose to run in an isolated sandbox. The record includes the documents that the code reads. The corresponding CodeExecution step reports the outcome.
 *
 * @public
 */
export interface AgenticRetrieveCodeExecutionDetails {
  /**
   * The documents that the code reads. This field is present when the code reads documents.
   *
   * @public
   */
  documents?: AgenticRetrieveCodeExecutionDocument[] | undefined;
}

/**
 * Details of a full document expansion action.
 *
 * @public
 */
export interface AgenticRetrieveFullDocExpansionDetails {
  /**
   * The identifier of the document to expand.
   *
   * @public
   */
  documentId?: string | undefined;

  /**
   * The source retriever associated with the document.
   *
   * @public
   */
  sourceRetriever?: AgenticRetrieveSourceRetriever | undefined;
}

/**
 * The content of an agentic retrieval message.
 *
 * @public
 */
export interface AgenticRetrieveMessageContent {
  /**
   * The text content of the message.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * A long-term memory retrieval that the agent chose to perform. The record reports the query and the namespace. The corresponding Retrieval step reports the results.
 *
 * @public
 */
export interface AgenticRetrieveMemoryRetrieveDetails {
  /**
   * The query that the agent composed.
   *
   * @public
   */
  inputQuery: AgenticRetrieveMessageContent | undefined;

  /**
   * The identifier of the AgentCore Memory resource retrieved from.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The namespace prefix retrieved from, as supplied in the request. This field is present when the request specified namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The parent namespace retrieved from hierarchically, as supplied in the request. This field is present when the request specified namespacePath.
   *
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * The extraction strategy that restricted retrieval, if the request specified one.
   *
   * @public
   */
  strategyId?: string | undefined;
}

/**
 * Details of a retrieve action including the query and target retrievers.
 *
 * @public
 */
export interface AgenticRetrieveActionDetails {
  /**
   * The input query used for retrieval.
   *
   * @public
   */
  inputQuery: AgenticRetrieveMessageContent | undefined;

  /**
   * The list of source retrievers targeted by this action.
   *
   * @public
   */
  sourceRetrievers: AgenticRetrieveSourceRetriever[] | undefined;
}

/**
 * An action taken during agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrieveAction {
  /**
   * Details of the retrieve action.
   *
   * @public
   */
  retrieve?: AgenticRetrieveActionDetails | undefined;

  /**
   * Details of a full document expansion action.
   *
   * @public
   */
  fullDocumentExpansion?: AgenticRetrieveFullDocExpansionDetails | undefined;

  /**
   * The details of a long-term memory retrieval that the agent chose to perform.
   *
   * @public
   */
  memoryRetrieve?: AgenticRetrieveMemoryRetrieveDetails | undefined;

  /**
   * The details of code that the agent chose to run.
   *
   * @public
   */
  codeExecution?: AgenticRetrieveCodeExecutionDetails | undefined;
}

/**
 * The retrieval instruction, identified by its ID and version, that was applied to the request.
 *
 * @public
 */
export interface AgenticRetrieveAppliedInstruction {
  /**
   * The identifier of the retrieval instruction applied.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version that was applied: a version number, or DRAFT. The service reports this version whenever it reports appliedInstruction, including DRAFT when the request did not specify a version.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Configuration for a Bedrock guardrail applied during agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrieveBedrockGuardrailConfiguration {
  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The version of the guardrail to use.
   *
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * Model configuration for a Bedrock reranking model.
 *
 * @public
 */
export interface AgenticRetrieveBedrockRerankingModelConfiguration {
  /**
   * The ARN of the Bedrock reranking model.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Configuration for a Bedrock reranking model.
 *
 * @public
 */
export interface AgenticRetrieveBedrockRerankingConfiguration {
  /**
   * The model configuration containing the model ARN.
   *
   * @public
   */
  modelConfiguration: AgenticRetrieveBedrockRerankingModelConfiguration | undefined;
}

/**
 * A reference to a specific result item.
 *
 * @public
 */
export interface AgenticRetrieveCitationReference {
  /**
   * Index into the results array on the same event.
   *
   * @public
   */
  resultIndex: number | undefined;
}

/**
 * A citation mapping a span of the generated answer to supporting results.
 *
 * @public
 */
export interface AgenticRetrieveCitation {
  /**
   * Character offset start in the answer text.
   *
   * @public
   */
  startIndex: number | undefined;

  /**
   * Character offset end (exclusive) in the answer text.
   *
   * @public
   */
  endIndex: number | undefined;

  /**
   * References to results that support this span.
   *
   * @public
   */
  references: AgenticRetrieveCitationReference[] | undefined;
}

/**
 * Model configuration for a Bedrock foundation model.
 *
 * @public
 */
export interface BedrockFoundationModelModelConfiguration {
  /**
   * The ARN of the Bedrock foundation model.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Configuration for a Bedrock foundation model.
 *
 * @public
 */
export interface BedrockFoundationModelConfiguration {
  /**
   * The model configuration containing the model ARN.
   *
   * @public
   */
  modelConfiguration: BedrockFoundationModelModelConfiguration | undefined;
}

/**
 * Model configuration for a Mantle foundation model.
 *
 * @public
 */
export interface MantleFoundationModelModelConfiguration {
  /**
   * The ARN of the Mantle foundation model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The Amazon Bedrock project ID used for billing and usage attribution. If you don't specify a value, the service uses the default project.
   *
   * @public
   */
  projectId?: string | undefined;
}

/**
 * Configuration for a Mantle foundation model.
 *
 * @public
 */
export interface MantleFoundationModelConfiguration {
  /**
   * The model configuration containing the model ARN and project ID.
   *
   * @public
   */
  modelConfiguration: MantleFoundationModelModelConfiguration | undefined;
}

/**
 * Configuration for the foundation model.
 *
 * @public
 */
export interface FoundationModelConfiguration {
  /**
   * The type of foundation model configuration.
   *
   * @public
   */
  type: FoundationModelConfigurationType | undefined;

  /**
   * The Bedrock foundation model configuration.
   *
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration | undefined;

  /**
   * The Mantle foundation model configuration.
   *
   * @public
   */
  mantleFoundationModelConfiguration?: MantleFoundationModelConfiguration | undefined;
}

/**
 * Configuration for the reranking model.
 *
 * @public
 */
export interface AgenticRetrieveRerankingConfiguration {
  /**
   * The type of reranking configuration.
   *
   * @public
   */
  type: AgenticRetrieveRerankingConfigurationType | undefined;

  /**
   * The Bedrock reranking model configuration.
   *
   * @public
   */
  bedrockRerankingConfiguration?: AgenticRetrieveBedrockRerankingConfiguration | undefined;
}

/**
 * Configuration settings for the agentic retrieval operation.
 *
 * @public
 */
export interface AgenticRetrieveConfiguration {
  /**
   * The type of foundation model to use. CUSTOM uses a specified model, MANAGED uses the service default.
   *
   * @public
   */
  foundationModelType?: FoundationModelType | undefined;

  /**
   * The foundation model configuration. Required when foundationModelType is CUSTOM.
   *
   * @public
   */
  foundationModelConfiguration?: FoundationModelConfiguration | undefined;

  /**
   * The type of reranking model to use. CUSTOM uses a specified model, MANAGED uses the service default. If not specified, defaults to MANAGED for managed embedding knowledge bases and NONE for custom embedding knowledge bases.
   *
   * @public
   */
  rerankingModelType?: AgenticRetrieveRerankingModelType | undefined;

  /**
   * The reranking model configuration. Required when rerankingModelType is CUSTOM.
   *
   * @public
   */
  rerankingConfiguration?: AgenticRetrieveRerankingConfiguration | undefined;

  /**
   * The maximum number of agent iterations for retrieval.
   *
   * @public
   */
  maxAgentIteration?: number | undefined;
}

/**
 * A failure that occurred during agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrieveFailure {
  /**
   * A message describing the failure.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The generated response synthesized from retrieved results.
 *
 * @public
 */
export interface AgenticRetrieveGeneratedResponse {
  /**
   * The generated answer text.
   *
   * @public
   */
  answer: string | undefined;

  /**
   * Citations mapping spans of the answer to supporting results.
   *
   * @public
   */
  citations?: AgenticRetrieveCitation[] | undefined;
}

/**
 * A warning generated by a guardrail during agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrieveGuardrailWarning {
  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The action taken by the guardrail.
   *
   * @public
   */
  action: GuardrailAction | undefined;

  /**
   * A message describing the guardrail evaluation result.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The retrieval instruction, identified by its ID and optional version, to apply to this request.
 *
 * @public
 */
export interface AgenticRetrieveInstructionConfiguration {
  /**
   * The identifier of the retrieval instruction. The instruction must exist in the caller's account and its status must be ACTIVE.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The version of the retrieval instruction to apply: a version number, or DRAFT for the instruction's current reviewed content. When omitted, DRAFT is used. This default is permanent.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * The left operand of a metadata filter expression. Set exactly one member.
 *
 * @public
 */
export type AgenticRetrieveMemoryMetadataFilterLeft =
  | AgenticRetrieveMemoryMetadataFilterLeft.MetadataKeyMember
  | AgenticRetrieveMemoryMetadataFilterLeft.$UnknownMember;

/**
 * @public
 */
export namespace AgenticRetrieveMemoryMetadataFilterLeft {
  /**
   * The metadata key to filter on.
   *
   * @public
   */
  export interface MetadataKeyMember {
    metadataKey: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataKey: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A metadata value that a filter expression compares against. Set exactly one member.
 *
 * @public
 */
export type AgenticRetrieveMemoryMetadataValue =
  | AgenticRetrieveMemoryMetadataValue.DateTimeValueMember
  | AgenticRetrieveMemoryMetadataValue.NumberValueMember
  | AgenticRetrieveMemoryMetadataValue.StringListValueMember
  | AgenticRetrieveMemoryMetadataValue.StringValueMember
  | AgenticRetrieveMemoryMetadataValue.$UnknownMember;

/**
 * @public
 */
export namespace AgenticRetrieveMemoryMetadataValue {
  /**
   * A string value.
   *
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    numberValue?: never;
    stringListValue?: never;
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * A numeric value.
   *
   * @public
   */
  export interface NumberValueMember {
    stringValue?: never;
    numberValue: number;
    stringListValue?: never;
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * A list of string values.
   *
   * @public
   */
  export interface StringListValueMember {
    stringValue?: never;
    numberValue?: never;
    stringListValue: string[];
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * A timestamp value in ISO 8601 UTC format.
   *
   * @public
   */
  export interface DateTimeValueMember {
    stringValue?: never;
    numberValue?: never;
    stringListValue?: never;
    dateTimeValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    numberValue?: never;
    stringListValue?: never;
    dateTimeValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    numberValue: (value: number) => T;
    stringListValue: (value: string[]) => T;
    dateTimeValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The right operand of a metadata filter expression. Set exactly one member.
 *
 * @public
 */
export type AgenticRetrieveMemoryMetadataFilterRight =
  | AgenticRetrieveMemoryMetadataFilterRight.MetadataValueMember
  | AgenticRetrieveMemoryMetadataFilterRight.$UnknownMember;

/**
 * @public
 */
export namespace AgenticRetrieveMemoryMetadataFilterRight {
  /**
   * The value to compare the metadata key against.
   *
   * @public
   */
  export interface MetadataValueMember {
    metadataValue: AgenticRetrieveMemoryMetadataValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataValue: (value: AgenticRetrieveMemoryMetadataValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A metadata filter expression, in the form accepted by the AgentCore Memory RetrieveMemoryRecords operation. The expression has a left operand that names the metadata key, an operator, and a right operand. For the EXISTS and NOT_EXISTS operators, omit the right operand.
 *
 * @public
 */
export interface AgenticRetrieveMemoryMetadataFilter {
  /**
   * The metadata key that the expression evaluates.
   *
   * @public
   */
  left: AgenticRetrieveMemoryMetadataFilterLeft | undefined;

  /**
   * The relationship that the metadata key and value must have for a memory record to match.
   *
   * @public
   */
  operator: AgenticRetrieveMemoryMetadataFilterOperator | undefined;

  /**
   * The value that the expression compares the metadata key against. Supply this value for every operator except EXISTS and NOT_EXISTS.
   *
   * @public
   */
  right?: AgenticRetrieveMemoryMetadataFilterRight | undefined;
}

/**
 * The long-term memory namespace that the agent might retrieve memory records from, and the filters applied to that retrieval. You must specify either namespace or namespacePath.
 *
 * @public
 */
export interface AgenticRetrieveMemoryRetrievalConfig {
  /**
   * The namespace prefix to filter memory records by. The agent retrieves memory records in namespaces that start with the provided prefix. You must specify either namespace or namespacePath.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The parent namespace to use for hierarchical retrievals. The agent retrieves all memory records whose namespace falls under the same parent hierarchy. You must specify either namespace or namespacePath.
   *
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * The extraction strategy ID that restricts retrieval to memory records produced by a single strategy. Omit this parameter to retrieve records from every strategy on the memory resource.
   *
   * @public
   */
  strategyId?: string | undefined;

  /**
   * The metadata filter expressions that restrict retrieval to matching memory records. You can specify a maximum of 5 expressions.
   *
   * @public
   */
  metadataFilters?: AgenticRetrieveMemoryMetadataFilter[] | undefined;
}

/**
 * The short-term memory session that this retrieval reads from and writes to.
 *
 * @public
 */
export interface AgenticRetrieveMemorySessionBinding {
  /**
   * The identifier of the end user or agent that the session belongs to. This identifier scopes session history so that one actor's history is never returned for another. You are responsible for sending the correct actor value.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The identifier of the session to restore and continue. You are responsible for sending the correct session value.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * Specifies an AgentCore Memory resource and how this retrieval uses it. Set sessionBinding to restore and continue a session. Set retrievalConfigs to let the agent retrieve from long-term memory. You must specify at least one of the two.
 *
 * @public
 */
export interface AgenticRetrieveMemoryConfiguration {
  /**
   * The identifier of the AgentCore Memory resource to use. The resource must exist in your account and be in the ACTIVE state.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The short-term memory session whose history is restored for this retrieval. To persist the agent-generated answer to the session, omit persistenceMode or set it to DEFAULT. To leave the session unchanged, set persistenceMode to NONE. Supply session history through the existing messages parameter or through short-term memory, but not both.
   *
   * @public
   */
  sessionBinding?: AgenticRetrieveMemorySessionBinding | undefined;

  /**
   * Specifies the long-term memory configuration the agent can retrieve from. The agent decides whether to retrieve and composes its own query. This field currently accepts at most one entry.
   *
   * @public
   */
  retrievalConfigs?: AgenticRetrieveMemoryRetrievalConfig[] | undefined;

  /**
   * Specifies whether the agent-generated answer is written back to the given short-term memory session, and applies only when sessionBinding is set. Valid values:
   *
   * - `DEFAULT` (default) – Specifies that the question and the agent-generated answer are persisted to the session as a single event. This value requires generateResponse to be true.
   * - `NONE` – Specifies that the session is left unchanged.
   *
   * @public
   */
  persistenceMode?: AgenticRetrieveMemoryPersistenceMode | undefined;
}

/**
 * A message in the agentic retrieval conversation.
 *
 * @public
 */
export interface AgenticRetrieveMessage {
  /**
   * The content of the message.
   *
   * @public
   */
  content: AgenticRetrieveMessageContent | undefined;

  /**
   * The role of the message sender (e.g., user or assistant).
   *
   * @public
   */
  role: ConversationRole | undefined;
}

/**
 * Policy configuration for agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrievePolicyConfiguration {
  /**
   * Configuration for Bedrock guardrails to apply during retrieval.
   *
   * @public
   */
  bedrockGuardrailConfiguration?: AgenticRetrieveBedrockGuardrailConfiguration | undefined;
}

/**
 * Specifies the name that the metadata attribute must match and the value to which to compare the value of the metadata attribute. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax)
 *
 * @public
 */
export interface FilterAttribute {
  /**
   * The name that the metadata attribute must match.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value to which to compare the value of the metadata attribute.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * A chunk of the generated answer text.
 *
 * @public
 */
export interface AgenticRetrieveResponseEvent {
  /**
   * The generated text chunk.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * The content retrieved from a knowledge source.
 *
 * @public
 */
export interface RetrievalContent {
  /**
   * The binary content of the retrieved item.
   *
   * @public
   */
  byteContent?: Uint8Array | undefined;

  /**
   * The text content of the retrieved item.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The MIME type of the retrieved content.
   *
   * @public
   */
  mimeType: string | undefined;
}

/**
 * A single item from the agentic retrieval results.
 *
 * @public
 */
export interface AgenticRetrieveResultItem {
  /**
   * The retrieved content.
   *
   * @public
   */
  content: RetrievalContent | undefined;

  /**
   * Metadata associated with the retrieved item.
   *
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;

  /**
   * The source retriever that produced this result.
   *
   * @public
   */
  sourceRetriever: AgenticRetrieveSourceRetriever | undefined;
}

/**
 * An event containing agentic retrieval results.
 *
 * @public
 */
export interface AgenticRetrieveResultEvent {
  /**
   * The list of retrieved result items.
   *
   * @public
   */
  results: AgenticRetrieveResultItem[] | undefined;

  /**
   * The generated response. Present only when generateResponse is true.
   *
   * @public
   */
  generatedResponse?: AgenticRetrieveGeneratedResponse | undefined;

  /**
   * Opaque continuation token for paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Metadata about a retrieval source.
 *
 * @public
 */
export interface AgenticRetrieveSourceMetadata {
  /**
   * The identifier of the retrieval source.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The type of retrieval source.
   *
   * @public
   */
  retrievalType?: AgenticRetrieveType | undefined;
}

/**
 * Contains information about the user making the request. Use this to pass user identity information for access control filtering, so that retrieval results only include documents the user is authorized to access.
 *
 * @public
 */
export interface UserContext {
  /**
   * The identifier of the user making the retrieval request.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * A result item from an agentic retrieval trace.
 *
 * @public
 */
export interface AgenticRetrieveTraceResultItem {
  /**
   * The retrieved content.
   *
   * @public
   */
  content?: RetrievalContent | undefined;

  /**
   * Metadata associated with the retrieved item.
   *
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;

  /**
   * The source retriever that produced this result.
   *
   * @public
   */
  sourceRetriever?: AgenticRetrieveSourceRetriever | undefined;
}

/**
 * A general warning message from agentic retrieval.
 *
 * @public
 */
export interface AgenticRetrieveWarningMessage {
  /**
   * The warning message text.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A warning generated during agentic retrieval.
 *
 * @public
 */
export type AgenticRetrieveWarning =
  | AgenticRetrieveWarning.GuardrailMember
  | AgenticRetrieveWarning.MessageMember
  | AgenticRetrieveWarning.$UnknownMember;

/**
 * @public
 */
export namespace AgenticRetrieveWarning {
  /**
   * A general warning message.
   *
   * @public
   */
  export interface MessageMember {
    message: AgenticRetrieveWarningMessage;
    guardrail?: never;
    $unknown?: never;
  }

  /**
   * A warning from a guardrail evaluation.
   *
   * @public
   */
  export interface GuardrailMember {
    message?: never;
    guardrail: AgenticRetrieveGuardrailWarning;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    message?: never;
    guardrail?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    message: (value: AgenticRetrieveWarningMessage) => T;
    guardrail: (value: AgenticRetrieveGuardrailWarning) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Attributes describing the details of an agentic retrieval trace event.
 *
 * @public
 */
export interface AgenticRetrieveTraceEventAttributes {
  /**
   * The current step in the retrieval process.
   *
   * @public
   */
  step: AgenticRetrieveStep | undefined;

  /**
   * The status of the current step.
   *
   * @public
   */
  status: AgenticRetrieveStatus | undefined;

  /**
   * A human-readable message describing the trace event.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The list of actions taken during this step.
   *
   * @public
   */
  actions?: AgenticRetrieveAction[] | undefined;

  /**
   * Warnings generated during this step.
   *
   * @public
   */
  warnings?: AgenticRetrieveWarning[] | undefined;

  /**
   * Failures that occurred during this step.
   *
   * @public
   */
  failures?: AgenticRetrieveFailure[] | undefined;

  /**
   * Metadata about the retrieval sources used.
   *
   * @public
   */
  retrievalMetadata?: AgenticRetrieveSourceMetadata[] | undefined;

  /**
   * The retrieval results from this step.
   *
   * @public
   */
  retrievalResponse?: AgenticRetrieveTraceResultItem[] | undefined;

  /**
   * The agent reports the retrieval instruction applied to this request on the first planning step.
   *
   * @public
   */
  appliedInstruction?: AgenticRetrieveAppliedInstruction | undefined;
}

/**
 * A trace event providing visibility into the agentic retrieval process.
 *
 * @public
 */
export interface AgenticRetrieveTraceEvent {
  /**
   * The unique identifier of the trace event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The timestamp when the trace event occurred.
   *
   * @public
   */
  timestamp: number | undefined;

  /**
   * The attributes describing the trace event details.
   *
   * @public
   */
  attributes: AgenticRetrieveTraceEventAttributes | undefined;
}

/**
 * The streaming output for agentic retrieval, containing results, traces, and errors.
 *
 * @public
 */
export type AgenticRetrieveStreamResponseOutput =
  | AgenticRetrieveStreamResponseOutput.AccessDeniedExceptionMember
  | AgenticRetrieveStreamResponseOutput.BadGatewayExceptionMember
  | AgenticRetrieveStreamResponseOutput.ConflictExceptionMember
  | AgenticRetrieveStreamResponseOutput.DependencyFailedExceptionMember
  | AgenticRetrieveStreamResponseOutput.InternalServerExceptionMember
  | AgenticRetrieveStreamResponseOutput.ResourceNotFoundExceptionMember
  | AgenticRetrieveStreamResponseOutput.ResponseEventMember
  | AgenticRetrieveStreamResponseOutput.ResultMember
  | AgenticRetrieveStreamResponseOutput.ServiceQuotaExceededExceptionMember
  | AgenticRetrieveStreamResponseOutput.ThrottlingExceptionMember
  | AgenticRetrieveStreamResponseOutput.TraceEventMember
  | AgenticRetrieveStreamResponseOutput.ValidationExceptionMember
  | AgenticRetrieveStreamResponseOutput.$UnknownMember;

/**
 * @public
 */
export namespace AgenticRetrieveStreamResponseOutput {
  /**
   * A retrieval result event containing the retrieved items.
   *
   * @public
   */
  export interface ResultMember {
    result: AgenticRetrieveResultEvent;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * A trace event providing visibility into the retrieval process.
   *
   * @public
   */
  export interface TraceEventMember {
    result?: never;
    traceEvent: AgenticRetrieveTraceEvent;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * A chunk of the generated answer. Emitted only when generateResponse is true.
   *
   * @public
   */
  export interface ResponseEventMember {
    result?: never;
    traceEvent?: never;
    responseEvent: AgenticRetrieveResponseEvent;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * The request validation failed.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * The specified resource was not found.
   *
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * The service quota has been exceeded.
   *
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * The request was throttled.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * Access to the resource was denied.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * A conflict occurred with the current state of the resource.
   *
   * @public
   */
  export interface ConflictExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * A dependency failed during the operation.
   *
   * @public
   */
  export interface DependencyFailedExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * A bad gateway error occurred.
   *
   * @public
   */
  export interface BadGatewayExceptionMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    result?: never;
    traceEvent?: never;
    responseEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    result: (value: AgenticRetrieveResultEvent) => T;
    traceEvent: (value: AgenticRetrieveTraceEvent) => T;
    responseEvent: (value: AgenticRetrieveResponseEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response structure for the agentic retrieve stream operation.
 *
 * @public
 */
export interface AgenticRetrieveStreamResponse {
  /**
   * The output stream containing retrieval results and trace events.
   *
   * @public
   */
  stream: AsyncIterable<AgenticRetrieveStreamResponseOutput> | undefined;
}

/**
 * Details about a caller.
 *
 * @public
 */
export type Caller =
  | Caller.AgentAliasArnMember
  | Caller.$UnknownMember;

/**
 * @public
 */
export namespace Caller {
  /**
   * The caller's agent alias ARN.
   *
   * @public
   */
  export interface AgentAliasArnMember {
    agentAliasArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentAliasArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentAliasArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The event in the custom orchestration sequence. Events are the responses which the custom orchestration Lambda function sends as response to the agent.
 *
 * @public
 */
export interface CustomOrchestrationTraceEvent {
  /**
   * The text that prompted the event at this step.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * The trace behavior for the custom orchestration.
 *
 * @public
 */
export interface CustomOrchestrationTrace {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The event details used with the custom orchestration.
   *
   * @public
   */
  event?: CustomOrchestrationTraceEvent | undefined;
}

/**
 * Contains information about the failure of the interaction.
 *
 * @public
 */
export interface FailureTrace {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The reason the interaction failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The failure code for the trace.
   *
   * @public
   */
  failureCode?: number | undefined;

  /**
   * Information about the failure that occurred.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * Details of the content filter used in the Guardrail.
 *
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * The type of content detected in the filter by the Guardrail.
   *
   * @public
   */
  type?: GuardrailContentFilterType | undefined;

  /**
   * The confidence level regarding the content detected in the filter by the Guardrail.
   *
   * @public
   */
  confidence?: GuardrailContentFilterConfidence | undefined;

  /**
   * The action placed on the content by the Guardrail filter.
   *
   * @public
   */
  action?: GuardrailContentPolicyAction | undefined;
}

/**
 * The details of the policy assessment in the Guardrails filter.
 *
 * @public
 */
export interface GuardrailContentPolicyAssessment {
  /**
   * The filter details of the policy assessment used in the Guardrails filter.
   *
   * @public
   */
  filters?: GuardrailContentFilter[] | undefined;
}

/**
 * The Guardrail filter to identify and remove personally identifiable information (PII).
 *
 * @public
 */
export interface GuardrailPiiEntityFilter {
  /**
   * The type of PII the Guardrail filter has identified and removed.
   *
   * @public
   */
  type?: GuardrailPiiEntityType | undefined;

  /**
   * The match to settings in the Guardrail filter to identify and remove PII.
   *
   * @public
   */
  match?: string | undefined;

  /**
   * The action of the Guardrail filter to identify and remove PII.
   *
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * The details for the regex filter used in the Guardrail.
 *
 * @public
 */
export interface GuardrailRegexFilter {
  /**
   * The name details for the regex filter used in the Guardrail.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The regex details for the regex filter used in the Guardrail.
   *
   * @public
   */
  regex?: string | undefined;

  /**
   * The match details for the regex filter used in the Guardrail.
   *
   * @public
   */
  match?: string | undefined;

  /**
   * The action details for the regex filter used in the Guardrail.
   *
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * The details of the sensitive policy assessment used in the Guardrail.
 *
 * @public
 */
export interface GuardrailSensitiveInformationPolicyAssessment {
  /**
   * The details of the PII entities used in the sensitive policy assessment for the Guardrail.
   *
   * @public
   */
  piiEntities?: GuardrailPiiEntityFilter[] | undefined;

  /**
   * The details of the regexes used in the sensitive policy assessment for the Guardrail.
   *
   * @public
   */
  regexes?: GuardrailRegexFilter[] | undefined;
}

/**
 * The details for a specific topic defined in the Guardrail.
 *
 * @public
 */
export interface GuardrailTopic {
  /**
   * The name details on a specific topic in the Guardrail.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type details on a specific topic in the Guardrail.
   *
   * @public
   */
  type?: GuardrailTopicType | undefined;

  /**
   * The action details on a specific topic in the Guardrail.
   *
   * @public
   */
  action?: GuardrailTopicPolicyAction | undefined;
}

/**
 * The details of the policy assessment used in the Guardrail.
 *
 * @public
 */
export interface GuardrailTopicPolicyAssessment {
  /**
   * The topic details of the policy assessment used in the Guardrail.
   *
   * @public
   */
  topics?: GuardrailTopic[] | undefined;
}

/**
 * The custom word details for the filter in the Guardrail.
 *
 * @public
 */
export interface GuardrailCustomWord {
  /**
   * The match details for the custom word filter in the Guardrail.
   *
   * @public
   */
  match?: string | undefined;

  /**
   * The action details for the custom word filter in the Guardrail.
   *
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * The managed word details for the filter in the Guardrail.
 *
 * @public
 */
export interface GuardrailManagedWord {
  /**
   * The match details for the managed word filter in the Guardrail.
   *
   * @public
   */
  match?: string | undefined;

  /**
   * The type details for the managed word filter in the Guardrail.
   *
   * @public
   */
  type?: GuardrailManagedWordType | undefined;

  /**
   * The action details for the managed word filter in the Guardrail.
   *
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * The assessment details for words defined in the Guardrail filter.
 *
 * @public
 */
export interface GuardrailWordPolicyAssessment {
  /**
   * The custom word details for words defined in the Guardrail filter.
   *
   * @public
   */
  customWords?: GuardrailCustomWord[] | undefined;

  /**
   * The managed word lists for words defined in the Guardrail filter.
   *
   * @public
   */
  managedWordLists?: GuardrailManagedWord[] | undefined;
}

/**
 * Assessment details of the content analyzed by Guardrails.
 *
 * @public
 */
export interface GuardrailAssessment {
  /**
   * Topic policy details of the Guardrail.
   *
   * @public
   */
  topicPolicy?: GuardrailTopicPolicyAssessment | undefined;

  /**
   * Content policy details of the Guardrail.
   *
   * @public
   */
  contentPolicy?: GuardrailContentPolicyAssessment | undefined;

  /**
   * Word policy details of the Guardrail.
   *
   * @public
   */
  wordPolicy?: GuardrailWordPolicyAssessment | undefined;

  /**
   * Sensitive Information policy details of Guardrail.
   *
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment | undefined;
}

/**
 * The trace details used in the Guardrail.
 *
 * @public
 */
export interface GuardrailTrace {
  /**
   * The trace action details used with the Guardrail.
   *
   * @public
   */
  action?: GuardrailAction | undefined;

  /**
   * The details of the trace Id used in the Guardrail Trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The details of the input assessments used in the Guardrail Trace.
   *
   * @public
   */
  inputAssessments?: GuardrailAssessment[] | undefined;

  /**
   * The details of the output assessments used in the Guardrail Trace.
   *
   * @public
   */
  outputAssessments?: GuardrailAssessment[] | undefined;

  /**
   * Contains information about the Guardrail output.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * Contains information about the code interpreter being invoked.
 *
 * @public
 */
export interface CodeInterpreterInvocationInput {
  /**
   * The code for the code interpreter to use.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Files that are uploaded for code interpreter to use.
   *
   * @public
   */
  files?: string[] | undefined;
}

/**
 * Contains details about the knowledge base to look up and the query to be made.
 *
 * @public
 */
export interface KnowledgeBaseLookupInput {
  /**
   * The query made to the knowledge base.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The unique identifier of the knowledge base to look up.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;
}

/**
 * Contains information pertaining to the action group or knowledge base that is being invoked.
 *
 * @public
 */
export interface InvocationInput {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * Specifies whether the agent is invoking an action group or a knowledge base.
   *
   * @public
   */
  invocationType?: InvocationType | undefined;

  /**
   * Contains information about the action group to be invoked.
   *
   * @public
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput | undefined;

  /**
   * Contains details about the knowledge base to look up and the query to be made.
   *
   * @public
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput | undefined;

  /**
   * Contains information about the code interpreter to be invoked.
   *
   * @public
   */
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput | undefined;

  /**
   * The collaborator's invocation input.
   *
   * @public
   */
  agentCollaboratorInvocationInput?: AgentCollaboratorInvocationInput | undefined;
}

/**
 * Specifications about the inference parameters that were provided alongside the prompt. These are specified in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
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
   * The maximum number of tokens allowed in the generated response.
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
 * The input for the pre-processing step.
 *
 * - The `type` matches the agent step.
 * - The `text` contains the prompt.
 * - The `inferenceConfiguration`, `parserMode`, and `overrideLambda` values are set in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated.
 *
 * @public
 */
export interface ModelInvocationInput {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The text that prompted the agent at this step.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The step in the agent sequence.
   *
   * @public
   */
  type?: PromptType | undefined;

  /**
   * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.
   *
   * @public
   */
  overrideLambda?: string | undefined;

  /**
   * Specifies whether the default prompt template was `OVERRIDDEN`. If it was, the `basePromptTemplate` that was set in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object when the agent was created or updated is used instead.
   *
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * Specifications about the inference parameters that were provided alongside the prompt. These are specified in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration | undefined;

  /**
   * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `promptType`.
   *
   * @public
   */
  parserMode?: CreationMode | undefined;

  /**
   * The identifier of a foundation model.
   *
   * @public
   */
  foundationModel?: string | undefined;
}

/**
 * Contains the raw output from the foundation model.
 *
 * @public
 */
export interface RawResponse {
  /**
   * The foundation model's raw output content.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * Contains information about the reasoning that the model used to return the content in the content block.
 *
 * @public
 */
export interface ReasoningTextBlock {
  /**
   * Text describing the reasoning that the model used to return the content in the content block.
   *
   * @public
   */
  text: string | undefined;

  /**
   * A hash of all the messages in the conversation to ensure that the content in the reasoning text block isn't tampered with. You must submit the signature in subsequent `Converse` requests, in addition to the previous messages. If the previous messages are tampered with, the response throws an error.
   *
   * @public
   */
  signature?: string | undefined;
}

/**
 * Contains content regarding the reasoning that the foundation model made with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.
 *
 * @public
 */
export type ReasoningContentBlock =
  | ReasoningContentBlock.ReasoningTextMember
  | ReasoningContentBlock.RedactedContentMember
  | ReasoningContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ReasoningContentBlock {
  /**
   * Contains information about the reasoning that the model used to return the content in the content block.
   *
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: ReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * The content in the reasoning that was encrypted by the model provider for trust and safety reasons.
   *
   * @public
   */
  export interface RedactedContentMember {
    reasoningText?: never;
    redactedContent: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    reasoningText?: never;
    redactedContent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    reasoningText: (value: ReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The foundation model output from the orchestration step.
 *
 * @public
 */
export interface OrchestrationModelInvocationOutput {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * Contains details of the raw response from the foundation model output.
   *
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * Contains information about the foundation model output from the orchestration step.
   *
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * Contains content about the reasoning that the model made during the orchestration step.
   *
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * Contains the JSON-formatted string returned by the API invoked by the code interpreter.
 *
 * @public
 */
export interface CodeInterpreterInvocationOutput {
  /**
   * Contains the successful output returned from code execution
   *
   * @public
   */
  executionOutput?: string | undefined;

  /**
   * Contains the error returned from code execution.
   *
   * @public
   */
  executionError?: string | undefined;

  /**
   * Contains output files, if generated by code execution.
   *
   * @public
   */
  files?: string[] | undefined;

  /**
   * Indicates if the execution of the code timed out.
   *
   * @public
   */
  executionTimeout?: boolean | undefined;

  /**
   * Contains information about the output from the code interpreter.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * Contains details about the response to the user.
 *
 * @public
 */
export interface FinalResponse {
  /**
   * The text in the response to the user.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Contains information about the invoke agent operation.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * Contains information about an audio segment retrieved from a knowledge base, including its location and transcription.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `audio` field
 *
 * @public
 */
export interface AudioSegment {
  /**
   * The S3 URI where this specific audio segment is stored in the multimodal storage destination.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The text transcription of the audio segment content.
   *
   * @public
   */
  transcription?: string | undefined;
}

/**
 * Contains information about a column with a cell to return in retrieval.
 *
 * @public
 */
export interface RetrievalResultContentColumn {
  /**
   * The name of the column.
   *
   * @public
   */
  columnName?: string | undefined;

  /**
   * The value in the column.
   *
   * @public
   */
  columnValue?: string | undefined;

  /**
   * The data type of the value.
   *
   * @public
   */
  type?: RetrievalResultContentColumnType | undefined;
}

/**
 * Contains information about a video segment retrieved from a knowledge base, including its location and summary.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `video` field
 *
 * @public
 */
export interface VideoSegment {
  /**
   * The S3 URI where this specific video segment is stored in the multimodal storage destination.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * A text summary describing the content of the video segment.
   *
   * @public
   */
  summary?: string | undefined;
}

/**
 * Contains information about a chunk of text from a data source in the knowledge base. If the result is from a structured data source, the cell in the database and the type of the value is also identified.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `content` field
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `content` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `content` field
 *
 * @public
 */
export interface RetrievalResultContent {
  /**
   * The type of content in the retrieval result.
   *
   * @public
   */
  type?: RetrievalResultContentType | undefined;

  /**
   * The cited text from the data source.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * A data URI with base64-encoded content from the data source. The URI is in the following format: returned in the following format: `data:image/jpeg;base64,$\{base64-encoded string\}`.
   *
   * @public
   */
  byteContent?: string | undefined;

  /**
   * Video segment information when the retrieval result contains video content.
   *
   * @public
   */
  video?: VideoSegment | undefined;

  /**
   * Audio segment information when the retrieval result contains audio content.
   *
   * @public
   */
  audio?: AudioSegment | undefined;

  /**
   * Specifies information about the rows with the cells to return in retrieval.
   *
   * @public
   */
  row?: RetrievalResultContentColumn[] | undefined;
}

/**
 * The Confluence data source location.
 *
 * @public
 */
export interface RetrievalResultConfluenceLocation {
  /**
   * The Confluence host URL for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Contains information about the location of a document in a custom data source.
 *
 * @public
 */
export interface RetrievalResultCustomDocumentLocation {
  /**
   * The ID of the document.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * The Google Drive location of a retrieval result.
 *
 * @public
 */
export interface RetrievalResultGoogleDriveLocation {
  /**
   * The Google Drive URL for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * The location of a result in Amazon Kendra.
 *
 * @public
 */
export interface RetrievalResultKendraDocumentLocation {
  /**
   * The document's uri.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * The Microsoft OneDrive location of a retrieval result.
 *
 * @public
 */
export interface RetrievalResultOneDriveLocation {
  /**
   * The OneDrive URL for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * The S3 data source location.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `s3Location` field
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `s3Location` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `s3Location` field
 *
 * @public
 */
export interface RetrievalResultS3Location {
  /**
   * The S3 URI for the data source location.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * The Salesforce data source location.
 *
 * @public
 */
export interface RetrievalResultSalesforceLocation {
  /**
   * The Salesforce host URL for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * The SharePoint data source location.
 *
 * @public
 */
export interface RetrievalResultSharePointLocation {
  /**
   * The SharePoint site URL for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Contains information about the SQL query used to retrieve the result.
 *
 * @public
 */
export interface RetrievalResultSqlLocation {
  /**
   * The SQL query used to retrieve the result.
   *
   * @public
   */
  query?: string | undefined;
}

/**
 * The web URL/URLs data source location.
 *
 * @public
 */
export interface RetrievalResultWebLocation {
  /**
   * The web URL/URLs for the data source location.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Contains information about the data source location.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `location` field
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `location` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `location` field
 *
 * @public
 */
export interface RetrievalResultLocation {
  /**
   * The type of data source location.
   *
   * @public
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * The S3 data source location.
   *
   * @public
   */
  s3Location?: RetrievalResultS3Location | undefined;

  /**
   * The web URL/URLs data source location.
   *
   * @public
   */
  webLocation?: RetrievalResultWebLocation | undefined;

  /**
   * The Confluence data source location.
   *
   * @public
   */
  confluenceLocation?: RetrievalResultConfluenceLocation | undefined;

  /**
   * The Salesforce data source location.
   *
   * @public
   */
  salesforceLocation?: RetrievalResultSalesforceLocation | undefined;

  /**
   * The SharePoint data source location.
   *
   * @public
   */
  sharePointLocation?: RetrievalResultSharePointLocation | undefined;

  /**
   * Specifies the location of a document in a custom data source.
   *
   * @public
   */
  customDocumentLocation?: RetrievalResultCustomDocumentLocation | undefined;

  /**
   * The location of a document in Amazon Kendra.
   *
   * @public
   */
  kendraDocumentLocation?: RetrievalResultKendraDocumentLocation | undefined;

  /**
   * Specifies information about the SQL query used to retrieve the result.
   *
   * @public
   */
  sqlLocation?: RetrievalResultSqlLocation | undefined;

  /**
   * The Microsoft OneDrive data source location.
   *
   * @public
   */
  oneDriveLocation?: RetrievalResultOneDriveLocation | undefined;

  /**
   * The Google Drive data source location.
   *
   * @public
   */
  googleDriveLocation?: RetrievalResultGoogleDriveLocation | undefined;
}

/**
 * Contains metadata about a source cited for the generated response.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `retrievedReferences` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `retrievedReferences` field
 *
 * @public
 */
export interface RetrievedReference {
  /**
   * Contains the cited text from the data source.
   *
   * @public
   */
  content?: RetrievalResultContent | undefined;

  /**
   * Contains information about the location of the data source.
   *
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * Contains metadata attributes and their values for the file in the data source. For more information, see [Metadata and filtering](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata).
   *
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;
}

/**
 * Contains details about the results from looking up the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * Contains metadata about the sources cited for the generated response.
   *
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;

  /**
   * Contains information about the knowledge base output.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * Contains details about the agent's response to reprompt the input.
 *
 * @public
 */
export interface RepromptResponse {
  /**
   * The text reprompting the input.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Specifies what output is prompting the agent to reprompt the input.
   *
   * @public
   */
  source?: Source | undefined;
}

/**
 * Contains the result or output of an action group or knowledge base, or the response to the user.
 *
 * @public
 */
export interface Observation {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * Specifies what kind of information the agent returns in the observation. The following values are possible.
   *
   * - `ACTION_GROUP` – The agent returns the result of an action group.
   * - `KNOWLEDGE_BASE` – The agent returns information from a knowledge base.
   * - `FINISH` – The agent returns a final response to the user with no follow-up.
   * - `ASK_USER` – The agent asks the user a question.
   * - `REPROMPT` – The agent prompts the user again for the same information.
   *
   * @public
   */
  type?: Type | undefined;

  /**
   * Contains the JSON-formatted string returned by the API invoked by the action group.
   *
   * @public
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput | undefined;

  /**
   * A collaborator's invocation output.
   *
   * @public
   */
  agentCollaboratorInvocationOutput?: AgentCollaboratorInvocationOutput | undefined;

  /**
   * Contains details about the results from looking up the knowledge base.
   *
   * @public
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput | undefined;

  /**
   * Contains details about the response to the user.
   *
   * @public
   */
  finalResponse?: FinalResponse | undefined;

  /**
   * Contains details about the response to reprompt the input.
   *
   * @public
   */
  repromptResponse?: RepromptResponse | undefined;

  /**
   * Contains the JSON-formatted string returned by the API invoked by the code interpreter.
   *
   * @public
   */
  codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput | undefined;
}

/**
 * Contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.
 *
 * @public
 */
export interface Rationale {
  /**
   * The unique identifier of the trace step.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The reasoning or thought process of the agent, based on the input.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.
 *
 * @public
 */
export type OrchestrationTrace =
  | OrchestrationTrace.InvocationInputMember
  | OrchestrationTrace.ModelInvocationInputMember
  | OrchestrationTrace.ModelInvocationOutputMember
  | OrchestrationTrace.ObservationMember
  | OrchestrationTrace.RationaleMember
  | OrchestrationTrace.$UnknownMember;

/**
 * @public
 */
export namespace OrchestrationTrace {
  /**
   * Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.
   *
   * @public
   */
  export interface RationaleMember {
    rationale: Rationale;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * Contains information pertaining to the action group or knowledge base that is being invoked.
   *
   * @public
   */
  export interface InvocationInputMember {
    rationale?: never;
    invocationInput: InvocationInput;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.
   *
   * @public
   */
  export interface ObservationMember {
    rationale?: never;
    invocationInput?: never;
    observation: Observation;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The input for the orchestration step.
   *
   * - The `type` is `ORCHESTRATION`.
   * - The `text` contains the prompt.
   * - The `inferenceConfiguration`, `parserMode`, and `overrideLambda` values are set in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated.
   *
   * @public
   */
  export interface ModelInvocationInputMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * Contains information pertaining to the output from the foundation model that is being invoked.
   *
   * @public
   */
  export interface ModelInvocationOutputMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput: OrchestrationModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    rationale: (value: Rationale) => T;
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: OrchestrationModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the response from the Lambda parsing of the output from the post-processing step.
 *
 * @public
 */
export interface PostProcessingParsedResponse {
  /**
   * The text returned by the parser.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * The foundation model output from the post-processing step.
 *
 * @public
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * Details about the response from the Lambda parsing of the output of the post-processing step.
   *
   * @public
   */
  parsedResponse?: PostProcessingParsedResponse | undefined;

  /**
   * Details of the raw response from the foundation model output.
   *
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * Contains information about the foundation model output from the post-processing step.
   *
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * Contains content about the reasoning that the model made during the post-processing step.
   *
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * Details about the post-processing step, in which the agent shapes the response.
 *
 * @public
 */
export type PostProcessingTrace =
  | PostProcessingTrace.ModelInvocationInputMember
  | PostProcessingTrace.ModelInvocationOutputMember
  | PostProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PostProcessingTrace {
  /**
   * The input for the post-processing step.
   *
   * - The `type` is `POST_PROCESSING`.
   * - The `text` contains the prompt.
   * - The `inferenceConfiguration`, `parserMode`, and `overrideLambda` values are set in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated.
   *
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The foundation model output from the post-processing step.
   *
   * @public
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PostProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PostProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the response from the Lambda parsing of the output from the pre-processing step.
 *
 * @public
 */
export interface PreProcessingParsedResponse {
  /**
   * The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.
   *
   * @public
   */
  rationale?: string | undefined;

  /**
   * Whether the user input is valid or not. If `false`, the agent doesn't proceed to orchestration.
   *
   * @public
   */
  isValid?: boolean | undefined;
}

/**
 * The foundation model output from the pre-processing step.
 *
 * @public
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * The unique identifier of the trace.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * Details about the response from the Lambda parsing of the output of the pre-processing step.
   *
   * @public
   */
  parsedResponse?: PreProcessingParsedResponse | undefined;

  /**
   * Details of the raw response from the foundation model output.
   *
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * Contains information about the foundation model output from the pre-processing step.
   *
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * Contains content about the reasoning that the model made during the pre-processing step.
   *
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.
 *
 * @public
 */
export type PreProcessingTrace =
  | PreProcessingTrace.ModelInvocationInputMember
  | PreProcessingTrace.ModelInvocationOutputMember
  | PreProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PreProcessingTrace {
  /**
   * The input for the pre-processing step.
   *
   * - The `type` is `PRE_PROCESSING`.
   * - The `text` contains the prompt.
   * - The `inferenceConfiguration`, `parserMode`, and `overrideLambda` values are set in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) object that was set when the agent was created or updated.
   *
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The foundation model output from the pre-processing step.
   *
   * @public
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PreProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PreProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Invocation output from a routing classifier model.
 *
 * @public
 */
export interface RoutingClassifierModelInvocationOutput {
  /**
   * The invocation's trace ID.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The invocation's raw response.
   *
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * The invocation's metadata.
   *
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * A trace for a routing classifier.
 *
 * @public
 */
export type RoutingClassifierTrace =
  | RoutingClassifierTrace.InvocationInputMember
  | RoutingClassifierTrace.ModelInvocationInputMember
  | RoutingClassifierTrace.ModelInvocationOutputMember
  | RoutingClassifierTrace.ObservationMember
  | RoutingClassifierTrace.$UnknownMember;

/**
 * @public
 */
export namespace RoutingClassifierTrace {
  /**
   * The classifier's invocation input.
   *
   * @public
   */
  export interface InvocationInputMember {
    invocationInput: InvocationInput;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The classifier's observation.
   *
   * @public
   */
  export interface ObservationMember {
    invocationInput?: never;
    observation: Observation;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The classifier's model invocation input.
   *
   * @public
   */
  export interface ModelInvocationInputMember {
    invocationInput?: never;
    observation?: never;
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * The classifier's model invocation output.
   *
   * @public
   */
  export interface ModelInvocationOutputMember {
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput: RoutingClassifierModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: RoutingClassifierModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement).
 *
 * @public
 */
export type Trace =
  | Trace.CustomOrchestrationTraceMember
  | Trace.FailureTraceMember
  | Trace.GuardrailTraceMember
  | Trace.OrchestrationTraceMember
  | Trace.PostProcessingTraceMember
  | Trace.PreProcessingTraceMember
  | Trace.RoutingClassifierTraceMember
  | Trace.$UnknownMember;

/**
 * @public
 */
export namespace Trace {
  /**
   * The trace details for a trace defined in the Guardrail filter.
   *
   * @public
   */
  export interface GuardrailTraceMember {
    guardrailTrace: GuardrailTrace;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.
   *
   * @public
   */
  export interface PreProcessingTraceMember {
    guardrailTrace?: never;
    preProcessingTrace: PreProcessingTrace;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.
   *
   * @public
   */
  export interface OrchestrationTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace: OrchestrationTrace;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * Details about the post-processing step, in which the agent shapes the response..
   *
   * @public
   */
  export interface PostProcessingTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace: PostProcessingTrace;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * A routing classifier's trace.
   *
   * @public
   */
  export interface RoutingClassifierTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace: RoutingClassifierTrace;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the failure of the interaction.
   *
   * @public
   */
  export interface FailureTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace: FailureTrace;
    customOrchestrationTrace?: never;
    $unknown?: never;
  }

  /**
   * Details about the custom orchestration step in which the agent determines the order in which actions are executed.
   *
   * @public
   */
  export interface CustomOrchestrationTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace: CustomOrchestrationTrace;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    routingClassifierTrace?: never;
    failureTrace?: never;
    customOrchestrationTrace?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    guardrailTrace: (value: GuardrailTrace) => T;
    preProcessingTrace: (value: PreProcessingTrace) => T;
    orchestrationTrace: (value: OrchestrationTrace) => T;
    postProcessingTrace: (value: PostProcessingTrace) => T;
    routingClassifierTrace: (value: RoutingClassifierTrace) => T;
    failureTrace: (value: FailureTrace) => T;
    customOrchestrationTrace: (value: CustomOrchestrationTrace) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement).
 *
 * @public
 */
export interface TracePart {
  /**
   * The unique identifier of the session with the agent.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement).
   *
   * @public
   */
  trace?: Trace | undefined;

  /**
   * The part's caller chain.
   *
   * @public
   */
  callerChain?: Caller[] | undefined;

  /**
   * The time of the trace.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The part's collaborator name.
   *
   * @public
   */
  collaboratorName?: string | undefined;

  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * The unique identifier of the alias of the agent.
   *
   * @public
   */
  agentAliasId?: string | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion?: string | undefined;
}

/**
 * @public
 */
export interface CheckIngestedDocumentAclRequest {
  /**
   * The unique identifier of the knowledge base that contains the document.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the document.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the document to check access for.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * The context object containing identity information for access control filtering, including user ID and optional group memberships used to evaluate the document access control list (ACL).
   *
   * @public
   */
  userContext: UserContext | undefined;
}

/**
 * @public
 */
export interface CheckIngestedDocumentAclResponse {
  /**
   * Specifies whether the user has access to the document based on the ingested access control list (ACL). Returns `true` if the user is allowed access, and `false` otherwise.
   *
   * @public
   */
  hasAccess: boolean | undefined;
}

/**
 * @public
 */
export interface GetExecutionFlowSnapshotRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias used for the flow execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow execution.
   *
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetExecutionFlowSnapshotResponse {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias used for the flow execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The version of the flow used for the flow execution.
   *
   * @public
   */
  flowVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that's used by the flow execution.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The flow definition used for the flow execution, including the nodes, connections, and configuration at the time when the execution started.
   *
   * The definition returns as a string that follows the structure of a [FlowDefinition](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_FlowDefinition.html) object.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key that's used to encrypt the flow snapshot.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowExecutionRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias used for the execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow execution to retrieve.
   *
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * Contains information about an error that occurred during an flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowExecutionError {
  /**
   * The name of the node in the flow where the error occurred (if applicable).
   *
   * @public
   */
  nodeName?: string | undefined;

  /**
   * The error code for the type of error that occurred.
   *
   * @public
   */
  error?: FlowExecutionErrorType | undefined;

  /**
   * A descriptive message that provides details about the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the flow execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The current status of the flow execution.
   *
   * Flow executions time out after 24 hours.
   *
   * @public
   */
  status: FlowExecutionStatus | undefined;

  /**
   * The timestamp when the flow execution started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * A list of errors that occurred during the flow execution. Each error includes an error code, message, and the node where the error occurred, if applicable.
   *
   * @public
   */
  errors?: FlowExecutionError[] | undefined;

  /**
   * The unique identifier of the flow alias used for the execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The version of the flow used for the execution.
   *
   * @public
   */
  flowVersion: string | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionEventsRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias used for the execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow execution.
   *
   * @public
   */
  executionIdentifier: string | undefined;

  /**
   * The maximum number of events to return in a single response. If more events exist than the specified maxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results. This value is returned in the response if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The type of events to retrieve. Specify `Node` for node-level events or `Flow` for flow-level events.
   *
   * @public
   */
  eventType: FlowExecutionEventType | undefined;
}

/**
 * Represents a condition that was satisfied during a condition node evaluation in a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface SatisfiedCondition {
  /**
   * The name of the condition that was satisfied.
   *
   * @public
   */
  conditionName: string | undefined;
}

/**
 * Contains information about a condition evaluation result during a flow execution. This event is generated when a condition node in the flow evaluates its conditions.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface ConditionResultEvent {
  /**
   * The name of the condition node that evaluated the conditions.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the condition evaluation occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * A list of conditions that were satisfied during the evaluation.
   *
   * @public
   */
  satisfiedConditions: SatisfiedCondition[] | undefined;
}

/**
 * Contains information about a failure that occurred at the flow level during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowFailureEvent {
  /**
   * The timestamp when the failure occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The error code that identifies the type of failure that occurred.
   *
   * @public
   */
  errorCode: FlowErrorCode | undefined;

  /**
   * A descriptive message that provides details about the failure.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Contains the content of an flow execution input or output field.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export type FlowExecutionContent =
  | FlowExecutionContent.DocumentMember
  | FlowExecutionContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowExecutionContent {
  /**
   * The document content of the field, which can contain text or structured data.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an input field provided to a flow during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowInputField {
  /**
   * The name of the input field as defined in the flow's input schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the input field, which can contain text or structured data.
   *
   * @public
   */
  content: FlowExecutionContent | undefined;
}

/**
 * Contains information about the inputs provided to the flow at the start of a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowExecutionInputEvent {
  /**
   * The name of the node that receives the inputs.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the inputs are provided.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * A list of input fields provided to the flow.
   *
   * @public
   */
  fields: FlowInputField[] | undefined;
}

/**
 * Represents an output field produced by a flow during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowOutputField {
  /**
   * The name of the output field as defined in the flow's output schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the output field, which can contain text or structured data.
   *
   * @public
   */
  content: FlowExecutionContent | undefined;
}

/**
 * Contains information about the outputs produced by the flow during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowExecutionOutputEvent {
  /**
   * The name of the node that produces the outputs.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the outputs are produced.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * A list of output fields produced by the flow.
   *
   * @public
   */
  fields: FlowOutputField[] | undefined;
}

/**
 * Contains information about an action (operation) called by a node during execution.
 *
 * @public
 */
export interface NodeActionEvent {
  /**
   * The name of the node that called the operation.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the operation was called.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The ID of the request that the node made to the operation.
   *
   * @public
   */
  requestId: string | undefined;

  /**
   * The name of the service that the node called.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the operation that the node called.
   *
   * @public
   */
  operationName: string | undefined;

  /**
   * The request payload sent to the downstream service.
   *
   * @public
   */
  operationRequest?: __DocumentType | undefined;

  /**
   * The response payload received from the downstream service.
   *
   * @public
   */
  operationResponse?: __DocumentType | undefined;
}

/**
 * Contains trace elements for node execution tracking.
 *
 * @public
 */
export type NodeTraceElements =
  | NodeTraceElements.AgentTracesMember
  | NodeTraceElements.$UnknownMember;

/**
 * @public
 */
export namespace NodeTraceElements {
  /**
   * Agent trace information for the node execution.
   *
   * @public
   */
  export interface AgentTracesMember {
    agentTraces: TracePart[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentTraces?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentTraces: (value: TracePart[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about an internal trace of a specific node during execution.
 *
 * @public
 */
export interface NodeDependencyEvent {
  /**
   * The name of the node that generated the dependency trace.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the dependency trace was generated.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The trace elements containing detailed information about the node execution.
   *
   * @public
   */
  traceElements: NodeTraceElements | undefined;
}

/**
 * Contains information about a failure that occurred at a specific node during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface NodeFailureEvent {
  /**
   * The name of the node where the failure occurred.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the node failure occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The error code that identifies the type of failure that occurred at the node.
   *
   * @public
   */
  errorCode: NodeErrorCode | undefined;

  /**
   * A descriptive message that provides details about the node failure.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Contains the content of a flow node's input or output field for a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export type NodeExecutionContent =
  | NodeExecutionContent.DocumentMember
  | NodeExecutionContent.$UnknownMember;

/**
 * @public
 */
export namespace NodeExecutionContent {
  /**
   * The document content of the field, which can contain text or structured data.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an item in the execution chain for node input tracking.
 *
 * @public
 */
export interface NodeInputExecutionChainItem {
  /**
   * The name of the node in the execution chain.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The index position of this item in the execution chain.
   *
   * @public
   */
  index?: number | undefined;

  /**
   * The type of execution chain item. Supported values are Iterator and Loop.
   *
   * @public
   */
  type: FlowControlNodeType | undefined;
}

/**
 * Represents the source of input data for a node field.
 *
 * @public
 */
export interface NodeInputSource {
  /**
   * The name of the source node that provides the input data.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The name of the output field from the source node.
   *
   * @public
   */
  outputFieldName: string | undefined;

  /**
   * The expression used to extract data from the source.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * Represents an input field provided to a node during a flow execution.
 *
 * @public
 */
export interface NodeInputField {
  /**
   * The name of the input field as defined in the node's input schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the input field, which can contain text or structured data.
   *
   * @public
   */
  content: NodeExecutionContent | undefined;

  /**
   * The source node that provides input data to this field.
   *
   * @public
   */
  source?: NodeInputSource | undefined;

  /**
   * The data type of the input field for compatibility validation.
   *
   * @public
   */
  type?: FlowNodeIODataType | undefined;

  /**
   * The category of the input field.
   *
   * @public
   */
  category?: FlowNodeInputCategory | undefined;

  /**
   * The execution path through nested nodes like iterators and loops.
   *
   * @public
   */
  executionChain?: NodeInputExecutionChainItem[] | undefined;
}

/**
 * Contains information about the inputs provided to a specific node during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface NodeInputEvent {
  /**
   * The name of the node that received the inputs.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the inputs were provided to the node.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * A list of input fields provided to the node.
   *
   * @public
   */
  fields: NodeInputField[] | undefined;
}

/**
 * Represents the next node that receives output data.
 *
 * @public
 */
export interface NodeOutputNext {
  /**
   * The name of the next node that receives the output data.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The name of the input field in the next node that receives the data.
   *
   * @public
   */
  inputFieldName: string | undefined;
}

/**
 * Represents an output field produced by a node during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface NodeOutputField {
  /**
   * The name of the output field as defined in the node's output schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the output field, which can contain text or structured data.
   *
   * @public
   */
  content: NodeExecutionContent | undefined;

  /**
   * The next node that receives output data from this field.
   *
   * @public
   */
  next?: NodeOutputNext[] | undefined;

  /**
   * The data type of the output field for compatibility validation.
   *
   * @public
   */
  type?: FlowNodeIODataType | undefined;
}

/**
 * Contains information about the outputs produced by a specific node during a flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface NodeOutputEvent {
  /**
   * The name of the node that produced the outputs.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The timestamp when the outputs were produced by the node.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * A list of output fields produced by the node.
   *
   * @public
   */
  fields: NodeOutputField[] | undefined;
}

/**
 * Represents an event that occurred during an flow execution. This is a union type that can contain one of several event types, such as node input and output events; flow input and output events; condition node result events, or failure events.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export type FlowExecutionEvent =
  | FlowExecutionEvent.ConditionResultEventMember
  | FlowExecutionEvent.FlowFailureEventMember
  | FlowExecutionEvent.FlowInputEventMember
  | FlowExecutionEvent.FlowOutputEventMember
  | FlowExecutionEvent.NodeActionEventMember
  | FlowExecutionEvent.NodeDependencyEventMember
  | FlowExecutionEvent.NodeFailureEventMember
  | FlowExecutionEvent.NodeInputEventMember
  | FlowExecutionEvent.NodeOutputEventMember
  | FlowExecutionEvent.$UnknownMember;

/**
 * @public
 */
export namespace FlowExecutionEvent {
  /**
   * Contains information about the inputs provided to the flow at the start of execution.
   *
   * @public
   */
  export interface FlowInputEventMember {
    flowInputEvent: FlowExecutionInputEvent;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the outputs produced by the flow at the end of execution.
   *
   * @public
   */
  export interface FlowOutputEventMember {
    flowInputEvent?: never;
    flowOutputEvent: FlowExecutionOutputEvent;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the inputs provided to a specific node during execution.
   *
   * @public
   */
  export interface NodeInputEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent: NodeInputEvent;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the outputs produced by a specific node during execution.
   *
   * @public
   */
  export interface NodeOutputEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent: NodeOutputEvent;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about a condition evaluation result during the flow execution. This event is generated when a condition node in the flow evaluates its conditions.
   *
   * @public
   */
  export interface ConditionResultEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent: ConditionResultEvent;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about a failure that occurred at a specific node during execution.
   *
   * @public
   */
  export interface NodeFailureEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent: NodeFailureEvent;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about a failure that occurred at the flow level during execution.
   *
   * @public
   */
  export interface FlowFailureEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent: FlowFailureEvent;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an action (operation) called by a node during execution.
   *
   * @public
   */
  export interface NodeActionEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent: NodeActionEvent;
    nodeDependencyEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an internal trace of a specific node during execution.
   *
   * @public
   */
  export interface NodeDependencyEventMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent: NodeDependencyEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    flowInputEvent?: never;
    flowOutputEvent?: never;
    nodeInputEvent?: never;
    nodeOutputEvent?: never;
    conditionResultEvent?: never;
    nodeFailureEvent?: never;
    flowFailureEvent?: never;
    nodeActionEvent?: never;
    nodeDependencyEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    flowInputEvent: (value: FlowExecutionInputEvent) => T;
    flowOutputEvent: (value: FlowExecutionOutputEvent) => T;
    nodeInputEvent: (value: NodeInputEvent) => T;
    nodeOutputEvent: (value: NodeOutputEvent) => T;
    conditionResultEvent: (value: ConditionResultEvent) => T;
    nodeFailureEvent: (value: NodeFailureEvent) => T;
    flowFailureEvent: (value: FlowFailureEvent) => T;
    nodeActionEvent: (value: NodeActionEvent) => T;
    nodeDependencyEvent: (value: NodeDependencyEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListFlowExecutionEventsResponse {
  /**
   * A list of events that occurred during the flow execution. Events can include node inputs and outputs, flow inputs and outputs, condition results, and failure events.
   *
   * @public
   */
  flowExecutionEvents: FlowExecutionEvent[] | undefined;

  /**
   * A token to retrieve the next set of results. This value is returned if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionsRequest {
  /**
   * The unique identifier of the flow to list executions for.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias to list executions for.
   *
   * @public
   */
  flowAliasIdentifier?: string | undefined;

  /**
   * The maximum number of flow executions to return in a single response. If more executions exist than the specified `maxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results. This value is returned in the response if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a flow execution, including its status, timestamps, and identifiers.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @public
 */
export interface FlowExecutionSummary {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the flow execution.
   *
   * @public
   */
  executionArn: string | undefined;

  /**
   * The unique identifier of the flow alias used for the execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The version of the flow used for the execution.
   *
   * @public
   */
  flowVersion: string | undefined;

  /**
   * The current status of the flow execution.
   *
   * Flow executions time out after 24 hours.
   *
   * @public
   */
  status: FlowExecutionStatus | undefined;

  /**
   * The timestamp when the flow execution was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.
   *
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionsResponse {
  /**
   * A list of flow execution summaries. Each summary includes the execution ARN, flow identifier, flow alias identifier, flow version, status, and timestamps.
   *
   * @public
   */
  flowExecutionSummaries: FlowExecutionSummary[] | undefined;

  /**
   * A token to retrieve the next set of results. This value is returned if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about an input into the flow.
 *
 * @public
 */
export type FlowInputContent =
  | FlowInputContent.DocumentMember
  | FlowInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowInputContent {
  /**
   * The input to send to the prompt flow input node.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about an input into the prompt flow and where to send it.
 *
 * @public
 */
export interface FlowInput {
  /**
   * The name of the flow input node that begins the prompt flow.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The name of the output from the flow input node that begins the prompt flow.
   *
   * @public
   */
  nodeOutputName?: string | undefined;

  /**
   * Contains information about an input into the prompt flow.
   *
   * @public
   */
  content: FlowInputContent | undefined;

  /**
   * The name of the input from the flow input node.
   *
   * @public
   */
  nodeInputName?: string | undefined;
}

/**
 * Performance settings for a model.
 *
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * To use a latency-optimized version of the model, set to `optimized`.
   *
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * The performance configuration for a model called with InvokeFlow.
 *
 * @public
 */
export interface ModelPerformanceConfiguration {
  /**
   * The latency configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartFlowExecutionRequest {
  /**
   * The unique identifier of the flow to execute.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias to use for the flow execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique name for the flow execution. If you don't provide one, a system-generated name is used.
   *
   * @public
   */
  flowExecutionName?: string | undefined;

  /**
   * The input data required for the flow execution. This must match the input schema defined in the flow.
   *
   * @public
   */
  inputs: FlowInput[] | undefined;

  /**
   * The performance settings for the foundation model used in the flow execution.
   *
   * @public
   */
  modelPerformanceConfiguration?: ModelPerformanceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartFlowExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the flow execution.
   *
   * @public
   */
  executionArn?: string | undefined;
}

/**
 * @public
 */
export interface StopFlowExecutionRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias used for the execution.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * The unique identifier of the flow execution to stop.
   *
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopFlowExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the flow execution that was stopped.
   *
   * @public
   */
  executionArn?: string | undefined;

  /**
   * The updated status of the flow execution after the stop request. This will typically be ABORTED if the execution was successfully stopped.
   *
   * @public
   */
  status: FlowExecutionStatus | undefined;
}

/**
 * @public
 */
export interface InvokeFlowRequest {
  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * The unique identifier of the flow alias.
   *
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * A list of objects, each containing information about an input into the flow.
   *
   * @public
   */
  inputs: FlowInput[] | undefined;

  /**
   * Specifies whether to return the trace for the flow or not. Traces track inputs and outputs for nodes in the flow. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
   *
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  modelPerformanceConfiguration?: ModelPerformanceConfiguration | undefined;

  /**
   * The unique identifier for the current flow execution. If you don't provide a value, Amazon Bedrock creates the identifier for you.
   *
   * @public
   */
  executionId?: string | undefined;
}

/**
 * Contains information about why a flow completed.
 *
 * @public
 */
export interface FlowCompletionEvent {
  /**
   * The reason that the flow completed.
   *
   * @public
   */
  completionReason: FlowCompletionReason | undefined;
}

/**
 * The content structure containing input information for multi-turn flow interactions.
 *
 * @public
 */
export type FlowMultiTurnInputContent =
  | FlowMultiTurnInputContent.DocumentMember
  | FlowMultiTurnInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowMultiTurnInputContent {
  /**
   * The requested additional input to send back to the multi-turn flow node.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response object from the flow multi-turn node requesting additional information.
 *
 * @public
 */
export interface FlowMultiTurnInputRequestEvent {
  /**
   * The name of the node in the flow that is requesting the input.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The type of the node in the flow that is requesting the input.
   *
   * @public
   */
  nodeType: NodeType | undefined;

  /**
   * The content payload containing the input request details for the multi-turn interaction.
   *
   * @public
   */
  content: FlowMultiTurnInputContent | undefined;
}

/**
 * Contains information about the content in an output from prompt flow invocation.
 *
 * @public
 */
export type FlowOutputContent =
  | FlowOutputContent.DocumentMember
  | FlowOutputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowOutputContent {
  /**
   * The content in the output.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about an output from prompt flow invoction.
 *
 * @public
 */
export interface FlowOutputEvent {
  /**
   * The name of the flow output node that the output is from.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The type of the node that the output is from.
   *
   * @public
   */
  nodeType: NodeType | undefined;

  /**
   * The content in the output.
   *
   * @public
   */
  content: FlowOutputContent | undefined;
}

/**
 * Contains information about a condition that was satisfied. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceCondition {
  /**
   * The name of the condition.
   *
   * @public
   */
  conditionName: string | undefined;
}

/**
 * Contains information about an output from a condition node. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceConditionNodeResultEvent {
  /**
   * The name of the condition node.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the trace was returned.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * An array of objects containing information about the conditions that were satisfied.
   *
   * @public
   */
  satisfiedConditions: FlowTraceCondition[] | undefined;
}

/**
 * Contains information about an action (operation) called by a node in an Amazon Bedrock flow. The service generates action events for calls made by prompt nodes, agent nodes, and Amazon Web Services Lambda nodes.
 *
 * @public
 */
export interface FlowTraceNodeActionEvent {
  /**
   * The name of the node that called the operation.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the operation was called.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The ID of the request that the node made to the operation.
   *
   * @public
   */
  requestId: string | undefined;

  /**
   * The name of the service that the node called.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the operation that the node called.
   *
   * @public
   */
  operationName: string | undefined;

  /**
   * The request payload sent to the downstream service.
   *
   * @public
   */
  operationRequest?: __DocumentType | undefined;

  /**
   * The response payload received from the downstream service.
   *
   * @public
   */
  operationResponse?: __DocumentType | undefined;
}

/**
 * Contains trace elements for flow execution tracking.
 *
 * @public
 */
export type TraceElements =
  | TraceElements.AgentTracesMember
  | TraceElements.$UnknownMember;

/**
 * @public
 */
export namespace TraceElements {
  /**
   * Agent trace information for the flow execution.
   *
   * @public
   */
  export interface AgentTracesMember {
    agentTraces: TracePart[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentTraces?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentTraces: (value: TracePart[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a dependency trace event in the flow.
 *
 * @public
 */
export interface FlowTraceDependencyEvent {
  /**
   * The name of the node that generated the dependency trace.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the dependency trace was generated.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The trace elements containing detailed information about the dependency.
   *
   * @public
   */
  traceElements: TraceElements | undefined;
}

/**
 * Contains the content of the node input. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export type FlowTraceNodeInputContent =
  | FlowTraceNodeInputContent.DocumentMember
  | FlowTraceNodeInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowTraceNodeInputContent {
  /**
   * The content of the node input.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an item in the execution chain for flow trace node input tracking.
 *
 * @public
 */
export interface FlowTraceNodeInputExecutionChainItem {
  /**
   * The name of the node in the execution chain.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The index position of this item in the execution chain.
   *
   * @public
   */
  index?: number | undefined;

  /**
   * The type of execution chain item. Supported values are Iterator and Loop.
   *
   * @public
   */
  type: FlowControlNodeType | undefined;
}

/**
 * Represents the source of input data for a flow trace node field.
 *
 * @public
 */
export interface FlowTraceNodeInputSource {
  /**
   * The name of the source node that provides the input data.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The name of the output field from the source node.
   *
   * @public
   */
  outputFieldName: string | undefined;

  /**
   * The expression used to extract data from the source.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * Contains information about a field in the input into a node. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceNodeInputField {
  /**
   * The name of the node input.
   *
   * @public
   */
  nodeInputName: string | undefined;

  /**
   * The content of the node input.
   *
   * @public
   */
  content: FlowTraceNodeInputContent | undefined;

  /**
   * The source node that provides input data to this field.
   *
   * @public
   */
  source?: FlowTraceNodeInputSource | undefined;

  /**
   * The data type of the input field for compatibility validation.
   *
   * @public
   */
  type?: FlowNodeIODataType | undefined;

  /**
   * The category of the input field.
   *
   * @public
   */
  category?: FlowNodeInputCategory | undefined;

  /**
   * The execution path through nested nodes like iterators and loops.
   *
   * @public
   */
  executionChain?: FlowTraceNodeInputExecutionChainItem[] | undefined;
}

/**
 * Contains information about the input into a node. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceNodeInputEvent {
  /**
   * The name of the node that received the input.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the trace was returned.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * An array of objects containing information about each field in the input.
   *
   * @public
   */
  fields: FlowTraceNodeInputField[] | undefined;
}

/**
 * Contains the content of the node output. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export type FlowTraceNodeOutputContent =
  | FlowTraceNodeOutputContent.DocumentMember
  | FlowTraceNodeOutputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowTraceNodeOutputContent {
  /**
   * The content of the node output.
   *
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents the next node that receives output data from a flow trace.
 *
 * @public
 */
export interface FlowTraceNodeOutputNext {
  /**
   * The name of the next node that receives the output data.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The name of the input field in the next node that receives the data.
   *
   * @public
   */
  inputFieldName: string | undefined;
}

/**
 * Contains information about a field in the output from a node. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceNodeOutputField {
  /**
   * The name of the node output.
   *
   * @public
   */
  nodeOutputName: string | undefined;

  /**
   * The content of the node output.
   *
   * @public
   */
  content: FlowTraceNodeOutputContent | undefined;

  /**
   * The next node that receives output data from this field.
   *
   * @public
   */
  next?: FlowTraceNodeOutputNext[] | undefined;

  /**
   * The data type of the output field for compatibility validation.
   *
   * @public
   */
  type?: FlowNodeIODataType | undefined;
}

/**
 * Contains information about the output from a node. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceNodeOutputEvent {
  /**
   * The name of the node that yielded the output.
   *
   * @public
   */
  nodeName: string | undefined;

  /**
   * The date and time that the trace was returned.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * An array of objects containing information about each field in the output.
   *
   * @public
   */
  fields: FlowTraceNodeOutputField[] | undefined;
}

/**
 * Contains information about an input or output for a node in the flow. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export type FlowTrace =
  | FlowTrace.ConditionNodeResultTraceMember
  | FlowTrace.NodeActionTraceMember
  | FlowTrace.NodeDependencyTraceMember
  | FlowTrace.NodeInputTraceMember
  | FlowTrace.NodeOutputTraceMember
  | FlowTrace.$UnknownMember;

/**
 * @public
 */
export namespace FlowTrace {
  /**
   * Contains information about the input into a node.
   *
   * @public
   */
  export interface NodeInputTraceMember {
    nodeInputTrace: FlowTraceNodeInputEvent;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    nodeActionTrace?: never;
    nodeDependencyTrace?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the output from a node.
   *
   * @public
   */
  export interface NodeOutputTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace: FlowTraceNodeOutputEvent;
    conditionNodeResultTrace?: never;
    nodeActionTrace?: never;
    nodeDependencyTrace?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an output from a condition node.
   *
   * @public
   */
  export interface ConditionNodeResultTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace: FlowTraceConditionNodeResultEvent;
    nodeActionTrace?: never;
    nodeDependencyTrace?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an action (operation) called by a node.
   *
   * @public
   */
  export interface NodeActionTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    nodeActionTrace: FlowTraceNodeActionEvent;
    nodeDependencyTrace?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an internal trace of a node.
   *
   * @public
   */
  export interface NodeDependencyTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    nodeActionTrace?: never;
    nodeDependencyTrace: FlowTraceDependencyEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    nodeActionTrace?: never;
    nodeDependencyTrace?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    nodeInputTrace: (value: FlowTraceNodeInputEvent) => T;
    nodeOutputTrace: (value: FlowTraceNodeOutputEvent) => T;
    conditionNodeResultTrace: (value: FlowTraceConditionNodeResultEvent) => T;
    nodeActionTrace: (value: FlowTraceNodeActionEvent) => T;
    nodeDependencyTrace: (value: FlowTraceDependencyEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a trace, which tracks an input or output for a node in the flow. For more information, see [Track each step in your prompt flow by viewing its trace in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html).
 *
 * @public
 */
export interface FlowTraceEvent {
  /**
   * The trace object containing information about an input or output for a node in the flow.
   *
   * @public
   */
  trace: FlowTrace | undefined;
}

/**
 * The output of the flow.
 *
 * @public
 */
export type FlowResponseStream =
  | FlowResponseStream.AccessDeniedExceptionMember
  | FlowResponseStream.BadGatewayExceptionMember
  | FlowResponseStream.ConflictExceptionMember
  | FlowResponseStream.DependencyFailedExceptionMember
  | FlowResponseStream.FlowCompletionEventMember
  | FlowResponseStream.FlowMultiTurnInputRequestEventMember
  | FlowResponseStream.FlowOutputEventMember
  | FlowResponseStream.FlowTraceEventMember
  | FlowResponseStream.InternalServerExceptionMember
  | FlowResponseStream.ResourceNotFoundExceptionMember
  | FlowResponseStream.ServiceQuotaExceededExceptionMember
  | FlowResponseStream.ThrottlingExceptionMember
  | FlowResponseStream.ValidationExceptionMember
  | FlowResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace FlowResponseStream {
  /**
   * Contains information about an output from flow invocation.
   *
   * @public
   */
  export interface FlowOutputEventMember {
    flowOutputEvent: FlowOutputEvent;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about why the flow completed.
   *
   * @public
   */
  export interface FlowCompletionEventMember {
    flowOutputEvent?: never;
    flowCompletionEvent: FlowCompletionEvent;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains information about a trace, which tracks an input or output for a node in the flow.
   *
   * @public
   */
  export interface FlowTraceEventMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent: FlowTraceEvent;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * Input validation failed. Check your request parameters and retry the request.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
   *
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the service quota. Resubmit your request later.
   *
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the limit. Resubmit your request later.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * The request is denied because of missing access permissions. Check your permissions and retry your request.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * There was a conflict performing an operation. Resolve the conflict and retry your request.
   *
   * @public
   */
  export interface ConflictExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency. Check the resource configurations and retry the request.
   *
   * @public
   */
  export interface DependencyFailedExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency due to a server issue. Retry your request.
   *
   * @public
   */
  export interface BadGatewayExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    flowMultiTurnInputRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * The event stream containing the multi-turn input request information from the flow.
   *
   * @public
   */
  export interface FlowMultiTurnInputRequestEventMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent: FlowMultiTurnInputRequestEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    flowMultiTurnInputRequestEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    flowOutputEvent: (value: FlowOutputEvent) => T;
    flowCompletionEvent: (value: FlowCompletionEvent) => T;
    flowTraceEvent: (value: FlowTraceEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    flowMultiTurnInputRequestEvent: (value: FlowMultiTurnInputRequestEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeFlowResponse {
  /**
   * The output of the flow, returned as a stream. If there's an error, the error is returned.
   *
   * @public
   */
  responseStream: AsyncIterable<FlowResponseStream> | undefined;

  /**
   * The unique identifier for the current flow execution.
   *
   * @public
   */
  executionId?: string | undefined;
}

/**
 * Contains information about a natural language query to transform into SQL.
 *
 * @public
 */
export interface QueryGenerationInput {
  /**
   * The type of the query.
   *
   * @public
   */
  type: InputQueryType | undefined;

  /**
   * The text of the query.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * Contains configurations for a knowledge base to use in transformation.
 *
 * @public
 */
export interface TextToSqlKnowledgeBaseConfiguration {
  /**
   * The ARN of the knowledge base
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;
}

/**
 * Contains configurations for transforming text to SQL.
 *
 * @public
 */
export interface TextToSqlConfiguration {
  /**
   * The type of resource to use in transformation.
   *
   * @public
   */
  type: TextToSqlConfigurationType | undefined;

  /**
   * Specifies configurations for a knowledge base to use in transformation.
   *
   * @public
   */
  knowledgeBaseConfiguration?: TextToSqlKnowledgeBaseConfiguration | undefined;
}

/**
 * Contains configurations for transforming the natural language query into SQL.
 *
 * @public
 */
export interface TransformationConfiguration {
  /**
   * The mode of the transformation.
   *
   * @public
   */
  mode: QueryTransformationMode | undefined;

  /**
   * Specifies configurations for transforming text to SQL.
   *
   * @public
   */
  textToSqlConfiguration?: TextToSqlConfiguration | undefined;
}

/**
 * @public
 */
export interface GenerateQueryRequest {
  /**
   * Specifies information about a natural language query to transform into SQL.
   *
   * @public
   */
  queryGenerationInput: QueryGenerationInput | undefined;

  /**
   * Specifies configurations for transforming the natural language query into SQL.
   *
   * @public
   */
  transformationConfiguration: TransformationConfiguration | undefined;
}

/**
 * Contains information about a query generated for a natural language query.
 *
 * @public
 */
export interface GeneratedQuery {
  /**
   * The type of transformed query.
   *
   * @public
   */
  type?: GeneratedQueryType | undefined;

  /**
   * An SQL query that corresponds to the natural language query.
   *
   * @public
   */
  sql?: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryResponse {
  /**
   * A list of objects, each of which defines a generated query that can correspond to the natural language queries.
   *
   * @public
   */
  queries?: GeneratedQuery[] | undefined;
}

/**
 * @public
 */
export interface GetDocumentContentRequest {
  /**
   * The unique identifier of the knowledge base that contains the document.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the document.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the document to retrieve content for.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * The output format for the document content. `RAW` returns the original file. `EXTRACTED` returns parsed text as JSON. Defaults to `RAW`.
   *
   * @public
   */
  outputFormat?: DocumentOutputFormat | undefined;

  /**
   * Contains information about the user making the request. This is used for access control filtering to ensure that results only include documents the user is authorized to access.
   *
   * @public
   */
  userContext?: UserContext | undefined;
}

/**
 * @public
 */
export interface GetDocumentContentResponse {
  /**
   * The MIME type of the document content. For `RAW` format, this is the original file type (for example, `application/pdf`). For `EXTRACTED` format, this is always `application/json`.
   *
   * @public
   */
  mimeType: string | undefined;

  /**
   * A pre-signed URL for downloading the document content. The URL expires after 5 minutes.
   *
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * The size of the document content in bytes available at the pre-signed URL.
   *
   * @public
   */
  documentContentLength?: number | undefined;
}

/**
 * @public
 */
export interface GetIngestedDocumentAclRequest {
  /**
   * The unique identifier of the knowledge base that contains the document.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the document.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The unique identifier of the document to retrieve the ingested access control list (ACL) for.
   *
   * @public
   */
  documentId: string | undefined;
}

/**
 * A group entry within a document access control list (ACL) condition.
 *
 * @public
 */
export interface DocumentAclGroup {
  /**
   * The identifier of the group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The membership type indicating the scope of the group entry.
   *
   * @public
   */
  type: DocumentAclMembershipType | undefined;
}

/**
 * A user entry within a document access control list (ACL) condition.
 *
 * @public
 */
export interface DocumentAclUser {
  /**
   * The identifier of the user.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The membership type indicating the scope of the user entry.
   *
   * @public
   */
  type: DocumentAclMembershipType | undefined;
}

/**
 * A condition within a document access control list (ACL) membership, specifying users and groups that are evaluated together.
 *
 * @public
 */
export interface DocumentAclCondition {
  /**
   * The logical operator for combining users and groups within this condition. Valid values: `AND` – Both a user match and a group match are required. `OR` – Either a user match or a group match is sufficient.
   *
   * @public
   */
  conditionOperator?: DocumentAclMemberRelation | undefined;

  /**
   * The list of user entries in this condition.
   *
   * @public
   */
  users?: DocumentAclUser[] | undefined;

  /**
   * The list of group entries in this condition.
   *
   * @public
   */
  groups?: DocumentAclGroup[] | undefined;
}

/**
 * The membership entry for a document access control list (ACL), containing conditions and their logical relation.
 *
 * @public
 */
export interface DocumentAclMembership {
  /**
   * The logical relation between conditions. Valid values: `AND` – All conditions must match. `OR` – At least one condition must match.
   *
   * @public
   */
  memberRelation?: DocumentAclMemberRelation | undefined;

  /**
   * The list of conditions that determine membership.
   *
   * @public
   */
  conditions?: DocumentAclCondition[] | undefined;
}

/**
 * The access control list for a document, containing allow and deny membership lists. Each list specifies conditions that determine which users and groups are granted or denied access.
 *
 * @public
 */
export interface DocumentAcl {
  /**
   * The list of principals allowed access to the document.
   *
   * @public
   */
  allowList?: DocumentAclMembership | undefined;

  /**
   * The list of principals denied access to the document.
   *
   * @public
   */
  denyList?: DocumentAclMembership | undefined;
}

/**
 * @public
 */
export interface GetIngestedDocumentAclResponse {
  /**
   * The ingested document access control list (ACL) containing allow and deny membership information.
   *
   * @public
   */
  documentAcl: DocumentAcl | undefined;
}

/**
 * Settings for a model called with InvokeAgent.
 *
 * @public
 */
export interface BedrockModelConfigurations {
  /**
   * The performance configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * Specifies parameters that control how the service populates the agent prompt for an `InvokeAgent` or `InvokeInlineAgent` request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.
 *
 * @public
 */
export interface PromptCreationConfigurations {
  /**
   * The number of previous conversations from the ongoing agent session to include in the conversation history of the agent prompt, during the current invocation. This gives you more granular control over the context that the model is made aware of, and helps the model remove older context which is no longer useful during the ongoing agent session.
   *
   * @public
   */
  previousConversationTurnsToInclude?: number | undefined;

  /**
   * If `true`, the service removes any content between `<thinking>` tags from previous conversations in an agent session. The service will only remove content from already processed turns. This helps you remove content which might not be useful for current and subsequent invocations. This can reduce the input token count and potentially save costs. The default value is `false`.
   *
   * @public
   */
  excludePreviousThinkingSteps?: boolean | undefined;
}

/**
 * A content block.
 *
 * @public
 */
export type ContentBlock =
  | ContentBlock.TextMember
  | ContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlock {
  /**
   * The block's text.
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
 * Details about a message.
 *
 * @public
 */
export interface Message {
  /**
   * The message's role.
   *
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * The message's content.
   *
   * @public
   */
  content: ContentBlock[] | undefined;
}

/**
 * A conversation history.
 *
 * @public
 */
export interface ConversationHistory {
  /**
   * The conversation's messages.
   *
   * @public
   */
  messages?: Message[] | undefined;
}

/**
 * The property contains the file to chat with, along with its attributes.
 *
 * @public
 */
export interface ByteContentFile {
  /**
   * The MIME type of data contained in the file used for chat.
   *
   * @public
   */
  mediaType: string | undefined;

  /**
   * The raw bytes of the file to attach. The maximum size of all files that is attached is 10MB. You can attach a maximum of 5 files.
   *
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * Contains details of the s3 object where the source file is located.
 *
 * @public
 */
export interface S3ObjectFile {
  /**
   * The uri of the s3 object.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * The source file of the content contained in the wrapper object.
 *
 * @public
 */
export interface FileSource {
  /**
   * The source type of the files to attach.
   *
   * @public
   */
  sourceType: FileSourceType | undefined;

  /**
   * The s3 location of the files to attach.
   *
   * @public
   */
  s3Location?: S3ObjectFile | undefined;

  /**
   * The data and the text of the attached files.
   *
   * @public
   */
  byteContent?: ByteContentFile | undefined;
}

/**
 * Contains details of the source files.
 *
 * @public
 */
export interface InputFile {
  /**
   * The name of the source file.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies where the files are located.
   *
   * @public
   */
  source: FileSource | undefined;

  /**
   * Specifies how the source files will be used by the code interpreter.
   *
   * @public
   */
  useCase: FileUseCase | undefined;
}

/**
 * Contains information for a metadata field to include in or exclude from consideration when reranking.
 *
 * @public
 */
export interface FieldForReranking {
  /**
   * The name of a metadata field to include in or exclude from consideration when reranking.
   *
   * @public
   */
  fieldName: string | undefined;
}

/**
 * Contains configurations for the metadata fields to include or exclude when considering reranking. If you include the `fieldsToExclude` field, the reranker ignores all the metadata fields that you specify. If you include the `fieldsToInclude` field, the reranker uses only the metadata fields that you specify and ignores all others. You can include only one of these fields.
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
   * An array of objects, each of which specifies a metadata field to include in consideration when reranking. The remaining metadata fields are ignored.
   *
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * An array of objects, each of which specifies a metadata field to exclude from consideration when reranking.
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
 * Contains configurations for the metadata to use in reranking.
 *
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * Specifies whether to consider all metadata when reranking, or only the metadata that you select. If you specify `SELECTIVE`, include the `selectiveModeConfiguration` field.
   *
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * Contains configurations for the metadata fields to include or exclude when considering reranking.
   *
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * Model configuration for a Bedrock reranking model used in managed search.
 *
 * @public
 */
export interface ManagedSearchBedrockRerankingModelConfiguration {
  /**
   * The ARN of the Bedrock reranking model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Additional request fields to pass to the reranking model.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Configuration for a Bedrock reranking model used in managed search.
 *
 * @public
 */
export interface ManagedSearchBedrockRerankingConfiguration {
  /**
   * The model configuration containing the model ARN for reranking.
   *
   * @public
   */
  modelConfiguration: ManagedSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * The number of results to return after reranking.
   *
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * The metadata configuration for reranking.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * Configuration for the reranking model used in managed search.
 *
 * @public
 */
export interface ManagedSearchRerankingConfiguration {
  /**
   * The type of reranking configuration.
   *
   * @public
   */
  type: ManagedSearchRerankingConfigurationType | undefined;

  /**
   * The Bedrock reranking model configuration for managed search.
   *
   * @public
   */
  bedrockRerankingConfiguration?: ManagedSearchBedrockRerankingConfiguration | undefined;
}

/**
 * Details about a metadata attribute.
 *
 * @public
 */
export interface MetadataAttributeSchema {
  /**
   * The attribute's key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The attribute's type.
   *
   * @public
   */
  type: AttributeType | undefined;

  /**
   * The attribute's description.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * Settings for implicit filtering, where a model generates a metadata filter based on the prompt.
 *
 * @public
 */
export interface ImplicitFilterConfiguration {
  /**
   * Metadata that can be used in a filter.
   *
   * @public
   */
  metadataAttributes: MetadataAttributeSchema[] | undefined;

  /**
   * The model that generates the filter.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Contains configurations for an Amazon Bedrock reranker model.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * The ARN of the reranker model to use.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * A JSON object whose keys are request fields for the model and whose values are values for those fields.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Contains configurations for reranking with an Amazon Bedrock reranker model.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * Contains configurations for the reranker model.
   *
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * The number of results to return after reranking.
   *
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * Contains configurations for the metadata to use in reranking.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * Contains configurations for reranking the retrieved results.
 *
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * The type of reranker model.
   *
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * Contains configurations for an Amazon Bedrock reranker model.
   *
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

/**
 * Configurations for streaming.
 *
 * @public
 */
export interface StreamingConfigurations {
  /**
   * Specifies whether to enable streaming for the final response. This is set to `false` by default.
   *
   * @public
   */
  streamFinalResponse?: boolean | undefined;

  /**
   * The guardrail interval to apply as response is generated. By default, the guardrail interval is set to 50 characters. If a larger interval is specified, the response will be generated in larger chunks with fewer `ApplyGuardrail` calls. The following examples show the response generated for *Hello, I am an agent* input string.
   *
   * **Example response in chunks: Interval set to 3 characters**
   *
   * `'Hel', 'lo, ','I am', ' an', ' Age', 'nt'`
   *
   * Each chunk has at least 3 characters except for the last chunk
   *
   * **Example response in chunks: Interval set to 20 or more characters**
   *
   * `Hello, I am an Agent`
   *
   * @public
   */
  applyGuardrailInterval?: number | undefined;
}

/**
 * Contains information about where the text with a citation begins and ends in the generated output.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `span` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `span` field
 *
 * @public
 */
export interface Span {
  /**
   * Where the text with a citation starts in the generated output.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * Where the text with a citation ends in the generated output.
   *
   * @public
   */
  end?: number | undefined;
}

/**
 * Contains the part of the generated text that contains a citation, alongside where it begins and ends.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `textResponsePart` field
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `textResponsePart` field
 *
 * @public
 */
export interface TextResponsePart {
  /**
   * The part of the generated text that contains a citation.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Contains information about where the text with a citation begins and ends in the generated output.
   *
   * @public
   */
  span?: Span | undefined;
}

/**
 * Contains metadata about a part of the generated response that is accompanied by a citation.
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `generatedResponsePart` field
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `generatedResponsePart` field
 *
 * @public
 */
export interface GeneratedResponsePart {
  /**
   * Contains metadata about a textual part of the generated response that is accompanied by a citation.
   *
   * @public
   */
  textResponsePart?: TextResponsePart | undefined;
}

/**
 * An object containing a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.
 *
 * This data type is used in the following API operations:
 *
 * - [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) – in the `citations` field
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `citations` field
 *
 * @public
 */
export interface Citation {
  /**
   * Contains the generated response and metadata
   *
   * @public
   */
  generatedResponsePart?: GeneratedResponsePart | undefined;

  /**
   * Contains metadata about the sources cited for the generated response.
   *
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;
}

/**
 * Contains citations for a part of an agent response.
 *
 * @public
 */
export interface Attribution {
  /**
   * A list of citations and related information for a part of an agent response.
   *
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * Contains a part of an agent response and citations for it.
 *
 * @public
 */
export interface PayloadPart {
  /**
   * A part of the agent response in bytes.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * Contains citations for a part of an agent response.
   *
   * @public
   */
  attribution?: Attribution | undefined;
}

/**
 * Contains details of the response from code interpreter.
 *
 * @public
 */
export interface OutputFile {
  /**
   * The name of the file containing response from code interpreter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of file that contains response from the code interpreter.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The byte count of files that contains response from code interpreter.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * Contains intermediate response for code interpreter if any files have been generated.
 *
 * @public
 */
export interface FilePart {
  /**
   * Files containing intermediate response for the user.
   *
   * @public
   */
  files?: OutputFile[] | undefined;
}

/**
 * The response from invoking the agent and associated citations and trace information.
 *
 * @public
 */
export type ResponseStream =
  | ResponseStream.AccessDeniedExceptionMember
  | ResponseStream.BadGatewayExceptionMember
  | ResponseStream.ChunkMember
  | ResponseStream.ConflictExceptionMember
  | ResponseStream.DependencyFailedExceptionMember
  | ResponseStream.FilesMember
  | ResponseStream.InternalServerExceptionMember
  | ResponseStream.ModelNotReadyExceptionMember
  | ResponseStream.ResourceNotFoundExceptionMember
  | ResponseStream.ReturnControlMember
  | ResponseStream.ServiceQuotaExceededExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.TraceMember
  | ResponseStream.ValidationExceptionMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * Contains a part of an agent response and citations for it.
   *
   * @public
   */
  export interface ChunkMember {
    chunk: PayloadPart;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the agent and session, alongside the agent's reasoning process and results from calling actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace events](https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html).
   *
   * @public
   */
  export interface TraceMember {
    chunk?: never;
    trace: TracePart;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains the parameters and information that the agent elicited from the customer to carry out an action. This information is returned to the system and can be used in your own setup for fulfilling the action.
   *
   * @public
   */
  export interface ReturnControlMember {
    chunk?: never;
    trace?: never;
    returnControl: ReturnControlPayload;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Input validation failed. Check your request parameters and retry the request.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
   *
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the service quota. Resubmit your request later.
   *
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the limit. Resubmit your request later.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The request is denied because of missing access permissions. Check your permissions and retry your request.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was a conflict performing an operation. Resolve the conflict and retry your request.
   *
   * @public
   */
  export interface ConflictExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency. Check the resource configurations and retry the request.
   *
   * @public
   */
  export interface DependencyFailedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency due to a server issue. Retry your request.
   *
   * @public
   */
  export interface BadGatewayExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    modelNotReadyException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The model specified in the request is not ready to serve Inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see [Retry behavior](https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html) in the *AWS SDKs and Tools* reference guide.
   *
   * @public
   */
  export interface ModelNotReadyExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException: ModelNotReadyException;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains intermediate response for code interpreter if any files have been generated.
   *
   * @public
   */
  export interface FilesMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files: FilePart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    modelNotReadyException?: never;
    files?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: PayloadPart) => T;
    trace: (value: TracePart) => T;
    returnControl: (value: ReturnControlPayload) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    modelNotReadyException: (value: ModelNotReadyException) => T;
    files: (value: FilePart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeAgentResponse {
  /**
   * The agent's response to the user prompt.
   *
   * @public
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * The MIME type of the input data in the request. The default value is `application/json`.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The unique identifier of the session with the agent.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the agent memory.
   *
   * @public
   */
  memoryId?: string | undefined;
}

/**
 * Settings for a model called with InvokeInlineAgent.
 *
 * @public
 */
export interface InlineBedrockModelConfigurations {
  /**
   * The latency configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * Settings of an inline collaborator agent.
 *
 * @public
 */
export interface CollaboratorConfiguration {
  /**
   * Name of the inline collaborator agent which must be the same name as specified for `agentName`.
   *
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * Instructions that tell the inline collaborator agent what it should do and how it should interact with users.
   *
   * @public
   */
  collaboratorInstruction: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inline collaborator agent.
   *
   * @public
   */
  agentAliasArn?: string | undefined;

  /**
   * A relay conversation history for the inline collaborator agent.
   *
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;
}

/**
 * The configuration details for the guardrail.
 *
 * @public
 */
export interface GuardrailConfigurationWithArn {
  /**
   * The unique identifier for the guardrail.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion: string | undefined;
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
   * Specifies whether to allow the inline agent to carry out the step specified in the `promptType`. If you set this value to `DISABLED`, the agent skips that step. The default state for each `promptType` is as follows.
   *
   * - `PRE_PROCESSING` – `ENABLED`
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
   * The foundation model to use.
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
 * The structure of the executor invoking the actions in custom orchestration.
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
 * Contains details of the custom orchestration configured for the agent.
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
 * Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a [Lambda function](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html) for an action group or pass them when making an `InvokeInlineAgent` request. Use session state attributes to control and provide conversational context for your inline agent and to help customize your agent's behavior. For more information, see [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html)
 *
 * @public
 */
export interface InlineSessionState {
  /**
   * Contains attributes that persist across a session and the values of those attributes.
   *
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * Contains attributes that persist across a session and the values of those attributes.
   *
   * @public
   */
  promptSessionAttributes?: Record<string, string> | undefined;

  /**
   * Contains information about the results from the action group invocation. For more information, see [Return control to the agent developer](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html).
   *
   * > **Note:** If you include this field in the `sessionState` field, the `inputText` field will be ignored.
   *
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;

  /**
   * The identifier of the invocation of an action. This value must match the `invocationId` returned in the `InvokeInlineAgent` response for the action whose results are provided in the `returnControlInvocationResults` field. For more information, see [Return control to the agent developer](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html).
   *
   * @public
   */
  invocationId?: string | undefined;

  /**
   * Contains information about the files used by code interpreter.
   *
   * @public
   */
  files?: InputFile[] | undefined;

  /**
   * Contains the conversation history that persist across sessions.
   *
   * @public
   */
  conversationHistory?: ConversationHistory | undefined;
}

/**
 * Contains a part of an agent response and citations for it.
 *
 * @public
 */
export interface InlineAgentPayloadPart {
  /**
   * A part of the agent response in bytes.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * Contains citations for a part of an agent response.
   *
   * @public
   */
  attribution?: Attribution | undefined;
}

/**
 * Contains intermediate response for code interpreter if any files have been generated.
 *
 * @public
 */
export interface InlineAgentFilePart {
  /**
   * Files containing intermediate response for the user.
   *
   * @public
   */
  files?: OutputFile[] | undefined;
}

/**
 * Contains information to return from the action group that the agent has predicted to invoke.
 *
 * This data type is used in the [InvokeAgent response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax) API operation.
 *
 * @public
 */
export interface InlineAgentReturnControlPayload {
  /**
   * A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.
   *
   * @public
   */
  invocationInputs?: InvocationInputMember[] | undefined;

  /**
   * The identifier of the action group invocation.
   *
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement).
 *
 * @public
 */
export interface InlineAgentTracePart {
  /**
   * The unique identifier of the session with the agent.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement).
   *
   * @public
   */
  trace?: Trace | undefined;

  /**
   * The caller chain for the trace part.
   *
   * @public
   */
  callerChain?: Caller[] | undefined;

  /**
   * The time that trace occurred.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The collaborator name for the trace part.
   *
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * The response from invoking the agent and associated citations and trace information.
 *
 * @public
 */
export type InlineAgentResponseStream =
  | InlineAgentResponseStream.AccessDeniedExceptionMember
  | InlineAgentResponseStream.BadGatewayExceptionMember
  | InlineAgentResponseStream.ChunkMember
  | InlineAgentResponseStream.ConflictExceptionMember
  | InlineAgentResponseStream.DependencyFailedExceptionMember
  | InlineAgentResponseStream.FilesMember
  | InlineAgentResponseStream.InternalServerExceptionMember
  | InlineAgentResponseStream.ResourceNotFoundExceptionMember
  | InlineAgentResponseStream.ReturnControlMember
  | InlineAgentResponseStream.ServiceQuotaExceededExceptionMember
  | InlineAgentResponseStream.ThrottlingExceptionMember
  | InlineAgentResponseStream.TraceMember
  | InlineAgentResponseStream.ValidationExceptionMember
  | InlineAgentResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace InlineAgentResponseStream {
  /**
   * Contains a part of an agent response and citations for it.
   *
   * @public
   */
  export interface ChunkMember {
    chunk: InlineAgentPayloadPart;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains information about the agent and session, alongside the agent's reasoning process and results from calling actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see [Trace events](https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html).
   *
   * @public
   */
  export interface TraceMember {
    chunk?: never;
    trace: InlineAgentTracePart;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains the parameters and information that the agent elicited from the customer to carry out an action. This information is returned to the system and can be used in your own setup for fulfilling the action.
   *
   * @public
   */
  export interface ReturnControlMember {
    chunk?: never;
    trace?: never;
    returnControl: InlineAgentReturnControlPayload;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * Input validation failed. Check your request parameters and retry the request.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
   *
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the service quota. Resubmit your request later.
   *
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The number of requests exceeds the limit. Resubmit your request later.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * The request is denied because of missing access permissions. Check your permissions and retry your request.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was a conflict performing an operation. Resolve the conflict and retry your request.
   *
   * @public
   */
  export interface ConflictExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency. Check the resource configurations and retry the request.
   *
   * @public
   */
  export interface DependencyFailedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency due to a server issue. Retry your request.
   *
   * @public
   */
  export interface BadGatewayExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    files?: never;
    $unknown?: never;
  }

  /**
   * Contains intermediate response for code interpreter if any files have been generated.
   *
   * @public
   */
  export interface FilesMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files: InlineAgentFilePart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: InlineAgentPayloadPart) => T;
    trace: (value: InlineAgentTracePart) => T;
    returnControl: (value: InlineAgentReturnControlPayload) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    files: (value: InlineAgentFilePart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeInlineAgentResponse {
  /**
   * The inline agent's response to the user prompt.
   *
   * @public
   */
  completion: AsyncIterable<InlineAgentResponseStream> | undefined;

  /**
   * The MIME type of the input data in the request. The default value is application/json.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The unique identifier of the session with the agent.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentMemoryRequest {
  /**
   * The unique identifier of the agent to which the alias belongs.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of an alias of an agent.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The unique identifier of the memory.
   *
   * @public
   */
  memoryId?: string | undefined;

  /**
   * The unique session identifier of the memory.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentMemoryResponse {}

/**
 * @public
 */
export interface GetAgentMemoryRequest {
  /**
   * If the total number of results is greater than the maxItems value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxItems?: number | undefined;

  /**
   * The unique identifier of the agent to which the alias belongs.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The unique identifier of an alias of an agent.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The type of memory.
   *
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * The unique identifier of the memory.
   *
   * @public
   */
  memoryId: string | undefined;
}

/**
 * Contains details of a session summary.
 *
 * @public
 */
export interface MemorySessionSummary {
  /**
   * The unique identifier of the memory where the session summary is stored.
   *
   * @public
   */
  memoryId?: string | undefined;

  /**
   * The identifier for this session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The start time for this session.
   *
   * @public
   */
  sessionStartTime?: Date | undefined;

  /**
   * The time when the memory duration for the session is set to end.
   *
   * @public
   */
  sessionExpiryTime?: Date | undefined;

  /**
   * The summarized text for this session.
   *
   * @public
   */
  summaryText?: string | undefined;
}

/**
 * Contains sessions summaries.
 *
 * @public
 */
export type Memory =
  | Memory.SessionSummaryMember
  | Memory.$UnknownMember;

/**
 * @public
 */
export namespace Memory {
  /**
   * Contains summary of a session.
   *
   * @public
   */
  export interface SessionSummaryMember {
    sessionSummary: MemorySessionSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionSummary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionSummary: (value: MemorySessionSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetAgentMemoryResponse {
  /**
   * If the total number of results is greater than the maxItems value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Contains details of the sessions stored in the memory
   *
   * @public
   */
  memoryContents?: Memory[] | undefined;
}

/**
 * Contains information about the text prompt to optimize.
 *
 * @public
 */
export interface TextPrompt {
  /**
   * The text in the text prompt to optimize.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * Contains information about the prompt to optimize.
 *
 * @public
 */
export type InputPrompt =
  | InputPrompt.TextPromptMember
  | InputPrompt.$UnknownMember;

/**
 * @public
 */
export namespace InputPrompt {
  /**
   * Contains information about the text prompt to optimize.
   *
   * @public
   */
  export interface TextPromptMember {
    textPrompt: TextPrompt;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textPrompt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textPrompt: (value: TextPrompt) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface OptimizePromptRequest {
  /**
   * Contains the prompt to optimize.
   *
   * @public
   */
  input: InputPrompt | undefined;

  /**
   * The unique identifier of the model that you want to optimize the prompt for.
   *
   * @public
   */
  targetModelId: string | undefined;
}

/**
 * An event in which the prompt was analyzed in preparation for optimization.
 *
 * @public
 */
export interface AnalyzePromptEvent {
  /**
   * A message describing the analysis of the prompt.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains information about the optimized prompt.
 *
 * @public
 */
export type OptimizedPrompt =
  | OptimizedPrompt.TextPromptMember
  | OptimizedPrompt.$UnknownMember;

/**
 * @public
 */
export namespace OptimizedPrompt {
  /**
   * Contains information about the text in the prompt that was optimized.
   *
   * @public
   */
  export interface TextPromptMember {
    textPrompt: TextPrompt;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textPrompt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textPrompt: (value: TextPrompt) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An event in which the prompt was optimized.
 *
 * @public
 */
export interface OptimizedPromptEvent {
  /**
   * Contains information about the optimized prompt.
   *
   * @public
   */
  optimizedPrompt?: OptimizedPrompt | undefined;
}

/**
 * The stream containing events in the prompt optimization process.
 *
 * @public
 */
export type OptimizedPromptStream =
  | OptimizedPromptStream.AccessDeniedExceptionMember
  | OptimizedPromptStream.AnalyzePromptEventMember
  | OptimizedPromptStream.BadGatewayExceptionMember
  | OptimizedPromptStream.DependencyFailedExceptionMember
  | OptimizedPromptStream.InternalServerExceptionMember
  | OptimizedPromptStream.OptimizedPromptEventMember
  | OptimizedPromptStream.ThrottlingExceptionMember
  | OptimizedPromptStream.ValidationExceptionMember
  | OptimizedPromptStream.$UnknownMember;

/**
 * @public
 */
export namespace OptimizedPromptStream {
  /**
   * An event in which the prompt was optimized.
   *
   * @public
   */
  export interface OptimizedPromptEventMember {
    optimizedPromptEvent: OptimizedPromptEvent;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * An event in which the prompt was analyzed in preparation for optimization.
   *
   * @public
   */
  export interface AnalyzePromptEventMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent: AnalyzePromptEvent;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException: InternalServerException;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) to increase the rate or number of tokens you can process.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException: ThrottlingException;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * Input validation failed. Check your request parameters and retry the request.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException: ValidationException;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency. Check the resource configurations and retry the request.
   *
   * @public
   */
  export interface DependencyFailedExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException: DependencyFailedException;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * The request is denied because of missing access permissions. Check your permissions and retry your request.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException: AccessDeniedException;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * There was an issue with a dependency due to a server issue. Retry your request.
   *
   * @public
   */
  export interface BadGatewayExceptionMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException: BadGatewayException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    optimizedPromptEvent?: never;
    analyzePromptEvent?: never;
    internalServerException?: never;
    throttlingException?: never;
    validationException?: never;
    dependencyFailedException?: never;
    accessDeniedException?: never;
    badGatewayException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    optimizedPromptEvent: (value: OptimizedPromptEvent) => T;
    analyzePromptEvent: (value: AnalyzePromptEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    throttlingException: (value: ThrottlingException) => T;
    validationException: (value: ValidationException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface OptimizePromptResponse {
  /**
   * The prompt after being optimized for the task.
   *
   * @public
   */
  optimizedPrompt: AsyncIterable<OptimizedPromptStream> | undefined;
}

/**
 * Contains information about a text document to rerank.
 *
 * @public
 */
export interface RerankTextDocument {
  /**
   * The text of the document.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Contains information about a query to submit to the reranker model.
 *
 * @public
 */
export interface RerankQuery {
  /**
   * The type of the query.
   *
   * @public
   */
  type: RerankQueryContentType | undefined;

  /**
   * Contains information about a text query.
   *
   * @public
   */
  textQuery: RerankTextDocument | undefined;
}

/**
 * Contains configurations for a reranker model.
 *
 * @public
 */
export interface BedrockRerankingModelConfiguration {
  /**
   * The ARN of the reranker model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * A JSON object whose keys are request fields for the model and whose values are values for those fields.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Contains configurations for an Amazon Bedrock reranker model.
 *
 * @public
 */
export interface BedrockRerankingConfiguration {
  /**
   * The number of results to return after reranking.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * Contains configurations for a reranker model.
   *
   * @public
   */
  modelConfiguration: BedrockRerankingModelConfiguration | undefined;
}

/**
 * Contains configurations for reranking.
 *
 * @public
 */
export interface RerankingConfiguration {
  /**
   * The type of reranker that the configurations apply to.
   *
   * @public
   */
  type: RerankingConfigurationType | undefined;

  /**
   * Contains configurations for an Amazon Bedrock reranker.
   *
   * @public
   */
  bedrockRerankingConfiguration: BedrockRerankingConfiguration | undefined;
}

/**
 * Contains information about a document to rerank. Choose the `type` to define and include the field that corresponds to the type.
 *
 * @public
 */
export interface RerankDocument {
  /**
   * The type of document to rerank.
   *
   * @public
   */
  type: RerankDocumentType | undefined;

  /**
   * Contains information about a text document to rerank.
   *
   * @public
   */
  textDocument?: RerankTextDocument | undefined;

  /**
   * Contains a JSON document to rerank.
   *
   * @public
   */
  jsonDocument?: __DocumentType | undefined;
}

/**
 * Contains information about a source for reranking.
 *
 * @public
 */
export interface RerankSource {
  /**
   * The type of the source.
   *
   * @public
   */
  type: RerankSourceType | undefined;

  /**
   * Contains an inline definition of a source for reranking.
   *
   * @public
   */
  inlineDocumentSource: RerankDocument | undefined;
}

/**
 * @public
 */
export interface RerankRequest {
  /**
   * An array of objects, each of which contains information about a query to submit to the reranker model.
   *
   * @public
   */
  queries: RerankQuery[] | undefined;

  /**
   * An array of objects, each of which contains information about the sources to rerank.
   *
   * @public
   */
  sources: RerankSource[] | undefined;

  /**
   * Contains configurations for reranking.
   *
   * @public
   */
  rerankingConfiguration: RerankingConfiguration | undefined;

  /**
   * If the total number of results was greater than could fit in a response, a token is returned in the `nextToken` field. You can enter that token in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about a document that was reranked.
 *
 * @public
 */
export interface RerankResult {
  /**
   * The original index of the document from the input sources array.
   *
   * @public
   */
  index: number | undefined;

  /**
   * The relevance score of the document.
   *
   * @public
   */
  relevanceScore: number | undefined;

  /**
   * Contains information about the document.
   *
   * @public
   */
  document?: RerankDocument | undefined;
}

/**
 * @public
 */
export interface RerankResponse {
  /**
   * An array of objects, each of which contains information about the results of reranking.
   *
   * @public
   */
  results: RerankResult[] | undefined;

  /**
   * If the total number of results is greater than can fit in the response, use this token in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the query made to the knowledge base.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `input` field
 *
 * @public
 */
export interface RetrieveAndGenerateInput {
  /**
   * The query made to the knowledge base, in characters.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * The configuration details for the guardrail.
 *
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * The unique identifier for the guardrail.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * Configuration settings for text generation using a language model via the RetrieveAndGenerate operation. Includes parameters like temperature, top-p, maximum token count, and stop sequences.
 *
 * > **Note:** The valid range of `maxTokens` depends on the accepted values for your chosen model's inference parameters. To see the inference parameters for your model, see [Inference parameters for foundation models.](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html)
 *
 * @public
 */
export interface TextInferenceConfig {
  /**
   * Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The maximum number of tokens to generate in the output text. Do not use the minimum of 0 or the maximum of 65536. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * A list of sequences of characters that, if generated, will cause the model to stop generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * The configuration for inference settings when generating responses using RetrieveAndGenerate.
 *
 * @public
 */
export interface InferenceConfig {
  /**
   * Configuration settings specific to text generation while generating responses using RetrieveAndGenerate.
   *
   * @public
   */
  textInferenceConfig?: TextInferenceConfig | undefined;
}

/**
 * Contains the template for the prompt that's sent to the model for response generation. For more information, see [Knowledge base prompt templates](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt).
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `filter` field
 *
 * @public
 */
export interface PromptTemplate {
  /**
   * The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.
   *
   * For more information, see the following resources:
   *
   * - [Knowledge base prompt templates](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt)
   * - [Use XML tags with Anthropic Claude models](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
   *
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * Contains the generation configuration of the external source wrapper object.
 *
 * @public
 */
export interface ExternalSourcesGenerationConfiguration {
  /**
   * Contain the textPromptTemplate string for the external source wrapper object.
   *
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * The configuration details for the guardrail.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Configuration settings for inference when using RetrieveAndGenerate to generate responses while using an external source.
   *
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * Additional model parameters and their corresponding values not included in the textInferenceConfig structure for an external source. Takes in custom model parameters specific to the language model being used.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * The latency configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * This property contains the document to chat with, along with its attributes.
 *
 * @public
 */
export interface ByteContentDoc {
  /**
   * The file name of the document contained in the wrapper object.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The MIME type of the document contained in the wrapper object.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The byte value of the file to upload, encoded as a Base-64 string.
   *
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * The unique wrapper object of the document from the S3 location.
 *
 * @public
 */
export interface S3ObjectDoc {
  /**
   * The file location of the S3 wrapper object.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * The unique external source of the content contained in the wrapper object.
 *
 * @public
 */
export interface ExternalSource {
  /**
   * The source type of the external source wrapper object.
   *
   * @public
   */
  sourceType: ExternalSourceType | undefined;

  /**
   * The S3 location of the external source wrapper object.
   *
   * @public
   */
  s3Location?: S3ObjectDoc | undefined;

  /**
   * The identifier, contentType, and data of the external source wrapper object.
   *
   * @public
   */
  byteContent?: ByteContentDoc | undefined;
}

/**
 * The configurations of the external source wrapper object in the `retrieveAndGenerate` function.
 *
 * @public
 */
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  /**
   * The model Amazon Resource Name (ARN) for the external source wrapper object in the `retrieveAndGenerate` function.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The document for the external source wrapper object in the `retrieveAndGenerate` function.
   *
   * @public
   */
  sources: ExternalSource[] | undefined;

  /**
   * The prompt used with the external source wrapper object with the `retrieveAndGenerate` function.
   *
   * @public
   */
  generationConfiguration?: ExternalSourcesGenerationConfiguration | undefined;
}

/**
 * Contains configurations for response generation based on the knowledge base query results.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax)
 *
 * @public
 */
export interface GenerationConfiguration {
  /**
   * Contains the template for the prompt that's sent to the model for response generation. Generation prompts must include the `$search_results$` variable. For more information, see [Use placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) in the user guide.
   *
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * The configuration details for the guardrail.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Configuration settings for inference when using RetrieveAndGenerate to generate responses while using a knowledge base as a source.
   *
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * Additional model parameters and corresponding values not included in the textInferenceConfig structure for a knowledge base. This allows users to provide custom model parameters specific to the language model being used.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * The latency configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * To split up the prompt and retrieve multiple sources, set the transformation type to `QUERY_DECOMPOSITION`.
 *
 * @public
 */
export interface QueryTransformationConfiguration {
  /**
   * The type of transformation to apply to the prompt.
   *
   * @public
   */
  type: QueryTransformationType | undefined;
}
