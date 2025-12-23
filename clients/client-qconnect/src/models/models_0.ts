// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
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
  FilterField,
  FilterOperator,
  GuardrailContentFilterType,
  GuardrailContextualGroundingFilterType,
  GuardrailFilterStrength,
  GuardrailManagedWordsType,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationAction,
  GuardrailTopicType,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  MessageFilterType,
  MessageTemplateAttributeType,
  MessageType,
  Origin,
  ParsingStrategy,
  Participant,
  PushMessageAction,
  QueryConditionComparisonOperator,
  QueryConditionFieldName,
  QuickResponseStatus,
  RecommendationSourceType,
  RecommendationTriggerType,
  RecommendationType,
  ReferenceType,
  Relevance,
  RelevanceLevel,
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
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
 * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
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
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
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
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  export interface AndConditionsMember {
    tagCondition?: never;
    andConditions: TagCondition[];
    orConditions?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
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
 * <p>The data of the configuration for a <code>KNOWLEDGE_BASE</code> type Amazon Q in Connect Assistant Association.</p>
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
   * <p>The search type to be used against the Knowledge Base for this request. The values can be <code>SEMANTIC</code> which uses vector embeddings or <code>HYBRID</code> which use vector embeddings and raw text</p>
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * <p>A typed union of the data of the configuration for an Amazon Q in Connect Assistant Association.</p>
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
   * <p>The data of the configuration for a <code>KNOWLEDGE_BASE</code> type Amazon Q in Connect Assistant Association.</p>
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
   * <p>The AI Prompt identifier for the Intent Labeling prompt used by the <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  intentLabelingGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Query Reformulation prompt used by the <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  queryReformulationAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Answer Generation prompt used by the <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier for the Answer Generation Guardrail used by the <code>ANSWER_RECOMMENDATION</code> AI Agent.</p>
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * <p>The association configurations for overriding behavior on this AI Agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * <p>The locale to which specifies the language and region settings that determine the response language for <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html">QueryAssistant</a>.</p> <note> <p>For more information on supported locales, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#qic-notes-languages">Language support for Amazon Q in Connect</a>.</p> </note>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The suggested messages configuration for the Answer Recommendation AI Agent.</p>
   * @public
   */
  suggestedMessages?: string[] | undefined;
}

/**
 * <p>The configuration for AI Agents of type <code>CASE_SUMMARIZATION</code>.</p>
 * @public
 */
export interface CaseSummarizationAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier used by the Case Summarization AI Agent.</p>
   * @public
   */
  caseSummarizationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier used by the Case Summarization AI Agent.</p>
   * @public
   */
  caseSummarizationAIGuardrailId?: string | undefined;

  /**
   * <p>The locale setting for the Case Summarization AI Agent.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Configuration settings for the EMAIL_GENERATIVE_ANSWER AI agent including prompts, locale, and knowledge base associations.</p>
 * @public
 */
export interface EmailGenerativeAnswerAIAgentConfiguration {
  /**
   * <p>The ID of the System AI prompt used for generating comprehensive knowledge-based answers from email queries.</p>
   * @public
   */
  emailGenerativeAnswerAIPromptId?: string | undefined;

  /**
   * <p>The ID of the System AI prompt used for reformulating email queries to optimize knowledge base search results.</p>
   * @public
   */
  emailQueryReformulationAIPromptId?: string | undefined;

  /**
   * <p>The locale setting for language-specific email processing and response generation (for example, en_US, es_ES).</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>Configuration settings for knowledge base associations used by the email generative answer agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * <p>Configuration settings for the EMAIL_OVERVIEW AI agent including prompt ID and locale settings.</p>
 * @public
 */
export interface EmailOverviewAIAgentConfiguration {
  /**
   * <p>The ID of the System AI prompt used for generating structured email conversation summaries.</p>
   * @public
   */
  emailOverviewAIPromptId?: string | undefined;

  /**
   * <p>The locale setting for language-specific email overview processing (for example, en_US, es_ES).</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Configuration settings for the EMAIL_RESPONSE AI agent including prompts, locale, and knowledge base associations.</p>
 * @public
 */
export interface EmailResponseAIAgentConfiguration {
  /**
   * <p>The ID of the System AI prompt used for generating professional email responses based on knowledge base content.</p>
   * @public
   */
  emailResponseAIPromptId?: string | undefined;

  /**
   * <p>The ID of the System AI prompt used for reformulating email queries to optimize knowledge base search for response generation.</p>
   * @public
   */
  emailQueryReformulationAIPromptId?: string | undefined;

  /**
   * <p>The locale setting for language-specific email response generation (for example, en_US, es_ES).</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>Configuration settings for knowledge base associations used by the email response agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;
}

/**
 * <p>The configuration for the <code>MANUAL_SEARCH</code> AI Agent type.</p>
 * @public
 */
export interface ManualSearchAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier for the Answer Generation prompt used by the MANUAL_SEARCH AI Agent.</p>
   * @public
   */
  answerGenerationAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier for the Answer Generation guardrail used by the MANUAL_SEARCH AI Agent.</p>
   * @public
   */
  answerGenerationAIGuardrailId?: string | undefined;

  /**
   * <p>The association configurations for overriding behavior on this AI Agent.</p>
   * @public
   */
  associationConfigurations?: AssociationConfiguration[] | undefined;

  /**
   * <p>The locale to which specifies the language and region settings that determine the response language for <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html">QueryAssistant</a>.</p> <note> <p>For more information on supported locales, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#qic-notes-languages">Language support for Amazon Q in Connect</a>.</p> </note>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>The configuration for AI Agents of type <code>NOTE_TAKING</code>.</p>
 * @public
 */
export interface NoteTakingAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier used by the Note Taking AI Agent.</p>
   * @public
   */
  noteTakingAIPromptId?: string | undefined;

  /**
   * <p>The AI Guardrail identifier used by the Note Taking AI Agent.</p>
   * @public
   */
  noteTakingAIGuardrailId?: string | undefined;

  /**
   * <p>The locale setting for language-specific case summarization generation (for example, en_US, es_ES).</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>An annotation that provides additional context or metadata.</p>
 * @public
 */
export interface Annotation {
  /**
   * <p>The title of the annotation.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A hint indicating that the annotation contains potentially destructive content.</p>
   * @public
   */
  destructiveHint?: boolean | undefined;
}

/**
 * <p>Instructions for using a tool.</p>
 * @public
 */
export interface ToolInstruction {
  /**
   * <p>The instruction text for the tool.</p>
   * @public
   */
  instruction?: string | undefined;

  /**
   * <p>Examples for using the tool.</p>
   * @public
   */
  examples?: string[] | undefined;
}

/**
 * <p>Configuration for tool output handling.</p>
 * @public
 */
export interface ToolOutputConfiguration {
  /**
   * <p>Override the tool output results to different variable name.</p>
   * @public
   */
  outputVariableNameOverride?: string | undefined;

  /**
   * <p>The session data namespace for tool output.</p>
   * @public
   */
  sessionDataNamespace?: string | undefined;
}

/**
 * <p>Filter configuration for tool output.</p>
 * @public
 */
export interface ToolOutputFilter {
  /**
   * <p>The JSON path for filtering tool output.</p>
   * @public
   */
  jsonPath: string | undefined;

  /**
   * <p>The output configuration for the filter.</p>
   * @public
   */
  outputConfiguration?: ToolOutputConfiguration | undefined;
}

/**
 * <p>A constant input value for tool override.</p>
 * @public
 */
export interface ToolOverrideConstantInputValue {
  /**
   * <p>Override tool input value with constant values</p>
   * @public
   */
  type: ToolOverrideInputValueType | undefined;

  /**
   * <p>The constant input override value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Configuration for overriding tool input values.</p>
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
   * <p>Constant input value configuration for tool override.</p>
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
 * <p>An input value override for tools.</p>
 * @public
 */
export interface ToolOverrideInputValue {
  /**
   * <p>The JSON path for the input value override.</p>
   * @public
   */
  jsonPath: string | undefined;

  /**
   * <p>The override input value.</p>
   * @public
   */
  value: ToolOverrideInputValueConfiguration | undefined;
}

/**
 * <p>Configuration for user interaction settings.</p>
 * @public
 */
export interface UserInteractionConfiguration {
  /**
   * <p>Indicates whether user confirmation is required for the interaction.</p>
   * @public
   */
  isUserConfirmationRequired?: boolean | undefined;
}

/**
 * <p>Configuration settings for a tool used by AI Agents.</p>
 * @public
 */
export interface ToolConfiguration {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  toolName: string | undefined;

  /**
   * <p>The type of the tool.</p>
   * @public
   */
  toolType: ToolType | undefined;

  /**
   * <p>The title of the tool configuration.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The identifier of the tool, for example toolName from Model Context Provider server.</p>
   * @public
   */
  toolId?: string | undefined;

  /**
   * <p>The description of the tool configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Instructions for using the tool.</p>
   * @public
   */
  instruction?: ToolInstruction | undefined;

  /**
   * <p>Override input values for the tool configuration.</p>
   * @public
   */
  overrideInputValues?: ToolOverrideInputValue[] | undefined;

  /**
   * <p>Output filters applies to the tool result.</p>
   * @public
   */
  outputFilters?: ToolOutputFilter[] | undefined;

  /**
   * <p>The input schema for the tool configuration.</p>
   * @public
   */
  inputSchema?: __DocumentType | undefined;

  /**
   * <p>The output schema for the tool configuration.</p>
   * @public
   */
  outputSchema?: __DocumentType | undefined;

  /**
   * <p>Annotations for the tool configuration.</p>
   * @public
   */
  annotations?: Annotation | undefined;

  /**
   * <p>Configuration for user interaction with the tool.</p>
   * @public
   */
  userInteractionConfiguration?: UserInteractionConfiguration | undefined;
}

/**
 * <p>The configuration for AI Agents of type <code>ORCHESTRATION</code>.</p>
 * @public
 */
export interface OrchestrationAIAgentConfiguration {
  /**
   * <p>The AI Prompt identifier used by the Orchestration AI Agent.</p>
   * @public
   */
  orchestrationAIPromptId: string | undefined;

  /**
   * <p>The AI Guardrail identifier used by the Orchestration AI Agent.</p>
   * @public
   */
  orchestrationAIGuardrailId?: string | undefined;

  /**
   * <p>The tool configurations used by the Orchestration AI Agent.</p>
   * @public
   */
  toolConfigurations?: ToolConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Connect instance used by the Orchestration AI Agent.</p>
   * @public
   */
  connectInstanceArn?: string | undefined;

  /**
   * <p>The locale setting for the Orchestration AI Agent.</p>
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
   * <p>The AI Prompt identifier for the Self Service Pre-Processing prompt used by the SELF_SERVICE AI Agent</p>
   * @public
   */
  selfServicePreProcessingAIPromptId?: string | undefined;

  /**
   * <p>The AI Prompt identifier for the Self Service Answer Generation prompt used by the SELF_SERVICE AI Agent</p>
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
   * <p>The configuration for AI Agents of type <code>MANUAL_SEARCH</code>.</p>
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
   * <p>The configuration for AI Agents of type <code>ANSWER_RECOMMENDATION</code>.</p>
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
   * <p>The configuration for AI Agents of type SELF_SERVICE.</p>
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
   * <p>Configuration for the EMAIL_RESPONSE AI agent that generates professional email responses using knowledge base content.</p>
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
   * <p>Configuration for the EMAIL_OVERVIEW AI agent that generates structured overview of email conversations.</p>
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
   * <p>Configuration for the EMAIL_GENERATIVE_ANSWER AI agent that provides comprehensive knowledge-based answers for customer queries.</p>
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
   * <p>The configuration for AI Agents of type <code>ORCHESTRATION</code>.</p>
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
   * <p>The configuration for AI Agents of type <code>NOTE_TAKING</code>.</p>
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
   * <p>The configuration for AI Agents of type <code>CASE_SUMMARIZATION</code>.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 * <p>The data for the AI Agent.</p>
 * @public
 */
export interface AIAgentData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>Specifies the origin of the AI Agent. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs. </p>
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
 * @public
 */
export interface CreateAIAgentVersionRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The modification time of the AI Agent should be tracked for version creation. This field should be specified to avoid version creation when simultaneous update to the underlying AI Agent are possible. The value should be the modifiedTime returned from the request to create or update an AI Agent so that version creation can fail if an update to the AI Agent post the specified modification time has been made.</p>
   * @public
   */
  modifiedTime?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent (with or without a version qualifier). Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The version number of the AI Agent version (returned if an AI Agent version was specified via use of a qualifier for the <code>aiAgentId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIAgentsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Agents to be listed. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs. </p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The origin of the AI Agent. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIAgentVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Agent for which versions are to be listed.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Agent versions to be listed. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs. </p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIAgentRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 * <p>A type that specifies the AI Agent ID configuration data when mapping an AI Agents to be used for an AI Agent type on a session or assistant.</p>
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
 * <p>Contains filter strengths for harmful content. AI Guardrail's support the following content filters to detect and filter harmful user inputs and FM-generated outputs.</p> <ul> <li> <p> <b>Hate</b>: Describes input prompts and model responses that discriminate, criticize, insult, denounce, or dehumanize a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).</p> </li> <li> <p> <b>Insults</b>: Describes input prompts and model responses that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.</p> </li> <li> <p> <b>Sexual</b>: Describes input prompts and model responses that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.</p> </li> <li> <p> <b>Violence</b>: Describes input prompts and model responses that includes glorification of, or threats to inflict physical pain, hurt, or injury toward a person, group, or thing.</p> </li> </ul> <p>Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as <i>Hate</i> with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as <i>Hate</i> with HIGH confidence, <i> Insults</i> with LOW confidence, <i>Sexual</i> with NONE confidence, and <i>Violence</i> with MEDIUM confidence.</p>
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * <p>The harmful category that the content filter is applied to.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.</p>
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
   * <p>Contains the type of the content filter and how strongly it should apply to prompts and model responses.</p>
   * @public
   */
  filtersConfig: GuardrailContentFilterConfig[] | undefined;
}

/**
 * <p>The filter configuration details for the AI Guardrail's contextual grounding filter.</p>
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
 * <p>The policy configuration details for the AI Guardrail's contextual grounding policy.</p>
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
 * <p>The PII entity to configure for the AI Guardrail.</p>
 * @public
 */
export interface GuardrailPiiEntityConfig {
  /**
   * <p>Configure AI Guardrail type when the PII entity is detected.</p> <p>The following PIIs are used to block or mask sensitive information:</p> <ul> <li> <p> <b>General</b> </p> <ul> <li> <p> <b>ADDRESS</b> </p> <p>A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood. </p> </li> <li> <p> <b>AGE</b> </p> <p>An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guarrails recognizes "40 years" as an age. </p> </li> <li> <p> <b>NAME</b> </p> <p>An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. AI Guardrail doesn't apply this entity type to names that are part of organizations or addresses. For example, AI Guardrail recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address. </p> </li> <li> <p> <b>EMAIL</b> </p> <p>An email address, such as <i>marymajor@email.com</i>.</p> </li> <li> <p> <b>PHONE</b> </p> <p>A phone number. This entity type also includes fax and pager numbers. </p> </li> <li> <p> <b>USERNAME</b> </p> <p>A user name that identifies an account, such as a login name, screen name, nick name, or handle. </p> </li> <li> <p> <b>PASSWORD</b> </p> <p>An alphanumeric string that is used as a password, such as "*<i> very20special#pass*</i>". </p> </li> <li> <p> <b>DRIVER_ID</b> </p> <p>The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters. </p> </li> <li> <p> <b>LICENSE_PLATE</b> </p> <p>A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country. </p> </li> <li> <p> <b>VEHICLE_IDENTIFICATION_NUMBER</b> </p> <p>A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the <i>ISO 3779</i> specification. Each country has specific codes and formats for VINs. </p> </li> </ul> </li> <li> <p> <b>Finance</b> </p> <ul> <li> <p> <b>CREDIT_DEBIT_CARD_CVV</b> </p> <p>A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code. </p> </li> <li> <p> <b>CREDIT_DEBIT_CARD_EXPIRY</b> </p> <p>The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as <i>month/year</i> or <i>MM/YY</i>. AI Guardrail recognizes expiration dates such as <i>01/21</i>, <i>01/2021</i>, and <i>Jan 2021</i>. </p> </li> <li> <p> <b>CREDIT_DEBIT_CARD_NUMBER</b> </p> <p>The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present. </p> </li> <li> <p> <b>PIN</b> </p> <p>A four-digit personal identification number (PIN) with which you can access your bank account. </p> </li> <li> <p> <b>INTERNATIONAL_BANK_ACCOUNT_NUMBER</b> </p> <p>An International Bank Account Number has specific formats in each country. For more information, see <a href="https://www.iban.com/structure"> www.iban.com/structure</a>.</p> </li> <li> <p> <b>SWIFT_CODE</b> </p> <p>A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.</p> <p>SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.</p> </li> </ul> </li> <li> <p> <b>IT</b> </p> <ul> <li> <p> <b>IP_ADDRESS</b> </p> <p>An IPv4 address, such as <i>198.51.100.0</i>. </p> </li> <li> <p> <b>MAC_ADDRESS</b> </p> <p>A <i>media access control</i> (MAC) address is a unique identifier assigned to a network interface controller (NIC). </p> </li> <li> <p> <b>URL</b> </p> <p>A web address, such as <i>www.example.com</i>. </p> </li> <li> <p> <b>AWS_ACCESS_KEY</b> </p> <p>A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically. </p> </li> <li> <p> <b>AWS_SECRET_KEY</b> </p> <p>A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically. </p> </li> </ul> </li> <li> <p> <b>USA specific</b> </p> <ul> <li> <p> <b>US_BANK_ACCOUNT_NUMBER</b> </p> <p>A US bank account number, which is typically 10 to 12 digits long. </p> </li> <li> <p> <b>US_BANK_ROUTING_NUMBER</b> </p> <p>A US bank account routing number. These are typically nine digits long, </p> </li> <li> <p> <b>US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER</b> </p> <p>A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits. </p> </li> <li> <p> <b>US_PASSPORT_NUMBER</b> </p> <p>A US passport number. Passport numbers range from six to nine alphanumeric characters. </p> </li> <li> <p> <b>US_SOCIAL_SECURITY_NUMBER</b> </p> <p>A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents. </p> </li> </ul> </li> <li> <p> <b>Canada specific</b> </p> <ul> <li> <p> <b>CA_HEALTH_NUMBER</b> </p> <p>A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits. </p> </li> <li> <p> <b>CA_SOCIAL_INSURANCE_NUMBER</b> </p> <p>A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.</p> <p>The SIN is formatted as three groups of three digits, such as <i> 123-456-789</i>. A SIN can be validated through a simple check-digit process called the <a href="https://www.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</a> .</p> </li> </ul> </li> <li> <p> <b>UK Specific</b> </p> <ul> <li> <p> <b>UK_NATIONAL_HEALTH_SERVICE_NUMBER</b> </p> <p>A UK National Health Service Number is a 10-17 digit number, such as <i>485 555 3456</i>. The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.</p> </li> <li> <p> <b>UK_NATIONAL_INSURANCE_NUMBER</b> </p> <p>A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.</p> <p>The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.</p> </li> <li> <p> <b>UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER</b> </p> <p>A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business. </p> </li> </ul> </li> <li> <p> <b>Custom</b> </p> <ul> <li> <p> <b>Regex filter</b> - You can use a regular expressions to define patterns for an AI Guardrail to recognize and act upon such as serial number, booking ID etc..</p> </li> </ul> </li> </ul>
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
 * <p>Contains details about PII entities and regular expressions to configure for the AI Guardrail.</p>
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
   * <p>A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>Contains details about PII entities and regular expressions to configure for the AI Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The policy configuration details for the AI Guardrail's contextual grounding policy.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The version number of the AI Guardrail version (returned if an AI Guardrail version was specified via use of a qualifier for the <code>aiGuardrailId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIGuardrailVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI Guardrail for which versions are to be listed.</p>
   * @public
   */
  aiGuardrailId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIGuardrailRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 * <p>The assessment information from the AI Guardrail.</p>
 * @public
 */
export interface AIGuardrailAssessment {
  /**
   * <p>Indicates whether the AI Guardrail blocked the content.</p>
   * @public
   */
  blocked: boolean | undefined;
}

/**
 * <p>Inference configuration for text-based AI Prompts.</p>
 * @public
 */
export interface TextAIPromptInferenceConfiguration {
  /**
   * <p>The temperature setting for controlling randomness in the generated response.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The top-P sampling parameter for nucleus sampling.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The top-K sampling parameter for token selection.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>The maximum number of tokens to generate in the response.</p>
   * @public
   */
  maxTokensToSample?: number | undefined;
}

/**
 * <p>The configuration for inference parameters when using AI Prompts.</p>
 * @public
 */
export type AIPromptInferenceConfiguration =
  | AIPromptInferenceConfiguration.TextAIPromptInferenceConfigurationMember
  | AIPromptInferenceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AIPromptInferenceConfiguration {
  /**
   * <p>The inference configuration for text-based AI Prompts.</p>
   * @public
   */
  export interface TextAIPromptInferenceConfigurationMember {
    textAIPromptInferenceConfiguration: TextAIPromptInferenceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textAIPromptInferenceConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textAIPromptInferenceConfiguration: (value: TextAIPromptInferenceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for a prompt template that supports full textual prompt configuration using a YAML prompt.</p>
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
 * <p>A typed union that specifies the configuration for a prompt template based on its type.</p>
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
   * <p>The configuration for a prompt template that supports full textual prompt configuration using a YAML prompt.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the model used for this AI Prompt.</p> <note> <p>For information about which models are supported in each Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-ai-prompts.html#cli-create-aiprompt">Supported models for system/custom prompts</a>.</p> </note>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The API Format of the AI Prompt.</p> <p>Recommended values: <code>MESSAGES | TEXT_COMPLETIONS</code> </p> <note> <p>The values <code>ANTHROPIC_CLAUDE_MESSAGES | ANTHROPIC_CLAUDE_TEXT_COMPLETIONS</code> will be deprecated.</p> </note>
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

  /**
   * <p>The inference configuration for the AI Prompt being created.</p>
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;
}

/**
 * <p>The data for the AI Prompt</p>
 * @public
 */
export interface AIPromptData {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the model used for this AI Prompt. The following model Ids are supported:</p> <ul> <li> <p> <code>anthropic.claude-3-haiku--v1:0</code> </p> </li> <li> <p> <code>apac.amazon.nova-lite-v1:0</code> </p> </li> <li> <p> <code>apac.amazon.nova-micro-v1:0</code> </p> </li> <li> <p> <code>apac.amazon.nova-pro-v1:0</code> </p> </li> <li> <p> <code>apac.anthropic.claude-3-5-sonnet--v2:0</code> </p> </li> <li> <p> <code>apac.anthropic.claude-3-haiku-20240307-v1:0</code> </p> </li> <li> <p> <code>eu.amazon.nova-lite-v1:0</code> </p> </li> <li> <p> <code>eu.amazon.nova-micro-v1:0</code> </p> </li> <li> <p> <code>eu.amazon.nova-pro-v1:0</code> </p> </li> <li> <p> <code>eu.anthropic.claude-3-7-sonnet-20250219-v1:0</code> </p> </li> <li> <p> <code>eu.anthropic.claude-3-haiku-20240307-v1:0</code> </p> </li> <li> <p> <code>us.amazon.nova-lite-v1:0</code> </p> </li> <li> <p> <code>us.amazon.nova-micro-v1:0</code> </p> </li> <li> <p> <code>us.amazon.nova-pro-v1:0</code> </p> </li> <li> <p> <code>us.anthropic.claude-3-5-haiku-20241022-v1:0</code> </p> </li> <li> <p> <code>us.anthropic.claude-3-7-sonnet-20250219-v1:0</code> </p> </li> <li> <p> <code>us.anthropic.claude-3-haiku-20240307-v1:0</code> </p> </li> </ul>
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
   * <p>The configuration for inference parameters when using the AI Prompt.</p>
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;

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
   * <p>The origin of the AI Prompt. <code>SYSTEM</code> for a default AI Prompt created by Q in Connect or <code>CUSTOMER</code> for an AI Prompt created by calling AI Prompt creation APIs. </p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The version number of the AI Prompt version (returned if an AI Prompt version was specified via use of a qualifier for the <code>aiPromptId</code> on the request). </p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface ListAIPromptsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Prompts to be listed. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs. </p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the model used for this AI Prompt. Model Ids supported are: <code>anthropic.claude-3-haiku-20240307-v1:0</code>.</p>
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
   * <p>The origin of the AI Prompt. <code>SYSTEM</code> for a default AI Prompt created by Q in Connect or <code>CUSTOMER</code> for an AI Prompt created by calling AI Prompt creation APIs. </p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIPromptVersionsRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect AI prompt for which versions are to be listed.</p>
   * @public
   */
  aiPromptId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The origin of the AI Prompt versions to be listed. <code>SYSTEM</code> for a default AI Agent created by Q in Connect or <code>CUSTOMER</code> for an AI Agent created by calling AI Agent creation APIs. </p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAIPromptRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>..</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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

  /**
   * <p>The identifier of the model used for this AI Prompt.</p> <note> <p>For information about which models are supported in each Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-ai-prompts.html#cli-create-aiprompt">Supported models for system/custom prompts</a>.</p> </note>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The updated inference configuration for the AI Prompt.</p>
   * @public
   */
  inferenceConfiguration?: AIPromptInferenceConfiguration | undefined;
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
 * <p>Content association data for a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/step-by-step-guided-experiences.html">step-by-step guide</a>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.</p> <ul> <li> <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>, <code>PublishStatus</code>, and <code>IsDeleted</code> as source fields. </p> </li> <li> <p> For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least <code>number</code>, <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>, and <code>active</code> as source fields. </p> </li> <li> <p> For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/"> Zendesk</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if <code>objectFields</code> is not provided, including at least <code>id</code>, <code>title</code>, <code>updated_at</code>, and <code>draft</code> as source fields. </p> </li> <li> <p> For <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index">SharePoint</a>, your AppIntegrations DataIntegration must have a FileConfiguration, including only file extensions that are among <code>docx</code>, <code>pdf</code>, <code>html</code>, <code>htm</code>, and <code>txt</code>. </p> </li> <li> <p> For <a href="http://aws.amazon.com/s3/">Amazon S3</a>, the ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null. The <code>SourceURI</code> of your DataIntegration must use the following format: <code>s3://your_s3_bucket_name</code>.</p> <important> <p>The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services principal <code>app-integrations.amazonaws.com</code> to perform <code>s3:ListBucket</code>, <code>s3:GetObject</code>, and <code>s3:GetBucketLocation</code> against the bucket.</p> </important> </li> </ul>
   * @public
   */
  appIntegrationArn: string | undefined;

  /**
   * <p>The fields from the source that are made available to your agents in Amazon Q in Connect. Optional if ObjectConfiguration is included in the provided DataIntegration. </p> <ul> <li> <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, you must include at least <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>, <code>PublishStatus</code>, and <code>IsDeleted</code>. </p> </li> <li> <p>For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, you must include at least <code>number</code>, <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>, and <code>active</code>. </p> </li> <li> <p>For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/"> Zendesk</a>, you must include at least <code>id</code>, <code>title</code>, <code>updated_at</code>, and <code>draft</code>. </p> </li> </ul> <p>Make sure to include additional fields. These fields are indexed and used to source recommendations. </p>
   * @public
   */
  objectFields?: string[] | undefined;
}

/**
 * <p>Configuration for an external Bedrock knowledge base.</p>
 * @public
 */
export interface ExternalBedrockKnowledgeBaseConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the external Bedrock knowledge base.</p>
   * @public
   */
  bedrockKnowledgeBaseArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to access the external Bedrock knowledge base.</p>
   * @public
   */
  accessRoleArn: string | undefined;
}

/**
 * <p>The data that is input into Amazon Q in Connect as a result of the assistant association.</p>
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
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an external Bedrock knowledge base association.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
  | AssistantAssociationOutputData.ExternalBedrockKnowledgeBaseConfigMember
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
    externalBedrockKnowledgeBaseConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an external Bedrock knowledge base association in the output data.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The customer managed key used for encryption. For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>. For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssistantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>The customer managed key must have a policy that allows <code>kms:CreateGrant</code>, <code> kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service principal. </p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

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
 * <p>An entry in the orchestrator configuration list.</p>
 * @public
 */
export interface OrchestratorConfigurationEntry {
  /**
   * <p>The identifier of the AI Agent in the orchestrator configuration.</p>
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * <p>The use case for the orchestrator configuration. (for example Connect.SelfService, Connect.AgentAssistance)</p>
   * @public
   */
  orchestratorUseCase: string | undefined;
}

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
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>, <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service principal. </p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
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
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The list of orchestrator configurations for the assistant.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
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
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list.</p>
   * @public
   */
  waitTimeSeconds?: number | undefined;

  /**
   * <p>The token for the next set of chunks. Use the value returned in the previous response in the next request to retrieve the next set of chunks.</p>
   * @public
   */
  nextChunkToken?: string | undefined;

  /**
   * <p>The type of recommendation being requested.</p>
   * @public
   */
  recommendationType?: RecommendationType | undefined;
}

/**
 * <p>Details about case summarization chunk data.</p>
 * @public
 */
export interface CaseSummarizationChunkDataDetails {
  /**
   * <p>A chunk of the case summarization completion.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>Token for retrieving the next chunk of streaming summarization data, if available.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
}

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
 * <p>Offset specification to describe highlighting of document excerpts for rendering search results and recommendations.</p>
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
 * <p>Details of streaming chunk data for email overview including completion text and pagination tokens.</p>
 * @public
 */
export interface EmailOverviewChunkDataDetails {
  /**
   * <p>The partial or complete overview text content in structured HTML format with customer issues, resolutions, and next steps.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>Token for retrieving the next chunk of streaming overview data, if available.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * <p>Details of streaming chunk data for email responses including completion text and pagination tokens.</p>
 * @public
 */
export interface EmailResponseChunkDataDetails {
  /**
   * <p>The partial or complete professional email response text with appropriate greetings and closings.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>Token for retrieving the next chunk of streaming response data, if available.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
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

  /**
   * <p>The relevance level of the detected intent.</p>
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;
}

/**
 * <p>Details about notes chunk data.</p>
 * @public
 */
export interface NotesChunkDataDetails {
  /**
   * <p>A chunk of the notes completion.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>The token for the next chunk of notes data.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * <p>Details about notes data.</p>
 * @public
 */
export interface NotesDataDetails {
  /**
   * <p>The completion data for notes.</p>
   * @public
   */
  completion?: string | undefined;
}

/**
 * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
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
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   * @public
   */
  citationSpan?: CitationSpan | undefined;
}

/**
 * <p>Details about suggested message data.</p>
 * @public
 */
export interface SuggestedMessageDataDetails {
  /**
   * <p>The text content of the suggested message.</p>
   * @public
   */
  messageText: string | undefined;
}

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
 * <p>Reference information for a suggested message.</p>
 * @public
 */
export interface SuggestedMessageReference {
  /**
   * <p>The identifier of the AI Agent that generated the suggested message.</p>
   * @public
   */
  aiAgentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AI Agent that generated the suggested message.</p>
   * @public
   */
  aiAgentArn: string | undefined;
}

/**
 * <p>Reference data.</p>
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
   * <p>Reference information about the content.</p>
   * @public
   */
  export interface ContentReferenceMember {
    contentReference: ContentReference;
    generativeReference?: never;
    suggestedMessageReference?: never;
    $unknown?: never;
  }

  /**
   * <p>Reference information about the generative content.</p>
   * @public
   */
  export interface GenerativeReferenceMember {
    contentReference?: never;
    generativeReference: GenerativeReference;
    suggestedMessageReference?: never;
    $unknown?: never;
  }

  /**
   * <p>Reference information for suggested messages.</p>
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
 * <p>A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a single RecommendationTrigger.</p>
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
   * <p>The source of the recommendation trigger.</p> <ul> <li> <p>ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens issue.</p> </li> <li> <p>RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens rule.</p> </li> </ul>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>, <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service principal. </p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
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
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The list of orchestrator configurations for the assistant.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
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
export type QueryCondition =
  | QueryCondition.SingleMember
  | QueryCondition.$UnknownMember;

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
 * <p>Input data for case summarization.</p>
 * @public
 */
export interface CaseSummarizationInputData {
  /**
   * <p>The Amazon Resource Name (ARN) of the case for summarization.</p>
   * @public
   */
  caseArn: string | undefined;
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
  | QueryInputData.CaseSummarizationInputDataMember
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
    caseSummarizationInputData?: never;
    $unknown?: never;
  }

  /**
   * <p>Input information for the intent.</p>
   * @public
   */
  export interface IntentInputDataMember {
    queryTextInputData?: never;
    intentInputData: IntentInputData;
    caseSummarizationInputData?: never;
    $unknown?: never;
  }

  /**
   * <p>Input data for case summarization queries.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Amazon Q in Connect session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The search type to be used against the Knowledge Base for this request. The values can be <code>SEMANTIC</code> which uses vector embeddings or <code>HYBRID</code> which use vector embeddings and raw text.</p>
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of the AI Agent being removed for use by default from the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentType: AIAgentType | undefined;

  /**
   * <p>The orchestrator use case for the AI Agent being removed.</p>
   * @public
   */
  orchestratorUseCase?: string | undefined;
}

/**
 * @public
 */
export interface RemoveAssistantAIAgentResponse {}

/**
 * <p>An attribute used for filtering.</p>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The key of the filter attribute.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the filter attribute.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * <p>A knowledge source that provides content for recommendations.</p>
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
   * <p>The list of assistant association identifiers for the knowledge source.</p>
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
 * <p>A single result from a content retrieval operation.</p>
 * @public
 */
export interface RetrieveResult {
  /**
   * <p>The identifier of the assistant association for the retrieved result.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The URL, URI, or ID of the retrieved content when available, or a UUID when unavailable.</p>
   * @public
   */
  sourceId: string | undefined;

  /**
   * <p>A type to define the KB origin of a retrieved content.</p>
   * @public
   */
  referenceType: ReferenceType | undefined;

  /**
   * <p>The text content of the retrieved result.</p>
   * @public
   */
  contentText: string | undefined;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * <p>The results of the content retrieval operation.</p>
   * @public
   */
  results: RetrieveResult[] | undefined;
}

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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email contact in Amazon Connect. Used to retrieve email content and establish session context for AI-powered email assistance.</p>
   * @public
   */
  contactArn?: string | undefined;

  /**
   * <p>The list of orchestrator configurations for the session being created.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;

  /**
   * <p>The list of orchestrator configurations to remove from the session.</p>
   * @public
   */
  removeOrchestratorConfigurationList?: boolean | undefined;
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
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The origin of the Session to be listed. <code>SYSTEM</code> for a default Session created by Amazon Q in Connect or <code>CUSTOMER</code> for a Session created by calling <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_CreateSession.html">CreateSession</a> API.</p>
   * @public
   */
  origin?: Origin | undefined;

  /**
   * <p>The list of orchestrator configurations for the session.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
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
   * <p>The token for the next message. Use the value returned in the SendMessage or previous response in the next request to retrieve the next message.</p>
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
 * <p>A citation that references source content.</p>
 * @public
 */
export interface Citation {
  /**
   * <p>The identifier of the content being cited.</p>
   * @public
   */
  contentId?: string | undefined;

  /**
   * <p>The title of the cited content.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The identifier of the knowledge base containing the cited content.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   * @public
   */
  citationSpan: CitationSpan | undefined;

  /**
   * <p>The source URL for the citation.</p>
   * @public
   */
  sourceURL?: string | undefined;

  /**
   * <p>A type to define the KB origin of a cited content</p>
   * @public
   */
  referenceType: ReferenceType | undefined;
}

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

  /**
   * <p>The citations associated with the text message.</p>
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * <p>The AI Guardrail assessment for the text message.</p>
   * @public
   */
  aiGuardrailAssessment?: AIGuardrailAssessment | undefined;
}

/**
 * <p>Data about the result of tool usage.</p>
 * @public
 */
export interface ToolUseResultData {
  /**
   * <p>The identifier of the tool use instance.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The name of the tool that was used.</p>
   * @public
   */
  toolName: string | undefined;

  /**
   * <p>The result of the tool usage.</p>
   * @public
   */
  toolResult: __DocumentType | undefined;

  /**
   * <p>The input schema for the tool use result.</p>
   * @public
   */
  inputSchema?: __DocumentType | undefined;
}

/**
 * <p>The message data.</p>
 * @public
 */
export type MessageData =
  | MessageData.TextMember
  | MessageData.ToolUseResultMember
  | MessageData.$UnknownMember;

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
    toolUseResult?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of tool usage in the message.</p>
   * @public
   */
  export interface ToolUseResultMember {
    text?: never;
    toolUseResult: ToolUseResultData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUseResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: TextMessage) => T;
    toolUseResult: (value: ToolUseResultData) => T;
    _: (name: string, value: any) => T;
  }
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

  /**
   * <p>Indicates whether the chunked response has been terminated.</p>
   * @public
   */
  chunkedResponseTerminated?: boolean | undefined;
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter criteria for listing messages.</p>
   * @public
   */
  filter?: MessageFilterType | undefined;
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpansRequest {
  /**
   * <p>UUID or ARN of the Connect AI Assistant resource</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>UUID or ARN of the Connect AI Session resource</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Pagination token for retrieving the next page of results</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of spans to return per page</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A citation that spans a specific range of text.</p>
 * @public
 */
export interface SpanCitation {
  /**
   * <p>The identifier of the content being cited in the span.</p>
   * @public
   */
  contentId?: string | undefined;

  /**
   * <p>The title of the content being cited in the span.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The identifier of the knowledge base containing the cited content.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base containing the cited content.</p>
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * <p>Text message content</p>
 * @public
 */
export interface SpanTextValue {
  /**
   * <p>String content of the message text</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The citations associated with the span text.</p>
   * @public
   */
  citations?: SpanCitation[] | undefined;

  /**
   * <p>The AI Guardrail assessment for the span text.</p>
   * @public
   */
  aiGuardrailAssessment?: AIGuardrailAssessment | undefined;
}

/**
 * <p>Tool invocation message content</p>
 * @public
 */
export interface SpanToolUseValue {
  /**
   * <p>Unique ID for this tool invocation</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The tool name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The tool input arguments</p>
   * @public
   */
  arguments: __DocumentType | undefined;
}

/**
 * <p>The configuration for a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a> request.</p>
 * @public
 */
export interface MessageConfiguration {
  /**
   * <p>Generates a filler response when tool selection is <code>QUESTION</code>.</p>
   * @public
   */
  generateFillerMessage?: boolean | undefined;

  /**
   * <p>Configuration for generating chunked messages.</p>
   * @public
   */
  generateChunkedMessage?: boolean | undefined;
}

/**
 * <p>The conversation history data to included in conversation context data before the Amazon Q in Connect session.</p>
 * @public
 */
export interface SelfServiceConversationHistory {
  /**
   * <p>The number of turn of the conversation history data.</p>
   * @public
   */
  turnNumber?: number | undefined;

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

  /**
   * <p>The timestamp of the conversation history entry.</p>
   * @public
   */
  timestamp?: Date | undefined;
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
   * <p>The identifier of the AI Agent to use for processing the message.</p>
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * <p>The conversation context before the Amazon Q in Connect session.</p>
   * @public
   */
  conversationContext?: ConversationContext | undefined;

  /**
   * <p>The configuration of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a> request.</p>
   * @public
   */
  configuration?: MessageConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the AWS SDK populates this field.For more information about idempotency, see Making retries safe with idempotent APIs.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The orchestrator use case for message processing.</p>
   * @public
   */
  orchestratorUseCase?: string | undefined;

  /**
   * <p>Additional metadata for the message.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
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
   * <p>The configuration of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_SendMessage.html">SendMessage</a> request.</p>
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
   * <p>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.</p>
   * @public
   */
  aiAgentConfiguration?: Partial<Record<AIAgentType, AIAgentConfigurationData>> | undefined;

  /**
   * <p>The updated list of orchestrator configurations for the session.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;

  /**
   * <p>The list of orchestrator configurations to remove from the session.</p>
   * @public
   */
  removeOrchestratorConfigurationList?: boolean | undefined;
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
 */
export interface UpdateSessionDataRequest {
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
   * <p>The namespace into which the session data is stored. Supported namespaces are: Custom</p>
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
   * <p>The namespace into which the session data is stored. Supported namespaces are: Custom</p>
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
   * <p>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of the AI Agent being updated for use by default on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  aiAgentType: AIAgentType | undefined;

  /**
   * <p>The configuration of the AI Agent being updated for use by default on the Amazon Q in Connect Assistant.</p>
   * @public
   */
  configuration: AIAgentConfigurationData | undefined;

  /**
   * <p>The updated list of orchestrator configurations for the assistant AI Agent.</p>
   * @public
   */
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[] | undefined;
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
 * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.</p>
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
 * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.</p>
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
 * <p>Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.</p>
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * <p>Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for <code>NONE</code>, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.</p>
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
   * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.</p>
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
export type Configuration =
  | Configuration.ConnectConfigurationMember
  | Configuration.$UnknownMember;

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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
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
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
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
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a <code>PreconditionFailedException</code>.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>, exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   * @public
   */
  removeOverrideLinkOutUri?: boolean | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.</p>
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
 * <p>Information about how to render the content.</p>
 * @public
 */
export interface RenderingConfiguration {
  /**
   * <p>A URI template containing exactly one variable in <code>$\{variableName\} </code>format. This can only be set for <code>EXTERNAL</code> knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:</p> <ul> <li> <p>Salesforce: <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>, <code>PublishStatus</code>, or <code>IsDeleted</code> </p> </li> <li> <p>ServiceNow: <code>number</code>, <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>, or <code>active</code> </p> </li> <li> <p>Zendesk: <code>id</code>, <code>title</code>, <code>updated_at</code>, or <code>draft</code> </p> </li> </ul> <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
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
 * <p>The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.</p>
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
   * <p>The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.</p>
   * @public
   */
  urlConfiguration: UrlConfiguration | undefined;

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
   * <p>The scope of what is crawled for your URLs. You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL <code>https://docs.aws.amazon.com/bedrock/latest/userguide/</code> and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain <code>aws.amazon.com</code> can also include sub domain <code>docs.aws.amazon.com</code>.</p>
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
 * <p>Settings for parsing document contents. By default, the service converts the contents of each document into text before splitting it into chunks. To improve processing of PDF files with tables and images, you can configure the data source to convert the pages of text into images and use a model to describe the contents of each page.</p>
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
   * <p>Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically. </p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL or Managed knowledge bases.</p>
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
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>, <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect.</p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
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
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge base. If no content exists in a knowledge base, this value is unset.</p>
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
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>, <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect. </p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
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
 * <p>The body to use in email messages.</p>
 * @public
 */
export interface EmailMessageTemplateContentBody {
  /**
   * <p>The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   * @public
   */
  plainText?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
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
 * <p>The content of the push message template that applies to ADM (Amazon Device Messaging) notification service.</p>
 * @public
 */
export interface PushADMMessageTemplateContent {
  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message body to use in a push notification that is based on the message template.</p>
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:</p> <ul> <li> <p> <code>OPEN_APP</code> - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p> </li> <li> <p> <code>DEEP_LINK</code> - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p> </li> <li> <p> <code>URL</code> - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p> </li> </ul>
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in <code>/res/raw/</code>.</p>
   * @public
   */
  sound?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the <code>action</code> property is <code>URL</code>.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The content of the push message template that applies to APNS (Apple Push Notification service) notification service.</p>
 * @public
 */
export interface PushAPNSMessageTemplateContent {
  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message body to use in a push notification that is based on the message template.</p>
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:</p> <ul> <li> <p> <code>OPEN_APP</code> - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p> </li> <li> <p> <code>DEEP_LINK</code> - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the iOS platform.</p> </li> <li> <p> <code>URL</code> - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p> </li> </ul>
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * <p>The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the <code>Library/Sounds</code> folder in your app's data container. If the sound file can't be found or you specify <code>default</code> for the value, the system plays the default alert sound.</p>
   * @public
   */
  sound?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the <code>action</code> property is <code>URL</code>.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The URL of an image or video to display in push notifications that are based on the message template.</p>
   * @public
   */
  mediaUrl?: string | undefined;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.</p>
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The content of the push message template that applies to Baidu notification service.</p>
 * @public
 */
export interface PushBaiduMessageTemplateContent {
  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message body to use in a push notification that is based on the message template.</p>
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:</p> <ul> <li> <p> <code>OPEN_APP</code> - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p> </li> <li> <p> <code>DEEP_LINK</code> - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p> </li> <li> <p> <code>URL</code> - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p> </li> </ul>
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in <code>/res/raw/</code>.</p>
   * @public
   */
  sound?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the <code>action</code> property is <code>URL</code>.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The content of the push message template that applies to FCM (Firebase Cloud Messaging) notification service.</p>
 * @public
 */
export interface PushFCMMessageTemplateContent {
  /**
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message body to use in a push notification that is based on the message template.</p>
   * @public
   */
  body?: MessageTemplateBodyContentProvider | undefined;

  /**
   * <p>The action to occur if a recipient taps a push notification that is based on the message template. Valid values are:</p> <ul> <li> <p> <code>OPEN_APP</code> - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p> </li> <li> <p> <code>DEEP_LINK</code> - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p> </li> <li> <p> <code>URL</code> - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p> </li> </ul>
   * @public
   */
  action?: PushMessageAction | undefined;

  /**
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in <code>/res/raw/</code>.</p>
   * @public
   */
  sound?: string | undefined;

  /**
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the <code>action</code> property is <code>URL</code>.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   * @public
   */
  imageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  smallImageIconUrl?: string | undefined;

  /**
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   * @public
   */
  rawContent?: MessageTemplateBodyContentProvider | undefined;
}

/**
 * <p>The content of the message template that applies to the push channel subtype.</p>
 * @public
 */
export interface PushMessageTemplateContent {
  /**
   * <p>The content of the message template that applies to ADM (Amazon Device Messaging) notification service.</p>
   * @public
   */
  adm?: PushADMMessageTemplateContent | undefined;

  /**
   * <p>The content of the message template that applies to APNS(Apple Push Notification service) notification service.</p>
   * @public
   */
  apns?: PushAPNSMessageTemplateContent | undefined;

  /**
   * <p>The content of the message template that applies to FCM (Firebase Cloud Messaging) notification service.</p>
   * @public
   */
  fcm?: PushFCMMessageTemplateContent | undefined;

  /**
   * <p>The content of the message template that applies to Baidu notification service.</p>
   * @public
   */
  baidu?: PushBaiduMessageTemplateContent | undefined;
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
 * <p>The content of the message template that applies to the WHATSAPP channel subtype.</p>
 * @public
 */
export interface WhatsAppMessageTemplateContent {
  /**
   * <p>The data.</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * <p>The container of message template content.</p>
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
   * <p>The content of the message template that applies to the email channel subtype.</p>
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
   * <p>The content of the message template that applies to the SMS channel subtype.</p>
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
   * <p>The content of the message template that applies to the WHATSAPP channel subtype.</p>
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
   * <p>The content of the message template that applies to the push channel subtype.</p>
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
   * <p>The customer's email address, which has not been specified as a personal or business address.</p>
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * <p>The customer's phone number, which has not been specified as a mobile, home, or business number.</p>
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
   * <p>The customer's phone number if used with <code>customerEndpoint</code>, or the number the customer dialed to call your contact center if used with <code>systemEndpoint</code>.</p>
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
   * <p>The criteria used for grouping Amazon Q in Connect users.</p> <p>The following is the list of supported criteria values.</p> <ul> <li> <p> <code>RoutingProfileArn</code>: Grouping the users by their <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profile ARN</a>. User should have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html">SearchRoutingProfile</a> and <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html">DescribeRoutingProfile</a> permissions when setting criteria to this value.</p> </li> </ul>
   * @public
   */
  criteria?: string | undefined;

  /**
   * <p>The list of values that define different groups of Amazon Q in Connect users.</p> <ul> <li> <p>When setting <code>criteria</code> to <code>RoutingProfileArn</code>, you need to provide a list of ARNs of <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profiles</a> as values of this parameter.</p> </li> </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Configuration information about the external data source.</p>
 * @public
 */
export interface WhatsAppMessageTemplateSourceConfiguration {
  /**
   * <p>The ID of the End User Messaging WhatsApp Business Account to associate with this template.</p>
   * @public
   */
  businessAccountId: string | undefined;

  /**
   * <p>The WhatsApp template ID.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The list of component mapping from WhatsApp template parameters to Message Template attributes.</p>
   * @public
   */
  components?: string[] | undefined;
}

/**
 * <p>The container of message template source configuration.</p>
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
   * <p>The sourceConfiguration of the message template that applies to the WHATSAPP channel subtype.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

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
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The source configuration of the message template. Only set this argument for WHATSAPP channel subtype.</p>
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
 * <p>Configuration information about the external data source.</p>
 * @public
 */
export interface WhatsAppMessageTemplateSourceConfigurationSummary {
  /**
   * <p>The ID of the End User Messaging WhatsApp Business Account to associate with this template.</p>
   * @public
   */
  businessAccountId: string | undefined;

  /**
   * <p>The ID of WhatsApp template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The name of the WhatsApp template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The language of the WhatsApp template.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The list of component mapping from WhatsApp template parameters to Message Template attributes.</p>
   * @public
   */
  components?: string[] | undefined;

  /**
   * <p>The status of the message template.</p>
   * @public
   */
  status?: WhatsAppSourceConfigurationStatus | undefined;

  /**
   * <p>The status reason of the message template.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>The container of message template source configuration summary.</p>
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
   * <p>The sourceConfiguration summary of the message template that applies to the WHATSAPP channel subtype.</p>
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
   * <p>The channel of the message template.</p>
   * @public
   */
  channel?: string | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The source configuration summary of the message template.</p>
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The types of attributes that the message template contains.</p>
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language, <code>defaultAttributes</code> and <code>Attachments</code> of the message template.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The presentation information for the attachment file.</p>
   * @public
   */
  contentDisposition: ContentDisposition | undefined;

  /**
   * <p>The name of the attachment file being uploaded. The name should include the file extension.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The body of the attachment file being uploaded. It should be encoded using base64 encoding.</p>
   * @public
   */
  body: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>The name of the attachment file being uploaded. The name should include the file extension.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language, <code>defaultAttributes</code> and <code>Attachments</code> of the message template. If not supplied, the message template version will be created based on the message template content that is referenced by the <code>$LATEST</code> qualifier by default.</p>
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
   * <p>The channel of the message template.</p>
   * @public
   */
  channel?: string | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The source configuration summary of the message template.</p>
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.</p>
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
   * <p>The checksum value of the message template content that is referenced by the <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language, <code>defaultAttributes</code> and <code>Attachments</code> of the message template.</p>
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
export interface CreateMessageTemplateVersionResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: ExtendedMessageTemplateData | undefined;
}

/**
 * <p>The container of quick response data.</p>
 * @public
 */
export type QuickResponseDataProvider =
  | QuickResponseDataProvider.ContentMember
  | QuickResponseDataProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseDataProvider {
  /**
   * <p>The content of the quick response.</p>
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
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the quick response.</p>
   * @public
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for a quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for a quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base. </p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect channels this quick response applies to.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
 * <p>The container quick response content.</p>
 * @public
 */
export type QuickResponseContentProvider =
  | QuickResponseContentProvider.ContentMember
  | QuickResponseContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseContentProvider {
  /**
   * <p>The content of the quick response.</p>
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
 * <p>The content of the quick response stored in different media types.</p>
 * @public
 */
export interface QuickResponseContents {
  /**
   * <p>The container quick response content.</p>
   * @public
   */
  plainText?: QuickResponseContentProvider | undefined;

  /**
   * <p>The container quick response content.</p>
   * @public
   */
  markdown?: QuickResponseContentProvider | undefined;
}

/**
 * <p>Information about the quick response.</p>
 * @public
 */
export interface QuickResponseData {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the quick response data.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The contents of the quick response.</p>
   * @public
   */
  contents?: QuickResponseContents | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The version number of the message template version to deactivate.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateResponse {
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
   * <p>The version number of the message template version that has been deactivated.</p>
   * @public
   */
  versionNumber: number | undefined;
}
