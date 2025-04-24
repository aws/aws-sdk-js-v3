// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { QConnectServiceException as __BaseException } from "./QConnectServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 */
export interface ActivateMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *       the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain
   *       any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The version number of the message template version to activate.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface ActivateMessageTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The version number of the message template version that is activated.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
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
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The specified resource name.</p>
   * @public
   */
  resourceName?: string | undefined;

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
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The throttling limit has been exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
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
 * <p>The input fails to satisfy the constraints specified by a service.</p>
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
 * <p>Information about an agent.</p>
 * @public
 */
export interface AgentAttributes {
  /**
   * <p>The agent’s first name as entered in their Amazon Connect user account.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The agent’s last name as entered in their Amazon Connect user account.</p>
   * @public
   */
  lastName?: string | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a tag condition. </p>
 * @public
 */
export interface TagCondition {
  /**
   * <p>The tag key in the tag condition.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value in the tag condition.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>A list of conditions which would be applied together with an <code>OR</code>
 *       condition.</p>
 * @public
 */
export type OrCondition = OrCondition.AndConditionsMember | OrCondition.TagConditionMember | OrCondition.$UnknownMember;

/**
 * @public
 */
export namespace OrCondition {
  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *       condition.</p>
   * @public
   */
  export interface AndConditionsMember {
    andConditions: TagCondition[];
    tagCondition?: never;
    $unknown?: never;
  }

  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  export interface TagConditionMember {
    andConditions?: never;
    tagCondition: TagCondition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    andConditions?: never;
    tagCondition?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    andConditions: (value: TagCondition[]) => T;
    tagCondition: (value: TagCondition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OrCondition, visitor: Visitor<T>): T => {
    if (value.andConditions !== undefined) return visitor.andConditions(value.andConditions);
    if (value.tagCondition !== undefined) return visitor.tagCondition(value.tagCondition);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An object that can be used to specify Tag conditions.</p>
 * @public
 */
export type TagFilter =
  | TagFilter.AndConditionsMember
  | TagFilter.OrConditionsMember
  | TagFilter.TagConditionMember
  | TagFilter.$UnknownMember;

/**
 * @public
 */
export namespace TagFilter {
  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  export interface TagConditionMember {
    tagCondition: TagCondition;
    andConditions?: never;
    orConditions?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *       condition.</p>
   * @public
   */
  export interface AndConditionsMember {
    tagCondition?: never;
    andConditions: TagCondition[];
    orConditions?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *       condition.</p>
   * @public
   */
  export interface OrConditionsMember {
    tagCondition?: never;
    andConditions?: never;
    orConditions: OrCondition[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tagCondition?: never;
    andConditions?: never;
    orConditions?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tagCondition: (value: TagCondition) => T;
    andConditions: (value: TagCondition[]) => T;
    orConditions: (value: OrCondition[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TagFilter, visitor: Visitor<T>): T => {
    if (value.tagCondition !== undefined) return visitor.tagCondition(value.tagCondition);
    if (value.andConditions !== undefined) return visitor.andConditions(value.andConditions);
    if (value.orConditions !== undefined) return visitor.orConditions(value.orConditions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseSearchType = {
  HYBRID: "HYBRID",
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type KnowledgeBaseSearchType = (typeof KnowledgeBaseSearchType)[keyof typeof KnowledgeBaseSearchType];

/**
 * <p>The data of the configuration for a <code>KNOWLEDGE_BASE</code> type Amazon Q in Connect
 *       Assistant Association.</p>
 * @public
 */
export interface KnowledgeBaseAssociationConfigurationData {
  /**
   * <p>An object that can be used to specify Tag conditions.</p>
   * @public
   */
  contentTagFilter?: TagFilter | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The search type to be used against the Knowledge Base for this request. The values can be
   *         <code>SEMANTIC</code> which uses vector embeddings or <code>HYBRID</code> which use vector
   *       embeddings and raw text</p>
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * <p>A typed union of the data of the configuration for an Amazon Q in Connect Assistant
 *       Association.</p>
 * @public
 */
export type AssociationConfigurationData =
  | AssociationConfigurationData.KnowledgeBaseAssociationConfigurationDataMember
  | AssociationConfigurationData.$UnknownMember;

/**
 * @public
 */
export namespace AssociationConfigurationData {
  /**
   * <p>The data of the configuration for a <code>KNOWLEDGE_BASE</code> type Amazon Q in Connect
   *       Assistant Association.</p>
   * @public
   */
  export interface KnowledgeBaseAssociationConfigurationDataMember {
    knowledgeBaseAssociationConfigurationData: KnowledgeBaseAssociationConfigurationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseAssociationConfigurationData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseAssociationConfigurationData: (value: KnowledgeBaseAssociationConfigurationData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssociationConfigurationData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseAssociationConfigurationData !== undefined)
      return visitor.knowledgeBaseAssociationConfigurationData(value.knowledgeBaseAssociationConfigurationData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AIAgentAssociationConfigurationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type AIAgentAssociationConfigurationType =
  (typeof AIAgentAssociationConfigurationType)[keyof typeof AIAgentAssociationConfigurationType];

/**
 * <p>The configuration for an Amazon Q in Connect Assistant Association.</p>
 * @public
 */
export interface AssociationConfiguration {
  /**
   * <p>The identifier of the association for this Association Configuration.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The type of the association for this Association Configuration.</p>
   * @public
   */
  associationType?: AIAgentAssociationConfigurationType | undefined;

  /**
   * <p>The data of the configuration for an Amazon Q in Connect Assistant Association.</p>
   * @public
   */
  associationConfigurationData?: AssociationConfigurationData | undefined;
}

/**
 * <p>The configuration for the <code>ANSWER_RECOMMENDATION</code> AI Agent type.</p>
 * @public
 */
export interface AnswerRecommendationAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier for the Intent Labeling prompt used by the
   *         <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  intentLabelingGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Query Reformulation prompt used by the
   *         <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  queryReformulationAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Answer Generation prompt used by the
   *         <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier for the Answer Generation Guardrail used by the
   *         <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * <p>The association configurations for overriding behavior on this AI Agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * <p>The locale to which specifies the language and region settings that determine the response
   *       language for <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html">QueryAssistant</a>.</p>
   *          <note>
   *             <p>Changing this locale to anything other than <code>en_US</code>, <code>en_GB</code>, or
   *           <code>en_AU</code> will turn off recommendations triggered by contact transcripts for
   *         agent assistance, as this feature is not supported in multiple languages.</p>
   *          </note>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>The configuration for the <code>MANUAL_SEARCH</code> AI Agent type.</p>
 * @public
 */
export interface ManualSearchAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier for the Answer Generation prompt used by the MANUAL_SEARCH AI
   *       Agent.</p>
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier for the Answer Generation guardrail used by the MANUAL_SEARCH
   *       AI Agent.</p>
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * <p>The association configurations for overriding behavior on this AI Agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * <p>The locale to which specifies the language and region settings that determine the response
   *       language for <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html">QueryAssistant</a>.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>The configuration for AI Agents of type SELF_SERVICE.</p>
 * @public
 */
export interface SelfServiceAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier for the Self Service Pre-Processing prompt used by the
   *       SELF_SERVICE AI Agent</p>
   * @public
   */
  selfServicePreProcessingAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Self Service Answer Generation prompt used by the
   *       SELF_SERVICE AI Agent</p>
   * @public
   */
  selfServiceAnswerGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier used by the SELF_SERVICE AI Agent.</p>
   * @public
   */
  selfServiceAIGuardrailId?: string | undefined;

  /**
   * <p>The association configurations for overriding behavior on this AI Agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * <p>A typed union that specifies the configuration based on the type of AI Agent.</p>
 * @public
 */
export type AIAgentConfiguration =
  | AIAgentConfiguration.AnswerRecommendationAIAgentConfigurationMember
  | AIAgentConfiguration.ManualSearchAIAgentConfigurationMember
  | AIAgentConfiguration.SelfServiceAIAgentConfigurationMember
  | AIAgentConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AIAgentConfiguration {
  /**
   * <p>The configuration for AI Agents of type <code>MANUAL_SEARCH</code>.</p>
   * @public
   */
  export interface ManualSearchAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for AI Agents of type <code>ANSWER_RECOMMENDATION</code>.</p>
   * @public
   */
  export interface AnswerRecommendationAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration;
    selfServiceAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for AI Agents of type SELF_SERVICE.</p>
   * @public
   */
  export interface SelfServiceAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    manualSearchAIAgentConfiguration: (value: ManualSearchAIAgentConfiguration) => T;
    answerRecommendationAIAgentConfiguration: (value: AnswerRecommendationAIAgentConfiguration) => T;
    selfServiceAIAgentConfiguration: (value: SelfServiceAIAgentConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AIAgentConfiguration, visitor: Visitor<T>): T => {
    if (value.manualSearchAIAgentConfiguration !== undefined)
      return visitor.manualSearchAIAgentConfiguration(value.manualSearchAIAgentConfiguration);
    if (value.answerRecommendationAIAgentConfiguration !== undefined)
      return visitor.answerRecommendationAIAgentConfiguration(value.answerRecommendationAIAgentConfiguration);
    if (value.selfServiceAIAgentConfiguration !== undefined)
      return visitor.selfServiceAIAgentConfiguration(value.selfServiceAIAgentConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AIAgentType = {
  ANSWER_RECOMMENDATION: "ANSWER_RECOMMENDATION",
  MANUAL_SEARCH: "MANUAL_SEARCH",
  SELF_SERVICE: "SELF_SERVICE",
} as const;

/**
 * @public
 */
export type AIAgentType = (typeof AIAgentType)[keyof typeof AIAgentType];

/**
 * @public
 * @enum
 */
export const VisibilityStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;

/**
 * @public
 */
export type VisibilityStatus = (typeof VisibilityStatus)[keyof typeof VisibilityStatus];

/**
 * @public
 */
export interface CreateAIAgentRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the AI Agent.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the AI Agent.</p>
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * <p>The configuration of the AI Agent.</p>
   * @public
   */
  configuration: AIAgentConfiguration | undefined;

  /**
   * <p>The visibility status of the AI Agent.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the AI Agent.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Origin = {
  CUSTOMER: "CUSTOMER",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type Origin = (typeof Origin)[keyof typeof Origin];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>The data for the AI Agent.</p>
 * @public
 */
export interface AIAgentData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the AI Agent.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI agent.</p>
   * @public
   */
  aiAgentArn: string | undefined;

  /**
   * <p>The name of the AI Agent.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the AI Agent.</p>
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * <p>Configuration for the AI Agent.</p>
   * @public
   */
  configuration: AIAgentConfiguration | undefined;

  /**
   * <p>The time the AI Agent was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>The description of the AI Agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The visibility status of the AI Agent.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies the origin of the AI Agent. <code>SYSTEM</code> for a default AI Agent created
   *       by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation
   *       APIs. </p>
   * @public
   */
  origin?: Origin | undefined;

  /**
   * <p>The status of the AI Agent.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface CreateAIAgentResponse {
  /**
   * <p>The data of the created AI Agent.</p>
   * @public
   */
  aiAgent?: AIAgentData | undefined;
}

/**
 * <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
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
 * @public
 */
export interface CreateAIAgentVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The modification time of the AI Agent should be tracked for version creation. This field
   *       should be specified to avoid version creation when simultaneous update to the underlying AI
   *       Agent are possible. The value should be the modifiedTime returned from the request to create
   *       or update an AI Agent so that version creation can fail if an update to the AI Agent post the
   *       specified modification time has been made.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIAgentVersionResponse {
  /**
   * <p>The data of the AI Agent version.</p>
   * @public
   */
  aiAgent?: AIAgentData | undefined;

  /**
   * <p>The version number of the AI Agent version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIAgentRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  aiAgentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIAgentResponse {}

/**
 * @public
 */
export interface DeleteAIAgentVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The version number of the AI Agent version.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIAgentVersionResponse {}

/**
 * @public
 */
export interface GetAIAgentRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent (with or without a version qualifier).
   *       Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  aiAgentId: string | undefined;
}

/**
 * @public
 */
export interface GetAIAgentResponse {
  /**
   * <p>The data of the AI Agent.</p>
   * @public
   */
  aiAgent?: AIAgentData | undefined;

  /**
   * <p>The version number of the AI Agent version (returned if an AI Agent version was specified
   *       via use of a qualifier for the <code>aiAgentId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIAgentsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Agents to be listed. <code>SYSTEM</code> for a default AI Agent
   *       created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent
   *       creation APIs. </p>
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * <p>The summary of the AI Agent.</p>
 * @public
 */
export interface AIAgentSummary {
  /**
   * <p>The name of the AI Agent.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the AI Agent.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The type of the AI Agent.</p>
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI agent.</p>
   * @public
   */
  aiAgentArn: string | undefined;

  /**
   * <p>The time the AI Agent was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>The visibility status of the AI Agent.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The configuration for the AI Agent.</p>
   * @public
   */
  configuration?: AIAgentConfiguration | undefined;

  /**
   * <p>The origin of the AI Agent. <code>SYSTEM</code> for a default AI Agent created by Q in
   *       Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation
   *       APIs.</p>
   * @public
   */
  origin?: Origin | undefined;

  /**
   * <p>The description of the AI Agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the AI Agent.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIAgentsResponse {
  /**
   * <p>The summaries of AI Agents.</p>
   * @public
   */
  aiAgentSummaries: AIAgentSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIAgentVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent for which versions are to be
   *       listed.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Agent versions to be listed. <code>SYSTEM</code> for a default AI
   *       Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI
   *       Agent creation APIs. </p>
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * <p>The summary of the AI Agent version.</p>
 * @public
 */
export interface AIAgentVersionSummary {
  /**
   * <p>The data for the summary of the AI Agent version.</p>
   * @public
   */
  aiAgentSummary?: AIAgentSummary | undefined;

  /**
   * <p>The version number for this AI Agent version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIAgentVersionsResponse {
  /**
   * <p>The summaries of AI Agent versions.</p>
   * @public
   */
  aiAgentVersionSummaries: AIAgentVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIAgentRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The visbility status of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The configuration of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  configuration?: AIAgentConfiguration | undefined;

  /**
   * <p>The description of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIAgentResponse {
  /**
   * <p>The data of the updated Amazon Q in Connect AI Agent.</p>
   * @public
   */
  aiAgent?: AIAgentData | undefined;
}

/**
 * <p>A type that specifies the AI Agent ID configuration data when mapping an AI Agents to be
 *       used for an AI Agent type on a session or assistant.</p>
 * @public
 */
export interface AIAgentConfigurationData {
  /**
   * <p>The ID of the AI Agent to be configured.</p>
   * @public
   */
  aiAgentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailFilterStrength = (typeof GuardrailFilterStrength)[keyof typeof GuardrailFilterStrength];

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
 * <p>Contains filter strengths for harmful content. AI Guardrail's support the following
 *       content filters to detect and filter harmful user inputs and FM-generated outputs.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Hate</b>: Describes input prompts and model responses that
 *           discriminate, criticize, insult, denounce, or dehumanize a person or group on the basis of
 *           an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and
 *           national origin).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Insults</b>: Describes input prompts and model responses that
 *           includes demeaning, humiliating, mocking, insulting, or belittling language. This type of
 *           language is also labeled as bullying.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Sexual</b>: Describes input prompts and model responses that
 *           indicates sexual interest, activity, or arousal using direct or indirect references to
 *           body parts, physical traits, or sex.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Violence</b>: Describes input prompts and model responses
 *           that includes glorification of, or threats to inflict physical pain, hurt, or injury
 *           toward a person, group, or thing.</p>
 *             </li>
 *          </ul>
 *          <p>Content filtering depends on the confidence classification of user inputs and FM responses
 *       across each of the four harmful categories. All input and output statements are classified
 *       into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For
 *       example, if a statement is classified as <i>Hate</i> with HIGH confidence, the
 *       likelihood of the statement representing hateful content is high. A single statement can be
 *       classified across multiple categories with varying confidence levels. For example, a single
 *       statement can be classified as <i>Hate</i> with HIGH confidence, <i>
 *         Insults</i> with LOW confidence, <i>Sexual</i> with NONE confidence,
 *       and <i>Violence</i> with MEDIUM confidence.</p>
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * <p>The harmful category that the content filter is applied to.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The strength of the content filter to apply to prompts. As you increase the filter
   *       strength, the likelihood of filtering harmful content increases and the probability of seeing
   *       harmful content in your application reduces.</p>
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The strength of the content filter to apply to model responses. As you increase the filter
   *       strength, the likelihood of filtering harmful content increases and the probability of seeing
   *       harmful content in your application reduces.</p>
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;
}

/**
 * <p>Contains details about how to handle harmful content.</p>
 * @public
 */
export interface AIGuardrailContentPolicyConfig {
  /**
   * <p>Contains the type of the content filter and how strongly it should apply to prompts and
   *       model responses.</p>
   * @public
   */
  filtersConfig: GuardrailContentFilterConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingFilterType = {
  GROUNDING: "GROUNDING",
  RELEVANCE: "RELEVANCE",
} as const;

/**
 * @public
 */
export type GuardrailContextualGroundingFilterType =
  (typeof GuardrailContextualGroundingFilterType)[keyof typeof GuardrailContextualGroundingFilterType];

/**
 * <p>The filter configuration details for the AI Guardrail's contextual grounding
 *       filter.</p>
 * @public
 */
export interface GuardrailContextualGroundingFilterConfig {
  /**
   * <p>The filter type for the AI Guardrail's contextual grounding filter.</p>
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * <p>The threshold details for the AI Guardrail's contextual grounding filter.</p>
   * @public
   */
  threshold: number | undefined;
}

/**
 * <p>The policy configuration details for the AI Guardrail's contextual grounding
 *       policy.</p>
 * @public
 */
export interface AIGuardrailContextualGroundingPolicyConfig {
  /**
   * <p>The filter configuration details for the AI Guardrails contextual grounding policy.</p>
   * @public
   */
  filtersConfig: GuardrailContextualGroundingFilterConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationAction = {
  ANONYMIZE: "ANONYMIZE",
  BLOCK: "BLOCK",
} as const;

/**
 * @public
 */
export type GuardrailSensitiveInformationAction =
  (typeof GuardrailSensitiveInformationAction)[keyof typeof GuardrailSensitiveInformationAction];

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
 * <p>The PII entity to configure for the AI Guardrail.</p>
 * @public
 */
export interface GuardrailPiiEntityConfig {
  /**
   * <p>Configure AI Guardrail type when the PII entity is detected.</p>
   *          <p>The following PIIs are used to block or mask sensitive information:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>General</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>ADDRESS</b>
   *                      </p>
   *                      <p>A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12,
   *               Building 123". An address can include information such as the street, building,
   *               location, city, state, country, county, zip code, precinct, and neighborhood. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AGE</b>
   *                      </p>
   *                      <p>An individual's age, including the quantity and unit of time. For example, in the
   *               phrase "I am 40 years old," Guarrails recognizes "40 years" as an age. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>NAME</b>
   *                      </p>
   *                      <p>An individual's name. This entity type does not include titles, such as Dr., Mr.,
   *               Mrs., or Miss. AI Guardrail doesn't apply this entity type to names that are part of
   *               organizations or addresses. For example, AI Guardrail recognizes the "John Doe
   *               Organization" as an organization, and it recognizes "Jane Doe Street" as an address.
   *             </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>EMAIL</b>
   *                      </p>
   *                      <p>An email address, such as <i>marymajor@email.com</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PHONE</b>
   *                      </p>
   *                      <p>A phone number. This entity type also includes fax and pager numbers. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>USERNAME</b>
   *                      </p>
   *                      <p>A user name that identifies an account, such as a login name, screen name, nick
   *               name, or handle. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PASSWORD</b>
   *                      </p>
   *                      <p>An alphanumeric string that is used as a password, such as "*<i>
   *                 very20special#pass*</i>". </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>DRIVER_ID</b>
   *                      </p>
   *                      <p>The number assigned to a driver's license, which is an official document
   *               permitting an individual to operate one or more motorized vehicles on a public road. A
   *               driver's license number consists of alphanumeric characters. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>LICENSE_PLATE</b>
   *                      </p>
   *                      <p>A license plate for a vehicle is issued by the state or country where the vehicle
   *               is registered. The format for passenger vehicles is typically five to eight digits,
   *               consisting of upper-case letters and numbers. The format varies depending on the
   *               location of the issuing state or country. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>VEHICLE_IDENTIFICATION_NUMBER</b>
   *                      </p>
   *                      <p>A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content
   *               and format are defined in the <i>ISO 3779</i> specification. Each
   *               country has specific codes and formats for VINs. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Finance</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_CVV</b>
   *                      </p>
   *                      <p>A three-digit card verification code (CVV) that is present on VISA, MasterCard,
   *               and Discover credit and debit cards. For American Express credit or debit cards, the
   *               CVV is a four-digit numeric code. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_EXPIRY</b>
   *                      </p>
   *                      <p>The expiration date for a credit or debit card. This number is usually four digits
   *               long and is often formatted as <i>month/year</i> or
   *                 <i>MM/YY</i>. AI Guardrail recognizes expiration dates such as
   *                 <i>01/21</i>, <i>01/2021</i>, and <i>Jan
   *                 2021</i>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_NUMBER</b>
   *                      </p>
   *                      <p>The number for a credit or debit card. These numbers can vary from 13 to 16 digits
   *               in length. However, Amazon Comprehend also recognizes credit or debit card numbers
   *               when only the last four digits are present. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PIN</b>
   *                      </p>
   *                      <p>A four-digit personal identification number (PIN) with which you can access your
   *               bank account. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>INTERNATIONAL_BANK_ACCOUNT_NUMBER</b>
   *                      </p>
   *                      <p>An International Bank Account Number has specific formats in each country. For
   *               more information, see <a href="https://www.iban.com/structure">
   *                 www.iban.com/structure</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>SWIFT_CODE</b>
   *                      </p>
   *                      <p>A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a
   *               particular bank or branch. Banks use these codes for money transfers such as
   *               international wire transfers.</p>
   *                      <p>SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to
   *               specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer
   *               to the head or primary office.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IT</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>IP_ADDRESS</b>
   *                      </p>
   *                      <p>An IPv4 address, such as <i>198.51.100.0</i>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>MAC_ADDRESS</b>
   *                      </p>
   *                      <p>A <i>media access control</i> (MAC) address is a unique identifier
   *               assigned to a network interface controller (NIC). </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>URL</b>
   *                      </p>
   *                      <p>A web address, such as <i>www.example.com</i>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AWS_ACCESS_KEY</b>
   *                      </p>
   *                      <p>A unique identifier that's associated with a secret access key; you use the access
   *               key ID and secret access key to sign programmatic Amazon Web Services requests
   *               cryptographically. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AWS_SECRET_KEY</b>
   *                      </p>
   *                      <p>A unique identifier that's associated with an access key. You use the access key
   *               ID and secret access key to sign programmatic Amazon Web Services requests
   *               cryptographically. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>USA specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>US_BANK_ACCOUNT_NUMBER</b>
   *                      </p>
   *                      <p>A US bank account number, which is typically 10 to 12 digits long. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_BANK_ROUTING_NUMBER</b>
   *                      </p>
   *                      <p>A US bank account routing number. These are typically nine digits long, </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER</b>
   *                      </p>
   *                      <p>A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that
   *               starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be
   *               formatted with a space or a dash after the third and forth digits. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_PASSPORT_NUMBER</b>
   *                      </p>
   *                      <p>A US passport number. Passport numbers range from six to nine alphanumeric
   *               characters. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_SOCIAL_SECURITY_NUMBER</b>
   *                      </p>
   *                      <p>A US Social Security Number (SSN) is a nine-digit number that is issued to US
   *               citizens, permanent residents, and temporary working residents. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Canada specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>CA_HEALTH_NUMBER</b>
   *                      </p>
   *                      <p>A Canadian Health Service Number is a 10-digit unique identifier, required for
   *               individuals to access healthcare benefits. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CA_SOCIAL_INSURANCE_NUMBER</b>
   *                      </p>
   *                      <p>A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier,
   *               required for individuals to access government programs and benefits.</p>
   *                      <p>The SIN is formatted as three groups of three digits, such as <i>
   *                 123-456-789</i>. A SIN can be validated through a simple check-digit process
   *               called the <a href="https://www.wikipedia.org/wiki/Luhn_algorithm">Luhn
   *                 algorithm</a> .</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UK Specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>UK_NATIONAL_HEALTH_SERVICE_NUMBER</b>
   *                      </p>
   *                      <p>A UK National Health Service Number is a 10-17 digit number, such as <i>485
   *                 555 3456</i>. The current system formats the 10-digit number with spaces
   *               after the third and sixth digits. The final digit is an error-detecting
   *               checksum.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>UK_NATIONAL_INSURANCE_NUMBER</b>
   *                      </p>
   *                      <p>A UK National Insurance Number (NINO) provides individuals with access to National
   *               Insurance (social security) benefits. It is also used for some purposes in the UK tax
   *               system.</p>
   *                      <p>The number is nine digits long and starts with two letters, followed by six
   *               numbers and one letter. A NINO can be formatted with a space or a dash after the two
   *               letters and after the second, forth, and sixth digits.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER</b>
   *                      </p>
   *                      <p>A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a
   *               taxpayer or a business. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Custom</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Regex filter</b> - You can use a regular expressions to
   *               define patterns for an AI Guardrail to recognize and act upon such as serial number,
   *               booking ID etc..</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>Configure AI Guardrail's action when the PII entity is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;
}

/**
 * <p>The regular expression to configure for the AI Guardrail.</p>
 * @public
 */
export interface GuardrailRegexConfig {
  /**
   * <p>The name of the regular expression to configure for the AI Guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the regular expression to configure for the AI Guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The regular expression pattern to configure for the AI Guardrail.</p>
   * @public
   */
  pattern: string | undefined;

  /**
   * <p>The AI Guardrail action to configure when matching regular expression is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;
}

/**
 * <p>Contains details about PII entities and regular expressions to configure for the AI
 *       Guardrail.</p>
 * @public
 */
export interface AIGuardrailSensitiveInformationPolicyConfig {
  /**
   * <p>A list of PII entities to configure to the AI Guardrail.</p>
   * @public
   */
  piiEntitiesConfig?: GuardrailPiiEntityConfig[] | undefined;

  /**
   * <p>A list of regular expressions to configure to the AI Guardrail.</p>
   * @public
   */
  regexesConfig?: GuardrailRegexConfig[] | undefined;
}

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
 * <p>Details about topics for the AI Guardrail to identify and deny.</p>
 * @public
 */
export interface GuardrailTopicConfig {
  /**
   * <p>The name of the topic to deny.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A definition of the topic to deny.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>A list of prompts, each of which is an example of a prompt that can be categorized as
   *       belonging to the topic.</p>
   * @public
   */
  examples?: string[] | undefined;

  /**
   * <p>Specifies to deny the topic.</p>
   * @public
   */
  type: GuardrailTopicType | undefined;
}

/**
 * <p>Contains details about topics that the AI Guardrail should identify and deny.</p>
 * @public
 */
export interface AIGuardrailTopicPolicyConfig {
  /**
   * <p>A list of policies related to topics that the AI Guardrail should deny.</p>
   * @public
   */
  topicsConfig: GuardrailTopicConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordsType = {
  PROFANITY: "PROFANITY",
} as const;

/**
 * @public
 */
export type GuardrailManagedWordsType = (typeof GuardrailManagedWordsType)[keyof typeof GuardrailManagedWordsType];

/**
 * <p>The managed word list to configure for the AI Guardrail.</p>
 * @public
 */
export interface GuardrailManagedWordsConfig {
  /**
   * <p>The managed word type to configure for the AI Guardrail.</p>
   * @public
   */
  type: GuardrailManagedWordsType | undefined;
}

/**
 * <p>A word to configure for the AI Guardrail.</p>
 * @public
 */
export interface GuardrailWordConfig {
  /**
   * <p>Text of the word configured for the AI Guardrail to block.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Contains details about the word policy to configured for the AI Guardrail.</p>
 * @public
 */
export interface AIGuardrailWordPolicyConfig {
  /**
   * <p>A list of words to configure for the AI Guardrail.</p>
   * @public
   */
  wordsConfig?: GuardrailWordConfig[] | undefined;

  /**
   * <p>A list of managed words to configure for the AI Guardrail.</p>
   * @public
   */
  managedWordListsConfig?: GuardrailManagedWordsConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the AI Guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>The visibility status of the AI Guardrail.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>A description of the AI Guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The topic policies to configure for the AI Guardrail.</p>
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * <p>The content filter policies to configure for the AI Guardrail.</p>
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * <p>The word policy you configure for the AI Guardrail.</p>
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * <p>The sensitive information policy to configure for the AI Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The contextual grounding policy configuration used to create an AI Guardrail.</p>
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The data for the AI Guardrail</p>
 * @public
 */
export interface AIGuardrailData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI Guardrail.</p>
   * @public
   */
  aiGuardrailArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The name of the AI Guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The visibility status of the AI Guardrail.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>A description of the AI Guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains details about topics that the AI Guardrail should identify and deny.</p>
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * <p>Contains details about how to handle harmful content.</p>
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * <p>Contains details about the word policy to configured for the AI Guardrail.</p>
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * <p>Contains details about PII entities and regular expressions to configure for the AI
   *       Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The policy configuration details for the AI Guardrail's contextual grounding
   *       policy.</p>
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The status of the AI Guardrail.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The time the AI Guardrail was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailResponse {
  /**
   * <p>The data of the AI Guardrail.</p>
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The time the AI Guardrail was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailVersionResponse {
  /**
   * <p>The data of the AI Guardrail version.</p>
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;

  /**
   * <p>The version number of the AI Guardrail version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIGuardrailRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail. Can be either the ID or the ARN.
   *       URLs cannot contain the ARN.</p>
   * @public
   */
  aiGuardrailId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIGuardrailResponse {}

/**
 * @public
 */
export interface DeleteAIGuardrailVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The version number of the AI Guardrail version to be deleted.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIGuardrailVersionResponse {}

/**
 * @public
 */
export interface GetAIGuardrailRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;
}

/**
 * @public
 */
export interface GetAIGuardrailResponse {
  /**
   * <p>The data of the AI Guardrail.</p>
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;

  /**
   * <p>The version number of the AI Guardrail version (returned if an AI Guardrail version was
   *       specified via use of a qualifier for the <code>aiGuardrailId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the AI Guardrail.</p>
 * @public
 */
export interface AIGuardrailSummary {
  /**
   * <p>The name of the AI Guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI Guardrail.</p>
   * @public
   */
  aiGuardrailArn: string | undefined;

  /**
   * <p>The time the AI Guardrail was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>The visibility status of the AI Guardrail.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>A description of the AI Guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the AI Guardrail.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailsResponse {
  /**
   * <p>The summaries of the AI Guardrails.</p>
   * @public
   */
  aiGuardrailSummaries: AIGuardrailSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail for which versions are to be
   *       listed.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the AI Guardrail version.</p>
 * @public
 */
export interface AIGuardrailVersionSummary {
  /**
   * <p>The data for the summary of the AI Guardrail version.</p>
   * @public
   */
  aiGuardrailSummary?: AIGuardrailSummary | undefined;

  /**
   * <p>The version number for this AI Guardrail version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailVersionsResponse {
  /**
   * <p>The summaries of the AI Guardrail versions.</p>
   * @public
   */
  aiGuardrailVersionSummaries: AIGuardrailVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIGuardrailRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The visibility status of the Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message to return when the AI Guardrail blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>A description of the AI Guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The topic policies to configure for the AI Guardrail.</p>
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * <p>The content filter policies to configure for the AI Guardrail.</p>
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * <p>The word policy you configure for the AI Guardrail.</p>
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * <p>The sensitive information policy to configure for the AI Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The contextual grounding policy configuration used to create an AI Guardrail.</p>
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAIGuardrailResponse {
  /**
   * <p>The data of the updated Amazon Q in Connect AI Guardrail.</p>
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;
}

/**
 * @public
 * @enum
 */
export const AIPromptAPIFormat = {
  ANTHROPIC_CLAUDE_MESSAGES: "ANTHROPIC_CLAUDE_MESSAGES",
  ANTHROPIC_CLAUDE_TEXT_COMPLETIONS: "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS",
  MESSAGES: "MESSAGES",
  TEXT_COMPLETIONS: "TEXT_COMPLETIONS",
} as const;

/**
 * @public
 */
export type AIPromptAPIFormat = (typeof AIPromptAPIFormat)[keyof typeof AIPromptAPIFormat];

/**
 * <p>The configuration for a prompt template that supports full textual prompt configuration
 *       using a YAML prompt.</p>
 * @public
 */
export interface TextFullAIPromptEditTemplateConfiguration {
  /**
   * <p>The YAML text for the AI Prompt template.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>A typed union that specifies the configuration for a prompt template based on its
 *       type.</p>
 * @public
 */
export type AIPromptTemplateConfiguration =
  | AIPromptTemplateConfiguration.TextFullAIPromptEditTemplateConfigurationMember
  | AIPromptTemplateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AIPromptTemplateConfiguration {
  /**
   * <p>The configuration for a prompt template that supports full textual prompt configuration
   *       using a YAML prompt.</p>
   * @public
   */
  export interface TextFullAIPromptEditTemplateConfigurationMember {
    textFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textFullAIPromptEditTemplateConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    textFullAIPromptEditTemplateConfiguration: (value: TextFullAIPromptEditTemplateConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AIPromptTemplateConfiguration, visitor: Visitor<T>): T => {
    if (value.textFullAIPromptEditTemplateConfiguration !== undefined)
      return visitor.textFullAIPromptEditTemplateConfiguration(value.textFullAIPromptEditTemplateConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AIPromptTemplateType = {
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type AIPromptTemplateType = (typeof AIPromptTemplateType)[keyof typeof AIPromptTemplateType];

/**
 * @public
 * @enum
 */
export const AIPromptType = {
  ANSWER_GENERATION: "ANSWER_GENERATION",
  INTENT_LABELING_GENERATION: "INTENT_LABELING_GENERATION",
  QUERY_REFORMULATION: "QUERY_REFORMULATION",
  SELF_SERVICE_ANSWER_GENERATION: "SELF_SERVICE_ANSWER_GENERATION",
  SELF_SERVICE_PRE_PROCESSING: "SELF_SERVICE_PRE_PROCESSING",
} as const;

/**
 * @public
 */
export type AIPromptType = (typeof AIPromptType)[keyof typeof AIPromptType];

/**
 * @public
 */
export interface CreateAIPromptRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the AI Prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of this AI Prompt.</p>
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * <p>The configuration of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateConfiguration: AIPromptTemplateConfiguration | undefined;

  /**
   * <p>The visibility status of the AI Prompt.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The type of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * <p>The identifier of the model used for this AI Prompt.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The API Format of the AI Prompt.</p>
   *          <p>Recommended values: <code>MESSAGES | TEXT_COMPLETIONS</code>
   *          </p>
   *          <note>
   *             <p>The values <code>ANTHROPIC_CLAUDE_MESSAGES | ANTHROPIC_CLAUDE_TEXT_COMPLETIONS</code>
   *         will be deprecated.</p>
   *          </note>
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the AI Prompt.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The data for the AI Prompt</p>
 * @public
 */
export interface AIPromptData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI Prompt.</p>
   * @public
   */
  aiPromptArn: string | undefined;

  /**
   * <p>The name of the AI Prompt</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of this AI Prompt.</p>
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * <p>The type of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * <p>The identifier of the model used for this AI Prompt. The following model Ids are
   *       supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>anthropic.claude-3-haiku--v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apac.amazon.nova-lite-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apac.amazon.nova-micro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apac.amazon.nova-pro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apac.anthropic.claude-3-5-sonnet--v2:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apac.anthropic.claude-3-haiku-20240307-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eu.amazon.nova-lite-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eu.amazon.nova-micro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eu.amazon.nova-pro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eu.anthropic.claude-3-7-sonnet-20250219-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eu.anthropic.claude-3-haiku-20240307-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.amazon.nova-lite-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.amazon.nova-micro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.amazon.nova-pro-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.anthropic.claude-3-5-haiku-20241022-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.anthropic.claude-3-7-sonnet-20250219-v1:0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>us.anthropic.claude-3-haiku-20240307-v1:0</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The API format used for this AI Prompt.</p>
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * <p>The configuration of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateConfiguration: AIPromptTemplateConfiguration | undefined;

  /**
   * <p>The time the AI Prompt was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>The description of the AI Prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The visibility status of the AI Prompt.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The origin of the AI Prompt. <code>SYSTEM</code> for a default AI Prompt created by Q in
   *       Connect or <code>CUSTOMER</code> for an AI Prompt created by calling AI Prompt creation APIs.
   *     </p>
   * @public
   */
  origin?: Origin | undefined;

  /**
   * <p>The status of the AI Prompt.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptResponse {
  /**
   * <p>The data of the AI Prompt.</p>
   * @public
   */
  aiPrompt?: AIPromptData | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The time the AI Prompt was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptVersionResponse {
  /**
   * <p>The data of the AI Prompt version.</p>
   * @public
   */
  aiPrompt?: AIPromptData | undefined;

  /**
   * <p>The version number of the AI Prompt version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIPromptRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  aiPromptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIPromptResponse {}

/**
 * @public
 */
export interface DeleteAIPromptVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The version number of the AI Prompt version to be deleted.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIPromptVersionResponse {}

/**
 * @public
 */
export interface GetAIPromptRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;
}

/**
 * @public
 */
export interface GetAIPromptResponse {
  /**
   * <p>The data of the AI Prompt.</p>
   * @public
   */
  aiPrompt?: AIPromptData | undefined;

  /**
   * <p>The version number of the AI Prompt version (returned if an AI Prompt version was
   *       specified via use of a qualifier for the <code>aiPromptId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIPromptsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Prompts to be listed. <code>SYSTEM</code> for a default AI Agent
   *       created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent
   *       creation APIs. </p>
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * <p>The summary of the AI Prompt.</p>
 * @public
 */
export interface AIPromptSummary {
  /**
   * <p>The name of the AI Prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The type of this AI Prompt.</p>
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI Prompt.</p>
   * @public
   */
  aiPromptArn: string | undefined;

  /**
   * <p>The time the AI Prompt was last modified.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>The type of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * <p>The identifier of the model used for this AI Prompt. Model Ids supported are:
   *         <code>anthropic.claude-3-haiku-20240307-v1:0</code>.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The API format used for this AI Prompt.</p>
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * <p>The visibility status of the AI Prompt.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The origin of the AI Prompt. <code>SYSTEM</code> for a default AI Prompt created by Q in
   *       Connect or <code>CUSTOMER</code> for an AI Prompt created by calling AI Prompt creation APIs.
   *     </p>
   * @public
   */
  origin?: Origin | undefined;

  /**
   * <p>The description of the AI Prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the AI Prompt.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIPromptsResponse {
  /**
   * <p>The summaries of the AI Prompts.</p>
   * @public
   */
  aiPromptSummaries: AIPromptSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIPromptVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt for which versions are to be
   *       listed.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Prompt versions to be listed. <code>SYSTEM</code> for a default AI
   *       Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI
   *       Agent creation APIs. </p>
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * <p>The summary of the AI Prompt version.</p>
 * @public
 */
export interface AIPromptVersionSummary {
  /**
   * <p>The date for the summary of the AI Prompt version.</p>
   * @public
   */
  aiPromptSummary?: AIPromptSummary | undefined;

  /**
   * <p>The version number for this AI Prompt version.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIPromptVersionsResponse {
  /**
   * <p>The summaries of the AI Prompt versions.</p>
   * @public
   */
  aiPromptVersionSummaries: AIPromptVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIPromptRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Prompt.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The visibility status of the Amazon Q in Connect AI prompt.</p>
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * <p>The configuration of the prompt template for this AI Prompt.</p>
   * @public
   */
  templateConfiguration?: AIPromptTemplateConfiguration | undefined;

  /**
   * <p>The description of the Amazon Q in Connect AI Prompt.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIPromptResponse {
  /**
   * <p>The data of the updated Amazon Q in Connect AI Prompt.</p>
   * @public
   */
  aiPrompt?: AIPromptData | undefined;
}

/**
 * <p>Content association data for a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/step-by-step-guided-experiences.html">step-by-step
 *         guide</a>.</p>
 * @public
 */
export interface AmazonConnectGuideAssociationData {
  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Connect flow. Step-by-step guides are a type of flow.</p>
   * @public
   */
  flowId?: string | undefined;
}

/**
 * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
 * @public
 */
export interface AppIntegrationsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.</p>
   *          <ul>
   *             <li>
   *                <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *           objectFields is not provided, including at least <code>Id</code>,
   *             <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>,
   *             <code>PublishStatus</code>, and <code>IsDeleted</code> as source fields. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *           objectFields is not provided, including at least <code>number</code>,
   *             <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>,
   *           and <code>active</code> as source fields. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/">
   *             Zendesk</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *             <code>objectFields</code> is not provided, including at least <code>id</code>,
   *             <code>title</code>, <code>updated_at</code>, and <code>draft</code> as source fields.
   *         </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index">SharePoint</a>, your AppIntegrations DataIntegration must have a FileConfiguration,
   *           including only file extensions that are among <code>docx</code>, <code>pdf</code>,
   *             <code>html</code>, <code>htm</code>, and <code>txt</code>. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="http://aws.amazon.com/s3/">Amazon S3</a>, the
   *           ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null.
   *           The <code>SourceURI</code> of your DataIntegration must use the following format:
   *             <code>s3://your_s3_bucket_name</code>.</p>
   *                <important>
   *                   <p>The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services
   *             principal <code>app-integrations.amazonaws.com</code> to perform
   *               <code>s3:ListBucket</code>, <code>s3:GetObject</code>, and
   *               <code>s3:GetBucketLocation</code> against the bucket.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  appIntegrationArn: string | undefined;

  /**
   * <p>The fields from the source that are made available to your agents in Amazon Q in Connect. Optional if
   *       ObjectConfiguration is included in the provided DataIntegration. </p>
   *          <ul>
   *             <li>
   *                <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, you must include at least <code>Id</code>,
   *             <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>,
   *             <code>PublishStatus</code>, and <code>IsDeleted</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, you must include at least <code>number</code>,
   *             <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>,
   *           and <code>active</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/">
   *             Zendesk</a>, you must include at least <code>id</code>, <code>title</code>,
   *             <code>updated_at</code>, and <code>draft</code>. </p>
   *             </li>
   *          </ul>
   *          <p>Make sure to include additional fields. These fields are indexed and used to source
   *       recommendations. </p>
   * @public
   */
  objectFields?: string[] | undefined;
}

/**
 * <p>The data that is input into Amazon Q in Connect as a result of the assistant association.</p>
 * @public
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationInputData {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationInputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseId !== undefined) return visitor.knowledgeBaseId(value.knowledgeBaseId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AssociationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 */
export interface CreateAssistantAssociationRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Association information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseAssociationData {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * <p>The data that is output as a result of the assistant association.</p>
 * @public
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationOutputData {
  /**
   * <p>The knowledge base where output data is sent.</p>
   * @public
   */
  export interface KnowledgeBaseAssociationMember {
    knowledgeBaseAssociation: KnowledgeBaseAssociationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseAssociation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseAssociation: (value: KnowledgeBaseAssociationData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationOutputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseAssociation !== undefined)
      return visitor.knowledgeBaseAssociation(value.knowledgeBaseAssociation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about the assistant association.</p>
 * @public
 */
export interface AssistantAssociationData {
  /**
   * <p>The identifier of the assistant association.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>A union type that currently has a single argument, the knowledge base ID.</p>
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationResponse {}

/**
 * @public
 */
export interface GetAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * <p>Summary information about the assistant association.</p>
 * @public
 */
export interface AssistantAssociationSummary {
  /**
   * <p>The identifier of the assistant association.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>The association data.</p>
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsResponse {
  /**
   * <p>Summary information about assistant associations.</p>
   * @public
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration information for the customer managed key used for encryption.</p>
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The customer managed key used for encryption. For more information about setting up a
   *         customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.
   *       For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssistantType = {
  AGENT: "AGENT",
} as const;

/**
 * @public
 */
export type AssistantType = (typeof AssistantType)[keyof typeof AssistantType];

/**
 * @public
 */
export interface CreateAssistantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The description of the assistant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>The customer managed key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code> kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const AssistantCapabilityType = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type AssistantCapabilityType = (typeof AssistantCapabilityType)[keyof typeof AssistantCapabilityType];

/**
 * <p>The capability configuration for an Amazon Q in Connect assistant. </p>
 * @public
 */
export interface AssistantCapabilityConfiguration {
  /**
   * <p>The type of Amazon Q in Connect assistant capability. </p>
   * @public
   */
  type?: AssistantCapabilityType | undefined;
}

/**
 * <p>The configuration information for the Amazon Q in Connect assistant integration.</p>
 * @public
 */
export interface AssistantIntegrationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssistantStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AssistantStatus = (typeof AssistantStatus)[keyof typeof AssistantStatus];

/**
 * <p>The assistant data.</p>
 * @public
 */
export interface AssistantData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The status of the assistant.</p>
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The configuration information for the Amazon Q in Connect assistant integration.</p>
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;

  /**
   * <p>The configuration information for the Amazon Q in Connect assistant capability. </p>
   * @public
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration | undefined;

  /**
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is
   *       set on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;
}

/**
 * @public
 */
export interface CreateAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantResponse {}

/**
 * @public
 */
export interface GetAssistantRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made
   *       available before returning. If a recommendation is available, the call returns sooner than
   *         <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the
   *       call returns successfully with an empty list.</p>
   * @public
   */
  waitTimeSeconds?: number | undefined;

  /**
   * <p>The token for the next set of chunks. Use the value returned in the previous response in
   *       the next request to retrieve the next set of chunks.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RelevanceLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type RelevanceLevel = (typeof RelevanceLevel)[keyof typeof RelevanceLevel];

/**
 * <p>Details about the source content ranking data.</p>
 * @public
 */
export interface RankingData {
  /**
   * <p>The relevance level of the recommendation.</p>
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * <p>The relevance score of the content.</p>
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;
}

/**
 * <p>Offset specification to describe highlighting of document excerpts for rendering search
 *       results and recommendations.</p>
 * @public
 */
export interface Highlight {
  /**
   * <p>The offset for the start of the highlight.</p>
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * <p>The offset for the end of the highlight.</p>
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * <p>The text of the document.</p>
 * @public
 */
export interface DocumentText {
  /**
   * <p>Text in the document.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Highlights in the document text.</p>
   * @public
   */
  highlights?: Highlight[] | undefined;
}

/**
 * <p>Details about the source content text data.</p>
 * @public
 */
export interface TextData {
  /**
   * <p>The text of the document.</p>
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * <p>The text of the document.</p>
   * @public
   */
  excerpt?: DocumentText | undefined;
}

/**
 * <p>Details about the content data.</p>
 * @public
 */
export interface ContentDataDetails {
  /**
   * <p>Details about the content text data.</p>
   * @public
   */
  textData: TextData | undefined;

  /**
   * <p>Details about the content ranking data.</p>
   * @public
   */
  rankingData: RankingData | undefined;
}

/**
 * <p>Details about the detected intent.</p>
 * @public
 */
export interface IntentDetectedDataDetails {
  /**
   * <p>The detected intent.</p>
   * @public
   */
  intent: string | undefined;

  /**
   * <p>The identifier of the detected intent.</p>
   * @public
   */
  intentId: string | undefined;
}

/**
 * <p>Contains information about where the text with a citation begins and ends in the generated
 *       output.</p>
 * @public
 */
export interface CitationSpan {
  /**
   * <p>Where the text with a citation starts in the generated output.</p>
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * <p>Where the text with a citation ends in the generated output.</p>
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceContentType = {
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type SourceContentType = (typeof SourceContentType)[keyof typeof SourceContentType];

/**
 * <p>Details about the source content data.</p>
 * @public
 */
export interface SourceContentDataDetails {
  /**
   * <p>The identifier of the source content.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the source content.</p>
   * @public
   */
  type: SourceContentType | undefined;

  /**
   * <p> Details about the source content text data.</p>
   * @public
   */
  textData: TextData | undefined;

  /**
   * <p>Details about the source content ranking data.</p>
   * @public
   */
  rankingData: RankingData | undefined;

  /**
   * <p>Contains information about where the text with a citation begins and ends in the generated
   *       output.</p>
   * @public
   */
  citationSpan?: CitationSpan | undefined;
}

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  WEB_CRAWLER: "WEB_CRAWLER",
} as const;

/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * <p>Reference information about the content.</p>
 * @public
 */
export interface ContentReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn?: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn?: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId?: string | undefined;

  /**
   * <p>The web URL of the source content.</p>
   * @public
   */
  sourceURL?: string | undefined;

  /**
   * <p>The type of reference content.</p>
   * @public
   */
  referenceType?: ReferenceType | undefined;
}

/**
 * <p>Reference information about generative content.</p>
 * @public
 */
export interface GenerativeReference {
  /**
   * <p>The identifier of the LLM model. </p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p> The identifier of the LLM model. </p>
   * @public
   */
  generationId?: string | undefined;
}

/**
 * <p>Reference data.</p>
 * @public
 */
export type DataReference =
  | DataReference.ContentReferenceMember
  | DataReference.GenerativeReferenceMember
  | DataReference.$UnknownMember;

/**
 * @public
 */
export namespace DataReference {
  /**
   * <p>Reference information about the content.</p>
   * @public
   */
  export interface ContentReferenceMember {
    contentReference: ContentReference;
    generativeReference?: never;
    $unknown?: never;
  }

  /**
   * <p>Reference information about the generative content.</p>
   * @public
   */
  export interface GenerativeReferenceMember {
    contentReference?: never;
    generativeReference: GenerativeReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentReference?: never;
    generativeReference?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentReference: (value: ContentReference) => T;
    generativeReference: (value: GenerativeReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataReference, visitor: Visitor<T>): T => {
    if (value.contentReference !== undefined) return visitor.contentReference(value.contentReference);
    if (value.generativeReference !== undefined) return visitor.generativeReference(value.generativeReference);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The document.</p>
 * @public
 */
export interface Document {
  /**
   * <p>A reference to the content resource.</p>
   * @public
   */
  contentReference: ContentReference | undefined;

  /**
   * <p>The title of the document.</p>
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * <p>The excerpt from the document.</p>
   * @public
   */
  excerpt?: DocumentText | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  BLOCKED_GENERATIVE_ANSWER_CHUNK: "BLOCKED_GENERATIVE_ANSWER_CHUNK",
  BLOCKED_INTENT_ANSWER_CHUNK: "BLOCKED_INTENT_ANSWER_CHUNK",
  DETECTED_INTENT: "DETECTED_INTENT",
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  GENERATIVE_ANSWER_CHUNK: "GENERATIVE_ANSWER_CHUNK",
  GENERATIVE_RESPONSE: "GENERATIVE_RESPONSE",
  INTENT_ANSWER_CHUNK: "INTENT_ANSWER_CHUNK",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * <p>Data associated with the QUERY RecommendationTriggerType.</p>
 * @public
 */
export interface QueryRecommendationTriggerData {
  /**
   * <p>The text associated with the recommendation trigger.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>A union type containing information related to the trigger.</p>
 * @public
 */
export type RecommendationTriggerData =
  | RecommendationTriggerData.QueryMember
  | RecommendationTriggerData.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationTriggerData {
  /**
   * <p>Data associated with the QUERY RecommendationTriggerType.</p>
   * @public
   */
  export interface QueryMember {
    query: QueryRecommendationTriggerData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    query?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    query: (value: QueryRecommendationTriggerData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RecommendationTriggerData, visitor: Visitor<T>): T => {
    if (value.query !== undefined) return visitor.query(value.query);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RecommendationSourceType = {
  ISSUE_DETECTION: "ISSUE_DETECTION",
  OTHER: "OTHER",
  RULE_EVALUATION: "RULE_EVALUATION",
} as const;

/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

/**
 * @public
 * @enum
 */
export const RecommendationTriggerType = {
  GENERATIVE: "GENERATIVE",
  QUERY: "QUERY",
} as const;

/**
 * @public
 */
export type RecommendationTriggerType = (typeof RecommendationTriggerType)[keyof typeof RecommendationTriggerType];

/**
 * <p>A recommendation trigger provides context on the event that produced the referenced
 *       recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a
 *       single RecommendationTrigger.</p>
 * @public
 */
export interface RecommendationTrigger {
  /**
   * <p>The identifier of the recommendation trigger.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of recommendation trigger.</p>
   * @public
   */
  type: RecommendationTriggerType | undefined;

  /**
   * <p>The source of the recommendation trigger.</p>
   *          <ul>
   *             <li>
   *                <p>ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens
   *           issue.</p>
   *             </li>
   *             <li>
   *                <p>RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens
   *           rule.</p>
   *             </li>
   *          </ul>
   * @public
   */
  source: RecommendationSourceType | undefined;

  /**
   * <p>A union type containing information related to the trigger.</p>
   * @public
   */
  data: RecommendationTriggerData | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about the assistant.</p>
 * @public
 */
export interface AssistantSummary {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The status of the assistant.</p>
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * <p>The description of the assistant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The configuration information for the Amazon Q in Connect assistant integration.</p>
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;

  /**
   * <p>The configuration information for the Amazon Q in Connect assistant capability. </p>
   * @public
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration | undefined;

  /**
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is
   *       set on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;
}

/**
 * @public
 */
export interface ListAssistantsResponse {
  /**
   * <p>Information about the assistants.</p>
   * @public
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * <p>An error occurred when creating a recommendation.</p>
 * @public
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * <p>The identifier of the recommendation that is in error.</p>
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * <p>A recommendation is causing an error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedResponse {
  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * <p>The identifiers of recommendations that are causing errors.</p>
   * @public
   */
  errors?: NotifyRecommendationsReceivedError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Relevance = {
  HELPFUL: "HELPFUL",
  NOT_HELPFUL: "NOT_HELPFUL",
} as const;

/**
 * @public
 */
export type Relevance = (typeof Relevance)[keyof typeof Relevance];

/**
 * <p>The feedback information for a generative target type.</p>
 * @public
 */
export interface GenerativeContentFeedbackData {
  /**
   * <p>The relevance of the feedback.</p>
   * @public
   */
  relevance: Relevance | undefined;
}

/**
 * <p>Information about the feedback.</p>
 * @public
 */
export type ContentFeedbackData =
  | ContentFeedbackData.GenerativeContentFeedbackDataMember
  | ContentFeedbackData.$UnknownMember;

/**
 * @public
 */
export namespace ContentFeedbackData {
  /**
   * <p>Information about the feedback for a generative target type.</p>
   * @public
   */
  export interface GenerativeContentFeedbackDataMember {
    generativeContentFeedbackData: GenerativeContentFeedbackData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    generativeContentFeedbackData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    generativeContentFeedbackData: (value: GenerativeContentFeedbackData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentFeedbackData, visitor: Visitor<T>): T => {
    if (value.generativeContentFeedbackData !== undefined)
      return visitor.generativeContentFeedbackData(value.generativeContentFeedbackData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  RECOMMENDATION: "RECOMMENDATION",
  RESULT: "RESULT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the feedback target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The type of the feedback target.</p>
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * <p>Information about the feedback provided.</p>
   * @public
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * @public
 */
export interface PutFeedbackResponse {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The identifier of the feedback target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The type of the feedback target.</p>
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * <p>Information about the feedback provided.</p>
   * @public
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryConditionComparisonOperator = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type QueryConditionComparisonOperator =
  (typeof QueryConditionComparisonOperator)[keyof typeof QueryConditionComparisonOperator];

/**
 * @public
 * @enum
 */
export const QueryConditionFieldName = {
  RESULT_TYPE: "RESULT_TYPE",
} as const;

/**
 * @public
 */
export type QueryConditionFieldName = (typeof QueryConditionFieldName)[keyof typeof QueryConditionFieldName];

/**
 * <p>The condition for the query.</p>
 * @public
 */
export interface QueryConditionItem {
  /**
   * <p> The name of the field for query condition to query on.</p>
   * @public
   */
  field: QueryConditionFieldName | undefined;

  /**
   * <p>The comparison operator for query condition to query on.</p>
   * @public
   */
  comparator: QueryConditionComparisonOperator | undefined;

  /**
   * <p>The value for the query condition to query on.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Information about how to query content.</p>
 * @public
 */
export type QueryCondition = QueryCondition.SingleMember | QueryCondition.$UnknownMember;

/**
 * @public
 */
export namespace QueryCondition {
  /**
   * <p>The condition for the query.</p>
   * @public
   */
  export interface SingleMember {
    single: QueryConditionItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    single?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    single: (value: QueryConditionItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QueryCondition, visitor: Visitor<T>): T => {
    if (value.single !== undefined) return visitor.single(value.single);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about the Amazon Q intent.</p>
 * @public
 */
export interface IntentInputData {
  /**
   * <p>The identifier of the Amazon Q intent.</p>
   * @public
   */
  intentId: string | undefined;
}

/**
 * <p>Information about the text to search for.</p>
 * @public
 */
export interface QueryTextInputData {
  /**
   * <p>The text to search for.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Input information for the query.</p>
 * @public
 */
export type QueryInputData =
  | QueryInputData.IntentInputDataMember
  | QueryInputData.QueryTextInputDataMember
  | QueryInputData.$UnknownMember;

/**
 * @public
 */
export namespace QueryInputData {
  /**
   * <p>Input information for the query.</p>
   * @public
   */
  export interface QueryTextInputDataMember {
    queryTextInputData: QueryTextInputData;
    intentInputData?: never;
    $unknown?: never;
  }

  /**
   * <p>Input information for the intent.</p>
   * @public
   */
  export interface IntentInputDataMember {
    queryTextInputData?: never;
    intentInputData: IntentInputData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    queryTextInputData?: never;
    intentInputData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    queryTextInputData: (value: QueryTextInputData) => T;
    intentInputData: (value: IntentInputData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QueryInputData, visitor: Visitor<T>): T => {
    if (value.queryTextInputData !== undefined) return visitor.queryTextInputData(value.queryTextInputData);
    if (value.intentInputData !== undefined) return visitor.intentInputData(value.intentInputData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface QueryAssistantRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The text to search for.</p>
   * @public
   */
  queryText?: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect session. Can be either the ID or the ARN. URLs cannot
   *       contain the ARN.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Information about how to query content.</p>
   * @public
   */
  queryCondition?: QueryCondition[] | undefined;

  /**
   * <p>Information about the query.</p>
   * @public
   */
  queryInputData?: QueryInputData | undefined;

  /**
   * <p>The search type to be used against the Knowledge Base for this request. The values can be
   *         <code>SEMANTIC</code> which uses vector embeddings or <code>HYBRID</code> which use vector
   *       embeddings and raw text.</p>
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  BLOCKED_GENERATIVE_ANSWER_CHUNK: "BLOCKED_GENERATIVE_ANSWER_CHUNK",
  BLOCKED_INTENT_ANSWER_CHUNK: "BLOCKED_INTENT_ANSWER_CHUNK",
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  GENERATIVE_ANSWER_CHUNK: "GENERATIVE_ANSWER_CHUNK",
  INTENT_ANSWER: "INTENT_ANSWER",
  INTENT_ANSWER_CHUNK: "INTENT_ANSWER_CHUNK",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * <p>The request reached the service more than 15 minutes after the date stamp on the request
 *       or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or
 *       the date stamp on the request is more than 15 minutes in the future.</p>
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of the AI Agent being removed for use by default from the Amazon Q in Connect
   *       Assistant.</p>
   * @public
   */
  aiAgentType: AIAgentType | undefined;
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentResponse {}

/**
 * @public
 * @enum
 */
export const FilterField = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type FilterField = (typeof FilterField)[keyof typeof FilterField];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * <p>A search filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The field on which to filter.</p>
   * @public
   */
  field: FilterField | undefined;

  /**
   * <p>The operator to use for comparing the field’s value with the provided value.</p>
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * <p>The desired field value on which to filter.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The search expression.</p>
 * @public
 */
export interface SearchExpression {
  /**
   * <p>The search expression filters.</p>
   * @public
   */
  filters: Filter[] | undefined;
}

/**
 * @public
 */
export interface SearchSessionsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * <p>Summary information about the session.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * @public
 */
export interface SearchSessionsResponse {
  /**
   * <p>Summary information about the sessions.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the session.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions. </p>
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that
   *       should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;
}

/**
 * <p>The configuration information for the session integration.</p>
 * @public
 */
export interface SessionIntegrationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * <p>Information about the session.</p>
 * @public
 */
export interface SessionData {
  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the session.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the session.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the session integration.</p>
   * @public
   */
  integrationConfiguration?: SessionIntegrationConfiguration | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions.</p>
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that
   *       should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The origin of the Session to be listed. <code>SYSTEM</code> for a default Session created
   *       by Amazon Q in Connect or <code>CUSTOMER</code> for a Session created by calling <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_CreateSession.html">CreateSession</a> API.</p>
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface GetNextMessageRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The token for the next message. Use the value returned in the SendMessage or previous
   *       response in the next request to retrieve the next message.</p>
   * @public
   */
  nextMessageToken: string | undefined;
}

/**
 * <p>A union type that specifies the data stored on the session.</p>
 * @public
 */
export type RuntimeSessionDataValue =
  | RuntimeSessionDataValue.StringValueMember
  | RuntimeSessionDataValue.$UnknownMember;

/**
 * @public
 */
export namespace RuntimeSessionDataValue {
  /**
   * <p>The string value of the data stored on the session.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuntimeSessionDataValue, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The list of key-value pairs that are stored on the session.</p>
 * @public
 */
export interface RuntimeSessionData {
  /**
   * <p>The key of the data stored on the session.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the data stored on the session.</p>
   * @public
   */
  value: RuntimeSessionDataValue | undefined;
}

/**
 * @public
 * @enum
 */
export const ConversationStatusReason = {
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ConversationStatusReason = (typeof ConversationStatusReason)[keyof typeof ConversationStatusReason];

/**
 * @public
 * @enum
 */
export const ConversationStatus = {
  CLOSED: "CLOSED",
  PROCESSING: "PROCESSING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ConversationStatus = (typeof ConversationStatus)[keyof typeof ConversationStatus];

/**
 * <p>The conversation state associated to a message.</p>
 * @public
 */
export interface ConversationState {
  /**
   * <p>The status of the conversation state.</p>
   * @public
   */
  status: ConversationStatus | undefined;

  /**
   * <p>The reason of the conversation state.</p>
   * @public
   */
  reason?: ConversationStatusReason | undefined;
}

/**
 * @public
 * @enum
 */
export const Participant = {
  AGENT: "AGENT",
  BOT: "BOT",
  CUSTOMER: "CUSTOMER",
} as const;

/**
 * @public
 */
export type Participant = (typeof Participant)[keyof typeof Participant];

/**
 * <p>The message data in text type.</p>
 * @public
 */
export interface TextMessage {
  /**
   * <p>The value of the message data in text type.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The message data.</p>
 * @public
 */
export type MessageData = MessageData.TextMember | MessageData.$UnknownMember;

/**
 * @public
 */
export namespace MessageData {
  /**
   * <p>The message data in text type.</p>
   * @public
   */
  export interface TextMember {
    text: TextMessage;
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
    text: (value: TextMessage) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MessageData, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The message output.</p>
 * @public
 */
export interface MessageOutput {
  /**
   * <p>The value of a message data.</p>
   * @public
   */
  value: MessageData | undefined;

  /**
   * <p>The identifier of a message.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The participant of a message.</p>
   * @public
   */
  participant: Participant | undefined;

  /**
   * <p>The timestamp of a message.</p>
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 */
export interface GetNextMessageResponse {
  /**
   * <p>The type of message response.</p>
   * @public
   */
  type: MessageType | undefined;

  /**
   * <p>The message response to the requested message.</p>
   * @public
   */
  response: MessageOutput | undefined;

  /**
   * <p>The identifier of the submitted message.</p>
   * @public
   */
  requestMessageId: string | undefined;

  /**
   * <p>The state of current conversation.</p>
   * @public
   */
  conversationState: ConversationState | undefined;

  /**
   * <p>The token for the next message.</p>
   * @public
   */
  nextMessageToken?: string | undefined;

  /**
   * <p>The conversation data stored on an Amazon Q in Connect Session.</p>
   * @public
   */
  conversationSessionData?: RuntimeSessionData[] | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * <p>The message information.</p>
   * @public
   */
  messages: MessageOutput[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration for a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a>
 *       request.</p>
 * @public
 */
export interface MessageConfiguration {
  /**
   * <p>Generates a filler response when tool selection is <code>QUESTION</code>.</p>
   * @public
   */
  generateFillerMessage?: boolean | undefined;
}

/**
 * <p>The conversation history data to included in conversation context data before the Amazon Q
 *       in Connect session.</p>
 * @public
 */
export interface SelfServiceConversationHistory {
  /**
   * <p>The number of turn of the conversation history data.</p>
   * @public
   */
  turnNumber: number | undefined;

  /**
   * <p>The input transcript of the conversation history data.</p>
   * @public
   */
  inputTranscript?: string | undefined;

  /**
   * <p>The bot response of the conversation history data.</p>
   * @public
   */
  botResponse?: string | undefined;
}

/**
 * <p>The conversation context to include in SendMessage.</p>
 * @public
 */
export interface ConversationContext {
  /**
   * <p>The self service conversation history before the Amazon Q in Connect session.</p>
   * @public
   */
  selfServiceConversationHistory: SelfServiceConversationHistory[] | undefined;
}

/**
 * <p>The message input.</p>
 * @public
 */
export interface MessageInput {
  /**
   * <p>The message input value.</p>
   * @public
   */
  value: MessageData | undefined;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The message type.</p>
   * @public
   */
  type: MessageType | undefined;

  /**
   * <p>The message data to submit to the Amazon Q in Connect session.</p>
   * @public
   */
  message: MessageInput | undefined;

  /**
   * <p>The conversation context before the Amazon Q in Connect session.</p>
   * @public
   */
  conversationContext?: ConversationContext | undefined;

  /**
   * <p>The configuration of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a>
   *       request.</p>
   * @public
   */
  configuration?: MessageConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request. If not provided, the AWS SDK populates this field.For more information about
   *       idempotency, see Making retries safe with idempotent APIs.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * <p>The identifier of the submitted message.</p>
   * @public
   */
  requestMessageId: string | undefined;

  /**
   * <p>The configuration of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a>
   *       request.</p>
   * @public
   */
  configuration?: MessageConfiguration | undefined;

  /**
   * <p>The token for the next message, used by GetNextMessage.</p>
   * @public
   */
  nextMessageToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions.</p>
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that
   *       should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;
}

/**
 * @public
 */
export interface UpdateSessionResponse {
  /**
   * <p>Information about the session.</p>
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionDataNamespace = {
  Custom: "Custom",
} as const;

/**
 * @public
 */
export type SessionDataNamespace = (typeof SessionDataNamespace)[keyof typeof SessionDataNamespace];

/**
 * @public
 */
export interface UpdateSessionDataRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the
   *       ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The namespace into which the session data is stored. Supported namespaces are:
   *       Custom</p>
   * @public
   */
  namespace?: SessionDataNamespace | undefined;

  /**
   * <p>The data stored on the Amazon Q in Connect Session.</p>
   * @public
   */
  data: RuntimeSessionData[] | undefined;
}

/**
 * @public
 */
export interface UpdateSessionDataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The namespace into which the session data is stored. Supported namespaces are:
   *       Custom</p>
   * @public
   */
  namespace: SessionDataNamespace | undefined;

  /**
   * <p>Data stored in the session.</p>
   * @public
   */
  data: RuntimeSessionData[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssistantAIAgentRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs
   *       cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of the AI Agent being updated for use by default on the Amazon Q in Connect
   *       Assistant.</p>
   * @public
   */
  aiAgentType: AIAgentType | undefined;

  /**
   * <p>The configuration of the AI Agent being updated for use by default on the Amazon Q in
   *       Connect Assistant.</p>
   * @public
   */
  configuration: AIAgentConfigurationData | undefined;
}

/**
 * @public
 */
export interface UpdateAssistantAIAgentResponse {
  /**
   * <p>The assistant data.</p>
   * @public
   */
  assistant?: AssistantData | undefined;
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
export interface BedrockFoundationModelConfigurationForParsing {
  /**
   * <p>The ARN of the foundation model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Instructions for interpreting the contents of a document.</p>
   * @public
   */
  parsingPrompt?: ParsingPrompt | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelSubtype = {
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;

/**
 * @public
 */
export type ChannelSubtype = (typeof ChannelSubtype)[keyof typeof ChannelSubtype];

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
 * <p>Configurations for when you choose fixed-size chunking. If you set the
 *         <code>chunkingStrategy</code> as <code>NONE</code>, exclude this field.</p>
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
 * <p>Token settings for each layer.</p>
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
 * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking
 *       splits documents into layers of chunks where the first layer contains large chunks, and the
 *       second layer contains smaller chunks derived from the first layer.</p>
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
 * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a
 *       document into smaller documents based on groups of similar content derived from the text with
 *       natural language processing.</p>
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
 * <p>Details about how to chunk the documents in the data source. A chunk refers to an excerpt
 *       from a data source that is returned when the knowledge base that it belongs to is
 *       queried.</p>
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * <p>Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a
   *       data source that is returned when the knowledge base that it belongs to is queried. You have
   *       the following options for chunking your data. If you opt for <code>NONE</code>, then you may
   *       want to pre-process your files by splitting them up such that each file corresponds to a
   *       chunk.</p>
   * @public
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * <p>Configurations for when you choose fixed-size chunking. If you set the
   *         <code>chunkingStrategy</code> as <code>NONE</code>, exclude this field.</p>
   * @public
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration | undefined;

  /**
   * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking
   *       splits documents into layers of chunks where the first layer contains large chunks, and the
   *       second layer contains smaller chunks derived from the first layer.</p>
   * @public
   */
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration | undefined;

  /**
   * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a
   *       document into smaller documents based on groups of similar content derived from the text with
   *       natural language processing.</p>
   * @public
   */
  semanticChunkingConfiguration?: SemanticChunkingConfiguration | undefined;
}

/**
 * <p>The configuration information of the Amazon Connect data source.</p>
 * @public
 */
export interface ConnectConfiguration {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   * @public
   */
  instanceId?: string | undefined;
}

/**
 * <p>The configuration information of the external data source.</p>
 * @public
 */
export type Configuration = Configuration.ConnectConfigurationMember | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * <p>The configuration information of the Amazon Connect data source.</p>
   * @public
   */
  export interface ConnectConfigurationMember {
    connectConfiguration: ConnectConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    connectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    connectConfiguration: (value: ConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.connectConfiguration !== undefined) return visitor.connectConfiguration(value.connectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The contents of a content association.</p>
 * @public
 */
export type ContentAssociationContents =
  | ContentAssociationContents.AmazonConnectGuideAssociationMember
  | ContentAssociationContents.$UnknownMember;

/**
 * @public
 */
export namespace ContentAssociationContents {
  /**
   * <p>The data of the step-by-step guide association.</p>
   * @public
   */
  export interface AmazonConnectGuideAssociationMember {
    amazonConnectGuideAssociation: AmazonConnectGuideAssociationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    amazonConnectGuideAssociation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    amazonConnectGuideAssociation: (value: AmazonConnectGuideAssociationData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentAssociationContents, visitor: Visitor<T>): T => {
    if (value.amazonConnectGuideAssociation !== undefined)
      return visitor.amazonConnectGuideAssociation(value.amazonConnectGuideAssociation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ContentAssociationType = {
  AMAZON_CONNECT_GUIDE: "AMAZON_CONNECT_GUIDE",
} as const;

/**
 * @public
 */
export type ContentAssociationType = (typeof ContentAssociationType)[keyof typeof ContentAssociationType];

/**
 * @public
 */
export interface CreateContentAssociationRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  association: ContentAssociationContents | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about the content association.</p>
 * @public
 */
export interface ContentAssociationData {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content association.</p>
   * @public
   */
  contentAssociationArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * <p>The content association.</p>
   * @public
   */
  associationData: ContentAssociationContents | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateContentAssociationResponse {
  /**
   * <p>The association between Amazon Q in Connect content and another resource.</p>
   * @public
   */
  contentAssociation?: ContentAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteContentAssociationRequest {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContentAssociationResponse {}

/**
 * @public
 */
export interface GetContentAssociationRequest {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetContentAssociationResponse {
  /**
   * <p>The association between Amazon Q in Connect content and another resource.</p>
   * @public
   */
  contentAssociation?: ContentAssociationData | undefined;
}

/**
 * @public
 */
export interface ListContentAssociationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;
}

/**
 * <p>Summary information about a content association.</p>
 * @public
 */
export interface ContentAssociationSummary {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content association.</p>
   * @public
   */
  contentAssociationArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * <p>The content association.</p>
   * @public
   */
  associationData: ContentAssociationContents | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListContentAssociationsResponse {
  /**
   * <p>Summary information about content associations.</p>
   * @public
   */
  contentAssociationSummaries: ContentAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContentRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_SearchContent.html">SearchContent</a>
   *       API.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting
   *       this argument overrides it for this piece of content.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ContentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;

/**
 * @public
 */
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];

/**
 * <p>Information about the content.</p>
 * @public
 */
export interface ContentData {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the content revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The URI of the content.</p>
   * @public
   */
  linkOutUri?: string | undefined;

  /**
   * <p>The URL of the content.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;
}

/**
 * @public
 */
export interface CreateContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface DeleteContentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContentResponse {}

/**
 * @public
 */
export interface GetContentRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>Summary information about the content.</p>
 * @public
 */
export interface ContentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision of the content.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryResponse {
  /**
   * <p>The content summary.</p>
   * @public
   */
  contentSummary?: ContentSummary | undefined;
}

/**
 * @public
 */
export interface ListContentsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListContentsResponse {
  /**
   * <p>Information about the content.</p>
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateContentRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call
   *       to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or
   *         <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure
   *       content was not modified since it was last read. If it has been modified, this API throws a
   *         <code>PreconditionFailedException</code>.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument
   *       overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>,
   *       exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   * @public
   */
  removeOverrideLinkOutUri?: boolean | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For
   *       example, when synchronizing data between an external system and Amazon Q in Connect, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>. </p>
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 * @enum
 */
export const ContentDisposition = {
  ATTACHMENT: "ATTACHMENT",
} as const;

/**
 * @public
 */
export type ContentDisposition = (typeof ContentDisposition)[keyof typeof ContentDisposition];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  CUSTOM: "CUSTOM",
  EXTERNAL: "EXTERNAL",
  MANAGED: "MANAGED",
  MESSAGE_TEMPLATES: "MESSAGE_TEMPLATES",
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;

/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * <p>Information about how to render the content.</p>
 * @public
 */
export interface RenderingConfiguration {
  /**
   * <p>A URI template containing exactly one variable in <code>$\{variableName\} </code>format.
   *       This can only be set for <code>EXTERNAL</code> knowledge bases. For Salesforce, ServiceNow,
   *       and Zendesk, the variable must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Salesforce: <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>,
   *             <code>Title</code>, <code>PublishStatus</code>, or <code>IsDeleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ServiceNow: <code>number</code>, <code>short_description</code>,
   *             <code>sys_mod_count</code>, <code>workflow_state</code>, or <code>active</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Zendesk: <code>id</code>, <code>title</code>, <code>updated_at</code>, or
   *             <code>draft</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
   * @public
   */
  templateUri?: string | undefined;
}

/**
 * <p>The configuration of crawl limits for the web URLs.</p>
 * @public
 */
export interface WebCrawlerLimits {
  /**
   * <p>Rate of web URLs retrieved per minute.</p>
   * @public
   */
  rateLimit?: number | undefined;
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
 * <p>A URL for crawling.</p>
 * @public
 */
export interface SeedUrl {
  /**
   * <p>URL for crawling</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>The configuration of the URL/URLs for the web content that you want to crawl. You should
 *       be authorized to crawl the URLs.</p>
 * @public
 */
export interface UrlConfiguration {
  /**
   * <p>List of URLs for crawling.</p>
   * @public
   */
  seedUrls?: SeedUrl[] | undefined;
}

/**
 * <p>The configuration details for the web data source.</p>
 * @public
 */
export interface WebCrawlerConfiguration {
  /**
   * <p>The configuration of the URL/URLs for the web content that you want to crawl. You should
   *       be authorized to crawl the URLs.</p>
   * @public
   */
  urlConfiguration: UrlConfiguration | undefined;

  /**
   * <p>The configuration of crawl limits for the web URLs.</p>
   * @public
   */
  crawlerLimits?: WebCrawlerLimits | undefined;

  /**
   * <p>A list of one or more inclusion regular expression patterns to include certain URLs. If
   *       you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion
   *       filter takes precedence and the web content of the URL isn’t crawled.</p>
   * @public
   */
  inclusionFilters?: string[] | undefined;

  /**
   * <p>A list of one or more exclusion regular expression patterns to exclude certain URLs. If
   *       you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion
   *       filter takes precedence and the web content of the URL isn’t crawled.</p>
   * @public
   */
  exclusionFilters?: string[] | undefined;

  /**
   * <p>The scope of what is crawled for your URLs. You can choose to crawl only web pages that
   *       belong to the same host or primary domain. For example, only web pages that contain the seed
   *       URL <code>https://docs.aws.amazon.com/bedrock/latest/userguide/</code> and no other domains.
   *       You can choose to include sub domains in addition to the host or primary domain. For example,
   *       web pages that contain <code>aws.amazon.com</code> can also include sub domain
   *         <code>docs.aws.amazon.com</code>.</p>
   * @public
   */
  scope?: WebScopeType | undefined;
}

/**
 * <p>Source configuration for managed resources.</p>
 * @public
 */
export type ManagedSourceConfiguration =
  | ManagedSourceConfiguration.WebCrawlerConfigurationMember
  | ManagedSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ManagedSourceConfiguration {
  /**
   * <p>Configuration data for web crawler data source.</p>
   * @public
   */
  export interface WebCrawlerConfigurationMember {
    webCrawlerConfiguration: WebCrawlerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    webCrawlerConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    webCrawlerConfiguration: (value: WebCrawlerConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ManagedSourceConfiguration, visitor: Visitor<T>): T => {
    if (value.webCrawlerConfiguration !== undefined)
      return visitor.webCrawlerConfiguration(value.webCrawlerConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configuration information about the external data source.</p>
 * @public
 */
export type SourceConfiguration =
  | SourceConfiguration.AppIntegrationsMember
  | SourceConfiguration.ManagedSourceConfigurationMember
  | SourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceConfiguration {
  /**
   * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
   * @public
   */
  export interface AppIntegrationsMember {
    appIntegrations: AppIntegrationsConfiguration;
    managedSourceConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Source configuration for managed resources.</p>
   * @public
   */
  export interface ManagedSourceConfigurationMember {
    appIntegrations?: never;
    managedSourceConfiguration: ManagedSourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    appIntegrations?: never;
    managedSourceConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    appIntegrations: (value: AppIntegrationsConfiguration) => T;
    managedSourceConfiguration: (value: ManagedSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SourceConfiguration, visitor: Visitor<T>): T => {
    if (value.appIntegrations !== undefined) return visitor.appIntegrations(value.appIntegrations);
    if (value.managedSourceConfiguration !== undefined)
      return visitor.managedSourceConfiguration(value.managedSourceConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>Settings for parsing document contents. By default, the service converts the contents of
 *       each document into text before splitting it into chunks. To improve processing of PDF files
 *       with tables and images, you can configure the data source to convert the pages of text into
 *       images and use a model to describe the contents of each page.</p>
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
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationForParsing | undefined;
}

/**
 * <p>Contains details about how to ingest the documents in a data source.</p>
 * @public
 */
export interface VectorIngestionConfiguration {
  /**
   * <p>Details about how to chunk the documents in the data source. A chunk refers to an excerpt
   *       from a data source that is returned when the knowledge base that it belongs to is
   *       queried.</p>
   * @public
   */
  chunkingConfiguration?: ChunkingConfiguration | undefined;

  /**
   * <p>A custom parser for data source documents.</p>
   * @public
   */
  parsingConfiguration?: ParsingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content.
   *       EXTERNAL knowledge bases support integrations with third-party systems whose content is
   *       synchronized automatically. </p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL or Managed
   *       knowledge bases.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>Contains details about how to ingest the documents in a data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q in Connect.</p>
   *          <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncStatus = {
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  SYNCING_IN_PROGRESS: "SYNCING_IN_PROGRESS",
  SYNC_FAILED: "SYNC_FAILED",
  SYNC_SUCCESS: "SYNC_SUCCESS",
} as const;

/**
 * @public
 */
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * <p>Information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseData {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge
   *       base. If no content exists in a knowledge base, this value is unset.</p>
   * @public
   */
  lastContentModificationTime?: Date | undefined;

  /**
   * <p>Contains details about how to ingest the documents in a data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * <p>Source configuration information about the knowledge base.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q in Connect. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Status of ingestion on data source.</p>
   * @public
   */
  ingestionStatus?: SyncStatus | undefined;

  /**
   * <p>List of failure reasons on ingestion per file.</p>
   * @public
   */
  ingestionFailureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * <p>The container of the message template body.</p>
 * @public
 */
export type MessageTemplateBodyContentProvider =
  | MessageTemplateBodyContentProvider.ContentMember
  | MessageTemplateBodyContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace MessageTemplateBodyContentProvider {
  /**
   * <p>The content of the message template.</p>
   * @public
   */
  export interface ContentMember {
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MessageTemplateBodyContentProvider, visitor: Visitor<T>): T => {
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The body to use in email messages.</p>
 * @public
 */
export interface EmailMessageTemplateContentBody {
  /**
   * <p>The message body, in plain text format, to use in email messages that are based on the
   *       message template. We recommend using plain text format for email clients that don't render
   *       HTML content and clients that are connected to high-latency networks, such as mobile
   *       devices.</p>
   * @public
   */
  plainText?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The message body, in HTML format, to use in email messages that are based on the message
   *       template. We recommend using HTML format for email clients that render HTML content. You can
   *       include links, formatted text, and more in an HTML message.</p>
   * @public
   */
  html?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The email header to include in email messages.</p>
 * @public
 */
export interface EmailHeader {
  /**
   * <p>The name of the email header.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the email header.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The content of the message template that applies to the email channel subtype.</p>
 * @public
 */
export interface EmailMessageTemplateContent {
  /**
   * <p>The subject line, or title, to use in email messages.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>The body to use in email messages.</p>
   * @public
   */
  body?: EmailMessageTemplateContentBody | undefined;

  /**
   * <p>The email headers to include in email messages.</p>
   * @public
   */
  headers?: EmailHeader[] | undefined;
}

/**
 * <p>The body to use in SMS messages.</p>
 * @public
 */
export interface SMSMessageTemplateContentBody {
  /**
   * <p>The message body to use in SMS messages.</p>
   * @public
   */
  plainText?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The content of the message template that applies to the SMS channel subtype.</p>
 * @public
 */
export interface SMSMessageTemplateContent {
  /**
   * <p>The body to use in SMS messages.</p>
   * @public
   */
  body?: SMSMessageTemplateContentBody | undefined;
}

/**
 * <p>The container of message template content.</p>
 * @public
 */
export type MessageTemplateContentProvider =
  | MessageTemplateContentProvider.EmailMember
  | MessageTemplateContentProvider.SmsMember
  | MessageTemplateContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace MessageTemplateContentProvider {
  /**
   * <p>The content of the message template that applies to the email channel subtype.</p>
   * @public
   */
  export interface EmailMember {
    email: EmailMessageTemplateContent;
    sms?: never;
    $unknown?: never;
  }

  /**
   * <p>The content of the message template that applies to the SMS channel subtype.</p>
   * @public
   */
  export interface SmsMember {
    email?: never;
    sms: SMSMessageTemplateContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    email?: never;
    sms?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    email: (value: EmailMessageTemplateContent) => T;
    sms: (value: SMSMessageTemplateContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MessageTemplateContentProvider, visitor: Visitor<T>): T => {
    if (value.email !== undefined) return visitor.email(value.email);
    if (value.sms !== undefined) return visitor.sms(value.sms);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The customer profile attributes that are used with the message template.</p>
 * @public
 */
export interface CustomerProfileAttributes {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  profileId?: string | undefined;

  /**
   * <p>The ARN of a customer profile.</p>
   * @public
   */
  profileARN?: string | undefined;

  /**
   * <p>The customer's first name.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The customer's middle name.</p>
   * @public
   */
  middleName?: string | undefined;

  /**
   * <p>The customer's last name.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>A unique account number that you have given to the customer.</p>
   * @public
   */
  accountNumber?: string | undefined;

  /**
   * <p>The customer's email address, which has not been specified as a personal or business
   *       address.</p>
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * <p>The customer's phone number, which has not been specified as a mobile, home, or business
   *       number.</p>
   * @public
   */
  phoneNumber?: string | undefined;

  /**
   * <p>Any additional information relevant to the customer's profile.</p>
   * @public
   */
  additionalInformation?: string | undefined;

  /**
   * <p>The customer's party type.</p>
   * @public
   */
  partyType?: string | undefined;

  /**
   * <p>The name of the customer's business.</p>
   * @public
   */
  businessName?: string | undefined;

  /**
   * <p>The customer's birth date.</p>
   * @public
   */
  birthDate?: string | undefined;

  /**
   * <p>The customer's gender.</p>
   * @public
   */
  gender?: string | undefined;

  /**
   * <p>The customer's mobile phone number.</p>
   * @public
   */
  mobilePhoneNumber?: string | undefined;

  /**
   * <p>The customer's mobile phone number.</p>
   * @public
   */
  homePhoneNumber?: string | undefined;

  /**
   * <p>The customer's business phone number.</p>
   * @public
   */
  businessPhoneNumber?: string | undefined;

  /**
   * <p>The customer's business email address.</p>
   * @public
   */
  businessEmailAddress?: string | undefined;

  /**
   * <p>The first line of a customer address.</p>
   * @public
   */
  address1?: string | undefined;

  /**
   * <p>The second line of a customer address.</p>
   * @public
   */
  address2?: string | undefined;

  /**
   * <p>The third line of a customer address.</p>
   * @public
   */
  address3?: string | undefined;

  /**
   * <p>The fourth line of a customer address.</p>
   * @public
   */
  address4?: string | undefined;

  /**
   * <p>The city in which a customer lives.</p>
   * @public
   */
  city?: string | undefined;

  /**
   * <p>The county in which a customer lives.</p>
   * @public
   */
  county?: string | undefined;

  /**
   * <p>The country in which a customer lives.</p>
   * @public
   */
  country?: string | undefined;

  /**
   * <p>The postal code of a customer address.</p>
   * @public
   */
  postalCode?: string | undefined;

  /**
   * <p>The province in which a customer lives.</p>
   * @public
   */
  province?: string | undefined;

  /**
   * <p>The state in which a customer lives.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The first line of a customer’s shipping address.</p>
   * @public
   */
  shippingAddress1?: string | undefined;

  /**
   * <p>The second line of a customer’s shipping address.</p>
   * @public
   */
  shippingAddress2?: string | undefined;

  /**
   * <p>The third line of a customer’s shipping address.</p>
   * @public
   */
  shippingAddress3?: string | undefined;

  /**
   * <p>The fourth line of a customer’s shipping address.</p>
   * @public
   */
  shippingAddress4?: string | undefined;

  /**
   * <p>The city of a customer’s shipping address.</p>
   * @public
   */
  shippingCity?: string | undefined;

  /**
   * <p>The county of a customer’s shipping address.</p>
   * @public
   */
  shippingCounty?: string | undefined;

  /**
   * <p>The country of a customer’s shipping address.</p>
   * @public
   */
  shippingCountry?: string | undefined;

  /**
   * <p>The postal code of a customer’s shipping address.</p>
   * @public
   */
  shippingPostalCode?: string | undefined;

  /**
   * <p>The province of a customer’s shipping address.</p>
   * @public
   */
  shippingProvince?: string | undefined;

  /**
   * <p>The state of a customer’s shipping address.</p>
   * @public
   */
  shippingState?: string | undefined;

  /**
   * <p>The first line of a customer’s mailing address.</p>
   * @public
   */
  mailingAddress1?: string | undefined;

  /**
   * <p>The second line of a customer’s mailing address.</p>
   * @public
   */
  mailingAddress2?: string | undefined;

  /**
   * <p>The third line of a customer’s mailing address.</p>
   * @public
   */
  mailingAddress3?: string | undefined;

  /**
   * <p>The fourth line of a customer’s mailing address.</p>
   * @public
   */
  mailingAddress4?: string | undefined;

  /**
   * <p>The city of a customer’s mailing address.</p>
   * @public
   */
  mailingCity?: string | undefined;

  /**
   * <p>The county of a customer’s mailing address.</p>
   * @public
   */
  mailingCounty?: string | undefined;

  /**
   * <p>The country of a customer’s mailing address.</p>
   * @public
   */
  mailingCountry?: string | undefined;

  /**
   * <p>The postal code of a customer’s mailing address.</p>
   * @public
   */
  mailingPostalCode?: string | undefined;

  /**
   * <p>The province of a customer’s mailing address.</p>
   * @public
   */
  mailingProvince?: string | undefined;

  /**
   * <p>The state of a customer’s mailing address.</p>
   * @public
   */
  mailingState?: string | undefined;

  /**
   * <p>The first line of a customer’s billing address.</p>
   * @public
   */
  billingAddress1?: string | undefined;

  /**
   * <p>The second line of a customer’s billing address.</p>
   * @public
   */
  billingAddress2?: string | undefined;

  /**
   * <p>The third line of a customer’s billing address.</p>
   * @public
   */
  billingAddress3?: string | undefined;

  /**
   * <p>The fourth line of a customer’s billing address.</p>
   * @public
   */
  billingAddress4?: string | undefined;

  /**
   * <p>The city of a customer’s billing address.</p>
   * @public
   */
  billingCity?: string | undefined;

  /**
   * <p>The county of a customer’s billing address.</p>
   * @public
   */
  billingCounty?: string | undefined;

  /**
   * <p>The country of a customer’s billing address.</p>
   * @public
   */
  billingCountry?: string | undefined;

  /**
   * <p>The postal code of a customer’s billing address.</p>
   * @public
   */
  billingPostalCode?: string | undefined;

  /**
   * <p>The province of a customer’s billing address.</p>
   * @public
   */
  billingProvince?: string | undefined;

  /**
   * <p>The state of a customer’s billing address.</p>
   * @public
   */
  billingState?: string | undefined;

  /**
   * <p>The custom attributes in customer profile attributes.</p>
   * @public
   */
  custom?: Record<string, string> | undefined;
}

/**
 * <p>The system endpoint attributes that are used with the message template.</p>
 * @public
 */
export interface SystemEndpointAttributes {
  /**
   * <p>The customer's phone number if used with <code>customerEndpoint</code>, or the number the
   *       customer dialed to call your contact center if used with <code>systemEndpoint</code>.</p>
   * @public
   */
  address?: string | undefined;
}

/**
 * <p>The system attributes that are used with the message template.</p>
 * @public
 */
export interface SystemAttributes {
  /**
   * <p>The name of the task.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The CustomerEndpoint attribute.</p>
   * @public
   */
  customerEndpoint?: SystemEndpointAttributes | undefined;

  /**
   * <p>The SystemEndpoint attribute.</p>
   * @public
   */
  systemEndpoint?: SystemEndpointAttributes | undefined;
}

/**
 * <p>The attributes that are used with the message template.</p>
 * @public
 */
export interface MessageTemplateAttributes {
  /**
   * <p>The system attributes that are used with the message template.</p>
   * @public
   */
  systemAttributes?: SystemAttributes | undefined;

  /**
   * <p>The agent attributes that are used with the message template.</p>
   * @public
   */
  agentAttributes?: AgentAttributes | undefined;

  /**
   * <p>The customer profile attributes that are used with the message template.</p>
   * @public
   */
  customerProfileAttributes?: CustomerProfileAttributes | undefined;

  /**
   * <p>The custom attributes that are used with the message template.</p>
   * @public
   */
  customAttributes?: Record<string, string> | undefined;
}

/**
 * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
 * @public
 */
export interface GroupingConfiguration {
  /**
   * <p>The criteria used for grouping Amazon Q in Connect users.</p>
   *          <p>The following is the list of supported criteria values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RoutingProfileArn</code>: Grouping the users by their <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon
   *             Connect routing profile ARN</a>. User should have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html">SearchRoutingProfile</a> and <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html">DescribeRoutingProfile</a> permissions when setting criteria to this value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  criteria?: string | undefined;

  /**
   * <p>The list of values that define different groups of Amazon Q in Connect users.</p>
   *          <ul>
   *             <li>
   *                <p>When setting <code>criteria</code> to <code>RoutingProfileArn</code>, you need to
   *           provide a list of ARNs of <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing
   *             profiles</a> as values of this parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *       the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template.
   *       This object contains different categories of key-value pairs. Each key defines a variable or
   *       placeholder in the message template. The corresponding value defines the default value for
   *       that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageTemplateAttributeType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  CUSTOMER_PROFILE: "CUSTOMER_PROFILE",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type MessageTemplateAttributeType =
  (typeof MessageTemplateAttributeType)[keyof typeof MessageTemplateAttributeType];

/**
 * <p>The data of a message template.</p>
 * @public
 */
export interface MessageTemplateData {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The timestamp when the message template was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the message template data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template
   *       data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template.
   *       This object contains different categories of key-value pairs. Each key defines a variable or
   *       placeholder in the message template. The corresponding value defines the default value for
   *       that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The types of attributes that the message template contains.</p>
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the
   *         <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or
   *         <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language,
   *         <code>defaultAttributes</code> and <code>Attachments</code> of the message template.</p>
   * @public
   */
  messageTemplateContentSha256: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateAttachmentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *       the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain
   *       any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The presentation information for the attachment file.</p>
   * @public
   */
  contentDisposition: ContentDisposition | undefined;

  /**
   * <p>The name of the attachment file being uploaded. The name should include the file
   *       extension.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The body of the attachment file being uploaded. It should be encoded using base64
   *       encoding.</p>
   * @public
   */
  body: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Information about the message template attachment.</p>
 * @public
 */
export interface MessageTemplateAttachment {
  /**
   * <p>The presentation information for the attachment file.</p>
   * @public
   */
  contentDisposition: ContentDisposition | undefined;

  /**
   * <p>The name of the attachment file being uploaded. The name should include the file
   *       extension.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the attachment file was uploaded.</p>
   * @public
   */
  uploadedTime: Date | undefined;

  /**
   * <p>A pre-signed Amazon S3 URL that can be used to download the attachment file.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the pre-signed Amazon S3 URL.</p>
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The identifier of the attachment file.</p>
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateAttachmentResponse {
  /**
   * <p>The message template attachment.</p>
   * @public
   */
  attachment?: MessageTemplateAttachment | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateVersionRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *       the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain
   *       any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the
   *         <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or
   *         <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language,
   *         <code>defaultAttributes</code> and <code>Attachments</code> of the message template. If not
   *       supplied, the message template version will be created based on the message template content
   *       that is referenced by the <code>$LATEST</code> qualifier by default.</p>
   * @public
   */
  messageTemplateContentSha256?: string | undefined;
}

/**
 * <p>The extended data of a message template.</p>
 * @public
 */
export interface ExtendedMessageTemplateData {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The timestamp when the message template was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the message template data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template
   *       data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template.
   *       This object contains different categories of key-value pairs. Each key defines a variable or
   *       placeholder in the message template. The corresponding value defines the default value for
   *       that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The types of attributes contain the message template.</p>
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * <p>The message template attachments.</p>
   * @public
   */
  attachments?: MessageTemplateAttachment[] | undefined;

  /**
   * <p>Whether the version of the message template is activated.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The version number of the message template version.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the
   *         <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or
   *         <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language,
   *         <code>defaultAttributes</code> and <code>Attachments</code> of the message template.</p>
   * @public
   */
  messageTemplateContentSha256: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @internal
 */
export const AgentAttributesFilterSensitiveLog = (obj: AgentAttributes): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentFilterConfigFilterSensitiveLog = (obj: GuardrailContentFilterConfig): any => ({
  ...obj,
  ...(obj.type && { type: SENSITIVE_STRING }),
  ...(obj.inputStrength && { inputStrength: SENSITIVE_STRING }),
  ...(obj.outputStrength && { outputStrength: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIGuardrailContentPolicyConfigFilterSensitiveLog = (obj: AIGuardrailContentPolicyConfig): any => ({
  ...obj,
  ...(obj.filtersConfig && {
    filtersConfig: obj.filtersConfig.map((item) => GuardrailContentFilterConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailContextualGroundingFilterConfigFilterSensitiveLog = (
  obj: GuardrailContextualGroundingFilterConfig
): any => ({
  ...obj,
  ...(obj.type && { type: SENSITIVE_STRING }),
  ...(obj.threshold && { threshold: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIGuardrailContextualGroundingPolicyConfigFilterSensitiveLog = (
  obj: AIGuardrailContextualGroundingPolicyConfig
): any => ({
  ...obj,
  ...(obj.filtersConfig && {
    filtersConfig: obj.filtersConfig.map((item) => GuardrailContextualGroundingFilterConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailPiiEntityConfigFilterSensitiveLog = (obj: GuardrailPiiEntityConfig): any => ({
  ...obj,
  ...(obj.type && { type: SENSITIVE_STRING }),
  ...(obj.action && { action: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailRegexConfigFilterSensitiveLog = (obj: GuardrailRegexConfig): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.pattern && { pattern: SENSITIVE_STRING }),
  ...(obj.action && { action: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIGuardrailSensitiveInformationPolicyConfigFilterSensitiveLog = (
  obj: AIGuardrailSensitiveInformationPolicyConfig
): any => ({
  ...obj,
  ...(obj.piiEntitiesConfig && {
    piiEntitiesConfig: obj.piiEntitiesConfig.map((item) => GuardrailPiiEntityConfigFilterSensitiveLog(item)),
  }),
  ...(obj.regexesConfig && {
    regexesConfig: obj.regexesConfig.map((item) => GuardrailRegexConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailTopicConfigFilterSensitiveLog = (obj: GuardrailTopicConfig): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.examples && { examples: SENSITIVE_STRING }),
  ...(obj.type && { type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIGuardrailTopicPolicyConfigFilterSensitiveLog = (obj: AIGuardrailTopicPolicyConfig): any => ({
  ...obj,
  ...(obj.topicsConfig && {
    topicsConfig: obj.topicsConfig.map((item) => GuardrailTopicConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailManagedWordsConfigFilterSensitiveLog = (obj: GuardrailManagedWordsConfig): any => ({
  ...obj,
  ...(obj.type && { type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailWordConfigFilterSensitiveLog = (obj: GuardrailWordConfig): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIGuardrailWordPolicyConfigFilterSensitiveLog = (obj: AIGuardrailWordPolicyConfig): any => ({
  ...obj,
  ...(obj.wordsConfig && { wordsConfig: obj.wordsConfig.map((item) => GuardrailWordConfigFilterSensitiveLog(item)) }),
  ...(obj.managedWordListsConfig && {
    managedWordListsConfig: obj.managedWordListsConfig.map((item) =>
      GuardrailManagedWordsConfigFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateAIGuardrailRequestFilterSensitiveLog = (obj: CreateAIGuardrailRequest): any => ({
  ...obj,
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: AIGuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
  }),
  ...(obj.contentPolicyConfig && {
    contentPolicyConfig: AIGuardrailContentPolicyConfigFilterSensitiveLog(obj.contentPolicyConfig),
  }),
  ...(obj.wordPolicyConfig && {
    wordPolicyConfig: AIGuardrailWordPolicyConfigFilterSensitiveLog(obj.wordPolicyConfig),
  }),
  ...(obj.sensitiveInformationPolicyConfig && {
    sensitiveInformationPolicyConfig: AIGuardrailSensitiveInformationPolicyConfigFilterSensitiveLog(
      obj.sensitiveInformationPolicyConfig
    ),
  }),
  ...(obj.contextualGroundingPolicyConfig && {
    contextualGroundingPolicyConfig: AIGuardrailContextualGroundingPolicyConfigFilterSensitiveLog(
      obj.contextualGroundingPolicyConfig
    ),
  }),
});

/**
 * @internal
 */
export const AIGuardrailDataFilterSensitiveLog = (obj: AIGuardrailData): any => ({
  ...obj,
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: AIGuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
  }),
  ...(obj.contentPolicyConfig && {
    contentPolicyConfig: AIGuardrailContentPolicyConfigFilterSensitiveLog(obj.contentPolicyConfig),
  }),
  ...(obj.wordPolicyConfig && {
    wordPolicyConfig: AIGuardrailWordPolicyConfigFilterSensitiveLog(obj.wordPolicyConfig),
  }),
  ...(obj.sensitiveInformationPolicyConfig && {
    sensitiveInformationPolicyConfig: AIGuardrailSensitiveInformationPolicyConfigFilterSensitiveLog(
      obj.sensitiveInformationPolicyConfig
    ),
  }),
  ...(obj.contextualGroundingPolicyConfig && {
    contextualGroundingPolicyConfig: AIGuardrailContextualGroundingPolicyConfigFilterSensitiveLog(
      obj.contextualGroundingPolicyConfig
    ),
  }),
});

/**
 * @internal
 */
export const CreateAIGuardrailResponseFilterSensitiveLog = (obj: CreateAIGuardrailResponse): any => ({
  ...obj,
  ...(obj.aiGuardrail && { aiGuardrail: AIGuardrailDataFilterSensitiveLog(obj.aiGuardrail) }),
});

/**
 * @internal
 */
export const CreateAIGuardrailVersionResponseFilterSensitiveLog = (obj: CreateAIGuardrailVersionResponse): any => ({
  ...obj,
  ...(obj.aiGuardrail && { aiGuardrail: AIGuardrailDataFilterSensitiveLog(obj.aiGuardrail) }),
});

/**
 * @internal
 */
export const GetAIGuardrailResponseFilterSensitiveLog = (obj: GetAIGuardrailResponse): any => ({
  ...obj,
  ...(obj.aiGuardrail && { aiGuardrail: AIGuardrailDataFilterSensitiveLog(obj.aiGuardrail) }),
});

/**
 * @internal
 */
export const AIGuardrailSummaryFilterSensitiveLog = (obj: AIGuardrailSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAIGuardrailsResponseFilterSensitiveLog = (obj: ListAIGuardrailsResponse): any => ({
  ...obj,
  ...(obj.aiGuardrailSummaries && {
    aiGuardrailSummaries: obj.aiGuardrailSummaries.map((item) => AIGuardrailSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AIGuardrailVersionSummaryFilterSensitiveLog = (obj: AIGuardrailVersionSummary): any => ({
  ...obj,
  ...(obj.aiGuardrailSummary && { aiGuardrailSummary: AIGuardrailSummaryFilterSensitiveLog(obj.aiGuardrailSummary) }),
});

/**
 * @internal
 */
export const ListAIGuardrailVersionsResponseFilterSensitiveLog = (obj: ListAIGuardrailVersionsResponse): any => ({
  ...obj,
  ...(obj.aiGuardrailVersionSummaries && {
    aiGuardrailVersionSummaries: obj.aiGuardrailVersionSummaries.map((item) =>
      AIGuardrailVersionSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateAIGuardrailRequestFilterSensitiveLog = (obj: UpdateAIGuardrailRequest): any => ({
  ...obj,
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: AIGuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
  }),
  ...(obj.contentPolicyConfig && {
    contentPolicyConfig: AIGuardrailContentPolicyConfigFilterSensitiveLog(obj.contentPolicyConfig),
  }),
  ...(obj.wordPolicyConfig && {
    wordPolicyConfig: AIGuardrailWordPolicyConfigFilterSensitiveLog(obj.wordPolicyConfig),
  }),
  ...(obj.sensitiveInformationPolicyConfig && {
    sensitiveInformationPolicyConfig: AIGuardrailSensitiveInformationPolicyConfigFilterSensitiveLog(
      obj.sensitiveInformationPolicyConfig
    ),
  }),
  ...(obj.contextualGroundingPolicyConfig && {
    contextualGroundingPolicyConfig: AIGuardrailContextualGroundingPolicyConfigFilterSensitiveLog(
      obj.contextualGroundingPolicyConfig
    ),
  }),
});

/**
 * @internal
 */
export const UpdateAIGuardrailResponseFilterSensitiveLog = (obj: UpdateAIGuardrailResponse): any => ({
  ...obj,
  ...(obj.aiGuardrail && { aiGuardrail: AIGuardrailDataFilterSensitiveLog(obj.aiGuardrail) }),
});

/**
 * @internal
 */
export const TextFullAIPromptEditTemplateConfigurationFilterSensitiveLog = (
  obj: TextFullAIPromptEditTemplateConfiguration
): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AIPromptTemplateConfigurationFilterSensitiveLog = (obj: AIPromptTemplateConfiguration): any => {
  if (obj.textFullAIPromptEditTemplateConfiguration !== undefined)
    return {
      textFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfigurationFilterSensitiveLog(
        obj.textFullAIPromptEditTemplateConfiguration
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateAIPromptRequestFilterSensitiveLog = (obj: CreateAIPromptRequest): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: AIPromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
});

/**
 * @internal
 */
export const AIPromptDataFilterSensitiveLog = (obj: AIPromptData): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: AIPromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateAIPromptResponseFilterSensitiveLog = (obj: CreateAIPromptResponse): any => ({
  ...obj,
  ...(obj.aiPrompt && { aiPrompt: AIPromptDataFilterSensitiveLog(obj.aiPrompt) }),
});

/**
 * @internal
 */
export const CreateAIPromptVersionResponseFilterSensitiveLog = (obj: CreateAIPromptVersionResponse): any => ({
  ...obj,
  ...(obj.aiPrompt && { aiPrompt: AIPromptDataFilterSensitiveLog(obj.aiPrompt) }),
});

/**
 * @internal
 */
export const GetAIPromptResponseFilterSensitiveLog = (obj: GetAIPromptResponse): any => ({
  ...obj,
  ...(obj.aiPrompt && { aiPrompt: AIPromptDataFilterSensitiveLog(obj.aiPrompt) }),
});

/**
 * @internal
 */
export const UpdateAIPromptRequestFilterSensitiveLog = (obj: UpdateAIPromptRequest): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: AIPromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateAIPromptResponseFilterSensitiveLog = (obj: UpdateAIPromptResponse): any => ({
  ...obj,
  ...(obj.aiPrompt && { aiPrompt: AIPromptDataFilterSensitiveLog(obj.aiPrompt) }),
});

/**
 * @internal
 */
export const DocumentTextFilterSensitiveLog = (obj: DocumentText): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextDataFilterSensitiveLog = (obj: TextData): any => ({
  ...obj,
  ...(obj.title && { title: DocumentTextFilterSensitiveLog(obj.title) }),
  ...(obj.excerpt && { excerpt: DocumentTextFilterSensitiveLog(obj.excerpt) }),
});

/**
 * @internal
 */
export const ContentDataDetailsFilterSensitiveLog = (obj: ContentDataDetails): any => ({
  ...obj,
  ...(obj.textData && { textData: TextDataFilterSensitiveLog(obj.textData) }),
});

/**
 * @internal
 */
export const IntentDetectedDataDetailsFilterSensitiveLog = (obj: IntentDetectedDataDetails): any => ({
  ...obj,
  ...(obj.intent && { intent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceContentDataDetailsFilterSensitiveLog = (obj: SourceContentDataDetails): any => ({
  ...obj,
  ...(obj.textData && { textData: TextDataFilterSensitiveLog(obj.textData) }),
});

/**
 * @internal
 */
export const DocumentFilterSensitiveLog = (obj: Document): any => ({
  ...obj,
  ...(obj.title && { title: DocumentTextFilterSensitiveLog(obj.title) }),
  ...(obj.excerpt && { excerpt: DocumentTextFilterSensitiveLog(obj.excerpt) }),
});

/**
 * @internal
 */
export const QueryRecommendationTriggerDataFilterSensitiveLog = (obj: QueryRecommendationTriggerData): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RecommendationTriggerDataFilterSensitiveLog = (obj: RecommendationTriggerData): any => {
  if (obj.query !== undefined) return { query: QueryRecommendationTriggerDataFilterSensitiveLog(obj.query) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RecommendationTriggerFilterSensitiveLog = (obj: RecommendationTrigger): any => ({
  ...obj,
  ...(obj.data && { data: RecommendationTriggerDataFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const QueryTextInputDataFilterSensitiveLog = (obj: QueryTextInputData): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QueryInputDataFilterSensitiveLog = (obj: QueryInputData): any => {
  if (obj.queryTextInputData !== undefined)
    return { queryTextInputData: QueryTextInputDataFilterSensitiveLog(obj.queryTextInputData) };
  if (obj.intentInputData !== undefined) return { intentInputData: obj.intentInputData };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const QueryAssistantRequestFilterSensitiveLog = (obj: QueryAssistantRequest): any => ({
  ...obj,
  ...(obj.queryText && { queryText: SENSITIVE_STRING }),
  ...(obj.queryCondition && { queryCondition: obj.queryCondition.map((item) => item) }),
  ...(obj.queryInputData && { queryInputData: QueryInputDataFilterSensitiveLog(obj.queryInputData) }),
});

/**
 * @internal
 */
export const RuntimeSessionDataValueFilterSensitiveLog = (obj: RuntimeSessionDataValue): any => {
  if (obj.stringValue !== undefined) return { stringValue: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RuntimeSessionDataFilterSensitiveLog = (obj: RuntimeSessionData): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: RuntimeSessionDataValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const TextMessageFilterSensitiveLog = (obj: TextMessage): any => ({
  ...obj,
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MessageDataFilterSensitiveLog = (obj: MessageData): any => {
  if (obj.text !== undefined) return { text: TextMessageFilterSensitiveLog(obj.text) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const MessageOutputFilterSensitiveLog = (obj: MessageOutput): any => ({
  ...obj,
  ...(obj.value && { value: MessageDataFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const GetNextMessageResponseFilterSensitiveLog = (obj: GetNextMessageResponse): any => ({
  ...obj,
  ...(obj.response && { response: MessageOutputFilterSensitiveLog(obj.response) }),
  ...(obj.conversationSessionData && {
    conversationSessionData: obj.conversationSessionData.map((item) => RuntimeSessionDataFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListMessagesResponseFilterSensitiveLog = (obj: ListMessagesResponse): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SelfServiceConversationHistoryFilterSensitiveLog = (obj: SelfServiceConversationHistory): any => ({
  ...obj,
  ...(obj.inputTranscript && { inputTranscript: SENSITIVE_STRING }),
  ...(obj.botResponse && { botResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConversationContextFilterSensitiveLog = (obj: ConversationContext): any => ({
  ...obj,
  ...(obj.selfServiceConversationHistory && {
    selfServiceConversationHistory: obj.selfServiceConversationHistory.map((item) =>
      SelfServiceConversationHistoryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const MessageInputFilterSensitiveLog = (obj: MessageInput): any => ({
  ...obj,
  ...(obj.value && { value: MessageDataFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const SendMessageRequestFilterSensitiveLog = (obj: SendMessageRequest): any => ({
  ...obj,
  ...(obj.message && { message: MessageInputFilterSensitiveLog(obj.message) }),
  ...(obj.conversationContext && {
    conversationContext: ConversationContextFilterSensitiveLog(obj.conversationContext),
  }),
});

/**
 * @internal
 */
export const UpdateSessionDataRequestFilterSensitiveLog = (obj: UpdateSessionDataRequest): any => ({
  ...obj,
  ...(obj.data && { data: obj.data.map((item) => RuntimeSessionDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateSessionDataResponseFilterSensitiveLog = (obj: UpdateSessionDataResponse): any => ({
  ...obj,
  ...(obj.data && { data: obj.data.map((item) => RuntimeSessionDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ContentDataFilterSensitiveLog = (obj: ContentData): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateContentResponseFilterSensitiveLog = (obj: CreateContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const GetContentResponseFilterSensitiveLog = (obj: GetContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const UpdateContentResponseFilterSensitiveLog = (obj: UpdateContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
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
export const ManagedSourceConfigurationFilterSensitiveLog = (obj: ManagedSourceConfiguration): any => {
  if (obj.webCrawlerConfiguration !== undefined)
    return { webCrawlerConfiguration: WebCrawlerConfigurationFilterSensitiveLog(obj.webCrawlerConfiguration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => {
  if (obj.appIntegrations !== undefined) return { appIntegrations: obj.appIntegrations };
  if (obj.managedSourceConfiguration !== undefined)
    return { managedSourceConfiguration: ManagedSourceConfigurationFilterSensitiveLog(obj.managedSourceConfiguration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateKnowledgeBaseRequestFilterSensitiveLog = (obj: CreateKnowledgeBaseRequest): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseDataFilterSensitiveLog = (obj: KnowledgeBaseData): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateKnowledgeBaseResponseFilterSensitiveLog = (obj: CreateKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const MessageTemplateBodyContentProviderFilterSensitiveLog = (obj: MessageTemplateBodyContentProvider): any => {
  if (obj.content !== undefined) return { content: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EmailMessageTemplateContentBodyFilterSensitiveLog = (obj: EmailMessageTemplateContentBody): any => ({
  ...obj,
  ...(obj.plainText && { plainText: MessageTemplateBodyContentProviderFilterSensitiveLog(obj.plainText) }),
  ...(obj.html && { html: MessageTemplateBodyContentProviderFilterSensitiveLog(obj.html) }),
});

/**
 * @internal
 */
export const EmailHeaderFilterSensitiveLog = (obj: EmailHeader): any => ({
  ...obj,
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EmailMessageTemplateContentFilterSensitiveLog = (obj: EmailMessageTemplateContent): any => ({
  ...obj,
  ...(obj.subject && { subject: SENSITIVE_STRING }),
  ...(obj.body && { body: EmailMessageTemplateContentBodyFilterSensitiveLog(obj.body) }),
  ...(obj.headers && { headers: obj.headers.map((item) => EmailHeaderFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SMSMessageTemplateContentBodyFilterSensitiveLog = (obj: SMSMessageTemplateContentBody): any => ({
  ...obj,
  ...(obj.plainText && { plainText: MessageTemplateBodyContentProviderFilterSensitiveLog(obj.plainText) }),
});

/**
 * @internal
 */
export const SMSMessageTemplateContentFilterSensitiveLog = (obj: SMSMessageTemplateContent): any => ({
  ...obj,
  ...(obj.body && { body: SMSMessageTemplateContentBodyFilterSensitiveLog(obj.body) }),
});

/**
 * @internal
 */
export const MessageTemplateContentProviderFilterSensitiveLog = (obj: MessageTemplateContentProvider): any => {
  if (obj.email !== undefined) return { email: EmailMessageTemplateContentFilterSensitiveLog(obj.email) };
  if (obj.sms !== undefined) return { sms: SMSMessageTemplateContentFilterSensitiveLog(obj.sms) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CustomerProfileAttributesFilterSensitiveLog = (obj: CustomerProfileAttributes): any => ({
  ...obj,
  ...(obj.profileId && { profileId: SENSITIVE_STRING }),
  ...(obj.profileARN && { profileARN: SENSITIVE_STRING }),
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.middleName && { middleName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
  ...(obj.accountNumber && { accountNumber: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  ...(obj.phoneNumber && { phoneNumber: SENSITIVE_STRING }),
  ...(obj.additionalInformation && { additionalInformation: SENSITIVE_STRING }),
  ...(obj.partyType && { partyType: SENSITIVE_STRING }),
  ...(obj.businessName && { businessName: SENSITIVE_STRING }),
  ...(obj.birthDate && { birthDate: SENSITIVE_STRING }),
  ...(obj.gender && { gender: SENSITIVE_STRING }),
  ...(obj.mobilePhoneNumber && { mobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.homePhoneNumber && { homePhoneNumber: SENSITIVE_STRING }),
  ...(obj.businessPhoneNumber && { businessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.businessEmailAddress && { businessEmailAddress: SENSITIVE_STRING }),
  ...(obj.address1 && { address1: SENSITIVE_STRING }),
  ...(obj.address2 && { address2: SENSITIVE_STRING }),
  ...(obj.address3 && { address3: SENSITIVE_STRING }),
  ...(obj.address4 && { address4: SENSITIVE_STRING }),
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.county && { county: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.province && { province: SENSITIVE_STRING }),
  ...(obj.state && { state: SENSITIVE_STRING }),
  ...(obj.shippingAddress1 && { shippingAddress1: SENSITIVE_STRING }),
  ...(obj.shippingAddress2 && { shippingAddress2: SENSITIVE_STRING }),
  ...(obj.shippingAddress3 && { shippingAddress3: SENSITIVE_STRING }),
  ...(obj.shippingAddress4 && { shippingAddress4: SENSITIVE_STRING }),
  ...(obj.shippingCity && { shippingCity: SENSITIVE_STRING }),
  ...(obj.shippingCounty && { shippingCounty: SENSITIVE_STRING }),
  ...(obj.shippingCountry && { shippingCountry: SENSITIVE_STRING }),
  ...(obj.shippingPostalCode && { shippingPostalCode: SENSITIVE_STRING }),
  ...(obj.shippingProvince && { shippingProvince: SENSITIVE_STRING }),
  ...(obj.shippingState && { shippingState: SENSITIVE_STRING }),
  ...(obj.mailingAddress1 && { mailingAddress1: SENSITIVE_STRING }),
  ...(obj.mailingAddress2 && { mailingAddress2: SENSITIVE_STRING }),
  ...(obj.mailingAddress3 && { mailingAddress3: SENSITIVE_STRING }),
  ...(obj.mailingAddress4 && { mailingAddress4: SENSITIVE_STRING }),
  ...(obj.mailingCity && { mailingCity: SENSITIVE_STRING }),
  ...(obj.mailingCounty && { mailingCounty: SENSITIVE_STRING }),
  ...(obj.mailingCountry && { mailingCountry: SENSITIVE_STRING }),
  ...(obj.mailingPostalCode && { mailingPostalCode: SENSITIVE_STRING }),
  ...(obj.mailingProvince && { mailingProvince: SENSITIVE_STRING }),
  ...(obj.mailingState && { mailingState: SENSITIVE_STRING }),
  ...(obj.billingAddress1 && { billingAddress1: SENSITIVE_STRING }),
  ...(obj.billingAddress2 && { billingAddress2: SENSITIVE_STRING }),
  ...(obj.billingAddress3 && { billingAddress3: SENSITIVE_STRING }),
  ...(obj.billingAddress4 && { billingAddress4: SENSITIVE_STRING }),
  ...(obj.billingCity && { billingCity: SENSITIVE_STRING }),
  ...(obj.billingCounty && { billingCounty: SENSITIVE_STRING }),
  ...(obj.billingCountry && { billingCountry: SENSITIVE_STRING }),
  ...(obj.billingPostalCode && { billingPostalCode: SENSITIVE_STRING }),
  ...(obj.billingProvince && { billingProvince: SENSITIVE_STRING }),
  ...(obj.billingState && { billingState: SENSITIVE_STRING }),
  ...(obj.custom && { custom: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SystemEndpointAttributesFilterSensitiveLog = (obj: SystemEndpointAttributes): any => ({
  ...obj,
  ...(obj.address && { address: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SystemAttributesFilterSensitiveLog = (obj: SystemAttributes): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.customerEndpoint && { customerEndpoint: SystemEndpointAttributesFilterSensitiveLog(obj.customerEndpoint) }),
  ...(obj.systemEndpoint && { systemEndpoint: SystemEndpointAttributesFilterSensitiveLog(obj.systemEndpoint) }),
});

/**
 * @internal
 */
export const MessageTemplateAttributesFilterSensitiveLog = (obj: MessageTemplateAttributes): any => ({
  ...obj,
  ...(obj.systemAttributes && { systemAttributes: SystemAttributesFilterSensitiveLog(obj.systemAttributes) }),
  ...(obj.agentAttributes && { agentAttributes: AgentAttributesFilterSensitiveLog(obj.agentAttributes) }),
  ...(obj.customerProfileAttributes && {
    customerProfileAttributes: CustomerProfileAttributesFilterSensitiveLog(obj.customerProfileAttributes),
  }),
  ...(obj.customAttributes && { customAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupingConfigurationFilterSensitiveLog = (obj: GroupingConfiguration): any => ({
  ...obj,
  ...(obj.criteria && { criteria: SENSITIVE_STRING }),
  ...(obj.values && { values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMessageTemplateRequestFilterSensitiveLog = (obj: CreateMessageTemplateRequest): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.defaultAttributes && {
    defaultAttributes: MessageTemplateAttributesFilterSensitiveLog(obj.defaultAttributes),
  }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
});

/**
 * @internal
 */
export const MessageTemplateDataFilterSensitiveLog = (obj: MessageTemplateData): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.defaultAttributes && {
    defaultAttributes: MessageTemplateAttributesFilterSensitiveLog(obj.defaultAttributes),
  }),
});

/**
 * @internal
 */
export const CreateMessageTemplateResponseFilterSensitiveLog = (obj: CreateMessageTemplateResponse): any => ({
  ...obj,
  ...(obj.messageTemplate && { messageTemplate: MessageTemplateDataFilterSensitiveLog(obj.messageTemplate) }),
});

/**
 * @internal
 */
export const CreateMessageTemplateAttachmentRequestFilterSensitiveLog = (
  obj: CreateMessageTemplateAttachmentRequest
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MessageTemplateAttachmentFilterSensitiveLog = (obj: MessageTemplateAttachment): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMessageTemplateAttachmentResponseFilterSensitiveLog = (
  obj: CreateMessageTemplateAttachmentResponse
): any => ({
  ...obj,
  ...(obj.attachment && { attachment: MessageTemplateAttachmentFilterSensitiveLog(obj.attachment) }),
});

/**
 * @internal
 */
export const ExtendedMessageTemplateDataFilterSensitiveLog = (obj: ExtendedMessageTemplateData): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.defaultAttributes && {
    defaultAttributes: MessageTemplateAttributesFilterSensitiveLog(obj.defaultAttributes),
  }),
  ...(obj.attachments && {
    attachments: obj.attachments.map((item) => MessageTemplateAttachmentFilterSensitiveLog(item)),
  }),
});
