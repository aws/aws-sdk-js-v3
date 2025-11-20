// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResourceType = {
  DATABASE: "DATABASE",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  ASSOCIATE: "ASSOCIATE",
  CREATE_CATALOG: "CREATE_CATALOG",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_LF_TAG: "CREATE_LF_TAG",
  CREATE_LF_TAG_EXPRESSION: "CREATE_LF_TAG_EXPRESSION",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DESCRIBE: "DESCRIBE",
  DROP: "DROP",
  GRANT_WITH_LF_TAG_EXPRESSION: "GRANT_WITH_LF_TAG_EXPRESSION",
  INSERT: "INSERT",
  SELECT: "SELECT",
  SUPER_USER: "SUPER_USER",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const TransactionStatus = {
  ABORTED: "ABORTED",
  ACTIVE: "ACTIVE",
  COMMITTED: "COMMITTED",
  COMMIT_IN_PROGRESS: "COMMIT_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];

/**
 * @public
 * @enum
 */
export const EnableStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EnableStatus = (typeof EnableStatus)[keyof typeof EnableStatus];

/**
 * @public
 * @enum
 */
export const ServiceAuthorization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ServiceAuthorization = (typeof ServiceAuthorization)[keyof typeof ServiceAuthorization];

/**
 * @public
 * @enum
 */
export const QueryStateString = {
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  FINISHED: "FINISHED",
  PENDING: "PENDING",
  WORKUNITS_AVAILABLE: "WORKUNITS_AVAILABLE",
} as const;
/**
 * @public
 */
export type QueryStateString = (typeof QueryStateString)[keyof typeof QueryStateString];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CELL_FILTER_PERMISSION: "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION: "COLUMN_PERMISSION",
  NESTED_CELL_PERMISSION: "NESTED_CELL_PERMISSION",
  NESTED_PERMISSION: "NESTED_PERMISSION",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const ResourceShareType = {
  ALL: "ALL",
  FOREIGN: "FOREIGN",
} as const;
/**
 * @public
 */
export type ResourceShareType = (typeof ResourceShareType)[keyof typeof ResourceShareType];

/**
 * @public
 * @enum
 */
export const DataLakeResourceType = {
  CATALOG: "CATALOG",
  DATABASE: "DATABASE",
  DATA_LOCATION: "DATA_LOCATION",
  LF_NAMED_TAG_EXPRESSION: "LF_NAMED_TAG_EXPRESSION",
  LF_TAG: "LF_TAG",
  LF_TAG_POLICY: "LF_TAG_POLICY",
  LF_TAG_POLICY_DATABASE: "LF_TAG_POLICY_DATABASE",
  LF_TAG_POLICY_TABLE: "LF_TAG_POLICY_TABLE",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type DataLakeResourceType = (typeof DataLakeResourceType)[keyof typeof DataLakeResourceType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  IN: "IN",
  LE: "LE",
  LT: "LT",
  NE: "NE",
  NOT_CONTAINS: "NOT_CONTAINS",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const FieldNameString = {
  LAST_MODIFIED: "LAST_MODIFIED",
  RESOURCE_ARN: "RESOURCE_ARN",
  ROLE_ARN: "ROLE_ARN",
} as const;
/**
 * @public
 */
export type FieldNameString = (typeof FieldNameString)[keyof typeof FieldNameString];

/**
 * @public
 * @enum
 */
export const OptimizerType = {
  COMPACTION: "COMPACTION",
  GARBAGE_COLLECTION: "GARBAGE_COLLECTION",
  GENERIC: "ALL",
} as const;
/**
 * @public
 */
export type OptimizerType = (typeof OptimizerType)[keyof typeof OptimizerType];

/**
 * @public
 * @enum
 */
export const TransactionStatusFilter = {
  ABORTED: "ABORTED",
  ACTIVE: "ACTIVE",
  ALL: "ALL",
  COMMITTED: "COMMITTED",
  COMPLETED: "COMPLETED",
} as const;
/**
 * @public
 */
export type TransactionStatusFilter = (typeof TransactionStatusFilter)[keyof typeof TransactionStatusFilter];

/**
 * @public
 * @enum
 */
export const TransactionType = {
  READ_AND_WRITE: "READ_AND_WRITE",
  READ_ONLY: "READ_ONLY",
} as const;
/**
 * @public
 */
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
