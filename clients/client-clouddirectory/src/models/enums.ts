// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConsistencyLevel = {
  EVENTUAL: "EVENTUAL",
  SERIALIZABLE: "SERIALIZABLE",
} as const;
/**
 * @public
 */
export type ConsistencyLevel = (typeof ConsistencyLevel)[keyof typeof ConsistencyLevel];

/**
 * @public
 * @enum
 */
export const RangeMode = {
  EXCLUSIVE: "EXCLUSIVE",
  FIRST: "FIRST",
  INCLUSIVE: "INCLUSIVE",
  LAST: "LAST",
  LAST_BEFORE_MISSING_VALUES: "LAST_BEFORE_MISSING_VALUES",
} as const;
/**
 * @public
 */
export type RangeMode = (typeof RangeMode)[keyof typeof RangeMode];

/**
 * @public
 * @enum
 */
export const BatchReadExceptionType = {
  AccessDeniedException: "AccessDeniedException",
  CannotListParentOfRootException: "CannotListParentOfRootException",
  DirectoryNotEnabledException: "DirectoryNotEnabledException",
  FacetValidationException: "FacetValidationException",
  InternalServiceException: "InternalServiceException",
  InvalidArnException: "InvalidArnException",
  InvalidNextTokenException: "InvalidNextTokenException",
  LimitExceededException: "LimitExceededException",
  NotIndexException: "NotIndexException",
  NotNodeException: "NotNodeException",
  NotPolicyException: "NotPolicyException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ValidationException: "ValidationException",
} as const;
/**
 * @public
 */
export type BatchReadExceptionType = (typeof BatchReadExceptionType)[keyof typeof BatchReadExceptionType];

/**
 * @public
 * @enum
 */
export const BatchWriteExceptionType = {
  AccessDeniedException: "AccessDeniedException",
  DirectoryNotEnabledException: "DirectoryNotEnabledException",
  FacetValidationException: "FacetValidationException",
  IndexedAttributeMissingException: "IndexedAttributeMissingException",
  InternalServiceException: "InternalServiceException",
  InvalidArnException: "InvalidArnException",
  InvalidAttachmentException: "InvalidAttachmentException",
  LimitExceededException: "LimitExceededException",
  LinkNameAlreadyInUseException: "LinkNameAlreadyInUseException",
  NotIndexException: "NotIndexException",
  NotNodeException: "NotNodeException",
  NotPolicyException: "NotPolicyException",
  ObjectAlreadyDetachedException: "ObjectAlreadyDetachedException",
  ObjectNotDetachedException: "ObjectNotDetachedException",
  ResourceNotFoundException: "ResourceNotFoundException",
  StillContainsLinksException: "StillContainsLinksException",
  UnsupportedIndexTypeException: "UnsupportedIndexTypeException",
  ValidationException: "ValidationException",
} as const;
/**
 * @public
 */
export type BatchWriteExceptionType = (typeof BatchWriteExceptionType)[keyof typeof BatchWriteExceptionType];

/**
 * @public
 * @enum
 */
export const UpdateActionType = {
  CREATE_OR_UPDATE: "CREATE_OR_UPDATE",
  DELETE: "DELETE",
} as const;
/**
 * @public
 */
export type UpdateActionType = (typeof UpdateActionType)[keyof typeof UpdateActionType];

/**
 * @public
 * @enum
 */
export const RuleType = {
  BINARY_LENGTH: "BINARY_LENGTH",
  NUMBER_COMPARISON: "NUMBER_COMPARISON",
  STRING_FROM_SET: "STRING_FROM_SET",
  STRING_LENGTH: "STRING_LENGTH",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const FacetAttributeType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  NUMBER: "NUMBER",
  STRING: "STRING",
  VARIANT: "VARIANT",
} as const;
/**
 * @public
 */
export type FacetAttributeType = (typeof FacetAttributeType)[keyof typeof FacetAttributeType];

/**
 * @public
 * @enum
 */
export const RequiredAttributeBehavior = {
  NOT_REQUIRED: "NOT_REQUIRED",
  REQUIRED_ALWAYS: "REQUIRED_ALWAYS",
} as const;
/**
 * @public
 */
export type RequiredAttributeBehavior = (typeof RequiredAttributeBehavior)[keyof typeof RequiredAttributeBehavior];

/**
 * @public
 * @enum
 */
export const FacetStyle = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type FacetStyle = (typeof FacetStyle)[keyof typeof FacetStyle];

/**
 * @public
 * @enum
 */
export const ObjectType = {
  INDEX: "INDEX",
  LEAF_NODE: "LEAF_NODE",
  NODE: "NODE",
  POLICY: "POLICY",
} as const;
/**
 * @public
 */
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType];

/**
 * @public
 * @enum
 */
export const DirectoryState = {
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DirectoryState = (typeof DirectoryState)[keyof typeof DirectoryState];
