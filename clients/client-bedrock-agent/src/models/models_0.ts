// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentServiceException as __BaseException } from "./BedrockAgentServiceException";

/**
 * This exception is thrown when a request is denied per access permissions
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
 * Type of Executors for an Action Group
 * @public
 */
export type ActionGroupExecutor = ActionGroupExecutor.LambdaMember | ActionGroupExecutor.$UnknownMember;

/**
 * @public
 */
export namespace ActionGroupExecutor {
  /**
   * ARN of a Lambda.
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

  export const visit = <T>(value: ActionGroupExecutor, visitor: Visitor<T>): T => {
    if (value.lambda !== undefined) return visitor.lambda(value.lambda);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * This exception is thrown when there is a conflict performing an operation
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
 * The identifier for the S3 resource.
 * @public
 */
export interface S3Identifier {
  /**
   * A bucket in S3.
   * @public
   */
  s3BucketName?: string;

  /**
   * A object key in S3.
   * @public
   */
  s3ObjectKey?: string;
}

/**
 * Contains information about the API Schema for the Action Group
 * @public
 */
export type APISchema = APISchema.PayloadMember | APISchema.S3Member | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * The identifier for the S3 resource.
   * @public
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * String OpenAPI Payload
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
export const ActionGroupSignature = {
  AMAZON_USERINPUT: "AMAZON.UserInput",
} as const;

/**
 * @public
 */
export type ActionGroupSignature = (typeof ActionGroupSignature)[keyof typeof ActionGroupSignature];

/**
 * Create Action Group Request
 * @public
 */
export interface CreateAgentActionGroupRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Action Group Signature for a BuiltIn Action
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * Type of Executors for an Action Group
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * Contains information about the API Schema for the Action Group
   * @public
   */
  apiSchema?: APISchema;

  /**
   * State of the action group
   * @public
   */
  actionGroupState?: ActionGroupState;
}

/**
 * Contains the information of an Agent Action Group
 * @public
 */
export interface AgentActionGroup {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Action Group Signature for a BuiltIn Action
   * @public
   */
  parentActionSignature?: ActionGroupSignature;

  /**
   * Type of Executors for an Action Group
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * Contains information about the API Schema for the Action Group
   * @public
   */
  apiSchema?: APISchema;

  /**
   * State of the action group
   * @public
   */
  actionGroupState: ActionGroupState | undefined;
}

/**
 * Create Action Group Response
 * @public
 */
export interface CreateAgentActionGroupResponse {
  /**
   * Contains the information of an Agent Action Group
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * This exception is thrown if there was an unexpected error during processing of request
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
 * This exception is thrown when a resource referenced by the operation does not exist
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
 * This exception is thrown when a request is made beyond the service quota
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
 * This exception is thrown when the number of requests exceeds the limit
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
 * Stores information about a field passed inside a request that resulted in an exception
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Non Blank String
   * @public
   */
  name: string | undefined;

  /**
   * Non Blank String
   * @public
   */
  message: string | undefined;
}

/**
 * This exception is thrown when the request's input validation fails
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * list of ValidationExceptionField
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
 * Delete Action Group Request
 * @public
 */
export interface DeleteAgentActionGroupRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when an Agent ActionGroup is created
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * Skips checking if resource is in use when set to true. Defaults to false
   * @public
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * Delete Action Group Response
 * @public
 */
export interface DeleteAgentActionGroupResponse {}

/**
 * Get Action Group Request
 * @public
 */
export interface GetAgentActionGroupRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Version number generated when a version is created
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when an Agent Action Group is created
   * @public
   */
  actionGroupId: string | undefined;
}

/**
 * Get Action Group Response
 * @public
 */
export interface GetAgentActionGroupResponse {
  /**
   * Contains the information of an Agent Action Group
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * List Action Groups Request
 * @public
 */
export interface ListAgentActionGroupsRequest {
  /**
   * Id generated at the server side when an Agent is Listed
   * @public
   */
  agentId: string | undefined;

  /**
   * Id generated at the server side when an Agent is Listed
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * ActionGroup Summary
 * @public
 */
export interface ActionGroupSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * State of the action group
   * @public
   */
  actionGroupState: ActionGroupState | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * List Action Groups Response
 * @public
 */
export interface ListAgentActionGroupsResponse {
  /**
   * List of ActionGroup Summaries
   * @public
   */
  actionGroupSummaries: ActionGroupSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Update Action Group Request
 * @public
 */
export interface UpdateAgentActionGroupRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when an Action Group is created under Agent
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Action Group Signature for a BuiltIn Action
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature;

  /**
   * Type of Executors for an Action Group
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor;

  /**
   * State of the action group
   * @public
   */
  actionGroupState?: ActionGroupState;

  /**
   * Contains information about the API Schema for the Action Group
   * @public
   */
  apiSchema?: APISchema;
}

/**
 * Update Action Group Response
 * @public
 */
export interface UpdateAgentActionGroupResponse {
  /**
   * Contains the information of an Agent Action Group
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
 * Configuration for inference in prompt configuration
 * @public
 */
export interface InferenceConfiguration {
  /**
   * Controls randomness, higher values increase diversity
   * @public
   */
  temperature?: number;

  /**
   * Cumulative probability cutoff for token selection
   * @public
   */
  topP?: number;

  /**
   * Sample from the k most likely next tokens
   * @public
   */
  topK?: number;

  /**
   * Maximum length of output
   * @public
   */
  maximumLength?: number;

  /**
   * List of stop sequences
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
 * BasePromptConfiguration per Prompt Type.
 * @public
 */
export interface PromptConfiguration {
  /**
   * Prompt Type.
   * @public
   */
  promptType?: PromptType;

  /**
   * Creation Mode for Prompt Configuration.
   * @public
   */
  promptCreationMode?: CreationMode;

  /**
   * Prompt State.
   * @public
   */
  promptState?: PromptState;

  /**
   * Base Prompt Template.
   * @public
   */
  basePromptTemplate?: string;

  /**
   * Configuration for inference in prompt configuration
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * Creation Mode for Prompt Configuration.
   * @public
   */
  parserMode?: CreationMode;
}

/**
 * Configuration for prompt override.
 * @public
 */
export interface PromptOverrideConfiguration {
  /**
   * List of BasePromptConfiguration
   * @public
   */
  promptConfigurations: PromptConfiguration[] | undefined;

  /**
   * ARN of a Lambda.
   * @public
   */
  overrideLambda?: string;
}

/**
 * Contains the information of an agent
 * @public
 */
export interface Agent {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Arn representation of the Agent.
   * @public
   */
  agentArn: string | undefined;

  /**
   * Draft Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Instruction for the agent.
   * @public
   */
  instruction?: string;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * ARN or name of a Bedrock model.
   * @public
   */
  foundationModel?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Max Session Time.
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * ARN of a IAM role.
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * A KMS key ARN
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  preparedAt?: Date;

  /**
   * Failure Reasons for Error.
   * @public
   */
  failureReasons?: string[];

  /**
   * The recommended actions users can take to resolve an error in failureReasons.
   * @public
   */
  recommendedActions?: string[];

  /**
   * Configuration for prompt override.
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * Details about the routing configuration for an Agent alias.
 * @public
 */
export interface AgentAliasRoutingConfigurationListItem {
  /**
   * Agent Version.
   * @public
   */
  agentVersion: string | undefined;
}

/**
 * History event for an alias for an Agent.
 * @public
 */
export interface AgentAliasHistoryEvent {
  /**
   * Routing configuration for an Agent alias.
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * Time Stamp.
   * @public
   */
  endDate?: Date;

  /**
   * Time Stamp.
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
 * Contains the information of an agent alias
 * @public
 */
export interface AgentAlias {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Id for an Agent Alias generated at the server side.
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * Arn representation of the Agent Alias.
   * @public
   */
  agentAliasArn: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Routing configuration for an Agent alias.
   * @public
   */
  routingConfiguration: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The list of history events for an alias for an Agent.
   * @public
   */
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[];

  /**
   * The statuses an Agent Alias can be in.
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * Summary of an alias for an Agent.
 * @public
 */
export interface AgentAliasSummary {
  /**
   * Id for an Agent Alias generated at the server side.
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Routing configuration for an Agent alias.
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * The statuses an Agent Alias can be in.
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
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
 * Contains the information of an Agent Knowledge Base.
 * @public
 */
export interface AgentKnowledgeBase {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description: string | undefined;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * State of the knowledge base; whether it is enabled or disabled
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;
}

/**
 * Agent Knowledge Base Summary
 * @public
 */
export interface AgentKnowledgeBaseSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * State of the knowledge base; whether it is enabled or disabled
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Create Agent Request
 * @public
 */
export interface CreateAgentRequest {
  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Instruction for the agent.
   * @public
   */
  instruction?: string;

  /**
   * ARN or name of a Bedrock model.
   * @public
   */
  foundationModel?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Max Session Time.
   * @public
   */
  idleSessionTTLInSeconds?: number;

  /**
   * ARN of a IAM role.
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * A KMS key ARN
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * A map of tag keys and values
   * @public
   */
  tags?: Record<string, string>;

  /**
   * Configuration for prompt override.
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * Create Agent Response
 * @public
 */
export interface CreateAgentResponse {
  /**
   * Contains the information of an agent
   * @public
   */
  agent: Agent | undefined;
}

/**
 * Delete Agent Request
 * @public
 */
export interface DeleteAgentRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Skips checking if resource is in use when set to true. Defaults to false
   * @public
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * Delete Agent Response
 * @public
 */
export interface DeleteAgentResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * Get Agent Request
 * @public
 */
export interface GetAgentRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;
}

/**
 * Get Agent Response
 * @public
 */
export interface GetAgentResponse {
  /**
   * Contains the information of an agent
   * @public
   */
  agent: Agent | undefined;
}

/**
 * List Agent Request
 * @public
 */
export interface ListAgentsRequest {
  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Summary of Agent.
 * @public
 */
export interface AgentSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Agent Version.
   * @public
   */
  latestAgentVersion?: string;
}

/**
 * List Agent Response
 * @public
 */
export interface ListAgentsResponse {
  /**
   * List of AgentSummary.
   * @public
   */
  agentSummaries: AgentSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * PrepareAgent Request
 * @public
 */
export interface PrepareAgentRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;
}

/**
 * PrepareAgent Response
 * @public
 */
export interface PrepareAgentResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Time Stamp.
   * @public
   */
  preparedAt: Date | undefined;
}

/**
 * Update Agent Request
 * @public
 */
export interface UpdateAgentRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Instruction for the agent.
   * @public
   */
  instruction?: string;

  /**
   * ARN or name of a Bedrock model.
   * @public
   */
  foundationModel?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Max Session Time.
   * @public
   */
  idleSessionTTLInSeconds?: number;

  /**
   * ARN of a IAM role.
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * A KMS key ARN
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * Configuration for prompt override.
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * Update Agent Response
 * @public
 */
export interface UpdateAgentResponse {
  /**
   * Contains the information of an agent
   * @public
   */
  agent: Agent | undefined;
}

/**
 * Contains the information of an agent version.
 * @public
 */
export interface AgentVersion {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Arn representation of the Agent.
   * @public
   */
  agentArn: string | undefined;

  /**
   * Numerical Agent Version.
   * @public
   */
  version: string | undefined;

  /**
   * Instruction for the agent.
   * @public
   */
  instruction?: string;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * ARN or name of a Bedrock model.
   * @public
   */
  foundationModel?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Max Session Time.
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * ARN of a IAM role.
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * A KMS key ARN
   * @public
   */
  customerEncryptionKeyArn?: string;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Failure Reasons for Error.
   * @public
   */
  failureReasons?: string[];

  /**
   * The recommended actions users can take to resolve an error in failureReasons.
   * @public
   */
  recommendedActions?: string[];

  /**
   * Configuration for prompt override.
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration;
}

/**
 * Summary of agent version.
 * @public
 */
export interface AgentVersionSummary {
  /**
   * Name for a resource.
   * @public
   */
  agentName: string | undefined;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;
}

/**
 * Create Agent Alias Request
 * @public
 */
export interface CreateAgentAliasRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Routing configuration for an Agent alias.
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];

  /**
   * A map of tag keys and values
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * Create Agent Alias Response
 * @public
 */
export interface CreateAgentAliasResponse {
  /**
   * Contains the information of an agent alias
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * Delete Agent Alias Request
 * @public
 */
export interface DeleteAgentAliasRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Id generated at the server side when an Agent Alias is created
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * Delete Agent Alias Response
 * @public
 */
export interface DeleteAgentAliasResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Id for an Agent Alias generated at the server side.
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The statuses an Agent Alias can be in.
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * Get Agent Alias Request
 * @public
 */
export interface GetAgentAliasRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Id generated at the server side when an Agent Alias is created
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * Get Agent Alias Response
 * @public
 */
export interface GetAgentAliasResponse {
  /**
   * Contains the information of an agent alias
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * List Agent Aliases Request
 * @public
 */
export interface ListAgentAliasesRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * List Agent Aliases Response
 * @public
 */
export interface ListAgentAliasesResponse {
  /**
   * The list of summaries of all the aliases for an Agent.
   * @public
   */
  agentAliasSummaries: AgentAliasSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Update Agent Alias Request
 * @public
 */
export interface UpdateAgentAliasRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Id generated at the server side when an Agent Alias is created
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Routing configuration for an Agent alias.
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
}

/**
 * Update Agent Alias Response
 * @public
 */
export interface UpdateAgentAliasResponse {
  /**
   * Contains the information of an agent alias
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * Configures an S3 data source location.
 * @public
 */
export interface S3DataSourceConfiguration {
  /**
   * A S3 bucket ARN
   * @public
   */
  bucketArn: string | undefined;

  /**
   * A list of S3 prefixes.
   * @public
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
 * Specifies a raw data source location to ingest.
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * The type of the data source location.
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * Configures an S3 data source location.
   * @public
   */
  s3Configuration?: S3DataSourceConfiguration;
}

/**
 * Server-side encryption configuration.
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * A KMS key ARN
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
 * Configures fixed size chunking strategy
 * @public
 */
export interface FixedSizeChunkingConfiguration {
  /**
   * The maximum number of tokens per chunk.
   * @public
   */
  maxTokens: number | undefined;

  /**
   * The overlap percentage between adjacent chunks.
   * @public
   */
  overlapPercentage: number | undefined;
}

/**
 * Configures chunking strategy
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * The type of chunking strategy
   * @public
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * Configures fixed size chunking strategy
   * @public
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
}

/**
 * Configures ingestion for a vector knowledge base
 * @public
 */
export interface VectorIngestionConfiguration {
  /**
   * Configures chunking strategy
   * @public
   */
  chunkingConfiguration?: ChunkingConfiguration;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Specifies a raw data source location to ingest.
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Server-side encryption configuration.
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * Configures ingestion for a vector knowledge base
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
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * Contains the information of a data source.
 * @public
 */
export interface DataSource {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * The status of a data source.
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Specifies a raw data source location to ingest.
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Server-side encryption configuration.
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * Configures ingestion for a vector knowledge base
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * Contains the information of a data source.
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The status of a data source.
   * @public
   */
  status: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * Contains the information of a data source.
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Summary information of a data source.
 * @public
 */
export interface DataSourceSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * The status of a data source.
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * list of data source summaries
   * @public
   */
  dataSourceSummaries: DataSourceSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * Specifies a raw data source location to ingest.
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Server-side encryption configuration.
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * Configures ingestion for a vector knowledge base
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * Contains the information of a data source.
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * The document level statistics of an ingestion job
 * @public
 */
export interface IngestionJobStatistics {
  /**
   * Number of scanned documents
   * @public
   */
  numberOfDocumentsScanned?: number;

  /**
   * Number of indexed documents
   * @public
   */
  numberOfNewDocumentsIndexed?: number;

  /**
   * Number of modified documents indexed
   * @public
   */
  numberOfModifiedDocumentsIndexed?: number;

  /**
   * Number of deleted documents
   * @public
   */
  numberOfDocumentsDeleted?: number;

  /**
   * Number of failed documents
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
 * Contains the information of an ingestion job.
 * @public
 */
export interface IngestionJob {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * The status of an ingestion job.
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * The document level statistics of an ingestion job
   * @public
   */
  statistics?: IngestionJobStatistics;

  /**
   * Failure Reasons for Error.
   * @public
   */
  failureReasons?: string[];

  /**
   * Time Stamp.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * Contains the information of an ingestion job.
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
 * Filters the response returned by ListIngestionJobs operation.
 * @public
 */
export interface IngestionJobFilter {
  /**
   * The name of the field to filter ingestion jobs.
   * @public
   */
  attribute: IngestionJobFilterAttribute | undefined;

  /**
   * The operator used to filter ingestion jobs.
   * @public
   */
  operator: IngestionJobFilterOperator | undefined;

  /**
   * The list of values used to filter ingestion jobs.
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
 * Sorts the response returned by ListIngestionJobs operation.
 * @public
 */
export interface IngestionJobSortBy {
  /**
   * The name of the field to sort ingestion jobs.
   * @public
   */
  attribute: IngestionJobSortByAttribute | undefined;

  /**
   * Order to sort results by.
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * List of IngestionJobFilters
   * @public
   */
  filters?: IngestionJobFilter[];

  /**
   * Sorts the response returned by ListIngestionJobs operation.
   * @public
   */
  sortBy?: IngestionJobSortBy;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Summary information of an ingestion job.
 * @public
 */
export interface IngestionJobSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * The status of an ingestion job.
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * Time Stamp.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The document level statistics of an ingestion job
   * @public
   */
  statistics?: IngestionJobStatistics;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * List of IngestionJobSummaries
   * @public
   */
  ingestionJobSummaries: IngestionJobSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartIngestionJobRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface StartIngestionJobResponse {
  /**
   * Contains the information of an ingestion job.
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * Associate Agent Knowledge Base Request
 * @public
 */
export interface AssociateAgentKnowledgeBaseRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description: string | undefined;

  /**
   * State of the knowledge base; whether it is enabled or disabled
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState;
}

/**
 * Associate Agent Knowledge Base Response
 * @public
 */
export interface AssociateAgentKnowledgeBaseResponse {
  /**
   * Contains the information of an Agent Knowledge Base.
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
 * Configurations for a vector knowledge base.
 * @public
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * Arn of a Bedrock model.
   * @public
   */
  embeddingModelArn: string | undefined;
}

/**
 * Configures a bedrock knowledge base.
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * The type of a knowledge base.
   * @public
   */
  type: KnowledgeBaseType | undefined;

  /**
   * Configurations for a vector knowledge base.
   * @public
   */
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
}

/**
 * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
 * @public
 */
export interface OpenSearchServerlessFieldMapping {
  /**
   * Name of the field
   * @public
   */
  vectorField: string | undefined;

  /**
   * Name of the field
   * @public
   */
  textField: string | undefined;

  /**
   * Name of the field
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains the configurations to use OpenSearch Serverless to store knowledge base data.
 * @public
 */
export interface OpenSearchServerlessConfiguration {
  /**
   * Arn of an OpenSearch Serverless collection.
   * @public
   */
  collectionArn: string | undefined;

  /**
   * Arn of an OpenSearch Serverless index.
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
   * @public
   */
  fieldMapping: OpenSearchServerlessFieldMapping | undefined;
}

/**
 * A mapping of Bedrock Knowledge Base fields to Pinecone field names
 * @public
 */
export interface PineconeFieldMapping {
  /**
   * Name of the field
   * @public
   */
  textField: string | undefined;

  /**
   * Name of the field
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains the configurations to use Pinecone to store knowledge base data.
 * @public
 */
export interface PineconeConfiguration {
  /**
   * Pinecone connection string
   * @public
   */
  connectionString: string | undefined;

  /**
   * Arn of a SecretsManager Secret.
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * Pinecone namespace
   * @public
   */
  namespace?: string;

  /**
   * A mapping of Bedrock Knowledge Base fields to Pinecone field names
   * @public
   */
  fieldMapping: PineconeFieldMapping | undefined;
}

/**
 * A mapping of Bedrock Knowledge Base fields to RDS column names
 * @public
 */
export interface RdsFieldMapping {
  /**
   * Name of the column
   * @public
   */
  primaryKeyField: string | undefined;

  /**
   * Name of the column
   * @public
   */
  vectorField: string | undefined;

  /**
   * Name of the column
   * @public
   */
  textField: string | undefined;

  /**
   * Name of the column
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains the configurations to use RDS to store knowledge base data.
 * @public
 */
export interface RdsConfiguration {
  /**
   * Arn of a RDS Resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Arn of a SecretsManager Secret.
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * Name of the database within RDS
   * @public
   */
  databaseName: string | undefined;

  /**
   * Name of the table within RDS
   * @public
   */
  tableName: string | undefined;

  /**
   * A mapping of Bedrock Knowledge Base fields to RDS column names
   * @public
   */
  fieldMapping: RdsFieldMapping | undefined;
}

/**
 * A mapping of Bedrock Knowledge Base fields to Redis Cloud field names
 * @public
 */
export interface RedisEnterpriseCloudFieldMapping {
  /**
   * Name of the field
   * @public
   */
  vectorField: string | undefined;

  /**
   * Name of the field
   * @public
   */
  textField: string | undefined;

  /**
   * Name of the field
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains the configurations to use Redis Enterprise Cloud to store knowledge base data.
 * @public
 */
export interface RedisEnterpriseCloudConfiguration {
  /**
   * Redis enterprise cloud endpoint
   * @public
   */
  endpoint: string | undefined;

  /**
   * Name of a redis enterprise cloud index
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * Arn of a SecretsManager Secret.
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * A mapping of Bedrock Knowledge Base fields to Redis Cloud field names
   * @public
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
 * Configures the physical storage of ingested data in a knowledge base.
 * @public
 */
export interface StorageConfiguration {
  /**
   * The storage type of a knowledge base.
   * @public
   */
  type: KnowledgeBaseStorageType | undefined;

  /**
   * Contains the configurations to use OpenSearch Serverless to store knowledge base data.
   * @public
   */
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;

  /**
   * Contains the configurations to use Pinecone to store knowledge base data.
   * @public
   */
  pineconeConfiguration?: PineconeConfiguration;

  /**
   * Contains the configurations to use Redis Enterprise Cloud to store knowledge base data.
   * @public
   */
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;

  /**
   * Contains the configurations to use RDS to store knowledge base data.
   * @public
   */
  rdsConfiguration?: RdsConfiguration;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * Client specified token used for idempotency checks
   * @public
   */
  clientToken?: string;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * ARN of a IAM role.
   * @public
   */
  roleArn: string | undefined;

  /**
   * Configures a bedrock knowledge base.
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Configures the physical storage of ingested data in a knowledge base.
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * A map of tag keys and values
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
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * Contains the information of a knowledge base.
 * @public
 */
export interface KnowledgeBase {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * ARN of a KnowledgeBase
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * ARN of a IAM role.
   * @public
   */
  roleArn: string | undefined;

  /**
   * Configures a bedrock knowledge base.
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Configures the physical storage of ingested data in a knowledge base.
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;

  /**
   * The status of a knowledge base.
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * Time Stamp.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Failure Reasons for Error.
   * @public
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * Contains the information of a knowledge base.
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The status of a knowledge base.
   * @public
   */
  status: KnowledgeBaseStatus | undefined;
}

/**
 * Disassociate Agent Knowledge Base Request
 * @public
 */
export interface DisassociateAgentKnowledgeBaseRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when a Knowledge Base is associated to an Agent
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Disassociate Agent Knowledge Base Response
 * @public
 */
export interface DisassociateAgentKnowledgeBaseResponse {}

/**
 * Get Agent Knowledge Base Request
 * @public
 */
export interface GetAgentKnowledgeBaseRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Version number generated when a version is created
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when a Knowledge Base is associated
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Get Agent Knowledge Base Response
 * @public
 */
export interface GetAgentKnowledgeBaseResponse {
  /**
   * Contains the information of an Agent Knowledge Base.
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * Contains the information of a knowledge base.
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * List Agent Knowledge Bases Request
 * @public
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Version number generated when a version is created
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * List Agent Knowledge Bases Response
 * @public
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * List of Agent Knowledge Base Summaries
   * @public
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Summary information of a knowledge base.
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * The status of a knowledge base.
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * Time Stamp.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * List of KnowledgeBaseSummaries
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * Update Agent Knowledge Base Request
 * @public
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Draft Version of the Agent.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Id generated at the server side when a Knowledge Base is associated to an Agent
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * State of the knowledge base; whether it is enabled or disabled
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState;
}

/**
 * Update Agent Knowledge Base Response
 * @public
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * Contains the information of an Agent Knowledge Base.
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * Identifier for a resource.
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Name for a resource.
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Resource.
   * @public
   */
  description?: string;

  /**
   * ARN of a IAM role.
   * @public
   */
  roleArn: string | undefined;

  /**
   * Configures a bedrock knowledge base.
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Configures the physical storage of ingested data in a knowledge base.
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * Contains the information of a knowledge base.
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of tag keys and values
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of tag keys and values
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
   * ARN of Taggable resources: [Agent, AgentAlias, Knowledge-Base]
   * @public
   */
  resourceArn: string | undefined;

  /**
   * List of Tag Keys
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Delete Agent Version Request
 * @public
 */
export interface DeleteAgentVersionRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Numerical Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Skips checking if resource is in use when set to true. Defaults to false
   * @public
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * Delete Agent Version Response
 * @public
 */
export interface DeleteAgentVersionResponse {
  /**
   * Identifier for a resource.
   * @public
   */
  agentId: string | undefined;

  /**
   * Numerical Agent Version.
   * @public
   */
  agentVersion: string | undefined;

  /**
   * Schema Type for Action APIs.
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * Get Agent Version Request
 * @public
 */
export interface GetAgentVersionRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Numerical Agent Version.
   * @public
   */
  agentVersion: string | undefined;
}

/**
 * Get Agent Version Response
 * @public
 */
export interface GetAgentVersionResponse {
  /**
   * Contains the information of an agent version.
   * @public
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * List Agent Versions Request
 * @public
 */
export interface ListAgentVersionsRequest {
  /**
   * Id generated at the server side when an Agent is created
   * @public
   */
  agentId: string | undefined;

  /**
   * Max Results.
   * @public
   */
  maxResults?: number;

  /**
   * Opaque continuation token of previous paginated response.
   * @public
   */
  nextToken?: string;
}

/**
 * List Agent Versions Response
 * @public
 */
export interface ListAgentVersionsResponse {
  /**
   * List of AgentVersionSummary.
   * @public
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
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
