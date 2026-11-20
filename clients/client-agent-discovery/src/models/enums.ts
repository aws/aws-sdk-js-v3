// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ArdErrorCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ARGUMENT: "INVALID_ARGUMENT",
  NOT_FOUND: "NOT_FOUND",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  UNAUTHENTICATED: "UNAUTHENTICATED",
} as const;
/**
 * @public
 */
export type ArdErrorCode = (typeof ArdErrorCode)[keyof typeof ArdErrorCode];

/**
 * @public
 * @enum
 */
export const RecordType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  GATEWAY: "GATEWAY",
  SKILL: "SKILL",
  TOOL: "TOOL",
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
export const ProvenanceRelation = {
  /**
   * Discovered by the registry at a partner source.
   */
  DISCOVERED_FROM: "discoveredFrom",
  /**
   * Received from a peer registry.
   */
  FEDERATED_FROM: "federatedFrom",
  /**
   * Published to the registry by the record's owner.
   */
  PUBLISHED_FROM: "publishedFrom",
} as const;
/**
 * @public
 */
export type ProvenanceRelation = (typeof ProvenanceRelation)[keyof typeof ProvenanceRelation];
