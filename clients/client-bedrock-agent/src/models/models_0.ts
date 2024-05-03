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
 * <p>Contains information about the S3 object containing the resource.</p>
 * @public
 */
export interface S3Identifier {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  s3BucketName?: string;

  /**
   * <p>The S3 object key containing the resource.</p>
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
   * <p>Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>.</p>
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
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the <code>promptConfigurations</code> must contain a <code>parserMode</code> value that is set to <code>OVERRIDDEN</code>.</p>
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
   * <p>The foundation model to be used for orchestration by the agent you create.</p>
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
 * <p>Contains information about the S3 configuration of the data source.</p>
 * @public
 */
export interface S3DataSourceConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the bucket that contains the data source.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>A list of S3 prefixes that define the object containing the data sources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a>.</p>
   * @public
   */
  inclusionPrefixes?: string[];

  /**
   * <p>The bucket account owner ID for the S3 bucket.</p>
   * @public
   */
  bucketOwnerAccountId?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * <p>Contains details about how a data source is stored.</p>
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * <p>The type of storage for the data source.</p>
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * <p>Contains details about the configuration of the S3 object containing the data source.</p>
   * @public
   */
  s3Configuration?: S3DataSourceConfiguration;
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
  NONE: "NONE",
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
   * <p>Contains metadata about where the data source is stored.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy assigned to the data source.</p>
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
   * <p>Contains details about how the data source is stored.</p>
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
   * <p>The data deletion policy for a data source.</p>
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
   * <p>The unique identifier of the knowledge base that the data source was added to.</p>
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
   * <p>Contains details about the storage configuration of the data source.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy of the updated data source.</p>
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
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * <p>The unique identifier of the knowledge base for which the ingestion job applies.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source in the ingestion job.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the ingestion job.</p>
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * <p>Contains the statistics for the ingestion job.</p>
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
   * <p>The number of source documents that was deleted.</p>
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
} as const;

/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * <p>Contains details about an ingestion job, which converts a data source to embeddings for a vector store in knowledge base.</p>
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
   * <p>The unique identifier of the knowledge base to which the data source is being added.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the ingested data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the ingestion job.</p>
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * <p>The description of the ingestion job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the ingestion job.</p>
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * <p>Contains statistics about the ingestion job.</p>
   * @public
   */
  statistics?: IngestionJobStatistics;

  /**
   * <p>A list of reasons that the ingestion job failed.</p>
   * @public
   */
  failureReasons?: string[];

  /**
   * <p>The time at which the ingestion job started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time at which the ingestion job was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * <p>Contains details about the ingestion job.</p>
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
 * <p>Defines a filter by which to filter the results.</p>
 * @public
 */
export interface IngestionJobFilter {
  /**
   * <p>The attribute by which to filter the results.</p>
   * @public
   */
  attribute: IngestionJobFilterAttribute | undefined;

  /**
   * <p>The operation to carry out between the attribute and the values.</p>
   * @public
   */
  operator: IngestionJobFilterOperator | undefined;

  /**
   * <p>A list of values for the attribute.</p>
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
 * <p>Parameters by which to sort the results.</p>
 * @public
 */
export interface IngestionJobSortBy {
  /**
   * <p>The attribute by which to sort the results.</p>
   * @public
   */
  attribute: IngestionJobSortByAttribute | undefined;

  /**
   * <p>The order by which to sort the results.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * <p>The unique identifier of the knowledge base for which to return ingestion jobs.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for which to return ingestion jobs.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>Contains a definition of a filter for which to filter the results.</p>
   * @public
   */
  filters?: IngestionJobFilter[];

  /**
   * <p>Contains details about how to sort the results.</p>
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
 * <p>Contains details about an ingestion job.</p>
 * @public
 */
export interface IngestionJobSummary {
  /**
   * <p>The unique identifier of the knowledge base to which the data source is added.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source in the ingestion job.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the ingestion job.</p>
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * <p>The description of the ingestion job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the ingestion job.</p>
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * <p>The time at which the ingestion job was started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time at which the ingestion job was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Contains statistics for the ingestion job.</p>
   * @public
   */
  statistics?: IngestionJobStatistics;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * <p>A list of objects, each of which contains information about an ingestion job.</p>
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
   * <p>The unique identifier of the knowledge base to which to add the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source to ingest.</p>
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
   * <p>A description of the ingestion job.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface StartIngestionJobResponse {
  /**
   * <p>An object containing information about the ingestion job.</p>
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
 * <p>Contains details about the model used to create vector embeddings for the knowledge base.</p>
 * @public
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.</p>
   * @public
   */
  embeddingModelArn: string | undefined;
}

/**
 * <p>Contains details about the embeddings configuration of the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The type of data that the data source is converted into for the knowledge base.</p>
   * @public
   */
  type: KnowledgeBaseType | undefined;

  /**
   * <p>Contains details about the embeddings model that'sused to convert the data source.</p>
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
   * <p>The time at which the knowledge base was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the knowledge base was last updated.</p>
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
   * <p>The unique identifier of the knowledge base for which to get information.</p>
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
   * <p>The time at which the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>A list of objects, each of which contains information about a knowledge base.</p>
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
export const PromptOverrideConfigurationFilterSensitiveLog = (obj: PromptOverrideConfiguration): any => ({
  ...obj,
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
export const GetAgentVersionResponseFilterSensitiveLog = (obj: GetAgentVersionResponse): any => ({
  ...obj,
  ...(obj.agentVersion && { agentVersion: AgentVersionFilterSensitiveLog(obj.agentVersion) }),
});
