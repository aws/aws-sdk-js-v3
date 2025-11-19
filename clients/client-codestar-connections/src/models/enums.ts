// smithy-typescript generated code
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
export const ProviderType = {
  BITBUCKET: "Bitbucket",
  GITHUB: "GitHub",
  GITHUB_ENTERPRISE_SERVER: "GitHubEnterpriseServer",
  GITLAB: "GitLab",
  GITLAB_SELF_MANAGED: "GitLabSelfManaged",
} as const;
/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * @enum
 */
export const PublishDeploymentStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PublishDeploymentStatus = (typeof PublishDeploymentStatus)[keyof typeof PublishDeploymentStatus];

/**
 * @public
 * @enum
 */
export const SyncConfigurationType = {
  CFN_STACK_SYNC: "CFN_STACK_SYNC",
} as const;
/**
 * @public
 */
export type SyncConfigurationType = (typeof SyncConfigurationType)[keyof typeof SyncConfigurationType];

/**
 * @public
 * @enum
 */
export const TriggerResourceUpdateOn = {
  ANY_CHANGE: "ANY_CHANGE",
  FILE_CHANGE: "FILE_CHANGE",
} as const;
/**
 * @public
 */
export type TriggerResourceUpdateOn = (typeof TriggerResourceUpdateOn)[keyof typeof TriggerResourceUpdateOn];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const RepositorySyncStatus = {
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
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
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ResourceSyncStatus = (typeof ResourceSyncStatus)[keyof typeof ResourceSyncStatus];
