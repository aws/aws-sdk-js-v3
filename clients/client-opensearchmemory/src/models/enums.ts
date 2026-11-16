// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchGetEventErrorCode = {
  /**
   * <p>You don't have permission to use the space's customer managed AWS KMS key to decrypt the event. To fix it, give the caller <code>kms:Decrypt</code> permission on the key, and then retry the event. Corresponds to <code>AccessDeniedException</code>.</p>
   */
  ACCESS_DENIED: "ACCESS_DENIED",
  /**
   * <p>The service couldn't read the event. Retry it. Corresponds to <code>InternalServerException</code>.</p>
   */
  INTERNAL_SERVER: "INTERNAL_SERVER",
  /**
   * <p>No such event: it doesn't exist, was deleted, or belongs to another actor or session than the one you supplied. Corresponds to <code>ResourceNotFoundException</code>.</p>
   */
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  /**
   * <p>AWS KMS throttled the use of the space's customer managed AWS KMS key to decrypt the event. Retry the event with backoff. Corresponds to <code>ThrottlingException</code>.</p>
   */
  THROTTLING: "THROTTLING",
} as const;
/**
 * @public
 */
export type BatchGetEventErrorCode = (typeof BatchGetEventErrorCode)[keyof typeof BatchGetEventErrorCode];

/**
 * @public
 * @enum
 */
export const BlobContentType = {
  JPEG: "image/jpeg",
  /**
   * <p>A PDF document (<code>application/pdf</code>).</p>
   */
  PDF: "application/pdf",
  PNG: "image/png",
} as const;
/**
 * @public
 */
export type BlobContentType = (typeof BlobContentType)[keyof typeof BlobContentType];

/**
 * @public
 * @enum
 */
export const MessageRole = {
  /**
   * <p>The agent or model.</p>
   */
  ASSISTANT: "ASSISTANT",
  /**
   * <p>System instructions.</p>
   */
  SYSTEM: "SYSTEM",
  /**
   * <p>The end user.</p>
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   * <p>The query uses a query type that isn't supported.</p>
   */
  DISALLOWED_QUERY_TYPE: "disallowedQueryType",
  /**
   * <p>The field can't be used with this query type.</p>
   */
  FIELD_INDEX_MISMATCH: "fieldIndexMismatch",
  /**
   * <p>A field failed validation.</p>
   */
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  /**
   * <p>The pagination token is invalid or past the paging limit.</p>
   */
  INVALID_NEXT_TOKEN: "invalidNextToken",
  /**
   * <p>The query or sort can't be parsed.</p>
   */
  MALFORMED_QUERY_BODY: "malformedQueryBody",
  /**
   * <p>The query or sort uses a field that can't be used there, such as an actor or session field.</p>
   */
  NON_FILTERABLE_FIELD: "nonFilterableField",
  /**
   * <p>Another validation failure, such as an unusable customer managed AWS KMS key.</p>
   */
  OTHER: "other",
  /**
   * <p>The query exceeds a size or count limit: <code>query</code> and <code>sort</code> together are larger than 64 KB, the query has more than 32 clauses, a value list has more than 100 values, <code>function_score</code> has more than 3 decay functions, the query uses more than one distinct neural <code>query_text</code>, or the response is too large.</p>
   */
  QUERY_BODY_TOO_LARGE: "queryBodyTooLarge",
  /**
   * <p>A <code>bool</code> query nests more than 5 levels deep, or OpenSearch rejects the query for having too many clauses.</p>
   */
  QUERY_NESTING_TOO_DEEP: "queryNestingTooDeep",
  /**
   * <p>Reserved. The service doesn't currently return this reason.</p>
   */
  UNBOUNDED_PATTERN: "unboundedPattern",
  /**
   * <p>The query uses a field that doesn't exist.</p>
   */
  UNKNOWN_FIELD: "unknownField",
  /**
   * <p>Reserved. The service doesn't currently return this reason.</p>
   */
  UNSUPPORTED_FIELD: "unsupportedField",
  /**
   * <p>The request uses a parameter that isn't supported.</p>
   */
  UNSUPPORTED_PARAMETER: "unsupportedParameter",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const MemoryStrategyType = {
  /**
   * <p>Memories extracted with the instructions in the strategy's <code>extractionPrompt</code>.</p> <p>Requires <code>extractionPrompt</code>.</p>
   */
  CUSTOM: "CUSTOM",
  /**
   * <p>Facts extracted from conversations.</p>
   */
  SEMANTIC: "SEMANTIC",
  /**
   * <p>Summaries of conversations.</p>
   */
  SUMMARY: "SUMMARY",
} as const;
/**
 * @public
 */
export type MemoryStrategyType = (typeof MemoryStrategyType)[keyof typeof MemoryStrategyType];

/**
 * @public
 * @enum
 */
export const SpaceStatus = {
  /**
   * <p>The space is ready to use.</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>The space is being created.</p>
   */
  CREATING: "CREATING",
  /**
   * <p>Not returned: after a space is deleted, <code>GetSpace</code> returns <code>ResourceNotFoundException</code>.</p>
   */
  DELETED: "DELETED",
  /**
   * <p>The space is being deleted.</p>
   */
  DELETING: "DELETING",
  /**
   * <p>Creating, updating, or deleting the space failed. <code>statusReason</code> says why. If creating or updating the space failed, you can delete it. If an update failed, you can also update it again. If deleting it failed, contact AWS Support.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>A change to the space is being applied.</p>
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * @public
 * @enum
 */
export const MemoryType = {
  /**
   * <p>Memories extracted with a custom strategy's instructions.</p>
   */
  CUSTOM: "CUSTOM",
  /**
   * <p>Facts extracted from conversations.</p>
   */
  SEMANTIC: "SEMANTIC",
  /**
   * <p>Summaries of conversations.</p>
   */
  SUMMARY: "SUMMARY",
} as const;
/**
 * @public
 */
export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  /**
   * <p>Oldest first.</p>
   */
  ASC: "ASC",
  /**
   * <p>Most recent first.</p>
   */
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const MemorySortField = {
  /**
   * <p>Sort by <code>systemMetadata.createdAt</code>.</p>
   */
  CREATED_AT: "CREATED_AT",
  /**
   * <p>Sort by <code>systemMetadata.updatedAt</code>.</p>
   */
  UPDATED_AT: "UPDATED_AT",
} as const;
/**
 * @public
 */
export type MemorySortField = (typeof MemorySortField)[keyof typeof MemorySortField];

/**
 * @public
 * @enum
 */
export const MetadataMode = {
  /**
   * <p>Merges the supplied entries into the stored metadata. Keys that you don't supply keep their values. An entry whose value is the empty string removes that key.</p>
   */
  MERGE: "MERGE",
  /**
   * <p>Replace the stored metadata with exactly the entries supplied, removing any key not present. The default.</p>
   */
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type MetadataMode = (typeof MetadataMode)[keyof typeof MetadataMode];
