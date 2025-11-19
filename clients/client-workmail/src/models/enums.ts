// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessControlRuleEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type AccessControlRuleEffect = (typeof AccessControlRuleEffect)[keyof typeof AccessControlRuleEffect];

/**
 * @public
 * @enum
 */
export const AccessEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type AccessEffect = (typeof AccessEffect)[keyof typeof AccessEffect];

/**
 * @public
 * @enum
 */
export const AvailabilityProviderType = {
  EWS: "EWS",
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type AvailabilityProviderType = (typeof AvailabilityProviderType)[keyof typeof AvailabilityProviderType];

/**
 * @public
 * @enum
 */
export const ImpersonationRoleType = {
  FULL_ACCESS: "FULL_ACCESS",
  READ_ONLY: "READ_ONLY",
} as const;
/**
 * @public
 */
export type ImpersonationRoleType = (typeof ImpersonationRoleType)[keyof typeof ImpersonationRoleType];

/**
 * @public
 * @enum
 */
export const MobileDeviceAccessRuleEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type MobileDeviceAccessRuleEffect =
  (typeof MobileDeviceAccessRuleEffect)[keyof typeof MobileDeviceAccessRuleEffect];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EQUIPMENT: "EQUIPMENT",
  ROOM: "ROOM",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const UserRole = {
  REMOTE_USER: "REMOTE_USER",
  RESOURCE: "RESOURCE",
  SYSTEM_USER: "SYSTEM_USER",
  USER: "USER",
} as const;
/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 * @enum
 */
export const MemberType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  GROUP: "GROUP",
  RESOURCE: "RESOURCE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const EntityState = {
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EntityState = (typeof EntityState)[keyof typeof EntityState];

/**
 * @public
 * @enum
 */
export const IdentityProviderAuthenticationMode = {
  IDENTITY_PROVIDER_AND_DIRECTORY: "IDENTITY_PROVIDER_AND_DIRECTORY",
  IDENTITY_PROVIDER_ONLY: "IDENTITY_PROVIDER_ONLY",
} as const;
/**
 * @public
 */
export type IdentityProviderAuthenticationMode =
  (typeof IdentityProviderAuthenticationMode)[keyof typeof IdentityProviderAuthenticationMode];

/**
 * @public
 * @enum
 */
export const PersonalAccessTokenConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type PersonalAccessTokenConfigurationStatus =
  (typeof PersonalAccessTokenConfigurationStatus)[keyof typeof PersonalAccessTokenConfigurationStatus];

/**
 * @public
 * @enum
 */
export const MailboxExportJobState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type MailboxExportJobState = (typeof MailboxExportJobState)[keyof typeof MailboxExportJobState];

/**
 * @public
 * @enum
 */
export const DnsRecordVerificationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type DnsRecordVerificationStatus =
  (typeof DnsRecordVerificationStatus)[keyof typeof DnsRecordVerificationStatus];

/**
 * @public
 * @enum
 */
export const RetentionAction = {
  DELETE: "DELETE",
  NONE: "NONE",
  PERMANENTLY_DELETE: "PERMANENTLY_DELETE",
} as const;
/**
 * @public
 */
export type RetentionAction = (typeof RetentionAction)[keyof typeof RetentionAction];

/**
 * @public
 * @enum
 */
export const FolderName = {
  DELETED_ITEMS: "DELETED_ITEMS",
  DRAFTS: "DRAFTS",
  INBOX: "INBOX",
  JUNK_EMAIL: "JUNK_EMAIL",
  SENT_ITEMS: "SENT_ITEMS",
} as const;
/**
 * @public
 */
export type FolderName = (typeof FolderName)[keyof typeof FolderName];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  FULL_ACCESS: "FULL_ACCESS",
  SEND_AS: "SEND_AS",
  SEND_ON_BEHALF: "SEND_ON_BEHALF",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];
