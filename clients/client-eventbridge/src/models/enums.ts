// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApiDestinationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ApiDestinationState = (typeof ApiDestinationState)[keyof typeof ApiDestinationState];

/**
 * @public
 * @enum
 */
export const ApiDestinationHttpMethod = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ApiDestinationHttpMethod = (typeof ApiDestinationHttpMethod)[keyof typeof ApiDestinationHttpMethod];

/**
 * @public
 * @enum
 */
export const ArchiveState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ArchiveState = (typeof ArchiveState)[keyof typeof ArchiveState];

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
 * @enum
 */
export const ReplayState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
} as const;
/**
 * @public
 */
export type ReplayState = (typeof ReplayState)[keyof typeof ReplayState];

/**
 * @public
 * @enum
 */
export const ConnectionAuthorizationType = {
  API_KEY: "API_KEY",
  BASIC: "BASIC",
  OAUTH_CLIENT_CREDENTIALS: "OAUTH_CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type ConnectionAuthorizationType =
  (typeof ConnectionAuthorizationType)[keyof typeof ConnectionAuthorizationType];

/**
 * @public
 * @enum
 */
export const ConnectionOAuthHttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ConnectionOAuthHttpMethod = (typeof ConnectionOAuthHttpMethod)[keyof typeof ConnectionOAuthHttpMethod];

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  AUTHORIZING: "AUTHORIZING",
  CREATING: "CREATING",
  DEAUTHORIZED: "DEAUTHORIZED",
  DEAUTHORIZING: "DEAUTHORIZING",
  DELETING: "DELETING",
  FAILED_CONNECTIVITY: "FAILED_CONNECTIVITY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const ReplicationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ReplicationState = (typeof ReplicationState)[keyof typeof ReplicationState];

/**
 * @public
 * @enum
 */
export const EndpointState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EndpointState = (typeof EndpointState)[keyof typeof EndpointState];

/**
 * @public
 * @enum
 */
export const IncludeDetail = {
  FULL: "FULL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type IncludeDetail = (typeof IncludeDetail)[keyof typeof IncludeDetail];

/**
 * @public
 * @enum
 */
export const Level = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
  TRACE: "TRACE",
} as const;
/**
 * @public
 */
export type Level = (typeof Level)[keyof typeof Level];

/**
 * @public
 * @enum
 */
export const EventSourceState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type EventSourceState = (typeof EventSourceState)[keyof typeof EventSourceState];

/**
 * @public
 * @enum
 */
export const RuleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS: "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS",
} as const;
/**
 * @public
 */
export type RuleState = (typeof RuleState)[keyof typeof RuleState];

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;
/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;
/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;
/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;
/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];
