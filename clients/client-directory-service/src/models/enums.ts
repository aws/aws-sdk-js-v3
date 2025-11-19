// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ShareMethod = {
  HANDSHAKE: "HANDSHAKE",
  ORGANIZATIONS: "ORGANIZATIONS",
} as const;
/**
 * @public
 */
export type ShareMethod = (typeof ShareMethod)[keyof typeof ShareMethod];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  DELETED: "Deleted",
  DELETING: "Deleting",
  PENDING_ACCEPTANCE: "PendingAcceptance",
  REJECTED: "Rejected",
  REJECTING: "Rejecting",
  REJECT_FAILED: "RejectFailed",
  SHARED: "Shared",
  SHARE_FAILED: "ShareFailed",
  SHARING: "Sharing",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const CaEnrollmentPolicyStatus = {
  DISABLED: "Disabled",
  DISABLING: "Disabling",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  IN_PROGRESS: "InProgress",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type CaEnrollmentPolicyStatus = (typeof CaEnrollmentPolicyStatus)[keyof typeof CaEnrollmentPolicyStatus];

/**
 * @public
 * @enum
 */
export const CertificateState = {
  DEREGISTERED: "Deregistered",
  DEREGISTERING: "Deregistering",
  DEREGISTER_FAILED: "DeregisterFailed",
  REGISTERED: "Registered",
  REGISTERING: "Registering",
  REGISTER_FAILED: "RegisterFailed",
} as const;
/**
 * @public
 */
export type CertificateState = (typeof CertificateState)[keyof typeof CertificateState];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  CLIENT_CERT_AUTH: "ClientCertAuth",
  CLIENT_LDAPS: "ClientLDAPS",
} as const;
/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const ClientAuthenticationStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ClientAuthenticationStatus = (typeof ClientAuthenticationStatus)[keyof typeof ClientAuthenticationStatus];

/**
 * @public
 * @enum
 */
export const ClientAuthenticationType = {
  SMART_CARD: "SmartCard",
  SMART_CARD_OR_PASSWORD: "SmartCardOrPassword",
} as const;
/**
 * @public
 */
export type ClientAuthenticationType = (typeof ClientAuthenticationType)[keyof typeof ClientAuthenticationType];

/**
 * @public
 * @enum
 */
export const ReplicationScope = {
  Domain: "Domain",
} as const;
/**
 * @public
 */
export type ReplicationScope = (typeof ReplicationScope)[keyof typeof ReplicationScope];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "Dual-stack",
  IPV4_ONLY: "IPv4",
  IPV6_ONLY: "IPv6",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const DirectorySize = {
  LARGE: "Large",
  SMALL: "Small",
} as const;
/**
 * @public
 */
export type DirectorySize = (typeof DirectorySize)[keyof typeof DirectorySize];

/**
 * @public
 * @enum
 */
export const DirectoryEdition = {
  ENTERPRISE: "Enterprise",
  HYBRID: "Hybrid",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type DirectoryEdition = (typeof DirectoryEdition)[keyof typeof DirectoryEdition];

/**
 * @public
 * @enum
 */
export const SelectiveAuth = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type SelectiveAuth = (typeof SelectiveAuth)[keyof typeof SelectiveAuth];

/**
 * @public
 * @enum
 */
export const TrustDirection = {
  ONE_WAY_INCOMING: "One-Way: Incoming",
  ONE_WAY_OUTGOING: "One-Way: Outgoing",
  TWO_WAY: "Two-Way",
} as const;
/**
 * @public
 */
export type TrustDirection = (typeof TrustDirection)[keyof typeof TrustDirection];

/**
 * @public
 * @enum
 */
export const TrustType = {
  EXTERNAL: "External",
  FOREST: "Forest",
} as const;
/**
 * @public
 */
export type TrustType = (typeof TrustType)[keyof typeof TrustType];

/**
 * @public
 * @enum
 */
export const DataAccessStatus = {
  DISABLED: "Disabled",
  DISABLING: "Disabling",
  ENABLED: "Enabled",
  ENABLING: "Enabling",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type DataAccessStatus = (typeof DataAccessStatus)[keyof typeof DataAccessStatus];

/**
 * @public
 * @enum
 */
export const OSVersion = {
  VERSION_2012: "SERVER_2012",
  VERSION_2019: "SERVER_2019",
} as const;
/**
 * @public
 */
export type OSVersion = (typeof OSVersion)[keyof typeof OSVersion];

/**
 * @public
 * @enum
 */
export const RadiusAuthenticationProtocol = {
  CHAP: "CHAP",
  MSCHAPV1: "MS-CHAPv1",
  MSCHAPV2: "MS-CHAPv2",
  PAP: "PAP",
} as const;
/**
 * @public
 */
export type RadiusAuthenticationProtocol =
  (typeof RadiusAuthenticationProtocol)[keyof typeof RadiusAuthenticationProtocol];

/**
 * @public
 * @enum
 */
export const RadiusStatus = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type RadiusStatus = (typeof RadiusStatus)[keyof typeof RadiusStatus];

/**
 * @public
 * @enum
 */
export const DirectoryStage = {
  ACTIVE: "Active",
  CREATED: "Created",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  INOPERABLE: "Inoperable",
  REQUESTED: "Requested",
  RESTOREFAILED: "RestoreFailed",
  RESTORING: "Restoring",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type DirectoryStage = (typeof DirectoryStage)[keyof typeof DirectoryStage];

/**
 * @public
 * @enum
 */
export const DirectoryType = {
  AD_CONNECTOR: "ADConnector",
  MICROSOFT_AD: "MicrosoftAD",
  SHARED_MICROSOFT_AD: "SharedMicrosoftAD",
  SIMPLE_AD: "SimpleAD",
} as const;
/**
 * @public
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

/**
 * @public
 * @enum
 */
export const DomainControllerStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  RESTORING: "Restoring",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type DomainControllerStatus = (typeof DomainControllerStatus)[keyof typeof DomainControllerStatus];

/**
 * @public
 * @enum
 */
export const TopicStatus = {
  DELETED: "Deleted",
  FAILED: "Failed",
  REGISTERED: "Registered",
  TOPIC_NOT_FOUND: "Topic not found",
} as const;
/**
 * @public
 */
export type TopicStatus = (typeof TopicStatus)[keyof typeof TopicStatus];

/**
 * @public
 * @enum
 */
export const HybridUpdateType = {
  HYBRID_ADMINISTRATOR_ACCOUNT: "HybridAdministratorAccount",
  SELF_MANAGED_INSTANCES: "SelfManagedInstances",
} as const;
/**
 * @public
 */
export type HybridUpdateType = (typeof HybridUpdateType)[keyof typeof HybridUpdateType];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const LDAPSType = {
  CLIENT: "Client",
} as const;
/**
 * @public
 */
export type LDAPSType = (typeof LDAPSType)[keyof typeof LDAPSType];

/**
 * @public
 * @enum
 */
export const LDAPSStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  ENABLE_FAILED: "EnableFailed",
  ENABLING: "Enabling",
} as const;
/**
 * @public
 */
export type LDAPSStatus = (typeof LDAPSStatus)[keyof typeof LDAPSStatus];

/**
 * @public
 * @enum
 */
export const RegionType = {
  ADDITIONAL: "Additional",
  PRIMARY: "Primary",
} as const;
/**
 * @public
 */
export type RegionType = (typeof RegionType)[keyof typeof RegionType];

/**
 * @public
 * @enum
 */
export const DirectoryConfigurationStatus = {
  DEFAULT: "Default",
  FAILED: "Failed",
  REQUESTED: "Requested",
  UPDATED: "Updated",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type DirectoryConfigurationStatus =
  (typeof DirectoryConfigurationStatus)[keyof typeof DirectoryConfigurationStatus];

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * @enum
 */
export const SnapshotType = {
  AUTO: "Auto",
  MANUAL: "Manual",
} as const;
/**
 * @public
 */
export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

/**
 * @public
 * @enum
 */
export const TrustState = {
  CREATED: "Created",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
  VERIFIED: "Verified",
  VERIFYING: "Verifying",
  VERIFY_FAILED: "VerifyFailed",
} as const;
/**
 * @public
 */
export type TrustState = (typeof TrustState)[keyof typeof TrustState];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  NETWORK: "NETWORK",
  OS: "OS",
  SIZE: "SIZE",
} as const;
/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 * @enum
 */
export const IpRouteStatusMsg = {
  ADDED: "Added",
  ADDING: "Adding",
  ADD_FAILED: "AddFailed",
  REMOVED: "Removed",
  REMOVE_FAILED: "RemoveFailed",
  REMOVING: "Removing",
} as const;
/**
 * @public
 */
export type IpRouteStatusMsg = (typeof IpRouteStatusMsg)[keyof typeof IpRouteStatusMsg];

/**
 * @public
 * @enum
 */
export const SchemaExtensionStatus = {
  CANCELLED: "Cancelled",
  CANCEL_IN_PROGRESS: "CancelInProgress",
  COMPLETED: "Completed",
  CREATING_SNAPSHOT: "CreatingSnapshot",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  REPLICATING: "Replicating",
  ROLLBACK_IN_PROGRESS: "RollbackInProgress",
  UPDATING_SCHEMA: "UpdatingSchema",
} as const;
/**
 * @public
 */
export type SchemaExtensionStatus = (typeof SchemaExtensionStatus)[keyof typeof SchemaExtensionStatus];

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];
