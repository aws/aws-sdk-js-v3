// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ExtendedAnalysisMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ExtendedAnalysisMode = (typeof ExtendedAnalysisMode)[keyof typeof ExtendedAnalysisMode];

/**
 * @public
 * @enum
 */
export const SummaryGenerationMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SummaryGenerationMode = (typeof SummaryGenerationMode)[keyof typeof SummaryGenerationMode];

/**
 * @public
 * @enum
 */
export const FrameSamplingMode = {
  FIRST: "FIRST",
  LAST: "LAST",
  UNIFORM: "UNIFORM",
} as const;
/**
 * @public
 */
export type FrameSamplingMode = (typeof FrameSamplingMode)[keyof typeof FrameSamplingMode];

/**
 * @public
 * @enum
 */
export const TranscriptionLanguage = {
  DEU: "deu",
  ENG: "eng",
  ENG_AU: "eng-au",
  ENG_GB: "eng-gb",
  ENG_US: "eng-us",
  FRA: "fra",
  ITA: "ita",
  POR: "por",
  SPA: "spa",
} as const;
/**
 * @public
 */
export type TranscriptionLanguage = (typeof TranscriptionLanguage)[keyof typeof TranscriptionLanguage];

/**
 * @public
 * @enum
 */
export const ProfanityFilterMode = {
  CENSOR: "CENSOR",
  DISABLED: "DISABLED",
  DROP: "DROP",
} as const;
/**
 * @public
 */
export type ProfanityFilterMode = (typeof ProfanityFilterMode)[keyof typeof ProfanityFilterMode];

/**
 * @public
 * @enum
 */
export const OutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus];

/**
 * @public
 * @enum
 */
export const BedrockApi = {
  INVOKE_MODEL: "INVOKE_MODEL",
} as const;
/**
 * @public
 */
export type BedrockApi = (typeof BedrockApi)[keyof typeof BedrockApi];

/**
 * @public
 * @enum
 */
export const ContextType = {
  CLIP_METADATA: "CLIP_METADATA",
  CONTEXTUAL_METADATA: "CONTEXTUAL_METADATA",
  FRAMES: "FRAMES",
  SUBTITLES: "SUBTITLES",
} as const;
/**
 * @public
 */
export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * @public
 * @enum
 */
export const DictionaryLanguage = {
  DEU: "deu",
  ENG: "eng",
  FRA: "fra",
  ITA: "ita",
  POR: "por",
  SPA: "spa",
} as const;
/**
 * @public
 */
export type DictionaryLanguage = (typeof DictionaryLanguage)[keyof typeof DictionaryLanguage];

/**
 * @public
 * @enum
 */
export const DictionaryStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  REFERENCED: "REFERENCED",
} as const;
/**
 * @public
 */
export type DictionaryStatus = (typeof DictionaryStatus)[keyof typeof DictionaryStatus];

/**
 * @public
 * @enum
 */
export const FeedStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FeedStatus = (typeof FeedStatus)[keyof typeof FeedStatus];

/**
 * @public
 * @enum
 */
export const EventBridgeDeliveryMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EventBridgeDeliveryMode = (typeof EventBridgeDeliveryMode)[keyof typeof EventBridgeDeliveryMode];

/**
 * @public
 * @enum
 */
export const FunctionStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  REFERENCED: "REFERENCED",
} as const;
/**
 * @public
 */
export type FunctionStatus = (typeof FunctionStatus)[keyof typeof FunctionStatus];

/**
 * @public
 * @enum
 */
export const ScheduleActionErrorCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ACTION_TARGET: "INVALID_ACTION_TARGET",
} as const;
/**
 * @public
 */
export type ScheduleActionErrorCode = (typeof ScheduleActionErrorCode)[keyof typeof ScheduleActionErrorCode];

/**
 * @public
 * @enum
 */
export const ScheduleActionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ScheduleActionStatus = (typeof ScheduleActionStatus)[keyof typeof ScheduleActionStatus];

/**
 * @public
 * @enum
 */
export const DataSourceSport = {
  AMERICAN_FOOTBALL: "american-football",
  BASKETBALL: "basketball",
} as const;
/**
 * @public
 */
export type DataSourceSport = (typeof DataSourceSport)[keyof typeof DataSourceSport];

/**
 * @public
 * @enum
 */
export const FilterName = {
  COMPETITOR: "COMPETITOR",
} as const;
/**
 * @public
 */
export type FilterName = (typeof FilterName)[keyof typeof FilterName];
