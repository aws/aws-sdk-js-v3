// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const JobStatus = {
  Created: "Created",
  Dispatched: "Dispatched",
  Failed: "Failed",
  InProgress: "InProgress",
  Queued: "Queued",
  Succeeded: "Succeeded",
  TimedOut: "TimedOut",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const ActionCategory = {
  Approval: "Approval",
  Build: "Build",
  Compute: "Compute",
  Deploy: "Deploy",
  Invoke: "Invoke",
  Source: "Source",
  Test: "Test",
} as const;
/**
 * @public
 */
export type ActionCategory = (typeof ActionCategory)[keyof typeof ActionCategory];

/**
 * @public
 * @enum
 */
export const ActionConfigurationPropertyType = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
} as const;
/**
 * @public
 */
export type ActionConfigurationPropertyType =
  (typeof ActionConfigurationPropertyType)[keyof typeof ActionConfigurationPropertyType];

/**
 * @public
 * @enum
 */
export const ActionOwner = {
  AWS: "AWS",
  Custom: "Custom",
  ThirdParty: "ThirdParty",
} as const;
/**
 * @public
 */
export type ActionOwner = (typeof ActionOwner)[keyof typeof ActionOwner];

/**
 * @public
 * @enum
 */
export const EnvironmentVariableType = {
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
export const ActionExecutionStatus = {
  Abandoned: "Abandoned",
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type ActionExecutionStatus = (typeof ActionExecutionStatus)[keyof typeof ActionExecutionStatus];

/**
 * @public
 * @enum
 */
export const StartTimeRange = {
  All: "All",
  Latest: "Latest",
} as const;
/**
 * @public
 */
export type StartTimeRange = (typeof StartTimeRange)[keyof typeof StartTimeRange];

/**
 * @public
 * @enum
 */
export const ExecutorType = {
  JobWorker: "JobWorker",
  Lambda: "Lambda",
} as const;
/**
 * @public
 */
export type ExecutorType = (typeof ExecutorType)[keyof typeof ExecutorType];

/**
 * @public
 * @enum
 */
export const ApprovalStatus = {
  Approved: "Approved",
  Rejected: "Rejected",
} as const;
/**
 * @public
 */
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus];

/**
 * @public
 * @enum
 */
export const ArtifactLocationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ArtifactLocationType = (typeof ArtifactLocationType)[keyof typeof ArtifactLocationType];

/**
 * @public
 * @enum
 */
export const EncryptionKeyType = {
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type EncryptionKeyType = (typeof EncryptionKeyType)[keyof typeof EncryptionKeyType];

/**
 * @public
 * @enum
 */
export const ArtifactStoreType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ArtifactStoreType = (typeof ArtifactStoreType)[keyof typeof ArtifactStoreType];

/**
 * @public
 * @enum
 */
export const Result = {
  FAIL: "FAIL",
  RETRY: "RETRY",
  ROLLBACK: "ROLLBACK",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type Result = (typeof Result)[keyof typeof Result];

/**
 * @public
 * @enum
 */
export const RuleCategory = {
  Rule: "Rule",
} as const;
/**
 * @public
 */
export type RuleCategory = (typeof RuleCategory)[keyof typeof RuleCategory];

/**
 * @public
 * @enum
 */
export const RuleOwner = {
  AWS: "AWS",
} as const;
/**
 * @public
 */
export type RuleOwner = (typeof RuleOwner)[keyof typeof RuleOwner];

/**
 * @public
 * @enum
 */
export const BlockerType = {
  Schedule: "Schedule",
} as const;
/**
 * @public
 */
export type BlockerType = (typeof BlockerType)[keyof typeof BlockerType];

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  PARALLEL: "PARALLEL",
  QUEUED: "QUEUED",
  SUPERSEDED: "SUPERSEDED",
} as const;
/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const PipelineType = {
  V1: "V1",
  V2: "V2",
} as const;
/**
 * @public
 */
export type PipelineType = (typeof PipelineType)[keyof typeof PipelineType];

/**
 * @public
 * @enum
 */
export const StageRetryMode = {
  ALL_ACTIONS: "ALL_ACTIONS",
  FAILED_ACTIONS: "FAILED_ACTIONS",
} as const;
/**
 * @public
 */
export type StageRetryMode = (typeof StageRetryMode)[keyof typeof StageRetryMode];

/**
 * @public
 * @enum
 */
export const GitPullRequestEventType = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type GitPullRequestEventType = (typeof GitPullRequestEventType)[keyof typeof GitPullRequestEventType];

/**
 * @public
 * @enum
 */
export const PipelineTriggerProviderType = {
  CodeStarSourceConnection: "CodeStarSourceConnection",
} as const;
/**
 * @public
 */
export type PipelineTriggerProviderType =
  (typeof PipelineTriggerProviderType)[keyof typeof PipelineTriggerProviderType];

/**
 * @public
 * @enum
 */
export const StageTransitionType = {
  Inbound: "Inbound",
  Outbound: "Outbound",
} as const;
/**
 * @public
 */
export type StageTransitionType = (typeof StageTransitionType)[keyof typeof StageTransitionType];

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  ROLLBACK: "ROLLBACK",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * @public
 * @enum
 */
export const PipelineExecutionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
  Superseded: "Superseded",
} as const;
/**
 * @public
 */
export type PipelineExecutionStatus = (typeof PipelineExecutionStatus)[keyof typeof PipelineExecutionStatus];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  AutomatedRollback: "AutomatedRollback",
  CloudWatchEvent: "CloudWatchEvent",
  CreatePipeline: "CreatePipeline",
  ManualRollback: "ManualRollback",
  PollForSourceChanges: "PollForSourceChanges",
  PutActionRevision: "PutActionRevision",
  StartPipelineExecution: "StartPipelineExecution",
  Webhook: "Webhook",
  WebhookV2: "WebhookV2",
} as const;
/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const ConditionExecutionStatus = {
  Abandoned: "Abandoned",
  Cancelled: "Cancelled",
  Errored: "Errored",
  Failed: "Failed",
  InProgress: "InProgress",
  Overridden: "Overridden",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type ConditionExecutionStatus = (typeof ConditionExecutionStatus)[keyof typeof ConditionExecutionStatus];

/**
 * @public
 * @enum
 */
export const RuleExecutionStatus = {
  Abandoned: "Abandoned",
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type RuleExecutionStatus = (typeof RuleExecutionStatus)[keyof typeof RuleExecutionStatus];

/**
 * @public
 * @enum
 */
export const StageExecutionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  Skipped: "Skipped",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type StageExecutionStatus = (typeof StageExecutionStatus)[keyof typeof StageExecutionStatus];

/**
 * @public
 * @enum
 */
export const RetryTrigger = {
  AutomatedStageRetry: "AutomatedStageRetry",
  ManualStageRetry: "ManualStageRetry",
} as const;
/**
 * @public
 */
export type RetryTrigger = (typeof RetryTrigger)[keyof typeof RetryTrigger];

/**
 * @public
 * @enum
 */
export const TargetFilterName = {
  TARGET_STATUS: "TARGET_STATUS",
} as const;
/**
 * @public
 */
export type TargetFilterName = (typeof TargetFilterName)[keyof typeof TargetFilterName];

/**
 * @public
 * @enum
 */
export const RuleConfigurationPropertyType = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
} as const;
/**
 * @public
 */
export type RuleConfigurationPropertyType =
  (typeof RuleConfigurationPropertyType)[keyof typeof RuleConfigurationPropertyType];

/**
 * @public
 * @enum
 */
export const WebhookAuthenticationType = {
  GITHUB_HMAC: "GITHUB_HMAC",
  IP: "IP",
  UNAUTHENTICATED: "UNAUTHENTICATED",
} as const;
/**
 * @public
 */
export type WebhookAuthenticationType = (typeof WebhookAuthenticationType)[keyof typeof WebhookAuthenticationType];

/**
 * @public
 * @enum
 */
export const ConditionType = {
  BEFORE_ENTRY: "BEFORE_ENTRY",
  ON_SUCCESS: "ON_SUCCESS",
} as const;
/**
 * @public
 */
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

/**
 * @public
 * @enum
 */
export const FailureType = {
  ConfigurationError: "ConfigurationError",
  JobFailed: "JobFailed",
  PermissionError: "PermissionError",
  RevisionOutOfSync: "RevisionOutOfSync",
  RevisionUnavailable: "RevisionUnavailable",
  SystemUnavailable: "SystemUnavailable",
} as const;
/**
 * @public
 */
export type FailureType = (typeof FailureType)[keyof typeof FailureType];

/**
 * @public
 * @enum
 */
export const SourceRevisionType = {
  COMMIT_ID: "COMMIT_ID",
  IMAGE_DIGEST: "IMAGE_DIGEST",
  S3_OBJECT_KEY: "S3_OBJECT_KEY",
  S3_OBJECT_VERSION_ID: "S3_OBJECT_VERSION_ID",
} as const;
/**
 * @public
 */
export type SourceRevisionType = (typeof SourceRevisionType)[keyof typeof SourceRevisionType];
