// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessEndpointType = {
  STREAMING: "STREAMING",
} as const;
/**
 * @public
 */
export type AccessEndpointType = (typeof AccessEndpointType)[keyof typeof AccessEndpointType];

/**
 * @public
 * @enum
 */
export const Action = {
  AUTO_TIME_ZONE_REDIRECTION: "AUTO_TIME_ZONE_REDIRECTION",
  CLIPBOARD_COPY_FROM_LOCAL_DEVICE: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
  CLIPBOARD_COPY_TO_LOCAL_DEVICE: "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
  DOMAIN_PASSWORD_SIGNIN: "DOMAIN_PASSWORD_SIGNIN",
  DOMAIN_SMART_CARD_SIGNIN: "DOMAIN_SMART_CARD_SIGNIN",
  FILE_DOWNLOAD: "FILE_DOWNLOAD",
  FILE_UPLOAD: "FILE_UPLOAD",
  PRINTING_TO_LOCAL_DEVICE: "PRINTING_TO_LOCAL_DEVICE",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const AgentSoftwareVersion = {
  ALWAYS_LATEST: "ALWAYS_LATEST",
  CURRENT_LATEST: "CURRENT_LATEST",
} as const;
/**
 * @public
 */
export type AgentSoftwareVersion = (typeof AgentSoftwareVersion)[keyof typeof AgentSoftwareVersion];

/**
 * @public
 * @enum
 */
export const PackagingType = {
  APPSTREAM2: "APPSTREAM2",
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type PackagingType = (typeof PackagingType)[keyof typeof PackagingType];

/**
 * @public
 * @enum
 */
export const AppBlockState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AppBlockState = (typeof AppBlockState)[keyof typeof AppBlockState];

/**
 * @public
 * @enum
 */
export const FleetErrorCode = {
  DOMAIN_JOIN_ERROR_ACCESS_DENIED: "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
  DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED: "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
  DOMAIN_JOIN_ERROR_FILE_NOT_FOUND: "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
  DOMAIN_JOIN_ERROR_INVALID_PARAMETER: "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
  DOMAIN_JOIN_ERROR_LOGON_FAILURE: "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
  DOMAIN_JOIN_ERROR_MORE_DATA: "DOMAIN_JOIN_ERROR_MORE_DATA",
  DOMAIN_JOIN_ERROR_NOT_SUPPORTED: "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
  DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN: "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
  DOMAIN_JOIN_INTERNAL_SERVICE_ERROR: "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
  DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME: "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
  DOMAIN_JOIN_NERR_PASSWORD_EXPIRED: "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
  DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED: "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
  FLEET_INSTANCE_PROVISIONING_FAILURE: "FLEET_INSTANCE_PROVISIONING_FAILURE",
  FLEET_STOPPED: "FLEET_STOPPED",
  IAM_SERVICE_ROLE_IS_MISSING: "IAM_SERVICE_ROLE_IS_MISSING",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
  IGW_NOT_ATTACHED: "IGW_NOT_ATTACHED",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_SUBNET_CONFIGURATION: "INVALID_SUBNET_CONFIGURATION",
  MACHINE_ROLE_IS_MISSING: "MACHINE_ROLE_IS_MISSING",
  NETWORK_INTERFACE_LIMIT_EXCEEDED: "NETWORK_INTERFACE_LIMIT_EXCEEDED",
  SECURITY_GROUPS_NOT_FOUND: "SECURITY_GROUPS_NOT_FOUND",
  STS_DISABLED_IN_REGION: "STS_DISABLED_IN_REGION",
  SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES: "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type FleetErrorCode = (typeof FleetErrorCode)[keyof typeof FleetErrorCode];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderPlatformType = {
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
} as const;
/**
 * @public
 */
export type AppBlockBuilderPlatformType =
  (typeof AppBlockBuilderPlatformType)[keyof typeof AppBlockBuilderPlatformType];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderState = {
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type AppBlockBuilderState = (typeof AppBlockBuilderState)[keyof typeof AppBlockBuilderState];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderStateChangeReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type AppBlockBuilderStateChangeReasonCode =
  (typeof AppBlockBuilderStateChangeReasonCode)[keyof typeof AppBlockBuilderStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderAttribute = {
  ACCESS_ENDPOINTS: "ACCESS_ENDPOINTS",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  VPC_CONFIGURATION_SECURITY_GROUP_IDS: "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
} as const;
/**
 * @public
 */
export type AppBlockBuilderAttribute = (typeof AppBlockBuilderAttribute)[keyof typeof AppBlockBuilderAttribute];

/**
 * @public
 * @enum
 */
export const PlatformType = {
  AMAZON_LINUX2: "AMAZON_LINUX2",
  RHEL8: "RHEL8",
  ROCKY_LINUX8: "ROCKY_LINUX8",
  WINDOWS: "WINDOWS",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
  WINDOWS_SERVER_2022: "WINDOWS_SERVER_2022",
} as const;
/**
 * @public
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

/**
 * @public
 * @enum
 */
export const ApplicationAttribute = {
  LAUNCH_PARAMETERS: "LAUNCH_PARAMETERS",
  WORKING_DIRECTORY: "WORKING_DIRECTORY",
} as const;
/**
 * @public
 */
export type ApplicationAttribute = (typeof ApplicationAttribute)[keyof typeof ApplicationAttribute];

/**
 * @public
 * @enum
 */
export const AppVisibility = {
  ALL: "ALL",
  ASSOCIATED: "ASSOCIATED",
} as const;
/**
 * @public
 */
export type AppVisibility = (typeof AppVisibility)[keyof typeof AppVisibility];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  API: "API",
  AWS_AD: "AWS_AD",
  SAML: "SAML",
  USERPOOL: "USERPOOL",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const UserStackAssociationErrorCode = {
  DIRECTORY_NOT_FOUND: "DIRECTORY_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STACK_NOT_FOUND: "STACK_NOT_FOUND",
  USER_NAME_NOT_FOUND: "USER_NAME_NOT_FOUND",
} as const;
/**
 * @public
 */
export type UserStackAssociationErrorCode =
  (typeof UserStackAssociationErrorCode)[keyof typeof UserStackAssociationErrorCode];

/**
 * @public
 * @enum
 */
export const CertificateBasedAuthStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_NO_DIRECTORY_LOGIN_FALLBACK: "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
} as const;
/**
 * @public
 */
export type CertificateBasedAuthStatus = (typeof CertificateBasedAuthStatus)[keyof typeof CertificateBasedAuthStatus];

/**
 * @public
 * @enum
 */
export const ExportImageTaskState = {
  COMPLETED: "COMPLETED",
  EXPORTING: "EXPORTING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ExportImageTaskState = (typeof ExportImageTaskState)[keyof typeof ExportImageTaskState];

/**
 * @public
 * @enum
 */
export const FleetType = {
  ALWAYS_ON: "ALWAYS_ON",
  ELASTIC: "ELASTIC",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 * @enum
 */
export const StreamView = {
  APP: "APP",
  DESKTOP: "DESKTOP",
} as const;
/**
 * @public
 */
export type StreamView = (typeof StreamView)[keyof typeof StreamView];

/**
 * @public
 * @enum
 */
export const FleetState = {
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type FleetState = (typeof FleetState)[keyof typeof FleetState];

/**
 * @public
 * @enum
 */
export const LatestAppstreamAgentVersion = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type LatestAppstreamAgentVersion =
  (typeof LatestAppstreamAgentVersion)[keyof typeof LatestAppstreamAgentVersion];

/**
 * @public
 * @enum
 */
export const ImageBuilderState = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PENDING_IMAGE_IMPORT: "PENDING_IMAGE_IMPORT",
  PENDING_QUALIFICATION: "PENDING_QUALIFICATION",
  PENDING_SYNCING_APPS: "PENDING_SYNCING_APPS",
  REBOOTING: "REBOOTING",
  RUNNING: "RUNNING",
  SNAPSHOTTING: "SNAPSHOTTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SYNCING_APPS: "SYNCING_APPS",
  UPDATING: "UPDATING",
  UPDATING_AGENT: "UPDATING_AGENT",
} as const;
/**
 * @public
 */
export type ImageBuilderState = (typeof ImageBuilderState)[keyof typeof ImageBuilderState];

/**
 * @public
 * @enum
 */
export const ImageBuilderStateChangeReasonCode = {
  IMAGE_UNAVAILABLE: "IMAGE_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type ImageBuilderStateChangeReasonCode =
  (typeof ImageBuilderStateChangeReasonCode)[keyof typeof ImageBuilderStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const DynamicAppProvidersEnabled = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DynamicAppProvidersEnabled = (typeof DynamicAppProvidersEnabled)[keyof typeof DynamicAppProvidersEnabled];

/**
 * @public
 * @enum
 */
export const ImageSharedWithOthers = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type ImageSharedWithOthers = (typeof ImageSharedWithOthers)[keyof typeof ImageSharedWithOthers];

/**
 * @public
 * @enum
 */
export const ImageType = {
  CUSTOM: "CUSTOM",
  NATIVE: "NATIVE",
} as const;
/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 * @enum
 */
export const ImageState = {
  AVAILABLE: "AVAILABLE",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IMPORTING: "IMPORTING",
  PENDING: "PENDING",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

/**
 * @public
 * @enum
 */
export const ImageStateChangeReasonCode = {
  IMAGE_BUILDER_NOT_AVAILABLE: "IMAGE_BUILDER_NOT_AVAILABLE",
  IMAGE_COPY_FAILURE: "IMAGE_COPY_FAILURE",
  IMAGE_IMPORT_FAILURE: "IMAGE_IMPORT_FAILURE",
  IMAGE_UPDATE_FAILURE: "IMAGE_UPDATE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type ImageStateChangeReasonCode = (typeof ImageStateChangeReasonCode)[keyof typeof ImageStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const VisibilityType = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type VisibilityType = (typeof VisibilityType)[keyof typeof VisibilityType];

/**
 * @public
 * @enum
 */
export const StorageConnectorType = {
  GOOGLE_DRIVE: "GOOGLE_DRIVE",
  HOMEFOLDERS: "HOMEFOLDERS",
  ONE_DRIVE: "ONE_DRIVE",
} as const;
/**
 * @public
 */
export type StorageConnectorType = (typeof StorageConnectorType)[keyof typeof StorageConnectorType];

/**
 * @public
 * @enum
 */
export const PreferredProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type PreferredProtocol = (typeof PreferredProtocol)[keyof typeof PreferredProtocol];

/**
 * @public
 * @enum
 */
export const Permission = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const StackErrorCode = {
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  STORAGE_CONNECTOR_ERROR: "STORAGE_CONNECTOR_ERROR",
} as const;
/**
 * @public
 */
export type StackErrorCode = (typeof StackErrorCode)[keyof typeof StackErrorCode];

/**
 * @public
 * @enum
 */
export const ThemeStyling = {
  BLUE: "BLUE",
  LIGHT_BLUE: "LIGHT_BLUE",
  PINK: "PINK",
  RED: "RED",
} as const;
/**
 * @public
 */
export type ThemeStyling = (typeof ThemeStyling)[keyof typeof ThemeStyling];

/**
 * @public
 * @enum
 */
export const ThemeState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ThemeState = (typeof ThemeState)[keyof typeof ThemeState];

/**
 * @public
 * @enum
 */
export const UsageReportSchedule = {
  DAILY: "DAILY",
} as const;
/**
 * @public
 */
export type UsageReportSchedule = (typeof UsageReportSchedule)[keyof typeof UsageReportSchedule];

/**
 * @public
 * @enum
 */
export const MessageAction = {
  RESEND: "RESEND",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type MessageAction = (typeof MessageAction)[keyof typeof MessageAction];

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
export const SessionState = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * @public
 * @enum
 */
export const SoftwareDeploymentStatus = {
  FAILED_TO_INSTALL: "FAILED_TO_INSTALL",
  FAILED_TO_UNINSTALL: "FAILED_TO_UNINSTALL",
  INSTALLED: "INSTALLED",
  PENDING_INSTALLATION: "PENDING_INSTALLATION",
  PENDING_UNINSTALLATION: "PENDING_UNINSTALLATION",
  STAGED_FOR_INSTALLATION: "STAGED_FOR_INSTALLATION",
  STAGED_FOR_UNINSTALLATION: "STAGED_FOR_UNINSTALLATION",
} as const;
/**
 * @public
 */
export type SoftwareDeploymentStatus = (typeof SoftwareDeploymentStatus)[keyof typeof SoftwareDeploymentStatus];

/**
 * @public
 * @enum
 */
export const UsageReportExecutionErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type UsageReportExecutionErrorCode =
  (typeof UsageReportExecutionErrorCode)[keyof typeof UsageReportExecutionErrorCode];

/**
 * @public
 * @enum
 */
export const FleetAttribute = {
  DOMAIN_JOIN_INFO: "DOMAIN_JOIN_INFO",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  MAX_SESSIONS_PER_INSTANCE: "MAX_SESSIONS_PER_INSTANCE",
  SESSION_SCRIPT_S3_LOCATION: "SESSION_SCRIPT_S3_LOCATION",
  USB_DEVICE_FILTER_STRINGS: "USB_DEVICE_FILTER_STRINGS",
  VOLUME_CONFIGURATION: "VOLUME_CONFIGURATION",
  VPC_CONFIGURATION: "VPC_CONFIGURATION",
  VPC_CONFIGURATION_SECURITY_GROUP_IDS: "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
} as const;
/**
 * @public
 */
export type FleetAttribute = (typeof FleetAttribute)[keyof typeof FleetAttribute];

/**
 * @public
 * @enum
 */
export const StackAttribute = {
  ACCESS_ENDPOINTS: "ACCESS_ENDPOINTS",
  EMBED_HOST_DOMAINS: "EMBED_HOST_DOMAINS",
  FEEDBACK_URL: "FEEDBACK_URL",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  REDIRECT_URL: "REDIRECT_URL",
  STORAGE_CONNECTORS: "STORAGE_CONNECTORS",
  STORAGE_CONNECTOR_GOOGLE_DRIVE: "STORAGE_CONNECTOR_GOOGLE_DRIVE",
  STORAGE_CONNECTOR_HOMEFOLDERS: "STORAGE_CONNECTOR_HOMEFOLDERS",
  STORAGE_CONNECTOR_ONE_DRIVE: "STORAGE_CONNECTOR_ONE_DRIVE",
  STREAMING_EXPERIENCE_SETTINGS: "STREAMING_EXPERIENCE_SETTINGS",
  THEME_NAME: "THEME_NAME",
  USER_SETTINGS: "USER_SETTINGS",
} as const;
/**
 * @public
 */
export type StackAttribute = (typeof StackAttribute)[keyof typeof StackAttribute];

/**
 * @public
 * @enum
 */
export const ThemeAttribute = {
  FOOTER_LINKS: "FOOTER_LINKS",
} as const;
/**
 * @public
 */
export type ThemeAttribute = (typeof ThemeAttribute)[keyof typeof ThemeAttribute];
