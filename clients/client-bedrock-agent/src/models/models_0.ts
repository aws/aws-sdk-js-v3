// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentServiceException as __BaseException } from "./BedrockAgentServiceException";

/**
 * @public
 * This exception is thrown when a request is denied per access permissions
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
 * Type of Executors for an Action Group
 */
export type ActionGroupExecutor = ActionGroupExecutor.LambdaMember | ActionGroupExecutor.$UnknownMember;

/**
 * @public
 */
export namespace ActionGroupExecutor {
  /**
   * @public
   * ARN of a Lambda.
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

  export const visit = <T>(value: ActionGroupExecutor, visitor: Visitor<T>): T => {
    if (value.lambda !== undefined) return visitor.lambda(value.lambda);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * This exception is thrown when there is a conflict performing an operation
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
 * @public
 * The identifier for the S3 resource.
 */
export interface S3Identifier {
  /**
   * @public
   * A bucket in S3.
   */
  s3BucketName?: string;

  /**
   * @public
   * A object key in S3.
   */
  s3ObjectKey?: string;
}

/**
 * @public
 * Contains information about the API Schema for the Action Group
 */
export type APISchema = APISchema.PayloadMember | APISchema.S3Member | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * @public
   * The identifier for the S3 resource.
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * @public
   * String OpenAPI Payload
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
export const ActionGroupSignature = {
  AMAZON_USERINPUT: "AMAZON.UserInput",
} as const;

/**
 * @public
 */
export type ActionGroupSignature = (typeof ActionGroupSignature)[keyof typeof ActionGroupSignature];

/**
 * @public
 * Create Action Group Request
 */
export interface CreateAgentActionGroupRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  actionGroupName: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Action Group Signature for a BuiltIn Action
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * @public
   * Type of Executors for an Action Group
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * @public
   * Contains information about the API Schema for the Action Group
   */
  apiSchema?: APISchema;

  /**
   * @public
   * State of the action group
   */
  actionGroupState?: ActionGroupState;
}

/**
 * @public
 * Contains the information of an Agent Action Group
 */
export interface AgentActionGroup {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  actionGroupId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  actionGroupName: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Action Group Signature for a BuiltIn Action
   */
  parentActionSignature?: ActionGroupSignature;

  /**
   * @public
   * Type of Executors for an Action Group
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * @public
   * Contains information about the API Schema for the Action Group
   */
  apiSchema?: APISchema;

  /**
   * @public
   * State of the action group
   */
  actionGroupState: ActionGroupState | undefined;
}

/**
 * @public
 * Create Action Group Response
 */
export interface CreateAgentActionGroupResponse {
  /**
   * @public
   * Contains the information of an Agent Action Group
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * @public
 * This exception is thrown if there was an unexpected error during processing of request
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
 * @public
 * This exception is thrown when a resource referenced by the operation does not exist
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
 * @public
 * This exception is thrown when a request is made beyond the service quota
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
 * @public
 * This exception is thrown when the number of requests exceeds the limit
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
 * @public
 * Stores information about a field passed inside a request that resulted in an exception
 */
export interface ValidationExceptionField {
  /**
   * @public
   * Non Blank String
   */
  name: string | undefined;

  /**
   * @public
   * Non Blank String
   */
  message: string | undefined;
}

/**
 * @public
 * This exception is thrown when the request's input validation fails
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * list of ValidationExceptionField
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
 * Delete Action Group Request
 */
export interface DeleteAgentActionGroupRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent ActionGroup is created
   */
  actionGroupId: string | undefined;

  /**
   * @public
   * Skips checking if resource is in use when set to true. Defaults to false
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 * Delete Action Group Response
 */
export interface DeleteAgentActionGroupResponse {}

/**
 * @public
 * Get Action Group Request
 */
export interface GetAgentActionGroupRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Version number generated when a version is created
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent Action Group is created
   */
  actionGroupId: string | undefined;
}

/**
 * @public
 * Get Action Group Response
 */
export interface GetAgentActionGroupResponse {
  /**
   * @public
   * Contains the information of an Agent Action Group
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * @public
 * List Action Groups Request
 */
export interface ListAgentActionGroupsRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is Listed
   */
  agentId: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent is Listed
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * ActionGroup Summary
 */
export interface ActionGroupSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  actionGroupId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  actionGroupName: string | undefined;

  /**
   * @public
   * State of the action group
   */
  actionGroupState: ActionGroupState | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * List Action Groups Response
 */
export interface ListAgentActionGroupsResponse {
  /**
   * @public
   * List of ActionGroup Summaries
   */
  actionGroupSummaries: ActionGroupSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Update Action Group Request
 */
export interface UpdateAgentActionGroupRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Action Group is created under Agent
   */
  actionGroupId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  actionGroupName: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Action Group Signature for a BuiltIn Action
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * @public
   * Type of Executors for an Action Group
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * @public
   * State of the action group
   */
  actionGroupState?: ActionGroupState;

  /**
   * @public
   * Contains information about the API Schema for the Action Group
   */
  apiSchema?: APISchema;
}

/**
 * @public
 * Update Action Group Response
 */
export interface UpdateAgentActionGroupResponse {
  /**
   * @public
   * Contains the information of an Agent Action Group
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
 * @public
 * Configuration for inference in prompt configuration
 */
export interface InferenceConfiguration {
  /**
   * @public
   * Controls randomness, higher values increase diversity
   */
  temperature?: number;

  /**
   * @public
   * Cumulative probability cutoff for token selection
   */
  topP?: number;

  /**
   * @public
   * Sample from the k most likely next tokens
   */
  topK?: number;

  /**
   * @public
   * Maximum length of output
   */
  maximumLength?: number;

  /**
   * @public
   * List of stop sequences
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
 * @public
 * BasePromptConfiguration per Prompt Type.
 */
export interface PromptConfiguration {
  /**
   * @public
   * Prompt Type.
   */
  promptType?: PromptType;

  /**
   * @public
   * Creation Mode for Prompt Configuration.
   */
  promptCreationMode?: CreationMode;

  /**
   * @public
   * Prompt State.
   */
  promptState?: PromptState;

  /**
   * @public
   * Base Prompt Template.
   */
  basePromptTemplate?: string;

  /**
   * @public
   * Configuration for inference in prompt configuration
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * @public
   * Creation Mode for Prompt Configuration.
   */
  parserMode?: CreationMode;
}

/**
 * @public
 * Configuration for prompt override.
 */
export interface PromptOverrideConfiguration {
  /**
   * @public
   * List of BasePromptConfiguration
   */
  promptConfigurations: PromptConfiguration[] | undefined;

  /**
   * @public
   * ARN of a Lambda.
   */
  overrideLambda?: string;
}

/**
 * @public
 * Contains the information of an agent
 */
export interface Agent {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Arn representation of the Agent.
   */
  agentArn: string | undefined;

  /**
   * @public
   * Draft Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Instruction for the agent.
   */
  instruction?: string;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;

  /**
   * @public
   * ARN or name of a Bedrock model.
   */
  foundationModel?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Max Session Time.
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * @public
   * ARN of a IAM role.
   */
  agentResourceRoleArn: string | undefined;

  /**
   * @public
   * A KMS key ARN
   */
  customerEncryptionKeyArn?: string;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  preparedAt?: Date;

  /**
   * @public
   * Failure Reasons for Error.
   */
  failureReasons?: string[];

  /**
   * @public
   * The recommended actions users can take to resolve an error in failureReasons.
   */
  recommendedActions?: string[];

  /**
   * @public
   * Configuration for prompt override.
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * @public
 * Details about the routing configuration for an Agent alias.
 */
export interface AgentAliasRoutingConfigurationListItem {
  /**
   * @public
   * Agent Version.
   */
  agentVersion: string | undefined;
}

/**
 * @public
 * History event for an alias for an Agent.
 */
export interface AgentAliasHistoryEvent {
  /**
   * @public
   * Routing configuration for an Agent alias.
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * @public
   * Time Stamp.
   */
  endDate?: Date;

  /**
   * @public
   * Time Stamp.
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
 * @public
 * Contains the information of an agent alias
 */
export interface AgentAlias {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Id for an Agent Alias generated at the server side.
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentAliasName: string | undefined;

  /**
   * @public
   * Arn representation of the Agent Alias.
   */
  agentAliasArn: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Routing configuration for an Agent alias.
   */
  routingConfiguration: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * The list of history events for an alias for an Agent.
   */
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[];

  /**
   * @public
   * The statuses an Agent Alias can be in.
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * @public
 * Summary of an alias for an Agent.
 */
export interface AgentAliasSummary {
  /**
   * @public
   * Id for an Agent Alias generated at the server side.
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentAliasName: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Routing configuration for an Agent alias.
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * @public
   * The statuses an Agent Alias can be in.
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
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
 * @public
 * Contains the information of an Agent Knowledge Base.
 */
export interface AgentKnowledgeBase {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description: string | undefined;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * State of the knowledge base; whether it is enabled or disabled
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;
}

/**
 * @public
 * Agent Knowledge Base Summary
 */
export interface AgentKnowledgeBaseSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * State of the knowledge base; whether it is enabled or disabled
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * Create Agent Request
 */
export interface CreateAgentRequest {
  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Instruction for the agent.
   */
  instruction?: string;

  /**
   * @public
   * ARN or name of a Bedrock model.
   */
  foundationModel?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Max Session Time.
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * ARN of a IAM role.
   */
  agentResourceRoleArn: string | undefined;

  /**
   * @public
   * A KMS key ARN
   */
  customerEncryptionKeyArn?: string;

  /**
   * @public
   * A map of tag keys and values
   */
  tags?: Record<string, string>;

  /**
   * @public
   * Configuration for prompt override.
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * @public
 * Create Agent Response
 */
export interface CreateAgentResponse {
  /**
   * @public
   * Contains the information of an agent
   */
  agent: Agent | undefined;
}

/**
 * @public
 * Delete Agent Request
 */
export interface DeleteAgentRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Skips checking if resource is in use when set to true. Defaults to false
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 * Delete Agent Response
 */
export interface DeleteAgentResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 * Get Agent Request
 */
export interface GetAgentRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;
}

/**
 * @public
 * Get Agent Response
 */
export interface GetAgentResponse {
  /**
   * @public
   * Contains the information of an agent
   */
  agent: Agent | undefined;
}

/**
 * @public
 * List Agent Request
 */
export interface ListAgentsRequest {
  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Summary of Agent.
 */
export interface AgentSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Agent Version.
   */
  latestAgentVersion?: string;
}

/**
 * @public
 * List Agent Response
 */
export interface ListAgentsResponse {
  /**
   * @public
   * List of AgentSummary.
   */
  agentSummaries: AgentSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * PrepareAgent Request
 */
export interface PrepareAgentRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;
}

/**
 * @public
 * PrepareAgent Response
 */
export interface PrepareAgentResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;

  /**
   * @public
   * Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Time Stamp.
   */
  preparedAt: Date | undefined;
}

/**
 * @public
 * Update Agent Request
 */
export interface UpdateAgentRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Instruction for the agent.
   */
  instruction?: string;

  /**
   * @public
   * ARN or name of a Bedrock model.
   */
  foundationModel?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Max Session Time.
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * ARN of a IAM role.
   */
  agentResourceRoleArn: string | undefined;

  /**
   * @public
   * A KMS key ARN
   */
  customerEncryptionKeyArn?: string;

  /**
   * @public
   * Configuration for prompt override.
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * @public
 * Update Agent Response
 */
export interface UpdateAgentResponse {
  /**
   * @public
   * Contains the information of an agent
   */
  agent: Agent | undefined;
}

/**
 * @public
 * Contains the information of an agent version.
 */
export interface AgentVersion {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Arn representation of the Agent.
   */
  agentArn: string | undefined;

  /**
   * @public
   * Numerical Agent Version.
   */
  version: string | undefined;

  /**
   * @public
   * Instruction for the agent.
   */
  instruction?: string;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;

  /**
   * @public
   * ARN or name of a Bedrock model.
   */
  foundationModel?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Max Session Time.
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * @public
   * ARN of a IAM role.
   */
  agentResourceRoleArn: string | undefined;

  /**
   * @public
   * A KMS key ARN
   */
  customerEncryptionKeyArn?: string;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Failure Reasons for Error.
   */
  failureReasons?: string[];

  /**
   * @public
   * The recommended actions users can take to resolve an error in failureReasons.
   */
  recommendedActions?: string[];

  /**
   * @public
   * Configuration for prompt override.
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * @public
 * Summary of agent version.
 */
export interface AgentVersionSummary {
  /**
   * @public
   * Name for a resource.
   */
  agentName: string | undefined;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;

  /**
   * @public
   * Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;
}

/**
 * @public
 * Create Agent Alias Request
 */
export interface CreateAgentAliasRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentAliasName: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Routing configuration for an Agent alias.
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * @public
   * A map of tag keys and values
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * Create Agent Alias Response
 */
export interface CreateAgentAliasResponse {
  /**
   * @public
   * Contains the information of an agent alias
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 * Delete Agent Alias Request
 */
export interface DeleteAgentAliasRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent Alias is created
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 * Delete Agent Alias Response
 */
export interface DeleteAgentAliasResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Id for an Agent Alias generated at the server side.
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * The statuses an Agent Alias can be in.
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * @public
 * Get Agent Alias Request
 */
export interface GetAgentAliasRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent Alias is created
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 * Get Agent Alias Response
 */
export interface GetAgentAliasResponse {
  /**
   * @public
   * Contains the information of an agent alias
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 * List Agent Aliases Request
 */
export interface ListAgentAliasesRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * List Agent Aliases Response
 */
export interface ListAgentAliasesResponse {
  /**
   * @public
   * The list of summaries of all the aliases for an Agent.
   */
  agentAliasSummaries: AgentAliasSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Update Agent Alias Request
 */
export interface UpdateAgentAliasRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Id generated at the server side when an Agent Alias is created
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  agentAliasName: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Routing configuration for an Agent alias.
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
}

/**
 * @public
 * Update Agent Alias Response
 */
export interface UpdateAgentAliasResponse {
  /**
   * @public
   * Contains the information of an agent alias
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 * Configures an S3 data source location.
 */
export interface S3DataSourceConfiguration {
  /**
   * @public
   * A S3 bucket ARN
   */
  bucketArn: string | undefined;

  /**
   * @public
   * A list of S3 prefixes.
   */
  inclusionPrefixes?: string[];
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
 * @public
 * Specifies a raw data source location to ingest.
 */
export interface DataSourceConfiguration {
  /**
   * @public
   * The type of the data source location.
   */
  type: DataSourceType | undefined;

  /**
   * @public
   * Configures an S3 data source location.
   */
  s3Configuration?: S3DataSourceConfiguration;
}

/**
 * @public
 * Server-side encryption configuration.
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * A KMS key ARN
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
 * @public
 * Configures fixed size chunking strategy
 */
export interface FixedSizeChunkingConfiguration {
  /**
   * @public
   * The maximum number of tokens per chunk.
   */
  maxTokens: number | undefined;

  /**
   * @public
   * The overlap percentage between adjacent chunks.
   */
  overlapPercentage: number | undefined;
}

/**
 * @public
 * Configures chunking strategy
 */
export interface ChunkingConfiguration {
  /**
   * @public
   * The type of chunking strategy
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * @public
   * Configures fixed size chunking strategy
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
}

/**
 * @public
 * Configures ingestion for a vector knowledge base
 */
export interface VectorIngestionConfiguration {
  /**
   * @public
   * Configures chunking strategy
   */
  chunkingConfiguration?: ChunkingConfiguration;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Specifies a raw data source location to ingest.
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * @public
   * Server-side encryption configuration.
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * Configures ingestion for a vector knowledge base
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * Contains the information of a data source.
 */
export interface DataSource {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * The status of a data source.
   */
  status: DataSourceStatus | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Specifies a raw data source location to ingest.
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * @public
   * Server-side encryption configuration.
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * Configures ingestion for a vector knowledge base
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * @public
   * Contains the information of a data source.
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * The status of a data source.
   */
  status: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * @public
   * Contains the information of a data source.
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Summary information of a data source.
 */
export interface DataSourceSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * The status of a data source.
   */
  status: DataSourceStatus | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * list of data source summaries
   */
  dataSourceSummaries: DataSourceSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * Specifies a raw data source location to ingest.
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * @public
   * Server-side encryption configuration.
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * Configures ingestion for a vector knowledge base
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * @public
   * Contains the information of a data source.
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  ingestionJobId: string | undefined;
}

/**
 * @public
 * The document level statistics of an ingestion job
 */
export interface IngestionJobStatistics {
  /**
   * @public
   * Number of scanned documents
   */
  numberOfDocumentsScanned?: number;

  /**
   * @public
   * Number of indexed documents
   */
  numberOfNewDocumentsIndexed?: number;

  /**
   * @public
   * Number of modified documents indexed
   */
  numberOfModifiedDocumentsIndexed?: number;

  /**
   * @public
   * Number of deleted documents
   */
  numberOfDocumentsDeleted?: number;

  /**
   * @public
   * Number of failed documents
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
 * @public
 * Contains the information of an ingestion job.
 */
export interface IngestionJob {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  ingestionJobId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * The status of an ingestion job.
   */
  status: IngestionJobStatus | undefined;

  /**
   * @public
   * The document level statistics of an ingestion job
   */
  statistics?: IngestionJobStatistics;

  /**
   * @public
   * Failure Reasons for Error.
   */
  failureReasons?: string[];

  /**
   * @public
   * Time Stamp.
   */
  startedAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * @public
   * Contains the information of an ingestion job.
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
 * @public
 * Filters the response returned by ListIngestionJobs operation.
 */
export interface IngestionJobFilter {
  /**
   * @public
   * The name of the field to filter ingestion jobs.
   */
  attribute: IngestionJobFilterAttribute | undefined;

  /**
   * @public
   * The operator used to filter ingestion jobs.
   */
  operator: IngestionJobFilterOperator | undefined;

  /**
   * @public
   * The list of values used to filter ingestion jobs.
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
 * @public
 * Sorts the response returned by ListIngestionJobs operation.
 */
export interface IngestionJobSortBy {
  /**
   * @public
   * The name of the field to sort ingestion jobs.
   */
  attribute: IngestionJobSortByAttribute | undefined;

  /**
   * @public
   * Order to sort results by.
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * List of IngestionJobFilters
   */
  filters?: IngestionJobFilter[];

  /**
   * @public
   * Sorts the response returned by ListIngestionJobs operation.
   */
  sortBy?: IngestionJobSortBy;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Summary information of an ingestion job.
 */
export interface IngestionJobSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  ingestionJobId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * The status of an ingestion job.
   */
  status: IngestionJobStatus | undefined;

  /**
   * @public
   * Time Stamp.
   */
  startedAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * The document level statistics of an ingestion job
   */
  statistics?: IngestionJobStatistics;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * @public
   * List of IngestionJobSummaries
   */
  ingestionJobSummaries: IngestionJobSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartIngestionJobRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;
}

/**
 * @public
 */
export interface StartIngestionJobResponse {
  /**
   * @public
   * Contains the information of an ingestion job.
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * @public
 * Associate Agent Knowledge Base Request
 */
export interface AssociateAgentKnowledgeBaseRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description: string | undefined;

  /**
   * @public
   * State of the knowledge base; whether it is enabled or disabled
   */
  knowledgeBaseState?: KnowledgeBaseState;
}

/**
 * @public
 * Associate Agent Knowledge Base Response
 */
export interface AssociateAgentKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of an Agent Knowledge Base.
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
 * @public
 * Configurations for a vector knowledge base.
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * @public
   * Arn of a Bedrock model.
   */
  embeddingModelArn: string | undefined;
}

/**
 * @public
 * Configures a bedrock knowledge base.
 */
export interface KnowledgeBaseConfiguration {
  /**
   * @public
   * The type of a knowledge base.
   */
  type: KnowledgeBaseType | undefined;

  /**
   * @public
   * Configurations for a vector knowledge base.
   */
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
}

/**
 * @public
 * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
 */
export interface OpenSearchServerlessFieldMapping {
  /**
   * @public
   * Name of the field
   */
  vectorField: string | undefined;

  /**
   * @public
   * Name of the field
   */
  textField: string | undefined;

  /**
   * @public
   * Name of the field
   */
  metadataField: string | undefined;
}

/**
 * @public
 * Contains the configurations to use OpenSearch Serverless to store knowledge base data.
 */
export interface OpenSearchServerlessConfiguration {
  /**
   * @public
   * Arn of an OpenSearch Serverless collection.
   */
  collectionArn: string | undefined;

  /**
   * @public
   * Arn of an OpenSearch Serverless index.
   */
  vectorIndexName: string | undefined;

  /**
   * @public
   * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
   */
  fieldMapping: OpenSearchServerlessFieldMapping | undefined;
}

/**
 * @public
 * A mapping of Bedrock Knowledge Base fields to Pinecone field names
 */
export interface PineconeFieldMapping {
  /**
   * @public
   * Name of the field
   */
  textField: string | undefined;

  /**
   * @public
   * Name of the field
   */
  metadataField: string | undefined;
}

/**
 * @public
 * Contains the configurations to use Pinecone to store knowledge base data.
 */
export interface PineconeConfiguration {
  /**
   * @public
   * Pinecone connection string
   */
  connectionString: string | undefined;

  /**
   * @public
   * Arn of a SecretsManager Secret.
   */
  credentialsSecretArn: string | undefined;

  /**
   * @public
   * Pinecone namespace
   */
  namespace?: string;

  /**
   * @public
   * A mapping of Bedrock Knowledge Base fields to Pinecone field names
   */
  fieldMapping: PineconeFieldMapping | undefined;
}

/**
 * @public
 * A mapping of Bedrock Knowledge Base fields to RDS column names
 */
export interface RdsFieldMapping {
  /**
   * @public
   * Name of the column
   */
  primaryKeyField: string | undefined;

  /**
   * @public
   * Name of the column
   */
  vectorField: string | undefined;

  /**
   * @public
   * Name of the column
   */
  textField: string | undefined;

  /**
   * @public
   * Name of the column
   */
  metadataField: string | undefined;
}

/**
 * @public
 * Contains the configurations to use RDS to store knowledge base data.
 */
export interface RdsConfiguration {
  /**
   * @public
   * Arn of a RDS Resource.
   */
  resourceArn: string | undefined;

  /**
   * @public
   * Arn of a SecretsManager Secret.
   */
  credentialsSecretArn: string | undefined;

  /**
   * @public
   * Name of the database within RDS
   */
  databaseName: string | undefined;

  /**
   * @public
   * Name of the table within RDS
   */
  tableName: string | undefined;

  /**
   * @public
   * A mapping of Bedrock Knowledge Base fields to RDS column names
   */
  fieldMapping: RdsFieldMapping | undefined;
}

/**
 * @public
 * A mapping of Bedrock Knowledge Base fields to Redis Cloud field names
 */
export interface RedisEnterpriseCloudFieldMapping {
  /**
   * @public
   * Name of the field
   */
  vectorField: string | undefined;

  /**
   * @public
   * Name of the field
   */
  textField: string | undefined;

  /**
   * @public
   * Name of the field
   */
  metadataField: string | undefined;
}

/**
 * @public
 * Contains the configurations to use Redis Enterprise Cloud to store knowledge base data.
 */
export interface RedisEnterpriseCloudConfiguration {
  /**
   * @public
   * Redis enterprise cloud endpoint
   */
  endpoint: string | undefined;

  /**
   * @public
   * Name of a redis enterprise cloud index
   */
  vectorIndexName: string | undefined;

  /**
   * @public
   * Arn of a SecretsManager Secret.
   */
  credentialsSecretArn: string | undefined;

  /**
   * @public
   * A mapping of Bedrock Knowledge Base fields to Redis Cloud field names
   */
  fieldMapping: RedisEnterpriseCloudFieldMapping | undefined;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStorageType = {
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
 * @public
 * Configures the physical storage of ingested data in a knowledge base.
 */
export interface StorageConfiguration {
  /**
   * @public
   * The storage type of a knowledge base.
   */
  type: KnowledgeBaseStorageType | undefined;

  /**
   * @public
   * Contains the configurations to use OpenSearch Serverless to store knowledge base data.
   */
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;

  /**
   * @public
   * Contains the configurations to use Pinecone to store knowledge base data.
   */
  pineconeConfiguration?: PineconeConfiguration;

  /**
   * @public
   * Contains the configurations to use Redis Enterprise Cloud to store knowledge base data.
   */
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;

  /**
   * @public
   * Contains the configurations to use RDS to store knowledge base data.
   */
  rdsConfiguration?: RdsConfiguration;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * @public
   * Client specified token used for idempotency checks
   */
  clientToken?: string;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * ARN of a IAM role.
   */
  roleArn: string | undefined;

  /**
   * @public
   * Configures a bedrock knowledge base.
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * @public
   * Configures the physical storage of ingested data in a knowledge base.
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * @public
   * A map of tag keys and values
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
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * @public
 * Contains the information of a knowledge base.
 */
export interface KnowledgeBase {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * ARN of a KnowledgeBase
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * ARN of a IAM role.
   */
  roleArn: string | undefined;

  /**
   * @public
   * Configures a bedrock knowledge base.
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * @public
   * Configures the physical storage of ingested data in a knowledge base.
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * @public
   * The status of a knowledge base.
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * @public
   * Time Stamp.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * Failure Reasons for Error.
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of a knowledge base.
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * The status of a knowledge base.
   */
  status: KnowledgeBaseStatus | undefined;
}

/**
 * @public
 * Disassociate Agent Knowledge Base Request
 */
export interface DisassociateAgentKnowledgeBaseRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when a Knowledge Base is associated to an Agent
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * Disassociate Agent Knowledge Base Response
 */
export interface DisassociateAgentKnowledgeBaseResponse {}

/**
 * @public
 * Get Agent Knowledge Base Request
 */
export interface GetAgentKnowledgeBaseRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Version number generated when a version is created
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when a Knowledge Base is associated
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * Get Agent Knowledge Base Response
 */
export interface GetAgentKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of an Agent Knowledge Base.
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of a knowledge base.
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 * List Agent Knowledge Bases Request
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Version number generated when a version is created
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * List Agent Knowledge Bases Response
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * @public
   * List of Agent Knowledge Base Summaries
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Summary information of a knowledge base.
 */
export interface KnowledgeBaseSummary {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * The status of a knowledge base.
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * @public
   * Time Stamp.
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * @public
   * List of KnowledgeBaseSummaries
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Update Agent Knowledge Base Request
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Draft Version of the Agent.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Id generated at the server side when a Knowledge Base is associated to an Agent
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * State of the knowledge base; whether it is enabled or disabled
   */
  knowledgeBaseState?: KnowledgeBaseState;
}

/**
 * @public
 * Update Agent Knowledge Base Response
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of an Agent Knowledge Base.
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * @public
   * Identifier for a resource.
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Name for a resource.
   */
  name: string | undefined;

  /**
   * @public
   * Description of the Resource.
   */
  description?: string;

  /**
   * @public
   * ARN of a IAM role.
   */
  roleArn: string | undefined;

  /**
   * @public
   * Configures a bedrock knowledge base.
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * @public
   * Configures the physical storage of ingested data in a knowledge base.
   */
  storageConfiguration: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * @public
   * Contains the information of a knowledge base.
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * A map of tag keys and values
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   */
  resourceArn: string | undefined;

  /**
   * @public
   * A map of tag keys and values
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
   * @public
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   */
  resourceArn: string | undefined;

  /**
   * @public
   * List of Tag Keys
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * Delete Agent Version Request
 */
export interface DeleteAgentVersionRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Numerical Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Skips checking if resource is in use when set to true. Defaults to false
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 * Delete Agent Version Response
 */
export interface DeleteAgentVersionResponse {
  /**
   * @public
   * Identifier for a resource.
   */
  agentId: string | undefined;

  /**
   * @public
   * Numerical Agent Version.
   */
  agentVersion: string | undefined;

  /**
   * @public
   * Schema Type for Action APIs.
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 * Get Agent Version Request
 */
export interface GetAgentVersionRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Numerical Agent Version.
   */
  agentVersion: string | undefined;
}

/**
 * @public
 * Get Agent Version Response
 */
export interface GetAgentVersionResponse {
  /**
   * @public
   * Contains the information of an agent version.
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * @public
 * List Agent Versions Request
 */
export interface ListAgentVersionsRequest {
  /**
   * @public
   * Id generated at the server side when an Agent is created
   */
  agentId: string | undefined;

  /**
   * @public
   * Max Results.
   */
  maxResults?: number;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * List Agent Versions Response
 */
export interface ListAgentVersionsResponse {
  /**
   * @public
   * List of AgentVersionSummary.
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
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
});

/**
 * @internal
 */
export const AgentActionGroupFilterSensitiveLog = (obj: AgentActionGroup): any => ({
  ...obj,
  ...(obj.actionGroupExecutor && { actionGroupExecutor: obj.actionGroupExecutor }),
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
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
