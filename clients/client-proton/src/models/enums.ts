// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EnvironmentAccountConnectionStatus = {
  CONNECTED: "CONNECTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type EnvironmentAccountConnectionStatus =
  (typeof EnvironmentAccountConnectionStatus)[keyof typeof EnvironmentAccountConnectionStatus];

/**
 * @public
 * @enum
 */
export const RepositoryProvider = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
} as const;
/**
 * @public
 */
export type RepositoryProvider = (typeof RepositoryProvider)[keyof typeof RepositoryProvider];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const Provisioning = {
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type Provisioning = (typeof Provisioning)[keyof typeof Provisioning];

/**
 * @public
 * @enum
 */
export const ProvisionedResourceEngine = {
  CLOUDFORMATION: "CLOUDFORMATION",
  TERRAFORM: "TERRAFORM",
} as const;
/**
 * @public
 */
export type ProvisionedResourceEngine = (typeof ProvisionedResourceEngine)[keyof typeof ProvisionedResourceEngine];

/**
 * @public
 * @enum
 */
export const ComponentDeploymentUpdateType = {
  CURRENT_VERSION: "CURRENT_VERSION",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ComponentDeploymentUpdateType =
  (typeof ComponentDeploymentUpdateType)[keyof typeof ComponentDeploymentUpdateType];

/**
 * @public
 * @enum
 */
export const DeploymentTargetResourceType = {
  COMPONENT: "COMPONENT",
  ENVIRONMENT: "ENVIRONMENT",
  SERVICE_INSTANCE: "SERVICE_INSTANCE",
  SERVICE_PIPELINE: "SERVICE_PIPELINE",
} as const;
/**
 * @public
 */
export type DeploymentTargetResourceType =
  (typeof DeploymentTargetResourceType)[keyof typeof DeploymentTargetResourceType];

/**
 * @public
 * @enum
 */
export const EnvironmentAccountConnectionRequesterAccountType = {
  ENVIRONMENT_ACCOUNT: "ENVIRONMENT_ACCOUNT",
  MANAGEMENT_ACCOUNT: "MANAGEMENT_ACCOUNT",
} as const;
/**
 * @public
 */
export type EnvironmentAccountConnectionRequesterAccountType =
  (typeof EnvironmentAccountConnectionRequesterAccountType)[keyof typeof EnvironmentAccountConnectionRequesterAccountType];

/**
 * @public
 * @enum
 */
export const DeploymentUpdateType = {
  CURRENT_VERSION: "CURRENT_VERSION",
  MAJOR_VERSION: "MAJOR_VERSION",
  MINOR_VERSION: "MINOR_VERSION",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type DeploymentUpdateType = (typeof DeploymentUpdateType)[keyof typeof DeploymentUpdateType];

/**
 * @public
 * @enum
 */
export const TemplateVersionStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
  REGISTRATION_IN_PROGRESS: "REGISTRATION_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TemplateVersionStatus = (typeof TemplateVersionStatus)[keyof typeof TemplateVersionStatus];

/**
 * @public
 * @enum
 */
export const SyncType = {
  /**
   *     Syncs services and service instances to Proton.
   *
   */
  SERVICE_SYNC: "SERVICE_SYNC",
  /**
   *     Syncs environment and service templates to Proton.
   *
   */
  TEMPLATE_SYNC: "TEMPLATE_SYNC",
} as const;
/**
 * @public
 */
export type SyncType = (typeof SyncType)[keyof typeof SyncType];

/**
 * @public
 * @enum
 */
export const RepositorySyncStatus = {
  /**
   *     The repository sync attempt has failed.
   *
   */
  FAILED: "FAILED",
  /**
   *    A repository sync attempt has been created and will begin soon.
   *
   */
  INITIATED: "INITIATED",
  /**
   *     A repository sync attempt has started and work is being done to reconcile the branch.
   *
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   *     The repository sync attempt didn't execute and was queued.
   *
   */
  QUEUED: "QUEUED",
  /**
   *     The repository sync attempt has completed successfully.
   *
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type RepositorySyncStatus = (typeof RepositorySyncStatus)[keyof typeof RepositorySyncStatus];

/**
 * @public
 * @enum
 */
export const ResourceSyncStatus = {
  /**
   *     Syncing has failed.
   *
   */
  FAILED: "FAILED",
  /**
   *    A sync attempt has been created and will begin soon.
   *
   */
  INITIATED: "INITIATED",
  /**
   *     Syncing has started and work is being done to reconcile state.
   *
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   *     Syncing has completed successfully.
   *
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ResourceSyncStatus = (typeof ResourceSyncStatus)[keyof typeof ResourceSyncStatus];

/**
 * @public
 * @enum
 */
export const TemplateType = {
  ENVIRONMENT: "ENVIRONMENT",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 * @enum
 */
export const ResourceDeploymentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ResourceDeploymentStatus = (typeof ResourceDeploymentStatus)[keyof typeof ResourceDeploymentStatus];

/**
 * @public
 * @enum
 */
export const ListServiceInstancesFilterBy = {
  CREATED_AT_AFTER: "createdAtAfter",
  CREATED_AT_BEFORE: "createdAtBefore",
  DEPLOYED_TEMPLATE_VERSION_STATUS: "deployedTemplateVersionStatus",
  DEPLOYMENT_STATUS: "deploymentStatus",
  ENVIRONMENT_NAME: "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT_AFTER: "lastDeploymentAttemptedAtAfter",
  LAST_DEPLOYMENT_ATTEMPTED_AT_BEFORE: "lastDeploymentAttemptedAtBefore",
  NAME: "name",
  SERVICE_NAME: "serviceName",
  TEMPLATE_NAME: "templateName",
} as const;
/**
 * @public
 */
export type ListServiceInstancesFilterBy =
  (typeof ListServiceInstancesFilterBy)[keyof typeof ListServiceInstancesFilterBy];

/**
 * @public
 * @enum
 */
export const ListServiceInstancesSortBy = {
  CREATED_AT: "createdAt",
  DEPLOYMENT_STATUS: "deploymentStatus",
  ENVIRONMENT_NAME: "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT: "lastDeploymentAttemptedAt",
  NAME: "name",
  SERVICE_NAME: "serviceName",
  TEMPLATE_NAME: "templateName",
} as const;
/**
 * @public
 */
export type ListServiceInstancesSortBy = (typeof ListServiceInstancesSortBy)[keyof typeof ListServiceInstancesSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_FAILED_CLEANUP_COMPLETE: "CREATE_FAILED_CLEANUP_COMPLETE",
  CREATE_FAILED_CLEANUP_FAILED: "CREATE_FAILED_CLEANUP_FAILED",
  CREATE_FAILED_CLEANUP_IN_PROGRESS: "CREATE_FAILED_CLEANUP_IN_PROGRESS",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE_CLEANUP_FAILED: "UPDATE_COMPLETE_CLEANUP_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_FAILED_CLEANUP_COMPLETE: "UPDATE_FAILED_CLEANUP_COMPLETE",
  UPDATE_FAILED_CLEANUP_FAILED: "UPDATE_FAILED_CLEANUP_FAILED",
  UPDATE_FAILED_CLEANUP_IN_PROGRESS: "UPDATE_FAILED_CLEANUP_IN_PROGRESS",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * @public
 * @enum
 */
export const BlockerStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type BlockerStatus = (typeof BlockerStatus)[keyof typeof BlockerStatus];

/**
 * @public
 * @enum
 */
export const BlockerType = {
  AUTOMATED: "AUTOMATED",
} as const;
/**
 * @public
 */
export type BlockerType = (typeof BlockerType)[keyof typeof BlockerType];

/**
 * @public
 * @enum
 */
export const ServiceTemplateSupportedComponentSourceType = {
  DIRECTLY_DEFINED: "DIRECTLY_DEFINED",
} as const;
/**
 * @public
 */
export type ServiceTemplateSupportedComponentSourceType =
  (typeof ServiceTemplateSupportedComponentSourceType)[keyof typeof ServiceTemplateSupportedComponentSourceType];
