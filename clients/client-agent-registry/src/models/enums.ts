// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchGetDiscoverableRegistryRecordErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchGetDiscoverableRegistryRecordErrorCode =
  (typeof BatchGetDiscoverableRegistryRecordErrorCode)[keyof typeof BatchGetDiscoverableRegistryRecordErrorCode];

/**
 * @public
 * @enum
 */
export const BotCategory = {
  ADVERTISING: "advertising",
  AI_ASSISTANT: "ai_assistant",
  AI_CONTENT_OPTIMIZATION: "ai_content_optimization",
  AI_SEARCH: "ai_search",
  AI_TRAINING: "ai_training",
  ARCHIVER: "archiver",
  CONTENT_FETCHER: "content_fetcher",
  EMAIL_CLIENT: "email_client",
  HTTP_LIBRARY: "http_library",
  LINK_CHECKER: "link_checker",
  MISCELLANEOUS: "miscellaneous",
  MONITORING: "monitoring",
  PAGE_PREVIEW: "page_preview",
  SCRAPING_FRAMEWORK: "scraping_framework",
  SEARCH_ENGINE: "search_engine",
  SECURITY: "security",
  SEO: "seo",
  SOCIAL_MEDIA: "social_media",
} as const;
/**
 * @public
 */
export type BotCategory = (typeof BotCategory)[keyof typeof BotCategory];

/**
 * @public
 * @enum
 */
export const RecordType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  GATEWAY: "GATEWAY",
  MCP: "MCP",
  SKILL: "SKILL",
  WEB_BOT: "WEB_BOT",
} as const;
/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * @public
 * @enum
 */
export const RegistryRecordStatus = {
  APPROVED: "APPROVED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_PENDING_AUTH: "CREATE_PENDING_AUTH",
  CREATING: "CREATING",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_PENDING_AUTH: "UPDATE_PENDING_AUTH",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RegistryRecordStatus = (typeof RegistryRecordStatus)[keyof typeof RegistryRecordStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
  UNSUPPORTED_IN_REGION: "UnsupportedInRegion",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const RegistryRecordFilterName = {
  DESCRIPTOR_TYPE: "descriptorType",
  /**
   * <p> Filters records by record type, such as <code>MCP</code> or <code>AGENT</code>.</p>
   */
  RECORD_TYPE: "recordType",
} as const;
/**
 * @public
 */
export type RegistryRecordFilterName = (typeof RegistryRecordFilterName)[keyof typeof RegistryRecordFilterName];

/**
 * @public
 * @enum
 */
export const SearchType = {
  /**
   * <p> Combines keyword ranking and semantic ranking. Use this type when a query mixes specific terms with a natural language description.</p>
   */
  HYBRID: "HYBRID",
  /**
   * <p> Ranks records by keyword match between the query terms and the record name, description, descriptors, and custom metadata text values. Use this type for queries built from specific terms, such as tool names or API names.</p>
   */
  KEYWORD: "KEYWORD",
  /**
   * <p> Ranks records by semantic similarity to the query. Use this type for natural language descriptions of a task. Returns the most similar records even when none of them closely matches the query.</p>
   */
  SEMANTIC: "SEMANTIC",
} as const;
/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];
