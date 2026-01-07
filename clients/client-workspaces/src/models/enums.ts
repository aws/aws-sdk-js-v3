// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountLinkStatusEnum = {
  LINKED: "LINKED",
  LINKING_FAILED: "LINKING_FAILED",
  LINK_NOT_FOUND: "LINK_NOT_FOUND",
  PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT: "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type AccountLinkStatusEnum = (typeof AccountLinkStatusEnum)[keyof typeof AccountLinkStatusEnum];

/**
 * @public
 * @enum
 */
export const AccessEndpointType = {
  STREAMING_WSP: "STREAMING_WSP",
} as const;
/**
 * @public
 */
export type AccessEndpointType = (typeof AccessEndpointType)[keyof typeof AccessEndpointType];

/**
 * @public
 * @enum
 */
export const InternetFallbackProtocol = {
  PCOIP: "PCOIP",
} as const;
/**
 * @public
 */
export type InternetFallbackProtocol = (typeof InternetFallbackProtocol)[keyof typeof InternetFallbackProtocol];

/**
 * @public
 * @enum
 */
export const AccessPropertyValue = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type AccessPropertyValue = (typeof AccessPropertyValue)[keyof typeof AccessPropertyValue];

/**
 * @public
 * @enum
 */
export const DedicatedTenancySupportResultEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DedicatedTenancySupportResultEnum =
  (typeof DedicatedTenancySupportResultEnum)[keyof typeof DedicatedTenancySupportResultEnum];

/**
 * @public
 * @enum
 */
export const DedicatedTenancyModificationStateEnum = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type DedicatedTenancyModificationStateEnum =
  (typeof DedicatedTenancyModificationStateEnum)[keyof typeof DedicatedTenancyModificationStateEnum];

/**
 * @public
 * @enum
 */
export const AGAModeForDirectoryEnum = {
  DISABLED: "DISABLED",
  ENABLED_AUTO: "ENABLED_AUTO",
} as const;
/**
 * @public
 */
export type AGAModeForDirectoryEnum = (typeof AGAModeForDirectoryEnum)[keyof typeof AGAModeForDirectoryEnum];

/**
 * @public
 * @enum
 */
export const AGAModeForWorkSpaceEnum = {
  DISABLED: "DISABLED",
  ENABLED_AUTO: "ENABLED_AUTO",
  INHERITED: "INHERITED",
} as const;
/**
 * @public
 */
export type AGAModeForWorkSpaceEnum = (typeof AGAModeForWorkSpaceEnum)[keyof typeof AGAModeForWorkSpaceEnum];

/**
 * @public
 * @enum
 */
export const AGAPreferredProtocolForDirectory = {
  NONE: "NONE",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type AGAPreferredProtocolForDirectory =
  (typeof AGAPreferredProtocolForDirectory)[keyof typeof AGAPreferredProtocolForDirectory];

/**
 * @public
 * @enum
 */
export const AGAPreferredProtocolForWorkSpace = {
  INHERITED: "INHERITED",
  NONE: "NONE",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type AGAPreferredProtocolForWorkSpace =
  (typeof AGAPreferredProtocolForWorkSpace)[keyof typeof AGAPreferredProtocolForWorkSpace];

/**
 * @public
 * @enum
 */
export const Application = {
  Microsoft_Office_2016: "Microsoft_Office_2016",
  Microsoft_Office_2019: "Microsoft_Office_2019",
} as const;
/**
 * @public
 */
export type Application = (typeof Application)[keyof typeof Application];

/**
 * @public
 * @enum
 */
export const ApplicationAssociatedResourceType = {
  BUNDLE: "BUNDLE",
  IMAGE: "IMAGE",
  WORKSPACE: "WORKSPACE",
} as const;
/**
 * @public
 */
export type ApplicationAssociatedResourceType =
  (typeof ApplicationAssociatedResourceType)[keyof typeof ApplicationAssociatedResourceType];

/**
 * @public
 * @enum
 */
export const AssociationState = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  INSTALLING: "INSTALLING",
  PENDING_INSTALL: "PENDING_INSTALL",
  PENDING_INSTALL_DEPLOYMENT: "PENDING_INSTALL_DEPLOYMENT",
  PENDING_UNINSTALL: "PENDING_UNINSTALL",
  PENDING_UNINSTALL_DEPLOYMENT: "PENDING_UNINSTALL_DEPLOYMENT",
  REMOVED: "REMOVED",
  UNINSTALLING: "UNINSTALLING",
} as const;
/**
 * @public
 */
export type AssociationState = (typeof AssociationState)[keyof typeof AssociationState];

/**
 * @public
 * @enum
 */
export const AssociationErrorCode = {
  APPLICATION_OLDVERSIONEXIST_FAILURE: "ValidationError.ApplicationOldVersionExists",
  INSUFFICIENT_DISKSPACE: "ValidationError.InsufficientDiskSpace",
  INSUFFICIENT_MEMORY: "ValidationError.InsufficientMemory",
  INTERNAL_SERVER_ERROR: "DeploymentError.InternalServerError",
  UNSUPPORTED_OPERATING_SYSTEM: "ValidationError.UnsupportedOperatingSystem",
  WORKSPACE_UNREACHABLE: "DeploymentError.WorkspaceUnreachable",
} as const;
/**
 * @public
 */
export type AssociationErrorCode = (typeof AssociationErrorCode)[keyof typeof AssociationErrorCode];

/**
 * @public
 * @enum
 */
export const ApplicationSettingsStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApplicationSettingsStatusEnum =
  (typeof ApplicationSettingsStatusEnum)[keyof typeof ApplicationSettingsStatusEnum];

/**
 * @public
 * @enum
 */
export const WorkSpaceAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;
/**
 * @public
 */
export type WorkSpaceAssociatedResourceType =
  (typeof WorkSpaceAssociatedResourceType)[keyof typeof WorkSpaceAssociatedResourceType];

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  ASSOCIATED_WITH_OWNER_ACCOUNT: "ASSOCIATED_WITH_OWNER_ACCOUNT",
  ASSOCIATED_WITH_SHARED_ACCOUNT: "ASSOCIATED_WITH_SHARED_ACCOUNT",
  NOT_ASSOCIATED: "NOT_ASSOCIATED",
  PENDING_ASSOCIATION: "PENDING_ASSOCIATION",
  PENDING_DISASSOCIATION: "PENDING_DISASSOCIATION",
} as const;
/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  SAML: "SAML",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const BundleAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;
/**
 * @public
 */
export type BundleAssociatedResourceType =
  (typeof BundleAssociatedResourceType)[keyof typeof BundleAssociatedResourceType];

/**
 * @public
 * @enum
 */
export const BundleType = {
  REGULAR: "REGULAR",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/**
 * @public
 * @enum
 */
export const Compute = {
  GENERALPURPOSE_4XLARGE: "GENERALPURPOSE_4XLARGE",
  GENERALPURPOSE_8XLARGE: "GENERALPURPOSE_8XLARGE",
  GRAPHICS: "GRAPHICS",
  GRAPHICSPRO: "GRAPHICSPRO",
  GRAPHICSPRO_G4DN: "GRAPHICSPRO_G4DN",
  GRAPHICS_G4DN: "GRAPHICS_G4DN",
  PERFORMANCE: "PERFORMANCE",
  POWER: "POWER",
  POWERPRO: "POWERPRO",
  STANDARD: "STANDARD",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type Compute = (typeof Compute)[keyof typeof Compute];

/**
 * @public
 * @enum
 */
export const WorkspaceBundleState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type WorkspaceBundleState = (typeof WorkspaceBundleState)[keyof typeof WorkspaceBundleState];

/**
 * @public
 * @enum
 */
export const CertificateBasedAuthStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CertificateBasedAuthStatusEnum =
  (typeof CertificateBasedAuthStatusEnum)[keyof typeof CertificateBasedAuthStatusEnum];

/**
 * @public
 * @enum
 */
export const ClientDeviceType = {
  DEVICE_TYPE_ANDROID: "DeviceTypeAndroid",
  DEVICE_TYPE_IOS: "DeviceTypeIos",
  DEVICE_TYPE_LINUX: "DeviceTypeLinux",
  DEVICE_TYPE_OSX: "DeviceTypeOsx",
  DEVICE_TYPE_WEB: "DeviceTypeWeb",
  DEVICE_TYPE_WINDOWS: "DeviceTypeWindows",
} as const;
/**
 * @public
 */
export type ClientDeviceType = (typeof ClientDeviceType)[keyof typeof ClientDeviceType];

/**
 * @public
 * @enum
 */
export const LogUploadEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type LogUploadEnum = (typeof LogUploadEnum)[keyof typeof LogUploadEnum];

/**
 * @public
 * @enum
 */
export const ReconnectEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ReconnectEnum = (typeof ReconnectEnum)[keyof typeof ReconnectEnum];

/**
 * @public
 * @enum
 */
export const ConnectionAliasState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ConnectionAliasState = (typeof ConnectionAliasState)[keyof typeof ConnectionAliasState];

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const DataReplication = {
  NO_REPLICATION: "NO_REPLICATION",
  PRIMARY_AS_SOURCE: "PRIMARY_AS_SOURCE",
} as const;
/**
 * @public
 */
export type DataReplication = (typeof DataReplication)[keyof typeof DataReplication];

/**
 * @public
 * @enum
 */
export const WorkspaceState = {
  ADMIN_MAINTENANCE: "ADMIN_MAINTENANCE",
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  IMPAIRED: "IMPAIRED",
  MAINTENANCE: "MAINTENANCE",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  REBUILDING: "REBUILDING",
  RESTORING: "RESTORING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkspaceState = (typeof WorkspaceState)[keyof typeof WorkspaceState];

/**
 * @public
 * @enum
 */
export const OperatingSystemType = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

/**
 * @public
 * @enum
 */
export const WorkspaceImageRequiredTenancy = {
  DEDICATED: "DEDICATED",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type WorkspaceImageRequiredTenancy =
  (typeof WorkspaceImageRequiredTenancy)[keyof typeof WorkspaceImageRequiredTenancy];

/**
 * @public
 * @enum
 */
export const WorkspaceImageState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type WorkspaceImageState = (typeof WorkspaceImageState)[keyof typeof WorkspaceImageState];

/**
 * @public
 * @enum
 */
export const OperatingSystemName = {
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  RHEL_8: "RHEL_8",
  ROCKY_8: "ROCKY_8",
  UBUNTU_18_04: "UBUNTU_18_04",
  UBUNTU_20_04: "UBUNTU_20_04",
  UBUNTU_22_04: "UBUNTU_22_04",
  UNKNOWN: "UNKNOWN",
  WINDOWS_10: "WINDOWS_10",
  WINDOWS_11: "WINDOWS_11",
  WINDOWS_7: "WINDOWS_7",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
  WINDOWS_SERVER_2022: "WINDOWS_SERVER_2022",
} as const;
/**
 * @public
 */
export type OperatingSystemName = (typeof OperatingSystemName)[keyof typeof OperatingSystemName];

/**
 * @public
 * @enum
 */
export const Protocol = {
  PCOIP: "PCOIP",
  WSP: "WSP",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const RunningMode = {
  ALWAYS_ON: "ALWAYS_ON",
  AUTO_STOP: "AUTO_STOP",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type RunningMode = (typeof RunningMode)[keyof typeof RunningMode];

/**
 * @public
 * @enum
 */
export const ModificationResourceEnum = {
  COMPUTE_TYPE: "COMPUTE_TYPE",
  ROOT_VOLUME: "ROOT_VOLUME",
  USER_VOLUME: "USER_VOLUME",
} as const;
/**
 * @public
 */
export type ModificationResourceEnum = (typeof ModificationResourceEnum)[keyof typeof ModificationResourceEnum];

/**
 * @public
 * @enum
 */
export const ModificationStateEnum = {
  UPDATE_INITIATED: "UPDATE_INITIATED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ModificationStateEnum = (typeof ModificationStateEnum)[keyof typeof ModificationStateEnum];

/**
 * @public
 * @enum
 */
export const StandbyWorkspaceRelationshipType = {
  PRIMARY: "PRIMARY",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type StandbyWorkspaceRelationshipType =
  (typeof StandbyWorkspaceRelationshipType)[keyof typeof StandbyWorkspaceRelationshipType];

/**
 * @public
 * @enum
 */
export const PoolsRunningMode = {
  ALWAYS_ON: "ALWAYS_ON",
  AUTO_STOP: "AUTO_STOP",
} as const;
/**
 * @public
 */
export type PoolsRunningMode = (typeof PoolsRunningMode)[keyof typeof PoolsRunningMode];

/**
 * @public
 * @enum
 */
export const WorkspacesPoolErrorCode = {
  BUNDLE_NOT_FOUND: "BUNDLE_NOT_FOUND",
  DEFAULT_OU_IS_MISSING: "DEFAULT_OU_IS_MISSING",
  DIRECTORY_NOT_FOUND: "DIRECTORY_NOT_FOUND",
  DOMAIN_JOIN_ERROR_ACCESS_DENIED: "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
  DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED: "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
  DOMAIN_JOIN_ERROR_FILE_NOT_FOUND: "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
  DOMAIN_JOIN_ERROR_INVALID_PARAMETER: "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
  DOMAIN_JOIN_ERROR_LOGON_FAILURE: "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
  DOMAIN_JOIN_ERROR_MORE_DATA: "DOMAIN_JOIN_ERROR_MORE_DATA",
  DOMAIN_JOIN_ERROR_NOT_SUPPORTED: "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
  DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN: "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
  DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING: "DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING",
  DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE: "DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE",
  DOMAIN_JOIN_ERROR_SECRET_INVALID: "DOMAIN_JOIN_ERROR_SECRET_INVALID",
  DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND: "DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND",
  DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID: "DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID",
  DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND: "DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND",
  DOMAIN_JOIN_INTERNAL_SERVICE_ERROR: "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
  DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME: "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
  DOMAIN_JOIN_NERR_PASSWORD_EXPIRED: "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
  DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED: "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
  IAM_SERVICE_ROLE_IS_MISSING: "IAM_SERVICE_ROLE_IS_MISSING",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
  IGW_NOT_ATTACHED: "IGW_NOT_ATTACHED",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  INSUFFICIENT_PERMISSIONS_ERROR: "INSUFFICIENT_PERMISSIONS_ERROR",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_SUBNET_CONFIGURATION: "INVALID_SUBNET_CONFIGURATION",
  MACHINE_ROLE_IS_MISSING: "MACHINE_ROLE_IS_MISSING",
  NETWORK_INTERFACE_LIMIT_EXCEEDED: "NETWORK_INTERFACE_LIMIT_EXCEEDED",
  SECURITY_GROUPS_NOT_FOUND: "SECURITY_GROUPS_NOT_FOUND",
  STS_DISABLED_IN_REGION: "STS_DISABLED_IN_REGION",
  SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES: "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE: "WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE",
  WORKSPACES_POOL_STOPPED: "WORKSPACES_POOL_STOPPED",
} as const;
/**
 * @public
 */
export type WorkspacesPoolErrorCode = (typeof WorkspacesPoolErrorCode)[keyof typeof WorkspacesPoolErrorCode];

/**
 * @public
 * @enum
 */
export const WorkspacesPoolState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkspacesPoolState = (typeof WorkspacesPoolState)[keyof typeof WorkspacesPoolState];

/**
 * @public
 * @enum
 */
export const CustomImageProtocol = {
  BYOP: "BYOP",
  DCV: "DCV",
  PCOIP: "PCOIP",
} as const;
/**
 * @public
 */
export type CustomImageProtocol = (typeof CustomImageProtocol)[keyof typeof CustomImageProtocol];

/**
 * @public
 * @enum
 */
export const CustomWorkspaceImageImportState = {
  COMPLETED: "COMPLETED",
  CREATING_TEST_INSTANCE: "CREATING_TEST_INSTANCE",
  ERROR: "ERROR",
  GENERALIZING: "GENERALIZING",
  IMAGE_COMPATIBILITY_CHECKING: "IMAGE_COMPATIBILITY_CHECKING",
  IMAGE_TESTING_GENERALIZATION: "IMAGE_TESTING_GENERALIZATION",
  IMAGE_TESTING_START: "IMAGE_TESTING_START",
  INSTALLING_COMPONENTS: "INSTALLING_COMPONENTS",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  PROCESSING_SOURCE_IMAGE: "PROCESSING_SOURCE_IMAGE",
  PUBLISHING: "PUBLISHING",
  UPDATING_OPERATING_SYSTEM: "UPDATING_OPERATING_SYSTEM",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type CustomWorkspaceImageImportState =
  (typeof CustomWorkspaceImageImportState)[keyof typeof CustomWorkspaceImageImportState];

/**
 * @public
 * @enum
 */
export const DedicatedTenancyAccountType = {
  SOURCE_ACCOUNT: "SOURCE_ACCOUNT",
  TARGET_ACCOUNT: "TARGET_ACCOUNT",
} as const;
/**
 * @public
 */
export type DedicatedTenancyAccountType =
  (typeof DedicatedTenancyAccountType)[keyof typeof DedicatedTenancyAccountType];

/**
 * @public
 * @enum
 */
export const DedicatedTenancySupportEnum = {
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DedicatedTenancySupportEnum =
  (typeof DedicatedTenancySupportEnum)[keyof typeof DedicatedTenancySupportEnum];

/**
 * @public
 * @enum
 */
export const DeletableCertificateBasedAuthProperty = {
  CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN: "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN",
} as const;
/**
 * @public
 */
export type DeletableCertificateBasedAuthProperty =
  (typeof DeletableCertificateBasedAuthProperty)[keyof typeof DeletableCertificateBasedAuthProperty];

/**
 * @public
 * @enum
 */
export const DeletableSamlProperty = {
  SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME: "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME",
  SAML_PROPERTIES_USER_ACCESS_URL: "SAML_PROPERTIES_USER_ACCESS_URL",
} as const;
/**
 * @public
 */
export type DeletableSamlProperty = (typeof DeletableSamlProperty)[keyof typeof DeletableSamlProperty];

/**
 * @public
 * @enum
 */
export const WorkSpaceApplicationLicenseType = {
  LICENSED: "LICENSED",
  UNLICENSED: "UNLICENSED",
} as const;
/**
 * @public
 */
export type WorkSpaceApplicationLicenseType =
  (typeof WorkSpaceApplicationLicenseType)[keyof typeof WorkSpaceApplicationLicenseType];

/**
 * @public
 * @enum
 */
export const WorkSpaceApplicationState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
  UNINSTALL_ONLY: "UNINSTALL_ONLY",
} as const;
/**
 * @public
 */
export type WorkSpaceApplicationState = (typeof WorkSpaceApplicationState)[keyof typeof WorkSpaceApplicationState];

/**
 * @public
 * @enum
 */
export const ImageAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;
/**
 * @public
 */
export type ImageAssociatedResourceType =
  (typeof ImageAssociatedResourceType)[keyof typeof ImageAssociatedResourceType];

/**
 * @public
 * @enum
 */
export const DescribeWorkspaceDirectoriesFilterName = {
  USER_IDENTITY_TYPE: "USER_IDENTITY_TYPE",
  WORKSPACE_TYPE: "WORKSPACE_TYPE",
} as const;
/**
 * @public
 */
export type DescribeWorkspaceDirectoriesFilterName =
  (typeof DescribeWorkspaceDirectoriesFilterName)[keyof typeof DescribeWorkspaceDirectoriesFilterName];

/**
 * @public
 * @enum
 */
export const WorkspaceDirectoryType = {
  AD_CONNECTOR: "AD_CONNECTOR",
  AWS_IAM_IDENTITY_CENTER: "AWS_IAM_IDENTITY_CENTER",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  SIMPLE_AD: "SIMPLE_AD",
} as const;
/**
 * @public
 */
export type WorkspaceDirectoryType = (typeof WorkspaceDirectoryType)[keyof typeof WorkspaceDirectoryType];

/**
 * @public
 * @enum
 */
export const EndpointEncryptionMode = {
  FIPS_VALIDATED: "FIPS_VALIDATED",
  STANDARD_TLS: "STANDARD_TLS",
} as const;
/**
 * @public
 */
export type EndpointEncryptionMode = (typeof EndpointEncryptionMode)[keyof typeof EndpointEncryptionMode];

/**
 * @public
 * @enum
 */
export const SamlStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK: "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
} as const;
/**
 * @public
 */
export type SamlStatusEnum = (typeof SamlStatusEnum)[keyof typeof SamlStatusEnum];

/**
 * @public
 * @enum
 */
export const WorkspaceDirectoryState = {
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  ERROR: "ERROR",
  REGISTERED: "REGISTERED",
  REGISTERING: "REGISTERING",
} as const;
/**
 * @public
 */
export type WorkspaceDirectoryState = (typeof WorkspaceDirectoryState)[keyof typeof WorkspaceDirectoryState];

/**
 * @public
 * @enum
 */
export const StorageConnectorTypeEnum = {
  HOME_FOLDER: "HOME_FOLDER",
} as const;
/**
 * @public
 */
export type StorageConnectorTypeEnum = (typeof StorageConnectorTypeEnum)[keyof typeof StorageConnectorTypeEnum];

/**
 * @public
 * @enum
 */
export const StorageConnectorStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type StorageConnectorStatusEnum = (typeof StorageConnectorStatusEnum)[keyof typeof StorageConnectorStatusEnum];

/**
 * @public
 * @enum
 */
export const StreamingExperiencePreferredProtocolEnum = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type StreamingExperiencePreferredProtocolEnum =
  (typeof StreamingExperiencePreferredProtocolEnum)[keyof typeof StreamingExperiencePreferredProtocolEnum];

/**
 * @public
 * @enum
 */
export const UserSettingActionEnum = {
  CLIPBOARD_COPY_FROM_LOCAL_DEVICE: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
  CLIPBOARD_COPY_TO_LOCAL_DEVICE: "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
  PRINTING_TO_LOCAL_DEVICE: "PRINTING_TO_LOCAL_DEVICE",
  SMART_CARD: "SMART_CARD",
} as const;
/**
 * @public
 */
export type UserSettingActionEnum = (typeof UserSettingActionEnum)[keyof typeof UserSettingActionEnum];

/**
 * @public
 * @enum
 */
export const UserSettingPermissionEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UserSettingPermissionEnum = (typeof UserSettingPermissionEnum)[keyof typeof UserSettingPermissionEnum];

/**
 * @public
 * @enum
 */
export const Tenancy = {
  DEDICATED: "DEDICATED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * @public
 * @enum
 */
export const UserIdentityType = {
  AWS_DIRECTORY_SERVICE: "AWS_DIRECTORY_SERVICE",
  AWS_IAM_IDENTITY_CENTER: "AWS_IAM_IDENTITY_CENTER",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type UserIdentityType = (typeof UserIdentityType)[keyof typeof UserIdentityType];

/**
 * @public
 * @enum
 */
export const WorkspaceType = {
  PERSONAL: "PERSONAL",
  POOLS: "POOLS",
} as const;
/**
 * @public
 */
export type WorkspaceType = (typeof WorkspaceType)[keyof typeof WorkspaceType];

/**
 * @public
 * @enum
 */
export const ImageType = {
  OWNED: "OWNED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 * @enum
 */
export const WorkspaceImageErrorDetailCode = {
  ADDITIONAL_DRIVES_ATTACHED: "AdditionalDrivesAttached",
  ADDITIONAL_DRIVES_PRESENT: "AdditionalDrivesPresent",
  AMAZON_SSM_AGENT_ENABLED: "AmazonSsmAgentEnabled",
  ANTI_VIRUS_INSTALLED: "AntiVirusInstalled",
  APPX_PACKAGES_INSTALLED: "AppXPackagesInstalled",
  AUTO_LOGON_ENABLED: "AutoLogonEnabled",
  AUTO_MOUNT_DISABLED: "AutoMountDisabled",
  AZURE_DOMAIN_JOINED: "AzureDomainJoined",
  DHCP_DISABLED: "DHCPDisabled",
  DISK_FREE_SPACE: "DiskFreeSpace",
  DISK_SIZE_EXCEEDED: "DiskSizeExceeded",
  DOMAIN_ACCOUNT_SERVICES_FOUND: "DomainAccountServicesFound",
  DOMAIN_JOINED: "DomainJoined",
  ENVIRONMENT_VARIABLES_PATH_MISSING_ENTRIES: "EnvironmentVariablesPathMissingEntries",
  FIREWALL_ENABLED: "FirewallEnabled",
  INCOMPATIBLE_MEMORY_INTEGRITY: "MemoryIntegrityIncompatibility",
  INCOMPATIBLE_PARTITIONING: "IncompatiblePartitioning",
  INCOMPATIBLE_PROTOCOL: "ProtocolOSIncompatibility",
  INSUFFICIENT_DISK_SPACE: "InsufficientDiskSpace",
  INSUFFICIENT_REARM_COUNT: "InsufficientRearmCount",
  INVALID_IP: "InvalidIp",
  IN_PLACE_UPGRADE: "InPlaceUpgrade",
  MULTIPLE_BOOT_PARTITION: "MultipleBootPartition",
  MULTIPLE_USER_PROFILES: "MultipleUserProfiles",
  OFFICE_INSTALLED: "OfficeInstalled",
  OS_NOT_SUPPORTED: "OSNotSupported",
  OUTDATED_POWERSHELL_VERSION: "OutdatedPowershellVersion",
  PCOIP_AGENT_INSTALLED: "PCoIPAgentInstalled",
  PENDING_REBOOT: "PendingReboot",
  REALTIME_UNIVERSAL_DISABLED: "RealTimeUniversalDisabled",
  REMOTE_DESKTOP_SERVICES_DISABLED: "RemoteDesktopServicesDisabled",
  RESERVED_STORAGE_IN_USE: "ReservedStorageInUse",
  RESTRICTED_DRIVE_LETTER: "RestrictedDriveLetterInUse",
  SIXTY_FOUR_BIT_OS: "Requires64BitOS",
  STAGED_APPX_PACKAGE: "StagedAppxPackage",
  SYSPREP_FILE_MISSING: "SysPrepFileMissing",
  UEFI_NOT_SUPPORTED: "UEFINotSupported",
  UNKNOWN_ERROR: "UnknownError",
  UNSUPPORTED_OS_UPGRADE: "UnsupportedOsUpgrade",
  UNSUPPORTED_SECURITY_PROTOCOL: "UnsupportedSecurityProtocol",
  USER_PROFILE_MISSING: "UserProfileMissing",
  VMWARE_TOOLS_INSTALLED: "VMWareToolsInstalled",
  WINDOWS_MODULES_INSTALLER_DISABLED: "WindowsModulesInstallerDisabled",
  WINDOWS_UPDATES_ENABLED: "WindowsUpdatesEnabled",
  WINDOWS_UPDATES_REQUIRED: "WindowsUpdatesRequired",
  WORKSPACES_BYOL_ACCOUNT_DISABLED: "WorkspacesBYOLAccountDisabled",
  WORKSPACES_BYOL_ACCOUNT_NOT_FOUND: "WorkspacesBYOLAccountNotFound",
  ZERO_REARM_COUNT: "ZeroRearmCount",
} as const;
/**
 * @public
 */
export type WorkspaceImageErrorDetailCode =
  (typeof WorkspaceImageErrorDetailCode)[keyof typeof WorkspaceImageErrorDetailCode];

/**
 * @public
 * @enum
 */
export const DescribeWorkspacesPoolsFilterName = {
  POOLNAME: "PoolName",
} as const;
/**
 * @public
 */
export type DescribeWorkspacesPoolsFilterName =
  (typeof DescribeWorkspacesPoolsFilterName)[keyof typeof DescribeWorkspacesPoolsFilterName];

/**
 * @public
 * @enum
 */
export const DescribeWorkspacesPoolsFilterOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOTCONTAINS: "NOTCONTAINS",
  NOTEQUALS: "NOTEQUALS",
} as const;
/**
 * @public
 */
export type DescribeWorkspacesPoolsFilterOperator =
  (typeof DescribeWorkspacesPoolsFilterOperator)[keyof typeof DescribeWorkspacesPoolsFilterOperator];

/**
 * @public
 * @enum
 */
export const SessionConnectionState = {
  CONNECTED: "CONNECTED",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;
/**
 * @public
 */
export type SessionConnectionState = (typeof SessionConnectionState)[keyof typeof SessionConnectionState];

/**
 * @public
 * @enum
 */
export const ImageComputeType = {
  BASE: "BASE",
  GRAPHICS_G4DN: "GRAPHICS_G4DN",
} as const;
/**
 * @public
 */
export type ImageComputeType = (typeof ImageComputeType)[keyof typeof ImageComputeType];

/**
 * @public
 * @enum
 */
export const OSVersion = {
  Windows_10: "Windows_10",
  Windows_11: "Windows_11",
} as const;
/**
 * @public
 */
export type OSVersion = (typeof OSVersion)[keyof typeof OSVersion];

/**
 * @public
 * @enum
 */
export const Platform = {
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const WorkspaceImageIngestionProcess = {
  BYOL_GRAPHICS: "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO: "BYOL_GRAPHICSPRO",
  BYOL_GRAPHICS_G4DN: "BYOL_GRAPHICS_G4DN",
  BYOL_GRAPHICS_G4DN_BYOP: "BYOL_GRAPHICS_G4DN_BYOP",
  BYOL_GRAPHICS_G4DN_WSP: "BYOL_GRAPHICS_G4DN_WSP",
  BYOL_REGULAR: "BYOL_REGULAR",
  BYOL_REGULAR_BYOP: "BYOL_REGULAR_BYOP",
  BYOL_REGULAR_WSP: "BYOL_REGULAR_WSP",
} as const;
/**
 * @public
 */
export type WorkspaceImageIngestionProcess =
  (typeof WorkspaceImageIngestionProcess)[keyof typeof WorkspaceImageIngestionProcess];

/**
 * @public
 * @enum
 */
export const TargetWorkspaceState = {
  ADMIN_MAINTENANCE: "ADMIN_MAINTENANCE",
  AVAILABLE: "AVAILABLE",
} as const;
/**
 * @public
 */
export type TargetWorkspaceState = (typeof TargetWorkspaceState)[keyof typeof TargetWorkspaceState];
