// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentServiceException as __BaseException } from "./BedrockAgentServiceException";

/**
 * <p>The request is denied because of missing access permissions.</p>
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
 * <p>There was a conflict performing an operation.</p>
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
 * @public
 * @enum
 */
export const ActionGroupState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ActionGroupState = (typeof ActionGroupState)[keyof typeof ActionGroupState];

/**
 * <p>The identifier information for an Amazon S3 bucket.</p>
 * @public
 */
export interface S3Identifier {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  s3BucketName?: string;

  /**
   * <p>The S3 object key for the S3 resource.</p>
   * @public
   */
  s3ObjectKey?: string;
}

/**
 * <p>Contains details about the OpenAPI schema for the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>. You can either include the schema directly in the <code>payload</code> field or you can upload it to an S3 bucket and specify the S3 bucket location in the <code>s3</code> field.</p>
 * @public
 */
export type APISchema = APISchema.PayloadMember | APISchema.S3Member | APISchema.$UnknownMember;

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
export const Type = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  STRING: "string",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Contains details about a parameter in a function for an action group.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ParameterDetail {
  /**
   * <p>A description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  type: Type | undefined;

  /**
   * <p>Whether the parameter is required for the agent to complete the function for action group invocation.</p>
   * @public
   */
  required?: boolean;
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
 * <p>Defines parameters that the agent needs to invoke from the user to complete the function. Corresponds to an action in an action group.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a>
 *                </p>
 *             </li>
 *          </ul>
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
  description?: string;

  /**
   * <p>The parameters that the agent elicits from the user to fulfill the function.</p>
   * @public
   */
  parameters?: Record<string, ParameterDetail>;

  /**
   * <p>Contains information if user confirmation is required to invoke the function.</p>
   * @public
   */
  requireConfirmation?: RequireConfirmation;
}

/**
 * <p>Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export type FunctionSchema = FunctionSchema.FunctionsMember | FunctionSchema.$UnknownMember;

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

  export interface Visitor<T> {
    functions: (value: Function[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FunctionSchema, visitor: Visitor<T>): T => {
    if (value.functions !== undefined) return visitor.functions(value.functions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ActionGroupSignature = {
  AMAZON_CODEINTERPRETER: "AMAZON.CodeInterpreter",
  AMAZON_USERINPUT: "AMAZON.UserInput",
} as const;

/**
 * @public
 */
export type ActionGroupSignature = (typeof ActionGroupSignature)[keyof typeof ActionGroupSignature];

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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A description of the action group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>To allow your agent to request the user for additional information when trying to complete a task, set this field to <code>AMAZON.UserInput</code>. You must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields blank for this action group.</p>
   *          <p>To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to <code>AMAZON.CodeInterpreter</code>. You must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields blank for this action group.</p>
   *          <p>During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState?: ActionGroupState;

  /**
   * <p>Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.</p>
   * @public
   */
  functionSchema?: FunctionSchema;
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The description of the action group.</p>
   * @public
   */
  description?: string;

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
   * <p>If this field is set as <code>AMAZON.UserInput</code>, the agent can request the user for additional information when trying to complete a task. The <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields must be blank for this action group.</p>
   *          <p>During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
   * @public
   */
  parentActionSignature?: ActionGroupSignature;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema;

  /**
   * <p>Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.</p>
   * @public
   */
  functionSchema?: FunctionSchema;

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
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A list of objects containing fields that caused validation errors and their corresponding validation error messages.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[];

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
    this.fieldList = opts.fieldList;
  }
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
  skipResourceInUseCheck?: boolean;
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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>Specifies whether the action group is available for the agent to invoke or not when
   *       sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a>
   *       request.</p>
   * @public
   */
  actionGroupState: ActionGroupState | undefined;

  /**
   * <p>The description of the action group.</p>
   * @public
   */
  description?: string;

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
  nextToken?: string;
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
  description?: string;

  /**
   * <p>To allow your agent to request the user for additional information when trying to complete a task, set this field to <code>AMAZON.UserInput</code>. You must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields blank for this action group.</p>
   *          <p>During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState?: ActionGroupState;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema;

  /**
   * <p>Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.</p>
   * @public
   */
  functionSchema?: FunctionSchema;
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
 * @public
 * @enum
 */
export const AgentStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  NOT_PREPARED: "NOT_PREPARED",
  PREPARED: "PREPARED",
  PREPARING: "PREPARING",
  UPDATING: "UPDATING",
  VERSIONING: "VERSIONING",
} as const;

/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * <p>Details about the guardrail associated with an agent.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The unique identifier of the guardrail.</p>
   * @public
   */
  guardrailIdentifier?: string;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion?: string;
}

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
  storageDays?: number;
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
  temperature?: number;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>Top P</code> determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topP</code> to 80, the model only selects the next token from the top 80% of the probability distribution of next tokens.</p>
   * @public
   */
  topP?: number;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>topK</code> is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topK</code> to 50, the model selects the next token from among the top 50 most likely choices.</p>
   * @public
   */
  topK?: number;

  /**
   * <p>The maximum number of tokens to allow in the generated response.</p>
   * @public
   */
  maximumLength?: number;

  /**
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.</p>
   * @public
   */
  stopSequences?: string[];
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
export const PromptState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PromptState = (typeof PromptState)[keyof typeof PromptState];

/**
 * @public
 * @enum
 */
export const PromptType = {
  KNOWLEDGE_BASE_RESPONSE_GENERATION: "KNOWLEDGE_BASE_RESPONSE_GENERATION",
  ORCHESTRATION: "ORCHESTRATION",
  POST_PROCESSING: "POST_PROCESSING",
  PRE_PROCESSING: "PRE_PROCESSING",
} as const;

/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * <p>Contains configurations to override a prompt template in one part of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
 * @public
 */
export interface PromptConfiguration {
  /**
   * <p>The step in the agent sequence that this prompt configuration applies to.</p>
   * @public
   */
  promptType?: PromptType;

  /**
   * <p>Specifies whether to override the default prompt template for this <code>promptType</code>. Set this value to <code>OVERRIDDEN</code> to use the prompt that you provide in the <code>basePromptTemplate</code>. If you leave it as <code>DEFAULT</code>, the agent uses a default prompt template.</p>
   * @public
   */
  promptCreationMode?: CreationMode;

  /**
   * <p>Specifies whether to allow the agent to carry out the step specified in the <code>promptType</code>. If you set this value to <code>DISABLED</code>, the agent skips that step. The default state for each <code>promptType</code> is as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRE_PROCESSING</code> – <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORCHESTRATION</code> – <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KNOWLEDGE_BASE_RESPONSE_GENERATION</code> – <code>ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>POST_PROCESSING</code> – <code>DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  promptState?: PromptState;

  /**
   * <p>Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts-configure.html">Configure the prompt templates</a>.</p>
   * @public
   */
  basePromptTemplate?: string;

  /**
   * <p>Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the <code>promptType</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>. If you set the field as <code>OVERRIDEN</code>, the <code>overrideLambda</code> field in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> must be specified with the ARN of a Lambda function.</p>
   * @public
   */
  parserMode?: CreationMode;
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
  overrideLambda?: string;
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Instructions that tell the agent what it should do and how it should interact with users.</p>
   * @public
   */
  instruction?: string;

  /**
   * <p>The status of the agent and whether it is ready for use. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The agent is being created.</p>
   *             </li>
   *             <li>
   *                <p>PREPARING – The agent is being prepared.</p>
   *             </li>
   *             <li>
   *                <p>PREPARED – The agent is prepared and ready to be invoked.</p>
   *             </li>
   *             <li>
   *                <p>NOT_PREPARED – The agent has been created but not yet prepared.</p>
   *             </li>
   *             <li>
   *                <p>FAILED – The agent API operation failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The agent is being updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The agent is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The foundation model used for orchestration by the agent.</p>
   * @public
   */
  foundationModel?: string;

  /**
   * <p>The description of the agent.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p>
   *          <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
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
  customerEncryptionKeyArn?: string;

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
  preparedAt?: Date;

  /**
   * <p>Contains reasons that the agent-related API that you invoked failed.</p>
   * @public
   */
  failureReasons?: string[];

  /**
   * <p>Contains recommended actions to take for the agent-related API that you invoked to succeed.</p>
   * @public
   */
  recommendedActions?: string[];

  /**
   * <p>Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;

  /**
   * <p>Contains memory configuration for the agent.</p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration;
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
  agentVersion?: string;

  /**
   * <p>Information on the Provisioned Throughput assigned to an agent alias.</p>
   * @public
   */
  provisionedThroughput?: string;
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
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * <p>The date that the alias stopped being associated to the version in the <code>routingConfiguration</code> object</p>
   * @public
   */
  endDate?: Date;

  /**
   * <p>The date that the alias began being associated to the version in the <code>routingConfiguration</code> object.</p>
   * @public
   */
  startDate?: Date;
}

/**
 * @public
 * @enum
 */
export const AgentAliasStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PREPARED: "PREPARED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AgentAliasStatus = (typeof AgentAliasStatus)[keyof typeof AgentAliasStatus];

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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The description of the alias of the agent.</p>
   * @public
   */
  description?: string;

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
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[];

  /**
   * <p>The status of the alias of the agent and whether it is ready for use. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The agent alias is being created.</p>
   *             </li>
   *             <li>
   *                <p>PREPARED – The agent alias is finished being created or updated and is ready to be invoked.</p>
   *             </li>
   *             <li>
   *                <p>FAILED – The agent alias API operation failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The agent alias is being updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The agent alias is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * <p>Information on the failure of Provisioned Throughput assigned to an agent alias.</p>
   * @public
   */
  failureReasons?: string[];
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
  description?: string;

  /**
   * <p>Contains details about the version of the agent with which the alias is associated.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

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
}

/**
 * <p>Defines an agent node in your flow. You specify the agent to invoke at this point in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
 * @public
 * @enum
 */
export const KnowledgeBaseState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type KnowledgeBaseState = (typeof KnowledgeBaseState)[keyof typeof KnowledgeBaseState];

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
  description?: string;

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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Instructions that tell the agent what it should do and how it should interact with users.</p>
   * @public
   */
  instruction?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model to be used for orchestration by the agent you create.</p>
   * @public
   */
  foundationModel?: string;

  /**
   * <p>A description of the agent.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p>
   *          <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>Any tags that you want to attach to the agent.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;

  /**
   * <p>The unique Guardrail configuration assigned to the agent when it is created.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;

  /**
   * <p> Contains the details of the memory configured for the agent.</p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration;
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
  skipResourceInUseCheck?: boolean;
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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
  description?: string;

  /**
   * <p>The time at which the agent was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The latest version of the agent.</p>
   * @public
   */
  latestAgentVersion?: string;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;
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
  nextToken?: string;
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
  instruction?: string;

  /**
   * <p>Specifies a new foundation model to be used for orchestration by the agent.</p>
   * @public
   */
  foundationModel: string | undefined;

  /**
   * <p>Specifies a new description of the agent.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p>
   *          <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;

  /**
   * <p>The unique Guardrail configuration assigned to the agent when it is updated.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;

  /**
   * <p>Specifies the new memory configuration for the agent. </p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration;
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
  instruction?: string;

  /**
   * <p>The status of the agent that the version belongs to.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The foundation model that the version invokes.</p>
   * @public
   */
  foundationModel?: string;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p>
   *          <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
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
  customerEncryptionKeyArn?: string;

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
  failureReasons?: string[];

  /**
   * <p>A list of recommended actions to take for the failed API operation on the version to succeed.</p>
   * @public
   */
  recommendedActions?: string[];

  /**
   * <p>Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;

  /**
   * <p>
   *         Contains details of the memory configuration on the version of the agent.
   *       </p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration;
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
  description?: string;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration;
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A description of the alias of the agent.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Contains details about the routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * <p>Any tags that you want to attach to the alias of the agent.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
  nextToken?: string;
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
  description?: string;

  /**
   * <p>Contains details about the routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
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
 * @public
 * @enum
 */
export const DataDeletionPolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type DataDeletionPolicy = (typeof DataDeletionPolicy)[keyof typeof DataDeletionPolicy];

/**
 * <p>The specific filters applied to your data source content. You can filter out or
 *             include certain content.</p>
 * @public
 */
export interface PatternObjectFilter {
  /**
   * <p>The supported object type or content type of the data source.</p>
   * @public
   */
  objectType: string | undefined;

  /**
   * <p>A list of one or more inclusion regular expression patterns to include certain
   *             object types that adhere to the pattern. If you specify an inclusion and exclusion
   *             filter/pattern and both match a document, the exclusion filter takes precedence
   *             and the document isn’t crawled.</p>
   * @public
   */
  inclusionFilters?: string[];

  /**
   * <p>A list of one or more exclusion regular expression patterns to exclude certain
   *             object types that adhere to the pattern. If you specify an inclusion and exclusion
   *             filter/pattern and both match a document, the exclusion filter takes precedence
   *             and the document isn’t crawled.</p>
   * @public
   */
  exclusionFilters?: string[];
}

/**
 * <p>The configuration of filtering certain objects or content types of the data source.</p>
 * @public
 */
export interface PatternObjectFilterConfiguration {
  /**
   * <p>The configuration of specific filters applied to your data source content. You can
   *             filter out or include certain content.</p>
   * @public
   */
  filters: PatternObjectFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CrawlFilterConfigurationType = {
  PATTERN: "PATTERN",
} as const;

/**
 * @public
 */
export type CrawlFilterConfigurationType =
  (typeof CrawlFilterConfigurationType)[keyof typeof CrawlFilterConfigurationType];

/**
 * <p>The configuration of filtering the data source content. For example,
 *             configuring regular expression patterns to include or exclude certain content.</p>
 * @public
 */
export interface CrawlFilterConfiguration {
  /**
   * <p>The type of filtering that you want to apply to certain objects or content of the
   *             data source. For example, the <code>PATTERN</code> type is regular expression patterns
   *             you can apply to filter your content.</p>
   * @public
   */
  type: CrawlFilterConfigurationType | undefined;

  /**
   * <p>The configuration of filtering certain objects or content types of the data source.</p>
   * @public
   */
  patternObjectFilter?: PatternObjectFilterConfiguration;
}

/**
 * <p>The configuration of the Confluence content. For example, configuring specific
 *             types of Confluence content.</p>
 * @public
 */
export interface ConfluenceCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the Confluence content. For example, configuring
   *             regular expression patterns to include or exclude certain content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration;
}

/**
 * @public
 * @enum
 */
export const ConfluenceAuthType = {
  BASIC: "BASIC",
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;

/**
 * @public
 */
export type ConfluenceAuthType = (typeof ConfluenceAuthType)[keyof typeof ConfluenceAuthType];

/**
 * @public
 * @enum
 */
export const ConfluenceHostType = {
  SAAS: "SAAS",
} as const;

/**
 * @public
 */
export type ConfluenceHostType = (typeof ConfluenceHostType)[keyof typeof ConfluenceHostType];

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
   * <p>The supported authentication type to authenticate and connect to your
   *             Confluence instance.</p>
   * @public
   */
  authType: ConfluenceAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that
   *             stores your authentication credentials for your Confluence instance URL.
   *             For more information on the key-value pairs that must be included in
   *             your secret, depending on your authentication type, see
   *             <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/confluence-data-source-connector.html#configuration-confluence-connector">Confluence connection configuration</a>.</p>
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
   * <p>The configuration of the Confluence content. For example, configuring
   *             specific types of Confluence content.</p>
   * @public
   */
  crawlerConfiguration?: ConfluenceCrawlerConfiguration;
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
   * <p>A list of S3 prefixes to include certain files or content. For more information,
   *             see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a>.</p>
   * @public
   */
  inclusionPrefixes?: string[];

  /**
   * <p>The account ID for the owner of the S3 bucket.</p>
   * @public
   */
  bucketOwnerAccountId?: string;
}

/**
 * <p>The configuration of the Salesforce content. For example, configuring
 *             specific types of Salesforce content.</p>
 * @public
 */
export interface SalesforceCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the Salesforce content. For example,
   *             configuring regular expression patterns to include or exclude certain
   *             content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration;
}

/**
 * @public
 * @enum
 */
export const SalesforceAuthType = {
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;

/**
 * @public
 */
export type SalesforceAuthType = (typeof SalesforceAuthType)[keyof typeof SalesforceAuthType];

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
   * <p>The supported authentication type to authenticate and connect to your
   *             Salesforce instance.</p>
   * @public
   */
  authType: SalesforceAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that
   *             stores your authentication credentials for your Salesforce instance URL.
   *             For more information on the key-value pairs that must be included in
   *             your secret, depending on your authentication type, see
   *             <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/salesforce-data-source-connector.html#configuration-salesforce-connector">Salesforce connection configuration</a>.</p>
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
   * <p>The configuration of the Salesforce content. For example, configuring
   *             specific types of Salesforce content.</p>
   * @public
   */
  crawlerConfiguration?: SalesforceCrawlerConfiguration;
}

/**
 * <p>The configuration of the SharePoint content. For example, configuring
 *             specific types of SharePoint content.</p>
 * @public
 */
export interface SharePointCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the SharePoint content. For example,
   *             configuring regular expression patterns to include or exclude certain content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration;
}

/**
 * @public
 * @enum
 */
export const SharePointAuthType = {
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;

/**
 * @public
 */
export type SharePointAuthType = (typeof SharePointAuthType)[keyof typeof SharePointAuthType];

/**
 * @public
 * @enum
 */
export const SharePointHostType = {
  ONLINE: "ONLINE",
} as const;

/**
 * @public
 */
export type SharePointHostType = (typeof SharePointHostType)[keyof typeof SharePointHostType];

/**
 * <p>The endpoint information to connect to your SharePoint data source.</p>
 * @public
 */
export interface SharePointSourceConfiguration {
  /**
   * <p>The identifier of your Microsoft 365 tenant.</p>
   * @public
   */
  tenantId?: string;

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
   * <p>The supported authentication type to authenticate and connect
   *             to your SharePoint site/sites.</p>
   * @public
   */
  authType: SharePointAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that
   *             stores your authentication credentials for your SharePoint site/sites.
   *             For more information on the key-value pairs that must be included in
   *             your secret, depending on your authentication type, see
   *             <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sharepoint-data-source-connector.html#configuration-sharepoint-connector">SharePoint connection configuration</a>.</p>
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
   * <p>The configuration of the SharePoint content. For example, configuring
   *             specific types of SharePoint content.</p>
   * @public
   */
  crawlerConfiguration?: SharePointCrawlerConfiguration;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  CONFLUENCE: "CONFLUENCE",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SHAREPOINT: "SHAREPOINT",
  WEB: "WEB",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * <p>The rate limits for the URLs that you want to crawl.
 *             You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface WebCrawlerLimits {
  /**
   * <p>The max rate at which pages are crawled, up to 300 per minute per host.</p>
   * @public
   */
  rateLimit?: number;
}

/**
 * @public
 * @enum
 */
export const WebScopeType = {
  HOST_ONLY: "HOST_ONLY",
  SUBDOMAINS: "SUBDOMAINS",
} as const;

/**
 * @public
 */
export type WebScopeType = (typeof WebScopeType)[keyof typeof WebScopeType];

/**
 * <p>The configuration of web URLs that you want to crawl.
 *             You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface WebCrawlerConfiguration {
  /**
   * <p>The configuration of crawl limits for the web URLs.</p>
   * @public
   */
  crawlerLimits?: WebCrawlerLimits;

  /**
   * <p>A list of one or more inclusion regular expression patterns to include
   *             certain URLs. If you specify an inclusion and exclusion filter/pattern
   *             and both match a URL, the exclusion filter takes precedence and the web
   *             content of the URL isn’t crawled.</p>
   * @public
   */
  inclusionFilters?: string[];

  /**
   * <p>A list of one or more exclusion regular expression patterns to exclude
   *             certain URLs. If you specify an inclusion and exclusion filter/pattern
   *             and both match a URL, the exclusion filter takes precedence and the web
   *             content of the URL isn’t crawled.</p>
   * @public
   */
  exclusionFilters?: string[];

  /**
   * <p>The scope of what is crawled for your URLs.</p>
   *          <p>You can choose to crawl only web pages that belong to the same host or primary
   *             domain. For example, only web pages that contain the seed URL
   *             "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains.
   *             You can choose to include sub domains in addition to the host or primary domain.
   *             For example, web pages that contain "aws.amazon.com" can also include sub domain
   *             "docs.aws.amazon.com".</p>
   * @public
   */
  scope?: WebScopeType;
}

/**
 * <p>The seed or starting point URL.
 *             You should be authorized to crawl the URL.</p>
 * @public
 */
export interface SeedUrl {
  /**
   * <p>A seed or starting point URL.</p>
   * @public
   */
  url?: string;
}

/**
 * <p>The configuration of web URLs that you want to crawl.
 *             You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface UrlConfiguration {
  /**
   * <p>One or more seed or starting point URLs.</p>
   * @public
   */
  seedUrls?: SeedUrl[];
}

/**
 * <p>The configuration of the URL/URLs for the web content that you want
 *             to crawl. You should be authorized to crawl the URLs.</p>
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
  crawlerConfiguration?: WebCrawlerConfiguration;
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
  s3Configuration?: S3DataSourceConfiguration;

  /**
   * <p>The configuration of web URLs to crawl for your data source.
   *             You should be authorized to crawl the URLs.</p>
   *          <note>
   *             <p>Crawling web URLs as your data source is in preview release
   *                 and is subject to change.</p>
   *          </note>
   * @public
   */
  webConfiguration?: WebDataSourceConfiguration;

  /**
   * <p>The configuration information to connect to Confluence as your data source.</p>
   *          <note>
   *             <p>Confluence data source connector is in preview release and is subject to change.</p>
   *          </note>
   * @public
   */
  confluenceConfiguration?: ConfluenceDataSourceConfiguration;

  /**
   * <p>The configuration information to connect to Salesforce as your data source.</p>
   *          <note>
   *             <p>Salesforce data source connector is in preview release and is subject to change.</p>
   *          </note>
   * @public
   */
  salesforceConfiguration?: SalesforceDataSourceConfiguration;

  /**
   * <p>The configuration information to connect to SharePoint as your data source.</p>
   *          <note>
   *             <p>SharePoint data source connector is in preview release and is subject to change.</p>
   *          </note>
   * @public
   */
  sharePointConfiguration?: SharePointDataSourceConfiguration;
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
  kmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const ChunkingStrategy = {
  FIXED_SIZE: "FIXED_SIZE",
  HIERARCHICAL: "HIERARCHICAL",
  NONE: "NONE",
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type ChunkingStrategy = (typeof ChunkingStrategy)[keyof typeof ChunkingStrategy];

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
 * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents
 *     into layers of chunks where the first layer contains large chunks, and the second layer contains smaller
 *     chunks derived from the first layer.</p>
 *          <p>You configure the number of tokens to overlap, or repeat across adjacent chunks. For example,
 *     if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of
 *     the second chunk. For each layer, you must also configure the maximum number of tokens in a chunk.</p>
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
 * <p>Settings for semantic document chunking for a data source. Semantic chunking splits
 *     a document into into smaller documents based on groups of similar content derived from the text
 *     with natural language processing.</p>
 *          <p>With semantic chunking, each sentence is compared to the next to determine how similar they are.
 *     You specify a threshold in the form of a percentile, where adjacent sentences that are less similar than
 *     that percentage of sentence pairs are divided into separate chunks. For example, if you set the threshold to
 *     90, then the 10 percent of sentence pairs that are least similar are split. So if you have 101 sentences,
 *     100 sentence pairs are compared, and the 10 with the least similarity are split, creating 11 chunks. These
 *     chunks are further split if they exceed the max token size.</p>
 *          <p>You must also specify a buffer size, which determines whether sentences are compared in isolation, or
 *     within a moving context window that includes the previous and following sentence. For example, if you set
 *     the buffer size to <code>1</code>, the embedding for sentence 10 is derived from sentences 9, 10, and 11
 *     combined.</p>
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
   * <p>Knowledge base can split your source data into chunks. A <i>chunk</i> refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for <code>NONE</code>, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIXED_SIZE</code> – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the <code>fixedSizeChunkingConfiguration</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIERARCHICAL</code> – Split documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEMANTIC</code> – Split documents into chunks based on groups of similar content derived with natural language processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.</p>
   *             </li>
   *          </ul>
   * @public
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * <p>Configurations for when you choose fixed-size chunking. If you set the <code>chunkingStrategy</code> as <code>NONE</code>, exclude this field.</p>
   * @public
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;

  /**
   * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents
   *     into layers of chunks where the first layer contains large chunks, and the second layer contains smaller
   *     chunks derived from the first layer.</p>
   * @public
   */
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;

  /**
   * <p>Settings for semantic document chunking for a data source. Semantic chunking splits
   *     a document into into smaller documents based on groups of similar content derived from the text
   *     with natural language processing.</p>
   * @public
   */
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
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
 * <p>A location for storing content from data sources temporarily as it is processed by
 *     custom components in the ingestion pipeline.</p>
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
 * @public
 * @enum
 */
export const StepType = {
  POST_CHUNKING: "POST_CHUNKING",
} as const;

/**
 * @public
 */
export type StepType = (typeof StepType)[keyof typeof StepType];

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
 * <p>A custom processing step for documents moving through a data source ingestion pipeline. To
 *     process documents after they have been converted into chunks, set the step to apply to
 *     <code>POST_CHUNKING</code>.</p>
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
 * <p>Settings for customizing steps in the data source content ingestion pipeline.</p>
 *          <p>You can configure the data source to process documents with a Lambda function after
 *     they are parsed and converted into chunks. When you add a post-chunking transformation,
 *     the service stores chunked documents in an S3 bucket and invokes a Lambda function to process
 *     them.</p>
 *          <p>To process chunked documents with a Lambda function, define an S3 bucket path for input
 *     and output objects, and a transformation that specifies the Lambda function to invoke. You can
 *     use the Lambda function to customize how chunks are split, and the metadata for each chunk.
 *     </p>
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
 * <p>Settings for a foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> used to parse documents for a data source.</p>
 * @public
 */
export interface BedrockFoundationModelConfiguration {
  /**
   * <p>The ARN of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Instructions for interpreting the contents of a document.</p>
   * @public
   */
  parsingPrompt?: ParsingPrompt;
}

/**
 * @public
 * @enum
 */
export const ParsingStrategy = {
  BEDROCK_FOUNDATION_MODEL: "BEDROCK_FOUNDATION_MODEL",
} as const;

/**
 * @public
 */
export type ParsingStrategy = (typeof ParsingStrategy)[keyof typeof ParsingStrategy];

/**
 * <p>Settings for parsing document contents. By default, the service converts the contents of each
 *     document into text before splitting it into chunks. To improve processing of PDF files with tables and images,
 *     you can configure the data source to convert the pages of text into images and use a model to describe the
 *     contents of each page.</p>
 *          <p>To use a model to parse PDF documents, set the parsing strategy to <code>BEDROCK_FOUNDATION_MODEL</code> and
 *       specify the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> to use by ARN. You can also override the default parsing prompt with instructions for how
 *     to interpret images and tables in your documents. The following models are supported.</p>
 *          <ul>
 *             <li>
 *                <p>Anthropic Claude 3 Sonnet - <code>anthropic.claude-3-sonnet-20240229-v1:0</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Anthropic Claude 3 Haiku - <code>anthropic.claude-3-haiku-20240307-v1:0</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can get the ARN of a model with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListFoundationModels.html">ListFoundationModels</a> action. Standard model usage
 *     charges apply for the foundation model parsing strategy.</p>
 * @public
 */
export interface ParsingConfiguration {
  /**
   * <p>The parsing strategy for the data source.</p>
   * @public
   */
  parsingStrategy: ParsingStrategy | undefined;

  /**
   * <p>Settings for a foundation model used to parse documents for a data source.</p>
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
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
  chunkingConfiguration?: ChunkingConfiguration;

  /**
   * <p>A custom document transformer for parsed data source documents.</p>
   * @public
   */
  customTransformationConfiguration?: CustomTransformationConfiguration;

  /**
   * <p>A custom parser for data source documents.</p>
   * @public
   */
  parsingConfiguration?: ParsingConfiguration;
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the data source.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The connection configuration for the data source.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy for the data source.</p>
   *          <p>You can set the data deletion policy to:</p>
   *          <ul>
   *             <li>
   *                <p>DELETE: Deletes all data from your data source that’s converted
   *           into vector embeddings upon deletion of a knowledge base or data source resource.
   *           Note that the <b>vector store itself is not deleted</b>,
   *           only the data. This flag is ignored if an Amazon Web Services account is deleted.</p>
   *             </li>
   *             <li>
   *                <p>RETAIN: Retains all data from your data source that’s converted
   *           into vector embeddings upon deletion of a knowledge base or data source resource.
   *           Note that the <b>vector store itself is not deleted</b>
   *           if you delete a knowledge base or data source resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy;

  /**
   * <p>Contains details about the server-side encryption for the data source.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETE_UNSUCCESSFUL: "DELETE_UNSUCCESSFUL",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

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
   * <p>The status of the data source. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>Available – The data source has been created and is ready for ingestion into the knowledge base.</p>
   *             </li>
   *             <li>
   *                <p>Deleting – The data source is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The connection configuration for the data source.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the server-side encryption.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;

  /**
   * <p>The data deletion policy for the data source.</p>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy;

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
  failureReasons?: string[];
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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
  description?: string;

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
  nextToken?: string;
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
  description?: string;

  /**
   * <p>The connection configuration for the data source that you want to update.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy for the data source that you want to update.</p>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy;

  /**
   * <p>Contains details about server-side encryption of the data source.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
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

  export interface Visitor<T> {
    data: (value: FlowDataConnectionConfiguration) => T;
    conditional: (value: FlowConditionalConnectionConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowConnectionConfiguration, visitor: Visitor<T>): T => {
    if (value.data !== undefined) return visitor.data(value.data);
    if (value.conditional !== undefined) return visitor.conditional(value.conditional);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FlowConnectionType = {
  CONDITIONAL: "Conditional",
  DATA: "Data",
} as const;

/**
 * @public
 */
export type FlowConnectionType = (typeof FlowConnectionType)[keyof typeof FlowConnectionType];

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
  configuration?: FlowConnectionConfiguration;
}

/**
 * <p>Defines a collector node in your flow. This node takes an iteration of inputs and consolidates them into an array in the output. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
  expression?: string;
}

/**
 * <p>Defines a condition node in your flow. You can specify conditions that determine which node comes next in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
 * <p>Contains configurations for the input flow node for a flow. This node takes the input from flow invocation and passes it to the next node in the data type that you specify.</p>
 * @public
 */
export interface InputFlowNodeConfiguration {}

/**
 * <p>Contains configurations for an iterator node in a flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.</p>
 *          <p>The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.</p>
 * @public
 */
export interface IteratorFlowNodeConfiguration {}

/**
 * <p>Contains configurations for a knowledge base node in a flow. This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
  modelId?: string;
}

/**
 * <p>Contains configurations for a Lambda function node in the flow. You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
 * <p>Contains configurations for a Lex node in the flow. You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
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
 * <p>Contains configurations for an output flow node in the flow. You specify the data type expected for the input into the node in the <code>type</code> field and how to return the final output in the <code>expression</code> field.</p>
 * @public
 */
export interface OutputFlowNodeConfiguration {}

/**
 * <p>Contains inference configurations related to model inference for a prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html">Inference parameters</a>.</p>
 * @public
 */
export interface PromptModelInferenceConfiguration {
  /**
   * <p>Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.</p>
   * @public
   */
  temperature?: number;

  /**
   * <p>The percentage of most-likely candidates that the model considers for the next token.</p>
   * @public
   */
  topP?: number;

  /**
   * <p>The number of most-likely candidates that the model considers for the next token during generation.</p>
   * @public
   */
  topK?: number;

  /**
   * <p>The maximum number of tokens to return in the response.</p>
   * @public
   */
  maxTokens?: number;

  /**
   * <p>A list of strings that define sequences after which the model will stop generating.</p>
   * @public
   */
  stopSequences?: string[];
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

  export interface Visitor<T> {
    text: (value: PromptModelInferenceConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptInferenceConfiguration, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a variable in the prompt.</p>
 * @public
 */
export interface PromptInputVariable {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name?: string;
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
   * <p>An array of the variables in the prompt template.</p>
   * @public
   */
  inputVariables?: PromptInputVariable[];
}

/**
 * <p>Contains the message for a prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html">Prompt management in Amazon Bedrock</a>.</p>
 * @public
 */
export type PromptTemplateConfiguration =
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
    text: (value: TextPromptTemplateConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptTemplateConfiguration, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const PromptTemplateType = {
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type PromptTemplateType = (typeof PromptTemplateType)[keyof typeof PromptTemplateType];

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
  inferenceConfiguration?: PromptInferenceConfiguration;
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

  export interface Visitor<T> {
    resource: (value: PromptFlowNodeResourceConfiguration) => T;
    inline: (value: PromptFlowNodeInlineConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptFlowNodeSourceConfiguration, visitor: Visitor<T>): T => {
    if (value.resource !== undefined) return visitor.resource(value.resource);
    if (value.inline !== undefined) return visitor.inline(value.inline);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configurations for a prompt node in the flow. You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface PromptFlowNodeConfiguration {
  /**
   * <p>Specifies whether the prompt is from Prompt management or defined inline.</p>
   * @public
   */
  sourceConfiguration: PromptFlowNodeSourceConfiguration | undefined;
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

  export interface Visitor<T> {
    s3: (value: RetrievalFlowNodeS3Configuration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RetrievalFlowNodeServiceConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    s3: (value: StorageFlowNodeS3Configuration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StorageFlowNodeServiceConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>Contains configurations for a node in your flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in Amazon Bedrock works</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export type FlowNodeConfiguration =
  | FlowNodeConfiguration.AgentMember
  | FlowNodeConfiguration.CollectorMember
  | FlowNodeConfiguration.ConditionMember
  | FlowNodeConfiguration.InputMember
  | FlowNodeConfiguration.IteratorMember
  | FlowNodeConfiguration.KnowledgeBaseMember
  | FlowNodeConfiguration.LambdaFunctionMember
  | FlowNodeConfiguration.LexMember
  | FlowNodeConfiguration.OutputMember
  | FlowNodeConfiguration.PromptMember
  | FlowNodeConfiguration.RetrievalMember
  | FlowNodeConfiguration.StorageMember
  | FlowNodeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FlowNodeConfiguration {
  /**
   * <p>Contains configurations for an input flow node in your flow. The first node in the flow. <code>inputs</code> can't be specified for this node.</p>
   * @public
   */
  export interface InputMember {
    input: InputFlowNodeConfiguration;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for an output flow node in your flow. The last node in the flow. <code>outputs</code> can't be specified for this node.</p>
   * @public
   */
  export interface OutputMember {
    input?: never;
    output: OutputFlowNodeConfiguration;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a knowledge base node in your flow. Queries a knowledge base and returns the retrieved results or generated response.</p>
   * @public
   */
  export interface KnowledgeBaseMember {
    input?: never;
    output?: never;
    knowledgeBase: KnowledgeBaseFlowNodeConfiguration;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a Condition node in your flow. Defines conditions that lead to different branches of the flow.</p>
   * @public
   */
  export interface ConditionMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition: ConditionFlowNodeConfiguration;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a Lex node in your flow. Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.</p>
   * @public
   */
  export interface LexMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex: LexFlowNodeConfiguration;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a prompt node in your flow. Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.</p>
   * @public
   */
  export interface PromptMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt: PromptFlowNodeConfiguration;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a Lambda function node in your flow. Invokes an Lambda function.</p>
   * @public
   */
  export interface LambdaFunctionMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction: LambdaFunctionFlowNodeConfiguration;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a Storage node in your flow. Stores an input in an Amazon S3 location.</p>
   * @public
   */
  export interface StorageMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage: StorageFlowNodeConfiguration;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for an agent node in your flow. Invokes an alias of an agent and returns the response.</p>
   * @public
   */
  export interface AgentMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent: AgentFlowNodeConfiguration;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a Retrieval node in your flow. Retrieves data from an Amazon S3 location and returns it as the output.</p>
   * @public
   */
  export interface RetrievalMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval: RetrievalFlowNodeConfiguration;
    iterator?: never;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for an iterator node in your flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.</p>
   *          <p>The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.</p>
   * @public
   */
  export interface IteratorMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator: IteratorFlowNodeConfiguration;
    collector?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a collector node in your flow. Collects an iteration of inputs and consolidates them into an array of outputs.</p>
   * @public
   */
  export interface CollectorMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector: CollectorFlowNodeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    input: (value: InputFlowNodeConfiguration) => T;
    output: (value: OutputFlowNodeConfiguration) => T;
    knowledgeBase: (value: KnowledgeBaseFlowNodeConfiguration) => T;
    condition: (value: ConditionFlowNodeConfiguration) => T;
    lex: (value: LexFlowNodeConfiguration) => T;
    prompt: (value: PromptFlowNodeConfiguration) => T;
    lambdaFunction: (value: LambdaFunctionFlowNodeConfiguration) => T;
    storage: (value: StorageFlowNodeConfiguration) => T;
    agent: (value: AgentFlowNodeConfiguration) => T;
    retrieval: (value: RetrievalFlowNodeConfiguration) => T;
    iterator: (value: IteratorFlowNodeConfiguration) => T;
    collector: (value: CollectorFlowNodeConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowNodeConfiguration, visitor: Visitor<T>): T => {
    if (value.input !== undefined) return visitor.input(value.input);
    if (value.output !== undefined) return visitor.output(value.output);
    if (value.knowledgeBase !== undefined) return visitor.knowledgeBase(value.knowledgeBase);
    if (value.condition !== undefined) return visitor.condition(value.condition);
    if (value.lex !== undefined) return visitor.lex(value.lex);
    if (value.prompt !== undefined) return visitor.prompt(value.prompt);
    if (value.lambdaFunction !== undefined) return visitor.lambdaFunction(value.lambdaFunction);
    if (value.storage !== undefined) return visitor.storage(value.storage);
    if (value.agent !== undefined) return visitor.agent(value.agent);
    if (value.retrieval !== undefined) return visitor.retrieval(value.retrieval);
    if (value.iterator !== undefined) return visitor.iterator(value.iterator);
    if (value.collector !== undefined) return visitor.collector(value.collector);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>Contains configurations for an input to a node.</p>
 * @public
 */
export interface FlowNodeInput {
  /**
   * <p>A name for the input that you can reference.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the input. If the input doesn't match this type at runtime, a validation error will be thrown.</p>
   * @public
   */
  type: FlowNodeIODataType | undefined;

  /**
   * <p>An expression that formats the input for the node. For an explanation of how to create expressions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html">Expressions in Prompt flows in Amazon Bedrock</a>.</p>
   * @public
   */
  expression: string | undefined;
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
 * @enum
 */
export const FlowNodeType = {
  AGENT: "Agent",
  COLLECTOR: "Collector",
  CONDITION: "Condition",
  INPUT: "Input",
  ITERATOR: "Iterator",
  KNOWLEDGE_BASE: "KnowledgeBase",
  LAMBDA_FUNCTION: "LambdaFunction",
  LEX: "Lex",
  OUTPUT: "Output",
  PROMPT: "Prompt",
  RETRIEVAL: "Retrieval",
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type FlowNodeType = (typeof FlowNodeType)[keyof typeof FlowNodeType];

/**
 * <p>Contains configurations about a node in the flow.</p>
 * @public
 */
export interface FlowNode {
  /**
   * <p>A name for the node.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of node. This value must match the name of the key that you provide in the configuration you provide in the <code>FlowNodeConfiguration</code> field.</p>
   * @public
   */
  type: FlowNodeType | undefined;

  /**
   * <p>Contains configurations for the node.</p>
   * @public
   */
  configuration?: FlowNodeConfiguration;

  /**
   * <p>An array of objects, each of which contains information about an input into the node.</p>
   * @public
   */
  inputs?: FlowNodeInput[];

  /**
   * <p>A list of objects, each of which contains information about an output from the node.</p>
   * @public
   */
  outputs?: FlowNodeOutput[];
}

/**
 * <p>The definition of the nodes and connections between nodes in the flow.</p>
 * @public
 */
export interface FlowDefinition {
  /**
   * <p>An array of node definitions in the flow.</p>
   * @public
   */
  nodes?: FlowNode[];

  /**
   * <p>An array of connection definitions in the flow.</p>
   * @public
   */
  connections?: FlowConnection[];
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * <p>A name for the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>A definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Any tags that you want to attach to the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const FlowStatus = {
  FAILED: "Failed",
  NOT_PREPARED: "NotPrepared",
  PREPARED: "Prepared",
  PREPARING: "Preparing",
} as const;

/**
 * @public
 */
export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus];

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that you encrypted the flow with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

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
   * <p>The status of the flow. When you submit this request, the status will be <code>NotPrepared</code>. If creation fails, the status becomes <code>Failed</code>.</p>
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
   * <p>The version of the flow. When you create a flow, the version created is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;
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
  skipResourceInUseCheck?: boolean;
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
 * <p>Contains information about a version that the alias maps to.</p>
 * @public
 */
export interface FlowAliasRoutingConfigurationListItem {
  /**
   * <p>The version that the alias maps to.</p>
   * @public
   */
  flowVersion?: string;
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
  description?: string;

  /**
   * <p>Contains information about the version to which to map the alias.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The unique identifier of the flow for which to create an alias.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Any tags that you want to attach to the alias of the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  description?: string;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

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
  description?: string;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains information about an alias of a flow.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowAliases.html#API_agent_ListFlowAliases_ResponseSyntax">ListFlowAliases response</a>
 *                </p>
 *             </li>
 *          </ul>
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
  description?: string;

  /**
   * <p>A list of configurations about the versions that the alias maps to. Currently, you can only specify one.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

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
  nextToken?: string;
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
  description?: string;

  /**
   * <p>Contains information about the version to which to map the alias.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

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
  description?: string;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

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
  description?: string;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateFlowVersionResponse {
  /**
   * <p>The name of the version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The KMS key that the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

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
   * <p>The status of the flow.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The version of the flow that was created. Versions are numbered incrementally, starting from 1.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and connections in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;
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
  skipResourceInUseCheck?: boolean;
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
export interface GetFlowVersionResponse {
  /**
   * <p>The name of the version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the version of the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

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
   * <p>The status of the flow.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The version of the flow for which information was retrieved.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;
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
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains information about a version of a flow.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowVersions.html#API_agent_ListFlowVersions_ResponseSyntax">ListFlowVersions response</a>
 *                </p>
 *             </li>
 *          </ul>
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
  nextToken?: string;
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
 * @public
 * @enum
 */
export const FlowValidationSeverity = {
  ERROR: "Error",
  WARNING: "Warning",
} as const;

/**
 * @public
 */
export type FlowValidationSeverity = (typeof FlowValidationSeverity)[keyof typeof FlowValidationSeverity];

/**
 * <p>Contains information about validation of the flow.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html#API_agent_GetFlow_ResponseSyntax">GetFlow response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowVersion.html#API_agent_GetFlowVersion_ResponseSyntax">GetFlowVersion response</a>
 *                </p>
 *             </li>
 *          </ul>
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
}

/**
 * @public
 */
export interface GetFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow.  For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service row for flows</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

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
   * <p>The status of the flow. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the <code>DRAFT</code> version won't contain the latest changes for testing. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html">PrepareFlow</a> request to package the latest changes into the <code>DRAFT</code> version.</p>
   *             </li>
   *             <li>
   *                <p>Preparing – The flow is being prepared so that the <code>DRAFT</code> version contains the latest changes for testing.</p>
   *             </li>
   *             <li>
   *                <p>Prepared – The flow is prepared and the <code>DRAFT</code> version contains the latest changes for testing.</p>
   *             </li>
   *             <li>
   *                <p>Failed – The last API operation that you invoked on the flow failed. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html">GetFlow</a> request and check the error message in the <code>validations</code> field.</p>
   *             </li>
   *          </ul>
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
   * <p>The version of the flow for which information was retrieved.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The definition of the nodes and connections between the nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;

  /**
   * <p>A list of validation error messages related to the last failed operation on the flow.</p>
   * @public
   */
  validations?: FlowValidation[];
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
  description?: string;

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
   * <p>The status of the flow. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the <code>DRAFT</code> version won't contain the latest changes for testing. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html">PrepareFlow</a> request to package the latest changes into the <code>DRAFT</code> version.</p>
   *             </li>
   *             <li>
   *                <p>Preparing – The flow is being prepared so that the <code>DRAFT</code> version contains the latest changes for testing.</p>
   *             </li>
   *             <li>
   *                <p>Prepared – The flow is prepared and the <code>DRAFT</code> version contains the latest changes for testing.</p>
   *             </li>
   *             <li>
   *                <p>Failed – The last API operation that you invoked on the flow failed. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html">GetFlow</a> request and check the error message in the <code>validations</code> field.</p>
   *             </li>
   *          </ul>
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
  nextToken?: string;
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
export interface UpdateFlowRequest {
  /**
   * <p>A name for the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>A definition of the nodes and the connections between the nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the flow was encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

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
   * <p>The status of the flow. When you submit this request, the status will be <code>NotPrepared</code>. If updating fails, the status becomes <code>Failed</code>.</p>
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
   * <p>The version of the flow. When you update a flow, the version updated is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and the connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition;
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
  numberOfDocumentsScanned?: number;

  /**
   * <p>The total number of metadata files that were scanned. Includes new, updated, and unchanged files.</p>
   * @public
   */
  numberOfMetadataDocumentsScanned?: number;

  /**
   * <p>The number of new source documents in the data source that were successfully indexed.</p>
   * @public
   */
  numberOfNewDocumentsIndexed?: number;

  /**
   * <p>The number of modified source documents in the data source that were successfully indexed.</p>
   * @public
   */
  numberOfModifiedDocumentsIndexed?: number;

  /**
   * <p>The number of metadata files that were updated or deleted.</p>
   * @public
   */
  numberOfMetadataDocumentsModified?: number;

  /**
   * <p>The number of source documents that were deleted.</p>
   * @public
   */
  numberOfDocumentsDeleted?: number;

  /**
   * <p>The number of source documents that failed to be ingested.</p>
   * @public
   */
  numberOfDocumentsFailed?: number;
}

/**
 * @public
 * @enum
 */
export const IngestionJobStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * <p>Contains details about a data ingestion job. Data sources are ingested into a knowledge base so that Large Language Models (LLMs) can use your data.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html#API_agent_StartIngestionJob_ResponseSyntax">StartIngestionJob response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html#API_agent_GetIngestionJob_ResponseSyntax">GetIngestionJob response</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html#API_agent_ListIngestionJobs_ResponseSyntax">ListIngestionJob response</a>
 *                </p>
 *             </li>
 *          </ul>
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
  description?: string;

  /**
   * <p>The status of the data ingestion job.</p>
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * <p>Contains statistics about the data ingestion job.</p>
   * @public
   */
  statistics?: IngestionJobStatistics;

  /**
   * <p>A list of reasons that the data ingestion job failed.</p>
   * @public
   */
  failureReasons?: string[];

  /**
   * <p>The time the data ingestion job started.</p>
   *          <p>If you stop a data ingestion job, the <code>startedAt</code> time is the time the job was started before the job was stopped.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time the data ingestion job was last updated.</p>
   *          <p>If you stop a data ingestion job, the <code>updatedAt</code> time is the time the job was stopped.</p>
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
 * @public
 * @enum
 */
export const IngestionJobFilterAttribute = {
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type IngestionJobFilterAttribute =
  (typeof IngestionJobFilterAttribute)[keyof typeof IngestionJobFilterAttribute];

/**
 * @public
 * @enum
 */
export const IngestionJobFilterOperator = {
  EQ: "EQ",
} as const;

/**
 * @public
 */
export type IngestionJobFilterOperator = (typeof IngestionJobFilterOperator)[keyof typeof IngestionJobFilterOperator];

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
 * @public
 * @enum
 */
export const IngestionJobSortByAttribute = {
  STARTED_AT: "STARTED_AT",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type IngestionJobSortByAttribute =
  (typeof IngestionJobSortByAttribute)[keyof typeof IngestionJobSortByAttribute];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

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
  filters?: IngestionJobFilter[];

  /**
   * <p>Contains details about how to sort the data.</p>
   * @public
   */
  sortBy?: IngestionJobSortBy;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
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
  description?: string;

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
  statistics?: IngestionJobStatistics;
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
  nextToken?: string;
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A description of the data ingestion job.</p>
   * @public
   */
  description?: string;
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
  knowledgeBaseState?: KnowledgeBaseState;
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
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  VECTOR: "VECTOR",
} as const;

/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * <p>The vector configuration details for the Bedrock embeddings model.</p>
 * @public
 */
export interface BedrockEmbeddingModelConfiguration {
  /**
   * <p>The dimensions details for the vector configuration used on the Bedrock embeddings model.</p>
   * @public
   */
  dimensions?: number;
}

/**
 * <p>The configuration details for the embeddings model.</p>
 * @public
 */
export interface EmbeddingModelConfiguration {
  /**
   * <p>The vector configuration details on the Bedrock embeddings model.</p>
   * @public
   */
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
}

/**
 * <p>Contains details about the model used to create vector embeddings for the knowledge base.</p>
 * @public
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.</p>
   * @public
   */
  embeddingModelArn: string | undefined;

  /**
   * <p>The embeddings model configuration details for the vector model used in Knowledge Base.</p>
   * @public
   */
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
}

/**
 * <p>Contains details about the vector embeddings configuration of the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The type of data that the data source is converted into for the knowledge base.</p>
   * @public
   */
  type: KnowledgeBaseType | undefined;

  /**
   * <p>Contains details about the model that's used to convert the data source into vector embeddings.</p>
   * @public
   */
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface MongoDbAtlasFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in MongoDB Atlas. </p>
 * @public
 */
export interface MongoDbAtlasConfiguration {
  /**
   * <p>The endpoint URL of your MongoDB Atlas cluster for your knowledge base.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The database name in your MongoDB Atlas cluster for your knowledge base.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The collection name of the knowledge base in MongoDB Atlas.</p>
   * @public
   */
  collectionName: string | undefined;

  /**
   * <p>The name of the MongoDB Atlas vector search index.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that contains user credentials for your MongoDB Atlas cluster.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: MongoDbAtlasFieldMapping | undefined;

  /**
   * <p>The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.</p>
   * @public
   */
  endpointServiceName?: string;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface OpenSearchServerlessFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html">Create a vector index in Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface OpenSearchServerlessConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpenSearch Service vector store.</p>
   * @public
   */
  collectionArn: string | undefined;

  /**
   * <p>The name of the vector store.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: OpenSearchServerlessFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface PineconeFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Pinecone. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html">Create a vector index in Pinecone</a>.</p>
 * @public
 */
export interface PineconeConfiguration {
  /**
   * <p>The endpoint URL for your index management page.</p>
   * @public
   */
  connectionString: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Pinecone API key.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>The namespace to be used to write new data to your database.</p>
   * @public
   */
  namespace?: string;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: PineconeFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface RdsFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the ID for each entry.</p>
   * @public
   */
  primaryKeyField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html">Create a vector index in Amazon RDS</a>.</p>
 * @public
 */
export interface RdsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the vector store.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Amazon RDS database.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>The name of your Amazon RDS database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the table in the database.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: RdsFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface RedisEnterpriseCloudFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Redis Enterprise Cloud. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html">Create a vector index in Redis Enterprise Cloud</a>.</p>
 * @public
 */
export interface RedisEnterpriseCloudConfiguration {
  /**
   * <p>The endpoint URL of the Redis Enterprise Cloud database.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Redis Enterprise Cloud database.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: RedisEnterpriseCloudFieldMapping | undefined;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStorageType = {
  MONGO_DB_ATLAS: "MONGO_DB_ATLAS",
  OPENSEARCH_SERVERLESS: "OPENSEARCH_SERVERLESS",
  PINECONE: "PINECONE",
  RDS: "RDS",
  REDIS_ENTERPRISE_CLOUD: "REDIS_ENTERPRISE_CLOUD",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStorageType = (typeof KnowledgeBaseStorageType)[keyof typeof KnowledgeBaseStorageType];

/**
 * <p>Contains the storage configuration of the knowledge base.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>The vector store service in which the knowledge base is stored.</p>
   * @public
   */
  type: KnowledgeBaseStorageType | undefined;

  /**
   * <p>Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.</p>
   * @public
   */
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;

  /**
   * <p>Contains the storage configuration of the knowledge base in Pinecone.</p>
   * @public
   */
  pineconeConfiguration?: PineconeConfiguration;

  /**
   * <p>Contains the storage configuration of the knowledge base in Redis Enterprise Cloud.</p>
   * @public
   */
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;

  /**
   * <p>Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html">Create a vector index in Amazon RDS</a>.</p>
   * @public
   */
  rdsConfiguration?: RdsConfiguration;

  /**
   * <p>Contains the storage configuration of the knowledge base in MongoDB Atlas.</p>
   * @public
   */
  mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A name for the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the knowledge base.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Contains details about the embeddings model used for the knowledge base.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the vector database used for the knowledge base.</p>
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * <p>Specify the key-value pairs for the tags that you want to attach to your knowledge base in this object.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETE_UNSUCCESSFUL: "DELETE_UNSUCCESSFUL",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * <p>Contains information about a knowledge base.</p>
 * @public
 */
export interface KnowledgeBase {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Contains details about the embeddings configuration of the knowledge base.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Contains details about the storage configuration of the knowledge base.</p>
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * <p>The status of the knowledge base. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The knowledge base is being created.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The knowledge base is ready to be queried.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The knowledge base is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The knowledge base is being updated.</p>
   *             </li>
   *             <li>
   *                <p>FAILED – The knowledge base API operation failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>The time the knowledge base was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A list of reasons that the API operation on the knowledge base failed.</p>
   * @public
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base to delete.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * <p>The unique identifier of the knowledge base that was deleted.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The status of the knowledge base and whether it has been successfully deleted.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent from which to disassociate the knowledge base.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent from which to disassociate the knowledge base.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to disassociate.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentKnowledgeBaseResponse {}

/**
 * @public
 */
export interface GetAgentKnowledgeBaseRequest {
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
   * <p>The unique identifier of the knowledge base associated with the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about a knowledge base attached to an agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base you want to get information on.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * <p>The unique identifier of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * <p>A list of objects, each of which contains information about a knowledge base associated with the agent.</p>
   * @public
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains details about a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>The time the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>A list of knowledge bases with information about each knowledge base.</p>
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base that has been associated with an agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base associated with an agent.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Specifies whether the agent uses the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base that has been associated with an agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base to update.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new name for the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * <p>Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export interface PromptMetadataEntry {
  /**
   * <p>The key of a metadata tag for a prompt variant.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a metadata tag for a prompt variant.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains details about a variant of the prompt.</p>
 * @public
 */
export interface PromptVariant {
  /**
   * <p>The name of the prompt variant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of prompt template to use.</p>
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * <p>Contains configurations for the prompt template.</p>
   * @public
   */
  templateConfiguration?: PromptTemplateConfiguration;

  /**
   * <p>The unique identifier of the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> with which to run inference on the prompt.</p>
   * @public
   */
  modelId?: string;

  /**
   * <p>Contains inference configurations for the prompt variant.</p>
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration;

  /**
   * <p>An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
   * @public
   */
  metadata?: PromptMetadataEntry[];
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Any tags that you want to attach to the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that you encrypted the prompt with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for your prompt.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you create a prompt, the version created is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionRequest {
  /**
   * <p>The unique identifier of the prompt that you want to create a version of.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>A description for the version of the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Any tags that you want to attach to the version of the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePromptVersionResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the version.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the version of the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that was created. Versions are numbered incrementally, starting from 1.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt to delete. To delete the prompt, omit this field.</p>
   * @public
   */
  promptVersion?: string;
}

/**
 * @public
 */
export interface DeletePromptResponse {
  /**
   * <p>The unique identifier of the prompt that was deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the prompt that was deleted.</p>
   * @public
   */
  version?: string;
}

/**
 * @public
 */
export interface GetPromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt about which you want to retrieve information. Omit this field to return information about the working draft of the prompt.</p>
   * @public
   */
  promptVersion?: string;
}

/**
 * @public
 */
export interface GetPromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descriptino of the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.</p>
   * @public
   */
  promptIdentifier?: string;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains information about a prompt in your Prompt management tool.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html#API_agent_ListPrompts_ResponseSyntax">ListPrompts response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that this summary applies to.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>A list, each member of which contains information about a prompt using Prompt management.</p>
   * @public
   */
  promptSummaries: PromptSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[];

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you update a prompt, the version updated is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pairs for the tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An object containing key-value pairs that define the tags to attach to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface DeleteAgentVersionRequest {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent to delete.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteAgentVersionResponse {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version that was deleted.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The status of the agent version.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionRequest {
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
}

/**
 * @public
 */
export interface GetAgentVersionResponse {
  /**
   * <p>Contains details about the version of the agent.</p>
   * @public
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAgentVersionsResponse {
  /**
   * <p>A list of objects, each of which contains information about a version of the agent.</p>
   * @public
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

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
export const CreateAgentActionGroupRequestFilterSensitiveLog = (obj: CreateAgentActionGroupRequest): any => ({
  ...obj,
  ...(obj.actionGroupExecutor && { actionGroupExecutor: obj.actionGroupExecutor }),
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
  ...(obj.functionSchema && { functionSchema: obj.functionSchema }),
});

/**
 * @internal
 */
export const AgentActionGroupFilterSensitiveLog = (obj: AgentActionGroup): any => ({
  ...obj,
  ...(obj.actionGroupExecutor && { actionGroupExecutor: obj.actionGroupExecutor }),
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
  ...(obj.functionSchema && { functionSchema: obj.functionSchema }),
});

/**
 * @internal
 */
export const CreateAgentActionGroupResponseFilterSensitiveLog = (obj: CreateAgentActionGroupResponse): any => ({
  ...obj,
  ...(obj.agentActionGroup && { agentActionGroup: AgentActionGroupFilterSensitiveLog(obj.agentActionGroup) }),
});

/**
 * @internal
 */
export const GetAgentActionGroupResponseFilterSensitiveLog = (obj: GetAgentActionGroupResponse): any => ({
  ...obj,
  ...(obj.agentActionGroup && { agentActionGroup: AgentActionGroupFilterSensitiveLog(obj.agentActionGroup) }),
});

/**
 * @internal
 */
export const UpdateAgentActionGroupRequestFilterSensitiveLog = (obj: UpdateAgentActionGroupRequest): any => ({
  ...obj,
  ...(obj.actionGroupExecutor && { actionGroupExecutor: obj.actionGroupExecutor }),
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
  ...(obj.functionSchema && { functionSchema: obj.functionSchema }),
});

/**
 * @internal
 */
export const UpdateAgentActionGroupResponseFilterSensitiveLog = (obj: UpdateAgentActionGroupResponse): any => ({
  ...obj,
  ...(obj.agentActionGroup && { agentActionGroup: AgentActionGroupFilterSensitiveLog(obj.agentActionGroup) }),
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
export const AgentFilterSensitiveLog = (obj: Agent): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAgentRequestFilterSensitiveLog = (obj: CreateAgentRequest): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAgentResponseFilterSensitiveLog = (obj: CreateAgentResponse): any => ({
  ...obj,
  ...(obj.agent && { agent: AgentFilterSensitiveLog(obj.agent) }),
});

/**
 * @internal
 */
export const GetAgentResponseFilterSensitiveLog = (obj: GetAgentResponse): any => ({
  ...obj,
  ...(obj.agent && { agent: AgentFilterSensitiveLog(obj.agent) }),
});

/**
 * @internal
 */
export const UpdateAgentRequestFilterSensitiveLog = (obj: UpdateAgentRequest): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAgentResponseFilterSensitiveLog = (obj: UpdateAgentResponse): any => ({
  ...obj,
  ...(obj.agent && { agent: AgentFilterSensitiveLog(obj.agent) }),
});

/**
 * @internal
 */
export const AgentVersionFilterSensitiveLog = (obj: AgentVersion): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PatternObjectFilterFilterSensitiveLog = (obj: PatternObjectFilter): any => ({
  ...obj,
  ...(obj.objectType && { objectType: SENSITIVE_STRING }),
  ...(obj.inclusionFilters && { inclusionFilters: SENSITIVE_STRING }),
  ...(obj.exclusionFilters && { exclusionFilters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PatternObjectFilterConfigurationFilterSensitiveLog = (obj: PatternObjectFilterConfiguration): any => ({
  ...obj,
  ...(obj.filters && { filters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CrawlFilterConfigurationFilterSensitiveLog = (obj: CrawlFilterConfiguration): any => ({
  ...obj,
  ...(obj.patternObjectFilter && {
    patternObjectFilter: PatternObjectFilterConfigurationFilterSensitiveLog(obj.patternObjectFilter),
  }),
});

/**
 * @internal
 */
export const ConfluenceCrawlerConfigurationFilterSensitiveLog = (obj: ConfluenceCrawlerConfiguration): any => ({
  ...obj,
  ...(obj.filterConfiguration && {
    filterConfiguration: CrawlFilterConfigurationFilterSensitiveLog(obj.filterConfiguration),
  }),
});

/**
 * @internal
 */
export const ConfluenceDataSourceConfigurationFilterSensitiveLog = (obj: ConfluenceDataSourceConfiguration): any => ({
  ...obj,
  ...(obj.crawlerConfiguration && {
    crawlerConfiguration: ConfluenceCrawlerConfigurationFilterSensitiveLog(obj.crawlerConfiguration),
  }),
});

/**
 * @internal
 */
export const S3DataSourceConfigurationFilterSensitiveLog = (obj: S3DataSourceConfiguration): any => ({
  ...obj,
  ...(obj.inclusionPrefixes && { inclusionPrefixes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SalesforceCrawlerConfigurationFilterSensitiveLog = (obj: SalesforceCrawlerConfiguration): any => ({
  ...obj,
  ...(obj.filterConfiguration && {
    filterConfiguration: CrawlFilterConfigurationFilterSensitiveLog(obj.filterConfiguration),
  }),
});

/**
 * @internal
 */
export const SalesforceDataSourceConfigurationFilterSensitiveLog = (obj: SalesforceDataSourceConfiguration): any => ({
  ...obj,
  ...(obj.crawlerConfiguration && {
    crawlerConfiguration: SalesforceCrawlerConfigurationFilterSensitiveLog(obj.crawlerConfiguration),
  }),
});

/**
 * @internal
 */
export const SharePointCrawlerConfigurationFilterSensitiveLog = (obj: SharePointCrawlerConfiguration): any => ({
  ...obj,
  ...(obj.filterConfiguration && {
    filterConfiguration: CrawlFilterConfigurationFilterSensitiveLog(obj.filterConfiguration),
  }),
});

/**
 * @internal
 */
export const SharePointDataSourceConfigurationFilterSensitiveLog = (obj: SharePointDataSourceConfiguration): any => ({
  ...obj,
  ...(obj.crawlerConfiguration && {
    crawlerConfiguration: SharePointCrawlerConfigurationFilterSensitiveLog(obj.crawlerConfiguration),
  }),
});

/**
 * @internal
 */
export const WebCrawlerConfigurationFilterSensitiveLog = (obj: WebCrawlerConfiguration): any => ({
  ...obj,
  ...(obj.inclusionFilters && { inclusionFilters: SENSITIVE_STRING }),
  ...(obj.exclusionFilters && { exclusionFilters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WebDataSourceConfigurationFilterSensitiveLog = (obj: WebDataSourceConfiguration): any => ({
  ...obj,
  ...(obj.crawlerConfiguration && {
    crawlerConfiguration: WebCrawlerConfigurationFilterSensitiveLog(obj.crawlerConfiguration),
  }),
});

/**
 * @internal
 */
export const DataSourceConfigurationFilterSensitiveLog = (obj: DataSourceConfiguration): any => ({
  ...obj,
  ...(obj.s3Configuration && { s3Configuration: S3DataSourceConfigurationFilterSensitiveLog(obj.s3Configuration) }),
  ...(obj.webConfiguration && { webConfiguration: WebDataSourceConfigurationFilterSensitiveLog(obj.webConfiguration) }),
  ...(obj.confluenceConfiguration && {
    confluenceConfiguration: ConfluenceDataSourceConfigurationFilterSensitiveLog(obj.confluenceConfiguration),
  }),
  ...(obj.salesforceConfiguration && {
    salesforceConfiguration: SalesforceDataSourceConfigurationFilterSensitiveLog(obj.salesforceConfiguration),
  }),
  ...(obj.sharePointConfiguration && {
    sharePointConfiguration: SharePointDataSourceConfigurationFilterSensitiveLog(obj.sharePointConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.dataSourceConfiguration && {
    dataSourceConfiguration: DataSourceConfigurationFilterSensitiveLog(obj.dataSourceConfiguration),
  }),
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
  ...(obj.dataSourceConfiguration && {
    dataSourceConfiguration: DataSourceConfigurationFilterSensitiveLog(obj.dataSourceConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateDataSourceResponseFilterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
  ...obj,
  ...(obj.dataSource && { dataSource: DataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const GetDataSourceResponseFilterSensitiveLog = (obj: GetDataSourceResponse): any => ({
  ...obj,
  ...(obj.dataSource && { dataSource: DataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const UpdateDataSourceRequestFilterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
  ...obj,
  ...(obj.dataSourceConfiguration && {
    dataSourceConfiguration: DataSourceConfigurationFilterSensitiveLog(obj.dataSourceConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateDataSourceResponseFilterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
  ...obj,
  ...(obj.dataSource && { dataSource: DataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const FlowConditionFilterSensitiveLog = (obj: FlowCondition): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConditionFlowNodeConfigurationFilterSensitiveLog = (obj: ConditionFlowNodeConfiguration): any => ({
  ...obj,
  ...(obj.conditions && { conditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextPromptTemplateConfigurationFilterSensitiveLog = (obj: TextPromptTemplateConfiguration): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.inputVariables && { inputVariables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptTemplateConfigurationFilterSensitiveLog = (obj: PromptTemplateConfiguration): any => {
  if (obj.text !== undefined) return { text: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PromptFlowNodeInlineConfigurationFilterSensitiveLog = (obj: PromptFlowNodeInlineConfiguration): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: PromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
  ...(obj.inferenceConfiguration && { inferenceConfiguration: obj.inferenceConfiguration }),
});

/**
 * @internal
 */
export const PromptFlowNodeSourceConfigurationFilterSensitiveLog = (obj: PromptFlowNodeSourceConfiguration): any => {
  if (obj.resource !== undefined) return { resource: obj.resource };
  if (obj.inline !== undefined) return { inline: PromptFlowNodeInlineConfigurationFilterSensitiveLog(obj.inline) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PromptFlowNodeConfigurationFilterSensitiveLog = (obj: PromptFlowNodeConfiguration): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: PromptFlowNodeSourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const FlowNodeConfigurationFilterSensitiveLog = (obj: FlowNodeConfiguration): any => {
  if (obj.input !== undefined) return { input: obj.input };
  if (obj.output !== undefined) return { output: obj.output };
  if (obj.knowledgeBase !== undefined) return { knowledgeBase: obj.knowledgeBase };
  if (obj.condition !== undefined)
    return { condition: ConditionFlowNodeConfigurationFilterSensitiveLog(obj.condition) };
  if (obj.lex !== undefined) return { lex: obj.lex };
  if (obj.prompt !== undefined) return { prompt: PromptFlowNodeConfigurationFilterSensitiveLog(obj.prompt) };
  if (obj.lambdaFunction !== undefined) return { lambdaFunction: obj.lambdaFunction };
  if (obj.storage !== undefined) return { storage: obj.storage };
  if (obj.agent !== undefined) return { agent: obj.agent };
  if (obj.retrieval !== undefined) return { retrieval: obj.retrieval };
  if (obj.iterator !== undefined) return { iterator: obj.iterator };
  if (obj.collector !== undefined) return { collector: obj.collector };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowNodeInputFilterSensitiveLog = (obj: FlowNodeInput): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowNodeFilterSensitiveLog = (obj: FlowNode): any => ({
  ...obj,
  ...(obj.configuration && { configuration: FlowNodeConfigurationFilterSensitiveLog(obj.configuration) }),
  ...(obj.inputs && { inputs: obj.inputs.map((item) => FlowNodeInputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FlowDefinitionFilterSensitiveLog = (obj: FlowDefinition): any => ({
  ...obj,
  ...(obj.nodes && { nodes: SENSITIVE_STRING }),
  ...(obj.connections && { connections: obj.connections.map((item) => item) }),
});

/**
 * @internal
 */
export const CreateFlowRequestFilterSensitiveLog = (obj: CreateFlowRequest): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const CreateFlowResponseFilterSensitiveLog = (obj: CreateFlowResponse): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const CreateFlowVersionResponseFilterSensitiveLog = (obj: CreateFlowVersionResponse): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const GetFlowVersionResponseFilterSensitiveLog = (obj: GetFlowVersionResponse): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const GetFlowResponseFilterSensitiveLog = (obj: GetFlowResponse): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const UpdateFlowRequestFilterSensitiveLog = (obj: UpdateFlowRequest): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const UpdateFlowResponseFilterSensitiveLog = (obj: UpdateFlowResponse): any => ({
  ...obj,
  ...(obj.definition && { definition: FlowDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const PromptMetadataEntryFilterSensitiveLog = (obj: PromptMetadataEntry): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptVariantFilterSensitiveLog = (obj: PromptVariant): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: PromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
  ...(obj.inferenceConfiguration && { inferenceConfiguration: obj.inferenceConfiguration }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptRequestFilterSensitiveLog = (obj: CreatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptResponseFilterSensitiveLog = (obj: CreatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptVersionResponseFilterSensitiveLog = (obj: CreatePromptVersionResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPromptResponseFilterSensitiveLog = (obj: GetPromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptRequestFilterSensitiveLog = (obj: UpdatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptResponseFilterSensitiveLog = (obj: UpdatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAgentVersionResponseFilterSensitiveLog = (obj: GetAgentVersionResponse): any => ({
  ...obj,
  ...(obj.agentVersion && { agentVersion: AgentVersionFilterSensitiveLog(obj.agentVersion) }),
});
