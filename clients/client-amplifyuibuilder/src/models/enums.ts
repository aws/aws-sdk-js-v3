// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CodegenJobGenericDataSourceType = {
  DATA_STORE: "DataStore",
} as const;
/**
 * @public
 */
export type CodegenJobGenericDataSourceType =
  (typeof CodegenJobGenericDataSourceType)[keyof typeof CodegenJobGenericDataSourceType];

/**
 * @public
 * @enum
 */
export const CodegenGenericDataFieldDataType = {
  AWS_DATE: "AWSDate",
  AWS_DATE_TIME: "AWSDateTime",
  AWS_EMAIL: "AWSEmail",
  AWS_IP_ADDRESS: "AWSIPAddress",
  AWS_JSON: "AWSJSON",
  AWS_PHONE: "AWSPhone",
  AWS_TIME: "AWSTime",
  AWS_TIMESTAMP: "AWSTimestamp",
  AWS_URL: "AWSURL",
  BOOLEAN: "Boolean",
  ENUM: "Enum",
  FLOAT: "Float",
  ID: "ID",
  INT: "Int",
  MODEL: "Model",
  NON_MODEL: "NonModel",
  STRING: "String",
} as const;
/**
 * @public
 */
export type CodegenGenericDataFieldDataType =
  (typeof CodegenGenericDataFieldDataType)[keyof typeof CodegenGenericDataFieldDataType];

/**
 * @public
 * @enum
 */
export const GenericDataRelationshipType = {
  BELONGS_TO: "BELONGS_TO",
  HAS_MANY: "HAS_MANY",
  HAS_ONE: "HAS_ONE",
} as const;
/**
 * @public
 */
export type GenericDataRelationshipType =
  (typeof GenericDataRelationshipType)[keyof typeof GenericDataRelationshipType];

/**
 * @public
 * @enum
 */
export const JSModule = {
  ES2020: "es2020",
  ESNEXT: "esnext",
} as const;
/**
 * @public
 */
export type JSModule = (typeof JSModule)[keyof typeof JSModule];

/**
 * @public
 * @enum
 */
export const JSScript = {
  JS: "js",
  JSX: "jsx",
  TSX: "tsx",
} as const;
/**
 * @public
 */
export type JSScript = (typeof JSScript)[keyof typeof JSScript];

/**
 * @public
 * @enum
 */
export const JSTarget = {
  ES2015: "es2015",
  ES2020: "es2020",
} as const;
/**
 * @public
 */
export type JSTarget = (typeof JSTarget)[keyof typeof JSTarget];

/**
 * @public
 * @enum
 */
export const CodegenJobStatus = {
  FAILED: "failed",
  IN_PROGRESS: "in_progress",
  SUCCEEDED: "succeeded",
} as const;
/**
 * @public
 */
export type CodegenJobStatus = (typeof CodegenJobStatus)[keyof typeof CodegenJobStatus];

/**
 * @public
 * @enum
 */
export const SortDirection = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

/**
 * @public
 * @enum
 */
export const FixedPosition = {
  FIRST: "first",
} as const;
/**
 * @public
 */
export type FixedPosition = (typeof FixedPosition)[keyof typeof FixedPosition];

/**
 * @public
 * @enum
 */
export const FormButtonsPosition = {
  BOTTOM: "bottom",
  TOP: "top",
  TOP_AND_BOTTOM: "top_and_bottom",
} as const;
/**
 * @public
 */
export type FormButtonsPosition = (typeof FormButtonsPosition)[keyof typeof FormButtonsPosition];

/**
 * @public
 * @enum
 */
export const StorageAccessLevel = {
  PRIVATE: "private",
  PROTECTED: "protected",
  PUBLIC: "public",
} as const;
/**
 * @public
 */
export type StorageAccessLevel = (typeof StorageAccessLevel)[keyof typeof StorageAccessLevel];

/**
 * @public
 * @enum
 */
export const FormActionType = {
  CREATE: "create",
  UPDATE: "update",
} as const;
/**
 * @public
 */
export type FormActionType = (typeof FormActionType)[keyof typeof FormActionType];
