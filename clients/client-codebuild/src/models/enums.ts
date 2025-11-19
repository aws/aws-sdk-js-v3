// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ArtifactNamespace = {
  BUILD_ID: "BUILD_ID",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ArtifactNamespace = (typeof ArtifactNamespace)[keyof typeof ArtifactNamespace];

/**
 * @public
 * @enum
 */
export const ArtifactPackaging = {
  NONE: "NONE",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type ArtifactPackaging = (typeof ArtifactPackaging)[keyof typeof ArtifactPackaging];

/**
 * @public
 * @enum
 */
export const ArtifactsType = {
  CODEPIPELINE: "CODEPIPELINE",
  NO_ARTIFACTS: "NO_ARTIFACTS",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ArtifactsType = (typeof ArtifactsType)[keyof typeof ArtifactsType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  BASIC_AUTH: "BASIC_AUTH",
  CODECONNECTIONS: "CODECONNECTIONS",
  OAUTH: "OAUTH",
  PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const BucketOwnerAccess = {
  FULL: "FULL",
  NONE: "NONE",
  READ_ONLY: "READ_ONLY",
} as const;
/**
 * @public
 */
export type BucketOwnerAccess = (typeof BucketOwnerAccess)[keyof typeof BucketOwnerAccess];

/**
 * @public
 * @enum
 */
export const BatchReportModeType = {
  REPORT_AGGREGATED_BATCH: "REPORT_AGGREGATED_BATCH",
  REPORT_INDIVIDUAL_BUILDS: "REPORT_INDIVIDUAL_BUILDS",
} as const;
/**
 * @public
 */
export type BatchReportModeType = (typeof BatchReportModeType)[keyof typeof BatchReportModeType];

/**
 * @public
 * @enum
 */
export const StatusType = {
  FAILED: "FAILED",
  FAULT: "FAULT",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const CacheMode = {
  LOCAL_CUSTOM_CACHE: "LOCAL_CUSTOM_CACHE",
  LOCAL_DOCKER_LAYER_CACHE: "LOCAL_DOCKER_LAYER_CACHE",
  LOCAL_SOURCE_CACHE: "LOCAL_SOURCE_CACHE",
} as const;
/**
 * @public
 */
export type CacheMode = (typeof CacheMode)[keyof typeof CacheMode];

/**
 * @public
 * @enum
 */
export const CacheType = {
  LOCAL: "LOCAL",
  NO_CACHE: "NO_CACHE",
  S3: "S3",
} as const;
/**
 * @public
 */
export type CacheType = (typeof CacheType)[keyof typeof CacheType];

/**
 * @public
 * @enum
 */
export const MachineType = {
  GENERAL: "GENERAL",
  NVME: "NVME",
} as const;
/**
 * @public
 */
export type MachineType = (typeof MachineType)[keyof typeof MachineType];

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ATTRIBUTE_BASED_COMPUTE: "ATTRIBUTE_BASED_COMPUTE",
  BUILD_GENERAL1_2XLARGE: "BUILD_GENERAL1_2XLARGE",
  BUILD_GENERAL1_LARGE: "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM: "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL: "BUILD_GENERAL1_SMALL",
  BUILD_GENERAL1_XLARGE: "BUILD_GENERAL1_XLARGE",
  BUILD_LAMBDA_10GB: "BUILD_LAMBDA_10GB",
  BUILD_LAMBDA_1GB: "BUILD_LAMBDA_1GB",
  BUILD_LAMBDA_2GB: "BUILD_LAMBDA_2GB",
  BUILD_LAMBDA_4GB: "BUILD_LAMBDA_4GB",
  BUILD_LAMBDA_8GB: "BUILD_LAMBDA_8GB",
  CUSTOM_INSTANCE_TYPE: "CUSTOM_INSTANCE_TYPE",
} as const;
/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * @public
 * @enum
 */
export const EnvironmentVariableType = {
  PARAMETER_STORE: "PARAMETER_STORE",
  PLAINTEXT: "PLAINTEXT",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type EnvironmentVariableType = (typeof EnvironmentVariableType)[keyof typeof EnvironmentVariableType];

/**
 * @public
 * @enum
 */
export const ImagePullCredentialsType = {
  CODEBUILD: "CODEBUILD",
  SERVICE_ROLE: "SERVICE_ROLE",
} as const;
/**
 * @public
 */
export type ImagePullCredentialsType = (typeof ImagePullCredentialsType)[keyof typeof ImagePullCredentialsType];

/**
 * @public
 * @enum
 */
export const CredentialProviderType = {
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type CredentialProviderType = (typeof CredentialProviderType)[keyof typeof CredentialProviderType];

/**
 * @public
 * @enum
 */
export const EnvironmentType = {
  ARM_CONTAINER: "ARM_CONTAINER",
  ARM_EC2: "ARM_EC2",
  ARM_LAMBDA_CONTAINER: "ARM_LAMBDA_CONTAINER",
  LINUX_CONTAINER: "LINUX_CONTAINER",
  LINUX_EC2: "LINUX_EC2",
  LINUX_GPU_CONTAINER: "LINUX_GPU_CONTAINER",
  LINUX_LAMBDA_CONTAINER: "LINUX_LAMBDA_CONTAINER",
  MAC_ARM: "MAC_ARM",
  WINDOWS_CONTAINER: "WINDOWS_CONTAINER",
  WINDOWS_EC2: "WINDOWS_EC2",
  WINDOWS_SERVER_2019_CONTAINER: "WINDOWS_SERVER_2019_CONTAINER",
  WINDOWS_SERVER_2022_CONTAINER: "WINDOWS_SERVER_2022_CONTAINER",
} as const;
/**
 * @public
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

/**
 * @public
 * @enum
 */
export const FileSystemType = {
  EFS: "EFS",
} as const;
/**
 * @public
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

/**
 * @public
 * @enum
 */
export const LogsConfigStatusType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type LogsConfigStatusType = (typeof LogsConfigStatusType)[keyof typeof LogsConfigStatusType];

/**
 * @public
 * @enum
 */
export const BuildBatchPhaseType = {
  COMBINE_ARTIFACTS: "COMBINE_ARTIFACTS",
  DOWNLOAD_BATCHSPEC: "DOWNLOAD_BATCHSPEC",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BuildBatchPhaseType = (typeof BuildBatchPhaseType)[keyof typeof BuildBatchPhaseType];

/**
 * @public
 * @enum
 */
export const SourceAuthType = {
  CODECONNECTIONS: "CODECONNECTIONS",
  OAUTH: "OAUTH",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type SourceAuthType = (typeof SourceAuthType)[keyof typeof SourceAuthType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  BITBUCKET: "BITBUCKET",
  CODECOMMIT: "CODECOMMIT",
  CODEPIPELINE: "CODEPIPELINE",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
  GITLAB: "GITLAB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
  NO_SOURCE: "NO_SOURCE",
  S3: "S3",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const BuildPhaseType = {
  BUILD: "BUILD",
  COMPLETED: "COMPLETED",
  DOWNLOAD_SOURCE: "DOWNLOAD_SOURCE",
  FINALIZING: "FINALIZING",
  INSTALL: "INSTALL",
  POST_BUILD: "POST_BUILD",
  PRE_BUILD: "PRE_BUILD",
  PROVISIONING: "PROVISIONING",
  QUEUED: "QUEUED",
  SUBMITTED: "SUBMITTED",
  UPLOAD_ARTIFACTS: "UPLOAD_ARTIFACTS",
} as const;
/**
 * @public
 */
export type BuildPhaseType = (typeof BuildPhaseType)[keyof typeof BuildPhaseType];

/**
 * @public
 * @enum
 */
export const CommandType = {
  SHELL: "SHELL",
} as const;
/**
 * @public
 */
export type CommandType = (typeof CommandType)[keyof typeof CommandType];

/**
 * @public
 * @enum
 */
export const FleetOverflowBehavior = {
  ON_DEMAND: "ON_DEMAND",
  QUEUE: "QUEUE",
} as const;
/**
 * @public
 */
export type FleetOverflowBehavior = (typeof FleetOverflowBehavior)[keyof typeof FleetOverflowBehavior];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleBehavior = {
  ALLOW_ALL: "ALLOW_ALL",
  DENY_ALL: "DENY_ALL",
} as const;
/**
 * @public
 */
export type FleetProxyRuleBehavior = (typeof FleetProxyRuleBehavior)[keyof typeof FleetProxyRuleBehavior];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleEffectType = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type FleetProxyRuleEffectType = (typeof FleetProxyRuleEffectType)[keyof typeof FleetProxyRuleEffectType];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleType = {
  DOMAIN: "DOMAIN",
  IP: "IP",
} as const;
/**
 * @public
 */
export type FleetProxyRuleType = (typeof FleetProxyRuleType)[keyof typeof FleetProxyRuleType];

/**
 * @public
 * @enum
 */
export const FleetScalingType = {
  TARGET_TRACKING_SCALING: "TARGET_TRACKING_SCALING",
} as const;
/**
 * @public
 */
export type FleetScalingType = (typeof FleetScalingType)[keyof typeof FleetScalingType];

/**
 * @public
 * @enum
 */
export const FleetScalingMetricType = {
  FLEET_UTILIZATION_RATE: "FLEET_UTILIZATION_RATE",
} as const;
/**
 * @public
 */
export type FleetScalingMetricType = (typeof FleetScalingMetricType)[keyof typeof FleetScalingMetricType];

/**
 * @public
 * @enum
 */
export const FleetContextCode = {
  ACTION_REQUIRED: "ACTION_REQUIRED",
  CREATE_FAILED: "CREATE_FAILED",
  INSUFFICIENT_CAPACITY: "INSUFFICIENT_CAPACITY",
  PENDING_DELETION: "PENDING_DELETION",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;
/**
 * @public
 */
export type FleetContextCode = (typeof FleetContextCode)[keyof typeof FleetContextCode];

/**
 * @public
 * @enum
 */
export const FleetStatusCode = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING_DELETION: "PENDING_DELETION",
  ROTATING: "ROTATING",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FleetStatusCode = (typeof FleetStatusCode)[keyof typeof FleetStatusCode];

/**
 * @public
 * @enum
 */
export const ProjectVisibilityType = {
  PRIVATE: "PRIVATE",
  PUBLIC_READ: "PUBLIC_READ",
} as const;
/**
 * @public
 */
export type ProjectVisibilityType = (typeof ProjectVisibilityType)[keyof typeof ProjectVisibilityType];

/**
 * @public
 * @enum
 */
export const WebhookBuildType = {
  BUILD: "BUILD",
  BUILD_BATCH: "BUILD_BATCH",
  RUNNER_BUILDKITE_BUILD: "RUNNER_BUILDKITE_BUILD",
} as const;
/**
 * @public
 */
export type WebhookBuildType = (typeof WebhookBuildType)[keyof typeof WebhookBuildType];

/**
 * @public
 * @enum
 */
export const WebhookFilterType = {
  ACTOR_ACCOUNT_ID: "ACTOR_ACCOUNT_ID",
  BASE_REF: "BASE_REF",
  COMMIT_MESSAGE: "COMMIT_MESSAGE",
  EVENT: "EVENT",
  FILE_PATH: "FILE_PATH",
  HEAD_REF: "HEAD_REF",
  ORGANIZATION_NAME: "ORGANIZATION_NAME",
  RELEASE_NAME: "RELEASE_NAME",
  REPOSITORY_NAME: "REPOSITORY_NAME",
  TAG_NAME: "TAG_NAME",
  WORKFLOW_NAME: "WORKFLOW_NAME",
} as const;
/**
 * @public
 */
export type WebhookFilterType = (typeof WebhookFilterType)[keyof typeof WebhookFilterType];

/**
 * @public
 * @enum
 */
export const PullRequestBuildApproverRole = {
  BITBUCKET_ADMIN: "BITBUCKET_ADMIN",
  BITBUCKET_READ: "BITBUCKET_READ",
  BITBUCKET_WRITE: "BITBUCKET_WRITE",
  GITHUB_ADMIN: "GITHUB_ADMIN",
  GITHUB_MAINTAIN: "GITHUB_MAINTAIN",
  GITHUB_READ: "GITHUB_READ",
  GITHUB_TRIAGE: "GITHUB_TRIAGE",
  GITHUB_WRITE: "GITHUB_WRITE",
  GITLAB_DEVELOPER: "GITLAB_DEVELOPER",
  GITLAB_GUEST: "GITLAB_GUEST",
  GITLAB_MAINTAINER: "GITLAB_MAINTAINER",
  GITLAB_OWNER: "GITLAB_OWNER",
  GITLAB_PLANNER: "GITLAB_PLANNER",
  GITLAB_REPORTER: "GITLAB_REPORTER",
} as const;
/**
 * @public
 */
export type PullRequestBuildApproverRole =
  (typeof PullRequestBuildApproverRole)[keyof typeof PullRequestBuildApproverRole];

/**
 * @public
 * @enum
 */
export const PullRequestBuildCommentApproval = {
  ALL_PULL_REQUESTS: "ALL_PULL_REQUESTS",
  DISABLED: "DISABLED",
  FORK_PULL_REQUESTS: "FORK_PULL_REQUESTS",
} as const;
/**
 * @public
 */
export type PullRequestBuildCommentApproval =
  (typeof PullRequestBuildCommentApproval)[keyof typeof PullRequestBuildCommentApproval];

/**
 * @public
 * @enum
 */
export const WebhookScopeType = {
  GITHUB_GLOBAL: "GITHUB_GLOBAL",
  GITHUB_ORGANIZATION: "GITHUB_ORGANIZATION",
  GITLAB_GROUP: "GITLAB_GROUP",
} as const;
/**
 * @public
 */
export type WebhookScopeType = (typeof WebhookScopeType)[keyof typeof WebhookScopeType];

/**
 * @public
 * @enum
 */
export const WebhookStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];

/**
 * @public
 * @enum
 */
export const ReportExportConfigType = {
  NO_EXPORT: "NO_EXPORT",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ReportExportConfigType = (typeof ReportExportConfigType)[keyof typeof ReportExportConfigType];

/**
 * @public
 * @enum
 */
export const ReportPackagingType = {
  NONE: "NONE",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type ReportPackagingType = (typeof ReportPackagingType)[keyof typeof ReportPackagingType];

/**
 * @public
 * @enum
 */
export const ReportGroupStatusType = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ReportGroupStatusType = (typeof ReportGroupStatusType)[keyof typeof ReportGroupStatusType];

/**
 * @public
 * @enum
 */
export const ReportType = {
  CODE_COVERAGE: "CODE_COVERAGE",
  TEST: "TEST",
} as const;
/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 * @enum
 */
export const ReportStatusType = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  GENERATING: "GENERATING",
  INCOMPLETE: "INCOMPLETE",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ReportStatusType = (typeof ReportStatusType)[keyof typeof ReportStatusType];

/**
 * @public
 * @enum
 */
export const ReportCodeCoverageSortByType = {
  FILE_PATH: "FILE_PATH",
  LINE_COVERAGE_PERCENTAGE: "LINE_COVERAGE_PERCENTAGE",
} as const;
/**
 * @public
 */
export type ReportCodeCoverageSortByType =
  (typeof ReportCodeCoverageSortByType)[keyof typeof ReportCodeCoverageSortByType];

/**
 * @public
 * @enum
 */
export const SortOrderType = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrderType = (typeof SortOrderType)[keyof typeof SortOrderType];

/**
 * @public
 * @enum
 */
export const ReportGroupTrendFieldType = {
  BRANCHES_COVERED: "BRANCHES_COVERED",
  BRANCHES_MISSED: "BRANCHES_MISSED",
  BRANCH_COVERAGE: "BRANCH_COVERAGE",
  DURATION: "DURATION",
  LINES_COVERED: "LINES_COVERED",
  LINES_MISSED: "LINES_MISSED",
  LINE_COVERAGE: "LINE_COVERAGE",
  PASS_RATE: "PASS_RATE",
  TOTAL: "TOTAL",
} as const;
/**
 * @public
 */
export type ReportGroupTrendFieldType = (typeof ReportGroupTrendFieldType)[keyof typeof ReportGroupTrendFieldType];

/**
 * @public
 * @enum
 */
export const ServerType = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
  GITLAB: "GITLAB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;
/**
 * @public
 */
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

/**
 * @public
 * @enum
 */
export const LanguageType = {
  ANDROID: "ANDROID",
  BASE: "BASE",
  DOCKER: "DOCKER",
  DOTNET: "DOTNET",
  GOLANG: "GOLANG",
  JAVA: "JAVA",
  NODE_JS: "NODE_JS",
  PHP: "PHP",
  PYTHON: "PYTHON",
  RUBY: "RUBY",
} as const;
/**
 * @public
 */
export type LanguageType = (typeof LanguageType)[keyof typeof LanguageType];

/**
 * @public
 * @enum
 */
export const PlatformType = {
  AMAZON_LINUX: "AMAZON_LINUX",
  DEBIAN: "DEBIAN",
  UBUNTU: "UBUNTU",
  WINDOWS_SERVER: "WINDOWS_SERVER",
} as const;
/**
 * @public
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

/**
 * @public
 * @enum
 */
export const FleetSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type FleetSortByType = (typeof FleetSortByType)[keyof typeof FleetSortByType];

/**
 * @public
 * @enum
 */
export const ProjectSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type ProjectSortByType = (typeof ProjectSortByType)[keyof typeof ProjectSortByType];

/**
 * @public
 * @enum
 */
export const ReportGroupSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type ReportGroupSortByType = (typeof ReportGroupSortByType)[keyof typeof ReportGroupSortByType];

/**
 * @public
 * @enum
 */
export const SharedResourceSortByType = {
  ARN: "ARN",
  MODIFIED_TIME: "MODIFIED_TIME",
} as const;
/**
 * @public
 */
export type SharedResourceSortByType = (typeof SharedResourceSortByType)[keyof typeof SharedResourceSortByType];

/**
 * @public
 * @enum
 */
export const RetryBuildBatchType = {
  RETRY_ALL_BUILDS: "RETRY_ALL_BUILDS",
  RETRY_FAILED_BUILDS: "RETRY_FAILED_BUILDS",
} as const;
/**
 * @public
 */
export type RetryBuildBatchType = (typeof RetryBuildBatchType)[keyof typeof RetryBuildBatchType];
