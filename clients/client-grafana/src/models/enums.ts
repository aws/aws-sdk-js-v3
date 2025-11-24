// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountAccessType = {
  /**
   * Indicates that the customer is using Grafana to monitor resources in their current account.
   */
  CURRENT_ACCOUNT: "CURRENT_ACCOUNT",
  /**
   * Indicates that the customer is using Grafana to monitor resources in organizational units.
   */
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type AccountAccessType = (typeof AccountAccessType)[keyof typeof AccountAccessType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const LicenseType = {
  /**
   * Grafana Enterprise License.
   */
  ENTERPRISE: "ENTERPRISE",
  /**
   * Grafana Enterprise Free Trial License.
   */
  ENTERPRISE_FREE_TRIAL: "ENTERPRISE_FREE_TRIAL",
} as const;
/**
 * @public
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

/**
 * @public
 * @enum
 */
export const AuthenticationProviderTypes = {
  /**
   * Indicates that AMG workspace has AWS SSO enabled as its authentication provider.
   */
  AWS_SSO: "AWS_SSO",
  /**
   * Indicates that the AMG workspace has SAML enabled as its authentication provider.
   */
  SAML: "SAML",
} as const;
/**
 * @public
 */
export type AuthenticationProviderTypes =
  (typeof AuthenticationProviderTypes)[keyof typeof AuthenticationProviderTypes];

/**
 * @public
 * @enum
 */
export const SamlConfigurationStatus = {
  /**
   * Indicates that SAML on an AMG workspace is enabled and has been configured.
   */
  CONFIGURED: "CONFIGURED",
  /**
   * Indicates that SAML on an AMG workspace is enabled but has not been configured.
   */
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;
/**
 * @public
 */
export type SamlConfigurationStatus = (typeof SamlConfigurationStatus)[keyof typeof SamlConfigurationStatus];

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  /**
   * Amazon OpenSearch Service
   */
  AMAZON_OPENSEARCH_SERVICE: "AMAZON_OPENSEARCH_SERVICE",
  /**
   * Amazon Athena
   */
  ATHENA: "ATHENA",
  /**
   * CloudWatch Logs
   */
  CLOUDWATCH: "CLOUDWATCH",
  /**
   * Managed Prometheus
   */
  PROMETHEUS: "PROMETHEUS",
  /**
   * Redshift
   */
  REDSHIFT: "REDSHIFT",
  /**
   * IoT SiteWise
   */
  SITEWISE: "SITEWISE",
  /**
   * Timestream
   */
  TIMESTREAM: "TIMESTREAM",
  /**
   * IoT TwinMaker
   */
  TWINMAKER: "TWINMAKER",
  /**
   * X-Ray
   */
  XRAY: "XRAY",
} as const;
/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 * @enum
 */
export const NotificationDestinationType = {
  /**
   * AWS Simple Notification Service
   */
  SNS: "SNS",
} as const;
/**
 * @public
 */
export type NotificationDestinationType =
  (typeof NotificationDestinationType)[keyof typeof NotificationDestinationType];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  /**
   * Customer Managed
   */
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  /**
   * Service Managed
   */
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const WorkspaceStatus = {
  /**
   * Workspace is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Workspace is being created.
   */
  CREATING: "CREATING",
  /**
   * Workspace creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Workspace is being deleted.
   */
  DELETING: "DELETING",
  /**
   * Workspace deletion failed.
   */
  DELETION_FAILED: "DELETION_FAILED",
  /**
   * Workspace is in an invalid state, it can only and should be deleted.
   */
  FAILED: "FAILED",
  /**
   * Failed to remove enterprise license from workspace.
   */
  LICENSE_REMOVAL_FAILED: "LICENSE_REMOVAL_FAILED",
  /**
   * Workspace update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Workspace is being updated.
   */
  UPDATING: "UPDATING",
  /**
   * Workspace upgrade failed.
   */
  UPGRADE_FAILED: "UPGRADE_FAILED",
  /**
   * Workspace is being upgraded to enterprise.
   */
  UPGRADING: "UPGRADING",
  /**
   * Workspace version update failed.
   */
  VERSION_UPDATE_FAILED: "VERSION_UPDATE_FAILED",
  /**
   * Workspace version is being updated.
   */
  VERSION_UPDATING: "VERSION_UPDATING",
} as const;
/**
 * @public
 */
export type WorkspaceStatus = (typeof WorkspaceStatus)[keyof typeof WorkspaceStatus];

/**
 * @public
 * @enum
 */
export const UserType = {
  /**
   * SSO group.
   */
  SSO_GROUP: "SSO_GROUP",
  /**
   * SSO user.
   */
  SSO_USER: "SSO_USER",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const Role = {
  /**
   * Role Admin.
   */
  ADMIN: "ADMIN",
  /**
   * Role Editor.
   */
  EDITOR: "EDITOR",
  /**
   * Role Viewer.
   */
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 * @enum
 */
export const UpdateAction = {
  /**
   * Add permissions.
   */
  ADD: "ADD",
  /**
   * Revoke permissions.
   */
  REVOKE: "REVOKE",
} as const;
/**
 * @public
 */
export type UpdateAction = (typeof UpdateAction)[keyof typeof UpdateAction];
