// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InputTags = {
  HONOR: "HONOR",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type InputTags = (typeof InputTags)[keyof typeof InputTags];

/**
 * @public
 * @enum
 */
export const ConfigurationOwner = {
  /**
   * Configuration owned by the account
   */
  ACCOUNT: "ACCOUNT",
} as const;
/**
 * @public
 */
export type ConfigurationOwner = (typeof ConfigurationOwner)[keyof typeof ConfigurationOwner];

/**
 * @public
 * @enum
 */
export const AgreementStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningCheckResult = {
  IMPOSSIBLE: "IMPOSSIBLE",
  INVALID: "INVALID",
  NO_TRANSLATION: "NO_TRANSLATION",
  SATISFIABLE: "SATISFIABLE",
  TOO_COMPLEX: "TOO_COMPLEX",
  TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type AutomatedReasoningCheckResult =
  (typeof AutomatedReasoningCheckResult)[keyof typeof AutomatedReasoningCheckResult];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildWorkflowType = {
  IMPORT_POLICY: "IMPORT_POLICY",
  INGEST_CONTENT: "INGEST_CONTENT",
  REFINE_POLICY: "REFINE_POLICY",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyBuildWorkflowType =
  (typeof AutomatedReasoningPolicyBuildWorkflowType)[keyof typeof AutomatedReasoningPolicyBuildWorkflowType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildDocumentContentType = {
  PDF: "pdf",
  TEXT: "txt",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyBuildDocumentContentType =
  (typeof AutomatedReasoningPolicyBuildDocumentContentType)[keyof typeof AutomatedReasoningPolicyBuildDocumentContentType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildWorkflowStatus = {
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  CANCEL_REQUESTED: "CANCEL_REQUESTED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PREPROCESSING: "PREPROCESSING",
  SCHEDULED: "SCHEDULED",
  TESTING: "TESTING",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyBuildWorkflowStatus =
  (typeof AutomatedReasoningPolicyBuildWorkflowStatus)[keyof typeof AutomatedReasoningPolicyBuildWorkflowStatus];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildResultAssetType = {
  BUILD_LOG: "BUILD_LOG",
  GENERATED_TEST_CASES: "GENERATED_TEST_CASES",
  POLICY_DEFINITION: "POLICY_DEFINITION",
  QUALITY_REPORT: "QUALITY_REPORT",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyBuildResultAssetType =
  (typeof AutomatedReasoningPolicyBuildResultAssetType)[keyof typeof AutomatedReasoningPolicyBuildResultAssetType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildMessageType = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyBuildMessageType =
  (typeof AutomatedReasoningPolicyBuildMessageType)[keyof typeof AutomatedReasoningPolicyBuildMessageType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyAnnotationStatus = {
  APPLIED: "APPLIED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyAnnotationStatus =
  (typeof AutomatedReasoningPolicyAnnotationStatus)[keyof typeof AutomatedReasoningPolicyAnnotationStatus];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningCheckLogicWarningType = {
  ALWAYS_FALSE: "ALWAYS_FALSE",
  ALWAYS_TRUE: "ALWAYS_TRUE",
} as const;
/**
 * @public
 */
export type AutomatedReasoningCheckLogicWarningType =
  (typeof AutomatedReasoningCheckLogicWarningType)[keyof typeof AutomatedReasoningCheckLogicWarningType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyTestRunResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyTestRunResult =
  (typeof AutomatedReasoningPolicyTestRunResult)[keyof typeof AutomatedReasoningPolicyTestRunResult];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyTestRunStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type AutomatedReasoningPolicyTestRunStatus =
  (typeof AutomatedReasoningPolicyTestRunStatus)[keyof typeof AutomatedReasoningPolicyTestRunStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
  REGISTERED: "REGISTERED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const CustomModelDeploymentStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type CustomModelDeploymentStatus =
  (typeof CustomModelDeploymentStatus)[keyof typeof CustomModelDeploymentStatus];

/**
 * @public
 * @enum
 */
export const CustomModelDeploymentUpdateStatus = {
  UPDATE_COMPLETED: "UpdateCompleted",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type CustomModelDeploymentUpdateStatus =
  (typeof CustomModelDeploymentUpdateStatus)[keyof typeof CustomModelDeploymentUpdateStatus];

/**
 * @public
 * @enum
 */
export const SortModelsBy = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type SortModelsBy = (typeof SortModelsBy)[keyof typeof SortModelsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const ReasoningEffort = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;
/**
 * @public
 */
export type ReasoningEffort = (typeof ReasoningEffort)[keyof typeof ReasoningEffort];

/**
 * @public
 * @enum
 */
export const CustomizationType = {
  CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
  DISTILLATION: "DISTILLATION",
  FINE_TUNING: "FINE_TUNING",
  IMPORTED: "IMPORTED",
  REINFORCEMENT_FINE_TUNING: "REINFORCEMENT_FINE_TUNING",
} as const;
/**
 * @public
 */
export type CustomizationType = (typeof CustomizationType)[keyof typeof CustomizationType];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const EvaluationJobStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type EvaluationJobStatus = (typeof EvaluationJobStatus)[keyof typeof EvaluationJobStatus];

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  MODEL_EVALUATION: "ModelEvaluation",
  RAG_EVALUATION: "RagEvaluation",
} as const;
/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * @enum
 */
export const EvaluationTaskType = {
  CLASSIFICATION: "Classification",
  CUSTOM: "Custom",
  GENERATION: "Generation",
  QUESTION_AND_ANSWER: "QuestionAndAnswer",
  SUMMARIZATION: "Summarization",
} as const;
/**
 * @public
 */
export type EvaluationTaskType = (typeof EvaluationTaskType)[keyof typeof EvaluationTaskType];

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
 * @public
 * @enum
 */
export const ExternalSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ExternalSourceType = (typeof ExternalSourceType)[keyof typeof ExternalSourceType];

/**
 * @public
 * @enum
 */
export const QueryTransformationType = {
  QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION",
} as const;
/**
 * @public
 */
export type QueryTransformationType = (typeof QueryTransformationType)[keyof typeof QueryTransformationType];

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
 * @public
 * @enum
 */
export const RetrieveAndGenerateType = {
  EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * @public
 * @enum
 */
export const EvaluationJobType = {
  AUTOMATED: "Automated",
  HUMAN: "Human",
} as const;
/**
 * @public
 */
export type EvaluationJobType = (typeof EvaluationJobType)[keyof typeof EvaluationJobType];

/**
 * @public
 * @enum
 */
export const SortJobsBy = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type SortJobsBy = (typeof SortJobsBy)[keyof typeof SortJobsBy];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContentFilterAction =
  (typeof GuardrailContentFilterAction)[keyof typeof GuardrailContentFilterAction];

/**
 * @public
 * @enum
 */
export const GuardrailModality = {
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type GuardrailModality = (typeof GuardrailModality)[keyof typeof GuardrailModality];

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
 * @public
 * @enum
 */
export const GuardrailContentFiltersTierName = {
  CLASSIC: "CLASSIC",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type GuardrailContentFiltersTierName =
  (typeof GuardrailContentFiltersTierName)[keyof typeof GuardrailContentFiltersTierName];

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContextualGroundingAction =
  (typeof GuardrailContextualGroundingAction)[keyof typeof GuardrailContextualGroundingAction];

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
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationAction = {
  ANONYMIZE: "ANONYMIZE",
  BLOCK: "BLOCK",
  NONE: "NONE",
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
 * @public
 * @enum
 */
export const GuardrailTopicsTierName = {
  CLASSIC: "CLASSIC",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type GuardrailTopicsTierName = (typeof GuardrailTopicsTierName)[keyof typeof GuardrailTopicsTierName];

/**
 * @public
 * @enum
 */
export const GuardrailTopicAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailTopicAction = (typeof GuardrailTopicAction)[keyof typeof GuardrailTopicAction];

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
 * @public
 * @enum
 */
export const GuardrailWordAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailWordAction = (typeof GuardrailWordAction)[keyof typeof GuardrailWordAction];

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
 * @public
 * @enum
 */
export const GuardrailStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  UPDATING: "UPDATING",
  VERSIONING: "VERSIONING",
} as const;
/**
 * @public
 */
export type GuardrailStatus = (typeof GuardrailStatus)[keyof typeof GuardrailStatus];

/**
 * @public
 * @enum
 */
export const InferenceProfileStatus = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type InferenceProfileStatus = (typeof InferenceProfileStatus)[keyof typeof InferenceProfileStatus];

/**
 * @public
 * @enum
 */
export const InferenceProfileType = {
  APPLICATION: "APPLICATION",
  SYSTEM_DEFINED: "SYSTEM_DEFINED",
} as const;
/**
 * @public
 */
export type InferenceProfileType = (typeof InferenceProfileType)[keyof typeof InferenceProfileType];

/**
 * @public
 * @enum
 */
export const ModelCopyJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;
/**
 * @public
 */
export type ModelCopyJobStatus = (typeof ModelCopyJobStatus)[keyof typeof ModelCopyJobStatus];

/**
 * @public
 * @enum
 */
export const ModelImportJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;
/**
 * @public
 */
export type ModelImportJobStatus = (typeof ModelImportJobStatus)[keyof typeof ModelImportJobStatus];

/**
 * @public
 * @enum
 */
export const S3InputFormat = {
  JSONL: "JSONL",
} as const;
/**
 * @public
 */
export type S3InputFormat = (typeof S3InputFormat)[keyof typeof S3InputFormat];

/**
 * @public
 * @enum
 */
export const ModelInvocationJobStatus = {
  COMPLETED: "Completed",
  EXPIRED: "Expired",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PARTIALLY_COMPLETED: "PartiallyCompleted",
  SCHEDULED: "Scheduled",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUBMITTED: "Submitted",
  VALIDATING: "Validating",
} as const;
/**
 * @public
 */
export type ModelInvocationJobStatus = (typeof ModelInvocationJobStatus)[keyof typeof ModelInvocationJobStatus];

/**
 * @public
 * @enum
 */
export const ModelCustomization = {
  CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
  DISTILLATION: "DISTILLATION",
  FINE_TUNING: "FINE_TUNING",
} as const;
/**
 * @public
 */
export type ModelCustomization = (typeof ModelCustomization)[keyof typeof ModelCustomization];

/**
 * @public
 * @enum
 */
export const InferenceType = {
  ON_DEMAND: "ON_DEMAND",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type InferenceType = (typeof InferenceType)[keyof typeof InferenceType];

/**
 * @public
 * @enum
 */
export const ModelModality = {
  EMBEDDING: "EMBEDDING",
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type ModelModality = (typeof ModelModality)[keyof typeof ModelModality];

/**
 * @public
 * @enum
 */
export const FoundationModelLifecycleStatus = {
  ACTIVE: "ACTIVE",
  LEGACY: "LEGACY",
} as const;
/**
 * @public
 */
export type FoundationModelLifecycleStatus =
  (typeof FoundationModelLifecycleStatus)[keyof typeof FoundationModelLifecycleStatus];

/**
 * @public
 * @enum
 */
export const PromptRouterStatus = {
  AVAILABLE: "AVAILABLE",
} as const;
/**
 * @public
 */
export type PromptRouterStatus = (typeof PromptRouterStatus)[keyof typeof PromptRouterStatus];

/**
 * @public
 * @enum
 */
export const PromptRouterType = {
  CUSTOM: "custom",
  DEFAULT: "default",
} as const;
/**
 * @public
 */
export type PromptRouterType = (typeof PromptRouterType)[keyof typeof PromptRouterType];

/**
 * @public
 * @enum
 */
export const CommitmentDuration = {
  ONE_MONTH: "OneMonth",
  SIX_MONTHS: "SixMonths",
} as const;
/**
 * @public
 */
export type CommitmentDuration = (typeof CommitmentDuration)[keyof typeof CommitmentDuration];

/**
 * @public
 * @enum
 */
export const ProvisionedModelStatus = {
  CREATING: "Creating",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type ProvisionedModelStatus = (typeof ProvisionedModelStatus)[keyof typeof ProvisionedModelStatus];

/**
 * @public
 * @enum
 */
export const SortByProvisionedModels = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type SortByProvisionedModels = (typeof SortByProvisionedModels)[keyof typeof SortByProvisionedModels];

/**
 * @public
 * @enum
 */
export const AuthorizationStatus = {
  AUTHORIZED: "AUTHORIZED",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
} as const;
/**
 * @public
 */
export type AuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

/**
 * @public
 * @enum
 */
export const EntitlementAvailability = {
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type EntitlementAvailability = (typeof EntitlementAvailability)[keyof typeof EntitlementAvailability];

/**
 * @public
 * @enum
 */
export const RegionAvailability = {
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type RegionAvailability = (typeof RegionAvailability)[keyof typeof RegionAvailability];

/**
 * @public
 * @enum
 */
export const OfferType = {
  ALL: "ALL",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type OfferType = (typeof OfferType)[keyof typeof OfferType];

/**
 * @public
 * @enum
 */
export const ModelCustomizationJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type ModelCustomizationJobStatus =
  (typeof ModelCustomizationJobStatus)[keyof typeof ModelCustomizationJobStatus];

/**
 * @public
 * @enum
 */
export const JobStatusDetails = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type JobStatusDetails = (typeof JobStatusDetails)[keyof typeof JobStatusDetails];

/**
 * @public
 * @enum
 */
export const FineTuningJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type FineTuningJobStatus = (typeof FineTuningJobStatus)[keyof typeof FineTuningJobStatus];
