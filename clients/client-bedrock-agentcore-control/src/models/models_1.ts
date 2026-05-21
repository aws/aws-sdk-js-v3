// smithy-typescript generated code
import type {
  ActorTokenContentType,
  ClientAuthenticationMethodType,
  ContentLevel,
  ContentType,
  CredentialProviderVendorType,
  DescriptorType,
  FilterOperator,
  FindingType,
  MemoryStatus,
  MemoryStrategyStatus,
  MemoryStrategyType,
  MemoryView,
  MetadataValueType,
  OnBehalfOfTokenExchangeGrantTypeType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  OverrideType,
  PaymentConnectorStatus,
  PaymentConnectorType,
  PaymentCredentialProviderVendorType,
  PaymentManagerStatus,
  PaymentsAuthorizerType,
  PolicyEngineStatus,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  RegistryAuthorizerType,
  RegistryRecordCredentialProviderType,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryStatus,
  Status,
  SynchronizationType,
} from "./enums";
import type {
  A2aDescriptor,
  AgentSkillsDescriptor,
  AuthorizerConfiguration,
  EpisodicOverrideConsolidationConfigurationInput,
  EpisodicOverrideExtractionConfigurationInput,
  IndexedKey,
  KmsConfiguration,
  NumberValidation,
  PrivateEndpoint,
  PrivateEndpointOverride,
  Secret,
  SkillDefinition,
  SkillMdDefinition,
  StringListValidation,
  UpdatedAuthorizerConfiguration,
  WorkloadIdentityDetails,
} from "./models_0";

/**
 * <p>Validation for STRING fields.</p>
 * @public
 */
export interface StringValidation {
  /**
   * <p>Allowed values for this STRING field.</p>
   * @public
   */
  allowedValues: string[] | undefined;
}

/**
 * <p>Validation rules for extracted metadata values. Only one type can be specified, matching the field's data type.</p>
 * @public
 */
export type Validation =
  | Validation.NumberValidationMember
  | Validation.StringListValidationMember
  | Validation.StringValidationMember
  | Validation.$UnknownMember;

/**
 * @public
 */
export namespace Validation {
  /**
   * <p>Validation for STRING fields.</p>
   * @public
   */
  export interface StringValidationMember {
    stringValidation: StringValidation;
    stringListValidation?: never;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * <p>Validation for STRINGLIST fields.</p>
   * @public
   */
  export interface StringListValidationMember {
    stringValidation?: never;
    stringListValidation: StringListValidation;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * <p>Validation for NUMBER fields.</p>
   * @public
   */
  export interface NumberValidationMember {
    stringValidation?: never;
    stringListValidation?: never;
    numberValidation: NumberValidation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValidation?: never;
    stringListValidation?: never;
    numberValidation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValidation: (value: StringValidation) => T;
    stringListValidation: (value: StringListValidation) => T;
    numberValidation: (value: NumberValidation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Model-based metadata extraction configuration.</p>
 * @public
 */
export interface LlmExtractionConfig {
  /**
   * <p>Instructions for extraction. Supports built-in operators like LATEST_VALUE or custom natural-language instructions.</p>
   * @public
   */
  llmExtractionInstruction?: string | undefined;

  /**
   * <p>Description of what this metadata field represents.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>Validation rules to constrain extracted values.</p>
   * @public
   */
  validation?: Validation | undefined;
}

/**
 * <p>Configuration for metadata extraction from conversational content.</p>
 * @public
 */
export type ExtractionConfig =
  | ExtractionConfig.LlmExtractionConfigMember
  | ExtractionConfig.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionConfig {
  /**
   * <p>Model-based extraction using a definition and instructions.</p>
   * @public
   */
  export interface LlmExtractionConfigMember {
    llmExtractionConfig: LlmExtractionConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    llmExtractionConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    llmExtractionConfig: (value: LlmExtractionConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A metadata field definition within a strategy's schema.</p>
 * @public
 */
export interface MetadataSchemaEntry {
  /**
   * <p>The metadata field name. Must match an indexed key to be queryable via metadata filters.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The MetadataValueType.</p>
   * @public
   */
  type?: MetadataValueType | undefined;

  /**
   * <p>Configuration for extracting this metadata value from conversational content.</p>
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;
}

/**
 * <p>Schema for metadata on memory records generated by a strategy.</p>
 * @public
 */
export interface MemoryRecordSchema {
  /**
   * <p>The metadata field definitions for this strategy.</p>
   * @public
   */
  metadataSchema?: MetadataSchemaEntry[] | undefined;
}

/**
 * <p>Configurations for overriding the reflection step of the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideReflectionConfigurationInput {
  /**
   * <p>The text to append to the prompt for reflection step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this reflection override.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for the configuration to override the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideConfigurationInput {
  /**
   * <p>Contains configurations for overriding the extraction step of the episodic memory strategy.</p>
   * @public
   */
  extraction?: EpisodicOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>Contains configurations for overriding the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  consolidation?: EpisodicOverrideConsolidationConfigurationInput | undefined;

  /**
   * <p>Contains configurations for overriding the reflection step of the episodic memory strategy.</p>
   * @public
   */
  reflection?: EpisodicOverrideReflectionConfigurationInput | undefined;
}

/**
 * <p>The configuration to invoke a self-managed memory processing pipeline with.</p>
 * @public
 */
export interface InvocationConfigurationInput {
  /**
   * <p>The ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * <p>The trigger configuration based on a message.</p>
 * @public
 */
export interface MessageBasedTriggerInput {
  /**
   * <p>The number of messages that trigger memory processing.</p>
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * <p>Trigger configuration based on time.</p>
 * @public
 */
export interface TimeBasedTriggerInput {
  /**
   * <p>Idle session timeout (seconds) that triggers memory processing.</p>
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * <p>Trigger configuration based on tokens.</p>
 * @public
 */
export interface TokenBasedTriggerInput {
  /**
   * <p>Number of tokens that trigger memory processing.</p>
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * <p>Condition that triggers memory processing.</p>
 * @public
 */
export type TriggerConditionInput =
  | TriggerConditionInput.MessageBasedTriggerMember
  | TriggerConditionInput.TimeBasedTriggerMember
  | TriggerConditionInput.TokenBasedTriggerMember
  | TriggerConditionInput.$UnknownMember;

/**
 * @public
 */
export namespace TriggerConditionInput {
  /**
   * <p>Message based trigger configuration.</p>
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTriggerInput;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Token based trigger configuration.</p>
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTriggerInput;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Time based trigger configuration.</p>
   * @public
   */
  export interface TimeBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger: TimeBasedTriggerInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTriggerInput) => T;
    tokenBasedTrigger: (value: TokenBasedTriggerInput) => T;
    timeBasedTrigger: (value: TimeBasedTriggerInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input configuration for a self-managed memory strategy.</p>
 * @public
 */
export interface SelfManagedConfigurationInput {
  /**
   * <p>A list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * <p>Configuration to invoke a self-managed memory processing pipeline with.</p>
   * @public
   */
  invocationConfiguration: InvocationConfigurationInput | undefined;

  /**
   * <p>Number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * <p>Input for semantic override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for semantic consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for semantic override extraction configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideExtractionConfigurationInput {
  /**
   * <p>The text to append to the prompt for semantic extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for semantic override configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideConfigurationInput {
  /**
   * <p>The extraction configuration for a semantic override.</p>
   * @public
   */
  extraction?: SemanticOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>The consolidation configuration for a semantic override.</p>
   * @public
   */
  consolidation?: SemanticOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for summary override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface SummaryOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for summary consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for summary consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for summary override configuration in a memory strategy.</p>
 * @public
 */
export interface SummaryOverrideConfigurationInput {
  /**
   * <p>The consolidation configuration for a summary override.</p>
   * @public
   */
  consolidation?: SummaryOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for user preference override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for user preference consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for user preference override extraction configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideExtractionConfigurationInput {
  /**
   * <p>The text to append to the prompt for user preference extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for user preference override configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideConfigurationInput {
  /**
   * <p>The extraction configuration for a user preference override.</p>
   * @public
   */
  extraction?: UserPreferenceOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>The consolidation configuration for a user preference override.</p>
   * @public
   */
  consolidation?: UserPreferenceOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for custom configuration of a memory strategy.</p>
 * @public
 */
export type CustomConfigurationInput =
  | CustomConfigurationInput.EpisodicOverrideMember
  | CustomConfigurationInput.SelfManagedConfigurationMember
  | CustomConfigurationInput.SemanticOverrideMember
  | CustomConfigurationInput.SummaryOverrideMember
  | CustomConfigurationInput.UserPreferenceOverrideMember
  | CustomConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomConfigurationInput {
  /**
   * <p>The semantic override configuration for a custom memory strategy.</p>
   * @public
   */
  export interface SemanticOverrideMember {
    semanticOverride: SemanticOverrideConfigurationInput;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The summary override configuration for a custom memory strategy.</p>
   * @public
   */
  export interface SummaryOverrideMember {
    semanticOverride?: never;
    summaryOverride: SummaryOverrideConfigurationInput;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference override configuration for a custom memory strategy.</p>
   * @public
   */
  export interface UserPreferenceOverrideMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride: UserPreferenceOverrideConfigurationInput;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The episodic memory strategy override configuration for a custom memory strategy.</p>
   * @public
   */
  export interface EpisodicOverrideMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride: EpisodicOverrideConfigurationInput;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The self managed configuration for a custom memory strategy.</p>
   * @public
   */
  export interface SelfManagedConfigurationMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration: SelfManagedConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticOverride: (value: SemanticOverrideConfigurationInput) => T;
    summaryOverride: (value: SummaryOverrideConfigurationInput) => T;
    userPreferenceOverride: (value: UserPreferenceOverrideConfigurationInput) => T;
    episodicOverride: (value: EpisodicOverrideConfigurationInput) => T;
    selfManagedConfiguration: (value: SelfManagedConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input for creating a custom memory strategy.</p>
 * @public
 */
export interface CustomMemoryStrategyInput {
  /**
   * <p>The name of the custom memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the custom memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the custom memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the custom memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The configuration for the custom memory strategy.</p>
   * @public
   */
  configuration?: CustomConfigurationInput | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>An episodic reflection configuration input.</p>
 * @public
 */
export interface EpisodicReflectionConfigurationInput {
  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces over which to create reflections. Can be less nested than episode namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates over which to create reflections. Can be less nested than episode namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by reflections.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating an episodic memory strategy.</p>
 * @public
 */
export interface EpisodicMemoryStrategyInput {
  /**
   * <p>The name of the episodic memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the episodic memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces for which to create episodes.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates for which to create episodes.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The configuration for the reflections created with the episodic memory strategy.</p>
   * @public
   */
  reflectionConfiguration?: EpisodicReflectionConfigurationInput | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a semantic memory strategy.</p>
 * @public
 */
export interface SemanticMemoryStrategyInput {
  /**
   * <p>The name of the semantic memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the semantic memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the semantic memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the semantic memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata on memory records generated by a strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a summary memory strategy.</p>
 * @public
 */
export interface SummaryMemoryStrategyInput {
  /**
   * <p>The name of the summary memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the summary memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the summary memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the summary memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a user preference memory strategy.</p>
 * @public
 */
export interface UserPreferenceMemoryStrategyInput {
  /**
   * <p>The name of the user preference memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the user preference memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the user preference memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the user preference memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains input information for creating a memory strategy.</p>
 * @public
 */
export type MemoryStrategyInput =
  | MemoryStrategyInput.CustomMemoryStrategyMember
  | MemoryStrategyInput.EpisodicMemoryStrategyMember
  | MemoryStrategyInput.SemanticMemoryStrategyMember
  | MemoryStrategyInput.SummaryMemoryStrategyMember
  | MemoryStrategyInput.UserPreferenceMemoryStrategyMember
  | MemoryStrategyInput.$UnknownMember;

/**
 * @public
 */
export namespace MemoryStrategyInput {
  /**
   * <p>Input for creating a semantic memory strategy.</p>
   * @public
   */
  export interface SemanticMemoryStrategyMember {
    semanticMemoryStrategy: SemanticMemoryStrategyInput;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * <p>Input for creating a summary memory strategy.</p>
   * @public
   */
  export interface SummaryMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy: SummaryMemoryStrategyInput;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * <p>Input for creating a user preference memory strategy.</p>
   * @public
   */
  export interface UserPreferenceMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy: UserPreferenceMemoryStrategyInput;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * <p>Input for creating a custom memory strategy.</p>
   * @public
   */
  export interface CustomMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy: CustomMemoryStrategyInput;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * <p>Input for creating an episodic memory strategy</p>
   * @public
   */
  export interface EpisodicMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy: EpisodicMemoryStrategyInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticMemoryStrategy: (value: SemanticMemoryStrategyInput) => T;
    summaryMemoryStrategy: (value: SummaryMemoryStrategyInput) => T;
    userPreferenceMemoryStrategy: (value: UserPreferenceMemoryStrategyInput) => T;
    customMemoryStrategy: (value: CustomMemoryStrategyInput) => T;
    episodicMemoryStrategy: (value: EpisodicMemoryStrategyInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Defines what content to stream and at what level of detail.</p>
 * @public
 */
export interface ContentConfiguration {
  /**
   * <p>Type of content to stream.</p>
   * @public
   */
  type: ContentType | undefined;

  /**
   * <p>Level of detail for streamed content.</p>
   * @public
   */
  level?: ContentLevel | undefined;
}

/**
 * <p>Configuration for Kinesis Data Stream delivery.</p>
 * @public
 */
export interface KinesisResource {
  /**
   * <p>ARN of the Kinesis Data Stream.</p>
   * @public
   */
  dataStreamArn: string | undefined;

  /**
   * <p>Content configurations for stream delivery.</p>
   * @public
   */
  contentConfigurations: ContentConfiguration[] | undefined;
}

/**
 * <p>Supported stream delivery resource types.</p>
 * @public
 */
export type StreamDeliveryResource =
  | StreamDeliveryResource.KinesisMember
  | StreamDeliveryResource.$UnknownMember;

/**
 * @public
 */
export namespace StreamDeliveryResource {
  /**
   * <p>Kinesis Data Stream configuration.</p>
   * @public
   */
  export interface KinesisMember {
    kinesis: KinesisResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kinesis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kinesis: (value: KinesisResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for streaming memory record data to external resources.</p>
 * @public
 */
export interface StreamDeliveryResources {
  /**
   * <p>List of stream delivery resource configurations.</p>
   * @public
   */
  resources: StreamDeliveryResource[] | undefined;
}

/**
 * @public
 */
export interface CreateMemoryInput {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the memory. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the memory data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the memory to access Amazon Web Services services.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The duration after which memory events expire. Specified as an ISO 8601 duration.</p>
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * <p>The memory strategies to use for this memory. Strategies define how information is extracted, processed, and consolidated.</p>
   * @public
   */
  memoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * <p>Metadata keys to index for filtering. Once declared, indexed keys cannot be removed.</p>
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Memory. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains configurations to override the default consolidation step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicConsolidationOverride {
  /**
   * <p>The text appended to the prompt for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains semantic consolidation override configuration.</p>
 * @public
 */
export interface SemanticConsolidationOverride {
  /**
   * <p>The text to append to the prompt for semantic consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains summary consolidation override configuration.</p>
 * @public
 */
export interface SummaryConsolidationOverride {
  /**
   * <p>The text to append to the prompt for summary consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for summary consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains user preference consolidation override configuration.</p>
 * @public
 */
export interface UserPreferenceConsolidationOverride {
  /**
   * <p>The text to append to the prompt for user preference consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains custom consolidation configuration information.</p>
 * @public
 */
export type CustomConsolidationConfiguration =
  | CustomConsolidationConfiguration.EpisodicConsolidationOverrideMember
  | CustomConsolidationConfiguration.SemanticConsolidationOverrideMember
  | CustomConsolidationConfiguration.SummaryConsolidationOverrideMember
  | CustomConsolidationConfiguration.UserPreferenceConsolidationOverrideMember
  | CustomConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomConsolidationConfiguration {
  /**
   * <p>The semantic consolidation override configuration.</p>
   * @public
   */
  export interface SemanticConsolidationOverrideMember {
    semanticConsolidationOverride: SemanticConsolidationOverride;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The summary consolidation override configuration.</p>
   * @public
   */
  export interface SummaryConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride: SummaryConsolidationOverride;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference consolidation override configuration.</p>
   * @public
   */
  export interface UserPreferenceConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride: UserPreferenceConsolidationOverride;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The configurations to override the default consolidation step for the episodic memory strategy.</p>
   * @public
   */
  export interface EpisodicConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride: EpisodicConsolidationOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticConsolidationOverride) => T;
    summaryConsolidationOverride: (value: SummaryConsolidationOverride) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceConsolidationOverride) => T;
    episodicConsolidationOverride: (value: EpisodicConsolidationOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains consolidation configuration information for a memory strategy.</p>
 * @public
 */
export type ConsolidationConfiguration =
  | ConsolidationConfiguration.CustomConsolidationConfigurationMember
  | ConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ConsolidationConfiguration {
  /**
   * <p>The custom consolidation configuration.</p>
   * @public
   */
  export interface CustomConsolidationConfigurationMember {
    customConsolidationConfiguration: CustomConsolidationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customConsolidationConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations to override the default extraction step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicExtractionOverride {
  /**
   * <p>The text appended to the prompt for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains semantic extraction override configuration.</p>
 * @public
 */
export interface SemanticExtractionOverride {
  /**
   * <p>The text to append to the prompt for semantic extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains user preference extraction override configuration.</p>
 * @public
 */
export interface UserPreferenceExtractionOverride {
  /**
   * <p>The text to append to the prompt for user preference extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains custom extraction configuration information.</p>
 * @public
 */
export type CustomExtractionConfiguration =
  | CustomExtractionConfiguration.EpisodicExtractionOverrideMember
  | CustomExtractionConfiguration.SemanticExtractionOverrideMember
  | CustomExtractionConfiguration.UserPreferenceExtractionOverrideMember
  | CustomExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomExtractionConfiguration {
  /**
   * <p>The semantic extraction override configuration.</p>
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticExtractionOverride;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The configurations to override the default extraction step for the episodic memory strategy.</p>
   * @public
   */
  export interface EpisodicExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride: EpisodicExtractionOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticExtractionOverride) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceExtractionOverride) => T;
    episodicExtractionOverride: (value: EpisodicExtractionOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains extraction configuration information for a memory strategy.</p>
 * @public
 */
export type ExtractionConfiguration =
  | ExtractionConfiguration.CustomExtractionConfigurationMember
  | ExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionConfiguration {
  /**
   * <p>The custom extraction configuration.</p>
   * @public
   */
  export interface CustomExtractionConfigurationMember {
    customExtractionConfiguration: CustomExtractionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customExtractionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations to override the default reflection step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicReflectionOverride {
  /**
   * <p>The text appended to the prompt for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>This is a legacy parameter. The namespaces over which reflections were created. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates over which reflections were created. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this reflection override.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains configurations for a custom reflection strategy.</p>
 * @public
 */
export type CustomReflectionConfiguration =
  | CustomReflectionConfiguration.EpisodicReflectionOverrideMember
  | CustomReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomReflectionConfiguration {
  /**
   * <p>The configuration for a reflection strategy to override the default one.</p>
   * @public
   */
  export interface EpisodicReflectionOverrideMember {
    episodicReflectionOverride: EpisodicReflectionOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionOverride: (value: EpisodicReflectionOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for the reflections created with the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicReflectionConfiguration {
  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces for which to create reflections. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates for which to create reflections. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>"Schema for metadata fields on records generated by reflections.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains reflection configuration information for a memory strategy.</p>
 * @public
 */
export type ReflectionConfiguration =
  | ReflectionConfiguration.CustomReflectionConfigurationMember
  | ReflectionConfiguration.EpisodicReflectionConfigurationMember
  | ReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ReflectionConfiguration {
  /**
   * <p>The configuration for a custom reflection strategy.</p>
   * @public
   */
  export interface CustomReflectionConfigurationMember {
    customReflectionConfiguration: CustomReflectionConfiguration;
    episodicReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for the episodic reflection strategy.</p>
   * @public
   */
  export interface EpisodicReflectionConfigurationMember {
    customReflectionConfiguration?: never;
    episodicReflectionConfiguration: EpisodicReflectionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customReflectionConfiguration?: never;
    episodicReflectionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customReflectionConfiguration: (value: CustomReflectionConfiguration) => T;
    episodicReflectionConfiguration: (value: EpisodicReflectionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration to invoke a self-managed memory processing pipeline with.</p>
 * @public
 */
export interface InvocationConfiguration {
  /**
   * <p>The ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * <p>The trigger configuration based on a message.</p>
 * @public
 */
export interface MessageBasedTrigger {
  /**
   * <p>The number of messages that trigger memory processing.</p>
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * <p>Trigger configuration based on time.</p>
 * @public
 */
export interface TimeBasedTrigger {
  /**
   * <p>Idle session timeout (seconds) that triggers memory processing.</p>
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * <p>Trigger configuration based on tokens.</p>
 * @public
 */
export interface TokenBasedTrigger {
  /**
   * <p>Number of tokens that trigger memory processing.</p>
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * <p>Condition that triggers memory processing.</p>
 * @public
 */
export type TriggerCondition =
  | TriggerCondition.MessageBasedTriggerMember
  | TriggerCondition.TimeBasedTriggerMember
  | TriggerCondition.TokenBasedTriggerMember
  | TriggerCondition.$UnknownMember;

/**
 * @public
 */
export namespace TriggerCondition {
  /**
   * <p>Message based trigger configuration.</p>
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTrigger;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Token based trigger configuration.</p>
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTrigger;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Time based trigger configuration.</p>
   * @public
   */
  export interface TimeBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger: TimeBasedTrigger;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTrigger) => T;
    tokenBasedTrigger: (value: TokenBasedTrigger) => T;
    timeBasedTrigger: (value: TimeBasedTrigger) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A configuration for a self-managed memory strategy.</p>
 * @public
 */
export interface SelfManagedConfiguration {
  /**
   * <p>A list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions: TriggerCondition[] | undefined;

  /**
   * <p>The configuration to use when invoking memory processing.</p>
   * @public
   */
  invocationConfiguration: InvocationConfiguration | undefined;

  /**
   * <p>The number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize: number | undefined;
}

/**
 * <p>Contains configuration information for a memory strategy.</p>
 * @public
 */
export interface StrategyConfiguration {
  /**
   * <p>The type of override for the strategy configuration.</p>
   * @public
   */
  type?: OverrideType | undefined;

  /**
   * <p>The extraction configuration for the memory strategy.</p>
   * @public
   */
  extraction?: ExtractionConfiguration | undefined;

  /**
   * <p>The consolidation configuration for the memory strategy.</p>
   * @public
   */
  consolidation?: ConsolidationConfiguration | undefined;

  /**
   * <p>The reflection configuration for the memory strategy.</p>
   * @public
   */
  reflection?: ReflectionConfiguration | undefined;

  /**
   * <p>Self-managed configuration settings.</p>
   * @public
   */
  selfManagedConfiguration?: SelfManagedConfiguration | undefined;
}

/**
 * <p>Contains information about a memory strategy.</p>
 * @public
 */
export interface MemoryStrategy {
  /**
   * <p>The unique identifier of the memory strategy.</p>
   * @public
   */
  strategyId: string | undefined;

  /**
   * <p>The name of the memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration of the memory strategy.</p>
   * @public
   */
  configuration?: StrategyConfiguration | undefined;

  /**
   * <p>The type of the memory strategy.</p>
   * @public
   */
  type: MemoryStrategyType | undefined;

  /**
   * <p>This is a legacy parameter. The namespaces associated with the memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the memory strategy.</p>
   * @public
   */
  namespaceTemplates: string[] | undefined;

  /**
   * <p>The timestamp when the memory strategy was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the memory strategy was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The current status of the memory strategy.</p>
   * @public
   */
  status?: MemoryStrategyStatus | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains information about a memory resource.</p>
 * @public
 */
export interface Memory {
  /**
   * <p>The Amazon Resource Name (ARN) of the memory.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the memory.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the KMS key used to encrypt the memory.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that provides permissions for the memory.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The number of days after which memory events will expire.</p>
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * <p>The current status of the memory.</p>
   * @public
   */
  status: MemoryStatus | undefined;

  /**
   * <p>The reason for failure if the memory is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The timestamp when the memory was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the memory was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The list of memory strategies associated with this memory.</p>
   * @public
   */
  strategies?: MemoryStrategy[] | undefined;

  /**
   * <p>The indexed metadata keys for this memory. Only indexed keys can be used in metadata filters.</p>
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;
}

/**
 * @public
 */
export interface CreateMemoryOutput {
  /**
   * <p>The details of the created memory, including its ID, ARN, name, description, and configuration settings.</p>
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryInput {
  /**
   * <p>A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the memory to delete.</p>
   * @public
   */
  memoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryOutput {
  /**
   * <p>The unique identifier of the deleted AgentCore Memory resource.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The current status of the AgentCore Memory resource deletion.</p>
   * @public
   */
  status?: MemoryStatus | undefined;
}

/**
 * @public
 */
export interface GetMemoryInput {
  /**
   * <p>The unique identifier of the memory to retrieve.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The level of detail to return for the memory.</p>
   * @public
   */
  view?: MemoryView | undefined;
}

/**
 * @public
 */
export interface GetMemoryOutput {
  /**
   * <p>The retrieved AgentCore Memory resource details.</p>
   * @public
   */
  memory: Memory | undefined;
}

/**
 * @public
 */
export interface ListMemoriesInput {
  /**
   * <p>The maximum number of results to return in a single call. The default value is 10. The maximum value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a memory resource.</p>
 * @public
 */
export interface MemorySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the memory.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The current status of the memory.</p>
   * @public
   */
  status?: MemoryStatus | undefined;

  /**
   * <p>The timestamp when the memory was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the memory was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMemoriesOutput {
  /**
   * <p>The list of AgentCore Memory resource summaries.</p>
   * @public
   */
  memories: MemorySummary[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for deleting a memory strategy.</p>
 * @public
 */
export interface DeleteMemoryStrategyInput {
  /**
   * <p>The unique identifier of the memory strategy to delete.</p>
   * @public
   */
  memoryStrategyId: string | undefined;
}

/**
 * <p>Input for a custom consolidation configuration.</p>
 * @public
 */
export type CustomConsolidationConfigurationInput =
  | CustomConsolidationConfigurationInput.EpisodicConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.SemanticConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.SummaryConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.UserPreferenceConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomConsolidationConfigurationInput {
  /**
   * <p>The semantic consolidation override configuration input.</p>
   * @public
   */
  export interface SemanticConsolidationOverrideMember {
    semanticConsolidationOverride: SemanticOverrideConsolidationConfigurationInput;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The summary consolidation override configuration input.</p>
   * @public
   */
  export interface SummaryConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride: SummaryOverrideConsolidationConfigurationInput;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference consolidation override configuration input.</p>
   * @public
   */
  export interface UserPreferenceConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride: UserPreferenceOverrideConsolidationConfigurationInput;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>Configurations to override the consolidation step of the episodic strategy.</p>
   * @public
   */
  export interface EpisodicConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride: EpisodicOverrideConsolidationConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticOverrideConsolidationConfigurationInput) => T;
    summaryConsolidationOverride: (value: SummaryOverrideConsolidationConfigurationInput) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceOverrideConsolidationConfigurationInput) => T;
    episodicConsolidationOverride: (value: EpisodicOverrideConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information for modifying a consolidation configuration.</p>
 * @public
 */
export type ModifyConsolidationConfiguration =
  | ModifyConsolidationConfiguration.CustomConsolidationConfigurationMember
  | ModifyConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyConsolidationConfiguration {
  /**
   * <p>The updated custom consolidation configuration.</p>
   * @public
   */
  export interface CustomConsolidationConfigurationMember {
    customConsolidationConfiguration: CustomConsolidationConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customConsolidationConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input for a custom extraction configuration.</p>
 * @public
 */
export type CustomExtractionConfigurationInput =
  | CustomExtractionConfigurationInput.EpisodicExtractionOverrideMember
  | CustomExtractionConfigurationInput.SemanticExtractionOverrideMember
  | CustomExtractionConfigurationInput.UserPreferenceExtractionOverrideMember
  | CustomExtractionConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomExtractionConfigurationInput {
  /**
   * <p>The semantic extraction override configuration input.</p>
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticOverrideExtractionConfigurationInput;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration input.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>Configurations to override the extraction step of the episodic strategy.</p>
   * @public
   */
  export interface EpisodicExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride: EpisodicOverrideExtractionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticOverrideExtractionConfigurationInput) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceOverrideExtractionConfigurationInput) => T;
    episodicExtractionOverride: (value: EpisodicOverrideExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information for modifying an extraction configuration.</p>
 * @public
 */
export type ModifyExtractionConfiguration =
  | ModifyExtractionConfiguration.CustomExtractionConfigurationMember
  | ModifyExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyExtractionConfiguration {
  /**
   * <p>The updated custom extraction configuration.</p>
   * @public
   */
  export interface CustomExtractionConfigurationMember {
    customExtractionConfiguration: CustomExtractionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customExtractionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input for a custom reflection configuration.</p>
 * @public
 */
export type CustomReflectionConfigurationInput =
  | CustomReflectionConfigurationInput.EpisodicReflectionOverrideMember
  | CustomReflectionConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomReflectionConfigurationInput {
  /**
   * <p>The reflection override configuration input.</p>
   * @public
   */
  export interface EpisodicReflectionOverrideMember {
    episodicReflectionOverride: EpisodicOverrideReflectionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionOverride: (value: EpisodicOverrideReflectionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information for modifying a reflection configuration.</p>
 * @public
 */
export type ModifyReflectionConfiguration =
  | ModifyReflectionConfiguration.CustomReflectionConfigurationMember
  | ModifyReflectionConfiguration.EpisodicReflectionConfigurationMember
  | ModifyReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyReflectionConfiguration {
  /**
   * <p>The updated episodic reflection configuration.</p>
   * @public
   */
  export interface EpisodicReflectionConfigurationMember {
    episodicReflectionConfiguration: EpisodicReflectionConfigurationInput;
    customReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The updated custom reflection configuration.</p>
   * @public
   */
  export interface CustomReflectionConfigurationMember {
    episodicReflectionConfiguration?: never;
    customReflectionConfiguration: CustomReflectionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionConfiguration?: never;
    customReflectionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionConfiguration: (value: EpisodicReflectionConfigurationInput) => T;
    customReflectionConfiguration: (value: CustomReflectionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for updating invocation settings.</p>
 * @public
 */
export interface ModifyInvocationConfigurationInput {
  /**
   * <p>The updated ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn?: string | undefined;

  /**
   * <p>The updated S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName?: string | undefined;
}

/**
 * <p>The configuration for updating the self-managed memory strategy.</p>
 * @public
 */
export interface ModifySelfManagedConfiguration {
  /**
   * <p>The updated list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * <p>The updated configuration to invoke self-managed memory processing pipeline.</p>
   * @public
   */
  invocationConfiguration?: ModifyInvocationConfigurationInput | undefined;

  /**
   * <p>The updated number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * <p>Contains information for modifying a strategy configuration.</p>
 * @public
 */
export interface ModifyStrategyConfiguration {
  /**
   * <p>The updated extraction configuration.</p>
   * @public
   */
  extraction?: ModifyExtractionConfiguration | undefined;

  /**
   * <p>The updated consolidation configuration.</p>
   * @public
   */
  consolidation?: ModifyConsolidationConfiguration | undefined;

  /**
   * <p>The updated reflection configuration.</p>
   * @public
   */
  reflection?: ModifyReflectionConfiguration | undefined;

  /**
   * <p>The updated self-managed configuration.</p>
   * @public
   */
  selfManagedConfiguration?: ModifySelfManagedConfiguration | undefined;
}

/**
 * <p>Input for modifying a memory strategy.</p>
 * @public
 */
export interface ModifyMemoryStrategyInput {
  /**
   * <p>The unique identifier of the memory strategy to modify.</p>
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * <p>The updated description of the memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The updated namespaces for the memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The updated namespaceTemplates for the memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The updated configuration for the memory strategy.</p>
   * @public
   */
  configuration?: ModifyStrategyConfiguration | undefined;

  /**
   * <p>Updated metadata schema for records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains information for modifying memory strategies.</p>
 * @public
 */
export interface ModifyMemoryStrategies {
  /**
   * <p>The list of memory strategies to add.</p>
   * @public
   */
  addMemoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * <p>The list of memory strategies to modify.</p>
   * @public
   */
  modifyMemoryStrategies?: ModifyMemoryStrategyInput[] | undefined;

  /**
   * <p>The list of memory strategies to delete.</p>
   * @public
   */
  deleteMemoryStrategies?: DeleteMemoryStrategyInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryInput {
  /**
   * <p>A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the memory to update.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The updated description of the AgentCore Memory resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of days after which memory events will expire, between 7 and 365 days.</p>
   * @public
   */
  eventExpiryDuration?: number | undefined;

  /**
   * <p>The ARN of the IAM role that provides permissions for the AgentCore Memory resource.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The memory strategies to add, modify, or delete.</p>
   * @public
   */
  memoryStrategies?: ModifyMemoryStrategies | undefined;

  /**
   * <p>Additional metadata keys to index. Previously indexed keys cannot be removed.</p>
   * @public
   */
  addIndexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryOutput {
  /**
   * <p>The updated AgentCore Memory resource details.</p>
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * <p>Configuration settings for connecting to Atlassian services using OAuth2 authentication. This includes the client credentials required to authenticate with Atlassian's OAuth2 authorization server.</p>
 * @public
 */
export interface AtlassianOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Atlassian OAuth2 provider. This identifier is assigned by Atlassian when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Atlassian OAuth2 provider. This secret is assigned by Atlassian and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Contains the authorization server metadata for an OAuth2 provider.</p>
 * @public
 */
export interface Oauth2AuthorizationServerMetadata {
  /**
   * <p>The issuer URL for the OAuth2 authorization server.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The authorization endpoint URL for the OAuth2 authorization server.</p>
   * @public
   */
  authorizationEndpoint: string | undefined;

  /**
   * <p>The token endpoint URL for the OAuth2 authorization server.</p>
   * @public
   */
  tokenEndpoint: string | undefined;

  /**
   * <p>The supported response types for the OAuth2 authorization server.</p>
   * @public
   */
  responseTypes?: string[] | undefined;

  /**
   * <p>The authentication methods supported by the token endpoint. This specifies how clients can authenticate when requesting tokens from the authorization server.</p>
   * @public
   */
  tokenEndpointAuthMethods?: string[] | undefined;
}

/**
 * <p>Contains the discovery information for an OAuth2 provider.</p>
 * @public
 */
export type Oauth2Discovery =
  | Oauth2Discovery.AuthorizationServerMetadataMember
  | Oauth2Discovery.DiscoveryUrlMember
  | Oauth2Discovery.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2Discovery {
  /**
   * <p>The discovery URL for the OAuth2 provider.</p>
   * @public
   */
  export interface DiscoveryUrlMember {
    discoveryUrl: string;
    authorizationServerMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>The authorization server metadata for the OAuth2 provider.</p>
   * @public
   */
  export interface AuthorizationServerMetadataMember {
    discoveryUrl?: never;
    authorizationServerMetadata: Oauth2AuthorizationServerMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    discoveryUrl?: never;
    authorizationServerMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    discoveryUrl: (value: string) => T;
    authorizationServerMetadata: (value: Oauth2AuthorizationServerMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for RFC 8693 token exchange.</p>
 * @public
 */
export interface TokenExchangeGrantTypeConfigType {
  /**
   * <p>The content type for the actor token in the token exchange.</p>
   * @public
   */
  actorTokenContent: ActorTokenContentType | undefined;

  /**
   * <p>The scopes for the actor token. Only valid when actorTokenContent is M2M.</p>
   * @public
   */
  actorTokenScopes?: string[] | undefined;
}

/**
 * <p>Configuration for on-behalf-of token exchange.</p>
 * @public
 */
export interface OnBehalfOfTokenExchangeConfigType {
  /**
   * <p>The grant type for the on-behalf-of token exchange.</p>
   * @public
   */
  grantType: OnBehalfOfTokenExchangeGrantTypeType | undefined;

  /**
   * <p>Configuration specific to the TOKEN_EXCHANGE grant type (RFC 8693).</p>
   * @public
   */
  tokenExchangeGrantTypeConfig?: TokenExchangeGrantTypeConfigType | undefined;
}

/**
 * <p>Input configuration for a custom OAuth2 provider.</p>
 * @public
 */
export interface CustomOauth2ProviderConfigInput {
  /**
   * <p>The OAuth2 discovery information for the custom provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the custom OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The client secret for the custom OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The private endpoint overrides for the custom OAuth2 provider configuration.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;

  /**
   * <p>The configuration for on-behalf-of token exchange. This enables authentication flows that use RFC 8693 token exchange or RFC 7523 JWT authorization grants.</p>
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * <p>The client authentication method to use when authenticating with the token endpoint.</p>
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;
}

/**
 * <p>Input configuration for a GitHub OAuth2 provider.</p>
 * @public
 */
export interface GithubOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Input configuration for a Google OAuth2 provider.</p>
 * @public
 */
export interface GoogleOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Google OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Google OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Configuration settings for connecting to a supported OAuth2 provider. This includes client credentials and OAuth2 discovery information for providers that have built-in support.</p>
 * @public
 */
export interface IncludedOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the supported OAuth2 provider. This identifier is assigned by the OAuth2 provider when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the supported OAuth2 provider. This secret is assigned by the OAuth2 provider and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p>Token issuer of your isolated OAuth2 application tenant. This URL identifies the authorization server that issues tokens for this provider.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>OAuth2 authorization endpoint for your isolated OAuth2 application tenant. This is where users are redirected to authenticate and authorize access to their resources.</p>
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * <p>OAuth2 token endpoint for your isolated OAuth2 application tenant. This is where authorization codes are exchanged for access tokens.</p>
   * @public
   */
  tokenEndpoint?: string | undefined;
}

/**
 * <p>Configuration settings for connecting to LinkedIn services using OAuth2 authentication. This includes the client credentials required to authenticate with LinkedIn's OAuth2 authorization server.</p>
 * @public
 */
export interface LinkedinOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the LinkedIn OAuth2 provider. This identifier is assigned by LinkedIn when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the LinkedIn OAuth2 provider. This secret is assigned by LinkedIn and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Input configuration for a Microsoft OAuth2 provider.</p>
 * @public
 */
export interface MicrosoftOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p>The Microsoft Entra ID (formerly Azure AD) tenant ID for your organization. This identifies the specific tenant within Microsoft's identity platform where your application is registered.</p>
   * @public
   */
  tenantId?: string | undefined;
}

/**
 * <p>Input configuration for a Salesforce OAuth2 provider.</p>
 * @public
 */
export interface SalesforceOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Input configuration for a Slack OAuth2 provider.</p>
 * @public
 */
export interface SlackOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Slack OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Slack OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Contains the input configuration for an OAuth2 provider.</p>
 * @public
 */
export type Oauth2ProviderConfigInput =
  | Oauth2ProviderConfigInput.AtlassianOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.CustomOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.GithubOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.GoogleOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.IncludedOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.LinkedinOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.MicrosoftOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.SalesforceOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.SlackOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2ProviderConfigInput {
  /**
   * <p>The configuration for a custom OAuth2 provider.</p>
   * @public
   */
  export interface CustomOauth2ProviderConfigMember {
    customOauth2ProviderConfig: CustomOauth2ProviderConfigInput;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a Google OAuth2 provider.</p>
   * @public
   */
  export interface GoogleOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a GitHub OAuth2 provider.</p>
   * @public
   */
  export interface GithubOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a Slack OAuth2 provider.</p>
   * @public
   */
  export interface SlackOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig: SlackOauth2ProviderConfigInput;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a Salesforce OAuth2 provider.</p>
   * @public
   */
  export interface SalesforceOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigInput;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a Microsoft OAuth2 provider.</p>
   * @public
   */
  export interface MicrosoftOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration settings for Atlassian OAuth2 provider integration.</p>
   * @public
   */
  export interface AtlassianOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigInput;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration settings for LinkedIn OAuth2 provider integration.</p>
   * @public
   */
  export interface LinkedinOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigInput;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a non-custom OAuth2 provider. This includes settings for supported OAuth2 providers that have built-in integration support.</p>
   * @public
   */
  export interface IncludedOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig: IncludedOauth2ProviderConfigInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customOauth2ProviderConfig: (value: CustomOauth2ProviderConfigInput) => T;
    googleOauth2ProviderConfig: (value: GoogleOauth2ProviderConfigInput) => T;
    githubOauth2ProviderConfig: (value: GithubOauth2ProviderConfigInput) => T;
    slackOauth2ProviderConfig: (value: SlackOauth2ProviderConfigInput) => T;
    salesforceOauth2ProviderConfig: (value: SalesforceOauth2ProviderConfigInput) => T;
    microsoftOauth2ProviderConfig: (value: MicrosoftOauth2ProviderConfigInput) => T;
    atlassianOauth2ProviderConfig: (value: AtlassianOauth2ProviderConfigInput) => T;
    linkedinOauth2ProviderConfig: (value: LinkedinOauth2ProviderConfigInput) => T;
    includedOauth2ProviderConfig: (value: IncludedOauth2ProviderConfigInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider. This specifies which OAuth2 implementation to use.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The configuration settings for the OAuth2 provider, including client ID, client secret, and other vendor-specific settings.</p>
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;

  /**
   * <p>A map of tag keys and values to assign to the OAuth2 credential provider. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The configuration details returned for an Atlassian OAuth2 provider, including the client ID and OAuth2 discovery information.</p>
 * @public
 */
export interface AtlassianOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Atlassian OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a custom OAuth2 provider.</p>
 * @public
 */
export interface CustomOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the custom provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the custom OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The private endpoint overrides for the custom OAuth2 provider configuration.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;

  /**
   * <p>The configuration for on-behalf-of token exchange.</p>
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * <p>The client authentication method used when authenticating with the token endpoint.</p>
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;
}

/**
 * <p>Output configuration for a GitHub OAuth2 provider.</p>
 * @public
 */
export interface GithubOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the GitHub provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Google OAuth2 provider.</p>
 * @public
 */
export interface GoogleOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Google provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Google OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>The configuration details returned for a supported OAuth2 provider, including client credentials and OAuth2 discovery information.</p>
 * @public
 */
export interface IncludedOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the supported OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>The configuration details returned for a LinkedIn OAuth2 provider, including the client ID and OAuth2 discovery information.</p>
 * @public
 */
export interface LinkedinOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the LinkedIn OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Microsoft OAuth2 provider.</p>
 * @public
 */
export interface MicrosoftOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Microsoft provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Salesforce OAuth2 provider.</p>
 * @public
 */
export interface SalesforceOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Salesforce provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Slack OAuth2 provider.</p>
 * @public
 */
export interface SlackOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Slack provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Slack OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Contains the output configuration for an OAuth2 provider.</p>
 * @public
 */
export type Oauth2ProviderConfigOutput =
  | Oauth2ProviderConfigOutput.AtlassianOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.CustomOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.GithubOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.GoogleOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.IncludedOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.LinkedinOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.MicrosoftOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.SalesforceOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.SlackOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2ProviderConfigOutput {
  /**
   * <p>The output configuration for a custom OAuth2 provider.</p>
   * @public
   */
  export interface CustomOauth2ProviderConfigMember {
    customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The output configuration for a Google OAuth2 provider.</p>
   * @public
   */
  export interface GoogleOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The output configuration for a GitHub OAuth2 provider.</p>
   * @public
   */
  export interface GithubOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The output configuration for a Slack OAuth2 provider.</p>
   * @public
   */
  export interface SlackOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig: SlackOauth2ProviderConfigOutput;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The output configuration for a Salesforce OAuth2 provider.</p>
   * @public
   */
  export interface SalesforceOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigOutput;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The output configuration for a Microsoft OAuth2 provider.</p>
   * @public
   */
  export interface MicrosoftOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration details for the Atlassian OAuth2 provider.</p>
   * @public
   */
  export interface AtlassianOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigOutput;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration details for the LinkedIn OAuth2 provider.</p>
   * @public
   */
  export interface LinkedinOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigOutput;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a non-custom OAuth2 provider. This includes the configuration details for supported OAuth2 providers that have built-in integration support.</p>
   * @public
   */
  export interface IncludedOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig: IncludedOauth2ProviderConfigOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customOauth2ProviderConfig: (value: CustomOauth2ProviderConfigOutput) => T;
    googleOauth2ProviderConfig: (value: GoogleOauth2ProviderConfigOutput) => T;
    githubOauth2ProviderConfig: (value: GithubOauth2ProviderConfigOutput) => T;
    slackOauth2ProviderConfig: (value: SlackOauth2ProviderConfigOutput) => T;
    salesforceOauth2ProviderConfig: (value: SalesforceOauth2ProviderConfigOutput) => T;
    microsoftOauth2ProviderConfig: (value: MicrosoftOauth2ProviderConfigOutput) => T;
    atlassianOauth2ProviderConfig: (value: AtlassianOauth2ProviderConfigOutput) => T;
    linkedinOauth2ProviderConfig: (value: LinkedinOauth2ProviderConfigOutput) => T;
    includedOauth2ProviderConfig: (value: IncludedOauth2ProviderConfigOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateOauth2CredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>Contains the output configuration for an OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput?: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The current status of the OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteOauth2CredentialProviderResponse {}

/**
 * @public
 */
export interface GetOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetOauth2CredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>ARN of the credential provider requested.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>The configuration output for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The current status of the OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The reason for failure if the OAuth2 credential provider is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about an OAuth2 credential provider.</p>
 * @public
 */
export interface Oauth2CredentialProviderItem {
  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersResponse {
  /**
   * <p>The list of OAuth2 credential providers.</p>
   * @public
   */
  credentialProviders: Oauth2CredentialProviderItem[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The configuration input for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>The configuration output for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The current status of the updated OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * <p> The configuration for reading agent traces from CloudWatch logs as input for online evaluation. </p>
 * @public
 */
export interface CloudWatchLogsInputConfig {
  /**
   * <p> The list of CloudWatch log group names to monitor for agent traces.</p>
   * @public
   */
  logGroupNames: string[] | undefined;

  /**
   * <p> The list of service names to filter traces within the specified log groups. Used to identify relevant agent sessions. </p>
   * @public
   */
  serviceNames: string[] | undefined;
}

/**
 * <p> The configuration that specifies where to read agent traces for online evaluation. </p>
 * @public
 */
export type DataSourceConfig =
  | DataSourceConfig.CloudWatchLogsMember
  | DataSourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfig {
  /**
   * <p> The CloudWatch logs configuration for reading agent traces from log groups. </p>
   * @public
   */
  export interface CloudWatchLogsMember {
    cloudWatchLogs: CloudWatchLogsInputConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchLogs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchLogs: (value: CloudWatchLogsInputConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The reference to an evaluator used in online evaluation configurations, containing the evaluator identifier. </p>
 * @public
 */
export type EvaluatorReference =
  | EvaluatorReference.EvaluatorIdMember
  | EvaluatorReference.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorReference {
  /**
   * <p> The unique identifier of the evaluator. Can reference builtin evaluators (e.g., Builtin.Helpfulness) or custom evaluators. </p>
   * @public
   */
  export interface EvaluatorIdMember {
    evaluatorId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    evaluatorId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    evaluatorId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The value used in filter comparisons, supporting different data types for flexible filtering criteria. </p>
 * @public
 */
export type FilterValue =
  | FilterValue.BooleanValueMember
  | FilterValue.DoubleValueMember
  | FilterValue.StringValueMember
  | FilterValue.$UnknownMember;

/**
 * @public
 */
export namespace FilterValue {
  /**
   * <p> The string value for text-based filtering. </p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p> The numeric value for numerical filtering and comparisons. </p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p> The boolean value for true/false filtering conditions. </p>
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The filter that applies conditions to agent traces during online evaluation to determine which traces should be evaluated. </p>
 * @public
 */
export interface Filter {
  /**
   * <p> The key or field name to filter on within the agent trace data. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The comparison operator to use for filtering. </p>
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * <p> The value to compare against using the specified operator. </p>
   * @public
   */
  value: FilterValue | undefined;
}

/**
 * <p> The configuration that controls what percentage of agent traces are sampled for evaluation to manage evaluation volume and costs. </p>
 * @public
 */
export interface SamplingConfig {
  /**
   * <p> The percentage of agent traces to sample for evaluation, ranging from 0.01% to 100%. </p>
   * @public
   */
  samplingPercentage: number | undefined;
}

/**
 * <p> The configuration that defines how agent sessions are detected and when they are considered complete for evaluation. </p>
 * @public
 */
export interface SessionConfig {
  /**
   * <p> The number of minutes of inactivity after which an agent session is considered complete and ready for evaluation. Default is 15 minutes. </p>
   * @public
   */
  sessionTimeoutMinutes: number | undefined;
}

/**
 * <p> The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings for online evaluation. </p>
 * @public
 */
export interface Rule {
  /**
   * <p> The sampling configuration that determines what percentage of agent traces to evaluate. </p>
   * @public
   */
  samplingConfig: SamplingConfig | undefined;

  /**
   * <p> The list of filters that determine which agent traces should be included in the evaluation based on trace properties. </p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p> The session configuration that defines timeout settings for detecting when agent sessions are complete and ready for evaluation. </p>
   * @public
   */
  sessionConfig?: SessionConfig | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. Must be unique within your account. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration that explains its monitoring purpose and scope. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The evaluation rule that defines sampling configuration, filters, and session detection settings for the online evaluation. </p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p> The data source configuration that specifies CloudWatch log groups and service names to monitor for agent traces. </p>
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * <p> The list of evaluators to apply during online evaluation. Can include both built-in evaluators and custom evaluators created with <code>CreateEvaluator</code>. </p>
   * @public
   */
  evaluators: EvaluatorReference[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that grants permissions to read from CloudWatch logs, write evaluation results, and invoke Amazon Bedrock models for evaluation. If the configuration references evaluators encrypted with a customer managed KMS key, this role must also have <code>kms:Decrypt</code> permission on the KMS key. The service validates this permission at configuration creation time. For more information, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html">Encryption at rest for AgentCore Evaluations</a>. </p>
   * @public
   */
  evaluationExecutionRoleArn: string | undefined;

  /**
   * <p> Whether to enable the online evaluation configuration immediately upon creation. If true, evaluation begins automatically. </p>
   * @public
   */
  enableOnCreate: boolean | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Online Evaluation Config. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p> The configuration for writing evaluation results to CloudWatch logs with embedded metric format (EMF) for monitoring. </p>
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * <p> The name of the CloudWatch log group where evaluation results will be written. The log group will be created if it doesn't exist. </p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * <p> The configuration that specifies where evaluation results should be written for monitoring and analysis. </p>
 * @public
 */
export interface OutputConfig {
  /**
   * <p> The CloudWatch configuration for writing evaluation results to CloudWatch logs with embedded metric format. </p>
   * @public
   */
  cloudWatchConfig: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the created online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the created online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The configuration that specifies where evaluation results should be written for monitoring and analysis. </p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration creation or execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigRequest {
  /**
   * <p> The unique identifier of the online evaluation configuration to delete. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the deleted online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The status of the online evaluation configuration deletion operation. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigRequest {
  /**
   * <p> The unique identifier of the online evaluation configuration to retrieve. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The evaluation rule containing sampling configuration, filters, and session settings. </p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p> The data source configuration specifying CloudWatch log groups and service names to monitor. </p>
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * <p> The list of evaluators applied during online evaluation. </p>
   * @public
   */
  evaluators: EvaluatorReference[] | undefined;

  /**
   * <p> The output configuration specifying where evaluation results are written. </p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role used for evaluation execution. </p>
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsRequest {
  /**
   * <p> The pagination token from a previous request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of online evaluation configurations to return in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The summary information about an online evaluation configuration, including basic metadata and execution status. </p>
 * @public
 */
export interface OnlineEvaluationConfigSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsResponse {
  /**
   * <p> The list of online evaluation configuration summaries containing basic information about each configuration. </p>
   * @public
   */
  onlineEvaluationConfigs: OnlineEvaluationConfigSummary[] | undefined;

  /**
   * <p> The pagination token to use in a subsequent request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration to update. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The updated description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The updated evaluation rule containing sampling configuration, filters, and session settings. </p>
   * @public
   */
  rule?: Rule | undefined;

  /**
   * <p> The updated data source configuration specifying CloudWatch log groups and service names to monitor. </p>
   * @public
   */
  dataSourceConfig?: DataSourceConfig | undefined;

  /**
   * <p> The updated list of evaluators to apply during online evaluation. </p>
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * <p> The updated Amazon Resource Name (ARN) of the IAM role used for evaluation execution. </p>
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * <p> The updated execution status to enable or disable the online evaluation. </p>
   * @public
   */
  executionStatus?: OnlineEvaluationExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the updated online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration update or execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Coinbase CDP configuration — credentials provided by Coinbase Developer Platform.</p>
 * @public
 */
export interface CoinbaseCdpConfigurationInput {
  /**
   * <p>The API key identifier provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * <p>The API key secret provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeySecret: string | undefined;

  /**
   * <p>The wallet secret provided by Coinbase Developer Platform.</p>
   * @public
   */
  walletSecret: string | undefined;
}

/**
 * <p>Stripe Privy configuration — credentials provided by Stripe and Privy.</p>
 * @public
 */
export interface StripePrivyConfigurationInput {
  /**
   * <p>The app ID provided by Privy.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The app secret provided by Privy.</p>
   * @public
   */
  appSecret: string | undefined;

  /**
   * <p>The authorization private key for the Stripe Privy integration.</p>
   * @public
   */
  authorizationPrivateKey: string | undefined;

  /**
   * <p>The authorization ID for the Stripe Privy integration.</p>
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * <p>Provider configuration input — contains secrets for creation and update. Varies by vendor type.</p>
 * @public
 */
export type PaymentProviderConfigurationInput =
  | PaymentProviderConfigurationInput.CoinbaseCdpConfigurationMember
  | PaymentProviderConfigurationInput.StripePrivyConfigurationMember
  | PaymentProviderConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentProviderConfigurationInput {
  /**
   * <p>The Coinbase CDP configuration.</p>
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationInput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy configuration.</p>
   * @public
   */
  export interface StripePrivyConfigurationMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration: StripePrivyConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpConfiguration: (value: CoinbaseCdpConfigurationInput) => T;
    stripePrivyConfiguration: (value: StripePrivyConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentCredentialProviderRequest {
  /**
   * <p>Unique name for the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Configuration specific to the vendor, including API credentials.</p>
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;

  /**
   * <p>Optional tags for resource organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Coinbase CDP configuration output with secret ARNs.</p>
 * @public
 */
export interface CoinbaseCdpConfigurationOutput {
  /**
   * <p>The API key identifier provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * <p>Contains information about a secret in AWS Secrets Manager.</p>
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * <p>Contains information about a secret in AWS Secrets Manager.</p>
   * @public
   */
  walletSecretArn: Secret | undefined;
}

/**
 * <p>Stripe Privy configuration output with secret ARNs.</p>
 * @public
 */
export interface StripePrivyConfigurationOutput {
  /**
   * <p>The app ID provided by Privy.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>Contains information about a secret in AWS Secrets Manager.</p>
   * @public
   */
  appSecretArn: Secret | undefined;

  /**
   * <p>Contains information about a secret in AWS Secrets Manager.</p>
   * @public
   */
  authorizationPrivateKeyArn: Secret | undefined;

  /**
   * <p>The authorization ID for the Stripe Privy integration.</p>
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * <p>Provider configuration output — no raw secrets, only ARNs. Varies by vendor type.</p>
 * @public
 */
export type PaymentProviderConfigurationOutput =
  | PaymentProviderConfigurationOutput.CoinbaseCdpConfigurationMember
  | PaymentProviderConfigurationOutput.StripePrivyConfigurationMember
  | PaymentProviderConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentProviderConfigurationOutput {
  /**
   * <p>The Coinbase CDP configuration.</p>
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationOutput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy configuration.</p>
   * @public
   */
  export interface StripePrivyConfigurationMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration: StripePrivyConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpConfiguration: (value: CoinbaseCdpConfigurationOutput) => T;
    stripePrivyConfiguration: (value: StripePrivyConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentCredentialProviderResponse {
  /**
   * <p>The name of the created payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the created payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface DeletePaymentCredentialProviderRequest {
  /**
   * <p>The name of the payment credential provider to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentCredentialProviderResponse {}

/**
 * @public
 */
export interface GetPaymentCredentialProviderRequest {
  /**
   * <p>The name of the payment credential provider to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentCredentialProviderResponse {
  /**
   * <p>The name of the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The tags associated with the payment credential provider.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a payment credential provider.</p>
 * @public
 */
export interface PaymentCredentialProviderItem {
  /**
   * <p>The name of the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersResponse {
  /**
   * <p>The list of payment credential providers.</p>
   * @public
   */
  credentialProviders: PaymentCredentialProviderItem[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderRequest {
  /**
   * <p>The name of the payment credential provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Configuration specific to the vendor, including API credentials.</p>
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderResponse {
  /**
   * <p>The name of the updated payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the updated payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreatePaymentManagerRequest {
  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer to use for the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the payment manager.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the payment manager assumes to access resources on your behalf.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the created payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the created payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of authorizer for the created payment manager.</p>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the created payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The tags associated with the created payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to delete.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerResponse {
  /**
   * <p>The current status of the payment manager, set to <code>DELETING</code> when deletion is initiated. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The unique identifier of the deleted payment manager.</p>
   * @public
   */
  paymentManagerId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to retrieve.</p>
   * @public
   */
  paymentManagerId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer used by the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The tags associated with the payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a payment manager.</p>
 * @public
 */
export interface PaymentManagerSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer used by the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersResponse {
  /**
   * <p>The list of payment manager summaries. For details about the fields in each summary, see the <code>PaymentManagerSummary</code> data type.</p>
   * @public
   */
  paymentManagers: PaymentManagerSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Configuration for a payment credential provider that stores authentication credentials for a payment provider.</p>
 * @public
 */
export interface PaymentCredentialProviderConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the credential provider that stores the authentication credentials for the payment provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;
}

/**
 * <p>The credential provider configuration for a payment connector. Specifies the payment provider type and its associated credential provider.</p>
 * @public
 */
export type CredentialsProviderConfiguration =
  | CredentialsProviderConfiguration.CoinbaseCDPMember
  | CredentialsProviderConfiguration.StripePrivyMember
  | CredentialsProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CredentialsProviderConfiguration {
  /**
   * <p>The credential provider configuration for a Coinbase CDP payment connector.</p>
   * @public
   */
  export interface CoinbaseCDPMember {
    coinbaseCDP: PaymentCredentialProviderConfiguration;
    stripePrivy?: never;
    $unknown?: never;
  }

  /**
   * <p>The credential provider configuration for a Stripe Privy payment connector.</p>
   * @public
   */
  export interface StripePrivyMember {
    coinbaseCDP?: never;
    stripePrivy: PaymentCredentialProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCDP?: never;
    stripePrivy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCDP: (value: PaymentCredentialProviderConfiguration) => T;
    stripePrivy: (value: PaymentCredentialProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the payment manager to create the connector for.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the payment connector. These configurations specify how the connector authenticates with the payment provider.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePaymentConnectorResponse {
  /**
   * <p>The unique identifier of the created payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the created payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the created payment connector.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the created payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to delete.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorResponse {
  /**
   * <p>The current status of the payment connector, set to <code>DELETING</code> when deletion is initiated. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The unique identifier of the deleted payment connector.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to retrieve.</p>
   * @public
   */
  paymentConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorResponse {
  /**
   * <p>The unique identifier of the payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsRequest {
  /**
   * <p>The unique identifier of the payment manager whose connectors to list.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a payment connector.</p>
 * @public
 */
export interface PaymentConnectorSummary {
  /**
   * <p>The unique identifier of the payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsResponse {
  /**
   * <p>The list of payment connector summaries. For details about the fields in each summary, see the <code>PaymentConnectorSummary</code> data type.</p>
   * @public
   */
  paymentConnectors: PaymentConnectorSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to update.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The updated description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated type of the payment connector.</p>
   * @public
   */
  type?: PaymentConnectorType | undefined;

  /**
   * <p>The updated credential provider configurations for the payment connector.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorResponse {
  /**
   * <p>The unique identifier of the updated payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the updated payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the updated payment connector.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the updated payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the updated payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to update.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The updated description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated authorizer type for the payment manager.</p>
   * @public
   */
  authorizerType?: PaymentsAuthorizerType | undefined;

  /**
   * <p>The updated authorizer configuration for the payment manager.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The updated Amazon Resource Name (ARN) of the IAM role for the payment manager.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the updated payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the updated payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of authorizer for the updated payment manager.</p>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the updated payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the updated payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineRequest {
  /**
   * <p>The customer-assigned immutable name for the policy engine. This name identifies the policy engine and cannot be changed after creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose and scope (1-4,096 characters). This helps administrators understand the policy engine's role in the overall governance strategy. Document which Gateway this engine will be associated with, what types of tools or workflows it governs, and the team or service responsible for maintaining it. Clear descriptions are essential when managing multiple policy engines across different services or environments.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy engine.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Policy. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineResponse {
  /**
   * <p>The unique identifier for the created policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and is used for all subsequent policy engine operations.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the created policy engine. This matches the name provided in the request and serves as the human-readable identifier.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last updated. For newly created policy engines, this matches the <code>createdAt</code> timestamp.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine. A status of <code>ACTIVE</code> indicates the policy engine is ready for use.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine creation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be deleted. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineResponse {
  /**
   * <p>The unique identifier of the policy engine being deleted. This confirms which policy engine the deletion operation targets.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the deleted policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the deleted policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the deleted policy engine was last modified before deletion. This tracks the final state of the policy engine before it was removed from the system.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted policy engine. This globally unique identifier confirms which policy engine resource was successfully removed.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The status of the policy engine deletion operation. This provides status about any issues that occurred during the deletion process.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The human-readable description of the deleted policy engine.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be retrieved. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineResponse {
  /**
   * <p>The unique identifier of the retrieved policy engine. This matches the policy engine ID provided in the request and serves as the system identifier.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine. This is the human-readable identifier that was specified when the policy engine was created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The human-readable description of the policy engine's purpose and scope. This helps administrators understand the policy engine's role in governance.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryRequest {
  /**
   * <p>The unique identifier of the policy engine to retrieve the summary for. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryResponse {
  /**
   * <p>The unique identifier of the policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html">ListPolicyEngines</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy engines to return in a single response. If not specified, the default is 10 policy engines per page, with a maximum of 100 per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a policy engine resource within the AgentCore Policy system. Policy engines serve as containers for grouping related policies and provide the execution context for policy evaluation and management. Each policy engine can be associated with one Gateway (one engine per Gateway), where it intercepts all agent tool calls and evaluates them against the contained policies before allowing tools to execute. The policy engine maintains the Cedar schema generated from the Gateway's tool manifest, ensuring that policies are validated against the actual tools and parameters available. Policy engines support two enforcement modes that can be configured when associating with a Gateway: log-only mode for testing (evaluates decisions without blocking) and enforce mode for production (actively allows or denies based on policy evaluation).</p>
 * @public
 */
export interface PolicyEngine {
  /**
   * <p>The unique identifier for the policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy engine operations.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned immutable name for the policy engine. This human-readable identifier must be unique within the account and cannot exceed 48 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration or metadata.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose and scope. Limited to 4,096 characters, this helps administrators understand the policy engine's role in the overall governance strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine lifecycle.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesResponse {
  /**
   * <p>An array of policy engine objects that exist in the account. Each policy engine object contains the engine metadata, status, and key identifiers for further operations.</p>
   * @public
   */
  policyEngines: PolicyEngine[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html">ListPolicyEngines</a> calls to retrieve additional results. This token is only present when there are more results available. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html">ListPolicyEngineSummaries</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy engine summaries to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a metadata-only summary of a policy engine resource. This structure contains resource identifiers, status, and timestamps without customer-encrypted fields such as description or status reasons. Policy engine summaries are returned by operations that do not require access to the customer's KMS key.</p>
 * @public
 */
export interface PolicyEngineSummary {
  /**
   * <p>The unique identifier for the policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesResponse {
  /**
   * <p>An array of policy engine summary objects that exist in the account. Each summary contains resource identifiers, status, and timestamps without customer-encrypted content.</p>
   * @public
   */
  policyEngines: PolicyEngineSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html">ListPolicyEngineSummaries</a> calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Wrapper for updating an optional Description field with PATCH semantics. When present in an update request, the description is replaced with optionalValue. When absent, the description is left unchanged. To unset the description, include the wrapper with optionalValue not specified.</p>
 * @public
 */
export interface UpdatedDescription {
  /**
   * <p>Represents an optional value that is used to update the human-readable description of the resource. If not specified, it will clear the current description of the resource.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be updated.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The new description for the policy engine.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineResponse {
  /**
   * <p>The unique identifier of the updated policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The name of the updated policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The original creation timestamp of the policy engine.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN of the updated policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the updated policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The updated description of the policy engine.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the update status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationRequest {
  /**
   * <p>The unique identifier of the policy generation request to be retrieved. This must be a valid generation ID from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html">StartPolicyGeneration</a> call.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and schema validation.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * <p>Represents a resource within the AgentCore Policy system. Resources are the targets of policy evaluation. Currently, only AgentCore Gateways are supported as resources for policy enforcement.</p>
 * @public
 */
export type Resource =
  | Resource.ArnMember
  | Resource.$UnknownMember;

/**
 * @public
 */
export namespace Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. This globally unique identifier specifies the exact resource that policies will be evaluated against for access control decisions. </p>
   * @public
   */
  export interface ArnMember {
    arn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    arn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    arn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetPolicyGenerationResponse {
  /**
   * <p>The identifier of the policy engine associated with this policy generation. This confirms the policy engine context for the generation operation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy generation request. This matches the generation ID provided in the request and serves as the tracking identifier.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for the policy generation request. This helps identify and track generation operations across multiple requests.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy generation. This globally unique identifier can be used for tracking, auditing, and cross-service references.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with the policy generation. This provides context about the target resources for which the policies are being generated.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when the policy generation request was created. This is used for tracking and auditing generation operations and their lifecycle.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy generation was last updated. This tracks the progress of the generation process and any status changes.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the policy generation. This indicates whether the generation is in progress, completed successfully, or failed during processing.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>The findings and results from the policy generation process. This includes any issues, recommendations, validation results, or insights from the generated policies.</p>
   * @public
   */
  findings?: string | undefined;

  /**
   * <p>Additional information about the generation status. This provides details about any failures, warnings, or the current state of the generation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationSummaryRequest {
  /**
   * <p>The unique identifier of the policy generation request to retrieve the summary for.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The identifier of the policy engine associated with the policy generation request.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationSummaryResponse {
  /**
   * <p>The identifier of the policy engine associated with this policy generation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for the policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with the policy generation.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when the policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>The findings from the policy generation process, if available.</p>
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsRequest {
  /**
   * <p>The unique identifier of the policy generation request whose assets are to be retrieved. This must be a valid generation ID from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html">StartPolicyGeneration</a> call that has completed processing.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The unique identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and ensures assets are retrieved from the correct policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html">ListPolicyGenerationAssets</a> call. Use this token to retrieve the next page of assets when the response is paginated due to large numbers of generated policy options.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy generation assets to return in a single response. If not specified, the default is 10 assets per page, with a maximum of 100 per page. This helps control response size when dealing with policy generations that produce many alternative policy options.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a Cedar policy statement within the AgentCore Policy system. Cedar is a policy language designed for authorization that provides human-readable, analyzable, and high-performance policy evaluation for controlling agent behavior and access decisions. </p>
 * @public
 */
export interface CedarPolicy {
  /**
   * <p>The Cedar policy statement that defines the authorization logic. This statement follows Cedar syntax and specifies principals, actions, resources, and conditions that determine when access should be allowed or denied.</p>
   * @public
   */
  statement: string | undefined;
}

/**
 * <p>Represents the information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
 * @public
 */
export interface PolicyGenerationDetails {
  /**
   * <p>The unique identifier for this policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The unique identifier for this generated policy asset within the policy generation request.</p>
   * @public
   */
  policyGenerationAssetId: string | undefined;
}

/**
 * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
 * @public
 */
export type PolicyDefinition =
  | PolicyDefinition.CedarMember
  | PolicyDefinition.PolicyGenerationMember
  | PolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinition {
  /**
   * <p>The Cedar policy definition within the policy definition structure. This contains the Cedar policy statement that defines the authorization logic using Cedar's human-readable, analyzable policy language. Cedar policies specify principals (who can access), actions (what operations are allowed), resources (what can be accessed), and optional conditions for fine-grained control. Cedar provides a formal policy language designed for authorization with deterministic evaluation, making policies testable, reviewable, and auditable. All Cedar policies follow a default-deny model where actions are denied unless explicitly permitted, and forbid policies always override permit policies.</p>
   * @public
   */
  export interface CedarMember {
    cedar: CedarPolicy;
    policyGeneration?: never;
    $unknown?: never;
  }

  /**
   * <p>The generated policy asset information within the policy definition structure. This contains information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
   * @public
   */
  export interface PolicyGenerationMember {
    cedar?: never;
    policyGeneration: PolicyGenerationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cedar?: never;
    policyGeneration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cedar: (value: CedarPolicy) => T;
    policyGeneration: (value: PolicyGenerationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents a finding or issue discovered during policy generation or validation. Findings provide insights about potential problems, recommendations, or validation results from policy analysis operations. Finding types include: VALID (policy is ready to use), INVALID (policy has validation errors that must be fixed), NOT_TRANSLATABLE (input couldn't be converted to policy), ALLOW_ALL (policy would allow all actions, potential security risk), ALLOW_NONE (policy would allow no actions, unusable), DENY_ALL (policy would deny all actions, may be too restrictive), and DENY_NONE (policy would deny no actions, ineffective). Review all findings before creating policies from generated assets to ensure they match your security requirements.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The type or category of the finding. This classifies the finding as an error, warning, recommendation, or informational message to help users understand the severity and nature of the issue.</p>
   * @public
   */
  type?: FindingType | undefined;

  /**
   * <p>A human-readable description of the finding. This provides detailed information about the issue, recommendation, or validation result to help users understand and address the finding. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Represents a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
 * @public
 */
export interface PolicyGenerationAsset {
  /**
   * <p>The unique identifier for this generated policy asset within the policy generation request. This ID can be used to reference specific generated policy options when creating actual policies from the generation results.</p>
   * @public
   */
  policyGenerationAssetId: string | undefined;

  /**
   * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * <p>The portion of the original natural language input that this generated policy asset addresses. This helps users understand which part of their policy description was translated into this specific Cedar policy statement, enabling better policy selection and refinement. When a single natural language input describes multiple authorization requirements, the generation process creates separate policy assets for each requirement, with each asset's rawTextFragment showing which requirement it addresses. Use this mapping to verify that all parts of your natural language input were correctly translated into Cedar policies.</p>
   * @public
   */
  rawTextFragment: string | undefined;

  /**
   * <p>Analysis findings and insights related to this specific generated policy asset. These findings may include validation results, potential issues, or recommendations for improvement to help users evaluate the quality and appropriateness of the generated policy.</p>
   * @public
   */
  findings: Finding[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsResponse {
  /**
   * <p>An array of generated policy assets including Cedar policies and related artifacts from the AI-powered policy generation process. Each asset represents a different policy option or variation generated from the original natural language input.</p>
   * @public
   */
  policyGenerationAssets?: PolicyGenerationAsset[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html">ListPolicyGenerationAssets</a> calls to retrieve additional assets. This token is only present when there are more generated policy assets available beyond the current response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * <p>A pagination token for retrieving additional policy generations when results are paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy generations to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policy generations to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * <p>Represents a policy generation request within the AgentCore Policy system. Tracks the AI-powered conversion of natural language descriptions into Cedar policy statements, enabling users to author policies by describing authorization requirements in plain English. The generation process analyzes the natural language input along with the Gateway's tool context and Cedar schema to produce one or more validated policy options. Each generation request tracks the status of the conversion process and maintains findings about the generated policies, including validation results and potential issues. Generated policy assets remain available for one week after successful generation, allowing time to review and create policies from the generated options.</p>
 * @public
 */
export interface PolicyGeneration {
  /**
   * <p>The identifier of the policy engine associated with this generation request.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier for this policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for this policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of this policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with this policy generation.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when this policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of this policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Findings and insights from this policy generation process.</p>
   * @public
   */
  findings?: string | undefined;

  /**
   * <p>Additional information about the generation status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * <p>An array of policy generation objects that match the specified criteria.</p>
   * @public
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * <p>A pagination token for retrieving additional policy generations if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationSummariesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationSummaries.html">ListPolicyGenerationSummaries</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy generation summaries to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policy generation summaries to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * <p>Represents a metadata-only summary of a policy generation resource. This structure contains resource identifiers, status, timestamps, and findings without customer-encrypted fields such as status reasons. Policy generation summaries are returned by operations that do not require access to the customer's KMS key.</p>
 * @public
 */
export interface PolicyGenerationSummary {
  /**
   * <p>The identifier of the policy engine associated with this generation request.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier for this policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for this policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of this policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with this policy generation.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when this policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of this policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Findings and insights from this policy generation process.</p>
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationSummariesResponse {
  /**
   * <p>An array of policy generation summary objects that match the specified criteria. Each summary contains resource identifiers, status, timestamps, and findings without customer-encrypted content.</p>
   * @public
   */
  policyGenerations: PolicyGenerationSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationSummaries.html">ListPolicyGenerationSummaries</a> calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents content input for policy generation operations. This structure encapsulates the natural language descriptions or other content formats that are used as input for AI-powered policy generation.</p>
 * @public
 */
export type Content =
  | Content.RawTextMember
  | Content.$UnknownMember;

/**
 * @public
 */
export namespace Content {
  /**
   * <p>The raw text content containing natural language descriptions of desired policy behavior. This text is processed by AI to generate corresponding Cedar policy statements that match the described intent.</p>
   * @public
   */
  export interface RawTextMember {
    rawText: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rawText?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    rawText: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * <p>The identifier of the policy engine that provides the context for policy generation. This engine's schema and tool context are used to ensure generated policies are valid and applicable.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The resource information that provides context for policy generation. This helps the AI understand the target resources and generate appropriate access control rules.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The natural language description of the desired policy behavior. This content is processed by AI to generate corresponding Cedar policy statements that match the described intent.</p>
   * @public
   */
  content: Content | undefined;

  /**
   * <p>A customer-assigned name for the policy generation request. This helps track and identify generation operations, especially when running multiple generations simultaneously.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure the idempotency of the request. The AWS SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without starting a duplicate generation.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * <p>The identifier of the policy engine associated with the started policy generation. </p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier assigned to the policy generation request for tracking progress. </p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for the policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the created policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with the policy generation request.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when the policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The initial status of the policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Initial findings from the policy generation process.</p>
   * @public
   */
  findings?: string | undefined;

  /**
   * <p>Additional information about the generation status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * <p>The customer-assigned immutable name for the policy. Must be unique within the account. This name is used for policy identification and cannot be changed after creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic written in Cedar policy language, specifying effect (permit or forbid), principals, actions, resources, and conditions for agent behavior control.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>A human-readable description of the policy's purpose and functionality (1-4,096 characters). This helps policy administrators understand the policy's intent, business rules, and operational scope. Use this field to document why the policy exists, what business requirement it addresses, and any special considerations for maintenance. Clear descriptions are essential for policy governance, auditing, and troubleshooting.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The validation mode for the policy creation. Determines how Cedar analyzer validation results are handled during policy creation. FAIL_ON_ANY_FINDINGS (default) runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving. Use FAIL_ON_ANY_FINDINGS for production policies to ensure correctness, and IGNORE_ALL_FINDINGS only when you understand and accept the analyzer findings.</p>
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;

  /**
   * <p>The identifier of the policy engine which contains this policy. Policy engines group related policies and provide the execution context for policy evaluation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure the idempotency of the request. The AWS SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * <p>The unique identifier for the created policy. This is a system-generated identifier consisting of the user name plus a 10-character generated suffix, used for all subsequent policy operations.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the created policy. This matches the name provided in the request and serves as the human-readable identifier for the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This confirms the policy engine assignment and is used for policy evaluation routing.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the policy was created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated. For newly created policies, this matches the createdAt timestamp.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created policy. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy. A status of <code>ACTIVE</code> indicates the policy is ready for use.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>The Cedar policy statement that was created. This is the validated policy definition that will be used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy creation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be deleted. This ensures the policy is deleted from the correct policy engine context.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be deleted. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyResponse {
  /**
   * <p>The unique identifier of the policy being deleted. This confirms which policy the deletion operation targets.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the deleted policy. This confirms which policy was successfully removed from the system and matches the name that was originally assigned during policy creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine from which the policy was deleted. This confirms the policy engine context for the deletion operation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the deleted policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the deleted policy was last modified before deletion. This tracks the final state of the policy before it was removed from the system.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted policy. This globally unique identifier confirms which policy resource was successfully removed.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The status of the policy deletion operation. This provides information about any issues that occurred during the deletion process.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the deleted policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be retrieved.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be retrieved. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The unique identifier of the retrieved policy. This matches the policy ID provided in the request and serves as the system identifier for the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy. This is the human-readable identifier that was specified when the policy was created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This confirms the policy engine context for the retrieved policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicySummaryRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to retrieve the summary for.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to retrieve the summary for. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicySummaryResponse {
  /**
   * <p>The unique identifier of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicies.html">ListPolicies</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policies to return in a single response. If not specified, the default is 10 policies per page, with a maximum of 100 per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policies to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>Optional filter to list policies that apply to a specific resource scope or resource type. This helps narrow down policy results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.</p>
   * @public
   */
  targetResourceScope?: string | undefined;
}

/**
 * <p>Represents a complete policy resource within the AgentCore Policy system. Policies are ARN-able resources that contain Cedar policy statements and associated metadata for controlling agent behavior and access decisions. Each policy belongs to a policy engine and defines fine-grained authorization rules that are evaluated in real-time as agents interact with tools through Gateway. Policies use the Cedar policy language to specify who (principals based on OAuth claims like username, role, or scope) can perform what actions (tool calls) on which resources (Gateways), with optional conditions for attribute-based access control. Multiple policies can apply to a single request, with Cedar's forbid-wins semantics ensuring that security restrictions are never accidentally overridden.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>The unique identifier for the policy. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy operations.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned immutable name for the policy. This human-readable identifier must be unique within the account and cannot exceed 48 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This establishes the policy engine context for policy evaluation and management.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration or metadata.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>A human-readable description of the policy's purpose and functionality. Limited to 4,096 characters, this helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy lifecycle.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>An array of policy objects that match the specified criteria. Each policy object contains the policy metadata, status, and key identifiers for further operations.</p>
   * @public
   */
  policies: Policy[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent ListPolicies calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicySummariesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicySummaries.html">ListPolicySummaries</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy summaries to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policy summaries to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>Optional filter to list policy summaries that apply to a specific resource scope or resource type. This helps narrow down results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.</p>
   * @public
   */
  targetResourceScope?: string | undefined;
}

/**
 * <p>Represents a metadata-only summary of a policy resource. This structure contains resource identifiers, status, and timestamps without customer-encrypted fields such as definition, description, or status reasons. Policy summaries are returned by operations that do not require access to the customer's KMS key.</p>
 * @public
 */
export interface PolicySummary {
  /**
   * <p>The unique identifier for the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface ListPolicySummariesResponse {
  /**
   * <p>An array of policy summary objects that match the specified criteria. Each summary contains resource identifiers, status, and timestamps without customer-encrypted content.</p>
   * @public
   */
  policies: PolicySummary[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicySummaries.html">ListPolicySummaries</a> calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be updated. This ensures the policy is updated within the correct policy engine context.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be updated. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The new human-readable description for the policy. This optional field allows updating the policy's documentation while keeping the same policy logic.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The new Cedar policy statement that defines the access control rules. This replaces the existing policy definition with new logic while maintaining the policy's identity.</p>
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * <p>The validation mode for the policy update. Determines how Cedar analyzer validation results are handled during policy updates. FAIL_ON_ANY_FINDINGS runs the Cedar analyzer and fails the update if validation issues are detected, ensuring the policy conforms to the Cedar schema and tool context. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows updates despite validation warnings. Use FAIL_ON_ANY_FINDINGS to ensure policy correctness during updates, especially when modifying policy logic or conditions.</p>
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * <p>The unique identifier of the updated policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The name of the updated policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine managing the updated policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The original creation timestamp of the policy.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN of the updated policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the updated policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>The updated Cedar policy statement.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The updated description of the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the update status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to create or update the resource policy.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The resource policy to create or update.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The resource policy that was created or updated.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * <p>A custom descriptor for a registry record. Use this for resources such as APIs, Lambda functions, or servers that do not conform to a standard protocol like MCP or A2A.</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p>The custom descriptor content as a valid JSON document. You can define any custom schema that describes your resource.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The server definition for an MCP descriptor. Contains the schema version and inline content for the MCP server configuration.</p>
 * @public
 */
export interface ServerDefinition {
  /**
   * <p>The schema version of the server definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The JSON content containing the MCP server definition, conforming to the MCP protocol specification.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The tools definition for an MCP descriptor. Contains the protocol version and inline content describing the available tools.</p>
 * @public
 */
export interface ToolsDefinition {
  /**
   * <p>The protocol version of the tools definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.</p>
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * <p>The JSON content containing the MCP tools definition, conforming to the MCP protocol specification.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The Model Context Protocol (MCP) descriptor for a registry record. Contains the server definition and tools definition for an MCP-compatible server. The schema is validated against the MCP protocol specification.</p>
 * @public
 */
export interface McpDescriptor {
  /**
   * <p>The MCP server definition, containing the server configuration and schema as defined by the MCP protocol specification.</p>
   * @public
   */
  server?: ServerDefinition | undefined;

  /**
   * <p>The MCP tools definition, containing the tools available on the MCP server as defined by the MCP protocol specification.</p>
   * @public
   */
  tools?: ToolsDefinition | undefined;
}

/**
 * <p>Contains descriptor-type-specific configurations for a registry record. Only the descriptor matching the record's <code>descriptorType</code> should be populated.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p>The Model Context Protocol (MCP) descriptor configuration. Use this when the <code>descriptorType</code> is <code>MCP</code>.</p>
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * <p>The Agent-to-Agent (A2A) protocol descriptor configuration. Use this when the <code>descriptorType</code> is <code>A2A</code>.</p>
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * <p>The custom descriptor configuration. Use this when the <code>descriptorType</code> is <code>CUSTOM</code>.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p>The agent skills descriptor configuration. Use this when the <code>descriptorType</code> is <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * <p>IAM credential provider configuration for authenticating with an external source using SigV4 signing during synchronization.</p>
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assume for SigV4 signing.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The SigV4 signing service name (for example, <code>execute-api</code> or <code>bedrock-agentcore</code>).</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The Amazon Web Services region for SigV4 signing (for example, <code>us-west-2</code>). If not specified, the region is extracted from the MCP server URL hostname, with fallback to the service's own region.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>OAuth credential provider configuration for authenticating with an external source during synchronization.</p>
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth credential provider resource.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth grant type. Currently only <code>CLIENT_CREDENTIALS</code> is supported.</p>
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * <p>The OAuth scopes to request during authentication.</p>
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * <p>Additional custom parameters for the OAuth flow.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * <p>Union of supported credential provider types for registry record synchronization.</p>
 * @public
 */
export type RegistryRecordCredentialProviderUnion =
  | RegistryRecordCredentialProviderUnion.IamCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.OauthCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordCredentialProviderUnion {
  /**
   * <p>The OAuth credential provider configuration for authenticating with the external source.</p>
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM credential provider configuration for authenticating with the external source using SigV4 signing.</p>
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider: RegistryRecordIamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: RegistryRecordOAuthCredentialProvider) => T;
    iamCredentialProvider: (value: RegistryRecordIamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A pairing of a credential provider type with its corresponding provider details for authenticating with external sources.</p>
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * <p>The type of credential provider.</p> <ul> <li> <p> <code>OAUTH</code> - OAuth-based authentication.</p> </li> <li> <p> <code>IAM</code> - Amazon Web Services IAM-based authentication using SigV4 signing.</p> </li> </ul>
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * <p>The credential provider configuration details. The structure depends on the <code>credentialProviderType</code>.</p>
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * <p>Configuration for synchronizing from a URL-based MCP server.</p>
 * @public
 */
export interface FromUrlSynchronizationConfiguration {
  /**
   * <p>The HTTPS URL of the MCP server to synchronize from.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Optional list of credential provider configurations for authenticating with the MCP server. At most one credential provider configuration can be specified.</p>
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * <p>Configuration for synchronizing registry record metadata from an external source.</p>
 * @public
 */
export interface SynchronizationConfiguration {
  /**
   * <p>Configuration for synchronizing from a URL-based source.</p>
   * @public
   */
  fromUrl?: FromUrlSynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry where the record will be created. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record.</p> <ul> <li> <p> <code>MCP</code> - Model Context Protocol descriptor for MCP-compatible servers and tools.</p> </li> <li> <p> <code>A2A</code> - Agent-to-Agent protocol descriptor.</p> </li> <li> <p> <code>CUSTOM</code> - Custom descriptor type for resources such as APIs, Lambda functions, or servers not conforming to a standard protocol.</p> </li> <li> <p> <code>AGENT_SKILLS</code> - Agent skills descriptor for defining agent skill definitions.</p> </li> </ul>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration containing the resource schema and metadata. The structure of this field depends on the <code>descriptorType</code> you specify.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version of the registry record. Use this to track different versions of the record's content.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The type of synchronization to use for keeping the record metadata up to date from an external source. Possible values include <code>FROM_URL</code> and <code>NONE</code>.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The configuration for synchronizing registry record metadata from an external source, such as a URL-based MCP server.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The status of the registry record. Set to <code>CREATING</code> while the asynchronous workflow is in progress.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration containing the resource schema and metadata. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>. A record transitions from <code>CREATING</code> to <code>DRAFT</code>, then to <code>PENDING_APPROVAL</code> (via <code>SubmitRegistryRecordForApproval</code>), and finally to <code>APPROVED</code> upon approval.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The type of synchronization used for this record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The configuration for synchronizing registry record metadata from an external source.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * <p>The identifier of the registry to list records from. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter registry records by name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Filter registry records by their current status. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryRecordStatus | undefined;

  /**
   * <p>Filter registry records by their descriptor type. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;
}

/**
 * <p>Contains summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * <p>The list of registry record summaries. For details about the fields in each summary, see the <code>RegistryRecordSummary</code> data type.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to submit for approval. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record after submission.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Wrapper for updating an A2A descriptor with PATCH semantics. When present, the A2A descriptor is replaced with the provided value. When absent, the A2A descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedA2aDescriptor {
  /**
   * <p>The updated A2A descriptor value.</p>
   * @public
   */
  optionalValue?: A2aDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a skill definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillDefinition {
  /**
   * <p>The updated skill definition value.</p>
   * @public
   */
  optionalValue?: SkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating a skill markdown definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillMdDefinition {
  /**
   * <p>The updated skill markdown definition value.</p>
   * @public
   */
  optionalValue?: SkillMdDefinition | undefined;
}

/**
 * <p>Individual agent skills descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptorFields {
  /**
   * <p>The updated skill markdown definition.</p>
   * @public
   */
  skillMd?: UpdatedSkillMdDefinition | undefined;

  /**
   * <p>The updated skill definition.</p>
   * @public
   */
  skillDefinition?: UpdatedSkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating an agent skills descriptor with PATCH semantics. When present with a value, individual fields can be updated independently. When present with a null value, the entire agent skills descriptor is unset. When absent, the agent skills descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptor {
  /**
   * <p>The updated agent skills descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDescriptorFields | undefined;
}

/**
 * <p>Wrapper for updating a custom descriptor with PATCH semantics. When present, the custom descriptor is replaced with the provided value. When absent, the custom descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * <p>The updated custom descriptor value.</p>
   * @public
   */
  optionalValue?: CustomDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a server definition with PATCH semantics. When present, the server definition is replaced with the provided value. When absent, the server definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedServerDefinition {
  /**
   * <p>The updated server definition value.</p>
   * @public
   */
  optionalValue?: ServerDefinition | undefined;
}

/**
 * <p>Wrapper for updating a tools definition with PATCH semantics. When present, the tools definition is replaced with the provided value. When absent, the tools definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedToolsDefinition {
  /**
   * <p>The updated tools definition value.</p>
   * @public
   */
  optionalValue?: ToolsDefinition | undefined;
}

/**
 * <p>Individual MCP descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedMcpDescriptorFields {
  /**
   * <p>The updated server definition for the MCP descriptor.</p>
   * @public
   */
  server?: UpdatedServerDefinition | undefined;

  /**
   * <p>The updated tools definition for the MCP descriptor.</p>
   * @public
   */
  tools?: UpdatedToolsDefinition | undefined;
}

/**
 * <p>Wrapper for updating an MCP descriptor with PATCH semantics. When present with a value, individual MCP fields can be updated independently. When present with a null value, the entire MCP descriptor is unset. When absent, the MCP descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedMcpDescriptor {
  /**
   * <p>The updated MCP descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedMcpDescriptorFields | undefined;
}

/**
 * <p>Contains per-descriptor-type wrappers for updating descriptors. Each descriptor type can be updated independently.</p>
 * @public
 */
export interface UpdatedDescriptorsUnion {
  /**
   * <p>The updated MCP descriptor.</p>
   * @public
   */
  mcp?: UpdatedMcpDescriptor | undefined;

  /**
   * <p>The updated A2A descriptor.</p>
   * @public
   */
  a2a?: UpdatedA2aDescriptor | undefined;

  /**
   * <p>The updated custom descriptor.</p>
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * <p>The updated agent skills descriptor.</p>
   * @public
   */
  agentSkills?: UpdatedAgentSkillsDescriptor | undefined;
}

/**
 * <p>Wrapper for updating an optional descriptors field with PATCH semantics. When present with a value, individual descriptors can be updated. When present with a null value, all descriptors are unset. When absent, descriptors are left unchanged.</p>
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * <p>The updated descriptors value. Contains per-descriptor-type wrappers that are each independently updatable.</p>
   * @public
   */
  optionalValue?: UpdatedDescriptorsUnion | undefined;
}

/**
 * <p>Wrapper for updating the synchronization configuration with PATCH semantics. Must be matched with <code>UpdatedSynchronizationType</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationConfiguration {
  /**
   * <p>The updated synchronization configuration value.</p>
   * @public
   */
  optionalValue?: SynchronizationConfiguration | undefined;
}

/**
 * <p>Wrapper for updating the synchronization type with PATCH semantics. Must be matched with <code>UpdatedSynchronizationConfiguration</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationType {
  /**
   * <p>The updated synchronization type value.</p>
   * @public
   */
  optionalValue?: SynchronizationType | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The updated name for the registry record.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the registry record. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated descriptor type for the registry record. Changing the descriptor type may require updating the <code>descriptors</code> field to match the new type's schema requirements.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;

  /**
   * <p>The updated descriptor-type-specific configuration containing the resource schema and metadata. Uses PATCH semantics where individual descriptor fields can be updated independently.</p>
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * <p>The version of the registry record for optimistic locking. If provided, it must match the current version of the record. The service automatically increments the version after a successful update.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The updated synchronization type for the registry record.</p>
   * @public
   */
  synchronizationType?: UpdatedSynchronizationType | undefined;

  /**
   * <p>The updated synchronization configuration for the registry record.</p>
   * @public
   */
  synchronizationConfiguration?: UpdatedSynchronizationConfiguration | undefined;

  /**
   * <p>Whether to trigger synchronization using the stored or provided configuration. When set to <code>true</code>, the service will synchronize the record metadata from the configured external source.</p>
   * @public
   */
  triggerSynchronization?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the updated record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the updated registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the updated registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the updated registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration of the updated registry record. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the updated registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the updated registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status of the updated registry record.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The synchronization type of the updated registry record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The synchronization configuration of the updated registry record.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update the status for. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The target status for the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change, such as why the record was approved or rejected.</p>
   * @public
   */
  statusReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.</p>
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * <p>Whether registry records are auto-approved. When set to <code>true</code>, records are automatically approved upon creation. When set to <code>false</code> (the default), records require explicit approval for security purposes.</p>
   * @public
   */
  autoApproval?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>The name of the registry. The name must be unique within your account and can contain alphanumeric characters and underscores.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer to use for the registry. This controls the authorization method for the Search and Invoke APIs used by consumers, and does not affect the standard CRUDL APIs for registry and registry record management used by administrators.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. Required if <code>authorizerType</code> is <code>CUSTOM_JWT</code>. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The approval configuration for registry records. Controls whether records require explicit approval before becoming active. See the <code>ApprovalConfiguration</code> data type for supported configuration options.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created registry.</p>
   * @public
   */
  registryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The identifier of the registry to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>The current status of the registry, set to <code>DELETING</code> when deletion is initiated. For a list of all possible registry statuses, see the <code>RegistryStatus</code> data type.</p>
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface GetRegistryRequest {
  /**
   * <p>The identifier of the registry to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for registry records. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter registries by their current status. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryStatus | undefined;

  /**
   * <p>Filter registries by their authorizer type. Possible values are <code>CUSTOM_JWT</code> and <code>AWS_IAM</code>. For more information about authorizer types, see the <code>RegistryAuthorizerType</code> enum.</p>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * <p>Contains summary information about a registry.</p>
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>The list of registry summaries. For details about the fields in each summary, see the <code>RegistrySummary</code> data type.</p>
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Wrapper for updating an optional approval configuration field with PATCH semantics. When present in an update request, the approval configuration is replaced with the provided value. When absent, the approval configuration is left unchanged.</p>
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * <p>The updated approval configuration value. Set to <code>null</code> to unset the approval configuration.</p>
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The identifier of the registry to update. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The updated name of the registry.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the registry. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated authorizer configuration for the registry. Changing the authorizer configuration can break existing consumers of the registry who are using the authorization type prior to the update.</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * <p>The updated approval configuration for registry records. The updated configuration only affects new records that move to <code>PENDING_APPROVAL</code> status after the change. Existing records already in <code>PENDING_APPROVAL</code> status are not affected.</p>
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the updated registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the updated registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the updated registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for the updated registry. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the updated registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status of the updated registry.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKRequest {
  /**
   * <p>The unique identifier of the token vault to update.</p>
   * @public
   */
  tokenVaultId?: string | undefined;

  /**
   * <p>The KMS configuration for the token vault, including the key type and KMS key ARN.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKResponse {
  /**
   * <p>The ID of the token vault.</p>
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * <p>The KMS configuration for the token vault.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * <p>The timestamp when the token vault was last modified.</p>
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is a key-value pair.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove from the resource.</p>
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
export interface CreateWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>A map of tag keys and values to assign to the workload identity. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityResponse {}

/**
 * @public
 */
export interface GetWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>The timestamp when the workload identity was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the workload identity was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}
