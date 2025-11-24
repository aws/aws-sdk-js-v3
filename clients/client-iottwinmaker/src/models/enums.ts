// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ErrorCode = {
  COMPOSITE_COMPONENT_FAILURE: "COMPOSITE_COMPONENT_FAILURE",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PROCESSING_ERROR: "PROCESSING_ERROR",
  SYNC_CREATING_ERROR: "SYNC_CREATING_ERROR",
  SYNC_DELETING_ERROR: "SYNC_DELETING_ERROR",
  SYNC_INITIALIZING_ERROR: "SYNC_INITIALIZING_ERROR",
  SYNC_PROCESSING_ERROR: "SYNC_PROCESSING_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const MetadataTransferJobState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type MetadataTransferJobState = (typeof MetadataTransferJobState)[keyof typeof MetadataTransferJobState];

/**
 * @public
 * @enum
 */
export const Scope = {
  ENTITY: "ENTITY",
  WORKSPACE: "WORKSPACE",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const Type = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  LIST: "LIST",
  LONG: "LONG",
  MAP: "MAP",
  RELATIONSHIP: "RELATIONSHIP",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const GroupType = {
  TABULAR: "TABULAR",
} as const;
/**
 * @public
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const PropertyUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  RESET_VALUE: "RESET_VALUE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type PropertyUpdateType = (typeof PropertyUpdateType)[keyof typeof PropertyUpdateType];

/**
 * @public
 * @enum
 */
export const PropertyGroupUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type PropertyGroupUpdateType = (typeof PropertyGroupUpdateType)[keyof typeof PropertyGroupUpdateType];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  IOTSITEWISE: "iotsitewise",
  IOTTWINMAKER: "iottwinmaker",
  S3: "s3",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  IOTSITEWISE: "iotsitewise",
  IOTTWINMAKER: "iottwinmaker",
  S3: "s3",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const SyncJobState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INITIALIZING: "INITIALIZING",
} as const;
/**
 * @public
 */
export type SyncJobState = (typeof SyncJobState)[keyof typeof SyncJobState];

/**
 * @public
 * @enum
 */
export const ColumnType = {
  EDGE: "EDGE",
  NODE: "NODE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

/**
 * @public
 * @enum
 */
export const PricingTier = {
  TIER_1: "TIER_1",
  TIER_2: "TIER_2",
  TIER_3: "TIER_3",
  TIER_4: "TIER_4",
} as const;
/**
 * @public
 */
export type PricingTier = (typeof PricingTier)[keyof typeof PricingTier];

/**
 * @public
 * @enum
 */
export const PricingMode = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
  TIERED_BUNDLE: "TIERED_BUNDLE",
} as const;
/**
 * @public
 */
export type PricingMode = (typeof PricingMode)[keyof typeof PricingMode];

/**
 * @public
 * @enum
 */
export const UpdateReason = {
  DEFAULT: "DEFAULT",
  ENTITY_COUNT_UPDATE: "ENTITY_COUNT_UPDATE",
  OVERWRITTEN: "OVERWRITTEN",
  PRICING_MODE_UPDATE: "PRICING_MODE_UPDATE",
  PRICING_TIER_UPDATE: "PRICING_TIER_UPDATE",
} as const;
/**
 * @public
 */
export type UpdateReason = (typeof UpdateReason)[keyof typeof UpdateReason];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const InterpolationType = {
  LINEAR: "LINEAR",
} as const;
/**
 * @public
 */
export type InterpolationType = (typeof InterpolationType)[keyof typeof InterpolationType];

/**
 * @public
 * @enum
 */
export const OrderByTime = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type OrderByTime = (typeof OrderByTime)[keyof typeof OrderByTime];

/**
 * @public
 * @enum
 */
export const SceneErrorCode = {
  MATTERPORT_ERROR: "MATTERPORT_ERROR",
} as const;
/**
 * @public
 */
export type SceneErrorCode = (typeof SceneErrorCode)[keyof typeof SceneErrorCode];

/**
 * @public
 * @enum
 */
export const SyncResourceType = {
  COMPONENT_TYPE: "COMPONENT_TYPE",
  ENTITY: "ENTITY",
} as const;
/**
 * @public
 */
export type SyncResourceType = (typeof SyncResourceType)[keyof typeof SyncResourceType];

/**
 * @public
 * @enum
 */
export const SyncResourceState = {
  DELETED: "DELETED",
  ERROR: "ERROR",
  INITIALIZING: "INITIALIZING",
  IN_SYNC: "IN_SYNC",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type SyncResourceState = (typeof SyncResourceState)[keyof typeof SyncResourceState];

/**
 * @public
 * @enum
 */
export const ComponentUpdateType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type ComponentUpdateType = (typeof ComponentUpdateType)[keyof typeof ComponentUpdateType];

/**
 * @public
 * @enum
 */
export const ParentEntityUpdateType = {
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type ParentEntityUpdateType = (typeof ParentEntityUpdateType)[keyof typeof ParentEntityUpdateType];
