// smithy-typescript generated code
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
 * @public
 * @enum
 */
export const RecommendationType = {
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

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
  QUERY: "QUERY",
} as const;
/**
 * @public
 */
export type RecommendationTriggerType = (typeof RecommendationTriggerType)[keyof typeof RecommendationTriggerType];

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
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  CUSTOM: "CUSTOM",
  EXTERNAL: "EXTERNAL",
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;
/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

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
 * @public
 * @enum
 */
export const QuickResponseStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type QuickResponseStatus = (typeof QuickResponseStatus)[keyof typeof QuickResponseStatus];

/**
 * @public
 * @enum
 */
export const ExternalSource = {
  AMAZON_CONNECT: "AMAZON_CONNECT",
} as const;
/**
 * @public
 */
export type ExternalSource = (typeof ExternalSource)[keyof typeof ExternalSource];

/**
 * @public
 * @enum
 */
export const ImportJobType = {
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;
/**
 * @public
 */
export type ImportJobType = (typeof ImportJobType)[keyof typeof ImportJobType];

/**
 * @public
 * @enum
 */
export const ImportJobStatus = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ImportJobStatus = (typeof ImportJobStatus)[keyof typeof ImportJobStatus];

/**
 * @public
 * @enum
 */
export const QuickResponseFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;
/**
 * @public
 */
export type QuickResponseFilterOperator =
  (typeof QuickResponseFilterOperator)[keyof typeof QuickResponseFilterOperator];

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const QuickResponseQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;
/**
 * @public
 */
export type QuickResponseQueryOperator = (typeof QuickResponseQueryOperator)[keyof typeof QuickResponseQueryOperator];

/**
 * @public
 * @enum
 */
export const Priority = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type Priority = (typeof Priority)[keyof typeof Priority];
