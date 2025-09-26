// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { BedrockAgentRuntimeServiceException as __BaseException } from "./BedrockAgentRuntimeServiceException";

/**
 * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const CustomControlMethod = {
  RETURN_CONTROL: "RETURN_CONTROL",
} as const;

/**
 * @public
 */
export type CustomControlMethod = (typeof CustomControlMethod)[keyof typeof CustomControlMethod];

/**
 * <p> Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user. </p>
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
   * <p> The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action. </p>
   * @public
   */
  export interface LambdaMember {
    lambda: string;
    customControl?: never;
    $unknown?: never;
  }

  /**
   * <p> To return the action group invocation results directly in the <code>InvokeInlineAgent</code> response, specify <code>RETURN_CONTROL</code>. </p>
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

  export interface Visitor<T> {
    lambda: (value: string) => T;
    customControl: (value: CustomControlMethod) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ActionGroupExecutor, visitor: Visitor<T>): T => {
    if (value.lambda !== undefined) return visitor.lambda(value.lambda);
    if (value.customControl !== undefined) return visitor.customControl(value.customControl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  LAMBDA: "LAMBDA",
  RETURN_CONTROL: "RETURN_CONTROL",
} as const;

/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * <p>A parameter for the API request or function.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The parameters in the API request body.</p>
 * @public
 */
export interface RequestBody {
  /**
   * <p>The content in the request body.</p>
   * @public
   */
  content?: Record<string, Parameter[]> | undefined;
}

/**
 * <p>Contains information about the action group being invoked. For more information about the possible structures, see the InvocationInput tab in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-orchestration.html">OrchestrationTrace</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @public
 */
export interface ActionGroupInvocationInput {
  /**
   * <p>The name of the action group.</p>
   * @public
   */
  actionGroupName?: string | undefined;

  /**
   * <p>The API method being used, based off the action group.</p>
   * @public
   */
  verb?: string | undefined;

  /**
   * <p>The path to the API to call, based off the action group.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>The parameters in the Lambda input event.</p>
   * @public
   */
  parameters?: Parameter[] | undefined;

  /**
   * <p>The parameters in the request body for the Lambda input event.</p>
   * @public
   */
  requestBody?: RequestBody | undefined;

  /**
   * <p>The function in the action group to call.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>How fulfillment of the action is handled. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/action-handle.html">Handling fulfillment of the action</a>.</p>
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * <p>The unique identifier of the invocation. Only returned if the <code>executionType</code> is <code>RETURN_CONTROL</code>.</p>
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * <p>Contains information of the usage of the foundation model.</p>
 * @public
 */
export interface Usage {
  /**
   * <p>Contains information about the input tokens from the foundation model usage.</p>
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * <p>Contains information about the output tokens from the foundation model usage.</p>
   * @public
   */
  outputTokens?: number | undefined;
}

/**
 * <p>Provides information about the execution process for different types of invocations, such as model invocation, knowledge base invocation, agent collaborator invocation, guardrail invocation, and code interpreter Invocation.</p>
 * @public
 */
export interface Metadata {
  /**
   * <p>In the final response, <code>startTime</code> is the start time of the agent invocation operation.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>In the final response, <code>endTime</code> is the end time of the agent invocation operation.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p> The total execution time for the specific invocation being processed (model, knowledge base, guardrail, agent collaborator, or code interpreter). It represents how long the individual invocation took.</p>
   * @public
   */
  totalTimeMs?: number | undefined;

  /**
   * <p>The total time it took for the agent to complete execution. This field is only set for the final response.</p>
   * @public
   */
  operationTotalTimeMs?: number | undefined;

  /**
   * <p>A unique identifier associated with the downstream invocation. This ID can be used for tracing, debugging, and identifying specific invocations in customer logs or systems.</p>
   * @public
   */
  clientRequestId?: string | undefined;

  /**
   * <p>Specific to model invocation and contains details about the usage of a foundation model.</p>
   * @public
   */
  usage?: Usage | undefined;
}

/**
 * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
 * @public
 */
export interface ActionGroupInvocationOutput {
  /**
   * <p>The JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Contains information about the action group output.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionGroupSignature = {
  AMAZON_CODEINTERPRETER: "AMAZON.CodeInterpreter",
  AMAZON_USERINPUT: "AMAZON.UserInput",
  ANTHROPIC_BASH: "ANTHROPIC.Bash",
  ANTHROPIC_COMPUTER: "ANTHROPIC.Computer",
  ANTHROPIC_TEXTEDITOR: "ANTHROPIC.TextEditor",
} as const;

/**
 * @public
 */
export type ActionGroupSignature = (typeof ActionGroupSignature)[keyof typeof ActionGroupSignature];

/**
 * @public
 * @enum
 */
export const ActionInvocationType = {
  RESULT: "RESULT",
  USER_CONFIRMATION: "USER_CONFIRMATION",
  USER_CONFIRMATION_AND_RESULT: "USER_CONFIRMATION_AND_RESULT",
} as const;

/**
 * @public
 */
export type ActionInvocationType = (typeof ActionInvocationType)[keyof typeof ActionInvocationType];

/**
 * <p> The identifier information for an Amazon S3 bucket. </p>
 * @public
 */
export interface S3Identifier {
  /**
   * <p> The name of the S3 bucket. </p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p> The S3 object key for the S3 resource. </p>
   * @public
   */
  s3ObjectKey?: string | undefined;
}

/**
 * <p> Contains details about the OpenAPI schema for the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>. You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the s3 field. </p>
 * @public
 */
export type APISchema = APISchema.PayloadMember | APISchema.S3Member | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * <p> Contains details about the S3 object containing the OpenAPI schema for the action group. </p>
   * @public
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * <p> The JSON or YAML-formatted payload defining the OpenAPI schema for the action group. </p>
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

  export interface Visitor<T> {
    s3: (value: S3Identifier) => T;
    payload: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: APISchema, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.payload !== undefined) return visitor.payload(value.payload);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ParameterType = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  STRING: "string",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * <p> Contains details about a parameter in a function for an action group. </p>
 * @public
 */
export interface ParameterDetail {
  /**
   * <p> A description of the parameter. Helps the foundation model determine how to elicit the parameters from the user. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The data type of the parameter. </p>
   * @public
   */
  type: ParameterType | undefined;

  /**
   * <p> Whether the parameter is required for the agent to complete the function for action group invocation. </p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const RequireConfirmation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type RequireConfirmation = (typeof RequireConfirmation)[keyof typeof RequireConfirmation];

/**
 * <p> Defines parameters that the agent needs to invoke from the user to complete the function. Corresponds to an action in an action group. </p>
 * @public
 */
export interface FunctionDefinition {
  /**
   * <p> A name for the function. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A description of the function and its purpose. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The parameters that the agent elicits from the user to fulfill the function. </p>
   * @public
   */
  parameters?: Record<string, ParameterDetail> | undefined;

  /**
   * <p> Contains information if user confirmation is required to invoke the function. </p>
   * @public
   */
  requireConfirmation?: RequireConfirmation | undefined;
}

/**
 * <p> Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema. </p>
 * @public
 */
export type FunctionSchema = FunctionSchema.FunctionsMember | FunctionSchema.$UnknownMember;

/**
 * @public
 */
export namespace FunctionSchema {
  /**
   * <p> A list of functions that each define an action in the action group. </p>
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

  export interface Visitor<T> {
    functions: (value: FunctionDefinition[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FunctionSchema, visitor: Visitor<T>): T => {
    if (value.functions !== undefined) return visitor.functions(value.functions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> Contains details of the inline agent's action group. </p>
 * @public
 */
export interface AgentActionGroup {
  /**
   * <p> The name of the action group. </p>
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * <p> A description of the action group. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specify a built-in or computer use action for this action group. If you specify a value, you must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields empty for this action group. </p> <ul> <li> <p>To allow your agent to request the user for additional information when trying to complete a task, set this field to <code>AMAZON.UserInput</code>. </p> </li> <li> <p>To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to <code>AMAZON.CodeInterpreter</code>.</p> </li> <li> <p>To allow your agent to use an Anthropic computer use tool, specify one of the following values. </p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important> <ul> <li> <p> <code>ANTHROPIC.Computer</code> - Gives the agent permission to use the mouse and keyboard and take screenshots.</p> </li> <li> <p> <code>ANTHROPIC.TextEditor</code> - Gives the agent permission to view, create and edit files.</p> </li> <li> <p> <code>ANTHROPIC.Bash</code> - Gives the agent permission to run commands in a bash shell.</p> </li> </ul> </li> </ul>
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user. </p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * <p> Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>. </p>
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * <p> Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema. </p>
   * @public
   */
  functionSchema?: FunctionSchema | undefined;

  /**
   * <p> The configuration settings for a computer use action. </p> <important> <p>Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>.</p> </important>
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentCollaboration = {
  DISABLED: "DISABLED",
  SUPERVISOR: "SUPERVISOR",
  SUPERVISOR_ROUTER: "SUPERVISOR_ROUTER",
} as const;

/**
 * @public
 */
export type AgentCollaboration = (typeof AgentCollaboration)[keyof typeof AgentCollaboration];

/**
 * @public
 * @enum
 */
export const ConfirmationState = {
  CONFIRM: "CONFIRM",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type ConfirmationState = (typeof ConfirmationState)[keyof typeof ConfirmationState];

/**
 * @public
 * @enum
 */
export const ImageInputFormat = {
  GIF: "gif",
  JPEG: "jpeg",
  PNG: "png",
  WEBP: "webp",
} as const;

/**
 * @public
 */
export type ImageInputFormat = (typeof ImageInputFormat)[keyof typeof ImageInputFormat];

/**
 * <p>Details about the source of an input image in the result from a function in the action group invocation.</p>
 * @public
 */
export type ImageInputSource = ImageInputSource.BytesMember | ImageInputSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageInputSource {
  /**
   * <p> The raw image bytes for the image. If you use an Amazon Web Services SDK, you don't need to encode the image bytes in base64.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImageInputSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about an image in the result from a function in the action group invocation. You can specify images only when the function is a computer use action. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>.</p>
 * @public
 */
export interface ImageInput {
  /**
   * <p>The type of image in the result.</p>
   * @public
   */
  format: ImageInputFormat | undefined;

  /**
   * <p>The source of the image in the result.</p>
   * @public
   */
  source: ImageInputSource | undefined;
}

/**
 * <p>Contains the body of the API response.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControlInvocationResults</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a> </p> </li> </ul>
 * @public
 */
export interface ContentBody {
  /**
   * <p>The body of the API response.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>Lists details, including format and source, for the image in the response from the function call. You can specify only one image and the function in the <code>returnControlInvocationResults</code> must be a computer use action. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p>
   * @public
   */
  images?: ImageInput[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResponseState = {
  FAILURE: "FAILURE",
  REPROMPT: "REPROMPT",
} as const;

/**
 * @public
 */
export type ResponseState = (typeof ResponseState)[keyof typeof ResponseState];

/**
 * <p>Contains information about the API operation that was called from the action group and the response body that was returned.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControlInvocationResults</code> of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a> </p> </li> </ul>
 * @public
 */
export interface ApiResult {
  /**
   * <p>The action group that the API operation belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>The HTTP method for the API operation.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>The path to the API operation.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>Controls the API operations or functions to invoke based on the user confirmation.</p>
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * <p>Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt</p>
   * @public
   */
  responseState?: ResponseState | undefined;

  /**
   * <p>http status code from API execution response (for example: 200, 400, 500).</p>
   * @public
   */
  httpStatusCode?: number | undefined;

  /**
   * <p>The response body from the API operation. The key of the object is the content type (currently, only <code>TEXT</code> is supported). The response may be returned directly or from the Lambda function.</p>
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId?: string | undefined;
}

/**
 * <p>Contains information about the function that was called from the action group and the response that was returned.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControlInvocationResults</code> of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a> </p> </li> </ul>
 * @public
 */
export interface FunctionResult {
  /**
   * <p>The action group that the function belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>Contains the user confirmation information about the function that was called.</p>
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * <p>The name of the function that was called.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>The response from the function call using the parameters. The response might be returned directly or from the Lambda function. Specify <code>TEXT</code> or <code>IMAGES</code>. The key of the object is the content type. You can only specify one type. If you specify <code>IMAGES</code>, you can specify only one image. You can specify images only when the function in the <code>returnControlInvocationResults</code> is a computer use action. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agent-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>.</p>
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * <p>Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt</p>
   * @public
   */
  responseState?: ResponseState | undefined;

  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId?: string | undefined;
}

/**
 * <p>A result from the invocation of an action. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a> </p> </li> </ul>
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
   * <p>The result from the API response from the action group invocation.</p>
   * @public
   */
  export interface ApiResultMember {
    apiResult: ApiResult;
    functionResult?: never;
    $unknown?: never;
  }

  /**
   * <p>The result from the function from the action group invocation.</p>
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

  export interface Visitor<T> {
    apiResult: (value: ApiResult) => T;
    functionResult: (value: FunctionResult) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationResultMember, visitor: Visitor<T>): T => {
    if (value.apiResult !== undefined) return visitor.apiResult(value.apiResult);
    if (value.functionResult !== undefined) return visitor.functionResult(value.functionResult);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An action invocation result.</p>
 * @public
 */
export interface ReturnControlResults {
  /**
   * <p>The action's invocation ID.</p>
   * @public
   */
  invocationId?: string | undefined;

  /**
   * <p>The action invocation result.</p>
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PayloadType = {
  RETURN_CONTROL: "RETURN_CONTROL",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * <p>Input for an agent collaborator. The input can be text or an action invocation result.</p>
 * @public
 */
export interface AgentCollaboratorInputPayload {
  /**
   * <p>The input type.</p>
   * @public
   */
  type?: PayloadType | undefined;

  /**
   * <p>Input text.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>An action invocation result.</p>
   * @public
   */
  returnControlResults?: ReturnControlResults | undefined;
}

/**
 * <p>An agent collaborator invocation input.</p>
 * @public
 */
export interface AgentCollaboratorInvocationInput {
  /**
   * <p>The collaborator's name.</p>
   * @public
   */
  agentCollaboratorName?: string | undefined;

  /**
   * <p>The collaborator's alias ARN.</p>
   * @public
   */
  agentCollaboratorAliasArn?: string | undefined;

  /**
   * <p>Text or action invocation result input for the collaborator.</p>
   * @public
   */
  input?: AgentCollaboratorInputPayload | undefined;
}

/**
 * <p>Information about a parameter to provide to the API request.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface ApiParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type for the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the parameters in the request body.</p>
 * @public
 */
export interface PropertyParameters {
  /**
   * <p>A list of parameters in the request body.</p>
   * @public
   */
  properties?: Parameter[] | undefined;
}

/**
 * <p>The request body to provide for the API request, as the agent elicited from the user.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface ApiRequestBody {
  /**
   * <p>The content of the request body. The key of the object in this field is a media type defining the format of the request body.</p>
   * @public
   */
  content?: Record<string, PropertyParameters> | undefined;
}

/**
 * <p>Contains information about the API operation that the agent predicts should be called.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface ApiInvocationInput {
  /**
   * <p>The action group that the API operation belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>The HTTP method of the API operation.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>The path to the API operation.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>The parameters to provide for the API request, as the agent elicited from the user.</p>
   * @public
   */
  parameters?: ApiParameter[] | undefined;

  /**
   * <p>The request body to provide for the API request, as the agent elicited from the user.</p>
   * @public
   */
  requestBody?: ApiRequestBody | undefined;

  /**
   * <p>Contains information about the API operation to invoke.</p>
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;

  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The agent collaborator's name.</p>
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * <p>Contains information about a parameter of the function.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface FunctionParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains information about the function that the agent predicts should be called.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface FunctionInvocationInput {
  /**
   * <p>The action group that the function belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>A list of parameters of the function.</p>
   * @public
   */
  parameters?: FunctionParameter[] | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>Contains information about the function to invoke,</p>
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;

  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The collaborator's name.</p>
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * <p>Contains details about the API operation or function that the agent predicts should be called. </p> <p>This data type is used in the following API operations:</p> <ul> <li> <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
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
   * <p>Contains information about the API operation that the agent predicts should be called.</p>
   * @public
   */
  export interface ApiInvocationInputMember {
    apiInvocationInput: ApiInvocationInput;
    functionInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the function that the agent predicts should be called.</p>
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

  export interface Visitor<T> {
    apiInvocationInput: (value: ApiInvocationInput) => T;
    functionInvocationInput: (value: FunctionInvocationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationInputMember, visitor: Visitor<T>): T => {
    if (value.apiInvocationInput !== undefined) return visitor.apiInvocationInput(value.apiInvocationInput);
    if (value.functionInvocationInput !== undefined)
      return visitor.functionInvocationInput(value.functionInvocationInput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information to return from the action group that the agent has predicted to invoke.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> </p> </li> </ul>
 * @public
 */
export interface ReturnControlPayload {
  /**
   * <p>A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.</p>
   * @public
   */
  invocationInputs?: InvocationInputMember[] | undefined;

  /**
   * <p>The identifier of the action group invocation.</p>
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * <p>Output from an agent collaborator. The output can be text or an action invocation result.</p>
 * @public
 */
export interface AgentCollaboratorOutputPayload {
  /**
   * <p>The type of output.</p>
   * @public
   */
  type?: PayloadType | undefined;

  /**
   * <p>Text output.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>An action invocation result.</p>
   * @public
   */
  returnControlPayload?: ReturnControlPayload | undefined;
}

/**
 * <p>Output from an agent collaborator.</p>
 * @public
 */
export interface AgentCollaboratorInvocationOutput {
  /**
   * <p>The output's agent collaborator name.</p>
   * @public
   */
  agentCollaboratorName?: string | undefined;

  /**
   * <p>The output's agent collaborator alias ARN.</p>
   * @public
   */
  agentCollaboratorAliasArn?: string | undefined;

  /**
   * <p>The output's output.</p>
   * @public
   */
  output?: AgentCollaboratorOutputPayload | undefined;

  /**
   * <p>Contains information about the output from the agent collaborator.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Details about a caller.</p>
 * @public
 */
export type Caller = Caller.AgentAliasArnMember | Caller.$UnknownMember;

/**
 * @public
 */
export namespace Caller {
  /**
   * <p>The caller's agent alias ARN.</p>
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

  export interface Visitor<T> {
    agentAliasArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Caller, visitor: Visitor<T>): T => {
    if (value.agentAliasArn !== undefined) return visitor.agentAliasArn(value.agentAliasArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> The event in the custom orchestration sequence. Events are the responses which the custom orchestration Lambda function sends as response to the agent. </p>
 * @public
 */
export interface CustomOrchestrationTraceEvent {
  /**
   * <p> The text that prompted the event at this step. </p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p> The trace behavior for the custom orchestration. </p>
 * @public
 */
export interface CustomOrchestrationTrace {
  /**
   * <p> The unique identifier of the trace. </p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p> The event details used with the custom orchestration. </p>
   * @public
   */
  event?: CustomOrchestrationTraceEvent | undefined;
}

/**
 * <p>Contains information about the failure of the interaction.</p>
 * @public
 */
export interface FailureTrace {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The reason the interaction failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The failure code for the trace.</p>
   * @public
   */
  failureCode?: number | undefined;

  /**
   * <p>Information about the failure that occurred.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailAction = {
  INTERVENED: "INTERVENED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailAction = (typeof GuardrailAction)[keyof typeof GuardrailAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailContentPolicyAction =
  (typeof GuardrailContentPolicyAction)[keyof typeof GuardrailContentPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterConfidence =
  (typeof GuardrailContentFilterConfidence)[keyof typeof GuardrailContentFilterConfidence];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterType = {
  HATE: "HATE",
  INSULTS: "INSULTS",
  MISCONDUCT: "MISCONDUCT",
  PROMPT_ATTACK: "PROMPT_ATTACK",
  SEXUAL: "SEXUAL",
  VIOLENCE: "VIOLENCE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterType = (typeof GuardrailContentFilterType)[keyof typeof GuardrailContentFilterType];

/**
 * <p>Details of the content filter used in the Guardrail.</p>
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * <p>The type of content detected in the filter by the Guardrail.</p>
   * @public
   */
  type?: GuardrailContentFilterType | undefined;

  /**
   * <p>The confidence level regarding the content detected in the filter by the Guardrail.</p>
   * @public
   */
  confidence?: GuardrailContentFilterConfidence | undefined;

  /**
   * <p>The action placed on the content by the Guardrail filter.</p>
   * @public
   */
  action?: GuardrailContentPolicyAction | undefined;
}

/**
 * <p>The details of the policy assessment in the Guardrails filter.</p>
 * @public
 */
export interface GuardrailContentPolicyAssessment {
  /**
   * <p>The filter details of the policy assessment used in the Guardrails filter.</p>
   * @public
   */
  filters?: GuardrailContentFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailSensitiveInformationPolicyAction =
  (typeof GuardrailSensitiveInformationPolicyAction)[keyof typeof GuardrailSensitiveInformationPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailPiiEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;

/**
 * @public
 */
export type GuardrailPiiEntityType = (typeof GuardrailPiiEntityType)[keyof typeof GuardrailPiiEntityType];

/**
 * <p>The Guardrail filter to identify and remove personally identifiable information (PII).</p>
 * @public
 */
export interface GuardrailPiiEntityFilter {
  /**
   * <p>The type of PII the Guardrail filter has identified and removed.</p>
   * @public
   */
  type?: GuardrailPiiEntityType | undefined;

  /**
   * <p>The match to settings in the Guardrail filter to identify and remove PII.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action of the Guardrail filter to identify and remove PII.</p>
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * <p>The details for the regex filter used in the Guardrail.</p>
 * @public
 */
export interface GuardrailRegexFilter {
  /**
   * <p>The name details for the regex filter used in the Guardrail.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The regex details for the regex filter used in the Guardrail.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>The match details for the regex filter used in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action details for the regex filter used in the Guardrail.</p>
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * <p>The details of the sensitive policy assessment used in the Guardrail.</p>
 * @public
 */
export interface GuardrailSensitiveInformationPolicyAssessment {
  /**
   * <p>The details of the PII entities used in the sensitive policy assessment for the Guardrail.</p>
   * @public
   */
  piiEntities?: GuardrailPiiEntityFilter[] | undefined;

  /**
   * <p>The details of the regexes used in the sensitive policy assessment for the Guardrail.</p>
   * @public
   */
  regexes?: GuardrailRegexFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailTopicPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailTopicPolicyAction = (typeof GuardrailTopicPolicyAction)[keyof typeof GuardrailTopicPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailTopicType = {
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type GuardrailTopicType = (typeof GuardrailTopicType)[keyof typeof GuardrailTopicType];

/**
 * <p>The details for a specific topic defined in the Guardrail.</p>
 * @public
 */
export interface GuardrailTopic {
  /**
   * <p>The name details on a specific topic in the Guardrail.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type details on a specific topic in the Guardrail.</p>
   * @public
   */
  type?: GuardrailTopicType | undefined;

  /**
   * <p>The action details on a specific topic in the Guardrail.</p>
   * @public
   */
  action?: GuardrailTopicPolicyAction | undefined;
}

/**
 * <p>The details of the policy assessment used in the Guardrail.</p>
 * @public
 */
export interface GuardrailTopicPolicyAssessment {
  /**
   * <p>The topic details of the policy assessment used in the Guardrail.</p>
   * @public
   */
  topics?: GuardrailTopic[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailWordPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailWordPolicyAction = (typeof GuardrailWordPolicyAction)[keyof typeof GuardrailWordPolicyAction];

/**
 * <p>The custom word details for the filter in the Guardrail.</p>
 * @public
 */
export interface GuardrailCustomWord {
  /**
   * <p>The match details for the custom word filter in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action details for the custom word filter in the Guardrail.</p>
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordType = {
  PROFANITY: "PROFANITY",
} as const;

/**
 * @public
 */
export type GuardrailManagedWordType = (typeof GuardrailManagedWordType)[keyof typeof GuardrailManagedWordType];

/**
 * <p>The managed word details for the filter in the Guardrail.</p>
 * @public
 */
export interface GuardrailManagedWord {
  /**
   * <p>The match details for the managed word filter in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The type details for the managed word filter in the Guardrail.</p>
   * @public
   */
  type?: GuardrailManagedWordType | undefined;

  /**
   * <p>The action details for the managed word filter in the Guardrail.</p>
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * <p>The assessment details for words defined in the Guardrail filter.</p>
 * @public
 */
export interface GuardrailWordPolicyAssessment {
  /**
   * <p>The custom word details for words defined in the Guardrail filter.</p>
   * @public
   */
  customWords?: GuardrailCustomWord[] | undefined;

  /**
   * <p>The managed word lists for words defined in the Guardrail filter.</p>
   * @public
   */
  managedWordLists?: GuardrailManagedWord[] | undefined;
}

/**
 * <p>Assessment details of the content analyzed by Guardrails.</p>
 * @public
 */
export interface GuardrailAssessment {
  /**
   * <p>Topic policy details of the Guardrail.</p>
   * @public
   */
  topicPolicy?: GuardrailTopicPolicyAssessment | undefined;

  /**
   * <p>Content policy details of the Guardrail.</p>
   * @public
   */
  contentPolicy?: GuardrailContentPolicyAssessment | undefined;

  /**
   * <p>Word policy details of the Guardrail.</p>
   * @public
   */
  wordPolicy?: GuardrailWordPolicyAssessment | undefined;

  /**
   * <p>Sensitive Information policy details of Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment | undefined;
}

/**
 * <p>The trace details used in the Guardrail.</p>
 * @public
 */
export interface GuardrailTrace {
  /**
   * <p>The trace action details used with the Guardrail.</p>
   * @public
   */
  action?: GuardrailAction | undefined;

  /**
   * <p>The details of the trace Id used in the Guardrail Trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The details of the input assessments used in the Guardrail Trace.</p>
   * @public
   */
  inputAssessments?: GuardrailAssessment[] | undefined;

  /**
   * <p>The details of the output assessments used in the Guardrail Trace.</p>
   * @public
   */
  outputAssessments?: GuardrailAssessment[] | undefined;

  /**
   * <p>Contains information about the Guardrail output.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Contains information about the code interpreter being invoked.</p>
 * @public
 */
export interface CodeInterpreterInvocationInput {
  /**
   * <p>The code for the code interpreter to use.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Files that are uploaded for code interpreter to use.</p>
   * @public
   */
  files?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InvocationType = {
  ACTION_GROUP: "ACTION_GROUP",
  ACTION_GROUP_CODE_INTERPRETER: "ACTION_GROUP_CODE_INTERPRETER",
  AGENT_COLLABORATOR: "AGENT_COLLABORATOR",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * <p>Contains details about the knowledge base to look up and the query to be made.</p>
 * @public
 */
export interface KnowledgeBaseLookupInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to look up.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;
}

/**
 * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
 * @public
 */
export interface InvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Specifies whether the agent is invoking an action group or a knowledge base.</p>
   * @public
   */
  invocationType?: InvocationType | undefined;

  /**
   * <p>Contains information about the action group to be invoked.</p>
   * @public
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput | undefined;

  /**
   * <p>Contains details about the knowledge base to look up and the query to be made.</p>
   * @public
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput | undefined;

  /**
   * <p>Contains information about the code interpreter to be invoked.</p>
   * @public
   */
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput | undefined;

  /**
   * <p>The collaborator's invocation input.</p>
   * @public
   */
  agentCollaboratorInvocationInput?: AgentCollaboratorInvocationInput | undefined;
}

/**
 * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
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
   * <p>The maximum number of tokens allowed in the generated response.</p>
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
 * @public
 * @enum
 */
export const CreationMode = {
  DEFAULT: "DEFAULT",
  OVERRIDDEN: "OVERRIDDEN",
} as const;

/**
 * @public
 */
export type CreationMode = (typeof CreationMode)[keyof typeof CreationMode];

/**
 * @public
 * @enum
 */
export const PromptType = {
  KNOWLEDGE_BASE_RESPONSE_GENERATION: "KNOWLEDGE_BASE_RESPONSE_GENERATION",
  ORCHESTRATION: "ORCHESTRATION",
  POST_PROCESSING: "POST_PROCESSING",
  PRE_PROCESSING: "PRE_PROCESSING",
  ROUTING_CLASSIFIER: "ROUTING_CLASSIFIER",
} as const;

/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * <p>The input for the pre-processing step.</p> <ul> <li> <p>The <code>type</code> matches the agent step.</p> </li> <li> <p>The <code>text</code> contains the prompt.</p> </li> <li> <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p> </li> </ul>
 * @public
 */
export interface ModelInvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The text that prompted the agent at this step.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The step in the agent sequence.</p>
   * @public
   */
  type?: PromptType | undefined;

  /**
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.</p>
   * @public
   */
  overrideLambda?: string | undefined;

  /**
   * <p>Specifies whether the default prompt template was <code>OVERRIDDEN</code>. If it was, the <code>basePromptTemplate</code> that was set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object when the agent was created or updated is used instead.</p>
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration | undefined;

  /**
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>.</p>
   * @public
   */
  parserMode?: CreationMode | undefined;

  /**
   * <p>The identifier of a foundation model.</p>
   * @public
   */
  foundationModel?: string | undefined;
}

/**
 * <p>Contains the raw output from the foundation model.</p>
 * @public
 */
export interface RawResponse {
  /**
   * <p>The foundation model's raw output content.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>Contains information about the reasoning that the model used to return the content in the content block.</p>
 * @public
 */
export interface ReasoningTextBlock {
  /**
   * <p>Text describing the reasoning that the model used to return the content in the content block.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>A hash of all the messages in the conversation to ensure that the content in the reasoning text block isn't tampered with. You must submit the signature in subsequent <code>Converse</code> requests, in addition to the previous messages. If the previous messages are tampered with, the response throws an error.</p>
   * @public
   */
  signature?: string | undefined;
}

/**
 * <p>Contains content regarding the reasoning that the foundation model made with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.</p>
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
   * <p>Contains information about the reasoning that the model used to return the content in the content block.</p>
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: ReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * <p>The content in the reasoning that was encrypted by the model provider for trust and safety reasons.</p>
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

  export interface Visitor<T> {
    reasoningText: (value: ReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReasoningContentBlock, visitor: Visitor<T>): T => {
    if (value.reasoningText !== undefined) return visitor.reasoningText(value.reasoningText);
    if (value.redactedContent !== undefined) return visitor.redactedContent(value.redactedContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The foundation model output from the orchestration step.</p>
 * @public
 */
export interface OrchestrationModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Contains details of the raw response from the foundation model output.</p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p>Contains information about the foundation model output from the orchestration step.</p>
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * <p>Contains content about the reasoning that the model made during the orchestration step. </p>
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * <p>Contains the JSON-formatted string returned by the API invoked by the code interpreter.</p>
 * @public
 */
export interface CodeInterpreterInvocationOutput {
  /**
   * <p>Contains the successful output returned from code execution</p>
   * @public
   */
  executionOutput?: string | undefined;

  /**
   * <p>Contains the error returned from code execution.</p>
   * @public
   */
  executionError?: string | undefined;

  /**
   * <p>Contains output files, if generated by code execution.</p>
   * @public
   */
  files?: string[] | undefined;

  /**
   * <p>Indicates if the execution of the code timed out.</p>
   * @public
   */
  executionTimeout?: boolean | undefined;

  /**
   * <p>Contains information about the output from the code interpreter.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Contains details about the response to the user.</p>
 * @public
 */
export interface FinalResponse {
  /**
   * <p>The text in the response to the user.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Contains information about the invoke agent operation.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrievalResultContentColumnType = {
  BLOB: "BLOB",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  NULL: "NULL",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type RetrievalResultContentColumnType =
  (typeof RetrievalResultContentColumnType)[keyof typeof RetrievalResultContentColumnType];

/**
 * <p>Contains information about a column with a cell to return in retrieval.</p>
 * @public
 */
export interface RetrievalResultContentColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName?: string | undefined;

  /**
   * <p>The value in the column.</p>
   * @public
   */
  columnValue?: string | undefined;

  /**
   * <p>The data type of the value.</p>
   * @public
   */
  type?: RetrievalResultContentColumnType | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrievalResultContentType = {
  IMAGE: "IMAGE",
  ROW: "ROW",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type RetrievalResultContentType = (typeof RetrievalResultContentType)[keyof typeof RetrievalResultContentType];

/**
 * <p>Contains information about a chunk of text from a data source in the knowledge base. If the result is from a structured data source, the cell in the database and the type of the value is also identified.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>content</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>content</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>content</code> field</p> </li> </ul>
 * @public
 */
export interface RetrievalResultContent {
  /**
   * <p>The type of content in the retrieval result.</p>
   * @public
   */
  type?: RetrievalResultContentType | undefined;

  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>A data URI with base64-encoded content from the data source. The URI is in the following format: returned in the following format: <code>data:image/jpeg;base64,$\{base64-encoded string\}</code>.</p>
   * @public
   */
  byteContent?: string | undefined;

  /**
   * <p>Specifies information about the rows with the cells to return in retrieval.</p>
   * @public
   */
  row?: RetrievalResultContentColumn[] | undefined;
}

/**
 * <p>The Confluence data source location.</p>
 * @public
 */
export interface RetrievalResultConfluenceLocation {
  /**
   * <p>The Confluence host URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Contains information about the location of a document in a custom data source.</p>
 * @public
 */
export interface RetrievalResultCustomDocumentLocation {
  /**
   * <p>The ID of the document.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>The location of a result in Amazon Kendra.</p>
 * @public
 */
export interface RetrievalResultKendraDocumentLocation {
  /**
   * <p>The document's uri.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The S3 data source location.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>s3Location</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>s3Location</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>s3Location</code> field</p> </li> </ul>
 * @public
 */
export interface RetrievalResultS3Location {
  /**
   * <p>The S3 URI for the data source location.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The Salesforce data source location.</p>
 * @public
 */
export interface RetrievalResultSalesforceLocation {
  /**
   * <p>The Salesforce host URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>The SharePoint data source location.</p>
 * @public
 */
export interface RetrievalResultSharePointLocation {
  /**
   * <p>The SharePoint site URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Contains information about the SQL query used to retrieve the result.</p>
 * @public
 */
export interface RetrievalResultSqlLocation {
  /**
   * <p>The SQL query used to retrieve the result.</p>
   * @public
   */
  query?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrievalResultLocationType = {
  CONFLUENCE: "CONFLUENCE",
  CUSTOM: "CUSTOM",
  KENDRA: "KENDRA",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SHAREPOINT: "SHAREPOINT",
  SQL: "SQL",
  WEB: "WEB",
} as const;

/**
 * @public
 */
export type RetrievalResultLocationType =
  (typeof RetrievalResultLocationType)[keyof typeof RetrievalResultLocationType];

/**
 * <p>The web URL/URLs data source location.</p>
 * @public
 */
export interface RetrievalResultWebLocation {
  /**
   * <p>The web URL/URLs for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Contains information about the data source location.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>location</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>location</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>location</code> field</p> </li> </ul>
 * @public
 */
export interface RetrievalResultLocation {
  /**
   * <p>The type of data source location.</p>
   * @public
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * <p>The S3 data source location.</p>
   * @public
   */
  s3Location?: RetrievalResultS3Location | undefined;

  /**
   * <p>The web URL/URLs data source location.</p>
   * @public
   */
  webLocation?: RetrievalResultWebLocation | undefined;

  /**
   * <p>The Confluence data source location.</p>
   * @public
   */
  confluenceLocation?: RetrievalResultConfluenceLocation | undefined;

  /**
   * <p>The Salesforce data source location.</p>
   * @public
   */
  salesforceLocation?: RetrievalResultSalesforceLocation | undefined;

  /**
   * <p>The SharePoint data source location.</p>
   * @public
   */
  sharePointLocation?: RetrievalResultSharePointLocation | undefined;

  /**
   * <p>Specifies the location of a document in a custom data source.</p>
   * @public
   */
  customDocumentLocation?: RetrievalResultCustomDocumentLocation | undefined;

  /**
   * <p>The location of a document in Amazon Kendra.</p>
   * @public
   */
  kendraDocumentLocation?: RetrievalResultKendraDocumentLocation | undefined;

  /**
   * <p>Specifies information about the SQL query used to retrieve the result.</p>
   * @public
   */
  sqlLocation?: RetrievalResultSqlLocation | undefined;
}

/**
 * <p>Contains metadata about a source cited for the generated response.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>retrievedReferences</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>retrievedReferences</code> field</p> </li> </ul>
 * @public
 */
export interface RetrievedReference {
  /**
   * <p>Contains the cited text from the data source.</p>
   * @public
   */
  content?: RetrievalResultContent | undefined;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Contains details about the results from looking up the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;

  /**
   * <p>Contains information about the knowledge base output.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * @public
 * @enum
 */
export const Source = {
  ACTION_GROUP: "ACTION_GROUP",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  PARSER: "PARSER",
} as const;

/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * <p>Contains details about the agent's response to reprompt the input.</p>
 * @public
 */
export interface RepromptResponse {
  /**
   * <p>The text reprompting the input.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Specifies what output is prompting the agent to reprompt the input.</p>
   * @public
   */
  source?: Source | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  ACTION_GROUP: "ACTION_GROUP",
  AGENT_COLLABORATOR: "AGENT_COLLABORATOR",
  ASK_USER: "ASK_USER",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  REPROMPT: "REPROMPT",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Contains the result or output of an action group or knowledge base, or the response to the user.</p>
 * @public
 */
export interface Observation {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Specifies what kind of information the agent returns in the observation. The following values are possible.</p> <ul> <li> <p> <code>ACTION_GROUP</code> – The agent returns the result of an action group.</p> </li> <li> <p> <code>KNOWLEDGE_BASE</code> – The agent returns information from a knowledge base.</p> </li> <li> <p> <code>FINISH</code> – The agent returns a final response to the user with no follow-up.</p> </li> <li> <p> <code>ASK_USER</code> – The agent asks the user a question.</p> </li> <li> <p> <code>REPROMPT</code> – The agent prompts the user again for the same information.</p> </li> </ul>
   * @public
   */
  type?: Type | undefined;

  /**
   * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput | undefined;

  /**
   * <p>A collaborator's invocation output.</p>
   * @public
   */
  agentCollaboratorInvocationOutput?: AgentCollaboratorInvocationOutput | undefined;

  /**
   * <p>Contains details about the results from looking up the knowledge base.</p>
   * @public
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput | undefined;

  /**
   * <p>Contains details about the response to the user.</p>
   * @public
   */
  finalResponse?: FinalResponse | undefined;

  /**
   * <p>Contains details about the response to reprompt the input.</p>
   * @public
   */
  repromptResponse?: RepromptResponse | undefined;

  /**
   * <p>Contains the JSON-formatted string returned by the API invoked by the code interpreter.</p>
   * @public
   */
  codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput | undefined;
}

/**
 * <p>Contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
 * @public
 */
export interface Rationale {
  /**
   * <p>The unique identifier of the trace step.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The reasoning or thought process of the agent, based on the input.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
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
   * <p>Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
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
   * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
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
   * <p>Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.</p>
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
   * <p>The input for the orchestration step.</p> <ul> <li> <p>The <code>type</code> is <code>ORCHESTRATION</code>.</p> </li> <li> <p>The <code>text</code> contains the prompt.</p> </li> <li> <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p> </li> </ul>
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
   * <p>Contains information pertaining to the output from the foundation model that is being invoked.</p>
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

  export interface Visitor<T> {
    rationale: (value: Rationale) => T;
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: OrchestrationModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OrchestrationTrace, visitor: Visitor<T>): T => {
    if (value.rationale !== undefined) return visitor.rationale(value.rationale);
    if (value.invocationInput !== undefined) return visitor.invocationInput(value.invocationInput);
    if (value.observation !== undefined) return visitor.observation(value.observation);
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the response from the Lambda parsing of the output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingParsedResponse {
  /**
   * <p>The text returned by the parser.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>The foundation model output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the post-processing step.</p>
   * @public
   */
  parsedResponse?: PostProcessingParsedResponse | undefined;

  /**
   * <p> Details of the raw response from the foundation model output. </p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p> Contains information about the foundation model output from the post-processing step. </p>
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * <p>Contains content about the reasoning that the model made during the post-processing step.</p>
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * <p>Details about the post-processing step, in which the agent shapes the response.</p>
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
   * <p>The input for the post-processing step.</p> <ul> <li> <p>The <code>type</code> is <code>POST_PROCESSING</code>.</p> </li> <li> <p>The <code>text</code> contains the prompt.</p> </li> <li> <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p> </li> </ul>
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the post-processing step.</p>
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

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PostProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PostProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the response from the Lambda parsing of the output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingParsedResponse {
  /**
   * <p>The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.</p>
   * @public
   */
  rationale?: string | undefined;

  /**
   * <p>Whether the user input is valid or not. If <code>false</code>, the agent doesn't proceed to orchestration.</p>
   * @public
   */
  isValid?: boolean | undefined;
}

/**
 * <p>The foundation model output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the pre-processing step.</p>
   * @public
   */
  parsedResponse?: PreProcessingParsedResponse | undefined;

  /**
   * <p> Details of the raw response from the foundation model output. </p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p> Contains information about the foundation model output from the pre-processing step. </p>
   * @public
   */
  metadata?: Metadata | undefined;

  /**
   * <p>Contains content about the reasoning that the model made during the pre-processing step. </p>
   * @public
   */
  reasoningContent?: ReasoningContentBlock | undefined;
}

/**
 * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
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
   * <p>The input for the pre-processing step.</p> <ul> <li> <p>The <code>type</code> is <code>PRE_PROCESSING</code>.</p> </li> <li> <p>The <code>text</code> contains the prompt.</p> </li> <li> <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p> </li> </ul>
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the pre-processing step.</p>
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

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PreProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Invocation output from a routing classifier model.</p>
 * @public
 */
export interface RoutingClassifierModelInvocationOutput {
  /**
   * <p>The invocation's trace ID.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The invocation's raw response.</p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p>The invocation's metadata.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>A trace for a routing classifier.</p>
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
   * <p>The classifier's invocation input.</p>
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
   * <p>The classifier's observation.</p>
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
   * <p>The classifier's model invocation input.</p>
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
   * <p>The classifier's model invocation output.</p>
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

  export interface Visitor<T> {
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: RoutingClassifierModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RoutingClassifierTrace, visitor: Visitor<T>): T => {
    if (value.invocationInput !== undefined) return visitor.invocationInput(value.invocationInput);
    if (value.observation !== undefined) return visitor.observation(value.observation);
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
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
   * <p>The trace details for a trace defined in the Guardrail filter.</p>
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
   * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
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
   * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
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
   * <p>Details about the post-processing step, in which the agent shapes the response..</p>
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
   * <p>A routing classifier's trace.</p>
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
   * <p>Contains information about the failure of the interaction.</p>
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
   * <p> Details about the custom orchestration step in which the agent determines the order in which actions are executed. </p>
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

  export const visit = <T>(value: Trace, visitor: Visitor<T>): T => {
    if (value.guardrailTrace !== undefined) return visitor.guardrailTrace(value.guardrailTrace);
    if (value.preProcessingTrace !== undefined) return visitor.preProcessingTrace(value.preProcessingTrace);
    if (value.orchestrationTrace !== undefined) return visitor.orchestrationTrace(value.orchestrationTrace);
    if (value.postProcessingTrace !== undefined) return visitor.postProcessingTrace(value.postProcessingTrace);
    if (value.routingClassifierTrace !== undefined) return visitor.routingClassifierTrace(value.routingClassifierTrace);
    if (value.failureTrace !== undefined) return visitor.failureTrace(value.failureTrace);
    if (value.customOrchestrationTrace !== undefined)
      return visitor.customOrchestrationTrace(value.customOrchestrationTrace);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
 */
export interface TracePart {
  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
   * @public
   */
  trace?: Trace | undefined;

  /**
   * <p>The part's caller chain.</p>
   * @public
   */
  callerChain?: Caller[] | undefined;

  /**
   * <p> The time of the trace. </p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>The part's collaborator name.</p>
   * @public
   */
  collaboratorName?: string | undefined;

  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The unique identifier of the alias of the agent.</p>
   * @public
   */
  agentAliasId?: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetExecutionFlowSnapshotRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the flow execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow execution.</p>
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetExecutionFlowSnapshotResponse {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the flow execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The version of the flow used for the flow execution.</p>
   * @public
   */
  flowVersion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's used by the flow execution.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The flow definition used for the flow execution, including the nodes, connections, and configuration at the time when the execution started.</p> <p>The definition returns as a string that follows the structure of a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_FlowDefinition.html">FlowDefinition</a> object.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key that's used to encrypt the flow snapshot.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The reason for the exception. If the reason is <code>BEDROCK_MODEL_INVOCATION_SERVICE_UNAVAILABLE</code>, the model invocation service is unavailable. Retry your request.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
 * @public
 */
export interface GetFlowExecutionRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow execution to retrieve.</p>
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowExecutionErrorType = {
  TIMED_OUT: "ExecutionTimedOut",
} as const;

/**
 * @public
 */
export type FlowExecutionErrorType = (typeof FlowExecutionErrorType)[keyof typeof FlowExecutionErrorType];

/**
 * <p>Contains information about an error that occurred during an flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowExecutionError {
  /**
   * <p>The name of the node in the flow where the error occurred (if applicable).</p>
   * @public
   */
  nodeName?: string | undefined;

  /**
   * <p>The error code for the type of error that occurred.</p>
   * @public
   */
  error?: FlowExecutionErrorType | undefined;

  /**
   * <p>A descriptive message that provides details about the error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowExecutionStatus = {
  ABORTED: "Aborted",
  FAILED: "Failed",
  RUNNING: "Running",
  SUCCEEDED: "Succeeded",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type FlowExecutionStatus = (typeof FlowExecutionStatus)[keyof typeof FlowExecutionStatus];

/**
 * @public
 */
export interface GetFlowExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the flow execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The current status of the flow execution.</p> <p>Flow executions time out after 24 hours.</p>
   * @public
   */
  status: FlowExecutionStatus | undefined;

  /**
   * <p>The timestamp when the flow execution started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>A list of errors that occurred during the flow execution. Each error includes an error code, message, and the node where the error occurred, if applicable.</p>
   * @public
   */
  errors?: FlowExecutionError[] | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The version of the flow used for the execution.</p>
   * @public
   */
  flowVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowExecutionEventType = {
  FLOW: "Flow",
  NODE: "Node",
} as const;

/**
 * @public
 */
export type FlowExecutionEventType = (typeof FlowExecutionEventType)[keyof typeof FlowExecutionEventType];

/**
 * @public
 */
export interface ListFlowExecutionEventsRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow execution.</p>
   * @public
   */
  executionIdentifier: string | undefined;

  /**
   * <p>The maximum number of events to return in a single response. If more events exist than the specified maxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next set of results. This value is returned in the response if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The type of events to retrieve. Specify <code>Node</code> for node-level events or <code>Flow</code> for flow-level events.</p>
   * @public
   */
  eventType: FlowExecutionEventType | undefined;
}

/**
 * <p>Represents a condition that was satisfied during a condition node evaluation in a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface SatisfiedCondition {
  /**
   * <p>The name of the condition that was satisfied.</p>
   * @public
   */
  conditionName: string | undefined;
}

/**
 * <p>Contains information about a condition evaluation result during a flow execution. This event is generated when a condition node in the flow evaluates its conditions.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface ConditionResultEvent {
  /**
   * <p>The name of the condition node that evaluated the conditions.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the condition evaluation occurred.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>A list of conditions that were satisfied during the evaluation.</p>
   * @public
   */
  satisfiedConditions: SatisfiedCondition[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowErrorCode = {
  INTERNAL_SERVER: "INTERNAL_SERVER",
  NODE_EXECUTION_FAILED: "NODE_EXECUTION_FAILED",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type FlowErrorCode = (typeof FlowErrorCode)[keyof typeof FlowErrorCode];

/**
 * <p>Contains information about a failure that occurred at the flow level during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowFailureEvent {
  /**
   * <p>The timestamp when the failure occurred.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The error code that identifies the type of failure that occurred.</p>
   * @public
   */
  errorCode: FlowErrorCode | undefined;

  /**
   * <p>A descriptive message that provides details about the failure.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>Contains the content of an flow execution input or output field.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export type FlowExecutionContent = FlowExecutionContent.DocumentMember | FlowExecutionContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowExecutionContent {
  /**
   * <p>The document content of the field, which can contain text or structured data.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowExecutionContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents an input field provided to a flow during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowInputField {
  /**
   * <p>The name of the input field as defined in the flow's input schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the input field, which can contain text or structured data.</p>
   * @public
   */
  content: FlowExecutionContent | undefined;
}

/**
 * <p>Contains information about the inputs provided to the flow at the start of a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowExecutionInputEvent {
  /**
   * <p>The name of the node that receives the inputs.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the inputs are provided.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>A list of input fields provided to the flow.</p>
   * @public
   */
  fields: FlowInputField[] | undefined;
}

/**
 * <p>Represents an output field produced by a flow during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowOutputField {
  /**
   * <p>The name of the output field as defined in the flow's output schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the output field, which can contain text or structured data.</p>
   * @public
   */
  content: FlowExecutionContent | undefined;
}

/**
 * <p>Contains information about the outputs produced by the flow during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowExecutionOutputEvent {
  /**
   * <p>The name of the node that produces the outputs.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the outputs are produced.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>A list of output fields produced by the flow.</p>
   * @public
   */
  fields: FlowOutputField[] | undefined;
}

/**
 * <p>Contains information about an action (operation) called by a node during execution.</p>
 * @public
 */
export interface NodeActionEvent {
  /**
   * <p>The name of the node that called the operation.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the operation was called.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The ID of the request that the node made to the operation.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the service that the node called.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the operation that the node called.</p>
   * @public
   */
  operationName: string | undefined;

  /**
   * <p>The request payload sent to the downstream service.</p>
   * @public
   */
  operationRequest?: __DocumentType | undefined;

  /**
   * <p>The response payload received from the downstream service.</p>
   * @public
   */
  operationResponse?: __DocumentType | undefined;
}

/**
 * <p>Contains trace elements for node execution tracking.</p>
 * @public
 */
export type NodeTraceElements = NodeTraceElements.AgentTracesMember | NodeTraceElements.$UnknownMember;

/**
 * @public
 */
export namespace NodeTraceElements {
  /**
   * <p>Agent trace information for the node execution.</p>
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

  export interface Visitor<T> {
    agentTraces: (value: TracePart[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NodeTraceElements, visitor: Visitor<T>): T => {
    if (value.agentTraces !== undefined) return visitor.agentTraces(value.agentTraces);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about an internal trace of a specific node during execution.</p>
 * @public
 */
export interface NodeDependencyEvent {
  /**
   * <p>The name of the node that generated the dependency trace.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the dependency trace was generated.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The trace elements containing detailed information about the node execution.</p>
   * @public
   */
  traceElements: NodeTraceElements | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeErrorCode = {
  BAD_GATEWAY: "BAD_GATEWAY",
  DEPENDENCY_FAILED: "DEPENDENCY_FAILED",
  INTERNAL_SERVER: "INTERNAL_SERVER",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type NodeErrorCode = (typeof NodeErrorCode)[keyof typeof NodeErrorCode];

/**
 * <p>Contains information about a failure that occurred at a specific node during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface NodeFailureEvent {
  /**
   * <p>The name of the node where the failure occurred.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the node failure occurred.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The error code that identifies the type of failure that occurred at the node.</p>
   * @public
   */
  errorCode: NodeErrorCode | undefined;

  /**
   * <p>A descriptive message that provides details about the node failure.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowNodeInputCategory = {
  EXIT_LOOP: "ExitLoop",
  LOOP_CONDITION: "LoopCondition",
  RETURN_VALUE_TO_LOOP_START: "ReturnValueToLoopStart",
} as const;

/**
 * @public
 */
export type FlowNodeInputCategory = (typeof FlowNodeInputCategory)[keyof typeof FlowNodeInputCategory];

/**
 * <p>Contains the content of a flow node's input or output field for a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export type NodeExecutionContent = NodeExecutionContent.DocumentMember | NodeExecutionContent.$UnknownMember;

/**
 * @public
 */
export namespace NodeExecutionContent {
  /**
   * <p>The document content of the field, which can contain text or structured data.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NodeExecutionContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FlowControlNodeType = {
  ITERATOR: "Iterator",
  LOOP: "Loop",
} as const;

/**
 * @public
 */
export type FlowControlNodeType = (typeof FlowControlNodeType)[keyof typeof FlowControlNodeType];

/**
 * <p>Represents an item in the execution chain for node input tracking.</p>
 * @public
 */
export interface NodeInputExecutionChainItem {
  /**
   * <p>The name of the node in the execution chain.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The index position of this item in the execution chain.</p>
   * @public
   */
  index?: number | undefined;

  /**
   * <p>The type of execution chain item. Supported values are Iterator and Loop.</p>
   * @public
   */
  type: FlowControlNodeType | undefined;
}

/**
 * <p>Represents the source of input data for a node field.</p>
 * @public
 */
export interface NodeInputSource {
  /**
   * <p>The name of the source node that provides the input data.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the output field from the source node.</p>
   * @public
   */
  outputFieldName: string | undefined;

  /**
   * <p>The expression used to extract data from the source.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowNodeIODataType = {
  ARRAY: "Array",
  BOOLEAN: "Boolean",
  NUMBER: "Number",
  OBJECT: "Object",
  STRING: "String",
} as const;

/**
 * @public
 */
export type FlowNodeIODataType = (typeof FlowNodeIODataType)[keyof typeof FlowNodeIODataType];

/**
 * <p>Represents an input field provided to a node during a flow execution.</p>
 * @public
 */
export interface NodeInputField {
  /**
   * <p>The name of the input field as defined in the node's input schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the input field, which can contain text or structured data.</p>
   * @public
   */
  content: NodeExecutionContent | undefined;

  /**
   * <p>The source node that provides input data to this field.</p>
   * @public
   */
  source?: NodeInputSource | undefined;

  /**
   * <p>The data type of the input field for compatibility validation.</p>
   * @public
   */
  type?: FlowNodeIODataType | undefined;

  /**
   * <p>The category of the input field.</p>
   * @public
   */
  category?: FlowNodeInputCategory | undefined;

  /**
   * <p>The execution path through nested nodes like iterators and loops.</p>
   * @public
   */
  executionChain?: NodeInputExecutionChainItem[] | undefined;
}

/**
 * <p>Contains information about the inputs provided to a specific node during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface NodeInputEvent {
  /**
   * <p>The name of the node that received the inputs.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the inputs were provided to the node.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>A list of input fields provided to the node.</p>
   * @public
   */
  fields: NodeInputField[] | undefined;
}

/**
 * <p>Represents the next node that receives output data.</p>
 * @public
 */
export interface NodeOutputNext {
  /**
   * <p>The name of the next node that receives the output data.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the input field in the next node that receives the data.</p>
   * @public
   */
  inputFieldName: string | undefined;
}

/**
 * <p>Represents an output field produced by a node during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface NodeOutputField {
  /**
   * <p>The name of the output field as defined in the node's output schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the output field, which can contain text or structured data.</p>
   * @public
   */
  content: NodeExecutionContent | undefined;

  /**
   * <p>The next node that receives output data from this field.</p>
   * @public
   */
  next?: NodeOutputNext[] | undefined;

  /**
   * <p>The data type of the output field for compatibility validation.</p>
   * @public
   */
  type?: FlowNodeIODataType | undefined;
}

/**
 * <p>Contains information about the outputs produced by a specific node during a flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface NodeOutputEvent {
  /**
   * <p>The name of the node that produced the outputs.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The timestamp when the outputs were produced by the node.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>A list of output fields produced by the node.</p>
   * @public
   */
  fields: NodeOutputField[] | undefined;
}

/**
 * <p>Represents an event that occurred during an flow execution. This is a union type that can contain one of several event types, such as node input and output events; flow input and output events; condition node result events, or failure events.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
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
   * <p>Contains information about the inputs provided to the flow at the start of execution.</p>
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
   * <p>Contains information about the outputs produced by the flow at the end of execution.</p>
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
   * <p>Contains information about the inputs provided to a specific node during execution.</p>
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
   * <p>Contains information about the outputs produced by a specific node during execution.</p>
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
   * <p>Contains information about a condition evaluation result during the flow execution. This event is generated when a condition node in the flow evaluates its conditions.</p>
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
   * <p>Contains information about a failure that occurred at a specific node during execution.</p>
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
   * <p>Contains information about a failure that occurred at the flow level during execution.</p>
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
   * <p>Contains information about an action (operation) called by a node during execution.</p>
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
   * <p>Contains information about an internal trace of a specific node during execution.</p>
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

  export const visit = <T>(value: FlowExecutionEvent, visitor: Visitor<T>): T => {
    if (value.flowInputEvent !== undefined) return visitor.flowInputEvent(value.flowInputEvent);
    if (value.flowOutputEvent !== undefined) return visitor.flowOutputEvent(value.flowOutputEvent);
    if (value.nodeInputEvent !== undefined) return visitor.nodeInputEvent(value.nodeInputEvent);
    if (value.nodeOutputEvent !== undefined) return visitor.nodeOutputEvent(value.nodeOutputEvent);
    if (value.conditionResultEvent !== undefined) return visitor.conditionResultEvent(value.conditionResultEvent);
    if (value.nodeFailureEvent !== undefined) return visitor.nodeFailureEvent(value.nodeFailureEvent);
    if (value.flowFailureEvent !== undefined) return visitor.flowFailureEvent(value.flowFailureEvent);
    if (value.nodeActionEvent !== undefined) return visitor.nodeActionEvent(value.nodeActionEvent);
    if (value.nodeDependencyEvent !== undefined) return visitor.nodeDependencyEvent(value.nodeDependencyEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListFlowExecutionEventsResponse {
  /**
   * <p>A list of events that occurred during the flow execution. Events can include node inputs and outputs, flow inputs and outputs, condition results, and failure events.</p>
   * @public
   */
  flowExecutionEvents: FlowExecutionEvent[] | undefined;

  /**
   * <p>A token to retrieve the next set of results. This value is returned if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionsRequest {
  /**
   * <p>The unique identifier of the flow to list executions for.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias to list executions for.</p>
   * @public
   */
  flowAliasIdentifier?: string | undefined;

  /**
   * <p>The maximum number of flow executions to return in a single response. If more executions exist than the specified <code>maxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next set of results. This value is returned in the response if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a flow execution, including its status, timestamps, and identifiers.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @public
 */
export interface FlowExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the flow execution.</p>
   * @public
   */
  executionArn: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The version of the flow used for the execution.</p>
   * @public
   */
  flowVersion: string | undefined;

  /**
   * <p>The current status of the flow execution.</p> <p>Flow executions time out after 24 hours.</p>
   * @public
   */
  status: FlowExecutionStatus | undefined;

  /**
   * <p>The timestamp when the flow execution was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.</p>
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionsResponse {
  /**
   * <p>A list of flow execution summaries. Each summary includes the execution ARN, flow identifier, flow alias identifier, flow version, status, and timestamps.</p>
   * @public
   */
  flowExecutionSummaries: FlowExecutionSummary[] | undefined;

  /**
   * <p>A token to retrieve the next set of results. This value is returned if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 * @public
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
 * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 * @public
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Contains information about an input into the flow.</p>
 * @public
 */
export type FlowInputContent = FlowInputContent.DocumentMember | FlowInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowInputContent {
  /**
   * <p>The input to send to the prompt flow input node.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowInputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about an input into the prompt flow and where to send it.</p>
 * @public
 */
export interface FlowInput {
  /**
   * <p>The name of the flow input node that begins the prompt flow.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the output from the flow input node that begins the prompt flow.</p>
   * @public
   */
  nodeOutputName?: string | undefined;

  /**
   * <p>Contains information about an input into the prompt flow.</p>
   * @public
   */
  content: FlowInputContent | undefined;

  /**
   * <p>The name of the input from the flow input node.</p>
   * @public
   */
  nodeInputName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PerformanceConfigLatency = {
  OPTIMIZED: "optimized",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type PerformanceConfigLatency = (typeof PerformanceConfigLatency)[keyof typeof PerformanceConfigLatency];

/**
 * <p>Performance settings for a model.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>To use a latency-optimized version of the model, set to <code>optimized</code>.</p>
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>The performance configuration for a model called with <a>InvokeFlow</a>.</p>
 * @public
 */
export interface ModelPerformanceConfiguration {
  /**
   * <p>The latency configuration for the model.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartFlowExecutionRequest {
  /**
   * <p>The unique identifier of the flow to execute.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias to use for the flow execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique name for the flow execution. If you don't provide one, a system-generated name is used.</p>
   * @public
   */
  flowExecutionName?: string | undefined;

  /**
   * <p>The input data required for the flow execution. This must match the input schema defined in the flow.</p>
   * @public
   */
  inputs: FlowInput[] | undefined;

  /**
   * <p>The performance settings for the foundation model used in the flow execution.</p>
   * @public
   */
  modelPerformanceConfiguration?: ModelPerformanceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartFlowExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the flow execution.</p>
   * @public
   */
  executionArn?: string | undefined;
}

/**
 * @public
 */
export interface StopFlowExecutionRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias used for the execution.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow execution to stop.</p>
   * @public
   */
  executionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopFlowExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the flow execution that was stopped.</p>
   * @public
   */
  executionArn?: string | undefined;

  /**
   * <p>The updated status of the flow execution after the stop request. This will typically be ABORTED if the execution was successfully stopped.</p>
   * @public
   */
  status: FlowExecutionStatus | undefined;
}

/**
 * @public
 */
export interface InvokeFlowRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>A list of objects, each containing information about an input into the flow.</p>
   * @public
   */
  inputs: FlowInput[] | undefined;

  /**
   * <p>Specifies whether to return the trace for the flow or not. Traces track inputs and outputs for nodes in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  modelPerformanceConfiguration?: ModelPerformanceConfiguration | undefined;

  /**
   * <p>The unique identifier for the current flow execution. If you don't provide a value, Amazon Bedrock creates the identifier for you. </p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowCompletionReason = {
  INPUT_REQUIRED: "INPUT_REQUIRED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type FlowCompletionReason = (typeof FlowCompletionReason)[keyof typeof FlowCompletionReason];

/**
 * <p>Contains information about why a flow completed.</p>
 * @public
 */
export interface FlowCompletionEvent {
  /**
   * <p>The reason that the flow completed.</p>
   * @public
   */
  completionReason: FlowCompletionReason | undefined;
}

/**
 * <p>The content structure containing input information for multi-turn flow interactions.</p>
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
   * <p>The requested additional input to send back to the multi-turn flow node.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowMultiTurnInputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const NodeType = {
  CONDITION_NODE: "ConditionNode",
  FLOW_INPUT_NODE: "FlowInputNode",
  FLOW_OUTPUT_NODE: "FlowOutputNode",
  KNOWLEDGE_BASE_NODE: "KnowledgeBaseNode",
  LAMBDA_FUNCTION_NODE: "LambdaFunctionNode",
  LEX_NODE: "LexNode",
  PROMPT_NODE: "PromptNode",
} as const;

/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * <p>Response object from the flow multi-turn node requesting additional information.</p>
 * @public
 */
export interface FlowMultiTurnInputRequestEvent {
  /**
   * <p>The name of the node in the flow that is requesting the input.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The type of the node in the flow that is requesting the input.</p>
   * @public
   */
  nodeType: NodeType | undefined;

  /**
   * <p>The content payload containing the input request details for the multi-turn interaction.</p>
   * @public
   */
  content: FlowMultiTurnInputContent | undefined;
}

/**
 * <p>Contains information about the content in an output from prompt flow invocation.</p>
 * @public
 */
export type FlowOutputContent = FlowOutputContent.DocumentMember | FlowOutputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowOutputContent {
  /**
   * <p>The content in the output.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowOutputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about an output from prompt flow invoction.</p>
 * @public
 */
export interface FlowOutputEvent {
  /**
   * <p>The name of the flow output node that the output is from.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The type of the node that the output is from.</p>
   * @public
   */
  nodeType: NodeType | undefined;

  /**
   * <p>The content in the output.</p>
   * @public
   */
  content: FlowOutputContent | undefined;
}

/**
 * <p>Contains information about a condition that was satisfied. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceCondition {
  /**
   * <p>The name of the condition.</p>
   * @public
   */
  conditionName: string | undefined;
}

/**
 * <p>Contains information about an output from a condition node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceConditionNodeResultEvent {
  /**
   * <p>The name of the condition node.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about the conditions that were satisfied.</p>
   * @public
   */
  satisfiedConditions: FlowTraceCondition[] | undefined;
}

/**
 * <p>Contains information about an action (operation) called by a node in an Amazon Bedrock flow. The service generates action events for calls made by prompt nodes, agent nodes, and Amazon Web Services Lambda nodes. </p>
 * @public
 */
export interface FlowTraceNodeActionEvent {
  /**
   * <p>The name of the node that called the operation.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the operation was called.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The ID of the request that the node made to the operation.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the service that the node called.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the operation that the node called.</p>
   * @public
   */
  operationName: string | undefined;

  /**
   * <p>The request payload sent to the downstream service.</p>
   * @public
   */
  operationRequest?: __DocumentType | undefined;

  /**
   * <p>The response payload received from the downstream service.</p>
   * @public
   */
  operationResponse?: __DocumentType | undefined;
}

/**
 * <p>Contains trace elements for flow execution tracking.</p>
 * @public
 */
export type TraceElements = TraceElements.AgentTracesMember | TraceElements.$UnknownMember;

/**
 * @public
 */
export namespace TraceElements {
  /**
   * <p>Agent trace information for the flow execution.</p>
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

  export interface Visitor<T> {
    agentTraces: (value: TracePart[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TraceElements, visitor: Visitor<T>): T => {
    if (value.agentTraces !== undefined) return visitor.agentTraces(value.agentTraces);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a dependency trace event in the flow.</p>
 * @public
 */
export interface FlowTraceDependencyEvent {
  /**
   * <p>The name of the node that generated the dependency trace.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the dependency trace was generated.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The trace elements containing detailed information about the dependency.</p>
   * @public
   */
  traceElements: TraceElements | undefined;
}

/**
 * <p>Contains the content of the node input. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
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
   * <p>The content of the node input.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTraceNodeInputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents an item in the execution chain for flow trace node input tracking.</p>
 * @public
 */
export interface FlowTraceNodeInputExecutionChainItem {
  /**
   * <p>The name of the node in the execution chain.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The index position of this item in the execution chain.</p>
   * @public
   */
  index?: number | undefined;

  /**
   * <p>The type of execution chain item. Supported values are Iterator and Loop.</p>
   * @public
   */
  type: FlowControlNodeType | undefined;
}

/**
 * <p>Represents the source of input data for a flow trace node field.</p>
 * @public
 */
export interface FlowTraceNodeInputSource {
  /**
   * <p>The name of the source node that provides the input data.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the output field from the source node.</p>
   * @public
   */
  outputFieldName: string | undefined;

  /**
   * <p>The expression used to extract data from the source.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>Contains information about a field in the input into a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeInputField {
  /**
   * <p>The name of the node input.</p>
   * @public
   */
  nodeInputName: string | undefined;

  /**
   * <p>The content of the node input.</p>
   * @public
   */
  content: FlowTraceNodeInputContent | undefined;

  /**
   * <p>The source node that provides input data to this field.</p>
   * @public
   */
  source?: FlowTraceNodeInputSource | undefined;

  /**
   * <p>The data type of the input field for compatibility validation.</p>
   * @public
   */
  type?: FlowNodeIODataType | undefined;

  /**
   * <p>The category of the input field.</p>
   * @public
   */
  category?: FlowNodeInputCategory | undefined;

  /**
   * <p>The execution path through nested nodes like iterators and loops.</p>
   * @public
   */
  executionChain?: FlowTraceNodeInputExecutionChainItem[] | undefined;
}

/**
 * <p>Contains information about the input into a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeInputEvent {
  /**
   * <p>The name of the node that received the input.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about each field in the input.</p>
   * @public
   */
  fields: FlowTraceNodeInputField[] | undefined;
}

/**
 * <p>Contains the content of the node output. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
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
   * <p>The content of the node output.</p>
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

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTraceNodeOutputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents the next node that receives output data from a flow trace.</p>
 * @public
 */
export interface FlowTraceNodeOutputNext {
  /**
   * <p>The name of the next node that receives the output data.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the input field in the next node that receives the data.</p>
   * @public
   */
  inputFieldName: string | undefined;
}

/**
 * <p>Contains information about a field in the output from a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeOutputField {
  /**
   * <p>The name of the node output.</p>
   * @public
   */
  nodeOutputName: string | undefined;

  /**
   * <p>The content of the node output.</p>
   * @public
   */
  content: FlowTraceNodeOutputContent | undefined;

  /**
   * <p>The next node that receives output data from this field.</p>
   * @public
   */
  next?: FlowTraceNodeOutputNext[] | undefined;

  /**
   * <p>The data type of the output field for compatibility validation.</p>
   * @public
   */
  type?: FlowNodeIODataType | undefined;
}

/**
 * <p>Contains information about the output from a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeOutputEvent {
  /**
   * <p>The name of the node that yielded the output.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about each field in the output.</p>
   * @public
   */
  fields: FlowTraceNodeOutputField[] | undefined;
}

/**
 * <p>Contains information about an input or output for a node in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
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
   * <p>Contains information about the input into a node.</p>
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
   * <p>Contains information about the output from a node.</p>
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
   * <p>Contains information about an output from a condition node.</p>
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
   * <p>Contains information about an action (operation) called by a node.</p>
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
   * <p>Contains information about an internal trace of a node.</p>
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

  export interface Visitor<T> {
    nodeInputTrace: (value: FlowTraceNodeInputEvent) => T;
    nodeOutputTrace: (value: FlowTraceNodeOutputEvent) => T;
    conditionNodeResultTrace: (value: FlowTraceConditionNodeResultEvent) => T;
    nodeActionTrace: (value: FlowTraceNodeActionEvent) => T;
    nodeDependencyTrace: (value: FlowTraceDependencyEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTrace, visitor: Visitor<T>): T => {
    if (value.nodeInputTrace !== undefined) return visitor.nodeInputTrace(value.nodeInputTrace);
    if (value.nodeOutputTrace !== undefined) return visitor.nodeOutputTrace(value.nodeOutputTrace);
    if (value.conditionNodeResultTrace !== undefined)
      return visitor.conditionNodeResultTrace(value.conditionNodeResultTrace);
    if (value.nodeActionTrace !== undefined) return visitor.nodeActionTrace(value.nodeActionTrace);
    if (value.nodeDependencyTrace !== undefined) return visitor.nodeDependencyTrace(value.nodeDependencyTrace);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a trace, which tracks an input or output for a node in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceEvent {
  /**
   * <p>The trace object containing information about an input or output for a node in the flow.</p>
   * @public
   */
  trace: FlowTrace | undefined;
}

/**
 * <p>The output of the flow.</p>
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
   * <p>Contains information about an output from flow invocation.</p>
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
   * <p>Contains information about why the flow completed.</p>
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
   * <p>Contains information about a trace, which tracks an input or output for a node in the flow.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
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
   * <p>The event stream containing the multi-turn input request information from the flow.</p>
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

  export const visit = <T>(value: FlowResponseStream, visitor: Visitor<T>): T => {
    if (value.flowOutputEvent !== undefined) return visitor.flowOutputEvent(value.flowOutputEvent);
    if (value.flowCompletionEvent !== undefined) return visitor.flowCompletionEvent(value.flowCompletionEvent);
    if (value.flowTraceEvent !== undefined) return visitor.flowTraceEvent(value.flowTraceEvent);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    if (value.flowMultiTurnInputRequestEvent !== undefined)
      return visitor.flowMultiTurnInputRequestEvent(value.flowMultiTurnInputRequestEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeFlowResponse {
  /**
   * <p>The output of the flow, returned as a stream. If there's an error, the error is returned.</p>
   * @public
   */
  responseStream: AsyncIterable<FlowResponseStream> | undefined;

  /**
   * <p>The unique identifier for the current flow execution.</p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InputQueryType = {
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type InputQueryType = (typeof InputQueryType)[keyof typeof InputQueryType];

/**
 * <p>Contains information about a natural language query to transform into SQL.</p>
 * @public
 */
export interface QueryGenerationInput {
  /**
   * <p>The type of the query.</p>
   * @public
   */
  type: InputQueryType | undefined;

  /**
   * <p>The text of the query.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryTransformationMode = {
  TEXT_TO_SQL: "TEXT_TO_SQL",
} as const;

/**
 * @public
 */
export type QueryTransformationMode = (typeof QueryTransformationMode)[keyof typeof QueryTransformationMode];

/**
 * <p>Contains configurations for a knowledge base to use in transformation.</p>
 * @public
 */
export interface TextToSqlKnowledgeBaseConfiguration {
  /**
   * <p>The ARN of the knowledge base</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TextToSqlConfigurationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type TextToSqlConfigurationType = (typeof TextToSqlConfigurationType)[keyof typeof TextToSqlConfigurationType];

/**
 * <p>Contains configurations for transforming text to SQL.</p>
 * @public
 */
export interface TextToSqlConfiguration {
  /**
   * <p>The type of resource to use in transformation.</p>
   * @public
   */
  type: TextToSqlConfigurationType | undefined;

  /**
   * <p>Specifies configurations for a knowledge base to use in transformation.</p>
   * @public
   */
  knowledgeBaseConfiguration?: TextToSqlKnowledgeBaseConfiguration | undefined;
}

/**
 * <p>Contains configurations for transforming the natural language query into SQL.</p>
 * @public
 */
export interface TransformationConfiguration {
  /**
   * <p>The mode of the transformation.</p>
   * @public
   */
  mode: QueryTransformationMode | undefined;

  /**
   * <p>Specifies configurations for transforming text to SQL.</p>
   * @public
   */
  textToSqlConfiguration?: TextToSqlConfiguration | undefined;
}

/**
 * @public
 */
export interface GenerateQueryRequest {
  /**
   * <p>Specifies information about a natural language query to transform into SQL.</p>
   * @public
   */
  queryGenerationInput: QueryGenerationInput | undefined;

  /**
   * <p>Specifies configurations for transforming the natural language query into SQL.</p>
   * @public
   */
  transformationConfiguration: TransformationConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedQueryType = {
  REDSHIFT_SQL: "REDSHIFT_SQL",
} as const;

/**
 * @public
 */
export type GeneratedQueryType = (typeof GeneratedQueryType)[keyof typeof GeneratedQueryType];

/**
 * <p>Contains information about a query generated for a natural language query.</p>
 * @public
 */
export interface GeneratedQuery {
  /**
   * <p>The type of transformed query.</p>
   * @public
   */
  type?: GeneratedQueryType | undefined;

  /**
   * <p>An SQL query that corresponds to the natural language query.</p>
   * @public
   */
  sql?: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryResponse {
  /**
   * <p>A list of objects, each of which defines a generated query that can correspond to the natural language queries.</p>
   * @public
   */
  queries?: GeneratedQuery[] | undefined;
}

/**
 * <p>Settings for a model called with <a>InvokeAgent</a>.</p>
 * @public
 */
export interface BedrockModelConfigurations {
  /**
   * <p>The performance configuration for the model.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>Specifies parameters that control how the service populates the agent prompt for an <code>InvokeAgent</code> or <code>InvokeInlineAgent</code> request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.</p>
 * @public
 */
export interface PromptCreationConfigurations {
  /**
   * <p>The number of previous conversations from the ongoing agent session to include in the conversation history of the agent prompt, during the current invocation. This gives you more granular control over the context that the model is made aware of, and helps the model remove older context which is no longer useful during the ongoing agent session.</p>
   * @public
   */
  previousConversationTurnsToInclude?: number | undefined;

  /**
   * <p>If <code>true</code>, the service removes any content between <code>&lt;thinking&gt;</code> tags from previous conversations in an agent session. The service will only remove content from already processed turns. This helps you remove content which might not be useful for current and subsequent invocations. This can reduce the input token count and potentially save costs. The default value is <code>false</code>.</p>
   * @public
   */
  excludePreviousThinkingSteps?: boolean | undefined;
}

/**
 * <p>A content block.</p>
 * @public
 */
export type ContentBlock = ContentBlock.TextMember | ContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlock {
  /**
   * <p>The block's text.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ConversationRole = {
  ASSISTANT: "assistant",
  USER: "user",
} as const;

/**
 * @public
 */
export type ConversationRole = (typeof ConversationRole)[keyof typeof ConversationRole];

/**
 * <p>Details about a message.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The message's role.</p>
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * <p>The message's content.</p>
   * @public
   */
  content: ContentBlock[] | undefined;
}

/**
 * <p>A conversation history.</p>
 * @public
 */
export interface ConversationHistory {
  /**
   * <p>The conversation's messages.</p>
   * @public
   */
  messages?: Message[] | undefined;
}

/**
 * <p>The property contains the file to chat with, along with its attributes.</p>
 * @public
 */
export interface ByteContentFile {
  /**
   * <p>The MIME type of data contained in the file used for chat.</p>
   * @public
   */
  mediaType: string | undefined;

  /**
   * <p>The raw bytes of the file to attach. The maximum size of all files that is attached is 10MB. You can attach a maximum of 5 files. </p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>Contains details of the s3 object where the source file is located.</p>
 * @public
 */
export interface S3ObjectFile {
  /**
   * <p>The uri of the s3 object.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FileSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;

/**
 * @public
 */
export type FileSourceType = (typeof FileSourceType)[keyof typeof FileSourceType];

/**
 * <p>The source file of the content contained in the wrapper object.</p>
 * @public
 */
export interface FileSource {
  /**
   * <p>The source type of the files to attach.</p>
   * @public
   */
  sourceType: FileSourceType | undefined;

  /**
   * <p>The s3 location of the files to attach.</p>
   * @public
   */
  s3Location?: S3ObjectFile | undefined;

  /**
   * <p>The data and the text of the attached files.</p>
   * @public
   */
  byteContent?: ByteContentFile | undefined;
}

/**
 * @public
 * @enum
 */
export const FileUseCase = {
  CHAT: "CHAT",
  CODE_INTERPRETER: "CODE_INTERPRETER",
} as const;

/**
 * @public
 */
export type FileUseCase = (typeof FileUseCase)[keyof typeof FileUseCase];

/**
 * <p>Contains details of the source files.</p>
 * @public
 */
export interface InputFile {
  /**
   * <p>The name of the source file.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies where the files are located.</p>
   * @public
   */
  source: FileSource | undefined;

  /**
   * <p>Specifies how the source files will be used by the code interpreter.</p>
   * @public
   */
  useCase: FileUseCase | undefined;
}

/**
 * <p>Specifies the name that the metadata attribute must match and the value to which to compare the value of the metadata attribute. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> </p> </li> </ul>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The name that the metadata attribute must match.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value to whcih to compare the value of the metadata attribute.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const AttributeType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;

/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * <p>Details about a metadata attribute.</p>
 * @public
 */
export interface MetadataAttributeSchema {
  /**
   * <p>The attribute's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The attribute's type.</p>
   * @public
   */
  type: AttributeType | undefined;

  /**
   * <p>The attribute's description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>Settings for implicit filtering, where a model generates a metadata filter based on the prompt.</p>
 * @public
 */
export interface ImplicitFilterConfiguration {
  /**
   * <p>Metadata that can be used in a filter.</p>
   * @public
   */
  metadataAttributes: MetadataAttributeSchema[] | undefined;

  /**
   * <p>The model that generates the filter.</p>
   * @public
   */
  modelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchType = {
  HYBRID: "HYBRID",
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

/**
 * @public
 * @enum
 */
export const RerankingMetadataSelectionMode = {
  ALL: "ALL",
  SELECTIVE: "SELECTIVE",
} as const;

/**
 * @public
 */
export type RerankingMetadataSelectionMode =
  (typeof RerankingMetadataSelectionMode)[keyof typeof RerankingMetadataSelectionMode];

/**
 * <p>Contains information for a metadata field to include in or exclude from consideration when reranking.</p>
 * @public
 */
export interface FieldForReranking {
  /**
   * <p>The name of a metadata field to include in or exclude from consideration when reranking.</p>
   * @public
   */
  fieldName: string | undefined;
}

/**
 * <p>Contains configurations for the metadata fields to include or exclude when considering reranking. If you include the <code>fieldsToExclude</code> field, the reranker ignores all the metadata fields that you specify. If you include the <code>fieldsToInclude</code> field, the reranker uses only the metadata fields that you specify and ignores all others. You can include only one of these fields.</p>
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
   * <p>An array of objects, each of which specifies a metadata field to include in consideration when reranking. The remaining metadata fields are ignored.</p>
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * <p>An array of objects, each of which specifies a metadata field to exclude from consideration when reranking.</p>
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

  export interface Visitor<T> {
    fieldsToInclude: (value: FieldForReranking[]) => T;
    fieldsToExclude: (value: FieldForReranking[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RerankingMetadataSelectiveModeConfiguration, visitor: Visitor<T>): T => {
    if (value.fieldsToInclude !== undefined) return visitor.fieldsToInclude(value.fieldsToInclude);
    if (value.fieldsToExclude !== undefined) return visitor.fieldsToExclude(value.fieldsToExclude);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configurations for the metadata to use in reranking.</p>
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * <p>Specifies whether to consider all metadata when reranking, or only the metadata that you select. If you specify <code>SELECTIVE</code>, include the <code>selectiveModeConfiguration</code> field.</p>
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * <p>Contains configurations for the metadata fields to include or exclude when considering reranking.</p>
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * <p>Contains configurations for an Amazon Bedrock reranker model.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * <p>The ARN of the reranker model to use.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>A JSON object whose keys are request fields for the model and whose values are values for those fields.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Contains configurations for reranking with an Amazon Bedrock reranker model.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * <p>Contains configurations for the reranker model.</p>
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * <p>The number of results to return after reranking.</p>
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * <p>Contains configurations for the metadata to use in reranking.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * @public
 * @enum
 */
export const VectorSearchRerankingConfigurationType = {
  BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL",
} as const;

/**
 * @public
 */
export type VectorSearchRerankingConfigurationType =
  (typeof VectorSearchRerankingConfigurationType)[keyof typeof VectorSearchRerankingConfigurationType];

/**
 * <p>Contains configurations for reranking the retrieved results.</p>
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * <p>The type of reranker model.</p>
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * <p>Contains configurations for an Amazon Bedrock reranker model.</p>
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

/**
 * <p>Configurations for streaming.</p>
 * @public
 */
export interface StreamingConfigurations {
  /**
   * <p> Specifies whether to enable streaming for the final response. This is set to <code>false</code> by default. </p>
   * @public
   */
  streamFinalResponse?: boolean | undefined;

  /**
   * <p> The guardrail interval to apply as response is generated. By default, the guardrail interval is set to 50 characters. If a larger interval is specified, the response will be generated in larger chunks with fewer <code>ApplyGuardrail</code> calls. The following examples show the response generated for <i>Hello, I am an agent</i> input string.</p> <p> <b>Example response in chunks: Interval set to 3 characters</b> </p> <p> <code>'Hel', 'lo, ','I am', ' an', ' Age', 'nt'</code> </p> <p>Each chunk has at least 3 characters except for the last chunk</p> <p> <b>Example response in chunks: Interval set to 20 or more characters</b> </p> <p> <code>Hello, I am an Agent</code> </p>
   * @public
   */
  applyGuardrailInterval?: number | undefined;
}

/**
 * <p>Contains information about where the text with a citation begins and ends in the generated output.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>span</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>span</code> field</p> </li> </ul>
 * @public
 */
export interface Span {
  /**
   * <p>Where the text with a citation starts in the generated output.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>Where the text with a citation ends in the generated output.</p>
   * @public
   */
  end?: number | undefined;
}

/**
 * <p>Contains the part of the generated text that contains a citation, alongside where it begins and ends.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>textResponsePart</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>textResponsePart</code> field</p> </li> </ul>
 * @public
 */
export interface TextResponsePart {
  /**
   * <p>The part of the generated text that contains a citation.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   * @public
   */
  span?: Span | undefined;
}

/**
 * <p>Contains metadata about a part of the generated response that is accompanied by a citation.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>generatedResponsePart</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>generatedResponsePart</code> field</p> </li> </ul>
 * @public
 */
export interface GeneratedResponsePart {
  /**
   * <p>Contains metadata about a textual part of the generated response that is accompanied by a citation.</p>
   * @public
   */
  textResponsePart?: TextResponsePart | undefined;
}

/**
 * <p>An object containing a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>citations</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>citations</code> field</p> </li> </ul>
 * @public
 */
export interface Citation {
  /**
   * <p>Contains the generated response and metadata </p>
   * @public
   */
  generatedResponsePart?: GeneratedResponsePart | undefined;

  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;
}

/**
 * <p>Contains citations for a part of an agent response.</p>
 * @public
 */
export interface Attribution {
  /**
   * <p>A list of citations and related information for a part of an agent response.</p>
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * <p>Contains a part of an agent response and citations for it.</p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>A part of the agent response in bytes.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * <p>Contains citations for a part of an agent response.</p>
   * @public
   */
  attribution?: Attribution | undefined;
}

/**
 * <p>Contains details of the response from code interpreter.</p>
 * @public
 */
export interface OutputFile {
  /**
   * <p>The name of the file containing response from code interpreter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of file that contains response from the code interpreter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The byte count of files that contains response from code interpreter.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
 * @public
 */
export interface FilePart {
  /**
   * <p>Files containing intermediate response for the user.</p>
   * @public
   */
  files?: OutputFile[] | undefined;
}

/**
 * <p> The model specified in the request is not ready to serve inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i> reference guide. </p>
 * @public
 */
export class ModelNotReadyException extends __BaseException {
  readonly name: "ModelNotReadyException" = "ModelNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelNotReadyException, __BaseException>) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelNotReadyException.prototype);
  }
}

/**
 * <p>The response from invoking the agent and associated citations and trace information.</p>
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
   * <p>Contains a part of an agent response and citations for it.</p>
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
   * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Trace events</a>.</p>
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
   * <p>Contains the parameters and information that the agent elicited from the customer to carry out an action. This information is returned to the system and can be used in your own setup for fulfilling the action.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
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
   * <p> The model specified in the request is not ready to serve Inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i> reference guide. </p>
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
   * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
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

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.trace !== undefined) return visitor.trace(value.trace);
    if (value.returnControl !== undefined) return visitor.returnControl(value.returnControl);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    if (value.modelNotReadyException !== undefined) return visitor.modelNotReadyException(value.modelNotReadyException);
    if (value.files !== undefined) return visitor.files(value.files);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeAgentResponse {
  /**
   * <p>The agent's response to the user prompt.</p>
   * @public
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the input data in the request. The default value is <code>application/json</code>.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the agent memory.</p>
   * @public
   */
  memoryId?: string | undefined;
}

/**
 * <p>Settings for a model called with <a>InvokeInlineAgent</a>.</p>
 * @public
 */
export interface InlineBedrockModelConfigurations {
  /**
   * <p>The latency configuration for the model.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RelayConversationHistory = {
  DISABLED: "DISABLED",
  TO_COLLABORATOR: "TO_COLLABORATOR",
} as const;

/**
 * @public
 */
export type RelayConversationHistory = (typeof RelayConversationHistory)[keyof typeof RelayConversationHistory];

/**
 * <p> Settings of an inline collaborator agent. </p>
 * @public
 */
export interface CollaboratorConfiguration {
  /**
   * <p> Name of the inline collaborator agent which must be the same name as specified for <code>agentName</code>. </p>
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * <p> Instructions that tell the inline collaborator agent what it should do and how it should interact with users. </p>
   * @public
   */
  collaboratorInstruction: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the inline collaborator agent. </p>
   * @public
   */
  agentAliasArn?: string | undefined;

  /**
   * <p> A relay conversation history for the inline collaborator agent. </p>
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;
}

/**
 * <p> The configuration details for the guardrail. </p>
 * @public
 */
export interface GuardrailConfigurationWithArn {
  /**
   * <p> The unique identifier for the guardrail. </p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p> The version of the guardrail. </p>
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PromptState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PromptState = (typeof PromptState)[keyof typeof PromptState];

/**
 * <p> Contains configurations to override a prompt template in one part of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>. </p>
 * @public
 */
export interface PromptConfiguration {
  /**
   * <p> The step in the agent sequence that this prompt configuration applies to. </p>
   * @public
   */
  promptType?: PromptType | undefined;

  /**
   * <p>Specifies whether to override the default prompt template for this <code>promptType</code>. Set this value to <code>OVERRIDDEN</code> to use the prompt that you provide in the <code>basePromptTemplate</code>. If you leave it as <code>DEFAULT</code>, the agent uses a default prompt template.</p>
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * <p>Specifies whether to allow the inline agent to carry out the step specified in the <code>promptType</code>. If you set this value to <code>DISABLED</code>, the agent skips that step. The default state for each <code>promptType</code> is as follows.</p> <ul> <li> <p> <code>PRE_PROCESSING</code> – <code>ENABLED</code> </p> </li> <li> <p> <code>ORCHESTRATION</code> – <code>ENABLED</code> </p> </li> <li> <p> <code>KNOWLEDGE_BASE_RESPONSE_GENERATION</code> – <code>ENABLED</code> </p> </li> <li> <p> <code>POST_PROCESSING</code> – <code>DISABLED</code> </p> </li> </ul>
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
   * <p> The foundation model to use. </p>
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
 * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>. </p>
 * @public
 */
export interface PromptOverrideConfiguration {
  /**
   * <p>Contains configurations to override a prompt template in one part of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>. </p>
   * @public
   */
  promptConfigurations: PromptConfiguration[] | undefined;

  /**
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the <code>promptConfigurations</code> must contain a <code>parserMode</code> value that is set to <code>OVERRIDDEN</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-parser.html">Parser Lambda function in Amazon Bedrock Agents</a>. </p>
   * @public
   */
  overrideLambda?: string | undefined;
}

/**
 * <p>The structure of the executor invoking the actions in custom orchestration.</p>
 * @public
 */
export type OrchestrationExecutor = OrchestrationExecutor.LambdaMember | OrchestrationExecutor.$UnknownMember;

/**
 * @public
 */
export namespace OrchestrationExecutor {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action. </p>
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

  export interface Visitor<T> {
    lambda: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OrchestrationExecutor, visitor: Visitor<T>): T => {
    if (value.lambda !== undefined) return visitor.lambda(value.lambda);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains details of the custom orchestration configured for the agent. </p>
 * @public
 */
export interface CustomOrchestration {
  /**
   * <p>The structure of the executor invoking the actions in custom orchestration. </p>
   * @public
   */
  executor?: OrchestrationExecutor | undefined;
}

/**
 * <p> Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html">Lambda function</a> for an action group or pass them when making an <code>InvokeInlineAgent</code> request. Use session state attributes to control and provide conversational context for your inline agent and to help customize your agent's behavior. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a> </p>
 * @public
 */
export interface InlineSessionState {
  /**
   * <p> Contains attributes that persist across a session and the values of those attributes. </p>
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * <p> Contains attributes that persist across a session and the values of those attributes. </p>
   * @public
   */
  promptSessionAttributes?: Record<string, string> | undefined;

  /**
   * <p> Contains information about the results from the action group invocation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a>. </p> <note> <p>If you include this field in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;

  /**
   * <p> The identifier of the invocation of an action. This value must match the <code>invocationId</code> returned in the <code>InvokeInlineAgent</code> response for the action whose results are provided in the <code>returnControlInvocationResults</code> field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a>. </p>
   * @public
   */
  invocationId?: string | undefined;

  /**
   * <p> Contains information about the files used by code interpreter. </p>
   * @public
   */
  files?: InputFile[] | undefined;

  /**
   * <p> Contains the conversation history that persist across sessions. </p>
   * @public
   */
  conversationHistory?: ConversationHistory | undefined;
}

/**
 * @public
 * @enum
 */
export const OrchestrationType = {
  CUSTOM_ORCHESTRATION: "CUSTOM_ORCHESTRATION",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type OrchestrationType = (typeof OrchestrationType)[keyof typeof OrchestrationType];

/**
 * <p>Contains a part of an agent response and citations for it. </p>
 * @public
 */
export interface InlineAgentPayloadPart {
  /**
   * <p>A part of the agent response in bytes.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * <p>Contains citations for a part of an agent response.</p>
   * @public
   */
  attribution?: Attribution | undefined;
}

/**
 * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
 * @public
 */
export interface InlineAgentFilePart {
  /**
   * <p>Files containing intermediate response for the user.</p>
   * @public
   */
  files?: OutputFile[] | undefined;
}

/**
 * <p>Contains information to return from the action group that the agent has predicted to invoke.</p> <p>This data type is used in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> API operation.</p>
 * @public
 */
export interface InlineAgentReturnControlPayload {
  /**
   * <p>A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.</p>
   * @public
   */
  invocationInputs?: InvocationInputMember[] | undefined;

  /**
   * <p>The identifier of the action group invocation. </p>
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
 */
export interface InlineAgentTracePart {
  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>. </p>
   * @public
   */
  trace?: Trace | undefined;

  /**
   * <p>The caller chain for the trace part.</p>
   * @public
   */
  callerChain?: Caller[] | undefined;

  /**
   * <p>The time that trace occurred. </p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>The collaborator name for the trace part.</p>
   * @public
   */
  collaboratorName?: string | undefined;
}

/**
 * <p>The response from invoking the agent and associated citations and trace information.</p>
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
   * <p>Contains a part of an agent response and citations for it.</p>
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
   * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Trace events</a>. </p>
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
   * <p>Contains the parameters and information that the agent elicited from the customer to carry out an action. This information is returned to the system and can be used in your own setup for fulfilling the action.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again. </p>
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
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request. </p>
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request. </p>
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
   * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
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

  export const visit = <T>(value: InlineAgentResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.trace !== undefined) return visitor.trace(value.trace);
    if (value.returnControl !== undefined) return visitor.returnControl(value.returnControl);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    if (value.files !== undefined) return visitor.files(value.files);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeInlineAgentResponse {
  /**
   * <p>The inline agent's response to the user prompt. </p>
   * @public
   */
  completion: AsyncIterable<InlineAgentResponseStream> | undefined;

  /**
   * <p> The MIME type of the input data in the request. The default value is application/json. </p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p> The unique identifier of the session with the agent. </p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentMemoryRequest {
  /**
   * <p>The unique identifier of the agent to which the alias belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of an alias of an agent.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  memoryId?: string | undefined;

  /**
   * <p>The unique session identifier of the memory.</p>
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
 * @enum
 */
export const MemoryType = {
  SESSION_SUMMARY: "SESSION_SUMMARY",
} as const;

/**
 * @public
 */
export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType];

/**
 * @public
 */
export interface GetAgentMemoryRequest {
  /**
   * <p>If the total number of results is greater than the maxItems value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxItems?: number | undefined;

  /**
   * <p>The unique identifier of the agent to which the alias belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of an alias of an agent.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The type of memory.</p>
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * <p>The unique identifier of the memory. </p>
   * @public
   */
  memoryId: string | undefined;
}

/**
 * <p>Contains details of a session summary.</p>
 * @public
 */
export interface MemorySessionSummary {
  /**
   * <p>The unique identifier of the memory where the session summary is stored.</p>
   * @public
   */
  memoryId?: string | undefined;

  /**
   * <p>The identifier for this session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The start time for this session.</p>
   * @public
   */
  sessionStartTime?: Date | undefined;

  /**
   * <p>The time when the memory duration for the session is set to end.</p>
   * @public
   */
  sessionExpiryTime?: Date | undefined;

  /**
   * <p>The summarized text for this session.</p>
   * @public
   */
  summaryText?: string | undefined;
}

/**
 * <p>Contains sessions summaries.</p>
 * @public
 */
export type Memory = Memory.SessionSummaryMember | Memory.$UnknownMember;

/**
 * @public
 */
export namespace Memory {
  /**
   * <p>Contains summary of a session.</p>
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

  export interface Visitor<T> {
    sessionSummary: (value: MemorySessionSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Memory, visitor: Visitor<T>): T => {
    if (value.sessionSummary !== undefined) return visitor.sessionSummary(value.sessionSummary);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetAgentMemoryResponse {
  /**
   * <p>If the total number of results is greater than the maxItems value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Contains details of the sessions stored in the memory</p>
   * @public
   */
  memoryContents?: Memory[] | undefined;
}

/**
 * <p>Contains information about the text prompt to optimize.</p>
 * @public
 */
export interface TextPrompt {
  /**
   * <p>The text in the text prompt to optimize.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Contains information about the prompt to optimize.</p>
 * @public
 */
export type InputPrompt = InputPrompt.TextPromptMember | InputPrompt.$UnknownMember;

/**
 * @public
 */
export namespace InputPrompt {
  /**
   * <p>Contains information about the text prompt to optimize.</p>
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

  export interface Visitor<T> {
    textPrompt: (value: TextPrompt) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InputPrompt, visitor: Visitor<T>): T => {
    if (value.textPrompt !== undefined) return visitor.textPrompt(value.textPrompt);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface OptimizePromptRequest {
  /**
   * <p>Contains the prompt to optimize.</p>
   * @public
   */
  input: InputPrompt | undefined;

  /**
   * <p>The unique identifier of the model that you want to optimize the prompt for.</p>
   * @public
   */
  targetModelId: string | undefined;
}

/**
 * <p>An event in which the prompt was analyzed in preparation for optimization.</p>
 * @public
 */
export interface AnalyzePromptEvent {
  /**
   * <p>A message describing the analysis of the prompt.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Contains information about the optimized prompt.</p>
 * @public
 */
export type OptimizedPrompt = OptimizedPrompt.TextPromptMember | OptimizedPrompt.$UnknownMember;

/**
 * @public
 */
export namespace OptimizedPrompt {
  /**
   * <p>Contains information about the text in the prompt that was optimized.</p>
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

  export interface Visitor<T> {
    textPrompt: (value: TextPrompt) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OptimizedPrompt, visitor: Visitor<T>): T => {
    if (value.textPrompt !== undefined) return visitor.textPrompt(value.textPrompt);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An event in which the prompt was optimized.</p>
 * @public
 */
export interface OptimizedPromptEvent {
  /**
   * <p>Contains information about the optimized prompt.</p>
   * @public
   */
  optimizedPrompt?: OptimizedPrompt | undefined;
}

/**
 * <p>The stream containing events in the prompt optimization process.</p>
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
   * <p>An event in which the prompt was optimized.</p>
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
   * <p>An event in which the prompt was analyzed in preparation for optimization.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> to increase the rate or number of tokens you can process.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
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

  export const visit = <T>(value: OptimizedPromptStream, visitor: Visitor<T>): T => {
    if (value.optimizedPromptEvent !== undefined) return visitor.optimizedPromptEvent(value.optimizedPromptEvent);
    if (value.analyzePromptEvent !== undefined) return visitor.analyzePromptEvent(value.analyzePromptEvent);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface OptimizePromptResponse {
  /**
   * <p>The prompt after being optimized for the task.</p>
   * @public
   */
  optimizedPrompt: AsyncIterable<OptimizedPromptStream> | undefined;
}

/**
 * <p>Contains information about a text document to rerank.</p>
 * @public
 */
export interface RerankTextDocument {
  /**
   * <p>The text of the document.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RerankQueryContentType = {
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type RerankQueryContentType = (typeof RerankQueryContentType)[keyof typeof RerankQueryContentType];

/**
 * <p>Contains information about a query to submit to the reranker model.</p>
 * @public
 */
export interface RerankQuery {
  /**
   * <p>The type of the query.</p>
   * @public
   */
  type: RerankQueryContentType | undefined;

  /**
   * <p>Contains information about a text query.</p>
   * @public
   */
  textQuery: RerankTextDocument | undefined;
}

/**
 * <p>Contains configurations for a reranker model.</p>
 * @public
 */
export interface BedrockRerankingModelConfiguration {
  /**
   * <p>The ARN of the reranker model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>A JSON object whose keys are request fields for the model and whose values are values for those fields.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Contains configurations for an Amazon Bedrock reranker model.</p>
 * @public
 */
export interface BedrockRerankingConfiguration {
  /**
   * <p>The number of results to return after reranking.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>Contains configurations for a reranker model.</p>
   * @public
   */
  modelConfiguration: BedrockRerankingModelConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RerankingConfigurationType = {
  BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL",
} as const;

/**
 * @public
 */
export type RerankingConfigurationType = (typeof RerankingConfigurationType)[keyof typeof RerankingConfigurationType];

/**
 * <p>Contains configurations for reranking.</p>
 * @public
 */
export interface RerankingConfiguration {
  /**
   * <p>The type of reranker that the configurations apply to.</p>
   * @public
   */
  type: RerankingConfigurationType | undefined;

  /**
   * <p>Contains configurations for an Amazon Bedrock reranker.</p>
   * @public
   */
  bedrockRerankingConfiguration: BedrockRerankingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RerankDocumentType = {
  JSON: "JSON",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type RerankDocumentType = (typeof RerankDocumentType)[keyof typeof RerankDocumentType];

/**
 * <p>Contains information about a document to rerank. Choose the <code>type</code> to define and include the field that corresponds to the type.</p>
 * @public
 */
export interface RerankDocument {
  /**
   * <p>The type of document to rerank.</p>
   * @public
   */
  type: RerankDocumentType | undefined;

  /**
   * <p>Contains information about a text document to rerank.</p>
   * @public
   */
  textDocument?: RerankTextDocument | undefined;

  /**
   * <p>Contains a JSON document to rerank.</p>
   * @public
   */
  jsonDocument?: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const RerankSourceType = {
  INLINE: "INLINE",
} as const;

/**
 * @public
 */
export type RerankSourceType = (typeof RerankSourceType)[keyof typeof RerankSourceType];

/**
 * <p>Contains information about a source for reranking.</p>
 * @public
 */
export interface RerankSource {
  /**
   * <p>The type of the source.</p>
   * @public
   */
  type: RerankSourceType | undefined;

  /**
   * <p>Contains an inline definition of a source for reranking.</p>
   * @public
   */
  inlineDocumentSource: RerankDocument | undefined;
}

/**
 * @public
 */
export interface RerankRequest {
  /**
   * <p>An array of objects, each of which contains information about a query to submit to the reranker model.</p>
   * @public
   */
  queries: RerankQuery[] | undefined;

  /**
   * <p>An array of objects, each of which contains information about the sources to rerank.</p>
   * @public
   */
  sources: RerankSource[] | undefined;

  /**
   * <p>Contains configurations for reranking.</p>
   * @public
   */
  rerankingConfiguration: RerankingConfiguration | undefined;

  /**
   * <p>If the total number of results was greater than could fit in a response, a token is returned in the <code>nextToken</code> field. You can enter that token in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about a document that was reranked.</p>
 * @public
 */
export interface RerankResult {
  /**
   * <p>The ranking of the document. The lower a number, the higher the document is ranked.</p>
   * @public
   */
  index: number | undefined;

  /**
   * <p>The relevance score of the document.</p>
   * @public
   */
  relevanceScore: number | undefined;

  /**
   * <p>Contains information about the document.</p>
   * @public
   */
  document?: RerankDocument | undefined;
}

/**
 * @public
 */
export interface RerankResponse {
  /**
   * <p>An array of objects, each of which contains information about the results of reranking.</p>
   * @public
   */
  results: RerankResult[] | undefined;

  /**
   * <p>If the total number of results is greater than can fit in the response, use this token in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the query made to the knowledge base.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>input</code> field</p> </li> </ul>
 * @public
 */
export interface RetrieveAndGenerateInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>The configuration details for the guardrail.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The unique identifier for the guardrail.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * <p>Configuration settings for text generation using a language model via the RetrieveAndGenerate operation. Includes parameters like temperature, top-p, maximum token count, and stop sequences. </p> <note> <p>The valid range of <code>maxTokens</code> depends on the accepted values for your chosen model's inference parameters. To see the inference parameters for your model, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models.</a> </p> </note>
 * @public
 */
export interface TextInferenceConfig {
  /**
   * <p> Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable. </p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p> A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token. </p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The maximum number of tokens to generate in the output text. Do not use the minimum of 0 or the maximum of 65536. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>A list of sequences of characters that, if generated, will cause the model to stop generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p> The configuration for inference settings when generating responses using RetrieveAndGenerate. </p>
 * @public
 */
export interface InferenceConfig {
  /**
   * <p> Configuration settings specific to text generation while generating responses using RetrieveAndGenerate. </p>
   * @public
   */
  textInferenceConfig?: TextInferenceConfig | undefined;
}

/**
 * <p>Contains the template for the prompt that's sent to the model for response generation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a>.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p> </li> </ul>
 * @public
 */
export interface PromptTemplate {
  /**
   * <p>The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.</p> <p>For more information, see the following resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a> </p> </li> <li> <p> <a href="https://docs.anthropic.com/claude/docs/use-xml-tags">Use XML tags with Anthropic Claude models</a> </p> </li> </ul>
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * <p>Contains the generation configuration of the external source wrapper object.</p>
 * @public
 */
export interface ExternalSourcesGenerationConfiguration {
  /**
   * <p>Contain the textPromptTemplate string for the external source wrapper object.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p>The configuration details for the guardrail.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p> Configuration settings for inference when using RetrieveAndGenerate to generate responses while using an external source.</p>
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * <p> Additional model parameters and their corresponding values not included in the textInferenceConfig structure for an external source. Takes in custom model parameters specific to the language model being used. </p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The latency configuration for the model.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>This property contains the document to chat with, along with its attributes.</p>
 * @public
 */
export interface ByteContentDoc {
  /**
   * <p>The file name of the document contained in the wrapper object.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The MIME type of the document contained in the wrapper object.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The byte value of the file to upload, encoded as a Base-64 string.</p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>The unique wrapper object of the document from the S3 location.</p>
 * @public
 */
export interface S3ObjectDoc {
  /**
   * <p>The file location of the S3 wrapper object.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @internal
 */
export const ActionGroupInvocationInputFilterSensitiveLog = (obj: ActionGroupInvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupName && { actionGroupName: SENSITIVE_STRING }),
  ...(obj.verb && { verb: SENSITIVE_STRING }),
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
  ...(obj.function && { function: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UsageFilterSensitiveLog = (obj: Usage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataFilterSensitiveLog = (obj: Metadata): any => ({
  ...obj,
  ...(obj.usage && { usage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActionGroupInvocationOutputFilterSensitiveLog = (obj: ActionGroupInvocationOutput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const APISchemaFilterSensitiveLog = (obj: APISchema): any => {
  if (obj.s3 !== undefined) return { s3: obj.s3 };
  if (obj.payload !== undefined) return { payload: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FunctionDefinitionFilterSensitiveLog = (obj: FunctionDefinition): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FunctionSchemaFilterSensitiveLog = (obj: FunctionSchema): any => {
  if (obj.functions !== undefined)
    return { functions: obj.functions.map((item) => FunctionDefinitionFilterSensitiveLog(item)) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AgentActionGroupFilterSensitiveLog = (obj: AgentActionGroup): any => ({
  ...obj,
  ...(obj.actionGroupName && { actionGroupName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.actionGroupExecutor && { actionGroupExecutor: obj.actionGroupExecutor }),
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
  ...(obj.functionSchema && { functionSchema: FunctionSchemaFilterSensitiveLog(obj.functionSchema) }),
});

/**
 * @internal
 */
export const ApiResultFilterSensitiveLog = (obj: ApiResult): any => ({
  ...obj,
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
  ...(obj.responseBody && {
    responseBody: Object.entries(obj.responseBody).reduce(
      (acc: any, [key, value]: [string, ContentBody]) => ((acc[key] = value), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const InvocationResultMemberFilterSensitiveLog = (obj: InvocationResultMember): any => {
  if (obj.apiResult !== undefined) return { apiResult: ApiResultFilterSensitiveLog(obj.apiResult) };
  if (obj.functionResult !== undefined) return { functionResult: obj.functionResult };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ReturnControlResultsFilterSensitiveLog = (obj: ReturnControlResults): any => ({
  ...obj,
  ...(obj.returnControlInvocationResults && {
    returnControlInvocationResults: obj.returnControlInvocationResults.map((item) =>
      InvocationResultMemberFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AgentCollaboratorInputPayloadFilterSensitiveLog = (obj: AgentCollaboratorInputPayload): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.returnControlResults && {
    returnControlResults: ReturnControlResultsFilterSensitiveLog(obj.returnControlResults),
  }),
});

/**
 * @internal
 */
export const AgentCollaboratorInvocationInputFilterSensitiveLog = (obj: AgentCollaboratorInvocationInput): any => ({
  ...obj,
  ...(obj.input && { input: AgentCollaboratorInputPayloadFilterSensitiveLog(obj.input) }),
});

/**
 * @internal
 */
export const ApiInvocationInputFilterSensitiveLog = (obj: ApiInvocationInput): any => ({
  ...obj,
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
  ...(obj.collaboratorName && { collaboratorName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FunctionInvocationInputFilterSensitiveLog = (obj: FunctionInvocationInput): any => ({
  ...obj,
  ...(obj.collaboratorName && { collaboratorName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationInputMemberFilterSensitiveLog = (obj: InvocationInputMember): any => {
  if (obj.apiInvocationInput !== undefined)
    return { apiInvocationInput: ApiInvocationInputFilterSensitiveLog(obj.apiInvocationInput) };
  if (obj.functionInvocationInput !== undefined)
    return { functionInvocationInput: FunctionInvocationInputFilterSensitiveLog(obj.functionInvocationInput) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ReturnControlPayloadFilterSensitiveLog = (obj: ReturnControlPayload): any => ({
  ...obj,
  ...(obj.invocationInputs && {
    invocationInputs: obj.invocationInputs.map((item) => InvocationInputMemberFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AgentCollaboratorOutputPayloadFilterSensitiveLog = (obj: AgentCollaboratorOutputPayload): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.returnControlPayload && { returnControlPayload: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AgentCollaboratorInvocationOutputFilterSensitiveLog = (obj: AgentCollaboratorInvocationOutput): any => ({
  ...obj,
  ...(obj.output && { output: AgentCollaboratorOutputPayloadFilterSensitiveLog(obj.output) }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomOrchestrationTraceEventFilterSensitiveLog = (obj: CustomOrchestrationTraceEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomOrchestrationTraceFilterSensitiveLog = (obj: CustomOrchestrationTrace): any => ({
  ...obj,
  ...(obj.event && { event: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FailureTraceFilterSensitiveLog = (obj: FailureTrace): any => ({
  ...obj,
  ...(obj.failureReason && { failureReason: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentFilterFilterSensitiveLog = (obj: GuardrailContentFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailContentPolicyAssessmentFilterSensitiveLog = (obj: GuardrailContentPolicyAssessment): any => ({
  ...obj,
  ...(obj.filters && { filters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailPiiEntityFilterFilterSensitiveLog = (obj: GuardrailPiiEntityFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailRegexFilterFilterSensitiveLog = (obj: GuardrailRegexFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailSensitiveInformationPolicyAssessmentFilterSensitiveLog = (
  obj: GuardrailSensitiveInformationPolicyAssessment
): any => ({
  ...obj,
  ...(obj.piiEntities && { piiEntities: SENSITIVE_STRING }),
  ...(obj.regexes && { regexes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTopicFilterSensitiveLog = (obj: GuardrailTopic): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailTopicPolicyAssessmentFilterSensitiveLog = (obj: GuardrailTopicPolicyAssessment): any => ({
  ...obj,
  ...(obj.topics && { topics: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailCustomWordFilterSensitiveLog = (obj: GuardrailCustomWord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailManagedWordFilterSensitiveLog = (obj: GuardrailManagedWord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailWordPolicyAssessmentFilterSensitiveLog = (obj: GuardrailWordPolicyAssessment): any => ({
  ...obj,
  ...(obj.customWords && { customWords: SENSITIVE_STRING }),
  ...(obj.managedWordLists && { managedWordLists: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailAssessmentFilterSensitiveLog = (obj: GuardrailAssessment): any => ({
  ...obj,
  ...(obj.topicPolicy && { topicPolicy: SENSITIVE_STRING }),
  ...(obj.contentPolicy && { contentPolicy: SENSITIVE_STRING }),
  ...(obj.wordPolicy && { wordPolicy: SENSITIVE_STRING }),
  ...(obj.sensitiveInformationPolicy && { sensitiveInformationPolicy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTraceFilterSensitiveLog = (obj: GuardrailTrace): any => ({
  ...obj,
  ...(obj.inputAssessments && { inputAssessments: SENSITIVE_STRING }),
  ...(obj.outputAssessments && { outputAssessments: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseLookupInputFilterSensitiveLog = (obj: KnowledgeBaseLookupInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.knowledgeBaseId && { knowledgeBaseId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationInputFilterSensitiveLog = (obj: InvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupInvocationInput && {
    actionGroupInvocationInput: ActionGroupInvocationInputFilterSensitiveLog(obj.actionGroupInvocationInput),
  }),
  ...(obj.knowledgeBaseLookupInput && {
    knowledgeBaseLookupInput: KnowledgeBaseLookupInputFilterSensitiveLog(obj.knowledgeBaseLookupInput),
  }),
  ...(obj.agentCollaboratorInvocationInput && {
    agentCollaboratorInvocationInput: AgentCollaboratorInvocationInputFilterSensitiveLog(
      obj.agentCollaboratorInvocationInput
    ),
  }),
});

/**
 * @internal
 */
export const ModelInvocationInputFilterSensitiveLog = (obj: ModelInvocationInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RawResponseFilterSensitiveLog = (obj: RawResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReasoningTextBlockFilterSensitiveLog = (obj: ReasoningTextBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReasoningContentBlockFilterSensitiveLog = (obj: ReasoningContentBlock): any => {
  if (obj.reasoningText !== undefined) return { reasoningText: SENSITIVE_STRING };
  if (obj.redactedContent !== undefined) return { redactedContent: obj.redactedContent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OrchestrationModelInvocationOutputFilterSensitiveLog = (obj: OrchestrationModelInvocationOutput): any => ({
  ...obj,
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  ...(obj.reasoningContent && { reasoningContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeInterpreterInvocationOutputFilterSensitiveLog = (obj: CodeInterpreterInvocationOutput): any => ({
  ...obj,
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FinalResponseFilterSensitiveLog = (obj: FinalResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrievalResultContentColumnFilterSensitiveLog = (obj: RetrievalResultContentColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievalResultContentFilterSensitiveLog = (obj: RetrievalResultContent): any => ({
  ...obj,
  ...(obj.row && { row: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrievalResultLocationFilterSensitiveLog = (obj: RetrievalResultLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievedReferenceFilterSensitiveLog = (obj: RetrievedReference): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseLookupOutputFilterSensitiveLog = (obj: KnowledgeBaseLookupOutput): any => ({
  ...obj,
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RepromptResponseFilterSensitiveLog = (obj: RepromptResponse): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ObservationFilterSensitiveLog = (obj: Observation): any => ({
  ...obj,
  ...(obj.actionGroupInvocationOutput && {
    actionGroupInvocationOutput: ActionGroupInvocationOutputFilterSensitiveLog(obj.actionGroupInvocationOutput),
  }),
  ...(obj.agentCollaboratorInvocationOutput && {
    agentCollaboratorInvocationOutput: AgentCollaboratorInvocationOutputFilterSensitiveLog(
      obj.agentCollaboratorInvocationOutput
    ),
  }),
  ...(obj.knowledgeBaseLookupOutput && {
    knowledgeBaseLookupOutput: KnowledgeBaseLookupOutputFilterSensitiveLog(obj.knowledgeBaseLookupOutput),
  }),
  ...(obj.finalResponse && { finalResponse: FinalResponseFilterSensitiveLog(obj.finalResponse) }),
  ...(obj.repromptResponse && { repromptResponse: SENSITIVE_STRING }),
  ...(obj.codeInterpreterInvocationOutput && {
    codeInterpreterInvocationOutput: CodeInterpreterInvocationOutputFilterSensitiveLog(
      obj.codeInterpreterInvocationOutput
    ),
  }),
});

/**
 * @internal
 */
export const RationaleFilterSensitiveLog = (obj: Rationale): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrchestrationTraceFilterSensitiveLog = (obj: OrchestrationTrace): any => {
  if (obj.rationale !== undefined) return { rationale: SENSITIVE_STRING };
  if (obj.invocationInput !== undefined) return { invocationInput: SENSITIVE_STRING };
  if (obj.observation !== undefined) return { observation: SENSITIVE_STRING };
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PostProcessingParsedResponseFilterSensitiveLog = (obj: PostProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingModelInvocationOutputFilterSensitiveLog = (
  obj: PostProcessingModelInvocationOutput
): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  ...(obj.reasoningContent && { reasoningContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingTraceFilterSensitiveLog = (obj: PostProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PreProcessingParsedResponseFilterSensitiveLog = (obj: PreProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.rationale && { rationale: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingModelInvocationOutputFilterSensitiveLog = (obj: PreProcessingModelInvocationOutput): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  ...(obj.reasoningContent && { reasoningContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingTraceFilterSensitiveLog = (obj: PreProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RoutingClassifierModelInvocationOutputFilterSensitiveLog = (
  obj: RoutingClassifierModelInvocationOutput
): any => ({
  ...obj,
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutingClassifierTraceFilterSensitiveLog = (obj: RoutingClassifierTrace): any => {
  if (obj.invocationInput !== undefined) return { invocationInput: SENSITIVE_STRING };
  if (obj.observation !== undefined) return { observation: SENSITIVE_STRING };
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TraceFilterSensitiveLog = (obj: Trace): any => {
  if (obj.guardrailTrace !== undefined) return { guardrailTrace: SENSITIVE_STRING };
  if (obj.preProcessingTrace !== undefined) return { preProcessingTrace: SENSITIVE_STRING };
  if (obj.orchestrationTrace !== undefined) return { orchestrationTrace: SENSITIVE_STRING };
  if (obj.postProcessingTrace !== undefined) return { postProcessingTrace: SENSITIVE_STRING };
  if (obj.routingClassifierTrace !== undefined) return { routingClassifierTrace: SENSITIVE_STRING };
  if (obj.failureTrace !== undefined) return { failureTrace: SENSITIVE_STRING };
  if (obj.customOrchestrationTrace !== undefined) return { customOrchestrationTrace: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TracePartFilterSensitiveLog = (obj: TracePart): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
  ...(obj.callerChain && { callerChain: obj.callerChain.map((item) => item) }),
  ...(obj.collaboratorName && { collaboratorName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SatisfiedConditionFilterSensitiveLog = (obj: SatisfiedCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionResultEventFilterSensitiveLog = (obj: ConditionResultEvent): any => ({
  ...obj,
  ...(obj.satisfiedConditions && { satisfiedConditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowFailureEventFilterSensitiveLog = (obj: FlowFailureEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowExecutionContentFilterSensitiveLog = (obj: FlowExecutionContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowInputFieldFilterSensitiveLog = (obj: FlowInputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowExecutionInputEventFilterSensitiveLog = (obj: FlowExecutionInputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowOutputFieldFilterSensitiveLog = (obj: FlowOutputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowExecutionOutputEventFilterSensitiveLog = (obj: FlowExecutionOutputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeActionEventFilterSensitiveLog = (obj: NodeActionEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeTraceElementsFilterSensitiveLog = (obj: NodeTraceElements): any => {
  if (obj.agentTraces !== undefined) return { agentTraces: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const NodeDependencyEventFilterSensitiveLog = (obj: NodeDependencyEvent): any => ({
  ...obj,
  ...(obj.traceElements && { traceElements: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeFailureEventFilterSensitiveLog = (obj: NodeFailureEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeExecutionContentFilterSensitiveLog = (obj: NodeExecutionContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const NodeInputSourceFilterSensitiveLog = (obj: NodeInputSource): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeInputFieldFilterSensitiveLog = (obj: NodeInputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.source && { source: NodeInputSourceFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const NodeInputEventFilterSensitiveLog = (obj: NodeInputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeOutputNextFilterSensitiveLog = (obj: NodeOutputNext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeOutputFieldFilterSensitiveLog = (obj: NodeOutputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.next && { next: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NodeOutputEventFilterSensitiveLog = (obj: NodeOutputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowExecutionEventFilterSensitiveLog = (obj: FlowExecutionEvent): any => {
  if (obj.flowInputEvent !== undefined) return { flowInputEvent: SENSITIVE_STRING };
  if (obj.flowOutputEvent !== undefined) return { flowOutputEvent: SENSITIVE_STRING };
  if (obj.nodeInputEvent !== undefined) return { nodeInputEvent: SENSITIVE_STRING };
  if (obj.nodeOutputEvent !== undefined) return { nodeOutputEvent: SENSITIVE_STRING };
  if (obj.conditionResultEvent !== undefined) return { conditionResultEvent: SENSITIVE_STRING };
  if (obj.nodeFailureEvent !== undefined) return { nodeFailureEvent: SENSITIVE_STRING };
  if (obj.flowFailureEvent !== undefined) return { flowFailureEvent: SENSITIVE_STRING };
  if (obj.nodeActionEvent !== undefined) return { nodeActionEvent: SENSITIVE_STRING };
  if (obj.nodeDependencyEvent !== undefined) return { nodeDependencyEvent: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ListFlowExecutionEventsResponseFilterSensitiveLog = (obj: ListFlowExecutionEventsResponse): any => ({
  ...obj,
  ...(obj.flowExecutionEvents && {
    flowExecutionEvents: obj.flowExecutionEvents.map((item) => FlowExecutionEventFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const FlowInputContentFilterSensitiveLog = (obj: FlowInputContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowInputFilterSensitiveLog = (obj: FlowInput): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartFlowExecutionRequestFilterSensitiveLog = (obj: StartFlowExecutionRequest): any => ({
  ...obj,
  ...(obj.inputs && { inputs: obj.inputs.map((item) => FlowInputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InvokeFlowRequestFilterSensitiveLog = (obj: InvokeFlowRequest): any => ({
  ...obj,
  ...(obj.inputs && { inputs: obj.inputs.map((item) => FlowInputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FlowCompletionEventFilterSensitiveLog = (obj: FlowCompletionEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowMultiTurnInputRequestEventFilterSensitiveLog = (obj: FlowMultiTurnInputRequestEvent): any => ({
  ...obj,
  ...(obj.content && { content: obj.content }),
});

/**
 * @internal
 */
export const FlowOutputEventFilterSensitiveLog = (obj: FlowOutputEvent): any => ({
  ...obj,
  ...(obj.content && { content: obj.content }),
});

/**
 * @internal
 */
export const FlowTraceConditionFilterSensitiveLog = (obj: FlowTraceCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowTraceConditionNodeResultEventFilterSensitiveLog = (obj: FlowTraceConditionNodeResultEvent): any => ({
  ...obj,
  ...(obj.satisfiedConditions && { satisfiedConditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeActionEventFilterSensitiveLog = (obj: FlowTraceNodeActionEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TraceElementsFilterSensitiveLog = (obj: TraceElements): any => {
  if (obj.agentTraces !== undefined) return { agentTraces: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowTraceDependencyEventFilterSensitiveLog = (obj: FlowTraceDependencyEvent): any => ({
  ...obj,
  ...(obj.traceElements && { traceElements: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeInputContentFilterSensitiveLog = (obj: FlowTraceNodeInputContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowTraceNodeInputExecutionChainItemFilterSensitiveLog = (
  obj: FlowTraceNodeInputExecutionChainItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowTraceNodeInputSourceFilterSensitiveLog = (obj: FlowTraceNodeInputSource): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeInputFieldFilterSensitiveLog = (obj: FlowTraceNodeInputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.source && { source: SENSITIVE_STRING }),
  ...(obj.executionChain && { executionChain: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeInputEventFilterSensitiveLog = (obj: FlowTraceNodeInputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeOutputNextFilterSensitiveLog = (obj: FlowTraceNodeOutputNext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowTraceNodeOutputFieldFilterSensitiveLog = (obj: FlowTraceNodeOutputField): any => ({
  ...obj,
  ...(obj.content && { content: obj.content }),
  ...(obj.next && { next: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeOutputEventFilterSensitiveLog = (obj: FlowTraceNodeOutputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceFilterSensitiveLog = (obj: FlowTrace): any => {
  if (obj.nodeInputTrace !== undefined) return { nodeInputTrace: SENSITIVE_STRING };
  if (obj.nodeOutputTrace !== undefined) return { nodeOutputTrace: SENSITIVE_STRING };
  if (obj.conditionNodeResultTrace !== undefined) return { conditionNodeResultTrace: SENSITIVE_STRING };
  if (obj.nodeActionTrace !== undefined) return { nodeActionTrace: SENSITIVE_STRING };
  if (obj.nodeDependencyTrace !== undefined) return { nodeDependencyTrace: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowTraceEventFilterSensitiveLog = (obj: FlowTraceEvent): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowResponseStreamFilterSensitiveLog = (obj: FlowResponseStream): any => {
  if (obj.flowOutputEvent !== undefined) return { flowOutputEvent: SENSITIVE_STRING };
  if (obj.flowCompletionEvent !== undefined) return { flowCompletionEvent: SENSITIVE_STRING };
  if (obj.flowTraceEvent !== undefined) return { flowTraceEvent: FlowTraceEventFilterSensitiveLog(obj.flowTraceEvent) };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.flowMultiTurnInputRequestEvent !== undefined) return { flowMultiTurnInputRequestEvent: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeFlowResponseFilterSensitiveLog = (obj: InvokeFlowResponse): any => ({
  ...obj,
  ...(obj.responseStream && { responseStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const QueryGenerationInputFilterSensitiveLog = (obj: QueryGenerationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateQueryRequestFilterSensitiveLog = (obj: GenerateQueryRequest): any => ({
  ...obj,
  ...(obj.queryGenerationInput && { queryGenerationInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GeneratedQueryFilterSensitiveLog = (obj: GeneratedQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateQueryResponseFilterSensitiveLog = (obj: GenerateQueryResponse): any => ({
  ...obj,
  ...(obj.queries && { queries: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContentBlockFilterSensitiveLog = (obj: ContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const MessageFilterSensitiveLog = (obj: Message): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConversationHistoryFilterSensitiveLog = (obj: ConversationHistory): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ByteContentFileFilterSensitiveLog = (obj: ByteContentFile): any => ({
  ...obj,
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FileSourceFilterSensitiveLog = (obj: FileSource): any => ({
  ...obj,
  ...(obj.byteContent && { byteContent: ByteContentFileFilterSensitiveLog(obj.byteContent) }),
});

/**
 * @internal
 */
export const InputFileFilterSensitiveLog = (obj: InputFile): any => ({
  ...obj,
  ...(obj.source && { source: FileSourceFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const MetadataAttributeSchemaFilterSensitiveLog = (obj: MetadataAttributeSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImplicitFilterConfigurationFilterSensitiveLog = (obj: ImplicitFilterConfiguration): any => ({
  ...obj,
  ...(obj.metadataAttributes && { metadataAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog = (
  obj: RerankingMetadataSelectiveModeConfiguration
): any => {
  if (obj.fieldsToInclude !== undefined) return { fieldsToInclude: SENSITIVE_STRING };
  if (obj.fieldsToExclude !== undefined) return { fieldsToExclude: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const MetadataConfigurationForRerankingFilterSensitiveLog = (obj: MetadataConfigurationForReranking): any => ({
  ...obj,
  ...(obj.selectiveModeConfiguration && {
    selectiveModeConfiguration: RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog(
      obj.selectiveModeConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const VectorSearchBedrockRerankingConfigurationFilterSensitiveLog = (
  obj: VectorSearchBedrockRerankingConfiguration
): any => ({
  ...obj,
  ...(obj.metadataConfiguration && {
    metadataConfiguration: MetadataConfigurationForRerankingFilterSensitiveLog(obj.metadataConfiguration),
  }),
});

/**
 * @internal
 */
export const VectorSearchRerankingConfigurationFilterSensitiveLog = (obj: VectorSearchRerankingConfiguration): any => ({
  ...obj,
  ...(obj.bedrockRerankingConfiguration && {
    bedrockRerankingConfiguration: VectorSearchBedrockRerankingConfigurationFilterSensitiveLog(
      obj.bedrockRerankingConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const TextResponsePartFilterSensitiveLog = (obj: TextResponsePart): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedResponsePartFilterSensitiveLog = (obj: GeneratedResponsePart): any => ({
  ...obj,
  ...(obj.textResponsePart && { textResponsePart: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CitationFilterSensitiveLog = (obj: Citation): any => ({
  ...obj,
  ...(obj.generatedResponsePart && {
    generatedResponsePart: GeneratedResponsePartFilterSensitiveLog(obj.generatedResponsePart),
  }),
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AttributionFilterSensitiveLog = (obj: Attribution): any => ({
  ...obj,
  ...(obj.citations && { citations: obj.citations.map((item) => CitationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
  ...(obj.attribution && { attribution: AttributionFilterSensitiveLog(obj.attribution) }),
});

/**
 * @internal
 */
export const OutputFileFilterSensitiveLog = (obj: OutputFile): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FilePartFilterSensitiveLog = (obj: FilePart): any => ({
  ...obj,
  ...(obj.files && { files: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.trace !== undefined) return { trace: SENSITIVE_STRING };
  if (obj.returnControl !== undefined) return { returnControl: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.modelNotReadyException !== undefined) return { modelNotReadyException: obj.modelNotReadyException };
  if (obj.files !== undefined) return { files: FilePartFilterSensitiveLog(obj.files) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeAgentResponseFilterSensitiveLog = (obj: InvokeAgentResponse): any => ({
  ...obj,
  ...(obj.completion && { completion: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const CollaboratorConfigurationFilterSensitiveLog = (obj: CollaboratorConfiguration): any => ({
  ...obj,
  ...(obj.collaboratorName && { collaboratorName: SENSITIVE_STRING }),
  ...(obj.collaboratorInstruction && { collaboratorInstruction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptConfigurationFilterSensitiveLog = (obj: PromptConfiguration): any => ({
  ...obj,
  ...(obj.basePromptTemplate && { basePromptTemplate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptOverrideConfigurationFilterSensitiveLog = (obj: PromptOverrideConfiguration): any => ({
  ...obj,
  ...(obj.promptConfigurations && {
    promptConfigurations: obj.promptConfigurations.map((item) => PromptConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const InlineSessionStateFilterSensitiveLog = (obj: InlineSessionState): any => ({
  ...obj,
  ...(obj.returnControlInvocationResults && {
    returnControlInvocationResults: obj.returnControlInvocationResults.map((item) =>
      InvocationResultMemberFilterSensitiveLog(item)
    ),
  }),
  ...(obj.files && { files: obj.files.map((item) => InputFileFilterSensitiveLog(item)) }),
  ...(obj.conversationHistory && {
    conversationHistory: ConversationHistoryFilterSensitiveLog(obj.conversationHistory),
  }),
});

/**
 * @internal
 */
export const InlineAgentPayloadPartFilterSensitiveLog = (obj: InlineAgentPayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
  ...(obj.attribution && { attribution: AttributionFilterSensitiveLog(obj.attribution) }),
});

/**
 * @internal
 */
export const InlineAgentFilePartFilterSensitiveLog = (obj: InlineAgentFilePart): any => ({
  ...obj,
  ...(obj.files && { files: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InlineAgentReturnControlPayloadFilterSensitiveLog = (obj: InlineAgentReturnControlPayload): any => ({
  ...obj,
  ...(obj.invocationInputs && {
    invocationInputs: obj.invocationInputs.map((item) => InvocationInputMemberFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const InlineAgentTracePartFilterSensitiveLog = (obj: InlineAgentTracePart): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
  ...(obj.callerChain && { callerChain: obj.callerChain.map((item) => item) }),
  ...(obj.collaboratorName && { collaboratorName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InlineAgentResponseStreamFilterSensitiveLog = (obj: InlineAgentResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.trace !== undefined) return { trace: SENSITIVE_STRING };
  if (obj.returnControl !== undefined) return { returnControl: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.files !== undefined) return { files: InlineAgentFilePartFilterSensitiveLog(obj.files) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeInlineAgentResponseFilterSensitiveLog = (obj: InvokeInlineAgentResponse): any => ({
  ...obj,
  ...(obj.completion && { completion: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const TextPromptFilterSensitiveLog = (obj: TextPrompt): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputPromptFilterSensitiveLog = (obj: InputPrompt): any => {
  if (obj.textPrompt !== undefined) return { textPrompt: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OptimizePromptRequestFilterSensitiveLog = (obj: OptimizePromptRequest): any => ({
  ...obj,
  ...(obj.input && { input: InputPromptFilterSensitiveLog(obj.input) }),
});

/**
 * @internal
 */
export const AnalyzePromptEventFilterSensitiveLog = (obj: AnalyzePromptEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptimizedPromptFilterSensitiveLog = (obj: OptimizedPrompt): any => {
  if (obj.textPrompt !== undefined) return { textPrompt: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OptimizedPromptEventFilterSensitiveLog = (obj: OptimizedPromptEvent): any => ({
  ...obj,
  ...(obj.optimizedPrompt && { optimizedPrompt: OptimizedPromptFilterSensitiveLog(obj.optimizedPrompt) }),
});

/**
 * @internal
 */
export const OptimizedPromptStreamFilterSensitiveLog = (obj: OptimizedPromptStream): any => {
  if (obj.optimizedPromptEvent !== undefined) return { optimizedPromptEvent: SENSITIVE_STRING };
  if (obj.analyzePromptEvent !== undefined) return { analyzePromptEvent: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OptimizePromptResponseFilterSensitiveLog = (obj: OptimizePromptResponse): any => ({
  ...obj,
  ...(obj.optimizedPrompt && { optimizedPrompt: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const RerankTextDocumentFilterSensitiveLog = (obj: RerankTextDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RerankQueryFilterSensitiveLog = (obj: RerankQuery): any => ({
  ...obj,
  ...(obj.textQuery && { textQuery: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankDocumentFilterSensitiveLog = (obj: RerankDocument): any => ({
  ...obj,
  ...(obj.textDocument && { textDocument: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankSourceFilterSensitiveLog = (obj: RerankSource): any => ({
  ...obj,
  ...(obj.inlineDocumentSource && { inlineDocumentSource: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankRequestFilterSensitiveLog = (obj: RerankRequest): any => ({
  ...obj,
  ...(obj.queries && { queries: SENSITIVE_STRING }),
  ...(obj.sources && { sources: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankResultFilterSensitiveLog = (obj: RerankResult): any => ({
  ...obj,
  ...(obj.document && { document: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankResponseFilterSensitiveLog = (obj: RerankResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => RerankResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateInputFilterSensitiveLog = (obj: RetrieveAndGenerateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptTemplateFilterSensitiveLog = (obj: PromptTemplate): any => ({
  ...obj,
  ...(obj.textPromptTemplate && { textPromptTemplate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExternalSourcesGenerationConfigurationFilterSensitiveLog = (
  obj: ExternalSourcesGenerationConfiguration
): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const ByteContentDocFilterSensitiveLog = (obj: ByteContentDoc): any => ({
  ...obj,
  ...(obj.identifier && { identifier: SENSITIVE_STRING }),
  ...(obj.data && { data: SENSITIVE_STRING }),
});
