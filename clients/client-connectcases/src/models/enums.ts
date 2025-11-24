// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RelatedItemType = {
  COMMENT: "Comment",
  CONNECT_CASE: "ConnectCase",
  CONTACT: "Contact",
  CUSTOM: "Custom",
  FILE: "File",
  SLA: "Sla",
} as const;
/**
 * @public
 */
export type RelatedItemType = (typeof RelatedItemType)[keyof typeof RelatedItemType];

/**
 * @public
 * @enum
 */
export const AuditEventType = {
  CASE_CREATED: "Case.Created",
  CASE_UPDATED: "Case.Updated",
  RELATED_ITEM_CREATED: "RelatedItem.Created",
} as const;
/**
 * @public
 */
export type AuditEventType = (typeof AuditEventType)[keyof typeof AuditEventType];

/**
 * @public
 * @enum
 */
export const CommentBodyTextType = {
  PLAINTEXT: "Text/Plain",
} as const;
/**
 * @public
 */
export type CommentBodyTextType = (typeof CommentBodyTextType)[keyof typeof CommentBodyTextType];

/**
 * @public
 * @enum
 */
export const SlaType = {
  CASE_FIELD: "CaseField",
} as const;
/**
 * @public
 */
export type SlaType = (typeof SlaType)[keyof typeof SlaType];

/**
 * @public
 * @enum
 */
export const SlaStatus = {
  ACTIVE: "Active",
  MET: "Met",
  NOT_MET: "NotMet",
  OVERDUE: "Overdue",
} as const;
/**
 * @public
 */
export type SlaStatus = (typeof SlaStatus)[keyof typeof SlaStatus];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "Asc",
  DESCENDING: "Desc",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const RuleType = {
  FIELD_OPTIONS: "FieldOptions",
  HIDDEN: "Hidden",
  REQUIRED: "Required",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "Active",
  CREATION_FAILED: "CreationFailed",
  CREATION_IN_PROGRESS: "CreationInProgress",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const SearchAllRelatedItemsSortProperty = {
  ASSOCIATION_TIME: "AssociationTime",
  CASE_ID: "CaseId",
} as const;
/**
 * @public
 */
export type SearchAllRelatedItemsSortProperty =
  (typeof SearchAllRelatedItemsSortProperty)[keyof typeof SearchAllRelatedItemsSortProperty];

/**
 * @public
 * @enum
 */
export const FieldNamespace = {
  CUSTOM: "Custom",
  SYSTEM: "System",
} as const;
/**
 * @public
 */
export type FieldNamespace = (typeof FieldNamespace)[keyof typeof FieldNamespace];

/**
 * @public
 * @enum
 */
export const FieldType = {
  BOOLEAN: "Boolean",
  DATE_TIME: "DateTime",
  NUMBER: "Number",
  SINGLE_SELECT: "SingleSelect",
  TEXT: "Text",
  URL: "Url",
  USER: "User",
} as const;
/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * @enum
 */
export const TemplateStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];
