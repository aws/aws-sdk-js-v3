// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AcceptRuleBehavior = (typeof AcceptRuleBehavior)[keyof typeof AcceptRuleBehavior];

/**
 * @public
 * @enum
 */
export const S3Permission = {
  READ: "READ",
  WRITE: "WRITE",
} as const;
/**
 * @public
 */
export type S3Permission = (typeof S3Permission)[keyof typeof S3Permission];

/**
 * @public
 * @enum
 */
export const SubscriptionRequestStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type SubscriptionRequestStatus = (typeof SubscriptionRequestStatus)[keyof typeof SubscriptionRequestStatus];

/**
 * @public
 * @enum
 */
export const ResolutionStrategy = {
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type ResolutionStrategy = (typeof ResolutionStrategy)[keyof typeof ResolutionStrategy];

/**
 * @public
 * @enum
 */
export const DataZoneEntityType = {
  DOMAIN_UNIT: "DOMAIN_UNIT",
} as const;
/**
 * @public
 */
export type DataZoneEntityType = (typeof DataZoneEntityType)[keyof typeof DataZoneEntityType];

/**
 * @public
 * @enum
 */
export const TargetEntityType = {
  ASSET_TYPE: "ASSET_TYPE",
  DOMAIN_UNIT: "DOMAIN_UNIT",
  ENVIRONMENT_BLUEPRINT_CONFIGURATION: "ENVIRONMENT_BLUEPRINT_CONFIGURATION",
  ENVIRONMENT_PROFILE: "ENVIRONMENT_PROFILE",
} as const;
/**
 * @public
 */
export type TargetEntityType = (typeof TargetEntityType)[keyof typeof TargetEntityType];

/**
 * @public
 * @enum
 */
export const ManagedPolicyType = {
  ADD_TO_PROJECT_MEMBER_POOL: "ADD_TO_PROJECT_MEMBER_POOL",
  CREATE_ASSET_TYPE: "CREATE_ASSET_TYPE",
  CREATE_DOMAIN_UNIT: "CREATE_DOMAIN_UNIT",
  CREATE_ENVIRONMENT: "CREATE_ENVIRONMENT",
  CREATE_ENVIRONMENT_FROM_BLUEPRINT: "CREATE_ENVIRONMENT_FROM_BLUEPRINT",
  CREATE_ENVIRONMENT_PROFILE: "CREATE_ENVIRONMENT_PROFILE",
  CREATE_FORM_TYPE: "CREATE_FORM_TYPE",
  CREATE_GLOSSARY: "CREATE_GLOSSARY",
  CREATE_PROJECT: "CREATE_PROJECT",
  CREATE_PROJECT_FROM_PROJECT_PROFILE: "CREATE_PROJECT_FROM_PROJECT_PROFILE",
  DELEGATE_CREATE_ENVIRONMENT_PROFILE: "DELEGATE_CREATE_ENVIRONMENT_PROFILE",
  OVERRIDE_DOMAIN_UNIT_OWNERS: "OVERRIDE_DOMAIN_UNIT_OWNERS",
  OVERRIDE_PROJECT_OWNERS: "OVERRIDE_PROJECT_OWNERS",
  USE_ASSET_TYPE: "USE_ASSET_TYPE",
} as const;
/**
 * @public
 */
export type ManagedPolicyType = (typeof ManagedPolicyType)[keyof typeof ManagedPolicyType];

/**
 * @public
 * @enum
 */
export const DomainUnitDesignation = {
  OWNER: "OWNER",
} as const;
/**
 * @public
 */
export type DomainUnitDesignation = (typeof DomainUnitDesignation)[keyof typeof DomainUnitDesignation];

/**
 * @public
 * @enum
 */
export const ProjectDesignation = {
  CONTRIBUTOR: "CONTRIBUTOR",
  OWNER: "OWNER",
  PROJECT_CATALOG_STEWARD: "PROJECT_CATALOG_STEWARD",
} as const;
/**
 * @public
 */
export type ProjectDesignation = (typeof ProjectDesignation)[keyof typeof ProjectDesignation];

/**
 * @public
 * @enum
 */
export const ListingStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];

/**
 * @public
 * @enum
 */
export const FilterStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type FilterStatus = (typeof FilterStatus)[keyof typeof FilterStatus];

/**
 * @public
 * @enum
 */
export const RuleScopeSelectionMode = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;
/**
 * @public
 */
export type RuleScopeSelectionMode = (typeof RuleScopeSelectionMode)[keyof typeof RuleScopeSelectionMode];

/**
 * @public
 * @enum
 */
export const GovernedEntityType = {
  ASSET: "ASSET",
} as const;
/**
 * @public
 */
export type GovernedEntityType = (typeof GovernedEntityType)[keyof typeof GovernedEntityType];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  BASIC: "BASIC",
  CUSTOM: "CUSTOM",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const OAuth2GrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  JWT_BEARER: "JWT_BEARER",
} as const;
/**
 * @public
 */
export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  DISABLED: "DISABLED",
  IAM_IDC: "IAM_IDC",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  REVOKED: "REVOKED",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  PUBLISH: "PUBLISH",
  UNPUBLISH: "UNPUBLISH",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ComputeEnvironments = {
  ATHENA: "ATHENA",
  PYTHON: "PYTHON",
  SPARK: "SPARK",
} as const;
/**
 * @public
 */
export type ComputeEnvironments = (typeof ComputeEnvironments)[keyof typeof ComputeEnvironments];

/**
 * @public
 * @enum
 */
export const ConfigurableActionTypeAuthorization = {
  HTTPS: "HTTPS",
  IAM: "IAM",
} as const;
/**
 * @public
 */
export type ConfigurableActionTypeAuthorization =
  (typeof ConfigurableActionTypeAuthorization)[keyof typeof ConfigurableActionTypeAuthorization];

/**
 * @public
 * @enum
 */
export const GlueConnectionType = {
  BIGQUERY: "BIGQUERY",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SQLSERVER: "SQLSERVER",
  TERADATA: "TERADATA",
  VERTICA: "VERTICA",
} as const;
/**
 * @public
 */
export type GlueConnectionType = (typeof GlueConnectionType)[keyof typeof GlueConnectionType];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const HyperPodOrchestrator = {
  EKS: "EKS",
  SLURM: "SLURM",
} as const;
/**
 * @public
 */
export type HyperPodOrchestrator = (typeof HyperPodOrchestrator)[keyof typeof HyperPodOrchestrator];

/**
 * @public
 * @enum
 */
export const GovernanceType = {
  AWS_MANAGED: "AWS_MANAGED",
  USER_MANAGED: "USER_MANAGED",
} as const;
/**
 * @public
 */
export type GovernanceType = (typeof GovernanceType)[keyof typeof GovernanceType];

/**
 * @public
 * @enum
 */
export const ConnectionScope = {
  DOMAIN: "DOMAIN",
  PROJECT: "PROJECT",
} as const;
/**
 * @public
 */
export type ConnectionScope = (typeof ConnectionScope)[keyof typeof ConnectionScope];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  AMAZON_Q: "AMAZON_Q",
  ATHENA: "ATHENA",
  BIGQUERY: "BIGQUERY",
  DATABRICKS: "DATABRICKS",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  HYPERPOD: "HYPERPOD",
  IAM: "IAM",
  MLFLOW: "MLFLOW",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  TERADATA: "TERADATA",
  VERTICA: "VERTICA",
  WORKFLOWS_MWAA: "WORKFLOWS_MWAA",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const Protocol = {
  ATHENA: "ATHENA",
  GLUE_INTERACTIVE_SESSION: "GLUE_INTERACTIVE_SESSION",
  HTTPS: "HTTPS",
  JDBC: "JDBC",
  LIVY: "LIVY",
  ODBC: "ODBC",
  PRISM: "PRISM",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const DataProductItemType = {
  ASSET: "ASSET",
} as const;
/**
 * @public
 */
export type DataProductItemType = (typeof DataProductItemType)[keyof typeof DataProductItemType];

/**
 * @public
 * @enum
 */
export const DataProductStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
} as const;
/**
 * @public
 */
export type DataProductStatus = (typeof DataProductStatus)[keyof typeof DataProductStatus];

/**
 * @public
 * @enum
 */
export const FilterExpressionType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type FilterExpressionType = (typeof FilterExpressionType)[keyof typeof FilterExpressionType];

/**
 * @public
 * @enum
 */
export const EnableSetting = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EnableSetting = (typeof EnableSetting)[keyof typeof EnableSetting];

/**
 * @public
 * @enum
 */
export const Timezone = {
  AFRICA_JOHANNESBURG: "AFRICA_JOHANNESBURG",
  AMERICA_MONTREAL: "AMERICA_MONTREAL",
  AMERICA_SAO_PAULO: "AMERICA_SAO_PAULO",
  ASIA_BAHRAIN: "ASIA_BAHRAIN",
  ASIA_BANGKOK: "ASIA_BANGKOK",
  ASIA_CALCUTTA: "ASIA_CALCUTTA",
  ASIA_DUBAI: "ASIA_DUBAI",
  ASIA_HONG_KONG: "ASIA_HONG_KONG",
  ASIA_JAKARTA: "ASIA_JAKARTA",
  ASIA_KUALA_LUMPUR: "ASIA_KUALA_LUMPUR",
  ASIA_SEOUL: "ASIA_SEOUL",
  ASIA_SHANGHAI: "ASIA_SHANGHAI",
  ASIA_SINGAPORE: "ASIA_SINGAPORE",
  ASIA_TAIPEI: "ASIA_TAIPEI",
  ASIA_TOKYO: "ASIA_TOKYO",
  AUSTRALIA_MELBOURNE: "AUSTRALIA_MELBOURNE",
  AUSTRALIA_SYDNEY: "AUSTRALIA_SYDNEY",
  CANADA_CENTRAL: "CANADA_CENTRAL",
  CET: "CET",
  CST6CDT: "CST6CDT",
  ETC_GMT: "ETC_GMT",
  ETC_GMT0: "ETC_GMT0",
  ETC_GMT_ADD_0: "ETC_GMT_ADD_0",
  ETC_GMT_ADD_1: "ETC_GMT_ADD_1",
  ETC_GMT_ADD_10: "ETC_GMT_ADD_10",
  ETC_GMT_ADD_11: "ETC_GMT_ADD_11",
  ETC_GMT_ADD_12: "ETC_GMT_ADD_12",
  ETC_GMT_ADD_2: "ETC_GMT_ADD_2",
  ETC_GMT_ADD_3: "ETC_GMT_ADD_3",
  ETC_GMT_ADD_4: "ETC_GMT_ADD_4",
  ETC_GMT_ADD_5: "ETC_GMT_ADD_5",
  ETC_GMT_ADD_6: "ETC_GMT_ADD_6",
  ETC_GMT_ADD_7: "ETC_GMT_ADD_7",
  ETC_GMT_ADD_8: "ETC_GMT_ADD_8",
  ETC_GMT_ADD_9: "ETC_GMT_ADD_9",
  ETC_GMT_NEG_0: "ETC_GMT_NEG_0",
  ETC_GMT_NEG_1: "ETC_GMT_NEG_1",
  ETC_GMT_NEG_10: "ETC_GMT_NEG_10",
  ETC_GMT_NEG_11: "ETC_GMT_NEG_11",
  ETC_GMT_NEG_12: "ETC_GMT_NEG_12",
  ETC_GMT_NEG_13: "ETC_GMT_NEG_13",
  ETC_GMT_NEG_14: "ETC_GMT_NEG_14",
  ETC_GMT_NEG_2: "ETC_GMT_NEG_2",
  ETC_GMT_NEG_3: "ETC_GMT_NEG_3",
  ETC_GMT_NEG_4: "ETC_GMT_NEG_4",
  ETC_GMT_NEG_5: "ETC_GMT_NEG_5",
  ETC_GMT_NEG_6: "ETC_GMT_NEG_6",
  ETC_GMT_NEG_7: "ETC_GMT_NEG_7",
  ETC_GMT_NEG_8: "ETC_GMT_NEG_8",
  ETC_GMT_NEG_9: "ETC_GMT_NEG_9",
  EUROPE_DUBLIN: "EUROPE_DUBLIN",
  EUROPE_LONDON: "EUROPE_LONDON",
  EUROPE_PARIS: "EUROPE_PARIS",
  EUROPE_STOCKHOLM: "EUROPE_STOCKHOLM",
  EUROPE_ZURICH: "EUROPE_ZURICH",
  ISRAEL: "ISRAEL",
  MEXICO_GENERAL: "MEXICO_GENERAL",
  MST7MDT: "MST7MDT",
  PACIFIC_AUCKLAND: "PACIFIC_AUCKLAND",
  US_CENTRAL: "US_CENTRAL",
  US_EASTERN: "US_EASTERN",
  US_MOUNTAIN: "US_MOUNTAIN",
  US_PACIFIC: "US_PACIFIC",
  UTC: "UTC",
} as const;
/**
 * @public
 */
export type Timezone = (typeof Timezone)[keyof typeof Timezone];

/**
 * @public
 * @enum
 */
export const DataSourceErrorType = {
  ACCESS_DENIED_EXCEPTION: "ACCESS_DENIED_EXCEPTION",
  CONFLICT_EXCEPTION: "CONFLICT_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  THROTTLING_EXCEPTION: "THROTTLING_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;
/**
 * @public
 */
export type DataSourceErrorType = (typeof DataSourceErrorType)[keyof typeof DataSourceErrorType];

/**
 * @public
 * @enum
 */
export const DataSourceRunStatus = {
  FAILED: "FAILED",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  REQUESTED: "REQUESTED",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type DataSourceRunStatus = (typeof DataSourceRunStatus)[keyof typeof DataSourceRunStatus];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATE: "FAILED_UPDATE",
  READY: "READY",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * @enum
 */
export const DomainVersion = {
  V1: "V1",
  V2: "V2",
} as const;
/**
 * @public
 */
export type DomainVersion = (typeof DomainVersion)[keyof typeof DomainVersion];

/**
 * @public
 * @enum
 */
export const UserAssignment = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type UserAssignment = (typeof UserAssignment)[keyof typeof UserAssignment];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DISABLED: "DISABLED",
  EXPIRED: "EXPIRED",
  INACCESSIBLE: "INACCESSIBLE",
  SUSPENDED: "SUSPENDED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const FormTypeStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FormTypeStatus = (typeof FormTypeStatus)[keyof typeof FormTypeStatus];

/**
 * @public
 * @enum
 */
export const GlossaryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GlossaryStatus = (typeof GlossaryStatus)[keyof typeof GlossaryStatus];

/**
 * @public
 * @enum
 */
export const GlossaryUsageRestriction = {
  ASSET_GOVERNED_TERMS: "ASSET_GOVERNED_TERMS",
} as const;
/**
 * @public
 */
export type GlossaryUsageRestriction = (typeof GlossaryUsageRestriction)[keyof typeof GlossaryUsageRestriction];

/**
 * @public
 * @enum
 */
export const GlossaryTermStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GlossaryTermStatus = (typeof GlossaryTermStatus)[keyof typeof GlossaryTermStatus];

/**
 * @public
 * @enum
 */
export const GroupProfileStatus = {
  ASSIGNED: "ASSIGNED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;
/**
 * @public
 */
export type GroupProfileStatus = (typeof GroupProfileStatus)[keyof typeof GroupProfileStatus];

/**
 * @public
 * @enum
 */
export const EntityType = {
  ASSET: "ASSET",
  DATA_PRODUCT: "DATA_PRODUCT",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const OverallDeploymentStatus = {
  FAILED_DEPLOYMENT: "FAILED_DEPLOYMENT",
  FAILED_VALIDATION: "FAILED_VALIDATION",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type OverallDeploymentStatus = (typeof OverallDeploymentStatus)[keyof typeof OverallDeploymentStatus];

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  ACTIVE: "ACTIVE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  MOVING: "MOVING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 * @enum
 */
export const ResourceTagSource = {
  PROJECT: "PROJECT",
  PROJECT_PROFILE: "PROJECT_PROFILE",
} as const;
/**
 * @public
 */
export type ResourceTagSource = (typeof ResourceTagSource)[keyof typeof ResourceTagSource];

/**
 * @public
 * @enum
 */
export const UserDesignation = {
  PROJECT_CATALOG_CONSUMER: "PROJECT_CATALOG_CONSUMER",
  PROJECT_CATALOG_STEWARD: "PROJECT_CATALOG_STEWARD",
  PROJECT_CATALOG_VIEWER: "PROJECT_CATALOG_VIEWER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
} as const;
/**
 * @public
 */
export type UserDesignation = (typeof UserDesignation)[keyof typeof UserDesignation];

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  ON_CREATE: "ON_CREATE",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const RuleAction = {
  CREATE_LISTING_CHANGE_SET: "CREATE_LISTING_CHANGE_SET",
  CREATE_SUBSCRIPTION_REQUEST: "CREATE_SUBSCRIPTION_REQUEST",
} as const;
/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * @public
 * @enum
 */
export const RuleType = {
  METADATA_FORM_ENFORCEMENT: "METADATA_FORM_ENFORCEMENT",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const RuleTargetType = {
  DOMAIN_UNIT: "DOMAIN_UNIT",
} as const;
/**
 * @public
 */
export type RuleTargetType = (typeof RuleTargetType)[keyof typeof RuleTargetType];

/**
 * @public
 * @enum
 */
export const SubscriptionGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKED: "REVOKED",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;
/**
 * @public
 */
export type SubscriptionGrantStatus = (typeof SubscriptionGrantStatus)[keyof typeof SubscriptionGrantStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionGrantOverallStatus = {
  COMPLETED: "COMPLETED",
  GRANT_AND_REVOKE_FAILED: "GRANT_AND_REVOKE_FAILED",
  GRANT_FAILED: "GRANT_FAILED",
  INACCESSIBLE: "INACCESSIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
} as const;
/**
 * @public
 */
export type SubscriptionGrantOverallStatus =
  (typeof SubscriptionGrantOverallStatus)[keyof typeof SubscriptionGrantOverallStatus];

/**
 * @public
 * @enum
 */
export const UserType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
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
export const UserProfileStatus = {
  ACTIVATED: "ACTIVATED",
  ASSIGNED: "ASSIGNED",
  DEACTIVATED: "DEACTIVATED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;
/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 * @enum
 */
export const UserProfileType = {
  IAM: "IAM",
  SSO: "SSO",
} as const;
/**
 * @public
 */
export type UserProfileType = (typeof UserProfileType)[keyof typeof UserProfileType];

/**
 * @public
 * @enum
 */
export const DataAssetActivityStatus = {
  FAILED: "FAILED",
  PUBLISHING_FAILED: "PUBLISHING_FAILED",
  SKIPPED_ALREADY_IMPORTED: "SKIPPED_ALREADY_IMPORTED",
  SKIPPED_ARCHIVED: "SKIPPED_ARCHIVED",
  SKIPPED_NO_ACCESS: "SKIPPED_NO_ACCESS",
  SUCCEEDED_CREATED: "SUCCEEDED_CREATED",
  SUCCEEDED_UPDATED: "SUCCEEDED_UPDATED",
  UNCHANGED: "UNCHANGED",
} as const;
/**
 * @public
 */
export type DataAssetActivityStatus = (typeof DataAssetActivityStatus)[keyof typeof DataAssetActivityStatus];

/**
 * @public
 * @enum
 */
export const SelfGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;
/**
 * @public
 */
export type SelfGrantStatus = (typeof SelfGrantStatus)[keyof typeof SelfGrantStatus];

/**
 * @public
 * @enum
 */
export const LineageImportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type LineageImportStatus = (typeof LineageImportStatus)[keyof typeof LineageImportStatus];

/**
 * @public
 * @enum
 */
export const DataSourceRunType = {
  PRIORITIZED: "PRIORITIZED",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type DataSourceRunType = (typeof DataSourceRunType)[keyof typeof DataSourceRunType];

/**
 * @public
 * @enum
 */
export const LineageEventProcessingStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  REQUESTED: "REQUESTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type LineageEventProcessingStatus =
  (typeof LineageEventProcessingStatus)[keyof typeof LineageEventProcessingStatus];

/**
 * @public
 * @enum
 */
export const TimeSeriesEntityType = {
  ASSET: "ASSET",
  LISTING: "LISTING",
} as const;
/**
 * @public
 */
export type TimeSeriesEntityType = (typeof TimeSeriesEntityType)[keyof typeof TimeSeriesEntityType];

/**
 * @public
 * @enum
 */
export const JobType = {
  LINEAGE: "LINEAGE",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobRunMode = {
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type JobRunMode = (typeof JobRunMode)[keyof typeof JobRunMode];

/**
 * @public
 * @enum
 */
export const JobRunStatus = {
  ABORTED: "ABORTED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  SCHEDULED: "SCHEDULED",
  SUCCESS: "SUCCESS",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type JobRunStatus = (typeof JobRunStatus)[keyof typeof JobRunStatus];

/**
 * @public
 * @enum
 */
export const SortFieldAccountPool = {
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type SortFieldAccountPool = (typeof SortFieldAccountPool)[keyof typeof SortFieldAccountPool];

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
export const SortFieldConnection = {
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type SortFieldConnection = (typeof SortFieldConnection)[keyof typeof SortFieldConnection];

/**
 * @public
 * @enum
 */
export const OpenLineageRunState = {
  ABORT: "ABORT",
  COMPLETE: "COMPLETE",
  FAIL: "FAIL",
  OTHER: "OTHER",
  RUNNING: "RUNNING",
  START: "START",
} as const;
/**
 * @public
 */
export type OpenLineageRunState = (typeof OpenLineageRunState)[keyof typeof OpenLineageRunState];

/**
 * @public
 * @enum
 */
export const EdgeDirection = {
  DOWNSTREAM: "DOWNSTREAM",
  UPSTREAM: "UPSTREAM",
} as const;
/**
 * @public
 */
export type EdgeDirection = (typeof EdgeDirection)[keyof typeof EdgeDirection];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  EVENT: "EVENT",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 * @enum
 */
export const NotificationResourceType = {
  PROJECT: "PROJECT",
} as const;
/**
 * @public
 */
export type NotificationResourceType = (typeof NotificationResourceType)[keyof typeof NotificationResourceType];

/**
 * @public
 * @enum
 */
export const NotificationRole = {
  DOMAIN_OWNER: "DOMAIN_OWNER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
  PROJECT_SUBSCRIBER: "PROJECT_SUBSCRIBER",
  PROJECT_VIEWER: "PROJECT_VIEWER",
} as const;
/**
 * @public
 */
export type NotificationRole = (typeof NotificationRole)[keyof typeof NotificationRole];

/**
 * @public
 * @enum
 */
export const SortFieldProject = {
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type SortFieldProject = (typeof SortFieldProject)[keyof typeof SortFieldProject];

/**
 * @public
 * @enum
 */
export const SortKey = {
  CREATED_AT: "CREATED_AT",
  UPDATED_AT: "UPDATED_AT",
} as const;
/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type MetadataGenerationRunStatus =
  (typeof MetadataGenerationRunStatus)[keyof typeof MetadataGenerationRunStatus];

/**
 * @public
 * @enum
 */
export const MetadataGenerationTargetType = {
  ASSET: "ASSET",
} as const;
/**
 * @public
 */
export type MetadataGenerationTargetType =
  (typeof MetadataGenerationTargetType)[keyof typeof MetadataGenerationTargetType];

/**
 * @public
 * @enum
 */
export const MetadataGenerationRunType = {
  BUSINESS_DESCRIPTIONS: "BUSINESS_DESCRIPTIONS",
} as const;
/**
 * @public
 */
export type MetadataGenerationRunType = (typeof MetadataGenerationRunType)[keyof typeof MetadataGenerationRunType];

/**
 * @public
 * @enum
 */
export const RejectRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type RejectRuleBehavior = (typeof RejectRuleBehavior)[keyof typeof RejectRuleBehavior];

/**
 * @public
 * @enum
 */
export const SearchOutputAdditionalAttribute = {
  FORMS: "FORMS",
  TEXT_MATCH_RATIONALE: "TEXT_MATCH_RATIONALE",
  TIME_SERIES_DATA_POINT_FORMS: "TIME_SERIES_DATA_POINT_FORMS",
} as const;
/**
 * @public
 */
export type SearchOutputAdditionalAttribute =
  (typeof SearchOutputAdditionalAttribute)[keyof typeof SearchOutputAdditionalAttribute];

/**
 * @public
 * @enum
 */
export const InventorySearchScope = {
  ASSET: "ASSET",
  DATA_PRODUCT: "DATA_PRODUCT",
  GLOSSARY: "GLOSSARY",
  GLOSSARY_TERM: "GLOSSARY_TERM",
} as const;
/**
 * @public
 */
export type InventorySearchScope = (typeof InventorySearchScope)[keyof typeof InventorySearchScope];

/**
 * @public
 * @enum
 */
export const GroupSearchType = {
  DATAZONE_SSO_GROUP: "DATAZONE_SSO_GROUP",
  SSO_GROUP: "SSO_GROUP",
} as const;
/**
 * @public
 */
export type GroupSearchType = (typeof GroupSearchType)[keyof typeof GroupSearchType];

/**
 * @public
 * @enum
 */
export const TypesSearchScope = {
  ASSET_TYPE: "ASSET_TYPE",
  FORM_TYPE: "FORM_TYPE",
  LINEAGE_NODE_TYPE: "LINEAGE_NODE_TYPE",
} as const;
/**
 * @public
 */
export type TypesSearchScope = (typeof TypesSearchScope)[keyof typeof TypesSearchScope];

/**
 * @public
 * @enum
 */
export const UserSearchType = {
  DATAZONE_IAM_USER: "DATAZONE_IAM_USER",
  DATAZONE_SSO_USER: "DATAZONE_SSO_USER",
  DATAZONE_USER: "DATAZONE_USER",
  SSO_USER: "SSO_USER",
} as const;
/**
 * @public
 */
export type UserSearchType = (typeof UserSearchType)[keyof typeof UserSearchType];
