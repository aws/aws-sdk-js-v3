// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AIAgentAssociationConfigurationType,
  AIAgentType,
  AIPromptAPIFormat,
  AIPromptTemplateType,
  AIPromptType,
  AssistantCapabilityType,
  AssistantStatus,
  AssistantType,
  AssociationType,
  ChannelSubtype,
  ChunkingStrategy,
  ContentAssociationType,
  ContentDisposition,
  ContentStatus,
  ConversationStatus,
  ConversationStatusReason,
  CrossRegionStatus,
  FilterField,
  FilterOperator,
  GuardrailAction,
  GuardrailContentFilterType,
  GuardrailContextualGroundingFilterType,
  GuardrailFilterStrength,
  GuardrailManagedWordsType,
  GuardrailPiiEntityType,
  GuardrailPolicyType,
  GuardrailSensitiveInformationAction,
  GuardrailSource,
  GuardrailTopicType,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  MessageFilterType,
  MessageTemplateAttributeType,
  MessageType,
  ModelLifecycle,
  Origin,
  ParsingStrategy,
  Participant,
  PushMessageAction,
  QueryConditionComparisonOperator,
  QueryConditionFieldName,
  RecommendationSourceType,
  RecommendationTriggerType,
  RecommendationType,
  ReferenceType,
  Relevance,
  RelevanceLevel,
  RetrieveErrorCode,
  SessionDataNamespace,
  SourceContentType,
  Status,
  SyncStatus,
  TargetType,
  ToolOverrideInputValueType,
  ToolType,
  VisibilityStatus,
  WebScopeType,
  WhatsAppSourceConfigurationStatus,
} from "./enums";

/**
 * @public
 */
export interface ActivateMessageTemplateRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The version number of the message template version to activate.
   *
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface ActivateMessageTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The version number of the message template version that is activated.
   *
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * Information about an agent.
 *
 * @public
 */
export interface AgentAttributes {
  /**
   * The agent’s first name as entered in their Amazon Connect user account.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The agent’s last name as entered in their Amazon Connect user account.
   *
   * @public
   */
  lastName?: string | undefined;
}

/**
 * A union that identifies a collaborator agent to engage. Specify either an Amazon Connect AI Agent or a third-party agent.
 *
 * @public
 */
export type AgentTarget =
  | AgentTarget.AiAgentIdMember
  | AgentTarget.ApplicationIdMember
  | AgentTarget.$UnknownMember;

/**
 * @public
 */
export namespace AgentTarget {
  /**
   * The identifier of an Amazon Connect AI Agent to use as the collaborator agent.
   *
   * @public
   */
  export interface AiAgentIdMember {
    aiAgentId: string;
    applicationId?: never;
    $unknown?: never;
  }

  /**
   * The identifier of a third-party agent to use as the collaborator agent.
   *
   * @public
   */
  export interface ApplicationIdMember {
    aiAgentId?: never;
    applicationId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    aiAgentId?: never;
    applicationId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    aiAgentId: (value: string) => T;
    applicationId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A leaf node condition which can be used to specify a tag condition.
 *
 * @public
 */
export interface TagCondition {
  /**
   * The tag key in the tag condition.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value in the tag condition.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A list of conditions which would be applied together with an `OR` condition.
 *
 * @public
 */
export type OrCondition =
  | OrCondition.AndConditionsMember
  | OrCondition.TagConditionMember
  | OrCondition.$UnknownMember;

/**
 * @public
 */
export namespace OrCondition {
  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  export interface AndConditionsMember {
    andConditions: TagCondition[];
    tagCondition?: never;
    $unknown?: never;
  }

  /**
   * A leaf node condition which can be used to specify a tag condition.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    andConditions: (value: TagCondition[]) => T;
    tagCondition: (value: TagCondition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that can be used to specify Tag conditions.
 *
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
   * A leaf node condition which can be used to specify a tag condition.
   *
   * @public
   */
  export interface TagConditionMember {
    tagCondition: TagCondition;
    andConditions?: never;
    orConditions?: never;
    $unknown?: never;
  }

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  export interface AndConditionsMember {
    tagCondition?: never;
    andConditions: TagCondition[];
    orConditions?: never;
    $unknown?: never;
  }

  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tagCondition: (value: TagCondition) => T;
    andConditions: (value: TagCondition[]) => T;
    orConditions: (value: OrCondition[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The data of the configuration for a `KNOWLEDGE_BASE` type Amazon Q in Connect Assistant Association.
 *
 * @public
 */
export interface KnowledgeBaseAssociationConfigurationData {
  /**
   * An object that can be used to specify Tag conditions.
   *
   * @public
   */
  contentTagFilter?: TagFilter | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The search type to be used against the Knowledge Base for this request. The values can be `SEMANTIC` which uses vector embeddings or `HYBRID` which use vector embeddings and raw text
   *
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * A typed union of the data of the configuration for an Amazon Q in Connect Assistant Association.
 *
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
   * The data of the configuration for a `KNOWLEDGE_BASE` type Amazon Q in Connect Assistant Association.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseAssociationConfigurationData: (value: KnowledgeBaseAssociationConfigurationData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for an Amazon Q in Connect Assistant Association.
 *
 * @public
 */
export interface AssociationConfiguration {
  /**
   * The identifier of the association for this Association Configuration.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The type of the association for this Association Configuration.
   *
   * @public
   */
  associationType?: AIAgentAssociationConfigurationType | undefined;

  /**
   * The data of the configuration for an Amazon Q in Connect Assistant Association.
   *
   * @public
   */
  associationConfigurationData?: AssociationConfigurationData | undefined;
}

/**
 * The configuration for the `ANSWER_RECOMMENDATION` AI Agent type.
 *
 * @public
 */
export interface AnswerRecommendationAIAgentConfiguration {
  /**
   * The AI Prompt identifier for the Intent Labeling prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
   *
   * @public
   */
  intentLabelingGenerationAIPromptId?: string | undefined;

  /**
   * The AI Prompt identifier for the Query Reformulation prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
   *
   * @public
   */
  queryReformulationAIPromptId?: string | undefined;

  /**
   * The AI Prompt identifier for the Answer Generation prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
   *
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier for the Answer Generation Guardrail used by the `ANSWER_RECOMMENDATION` AI Agent.
   *
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * The association configurations for overriding behavior on this AI Agent.
   *
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * The locale to which specifies the language and region settings that determine the response language for [QueryAssistant](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html).
   *
   * > **Note:** For more information on supported locales, see [Language support for Amazon Q in Connect](https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#qic-notes-languages).
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The suggested messages configuration for the Answer Recommendation AI Agent.
   *
   * @public
   */
  suggestedMessages?: string[] | undefined;
}

/**
 * The configuration for AI Agents of type `CASE_SUMMARIZATION`.
 *
 * @public
 */
export interface CaseSummarizationAIAgentConfiguration {
  /**
   * The AI Prompt identifier used by the Case Summarization AI Agent.
   *
   * @public
   */
  caseSummarizationAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier used by the Case Summarization AI Agent.
   *
   * @public
   */
  caseSummarizationAIGuardrailId?: string | undefined;

  /**
   * The locale setting for the Case Summarization AI Agent.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * Configuration settings for the EMAIL_GENERATIVE_ANSWER AI agent including prompts, locale, and knowledge base associations.
 *
 * @public
 */
export interface EmailGenerativeAnswerAIAgentConfiguration {
  /**
   * The ID of the System AI prompt used for generating comprehensive knowledge-based answers from email queries.
   *
   * @public
   */
  emailGenerativeAnswerAIPromptId?: string | undefined;

  /**
   * The ID of the System AI prompt used for reformulating email queries to optimize knowledge base search results.
   *
   * @public
   */
  emailQueryReformulationAIPromptId?: string | undefined;

  /**
   * The locale setting for language-specific email processing and response generation (for example, en_US, es_ES).
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * Configuration settings for knowledge base associations used by the email generative answer agent.
   *
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * Configuration settings for the EMAIL_OVERVIEW AI agent including prompt ID and locale settings.
 *
 * @public
 */
export interface EmailOverviewAIAgentConfiguration {
  /**
   * The ID of the System AI prompt used for generating structured email conversation summaries.
   *
   * @public
   */
  emailOverviewAIPromptId?: string | undefined;

  /**
   * The locale setting for language-specific email overview processing (for example, en_US, es_ES).
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * Configuration settings for the EMAIL_RESPONSE AI agent including prompts, locale, and knowledge base associations.
 *
 * @public
 */
export interface EmailResponseAIAgentConfiguration {
  /**
   * The ID of the System AI prompt used for generating professional email responses based on knowledge base content.
   *
   * @public
   */
  emailResponseAIPromptId?: string | undefined;

  /**
   * The ID of the System AI prompt used for reformulating email queries to optimize knowledge base search for response generation.
   *
   * @public
   */
  emailQueryReformulationAIPromptId?: string | undefined;

  /**
   * The locale setting for language-specific email response generation (for example, en_US, es_ES).
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * Configuration settings for knowledge base associations used by the email response agent.
   *
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * The configuration for the `MANUAL_SEARCH` AI Agent type.
 *
 * @public
 */
export interface ManualSearchAIAgentConfiguration {
  /**
   * The AI Prompt identifier for the Answer Generation prompt used by the MANUAL_SEARCH AI Agent.
   *
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier for the Answer Generation guardrail used by the MANUAL_SEARCH AI Agent.
   *
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * The association configurations for overriding behavior on this AI Agent.
   *
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * The locale to which specifies the language and region settings that determine the response language for [QueryAssistant](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html).
   *
   * > **Note:** For more information on supported locales, see [Language support for Amazon Q in Connect](https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#qic-notes-languages).
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * The configuration for AI Agents of type `NOTE_TAKING`.
 *
 * @public
 */
export interface NoteTakingAIAgentConfiguration {
  /**
   * The AI Prompt identifier used by the Note Taking AI Agent.
   *
   * @public
   */
  noteTakingAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier used by the Note Taking AI Agent.
   *
   * @public
   */
  noteTakingAIGuardrailId?: string | undefined;

  /**
   * The locale setting for language-specific case summarization generation (for example, en_US, es_ES).
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * The instruction that guides how the Orchestration AI Agent works with a collaborator agent.
 *
 * @public
 */
export interface MultiAgentInstruction {
  /**
   * The natural-language instruction that tells the Orchestration AI Agent when and how to engage the collaborator agent.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * Example interactions that illustrate when the Orchestration AI Agent should engage the collaborator agent.
   *
   * @public
   */
  examples?: string[] | undefined;
}

/**
 * A collaborator agent configuration in which the Orchestration AI Agent invokes the collaborator, resuming when the collaborator returns.
 *
 * @public
 */
export interface DelegateAgentConfiguration {
  /**
   * The collaborator agent to delegate to.
   *
   * @public
   */
  agentTarget: AgentTarget | undefined;

  /**
   * The instruction that tells the Orchestration AI Agent when and how to delegate to this collaborator agent.
   *
   * @public
   */
  instruction?: MultiAgentInstruction | undefined;
}

/**
 * A collaborator agent configuration in which the Orchestration AI Agent transfers control of the conversation to the collaborator agent.
 *
 * @public
 */
export interface HandoffAgentConfiguration {
  /**
   * The collaborator agent to hand off to.
   *
   * @public
   */
  agentTarget: AgentTarget | undefined;

  /**
   * The instruction that tells the Orchestration AI Agent when and how to hand off to this collaborator agent.
   *
   * @public
   */
  instruction?: MultiAgentInstruction | undefined;

  /**
   * Specifies whether the caller's audio is streamed directly to the collaborator agent and the collaborator's audio response is played back during the handoff. This applies only to voice handoffs.
   *
   * @public
   */
  audioStreamingEnabled?: boolean | undefined;

  /**
   * Specifies whether the conversation is handed off to this collaborator agent immediately on the first turn, without any orchestration reasoning. At most one handoff in an AI Agent's configuration can set this to `true`.
   *
   * @public
   */
  immediateHandoff?: boolean | undefined;
}

/**
 * A union that configures a single collaborator agent for an Orchestration AI Agent, as either a delegate or a handoff.
 *
 * @public
 */
export type MultiAgentConfiguration =
  | MultiAgentConfiguration.DelegateAgentConfigurationMember
  | MultiAgentConfiguration.HandoffAgentConfigurationMember
  | MultiAgentConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MultiAgentConfiguration {
  /**
   * Configures the collaborator agent as a delegate that the Orchestration AI Agent invokes while retaining control of the conversation.
   *
   * @public
   */
  export interface DelegateAgentConfigurationMember {
    delegateAgentConfiguration: DelegateAgentConfiguration;
    handoffAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configures the collaborator agent as a handoff target that the Orchestration AI Agent transfers control of the conversation to.
   *
   * @public
   */
  export interface HandoffAgentConfigurationMember {
    delegateAgentConfiguration?: never;
    handoffAgentConfiguration: HandoffAgentConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    delegateAgentConfiguration?: never;
    handoffAgentConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    delegateAgentConfiguration: (value: DelegateAgentConfiguration) => T;
    handoffAgentConfiguration: (value: HandoffAgentConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An annotation that provides additional context or metadata.
 *
 * @public
 */
export interface Annotation {
  /**
   * The title of the annotation.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A hint indicating that the annotation contains potentially destructive content.
   *
   * @public
   */
  destructiveHint?: boolean | undefined;
}

/**
 * Instructions for using a tool.
 *
 * @public
 */
export interface ToolInstruction {
  /**
   * The instruction text for the tool.
   *
   * @public
   */
  instruction?: string | undefined;

  /**
   * Examples for using the tool.
   *
   * @public
   */
  examples?: string[] | undefined;
}

/**
 * Configuration for tool output handling.
 *
 * @public
 */
export interface ToolOutputConfiguration {
  /**
   * Override the tool output results to different variable name.
   *
   * @public
   */
  outputVariableNameOverride?: string | undefined;

  /**
   * The session data namespace for tool output.
   *
   * @public
   */
  sessionDataNamespace?: string | undefined;
}

/**
 * Filter configuration for tool output.
 *
 * @public
 */
export interface ToolOutputFilter {
  /**
   * The JSON path for filtering tool output.
   *
   * @public
   */
  jsonPath: string | undefined;

  /**
   * The output configuration for the filter.
   *
   * @public
   */
  outputConfiguration?: ToolOutputConfiguration | undefined;
}

/**
 * A constant input value for tool override.
 *
 * @public
 */
export interface ToolOverrideConstantInputValue {
  /**
   * Override tool input value with constant values
   *
   * @public
   */
  type: ToolOverrideInputValueType | undefined;

  /**
   * The constant input override value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Configuration for overriding tool input values.
 *
 * @public
 */
export type ToolOverrideInputValueConfiguration =
  | ToolOverrideInputValueConfiguration.ConstantMember
  | ToolOverrideInputValueConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ToolOverrideInputValueConfiguration {
  /**
   * Constant input value configuration for tool override.
   *
   * @public
   */
  export interface ConstantMember {
    constant: ToolOverrideConstantInputValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    constant?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    constant: (value: ToolOverrideConstantInputValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An input value override for tools.
 *
 * @public
 */
export interface ToolOverrideInputValue {
  /**
   * The JSON path for the input value override.
   *
   * @public
   */
  jsonPath: string | undefined;

  /**
   * The override input value.
   *
   * @public
   */
  value: ToolOverrideInputValueConfiguration | undefined;
}

/**
 * Configuration for user interaction settings.
 *
 * @public
 */
export interface UserInteractionConfiguration {
  /**
   * Indicates whether user confirmation is required for the interaction.
   *
   * @public
   */
  isUserConfirmationRequired?: boolean | undefined;
}

/**
 * Configuration settings for a tool used by AI Agents.
 *
 * @public
 */
export interface ToolConfiguration {
  /**
   * The name of the tool.
   *
   * @public
   */
  toolName: string | undefined;

  /**
   * The type of the tool.
   *
   * @public
   */
  toolType: ToolType | undefined;

  /**
   * The title of the tool configuration.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The identifier of the tool, for example toolName from Model Context Provider server.
   *
   * @public
   */
  toolId?: string | undefined;

  /**
   * The description of the tool configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Instructions for using the tool.
   *
   * @public
   */
  instruction?: ToolInstruction | undefined;

  /**
   * Override input values for the tool configuration.
   *
   * @public
   */
  overrideInputValues?: ToolOverrideInputValue[] | undefined;

  /**
   * Output filters applies to the tool result.
   *
   * @public
   */
  outputFilters?: ToolOutputFilter[] | undefined;

  /**
   * The input schema for the tool configuration.
   *
   * @public
   */
  inputSchema?: __DocumentType | undefined;

  /**
   * The output schema for the tool configuration.
   *
   * @public
   */
  outputSchema?: __DocumentType | undefined;

  /**
   * Annotations for the tool configuration.
   *
   * @public
   */
  annotations?: Annotation | undefined;

  /**
   * Configuration for user interaction with the tool.
   *
   * @public
   */
  userInteractionConfiguration?: UserInteractionConfiguration | undefined;
}

/**
 * The configuration for AI Agents of type `ORCHESTRATION`.
 *
 * @public
 */
export interface OrchestrationAIAgentConfiguration {
  /**
   * The AI Prompt identifier used by the Orchestration AI Agent.
   *
   * @public
   */
  orchestrationAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier used by the Orchestration AI Agent.
   *
   * @public
   */
  orchestrationAIGuardrailId?: string | undefined;

  /**
   * The tool configurations used by the Orchestration AI Agent.
   *
   * @public
   */
  toolConfigurations?: ToolConfiguration[] | undefined;

  /**
   * The collaborator agents that the Orchestration AI Agent can work with. Each entry defines another agent that the orchestrator either delegates to or hands the conversation off to.
   *
   * @public
   */
  multiAgentConfigurations?: MultiAgentConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Connect instance used by the Orchestration AI Agent.
   *
   * @public
   */
  connectInstanceArn?: string | undefined;

  /**
   * The locale setting for the Orchestration AI Agent.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The JSON schemas that define the structure of the structured data input accepted by the Orchestration AI Agent. The data in a `DATA` message sent to the agent is validated against these schemas. You can specify at most one schema.
   *
   * @public
   */
  inputSchemas?: __DocumentType[] | undefined;

  /**
   * The JSON schemas that define the structure of the structured output generated by the Orchestration AI Agent. You can specify at most one schema.
   *
   * @public
   */
  outputSchemas?: __DocumentType[] | undefined;
}

/**
 * The configuration for AI Agents of type SELF_SERVICE.
 *
 * @public
 */
export interface SelfServiceAIAgentConfiguration {
  /**
   * The AI Prompt identifier for the Self Service Pre-Processing prompt used by the SELF_SERVICE AI Agent
   *
   * @public
   */
  selfServicePreProcessingAIPromptId?: string | undefined;

  /**
   * The AI Prompt identifier for the Self Service Answer Generation prompt used by the SELF_SERVICE AI Agent
   *
   * @public
   */
  selfServiceAnswerGenerationAIPromptId?: string | undefined;

  /**
   * The AI Guardrail identifier used by the SELF_SERVICE AI Agent.
   *
   * @public
   */
  selfServiceAIGuardrailId?: string | undefined;

  /**
   * The association configurations for overriding behavior on this AI Agent.
   *
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * A typed union that specifies the configuration based on the type of AI Agent.
 *
 * @public
 */
export type AIAgentConfiguration =
  | AIAgentConfiguration.AnswerRecommendationAIAgentConfigurationMember
  | AIAgentConfiguration.CaseSummarizationAIAgentConfigurationMember
  | AIAgentConfiguration.EmailGenerativeAnswerAIAgentConfigurationMember
  | AIAgentConfiguration.EmailOverviewAIAgentConfigurationMember
  | AIAgentConfiguration.EmailResponseAIAgentConfigurationMember
  | AIAgentConfiguration.ManualSearchAIAgentConfigurationMember
  | AIAgentConfiguration.NoteTakingAIAgentConfigurationMember
  | AIAgentConfiguration.OrchestrationAIAgentConfigurationMember
  | AIAgentConfiguration.SelfServiceAIAgentConfigurationMember
  | AIAgentConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AIAgentConfiguration {
  /**
   * The configuration for AI Agents of type `MANUAL_SEARCH`.
   *
   * @public
   */
  export interface ManualSearchAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for AI Agents of type `ANSWER_RECOMMENDATION`.
   *
   * @public
   */
  export interface AnswerRecommendationAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for AI Agents of type SELF_SERVICE.
   *
   * @public
   */
  export interface SelfServiceAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for the EMAIL_RESPONSE AI agent that generates professional email responses using knowledge base content.
   *
   * @public
   */
  export interface EmailResponseAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration: EmailResponseAIAgentConfiguration;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for the EMAIL_OVERVIEW AI agent that generates structured overview of email conversations.
   *
   * @public
   */
  export interface EmailOverviewAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration: EmailOverviewAIAgentConfiguration;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for the EMAIL_GENERATIVE_ANSWER AI agent that provides comprehensive knowledge-based answers for customer queries.
   *
   * @public
   */
  export interface EmailGenerativeAnswerAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration: EmailGenerativeAnswerAIAgentConfiguration;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for AI Agents of type `ORCHESTRATION`.
   *
   * @public
   */
  export interface OrchestrationAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration: OrchestrationAIAgentConfiguration;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for AI Agents of type `NOTE_TAKING`.
   *
   * @public
   */
  export interface NoteTakingAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration: NoteTakingAIAgentConfiguration;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for AI Agents of type `CASE_SUMMARIZATION`.
   *
   * @public
   */
  export interface CaseSummarizationAIAgentConfigurationMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration: CaseSummarizationAIAgentConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    manualSearchAIAgentConfiguration?: never;
    answerRecommendationAIAgentConfiguration?: never;
    selfServiceAIAgentConfiguration?: never;
    emailResponseAIAgentConfiguration?: never;
    emailOverviewAIAgentConfiguration?: never;
    emailGenerativeAnswerAIAgentConfiguration?: never;
    orchestrationAIAgentConfiguration?: never;
    noteTakingAIAgentConfiguration?: never;
    caseSummarizationAIAgentConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    manualSearchAIAgentConfiguration: (value: ManualSearchAIAgentConfiguration) => T;
    answerRecommendationAIAgentConfiguration: (value: AnswerRecommendationAIAgentConfiguration) => T;
    selfServiceAIAgentConfiguration: (value: SelfServiceAIAgentConfiguration) => T;
    emailResponseAIAgentConfiguration: (value: EmailResponseAIAgentConfiguration) => T;
    emailOverviewAIAgentConfiguration: (value: EmailOverviewAIAgentConfiguration) => T;
    emailGenerativeAnswerAIAgentConfiguration: (value: EmailGenerativeAnswerAIAgentConfiguration) => T;
    orchestrationAIAgentConfiguration: (value: OrchestrationAIAgentConfiguration) => T;
    noteTakingAIAgentConfiguration: (value: NoteTakingAIAgentConfiguration) => T;
    caseSummarizationAIAgentConfiguration: (value: CaseSummarizationAIAgentConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAIAgentRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The name of the AI Agent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the AI Agent.
   *
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * The configuration of the AI Agent.
   *
   * @public
   */
  configuration: AIAgentConfiguration | undefined;

  /**
   * The visibility status of the AI Agent.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the AI Agent.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The data for the AI Agent.
 *
 * @public
 */
export interface AIAgentData {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the AI Agent.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI agent.
   *
   * @public
   */
  aiAgentArn: string | undefined;

  /**
   * The name of the AI Agent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the AI Agent.
   *
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * Configuration for the AI Agent.
   *
   * @public
   */
  configuration: AIAgentConfiguration | undefined;

  /**
   * The time the AI Agent was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * The description of the AI Agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The visibility status of the AI Agent.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies the origin of the AI Agent. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The status of the AI Agent.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface CreateAIAgentResponse {
  /**
   * The data of the created AI Agent.
   *
   * @public
   */
  aiAgent?: AIAgentData | undefined;
}

/**
 * @public
 */
export interface CreateAIAgentVersionRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The modification time of the AI Agent should be tracked for version creation. This field should be specified to avoid version creation when simultaneous update to the underlying AI Agent are possible. The value should be the modifiedTime returned from the request to create or update an AI Agent so that version creation can fail if an update to the AI Agent post the specified modification time has been made.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIAgentVersionResponse {
  /**
   * The data of the AI Agent version.
   *
   * @public
   */
  aiAgent?: AIAgentData | undefined;

  /**
   * The version number of the AI Agent version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIAgentRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The version number of the AI Agent version.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent (with or without a version qualifier). Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  aiAgentId: string | undefined;
}

/**
 * @public
 */
export interface GetAIAgentResponse {
  /**
   * The data of the AI Agent.
   *
   * @public
   */
  aiAgent?: AIAgentData | undefined;

  /**
   * The version number of the AI Agent version (returned if an AI Agent version was specified via use of a qualifier for the `aiAgentId` on the request).
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIAgentsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The origin of the AI Agents to be listed. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * The summary of the AI Agent.
 *
 * @public
 */
export interface AIAgentSummary {
  /**
   * The name of the AI Agent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the AI Agent.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The type of the AI Agent.
   *
   * @public
   */
  type: AIAgentType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI agent.
   *
   * @public
   */
  aiAgentArn: string | undefined;

  /**
   * The time the AI Agent was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * The visibility status of the AI Agent.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The configuration for the AI Agent.
   *
   * @public
   */
  configuration?: AIAgentConfiguration | undefined;

  /**
   * The origin of the AI Agent. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The description of the AI Agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the AI Agent.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIAgentsResponse {
  /**
   * The summaries of AI Agents.
   *
   * @public
   */
  aiAgentSummaries: AIAgentSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIAgentVersionsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent for which versions are to be listed.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The origin of the AI Agent versions to be listed. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * The summary of the AI Agent version.
 *
 * @public
 */
export interface AIAgentVersionSummary {
  /**
   * The data for the summary of the AI Agent version.
   *
   * @public
   */
  aiAgentSummary?: AIAgentSummary | undefined;

  /**
   * The version number for this AI Agent version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIAgentVersionsResponse {
  /**
   * The summaries of AI Agent versions.
   *
   * @public
   */
  aiAgentVersionSummaries: AIAgentVersionSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIAgentRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Agent.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The visbility status of the Amazon Q in Connect AI Agent.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The configuration of the Amazon Q in Connect AI Agent.
   *
   * @public
   */
  configuration?: AIAgentConfiguration | undefined;

  /**
   * The description of the Amazon Q in Connect AI Agent.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIAgentResponse {
  /**
   * The data of the updated Amazon Q in Connect AI Agent.
   *
   * @public
   */
  aiAgent?: AIAgentData | undefined;
}

/**
 * A type that specifies the AI Agent ID configuration data when mapping an AI Agents to be used for an AI Agent type on a session or assistant.
 *
 * @public
 */
export interface AIAgentConfigurationData {
  /**
   * The ID of the AI Agent to be configured.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * Indicates whether the AI Agent configured for this AI Agent type is enabled. When this value is omitted or set to true, the configured AI Agent runs; when set to false, the AI Agent ID is retained but no AI Agent runs for the AI Agent type. Setting this value to false is currently supported only for the `ANSWER_RECOMMENDATION` AI Agent type; other requests to set it to false are rejected with a validation error.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * Contains filter strengths for harmful content. AI Guardrail's support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
 *
 * - **Hate**: Describes input prompts and model responses that discriminate, criticize, insult, denounce, or dehumanize a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).
 * - **Insults**: Describes input prompts and model responses that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.
 * - **Sexual**: Describes input prompts and model responses that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.
 * - **Violence**: Describes input prompts and model responses that includes glorification of, or threats to inflict physical pain, hurt, or injury toward a person, group, or thing.
 *
 * Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as *Hate* with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as *Hate* with HIGH confidence, *Insults* with LOW confidence, *Sexual* with NONE confidence, and *Violence* with MEDIUM confidence.
 *
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * The harmful category that the content filter is applied to.
   *
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;
}

/**
 * Contains details about how to handle harmful content.
 *
 * @public
 */
export interface AIGuardrailContentPolicyConfig {
  /**
   * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
   *
   * @public
   */
  filtersConfig: GuardrailContentFilterConfig[] | undefined;
}

/**
 * The filter configuration details for the AI Guardrail's contextual grounding filter.
 *
 * @public
 */
export interface GuardrailContextualGroundingFilterConfig {
  /**
   * The filter type for the AI Guardrail's contextual grounding filter.
   *
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * The threshold details for the AI Guardrail's contextual grounding filter.
   *
   * @public
   */
  threshold: number | undefined;
}

/**
 * The policy configuration details for the AI Guardrail's contextual grounding policy.
 *
 * @public
 */
export interface AIGuardrailContextualGroundingPolicyConfig {
  /**
   * The filter configuration details for the AI Guardrails contextual grounding policy.
   *
   * @public
   */
  filtersConfig: GuardrailContextualGroundingFilterConfig[] | undefined;
}

/**
 * The PII entity to configure for the AI Guardrail.
 *
 * @public
 */
export interface GuardrailPiiEntityConfig {
  /**
   * Configure AI Guardrail type when the PII entity is detected.
   *
   * The following PIIs are used to block or mask sensitive information:
   *
   * - **General**
   *
   *   - **ADDRESS**
   *
   *     A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood.
   *   - **AGE**
   *
   *     An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guarrails recognizes "40 years" as an age.
   *   - **NAME**
   *
   *     An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. AI Guardrail doesn't apply this entity type to names that are part of organizations or addresses. For example, AI Guardrail recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address.
   *   - **EMAIL**
   *
   *     An email address, such as *marymajor@email.com*.
   *   - **PHONE**
   *
   *     A phone number. This entity type also includes fax and pager numbers.
   *   - **USERNAME**
   *
   *     A user name that identifies an account, such as a login name, screen name, nick name, or handle.
   *   - **PASSWORD**
   *
   *     An alphanumeric string that is used as a password, such as "* *very20special#pass**".
   *   - **DRIVER_ID**
   *
   *     The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters.
   *   - **LICENSE_PLATE**
   *
   *     A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country.
   *   - **VEHICLE_IDENTIFICATION_NUMBER**
   *
   *     A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the *ISO 3779* specification. Each country has specific codes and formats for VINs.
   * - **Finance**
   *
   *   - **CREDIT_DEBIT_CARD_CVV**
   *
   *     A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code.
   *   - **CREDIT_DEBIT_CARD_EXPIRY**
   *
   *     The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as *month/year* or *MM/YY*. AI Guardrail recognizes expiration dates such as *01/21*, *01/2021*, and *Jan 2021*.
   *   - **CREDIT_DEBIT_CARD_NUMBER**
   *
   *     The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present.
   *   - **PIN**
   *
   *     A four-digit personal identification number (PIN) with which you can access your bank account.
   *   - **INTERNATIONAL_BANK_ACCOUNT_NUMBER**
   *
   *     An International Bank Account Number has specific formats in each country. For more information, see [www.iban.com/structure](https://www.iban.com/structure).
   *   - **SWIFT_CODE**
   *
   *     A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.
   *
   *     SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.
   * - **IT**
   *
   *   - **IP_ADDRESS**
   *
   *     An IPv4 address, such as *198.51.100.0*.
   *   - **MAC_ADDRESS**
   *
   *     A *media access control* (MAC) address is a unique identifier assigned to a network interface controller (NIC).
   *   - **URL**
   *
   *     A web address, such as *www.example.com*.
   *   - **AWS_ACCESS_KEY**
   *
   *     A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically.
   *   - **AWS_SECRET_KEY**
   *
   *     A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically.
   * - **USA specific**
   *
   *   - **US_BANK_ACCOUNT_NUMBER**
   *
   *     A US bank account number, which is typically 10 to 12 digits long.
   *   - **US_BANK_ROUTING_NUMBER**
   *
   *     A US bank account routing number. These are typically nine digits long,
   *   - **US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER**
   *
   *     A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits.
   *   - **US_PASSPORT_NUMBER**
   *
   *     A US passport number. Passport numbers range from six to nine alphanumeric characters.
   *   - **US_SOCIAL_SECURITY_NUMBER**
   *
   *     A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents.
   * - **Canada specific**
   *
   *   - **CA_HEALTH_NUMBER**
   *
   *     A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits.
   *   - **CA_SOCIAL_INSURANCE_NUMBER**
   *
   *     A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.
   *
   *     The SIN is formatted as three groups of three digits, such as *123-456-789*. A SIN can be validated through a simple check-digit process called the Luhn algorithm. For more information, see [Luhn algorithm](https://www.wikipedia.org/wiki/Luhn_algorithm) on the Wikipedia website.
   * - **UK Specific**
   *
   *   - **UK_NATIONAL_HEALTH_SERVICE_NUMBER**
   *
   *     A UK National Health Service Number is a 10-17 digit number, such as *485 555 3456*. The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.
   *   - **UK_NATIONAL_INSURANCE_NUMBER**
   *
   *     A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.
   *
   *     The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.
   *   - **UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER**
   *
   *     A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business.
   * - **Custom**
   *
   *   - **Regex filter** - You can use a regular expressions to define patterns for an AI Guardrail to recognize and act upon such as serial number, booking ID etc..
   *
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * Configure AI Guardrail's action when the PII entity is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;
}

/**
 * The regular expression to configure for the AI Guardrail.
 *
 * @public
 */
export interface GuardrailRegexConfig {
  /**
   * The name of the regular expression to configure for the AI Guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the regular expression to configure for the AI Guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The regular expression pattern to configure for the AI Guardrail.
   *
   * @public
   */
  pattern: string | undefined;

  /**
   * The AI Guardrail action to configure when matching regular expression is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;
}

/**
 * Contains details about PII entities and regular expressions to configure for the AI Guardrail.
 *
 * @public
 */
export interface AIGuardrailSensitiveInformationPolicyConfig {
  /**
   * A list of PII entities to configure to the AI Guardrail.
   *
   * @public
   */
  piiEntitiesConfig?: GuardrailPiiEntityConfig[] | undefined;

  /**
   * A list of regular expressions to configure to the AI Guardrail.
   *
   * @public
   */
  regexesConfig?: GuardrailRegexConfig[] | undefined;
}

/**
 * Details about topics for the AI Guardrail to identify and deny.
 *
 * @public
 */
export interface GuardrailTopicConfig {
  /**
   * The name of the topic to deny.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A definition of the topic to deny.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
   *
   * @public
   */
  examples?: string[] | undefined;

  /**
   * Specifies to deny the topic.
   *
   * @public
   */
  type: GuardrailTopicType | undefined;
}

/**
 * Contains details about topics that the AI Guardrail should identify and deny.
 *
 * @public
 */
export interface AIGuardrailTopicPolicyConfig {
  /**
   * A list of policies related to topics that the AI Guardrail should deny.
   *
   * @public
   */
  topicsConfig: GuardrailTopicConfig[] | undefined;
}

/**
 * The managed word list to configure for the AI Guardrail.
 *
 * @public
 */
export interface GuardrailManagedWordsConfig {
  /**
   * The managed word type to configure for the AI Guardrail.
   *
   * @public
   */
  type: GuardrailManagedWordsType | undefined;
}

/**
 * A word to configure for the AI Guardrail.
 *
 * @public
 */
export interface GuardrailWordConfig {
  /**
   * Text of the word configured for the AI Guardrail to block.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * Contains details about the word policy to configured for the AI Guardrail.
 *
 * @public
 */
export interface AIGuardrailWordPolicyConfig {
  /**
   * A list of words to configure for the AI Guardrail.
   *
   * @public
   */
  wordsConfig?: GuardrailWordConfig[] | undefined;

  /**
   * A list of managed words to configure for the AI Guardrail.
   *
   * @public
   */
  managedWordListsConfig?: GuardrailManagedWordsConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The name of the AI Guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message to return when the AI Guardrail blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message to return when the AI Guardrail blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * The visibility status of the AI Guardrail.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * A description of the AI Guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The topic policies to configure for the AI Guardrail.
   *
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * The content filter policies to configure for the AI Guardrail.
   *
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * The word policy you configure for the AI Guardrail.
   *
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * The sensitive information policy to configure for the AI Guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * The contextual grounding policy configuration used to create an AI Guardrail.
   *
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The data for the AI Guardrail
 *
 * @public
 */
export interface AIGuardrailData {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI Guardrail.
   *
   * @public
   */
  aiGuardrailArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The name of the AI Guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The visibility status of the AI Guardrail.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The message to return when the AI Guardrail blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message to return when the AI Guardrail blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * A description of the AI Guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains details about topics that the AI Guardrail should identify and deny.
   *
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * Contains details about how to handle harmful content.
   *
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * Contains details about the word policy to configured for the AI Guardrail.
   *
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * Contains details about PII entities and regular expressions to configure for the AI Guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * The policy configuration details for the AI Guardrail's contextual grounding policy.
   *
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The status of the AI Guardrail.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The time the AI Guardrail was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailResponse {
  /**
   * The data of the AI Guardrail.
   *
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailVersionRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The time the AI Guardrail was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIGuardrailVersionResponse {
  /**
   * The data of the AI Guardrail version.
   *
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;

  /**
   * The version number of the AI Guardrail version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIGuardrailRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The version number of the AI Guardrail version to be deleted.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;
}

/**
 * @public
 */
export interface GetAIGuardrailResponse {
  /**
   * The data of the AI Guardrail.
   *
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;

  /**
   * The version number of the AI Guardrail version (returned if an AI Guardrail version was specified via use of a qualifier for the `aiGuardrailId` on the request).
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the AI Guardrail.
 *
 * @public
 */
export interface AIGuardrailSummary {
  /**
   * The name of the AI Guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI Guardrail.
   *
   * @public
   */
  aiGuardrailArn: string | undefined;

  /**
   * The time the AI Guardrail was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * The visibility status of the AI Guardrail.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * A description of the AI Guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the AI Guardrail.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailsResponse {
  /**
   * The summaries of the AI Guardrails.
   *
   * @public
   */
  aiGuardrailSummaries: AIGuardrailSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailVersionsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail for which versions are to be listed.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the AI Guardrail version.
 *
 * @public
 */
export interface AIGuardrailVersionSummary {
  /**
   * The data for the summary of the AI Guardrail version.
   *
   * @public
   */
  aiGuardrailSummary?: AIGuardrailSummary | undefined;

  /**
   * The version number for this AI Guardrail version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailVersionsResponse {
  /**
   * The summaries of the AI Guardrail versions.
   *
   * @public
   */
  aiGuardrailVersionSummaries: AIGuardrailVersionSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIGuardrailRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * The visibility status of the Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The message to return when the AI Guardrail blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message to return when the AI Guardrail blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * A description of the AI Guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The topic policies to configure for the AI Guardrail.
   *
   * @public
   */
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig | undefined;

  /**
   * The content filter policies to configure for the AI Guardrail.
   *
   * @public
   */
  contentPolicyConfig?: AIGuardrailContentPolicyConfig | undefined;

  /**
   * The word policy you configure for the AI Guardrail.
   *
   * @public
   */
  wordPolicyConfig?: AIGuardrailWordPolicyConfig | undefined;

  /**
   * The sensitive information policy to configure for the AI Guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * The contextual grounding policy configuration used to create an AI Guardrail.
   *
   * @public
   */
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAIGuardrailResponse {
  /**
   * The data of the updated Amazon Q in Connect AI Guardrail.
   *
   * @public
   */
  aiGuardrail?: AIGuardrailData | undefined;
}

/**
 * The assessment information from the AI Guardrail.
 *
 * @public
 */
export interface AIGuardrailAssessment {
  /**
   * Indicates whether the AI Guardrail blocked the content.
   *
   * @public
   */
  blocked: boolean | undefined;
}

/**
 * The configuration for inference parameters when using AI Prompts.
 *
 * @public
 */
export interface AIPromptInferenceConfiguration {
  /**
   * The temperature setting for controlling randomness in the generated response.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The top-P sampling parameter for nucleus sampling.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The top-K sampling parameter for token selection.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * The maximum number of tokens to generate in the response.
   *
   * @public
   */
  maxTokensToSample?: number | undefined;
}

/**
 * The configuration for a prompt template that supports full textual prompt configuration using a YAML prompt.
 *
 * @public
 */
export interface TextFullAIPromptEditTemplateConfiguration {
  /**
   * The YAML text for the AI Prompt template.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * A typed union that specifies the configuration for a prompt template based on its type.
 *
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
   * The configuration for a prompt template that supports full textual prompt configuration using a YAML prompt.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textFullAIPromptEditTemplateConfiguration: (value: TextFullAIPromptEditTemplateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAIPromptRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The name of the AI Prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of this AI Prompt.
   *
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * The configuration of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateConfiguration: AIPromptTemplateConfiguration | undefined;

  /**
   * The visibility status of the AI Prompt.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The type of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * The identifier of the model used for this AI Prompt.
   *
   * > **Note:** For information about which models are supported in each Amazon Web Services Region, see [Supported models for system/custom prompts](https://docs.aws.amazon.com/connect/latest/adminguide/create-ai-prompts.html#cli-create-aiprompt).
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The API Format of the AI Prompt.
   *
   * Recommended values: `MESSAGES | TEXT_COMPLETIONS`
   *
   * > **Note:** The values `ANTHROPIC_CLAUDE_MESSAGES | ANTHROPIC_CLAUDE_TEXT_COMPLETIONS` will be deprecated.
   *
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the AI Prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The inference configuration for the AI Prompt being created.
   *
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;
}

/**
 * The data for the AI Prompt
 *
 * @public
 */
export interface AIPromptData {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI Prompt.
   *
   * @public
   */
  aiPromptArn: string | undefined;

  /**
   * The name of the AI Prompt
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of this AI Prompt.
   *
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * The type of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * The identifier of the model used for this AI Prompt. The following model Ids are supported:
   *
   * - `anthropic.claude-3-haiku--v1:0`
   * - `apac.amazon.nova-lite-v1:0`
   * - `apac.amazon.nova-micro-v1:0`
   * - `apac.amazon.nova-pro-v1:0`
   * - `apac.anthropic.claude-3-5-sonnet--v2:0`
   * - `apac.anthropic.claude-3-haiku-20240307-v1:0`
   * - `eu.amazon.nova-lite-v1:0`
   * - `eu.amazon.nova-micro-v1:0`
   * - `eu.amazon.nova-pro-v1:0`
   * - `eu.anthropic.claude-3-7-sonnet-20250219-v1:0`
   * - `eu.anthropic.claude-3-haiku-20240307-v1:0`
   * - `us.amazon.nova-lite-v1:0`
   * - `us.amazon.nova-micro-v1:0`
   * - `us.amazon.nova-pro-v1:0`
   * - `us.anthropic.claude-3-5-haiku-20241022-v1:0`
   * - `us.anthropic.claude-3-7-sonnet-20250219-v1:0`
   * - `us.anthropic.claude-3-haiku-20240307-v1:0`
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The API format used for this AI Prompt.
   *
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * The configuration of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateConfiguration: AIPromptTemplateConfiguration | undefined;

  /**
   * The configuration for inference parameters when using the AI Prompt.
   *
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;

  /**
   * The time the AI Prompt was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * The description of the AI Prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The visibility status of the AI Prompt.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The origin of the AI Prompt. `SYSTEM` for a default AI Prompt created by Q in Connect or `CUSTOMER` for an AI Prompt created by calling AI Prompt creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The status of the AI Prompt.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptResponse {
  /**
   * The data of the AI Prompt.
   *
   * @public
   */
  aiPrompt?: AIPromptData | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptVersionRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The time the AI Prompt was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIPromptVersionResponse {
  /**
   * The data of the AI Prompt version.
   *
   * @public
   */
  aiPrompt?: AIPromptData | undefined;

  /**
   * The version number of the AI Prompt version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteAIPromptRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The version number of the AI Prompt version to be deleted.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;
}

/**
 * @public
 */
export interface GetAIPromptResponse {
  /**
   * The data of the AI Prompt.
   *
   * @public
   */
  aiPrompt?: AIPromptData | undefined;

  /**
   * The version number of the AI Prompt version (returned if an AI Prompt version was specified via use of a qualifier for the `aiPromptId` on the request).
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIPromptsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The origin of the AI Prompts to be listed. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * The summary of the AI Prompt.
 *
 * @public
 */
export interface AIPromptSummary {
  /**
   * The name of the AI Prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The type of this AI Prompt.
   *
   * @public
   */
  type: AIPromptType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI Prompt.
   *
   * @public
   */
  aiPromptArn: string | undefined;

  /**
   * The time the AI Prompt was last modified.
   *
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * The type of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateType: AIPromptTemplateType | undefined;

  /**
   * The identifier of the model used for this AI Prompt. Model Ids supported are: `anthropic.claude-3-haiku-20240307-v1:0`.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The API format used for this AI Prompt.
   *
   * @public
   */
  apiFormat: AIPromptAPIFormat | undefined;

  /**
   * The visibility status of the AI Prompt.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The origin of the AI Prompt. `SYSTEM` for a default AI Prompt created by Q in Connect or `CUSTOMER` for an AI Prompt created by calling AI Prompt creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The description of the AI Prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the AI Prompt.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAIPromptsResponse {
  /**
   * The summaries of the AI Prompts.
   *
   * @public
   */
  aiPromptSummaries: AIPromptSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIPromptVersionsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI prompt for which versions are to be listed.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The origin of the AI Prompt versions to be listed. `SYSTEM` for a default AI Agent created by Q in Connect or `CUSTOMER` for an AI Agent created by calling AI Agent creation APIs.
   *
   * @public
   */
  origin?: Origin | undefined;
}

/**
 * The summary of the AI Prompt version.
 *
 * @public
 */
export interface AIPromptVersionSummary {
  /**
   * The date for the summary of the AI Prompt version.
   *
   * @public
   */
  aiPromptSummary?: AIPromptSummary | undefined;

  /**
   * The version number for this AI Prompt version.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIPromptVersionsResponse {
  /**
   * The summaries of the AI Prompt versions.
   *
   * @public
   */
  aiPromptVersionSummaries: AIPromptVersionSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIPromptRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)..
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect AI Prompt.
   *
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * The visibility status of the Amazon Q in Connect AI prompt.
   *
   * @public
   */
  visibilityStatus: VisibilityStatus | undefined;

  /**
   * The configuration of the prompt template for this AI Prompt.
   *
   * @public
   */
  templateConfiguration?: AIPromptTemplateConfiguration | undefined;

  /**
   * The description of the Amazon Q in Connect AI Prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the model used for this AI Prompt.
   *
   * > **Note:** For information about which models are supported in each Amazon Web Services Region, see [Supported models for system/custom prompts](https://docs.aws.amazon.com/connect/latest/adminguide/create-ai-prompts.html#cli-create-aiprompt).
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The updated inference configuration for the AI Prompt.
   *
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAIPromptResponse {
  /**
   * The data of the updated Amazon Q in Connect AI Prompt.
   *
   * @public
   */
  aiPrompt?: AIPromptData | undefined;
}

/**
 * Content association data for a [step-by-step guide](https://docs.aws.amazon.com/connect/latest/adminguide/step-by-step-guided-experiences.html).
 *
 * @public
 */
export interface AmazonConnectGuideAssociationData {
  /**
   * The Amazon Resource Name (ARN) of an Connect Customer flow. Step-by-step guides are a type of flow.
   *
   * @public
   */
  flowId?: string | undefined;
}

/**
 * Configuration information for Amazon AppIntegrations to automatically ingest content.
 *
 * @public
 */
export interface AppIntegrationsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.
   *
   * - For [Salesforce](https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm), your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, and `IsDeleted` as source fields.
   * - For [ServiceNow](https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api), your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `number`, `short_description`, `sys_mod_count`, `workflow_state`, and `active` as source fields.
   * - For [Zendesk](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/), your AppIntegrations DataIntegration must have an ObjectConfiguration if `objectFields` is not provided, including at least `id`, `title`, `updated_at`, and `draft` as source fields.
   * - For [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index), your AppIntegrations DataIntegration must have a FileConfiguration, including only file extensions that are among `docx`, `pdf`, `html`, `htm`, and `txt`.
   * - For [Amazon S3](http://aws.amazon.com/s3/), the ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null. The `SourceURI` of your DataIntegration must use the following format: `s3://your_s3_bucket_name`.
   *
   *   > **Important:** The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services principal `app-integrations.amazonaws.com` to perform `s3:ListBucket`, `s3:GetObject`, and `s3:GetBucketLocation` against the bucket.
   *
   * @public
   */
  appIntegrationArn: string | undefined;

  /**
   * The fields from the source that are made available to your agents in Amazon Q in Connect. Optional if ObjectConfiguration is included in the provided DataIntegration.
   *
   * - For [Salesforce](https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm), you must include at least `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, and `IsDeleted`.
   * - For [ServiceNow](https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api), you must include at least `number`, `short_description`, `sys_mod_count`, `workflow_state`, and `active`.
   * - For [Zendesk](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/), you must include at least `id`, `title`, `updated_at`, and `draft`.
   *
   * Make sure to include additional fields. These fields are indexed and used to source recommendations.
   *
   * @public
   */
  objectFields?: string[] | undefined;
}

/**
 * Configuration for an external Bedrock knowledge base.
 *
 * @public
 */
export interface ExternalBedrockKnowledgeBaseConfig {
  /**
   * The Amazon Resource Name (ARN) of the external Bedrock knowledge base.
   *
   * @public
   */
  bedrockKnowledgeBaseArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to access the external Bedrock knowledge base.
   *
   * @public
   */
  accessRoleArn: string | undefined;
}

/**
 * The data that is input into Amazon Q in Connect as a result of the assistant association.
 *
 * @public
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.ExternalBedrockKnowledgeBaseConfigMember
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationInputData {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
   *
   * @public
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an external Bedrock knowledge base association.
   *
   * @public
   */
  export interface ExternalBedrockKnowledgeBaseConfigMember {
    knowledgeBaseId?: never;
    externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseId?: never;
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseId: (value: string) => T;
    externalBedrockKnowledgeBaseConfig: (value: ExternalBedrockKnowledgeBaseConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAssistantAssociationRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Association information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseAssociationData {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * The data that is output as a result of the assistant association.
 *
 * @public
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.ExternalBedrockKnowledgeBaseConfigMember
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationOutputData {
  /**
   * The knowledge base where output data is sent.
   *
   * @public
   */
  export interface KnowledgeBaseAssociationMember {
    knowledgeBaseAssociation: KnowledgeBaseAssociationData;
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an external Bedrock knowledge base association in the output data.
   *
   * @public
   */
  export interface ExternalBedrockKnowledgeBaseConfigMember {
    knowledgeBaseAssociation?: never;
    externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseAssociation?: never;
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseAssociation: (value: KnowledgeBaseAssociationData) => T;
    externalBedrockKnowledgeBaseConfig: (value: ExternalBedrockKnowledgeBaseConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the assistant association.
 *
 * @public
 */
export interface AssistantAssociationData {
  /**
   * The identifier of the assistant association.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assistant association.
   *
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * A union type that currently has a single argument, the knowledge base ID.
   *
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssistantAssociationResponse {
  /**
   * The assistant association.
   *
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationRequest {
  /**
   * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantAssociationResponse {
  /**
   * The assistant association.
   *
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * Summary information about the assistant association.
 *
 * @public
 */
export interface AssistantAssociationSummary {
  /**
   * The identifier of the assistant association.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assistant association.
   *
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * The association data.
   *
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsResponse {
  /**
   * Summary information about assistant associations.
   *
   * @public
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration information for the customer managed key used for encryption.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * The customer managed key used for encryption. For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html). For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id).
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssistantRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the assistant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The description of the assistant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * The customer managed key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

/**
 * The capability configuration for an Amazon Q in Connect assistant.
 *
 * @public
 */
export interface AssistantCapabilityConfiguration {
  /**
   * The type of Amazon Q in Connect assistant capability.
   *
   * @public
   */
  type?: AssistantCapabilityType | undefined;
}

/**
 * The configuration information for the Amazon Q in Connect assistant integration.
 *
 * @public
 */
export interface AssistantIntegrationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
   *
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * An entry in the orchestrator configuration list.
 *
 * @public
 */
export interface OrchestratorConfigurationEntry {
  /**
   * The identifier of the AI Agent in the orchestrator configuration.
   *
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * The use case for the orchestrator configuration. (for example Connect.SelfService, Connect.AgentAssistance)
   *
   * @public
   */
  orchestratorUseCase: string | undefined;
}

/**
 * The assistant data.
 *
 * @public
 */
export interface AssistantData {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The status of the assistant.
   *
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The configuration information for the Amazon Q in Connect assistant integration.
   *
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;

  /**
   * The configuration information for the Amazon Q in Connect assistant capability.
   *
   * @public
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration | undefined;

  /**
   * The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.
   *
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * The list of orchestrator configurations for the assistant.
   *
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateAssistantResponse {
  /**
   * Information about the assistant.
   *
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantResponse {
  /**
   * Information about the assistant.
   *
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than `WaitTimeSeconds`. If no messages are available and the wait time expires, the call returns successfully with an empty list.
   *
   * @public
   */
  waitTimeSeconds?: number | undefined;

  /**
   * The token for the next set of chunks. Use the value returned in the previous response in the next request to retrieve the next set of chunks.
   *
   * @public
   */
  nextChunkToken?: string | undefined;

  /**
   * The type of recommendation being requested.
   *
   * @public
   */
  recommendationType?: RecommendationType | undefined;
}

/**
 * Details about case summarization chunk data.
 *
 * @public
 */
export interface CaseSummarizationChunkDataDetails {
  /**
   * A chunk of the case summarization completion.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * Token for retrieving the next chunk of streaming summarization data, if available.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details about the source content ranking data.
 *
 * @public
 */
export interface RankingData {
  /**
   * The relevance level of the recommendation.
   *
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * The relevance score of the content.
   *
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;
}

/**
 * Offset specification to describe highlighting of document excerpts for rendering search results and recommendations.
 *
 * @public
 */
export interface Highlight {
  /**
   * The offset for the start of the highlight.
   *
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * The offset for the end of the highlight.
   *
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * The text of the document.
 *
 * @public
 */
export interface DocumentText {
  /**
   * Text in the document.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Highlights in the document text.
   *
   * @public
   */
  highlights?: Highlight[] | undefined;
}

/**
 * Details about the source content text data.
 *
 * @public
 */
export interface TextData {
  /**
   * The text of the document.
   *
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * The text of the document.
   *
   * @public
   */
  excerpt?: DocumentText | undefined;
}

/**
 * Details about the content data.
 *
 * @public
 */
export interface ContentDataDetails {
  /**
   * Details about the content text data.
   *
   * @public
   */
  textData: TextData | undefined;

  /**
   * Details about the content ranking data.
   *
   * @public
   */
  rankingData: RankingData | undefined;
}

/**
 * Details of streaming chunk data for email overview including completion text and pagination tokens.
 *
 * @public
 */
export interface EmailOverviewChunkDataDetails {
  /**
   * The partial or complete overview text content in structured HTML format with customer issues, resolutions, and next steps.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * Token for retrieving the next chunk of streaming overview data, if available.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details of streaming chunk data for email responses including completion text and pagination tokens.
 *
 * @public
 */
export interface EmailResponseChunkDataDetails {
  /**
   * The partial or complete professional email response text with appropriate greetings and closings.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * Token for retrieving the next chunk of streaming response data, if available.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details about the detected intent.
 *
 * @public
 */
export interface IntentDetectedDataDetails {
  /**
   * The detected intent.
   *
   * @public
   */
  intent: string | undefined;

  /**
   * The identifier of the detected intent.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * The relevance level of the detected intent.
   *
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;
}

/**
 * Details about notes chunk data.
 *
 * @public
 */
export interface NotesChunkDataDetails {
  /**
   * A chunk of the notes completion.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * The token for the next chunk of notes data.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details about notes data.
 *
 * @public
 */
export interface NotesDataDetails {
  /**
   * The completion data for notes.
   *
   * @public
   */
  completion?: string | undefined;
}

/**
 * Details about a proactive recommendation, including the token used to retrieve its chunked response with `GetNextMessage`.
 *
 * @public
 */
export interface ProactiveRecommendationDataDetails {
  /**
   * The token used to retrieve the next message in the proactive recommendation. Pass this token in a `GetNextMessage` request to continue receiving the chunked proactive response. Each response returns the next token to use until the chunked response is complete.
   *
   * @public
   */
  nextMessageToken: string | undefined;
}

/**
 * Contains information about where the text with a citation begins and ends in the generated output.
 *
 * @public
 */
export interface CitationSpan {
  /**
   * Where the text with a citation starts in the generated output.
   *
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * Where the text with a citation ends in the generated output.
   *
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * Details about the source content data.
 *
 * @public
 */
export interface SourceContentDataDetails {
  /**
   * The identifier of the source content.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the source content.
   *
   * @public
   */
  type: SourceContentType | undefined;

  /**
   * Details about the source content text data.
   *
   * @public
   */
  textData: TextData | undefined;

  /**
   * Details about the source content ranking data.
   *
   * @public
   */
  rankingData: RankingData | undefined;

  /**
   * Contains information about where the text with a citation begins and ends in the generated output.
   *
   * @public
   */
  citationSpan?: CitationSpan | undefined;
}

/**
 * Details about suggested message data.
 *
 * @public
 */
export interface SuggestedMessageDataDetails {
  /**
   * The text content of the suggested message.
   *
   * @public
   */
  messageText: string | undefined;
}

/**
 * Reference information about the content.
 *
 * @public
 */
export interface ContentReference {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn?: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn?: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId?: string | undefined;

  /**
   * The web URL of the source content.
   *
   * @public
   */
  sourceURL?: string | undefined;

  /**
   * The type of reference content.
   *
   * @public
   */
  referenceType?: ReferenceType | undefined;
}

/**
 * Reference information about generative content.
 *
 * @public
 */
export interface GenerativeReference {
  /**
   * The identifier of the LLM model.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The identifier of the LLM model.
   *
   * @public
   */
  generationId?: string | undefined;
}

/**
 * Reference information for a suggested message.
 *
 * @public
 */
export interface SuggestedMessageReference {
  /**
   * The identifier of the AI Agent that generated the suggested message.
   *
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI Agent that generated the suggested message.
   *
   * @public
   */
  aiAgentArn: string | undefined;
}

/**
 * Reference data.
 *
 * @public
 */
export type DataReference =
  | DataReference.ContentReferenceMember
  | DataReference.GenerativeReferenceMember
  | DataReference.SuggestedMessageReferenceMember
  | DataReference.$UnknownMember;

/**
 * @public
 */
export namespace DataReference {
  /**
   * Reference information about the content.
   *
   * @public
   */
  export interface ContentReferenceMember {
    contentReference: ContentReference;
    generativeReference?: never;
    suggestedMessageReference?: never;
    $unknown?: never;
  }

  /**
   * Reference information about the generative content.
   *
   * @public
   */
  export interface GenerativeReferenceMember {
    contentReference?: never;
    generativeReference: GenerativeReference;
    suggestedMessageReference?: never;
    $unknown?: never;
  }

  /**
   * Reference information for suggested messages.
   *
   * @public
   */
  export interface SuggestedMessageReferenceMember {
    contentReference?: never;
    generativeReference?: never;
    suggestedMessageReference: SuggestedMessageReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentReference?: never;
    generativeReference?: never;
    suggestedMessageReference?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contentReference: (value: ContentReference) => T;
    generativeReference: (value: GenerativeReference) => T;
    suggestedMessageReference: (value: SuggestedMessageReference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The document.
 *
 * @public
 */
export interface Document {
  /**
   * A reference to the content resource.
   *
   * @public
   */
  contentReference: ContentReference | undefined;

  /**
   * The title of the document.
   *
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * The excerpt from the document.
   *
   * @public
   */
  excerpt?: DocumentText | undefined;
}

/**
 * Data associated with the QUERY RecommendationTriggerType.
 *
 * @public
 */
export interface QueryRecommendationTriggerData {
  /**
   * The text associated with the recommendation trigger.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * A union type containing information related to the trigger.
 *
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
   * Data associated with the QUERY RecommendationTriggerType.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    query: (value: QueryRecommendationTriggerData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in `recommendationIds` by a single RecommendationTrigger.
 *
 * @public
 */
export interface RecommendationTrigger {
  /**
   * The identifier of the recommendation trigger.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of recommendation trigger.
   *
   * @public
   */
  type: RecommendationTriggerType | undefined;

  /**
   * The source of the recommendation trigger.
   *
   * - ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens issue.
   * - RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens rule.
   *
   * @public
   */
  source: RecommendationSourceType | undefined;

  /**
   * A union type containing information related to the trigger.
   *
   * @public
   */
  data: RecommendationTriggerData | undefined;

  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about the assistant.
 *
 * @public
 */
export interface AssistantSummary {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The name of the assistant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The status of the assistant.
   *
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * The description of the assistant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The configuration information for the Amazon Q in Connect assistant integration.
   *
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;

  /**
   * The configuration information for the Amazon Q in Connect assistant capability.
   *
   * @public
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration | undefined;

  /**
   * The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.
   *
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * The list of orchestrator configurations for the assistant.
   *
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsResponse {
  /**
   * Information about the assistants.
   *
   * @public
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelsRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN. The assistant's region determines which models are available.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The type of the AI Prompt to filter models by. When specified, only models that support the given AI Prompt type are returned.
   *
   * @public
   */
  aiPromptType?: AIPromptType | undefined;

  /**
   * The lifecycle status of models to filter by. When specified, only models with the given lifecycle status are returned.
   *
   * @public
   */
  modelLifecycle?: ModelLifecycle | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of a model available to an Amazon Q in Connect assistant.
 *
 * @public
 */
export interface ModelSummary {
  /**
   * The identifier of the model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The display name of the model.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The cross-region availability status of the model. `NONE` indicates the model is only available in a single region, `REGIONAL` indicates the model is available through regional inference, and `GLOBAL` indicates the model is available through global cross-region inference.
   *
   * @public
   */
  crossRegionStatus?: CrossRegionStatus | undefined;

  /**
   * Whether the model supports prompt caching.
   *
   * @public
   */
  supportsPromptCaching?: boolean | undefined;

  /**
   * The list of AI Prompt types that the model supports.
   *
   * @public
   */
  supportedAIPromptTypes?: AIPromptType[] | undefined;

  /**
   * The current lifecycle of the model. `ACTIVE` indicates the model is recommended for use and `LEGACY` indicates the model is still usable but is deprecated.
   *
   * @public
   */
  modelLifecycle?: ModelLifecycle | undefined;

  /**
   * The timestamp when the model lifecycle will transition from `ACTIVE` to `LEGACY`.
   *
   * @public
   */
  legacyTimestamp?: Date | undefined;

  /**
   * The timestamp when the model will reach end of life and no longer be available for use.
   *
   * @public
   */
  endOfLifeTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * The summaries of the models available to the assistant.
   *
   * @public
   */
  modelSummaries: ModelSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * An error occurred when creating a recommendation.
 *
 * @public
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * The identifier of the recommendation that is in error.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * A recommendation is causing an error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedResponse {
  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * The identifiers of recommendations that are causing errors.
   *
   * @public
   */
  errors?: NotifyRecommendationsReceivedError[] | undefined;
}

/**
 * The feedback information for a generative target type.
 *
 * @public
 */
export interface GenerativeContentFeedbackData {
  /**
   * The relevance of the feedback.
   *
   * @public
   */
  relevance: Relevance | undefined;
}

/**
 * Information about the feedback.
 *
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
   * Information about the feedback for a generative target type.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    generativeContentFeedbackData: (value: GenerativeContentFeedbackData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the feedback target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The type of the feedback target.
   *
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * Information about the feedback provided.
   *
   * @public
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * @public
 */
export interface PutFeedbackResponse {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The identifier of the feedback target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The type of the feedback target.
   *
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * Information about the feedback provided.
   *
   * @public
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * The condition for the query.
 *
 * @public
 */
export interface QueryConditionItem {
  /**
   * The name of the field for query condition to query on.
   *
   * @public
   */
  field: QueryConditionFieldName | undefined;

  /**
   * The comparison operator for query condition to query on.
   *
   * @public
   */
  comparator: QueryConditionComparisonOperator | undefined;

  /**
   * The value for the query condition to query on.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Information about how to query content.
 *
 * @public
 */
export type QueryCondition =
  | QueryCondition.SingleMember
  | QueryCondition.$UnknownMember;

/**
 * @public
 */
export namespace QueryCondition {
  /**
   * The condition for the query.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    single: (value: QueryConditionItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input data for case summarization.
 *
 * @public
 */
export interface CaseSummarizationInputData {
  /**
   * The Amazon Resource Name (ARN) of the case for summarization.
   *
   * @public
   */
  caseArn: string | undefined;
}

/**
 * Information about the Amazon Q intent.
 *
 * @public
 */
export interface IntentInputData {
  /**
   * The identifier of the Amazon Q intent.
   *
   * @public
   */
  intentId: string | undefined;
}

/**
 * Information about the text to search for.
 *
 * @public
 */
export interface QueryTextInputData {
  /**
   * The text to search for.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * Input information for the query.
 *
 * @public
 */
export type QueryInputData =
  | QueryInputData.CaseSummarizationInputDataMember
  | QueryInputData.IntentInputDataMember
  | QueryInputData.QueryTextInputDataMember
  | QueryInputData.$UnknownMember;

/**
 * @public
 */
export namespace QueryInputData {
  /**
   * Input information for the query.
   *
   * @public
   */
  export interface QueryTextInputDataMember {
    queryTextInputData: QueryTextInputData;
    intentInputData?: never;
    caseSummarizationInputData?: never;
    $unknown?: never;
  }

  /**
   * Input information for the intent.
   *
   * @public
   */
  export interface IntentInputDataMember {
    queryTextInputData?: never;
    intentInputData: IntentInputData;
    caseSummarizationInputData?: never;
    $unknown?: never;
  }

  /**
   * Input data for case summarization queries.
   *
   * @public
   */
  export interface CaseSummarizationInputDataMember {
    queryTextInputData?: never;
    intentInputData?: never;
    caseSummarizationInputData: CaseSummarizationInputData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    queryTextInputData?: never;
    intentInputData?: never;
    caseSummarizationInputData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    queryTextInputData: (value: QueryTextInputData) => T;
    intentInputData: (value: IntentInputData) => T;
    caseSummarizationInputData: (value: CaseSummarizationInputData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface QueryAssistantRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The text to search for.
   *
   * @public
   */
  queryText?: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the Amazon Q in Connect session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Information about how to query content.
   *
   * @public
   */
  queryCondition?: QueryCondition[] | undefined;

  /**
   * Information about the query.
   *
   * @public
   */
  queryInputData?: QueryInputData | undefined;

  /**
   * The search type to be used against the Knowledge Base for this request. The values can be `SEMANTIC` which uses vector embeddings or `HYBRID` which use vector embeddings and raw text.
   *
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The type of the AI Agent being removed for use by default from the Amazon Q in Connect Assistant.
   *
   * @public
   */
  aiAgentType: AIAgentType | undefined;

  /**
   * The orchestrator use case for the AI Agent being removed.
   *
   * @public
   */
  orchestratorUseCase?: string | undefined;
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentResponse {}

/**
 * An attribute used for filtering.
 *
 * @public
 */
export interface FilterAttribute {
  /**
   * The key of the filter attribute.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the filter attribute.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * A knowledge source that provides content for recommendations.
 *
 * @public
 */
export type KnowledgeSource =
  | KnowledgeSource.AssistantAssociationIdsMember
  | KnowledgeSource.$UnknownMember;

/**
 * @public
 */
export namespace KnowledgeSource {
  /**
   * The list of assistant association identifiers for the knowledge source.
   *
   * @public
   */
  export interface AssistantAssociationIdsMember {
    assistantAssociationIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assistantAssociationIds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    assistantAssociationIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An error returned for a single assistant association whose knowledge base retrieval failed during a `Retrieve` operation. The overall operation still succeeds and returns the results from the associations that were queried successfully.
 *
 * @public
 */
export interface RetrieveError {
  /**
   * The identifier of the assistant association whose knowledge base retrieval failed.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The error code that categorizes the retrieval failure for the assistant association.
   *
   * @public
   */
  code: RetrieveErrorCode | undefined;

  /**
   * A human-readable description of the retrieval failure for the assistant association.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A single result from a content retrieval operation.
 *
 * @public
 */
export interface RetrieveResult {
  /**
   * The identifier of the assistant association for the retrieved result.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The URL, URI, or ID of the retrieved content when available, or a UUID when unavailable.
   *
   * @public
   */
  sourceId: string | undefined;

  /**
   * A type to define the KB origin of a retrieved content.
   *
   * @public
   */
  referenceType: ReferenceType | undefined;

  /**
   * The text content of the retrieved result.
   *
   * @public
   */
  contentText: string | undefined;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * The results of the content retrieval operation.
   *
   * @public
   */
  results: RetrieveResult[] | undefined;

  /**
   * The per-association errors returned when one or more knowledge base associations fail during a `Retrieve` operation that spans multiple assistant associations. The overall operation still succeeds and returns the results from the associations that were queried successfully. This list contains one entry for each association that failed, up to a maximum of five.
   *
   * @public
   */
  errors?: RetrieveError[] | undefined;
}

/**
 * A search filter.
 *
 * @public
 */
export interface Filter {
  /**
   * The field on which to filter.
   *
   * @public
   */
  field: FilterField | undefined;

  /**
   * The operator to use for comparing the field’s value with the provided value.
   *
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * The desired field value on which to filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The search expression.
 *
 * @public
 */
export interface SearchExpression {
  /**
   * The search expression filters.
   *
   * @public
   */
  filters: Filter[] | undefined;
}

/**
 * @public
 */
export interface SearchSessionsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The search expression to filter results.
   *
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * Summary information about the session.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * @public
 */
export interface SearchSessionsResponse {
  /**
   * Summary information about the sessions.
   *
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The name of the session.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An object that can be used to specify Tag conditions.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.
   *
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the email contact in Connect Customer. Used to retrieve email content and establish session context for AI-powered email assistance.
   *
   * @public
   */
  contactArn?: string | undefined;

  /**
   * The list of orchestrator configurations for the session being created.
   *
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;

  /**
   * The list of orchestrator configurations to remove from the session.
   *
   * @public
   */
  removeOrchestratorConfigurationList?: boolean | undefined;
}

/**
 * The configuration information for the session integration.
 *
 * @public
 */
export interface SessionIntegrationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
   *
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * Information about the session.
 *
 * @public
 */
export interface SessionData {
  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the session.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the session.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the session integration.
   *
   * @public
   */
  integrationConfiguration?: SessionIntegrationConfiguration | undefined;

  /**
   * An object that can be used to specify Tag conditions.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.
   *
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * The origin of the Session to be listed. `SYSTEM` for a default Session created by Amazon Q in Connect or `CUSTOMER` for a Session created by calling [CreateSession](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_CreateSession.html) API.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The list of orchestrator configurations for the session.
   *
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * The session.
   *
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface GetNextMessageRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The token for the next message. Use the value returned in the SendMessage or previous response in the next request to retrieve the next message.
   *
   * @public
   */
  nextMessageToken: string | undefined;
}

/**
 * A union type that specifies the data stored on the session.
 *
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
   * The string value of the data stored on the session.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The list of key-value pairs that are stored on the session.
 *
 * @public
 */
export interface RuntimeSessionData {
  /**
   * The key of the data stored on the session.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the data stored on the session.
   *
   * @public
   */
  value: RuntimeSessionDataValue | undefined;
}

/**
 * The conversation state associated to a message.
 *
 * @public
 */
export interface ConversationState {
  /**
   * The status of the conversation state.
   *
   * @public
   */
  status: ConversationStatus | undefined;

  /**
   * The reason of the conversation state.
   *
   * @public
   */
  reason?: ConversationStatusReason | undefined;
}

/**
 * A citation that references source content.
 *
 * @public
 */
export interface Citation {
  /**
   * The identifier of the content being cited.
   *
   * @public
   */
  contentId?: string | undefined;

  /**
   * The title of the cited content.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The identifier of the knowledge base containing the cited content.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * Contains information about where the text with a citation begins and ends in the generated output.
   *
   * @public
   */
  citationSpan: CitationSpan | undefined;

  /**
   * The source URL for the citation.
   *
   * @public
   */
  sourceURL?: string | undefined;

  /**
   * A type to define the KB origin of a cited content
   *
   * @public
   */
  referenceType: ReferenceType | undefined;
}

/**
 * The message data in text type.
 *
 * @public
 */
export interface TextMessage {
  /**
   * The value of the message data in text type.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The citations associated with the text message.
   *
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * The AI Guardrail assessment for the text message.
   *
   * @public
   */
  aiGuardrailAssessment?: AIGuardrailAssessment | undefined;
}

/**
 * Data about the result of tool usage.
 *
 * @public
 */
export interface ToolUseResultData {
  /**
   * The identifier of the tool use instance.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The name of the tool that was used.
   *
   * @public
   */
  toolName: string | undefined;

  /**
   * The result of the tool usage.
   *
   * @public
   */
  toolResult: __DocumentType | undefined;

  /**
   * The input schema for the tool use result.
   *
   * @public
   */
  inputSchema?: __DocumentType | undefined;
}

/**
 * The message data.
 *
 * @public
 */
export type MessageData =
  | MessageData.DataMember
  | MessageData.TextMember
  | MessageData.ToolUseResultMember
  | MessageData.$UnknownMember;

/**
 * @public
 */
export namespace MessageData {
  /**
   * The message data in text type.
   *
   * @public
   */
  export interface TextMember {
    text: TextMessage;
    toolUseResult?: never;
    data?: never;
    $unknown?: never;
  }

  /**
   * The result of tool usage in the message.
   *
   * @public
   */
  export interface ToolUseResultMember {
    text?: never;
    toolUseResult: ToolUseResultData;
    data?: never;
    $unknown?: never;
  }

  /**
   * The message data as a structured JSON document. This is the payload for a message of type `DATA`, and must be a JSON object at the root level.
   *
   * @public
   */
  export interface DataMember {
    text?: never;
    toolUseResult?: never;
    data: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUseResult?: never;
    data?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: TextMessage) => T;
    toolUseResult: (value: ToolUseResultData) => T;
    data: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The message output.
 *
 * @public
 */
export interface MessageOutput {
  /**
   * The value of a message data.
   *
   * @public
   */
  value: MessageData | undefined;

  /**
   * The identifier of a message.
   *
   * @public
   */
  messageId: string | undefined;

  /**
   * The participant of a message.
   *
   * @public
   */
  participant: Participant | undefined;

  /**
   * The timestamp of a message.
   *
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetNextMessageResponse {
  /**
   * The type of message response.
   *
   * @public
   */
  type: MessageType | undefined;

  /**
   * The message response to the requested message.
   *
   * @public
   */
  response: MessageOutput | undefined;

  /**
   * The identifier of the submitted message.
   *
   * @public
   */
  requestMessageId: string | undefined;

  /**
   * The state of current conversation.
   *
   * @public
   */
  conversationState: ConversationState | undefined;

  /**
   * The token for the next message.
   *
   * @public
   */
  nextMessageToken?: string | undefined;

  /**
   * The conversation data stored on an Amazon Q in Connect Session.
   *
   * @public
   */
  conversationSessionData?: RuntimeSessionData[] | undefined;

  /**
   * Indicates whether the chunked response has been terminated.
   *
   * @public
   */
  chunkedResponseTerminated?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The session.
   *
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The filter criteria for listing messages.
   *
   * @public
   */
  filter?: MessageFilterType | undefined;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * The message information.
   *
   * @public
   */
  messages: MessageOutput[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpansRequest {
  /**
   * UUID or ARN of the Connect AI Assistant resource
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * UUID or ARN of the Connect AI Session resource
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Pagination token for retrieving the next page of results
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of spans to return per page
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Per-policy guardrail assessment result. Captures which policy triggered, its outcome, and a policy-specific detail string.
 *
 * @public
 */
export interface GuardrailPolicyResult {
  /**
   * The type of guardrail policy that was evaluated.
   *
   * @public
   */
  policyType: GuardrailPolicyType | undefined;

  /**
   * Outcome of this specific policy.
   *
   * @public
   */
  action: GuardrailAction | undefined;

  /**
   * Policy-specific detail.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * Result of a single guardrail assessment, covering either the input (customer/user message) or the output (LLM response) of a Bedrock Converse call.
 *
 * @public
 */
export interface SpanGuardrailAssessment {
  /**
   * Unique AI Guardrail identifier.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * Customer-defined display name of the AI Guardrail resource.
   *
   * @public
   */
  guardrailName: string | undefined;

  /**
   * Content source the guardrail was evaluated against.
   *
   * @public
   */
  source: GuardrailSource | undefined;

  /**
   * Outcome of the guardrail assessment.
   *
   * @public
   */
  action: GuardrailAction | undefined;

  /**
   * Per-policy assessment results. Absent or empty when action is NONE.
   *
   * @public
   */
  policies?: GuardrailPolicyResult[] | undefined;
}

/**
 * Model reasoning and it's internal decision making process
 *
 * @public
 */
export interface SpanReasoningValue {
  /**
   * The reasoning text content
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A citation that spans a specific range of text.
 *
 * @public
 */
export interface SpanCitation {
  /**
   * The identifier of the content being cited in the span.
   *
   * @public
   */
  contentId?: string | undefined;

  /**
   * The title of the content being cited in the span.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The identifier of the knowledge base containing the cited content.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base containing the cited content.
   *
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * Text message content
 *
 * @public
 */
export interface SpanTextValue {
  /**
   * String content of the message text
   *
   * @public
   */
  value: string | undefined;

  /**
   * The citations associated with the span text.
   *
   * @public
   */
  citations?: SpanCitation[] | undefined;

  /**
   * The AI Guardrail assessment for the span text.
   *
   * @public
   */
  aiGuardrailAssessment?: AIGuardrailAssessment | undefined;
}

/**
 * Tool invocation message content
 *
 * @public
 */
export interface SpanToolUseValue {
  /**
   * Unique ID for this tool invocation
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The tool name
   *
   * @public
   */
  name: string | undefined;

  /**
   * The tool input arguments
   *
   * @public
   */
  arguments: __DocumentType | undefined;
}

/**
 * The configuration for a [SendMessage](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html) request.
 *
 * @public
 */
export interface MessageConfiguration {
  /**
   * Generates a filler response when tool selection is `QUESTION`.
   *
   * @public
   */
  generateFillerMessage?: boolean | undefined;

  /**
   * Configuration for generating chunked messages.
   *
   * @public
   */
  generateChunkedMessage?: boolean | undefined;
}

/**
 * The conversation history data to included in conversation context data before the Amazon Q in Connect session.
 *
 * @public
 */
export interface SelfServiceConversationHistory {
  /**
   * The number of turn of the conversation history data.
   *
   * @public
   */
  turnNumber?: number | undefined;

  /**
   * The input transcript of the conversation history data.
   *
   * @public
   */
  inputTranscript?: string | undefined;

  /**
   * The bot response of the conversation history data.
   *
   * @public
   */
  botResponse?: string | undefined;

  /**
   * The timestamp of the conversation history entry.
   *
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * The conversation context to include in SendMessage.
 *
 * @public
 */
export interface ConversationContext {
  /**
   * The self service conversation history before the Amazon Q in Connect session.
   *
   * @public
   */
  selfServiceConversationHistory: SelfServiceConversationHistory[] | undefined;
}

/**
 * The message input.
 *
 * @public
 */
export interface MessageInput {
  /**
   * The message input value.
   *
   * @public
   */
  value: MessageData | undefined;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the Amazon Q in Connect session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The message type.
   *
   * @public
   */
  type: MessageType | undefined;

  /**
   * The message data to submit to the Amazon Q in Connect session.
   *
   * @public
   */
  message: MessageInput | undefined;

  /**
   * The identifier of the AI Agent to use for processing the message.
   *
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * The conversation context before the Amazon Q in Connect session.
   *
   * @public
   */
  conversationContext?: ConversationContext | undefined;

  /**
   * The configuration of the [SendMessage](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html) request.
   *
   * @public
   */
  configuration?: MessageConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the AWS SDK populates this field.For more information about idempotency, see Making retries safe with idempotent APIs.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The orchestrator use case for message processing.
   *
   * @public
   */
  orchestratorUseCase?: string | undefined;

  /**
   * Additional metadata for the message.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * Request identifier from the origin system, used for end-to-end tracing across spans.
   *
   * @public
   */
  originRequestId?: string | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * The identifier of the submitted message.
   *
   * @public
   */
  requestMessageId: string | undefined;

  /**
   * The configuration of the [SendMessage](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html) request.
   *
   * @public
   */
  configuration?: MessageConfiguration | undefined;

  /**
   * The token for the next message, used by GetNextMessage.
   *
   * @public
   */
  nextMessageToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that can be used to specify Tag conditions.
   *
   * @public
   */
  tagFilter?: TagFilter | undefined;

  /**
   * The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.
   *
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * The updated list of orchestrator configurations for the session.
   *
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;

  /**
   * The list of orchestrator configurations to remove from the session.
   *
   * @public
   */
  removeOrchestratorConfigurationList?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSessionResponse {
  /**
   * Information about the session.
   *
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface UpdateSessionDataRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The namespace into which the session data is stored. Supported namespaces are: Custom
   *
   * @public
   */
  namespace?: SessionDataNamespace | undefined;

  /**
   * The data stored on the Amazon Q in Connect Session.
   *
   * @public
   */
  data: RuntimeSessionData[] | undefined;
}

/**
 * @public
 */
export interface UpdateSessionDataResponse {
  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The namespace into which the session data is stored. Supported namespaces are: Custom
   *
   * @public
   */
  namespace: SessionDataNamespace | undefined;

  /**
   * Data stored in the session.
   *
   * @public
   */
  data: RuntimeSessionData[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssistantAIAgentRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The type of the AI Agent being updated for use by default on the Amazon Q in Connect Assistant.
   *
   * @public
   */
  aiAgentType: AIAgentType | undefined;

  /**
   * The configuration of the AI Agent being updated for use by default on the Amazon Q in Connect Assistant.
   *
   * @public
   */
  configuration: AIAgentConfigurationData | undefined;

  /**
   * The orchestrator use case for the AI Agent being added.
   *
   * @public
   */
  orchestratorUseCase?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssistantAIAgentResponse {
  /**
   * The assistant data.
   *
   * @public
   */
  assistant?: AssistantData | undefined;
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
export interface BedrockFoundationModelConfigurationForParsing {
  /**
   * The ARN of the foundation model.
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
 * Token settings for each layer.
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
 * Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.
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
 * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 *
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE`, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
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
   * Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.
   *
   * @public
   */
  semanticChunkingConfiguration?: SemanticChunkingConfiguration | undefined;
}

/**
 * The configuration information of the Connect Customer data source.
 *
 * @public
 */
export interface ConnectConfiguration {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  instanceId?: string | undefined;
}

/**
 * The configuration information of the external data source.
 *
 * @public
 */
export type Configuration =
  | Configuration.ConnectConfigurationMember
  | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * The configuration information of the Connect Customer data source.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    connectConfiguration: (value: ConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The contents of a content association.
 *
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
   * The data of the step-by-step guide association.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    amazonConnectGuideAssociation: (value: AmazonConnectGuideAssociationData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateContentAssociationRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  association: ContentAssociationContents | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the content association.
 *
 * @public
 */
export interface ContentAssociationData {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content association.
   *
   * @public
   */
  contentAssociationArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * The content association.
   *
   * @public
   */
  associationData: ContentAssociationContents | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateContentAssociationResponse {
  /**
   * The association between Amazon Q in Connect content and another resource.
   *
   * @public
   */
  contentAssociation?: ContentAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteContentAssociationRequest {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetContentAssociationResponse {
  /**
   * The association between Amazon Q in Connect content and another resource.
   *
   * @public
   */
  contentAssociation?: ContentAssociationData | undefined;
}

/**
 * @public
 */
export interface ListContentAssociationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;
}

/**
 * Summary information about a content association.
 *
 * @public
 */
export interface ContentAssociationSummary {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content association.
   *
   * @public
   */
  contentAssociationArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: ContentAssociationType | undefined;

  /**
   * The content association.
   *
   * @public
   */
  associationData: ContentAssociationContents | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListContentAssociationsResponse {
  /**
   * Summary information about content associations.
   *
   * @public
   */
  contentAssociationSummaries: ContentAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContentRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the [SearchContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_SearchContent.html) API.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The title of the content. If not set, the title is equal to the name.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.
   *
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the content.
 *
 * @public
 */
export interface ContentData {
  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the content revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The media type of the content.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the content.
   *
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The URI of the content.
   *
   * @public
   */
  linkOutUri?: string | undefined;

  /**
   * The URL of the content.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;
}

/**
 * @public
 */
export interface CreateContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface DeleteContentRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryRequest {
  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Summary information about the content.
 *
 * @public
 */
export interface ContentSummary {
  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the revision of the content.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The media type of the content.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the content.
   *
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryResponse {
  /**
   * The content summary.
   *
   * @public
   */
  contentSummary?: ContentSummary | undefined;
}

/**
 * @public
 */
export interface ListContentsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListContentsResponse {
  /**
   * Information about the content.
   *
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The `revisionId` of the content resource to update, taken from an earlier call to `GetContent`, `GetContentSummary`, `SearchContent`, or `ListContents`. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a `PreconditionFailedException`.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing `overrideLinkOurUri`, exclude this argument and set `removeOverrideLinkOutUri` to true.
   *
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * Unset the existing `overrideLinkOutUri` if it exists.
   *
   * @public
   */
  removeOverrideLinkOutUri?: boolean | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * Information about how to render the content.
 *
 * @public
 */
export interface RenderingConfiguration {
  /**
   * A URI template containing exactly one variable in `$\{variableName\}`format. This can only be set for `EXTERNAL` knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:
   *
   * - Salesforce: `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, or `IsDeleted`
   * - ServiceNow: `number`, `short_description`, `sys_mod_count`, `workflow_state`, or `active`
   * - Zendesk: `id`, `title`, `updated_at`, or `draft`
   *
   * The variable is replaced with the actual value for a piece of content when calling [GetContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html).
   *
   * @public
   */
  templateUri?: string | undefined;
}

/**
 * The configuration of crawl limits for the web URLs.
 *
 * @public
 */
export interface WebCrawlerLimits {
  /**
   * Rate of web URLs retrieved per minute.
   *
   * @public
   */
  rateLimit?: number | undefined;
}

/**
 * A URL for crawling.
 *
 * @public
 */
export interface SeedUrl {
  /**
   * URL for crawling
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @public
 */
export interface UrlConfiguration {
  /**
   * List of URLs for crawling.
   *
   * @public
   */
  seedUrls?: SeedUrl[] | undefined;
}

/**
 * The configuration details for the web data source.
 *
 * @public
 */
export interface WebCrawlerConfiguration {
  /**
   * The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
   *
   * @public
   */
  urlConfiguration: UrlConfiguration | undefined;

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
   * The scope of what is crawled for your URLs. You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL `https://docs.aws.amazon.com/bedrock/latest/userguide/` and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain `aws.amazon.com` can also include sub domain `docs.aws.amazon.com`.
   *
   * @public
   */
  scope?: WebScopeType | undefined;
}

/**
 * Source configuration for managed resources.
 *
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
   * Configuration data for web crawler data source.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    webCrawlerConfiguration: (value: WebCrawlerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information about the external data source.
 *
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
   * Configuration information for Amazon AppIntegrations to automatically ingest content.
   *
   * @public
   */
  export interface AppIntegrationsMember {
    appIntegrations: AppIntegrationsConfiguration;
    managedSourceConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Source configuration for managed resources.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    appIntegrations: (value: AppIntegrationsConfiguration) => T;
    managedSourceConfiguration: (value: ManagedSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Settings for parsing document contents. By default, the service converts the contents of each document into text before splitting it into chunks. To improve processing of PDF files with tables and images, you can configure the data source to convert the pages of text into images and use a model to describe the contents of each page.
 *
 * @public
 */
export interface ParsingConfiguration {
  /**
   * The parsing strategy for the data source.
   *
   * @public
   */
  parsingStrategy: ParsingStrategy | undefined;

  /**
   * Settings for a foundation model used to parse documents for a data source.
   *
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationForParsing | undefined;
}

/**
 * Contains details about how to ingest the documents in a data source.
 *
 * @public
 */
export interface VectorIngestionConfiguration {
  /**
   * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   *
   * @public
   */
  chunkingConfiguration?: ChunkingConfiguration | undefined;

  /**
   * A custom parser for data source documents.
   *
   * @public
   */
  parsingConfiguration?: ParsingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The source of the knowledge base content. Only set this argument for EXTERNAL or Managed knowledge bases.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * Contains details about how to ingest the documents in a data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseData {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The status of the knowledge base.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * An epoch timestamp indicating the most recent content modification inside the knowledge base. If no content exists in a knowledge base, this value is unset.
   *
   * @public
   */
  lastContentModificationTime?: Date | undefined;

  /**
   * Contains details about how to ingest the documents in a data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * Source configuration information about the knowledge base.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Status of ingestion on data source.
   *
   * @public
   */
  ingestionStatus?: SyncStatus | undefined;

  /**
   * List of failure reasons on ingestion per file.
   *
   * @public
   */
  ingestionFailureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * The knowledge base.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * The container of the message template body.
 *
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
   * The content of the message template.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The body to use in email messages.
 *
 * @public
 */
export interface EmailMessageTemplateContentBody {
  /**
   * The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
   *
   * @public
   */
  plainText?: MessageTemplateBodyContentProvider | undefined;

  /**
   * The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
   *
   * @public
   */
  html?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The email header to include in email messages.
 *
 * @public
 */
export interface EmailHeader {
  /**
   * The name of the email header.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the email header.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The content of the message template that applies to the email channel subtype.
 *
 * @public
 */
export interface EmailMessageTemplateContent {
  /**
   * The subject line, or title, to use in email messages.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * The body to use in email messages.
   *
   * @public
   */
  body?: EmailMessageTemplateContentBody | undefined;

  /**
   * The email headers to include in email messages.
   *
   * @public
   */
  headers?: EmailHeader[] | undefined;
}

/**
 * The content of the push message template that applies to ADM (Amazon Device Messaging) notification service.
 *
 * @public
 */
export interface PushADMMessageTemplateContent {
  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message body to use in a push notification that is based on the message template.
   *
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:
   *
   * - `OPEN_APP` - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - `DEEP_LINK` - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - `URL` - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/`.
   *
   * @public
   */
  sound?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `action` property is `URL`.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The URL of an image to display in a push notification that's based on the message template.
   *
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
   *
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The content of the push message template that applies to APNS (Apple Push Notification service) notification service.
 *
 * @public
 */
export interface PushAPNSMessageTemplateContent {
  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message body to use in a push notification that is based on the message template.
   *
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:
   *
   * - `OPEN_APP` - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - `DEEP_LINK` - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the iOS platform.
   * - `URL` - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the `Library/Sounds` folder in your app's data container. If the sound file can't be found or you specify `default` for the value, the system plays the default alert sound.
   *
   * @public
   */
  sound?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `action` property is `URL`.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The URL of an image or video to display in push notifications that are based on the message template.
   *
   * @public
   */
  mediaUrl?: string | undefined;

  /**
   * The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.
   *
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The content of the push message template that applies to Baidu notification service.
 *
 * @public
 */
export interface PushBaiduMessageTemplateContent {
  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message body to use in a push notification that is based on the message template.
   *
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:
   *
   * - `OPEN_APP` - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - `DEEP_LINK` - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - `URL` - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/`.
   *
   * @public
   */
  sound?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `action` property is `URL`.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The URL of an image to display in a push notification that's based on the message template.
   *
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
   *
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The content of the push message template that applies to FCM (Firebase Cloud Messaging) notification service.
 *
 * @public
 */
export interface PushFCMMessageTemplateContent {
  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message body to use in a push notification that is based on the message template.
   *
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:
   *
   * - `OPEN_APP` - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
   * - `DEEP_LINK` - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
   * - `URL` - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
   *
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/`.
   *
   * @public
   */
  sound?: string | undefined;

  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `action` property is `URL`.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The URL of an image to display in a push notification that's based on the message template.
   *
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
   *
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The content of the message template that applies to the push channel subtype.
 *
 * @public
 */
export interface PushMessageTemplateContent {
  /**
   * The content of the message template that applies to ADM (Amazon Device Messaging) notification service.
   *
   * @public
   */
  adm?: PushADMMessageTemplateContent | undefined;

  /**
   * The content of the message template that applies to APNS(Apple Push Notification service) notification service.
   *
   * @public
   */
  apns?: PushAPNSMessageTemplateContent | undefined;

  /**
   * The content of the message template that applies to FCM (Firebase Cloud Messaging) notification service.
   *
   * @public
   */
  fcm?: PushFCMMessageTemplateContent | undefined;

  /**
   * The content of the message template that applies to Baidu notification service.
   *
   * @public
   */
  baidu?: PushBaiduMessageTemplateContent | undefined;
}

/**
 * The body to use in SMS messages.
 *
 * @public
 */
export interface SMSMessageTemplateContentBody {
  /**
   * The message body to use in SMS messages.
   *
   * @public
   */
  plainText?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * The content of the message template that applies to the SMS channel subtype.
 *
 * @public
 */
export interface SMSMessageTemplateContent {
  /**
   * The body to use in SMS messages.
   *
   * @public
   */
  body?: SMSMessageTemplateContentBody | undefined;
}

/**
 * The content of the message template that applies to the WHATSAPP channel subtype.
 *
 * @public
 */
export interface WhatsAppMessageTemplateContent {
  /**
   * The data.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * The container of message template content.
 *
 * @public
 */
export type MessageTemplateContentProvider =
  | MessageTemplateContentProvider.EmailMember
  | MessageTemplateContentProvider.PushMember
  | MessageTemplateContentProvider.SmsMember
  | MessageTemplateContentProvider.WhatsAppMember
  | MessageTemplateContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace MessageTemplateContentProvider {
  /**
   * The content of the message template that applies to the email channel subtype.
   *
   * @public
   */
  export interface EmailMember {
    email: EmailMessageTemplateContent;
    sms?: never;
    whatsApp?: never;
    push?: never;
    $unknown?: never;
  }

  /**
   * The content of the message template that applies to the SMS channel subtype.
   *
   * @public
   */
  export interface SmsMember {
    email?: never;
    sms: SMSMessageTemplateContent;
    whatsApp?: never;
    push?: never;
    $unknown?: never;
  }

  /**
   * The content of the message template that applies to the WHATSAPP channel subtype.
   *
   * @public
   */
  export interface WhatsAppMember {
    email?: never;
    sms?: never;
    whatsApp: WhatsAppMessageTemplateContent;
    push?: never;
    $unknown?: never;
  }

  /**
   * The content of the message template that applies to the push channel subtype.
   *
   * @public
   */
  export interface PushMember {
    email?: never;
    sms?: never;
    whatsApp?: never;
    push: PushMessageTemplateContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    email?: never;
    sms?: never;
    whatsApp?: never;
    push?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    email: (value: EmailMessageTemplateContent) => T;
    sms: (value: SMSMessageTemplateContent) => T;
    whatsApp: (value: WhatsAppMessageTemplateContent) => T;
    push: (value: PushMessageTemplateContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The customer profile attributes that are used with the message template.
 *
 * @public
 */
export interface CustomerProfileAttributes {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  profileId?: string | undefined;

  /**
   * The ARN of a customer profile.
   *
   * @public
   */
  profileARN?: string | undefined;

  /**
   * The customer's first name.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The customer's middle name.
   *
   * @public
   */
  middleName?: string | undefined;

  /**
   * The customer's last name.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * A unique account number that you have given to the customer.
   *
   * @public
   */
  accountNumber?: string | undefined;

  /**
   * The customer's email address, which has not been specified as a personal or business address.
   *
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * The customer's phone number, which has not been specified as a mobile, home, or business number.
   *
   * @public
   */
  phoneNumber?: string | undefined;

  /**
   * Any additional information relevant to the customer's profile.
   *
   * @public
   */
  additionalInformation?: string | undefined;

  /**
   * The customer's party type.
   *
   * @public
   */
  partyType?: string | undefined;

  /**
   * The name of the customer's business.
   *
   * @public
   */
  businessName?: string | undefined;

  /**
   * The customer's birth date.
   *
   * @public
   */
  birthDate?: string | undefined;

  /**
   * The customer's gender.
   *
   * @public
   */
  gender?: string | undefined;

  /**
   * The customer's mobile phone number.
   *
   * @public
   */
  mobilePhoneNumber?: string | undefined;

  /**
   * The customer's mobile phone number.
   *
   * @public
   */
  homePhoneNumber?: string | undefined;

  /**
   * The customer's business phone number.
   *
   * @public
   */
  businessPhoneNumber?: string | undefined;

  /**
   * The customer's business email address.
   *
   * @public
   */
  businessEmailAddress?: string | undefined;

  /**
   * The first line of a customer address.
   *
   * @public
   */
  address1?: string | undefined;

  /**
   * The second line of a customer address.
   *
   * @public
   */
  address2?: string | undefined;

  /**
   * The third line of a customer address.
   *
   * @public
   */
  address3?: string | undefined;

  /**
   * The fourth line of a customer address.
   *
   * @public
   */
  address4?: string | undefined;

  /**
   * The city in which a customer lives.
   *
   * @public
   */
  city?: string | undefined;

  /**
   * The county in which a customer lives.
   *
   * @public
   */
  county?: string | undefined;

  /**
   * The country in which a customer lives.
   *
   * @public
   */
  country?: string | undefined;

  /**
   * The postal code of a customer address.
   *
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The province in which a customer lives.
   *
   * @public
   */
  province?: string | undefined;

  /**
   * The state in which a customer lives.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The first line of a customer’s shipping address.
   *
   * @public
   */
  shippingAddress1?: string | undefined;

  /**
   * The second line of a customer’s shipping address.
   *
   * @public
   */
  shippingAddress2?: string | undefined;

  /**
   * The third line of a customer’s shipping address.
   *
   * @public
   */
  shippingAddress3?: string | undefined;

  /**
   * The fourth line of a customer’s shipping address.
   *
   * @public
   */
  shippingAddress4?: string | undefined;

  /**
   * The city of a customer’s shipping address.
   *
   * @public
   */
  shippingCity?: string | undefined;

  /**
   * The county of a customer’s shipping address.
   *
   * @public
   */
  shippingCounty?: string | undefined;

  /**
   * The country of a customer’s shipping address.
   *
   * @public
   */
  shippingCountry?: string | undefined;

  /**
   * The postal code of a customer’s shipping address.
   *
   * @public
   */
  shippingPostalCode?: string | undefined;

  /**
   * The province of a customer’s shipping address.
   *
   * @public
   */
  shippingProvince?: string | undefined;

  /**
   * The state of a customer’s shipping address.
   *
   * @public
   */
  shippingState?: string | undefined;

  /**
   * The first line of a customer’s mailing address.
   *
   * @public
   */
  mailingAddress1?: string | undefined;

  /**
   * The second line of a customer’s mailing address.
   *
   * @public
   */
  mailingAddress2?: string | undefined;

  /**
   * The third line of a customer’s mailing address.
   *
   * @public
   */
  mailingAddress3?: string | undefined;

  /**
   * The fourth line of a customer’s mailing address.
   *
   * @public
   */
  mailingAddress4?: string | undefined;

  /**
   * The city of a customer’s mailing address.
   *
   * @public
   */
  mailingCity?: string | undefined;

  /**
   * The county of a customer’s mailing address.
   *
   * @public
   */
  mailingCounty?: string | undefined;

  /**
   * The country of a customer’s mailing address.
   *
   * @public
   */
  mailingCountry?: string | undefined;

  /**
   * The postal code of a customer’s mailing address.
   *
   * @public
   */
  mailingPostalCode?: string | undefined;

  /**
   * The province of a customer’s mailing address.
   *
   * @public
   */
  mailingProvince?: string | undefined;

  /**
   * The state of a customer’s mailing address.
   *
   * @public
   */
  mailingState?: string | undefined;

  /**
   * The first line of a customer’s billing address.
   *
   * @public
   */
  billingAddress1?: string | undefined;

  /**
   * The second line of a customer’s billing address.
   *
   * @public
   */
  billingAddress2?: string | undefined;

  /**
   * The third line of a customer’s billing address.
   *
   * @public
   */
  billingAddress3?: string | undefined;

  /**
   * The fourth line of a customer’s billing address.
   *
   * @public
   */
  billingAddress4?: string | undefined;

  /**
   * The city of a customer’s billing address.
   *
   * @public
   */
  billingCity?: string | undefined;

  /**
   * The county of a customer’s billing address.
   *
   * @public
   */
  billingCounty?: string | undefined;

  /**
   * The country of a customer’s billing address.
   *
   * @public
   */
  billingCountry?: string | undefined;

  /**
   * The postal code of a customer’s billing address.
   *
   * @public
   */
  billingPostalCode?: string | undefined;

  /**
   * The province of a customer’s billing address.
   *
   * @public
   */
  billingProvince?: string | undefined;

  /**
   * The state of a customer’s billing address.
   *
   * @public
   */
  billingState?: string | undefined;

  /**
   * The custom attributes in customer profile attributes.
   *
   * @public
   */
  custom?: Record<string, string> | undefined;
}

/**
 * The system endpoint attributes that are used with the message template.
 *
 * @public
 */
export interface SystemEndpointAttributes {
  /**
   * The customer's phone number if used with `customerEndpoint`, or the number the customer dialed to call your contact center if used with `systemEndpoint`.
   *
   * @public
   */
  address?: string | undefined;
}

/**
 * The system attributes that are used with the message template.
 *
 * @public
 */
export interface SystemAttributes {
  /**
   * The name of the task.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The CustomerEndpoint attribute.
   *
   * @public
   */
  customerEndpoint?: SystemEndpointAttributes | undefined;

  /**
   * The SystemEndpoint attribute.
   *
   * @public
   */
  systemEndpoint?: SystemEndpointAttributes | undefined;
}

/**
 * The attributes that are used with the message template.
 *
 * @public
 */
export interface MessageTemplateAttributes {
  /**
   * The system attributes that are used with the message template.
   *
   * @public
   */
  systemAttributes?: SystemAttributes | undefined;

  /**
   * The agent attributes that are used with the message template.
   *
   * @public
   */
  agentAttributes?: AgentAttributes | undefined;

  /**
   * The customer profile attributes that are used with the message template.
   *
   * @public
   */
  customerProfileAttributes?: CustomerProfileAttributes | undefined;

  /**
   * The custom attributes that are used with the message template.
   *
   * @public
   */
  customAttributes?: Record<string, string> | undefined;
}

/**
 * The configuration information of the grouping of Amazon Q in Connect users.
 *
 * @public
 */
export interface GroupingConfiguration {
  /**
   * The criteria used for grouping Amazon Q in Connect users.
   *
   * The following is the list of supported criteria values.
   *
   * - `RoutingProfileArn`: Grouping the users by their [Amazon Connect routing profile ARN](https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html). User should have [SearchRoutingProfile](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html) and [DescribeRoutingProfile](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html) permissions when setting criteria to this value.
   *
   * @public
   */
  criteria?: string | undefined;

  /**
   * The list of values that define different groups of Amazon Q in Connect users.
   *
   * - When setting `criteria` to `RoutingProfileArn`, you need to provide a list of ARNs of [Connect Customer routing profiles](https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html) as values of this parameter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Configuration information about the external data source.
 *
 * @public
 */
export interface WhatsAppMessageTemplateSourceConfiguration {
  /**
   * The ID of the End User Messaging WhatsApp Business Account to associate with this template.
   *
   * @public
   */
  businessAccountId: string | undefined;

  /**
   * The WhatsApp template ID.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The list of component mapping from WhatsApp template parameters to Message Template attributes.
   *
   * @public
   */
  components?: string[] | undefined;
}

/**
 * The container of message template source configuration.
 *
 * @public
 */
export type MessageTemplateSourceConfiguration =
  | MessageTemplateSourceConfiguration.WhatsAppMember
  | MessageTemplateSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MessageTemplateSourceConfiguration {
  /**
   * The sourceConfiguration of the message template that applies to the WHATSAPP channel subtype.
   *
   * @public
   */
  export interface WhatsAppMember {
    whatsApp: WhatsAppMessageTemplateSourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    whatsApp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    whatsApp: (value: WhatsAppMessageTemplateSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateMessageTemplateRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The content of the message template.
   *
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The source configuration of the message template. Only set this argument for WHATSAPP channel subtype.
   *
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

  /**
   * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * The configuration information of the grouping of Amazon Q in Connect users.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Configuration information about the external data source.
 *
 * @public
 */
export interface WhatsAppMessageTemplateSourceConfigurationSummary {
  /**
   * The ID of the End User Messaging WhatsApp Business Account to associate with this template.
   *
   * @public
   */
  businessAccountId: string | undefined;

  /**
   * The ID of WhatsApp template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The name of the WhatsApp template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The language of the WhatsApp template.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The list of component mapping from WhatsApp template parameters to Message Template attributes.
   *
   * @public
   */
  components?: string[] | undefined;

  /**
   * The status of the message template.
   *
   * @public
   */
  status?: WhatsAppSourceConfigurationStatus | undefined;

  /**
   * The status reason of the message template.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * The container of message template source configuration summary.
 *
 * @public
 */
export type MessageTemplateSourceConfigurationSummary =
  | MessageTemplateSourceConfigurationSummary.WhatsAppMember
  | MessageTemplateSourceConfigurationSummary.$UnknownMember;

/**
 * @public
 */
export namespace MessageTemplateSourceConfigurationSummary {
  /**
   * The sourceConfiguration summary of the message template that applies to the WHATSAPP channel subtype.
   *
   * @public
   */
  export interface WhatsAppMember {
    whatsApp: WhatsAppMessageTemplateSourceConfigurationSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    whatsApp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    whatsApp: (value: WhatsAppMessageTemplateSourceConfigurationSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The data of a message template.
 *
 * @public
 */
export interface MessageTemplateData {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The channel of the message template.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * The timestamp when the message template was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the message template data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the message template data.
   *
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * The content of the message template.
   *
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The source configuration summary of the message template.
   *
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * The configuration information of the grouping of Amazon Q in Connect users.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * The types of attributes that the message template contains.
   *
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * The checksum value of the message template content that is referenced by the `$LATEST` qualifier. It can be returned in `MessageTemplateData` or `ExtendedMessageTemplateData`. It’s calculated by content, language, `defaultAttributes` and `Attachments` of the message template.
   *
   * @public
   */
  messageTemplateContentSha256: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateResponse {
  /**
   * The message template.
   *
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateAttachmentRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The presentation information for the attachment file.
   *
   * @public
   */
  contentDisposition: ContentDisposition | undefined;

  /**
   * The name of the attachment file being uploaded. The name should include the file extension.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The body of the attachment file being uploaded. It should be encoded using base64 encoding.
   *
   * @public
   */
  body: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Information about the message template attachment.
 *
 * @public
 */
export interface MessageTemplateAttachment {
  /**
   * The presentation information for the attachment file.
   *
   * @public
   */
  contentDisposition: ContentDisposition | undefined;

  /**
   * The name of the attachment file being uploaded. The name should include the file extension.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the attachment file was uploaded.
   *
   * @public
   */
  uploadedTime: Date | undefined;

  /**
   * A pre-signed Amazon S3 URL that can be used to download the attachment file.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The expiration time of the pre-signed Amazon S3 URL.
   *
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * The identifier of the attachment file.
   *
   * @public
   */
  attachmentId: string | undefined;
}
