// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResourceShareAssociationType = {
  PRINCIPAL: "PRINCIPAL",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type ResourceShareAssociationType =
  (typeof ResourceShareAssociationType)[keyof typeof ResourceShareAssociationType];

/**
 * @public
 * @enum
 */
export const ResourceShareAssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  ASSOCIATING: "ASSOCIATING",
  DISASSOCIATED: "DISASSOCIATED",
  DISASSOCIATING: "DISASSOCIATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ResourceShareAssociationStatus =
  (typeof ResourceShareAssociationStatus)[keyof typeof ResourceShareAssociationStatus];

/**
 * @public
 * @enum
 */
export const ResourceShareInvitationStatus = {
  ACCEPTED: "ACCEPTED",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ResourceShareInvitationStatus =
  (typeof ResourceShareInvitationStatus)[keyof typeof ResourceShareInvitationStatus];

/**
 * @public
 * @enum
 */
export const PermissionFeatureSet = {
  CREATED_FROM_POLICY: "CREATED_FROM_POLICY",
  PROMOTING_TO_STANDARD: "PROMOTING_TO_STANDARD",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type PermissionFeatureSet = (typeof PermissionFeatureSet)[keyof typeof PermissionFeatureSet];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const PermissionStatus = {
  ATTACHABLE: "ATTACHABLE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UNATTACHABLE: "UNATTACHABLE",
} as const;
/**
 * @public
 */
export type PermissionStatus = (typeof PermissionStatus)[keyof typeof PermissionStatus];

/**
 * @public
 * @enum
 */
export const ResourceShareFeatureSet = {
  CREATED_FROM_POLICY: "CREATED_FROM_POLICY",
  PROMOTING_TO_STANDARD: "PROMOTING_TO_STANDARD",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ResourceShareFeatureSet = (typeof ResourceShareFeatureSet)[keyof typeof ResourceShareFeatureSet];

/**
 * @public
 * @enum
 */
export const ResourceShareStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ResourceShareStatus = (typeof ResourceShareStatus)[keyof typeof ResourceShareStatus];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  OTHER_ACCOUNTS: "OTHER-ACCOUNTS",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 * @enum
 */
export const ResourceRegionScopeFilter = {
  ALL: "ALL",
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type ResourceRegionScopeFilter = (typeof ResourceRegionScopeFilter)[keyof typeof ResourceRegionScopeFilter];

/**
 * @public
 * @enum
 */
export const ResourceRegionScope = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type ResourceRegionScope = (typeof ResourceRegionScope)[keyof typeof ResourceRegionScope];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  PENDING: "PENDING",
  UNAVAILABLE: "UNAVAILABLE",
  ZONAL_RESOURCE_INACCESSIBLE: "ZONAL_RESOURCE_INACCESSIBLE",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const PermissionTypeFilter = {
  ALL: "ALL",
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type PermissionTypeFilter = (typeof PermissionTypeFilter)[keyof typeof PermissionTypeFilter];

/**
 * @public
 * @enum
 */
export const ReplacePermissionAssociationsWorkStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ReplacePermissionAssociationsWorkStatus =
  (typeof ReplacePermissionAssociationsWorkStatus)[keyof typeof ReplacePermissionAssociationsWorkStatus];
