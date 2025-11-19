// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ArrayJobDependency = {
  N_TO_N: "N_TO_N",
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type ArrayJobDependency = (typeof ArrayJobDependency)[keyof typeof ArrayJobDependency];

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
 * @enum
 */
export const CRAllocationStrategy = {
  BEST_FIT: "BEST_FIT",
  BEST_FIT_PROGRESSIVE: "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED: "SPOT_CAPACITY_OPTIMIZED",
  SPOT_PRICE_CAPACITY_OPTIMIZED: "SPOT_PRICE_CAPACITY_OPTIMIZED",
} as const;
/**
 * @public
 */
export type CRAllocationStrategy = (typeof CRAllocationStrategy)[keyof typeof CRAllocationStrategy];

/**
 * @public
 * @enum
 */
export const UserdataType = {
  EKS_BOOTSTRAP_SH: "EKS_BOOTSTRAP_SH",
  EKS_NODEADM: "EKS_NODEADM",
} as const;
/**
 * @public
 */
export type UserdataType = (typeof UserdataType)[keyof typeof UserdataType];

/**
 * @public
 * @enum
 */
export const CRType = {
  EC2: "EC2",
  FARGATE: "FARGATE",
  FARGATE_SPOT: "FARGATE_SPOT",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type CRType = (typeof CRType)[keyof typeof CRType];

/**
 * @public
 * @enum
 */
export const CEState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CEState = (typeof CEState)[keyof typeof CEState];

/**
 * @public
 * @enum
 */
export const CEType = {
  MANAGED: "MANAGED",
  UNMANAGED: "UNMANAGED",
} as const;
/**
 * @public
 */
export type CEType = (typeof CEType)[keyof typeof CEType];

/**
 * @public
 * @enum
 */
export const JobQueueType = {
  ECS: "ECS",
  ECS_FARGATE: "ECS_FARGATE",
  EKS: "EKS",
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;
/**
 * @public
 */
export type JobQueueType = (typeof JobQueueType)[keyof typeof JobQueueType];

/**
 * @public
 * @enum
 */
export const JobStateTimeLimitActionsAction = {
  CANCEL: "CANCEL",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type JobStateTimeLimitActionsAction =
  (typeof JobStateTimeLimitActionsAction)[keyof typeof JobStateTimeLimitActionsAction];

/**
 * @public
 * @enum
 */
export const JobStateTimeLimitActionsState = {
  RUNNABLE: "RUNNABLE",
} as const;
/**
 * @public
 */
export type JobStateTimeLimitActionsState =
  (typeof JobStateTimeLimitActionsState)[keyof typeof JobStateTimeLimitActionsState];

/**
 * @public
 * @enum
 */
export const JQState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type JQState = (typeof JQState)[keyof typeof JQState];

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentType = {
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;
/**
 * @public
 */
export type ServiceEnvironmentType = (typeof ServiceEnvironmentType)[keyof typeof ServiceEnvironmentType];

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ServiceEnvironmentState = (typeof ServiceEnvironmentState)[keyof typeof ServiceEnvironmentState];

/**
 * @public
 * @enum
 */
export const OrchestrationType = {
  ECS: "ECS",
  EKS: "EKS",
} as const;
/**
 * @public
 */
export type OrchestrationType = (typeof OrchestrationType)[keyof typeof OrchestrationType];

/**
 * @public
 * @enum
 */
export const CEStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type CEStatus = (typeof CEStatus)[keyof typeof CEStatus];

/**
 * @public
 * @enum
 */
export const DeviceCgroupPermission = {
  MKNOD: "MKNOD",
  READ: "READ",
  WRITE: "WRITE",
} as const;
/**
 * @public
 */
export type DeviceCgroupPermission = (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];

/**
 * @public
 * @enum
 */
export const LogDriver = {
  AWSFIRELENS: "awsfirelens",
  AWSLOGS: "awslogs",
  FLUENTD: "fluentd",
  GELF: "gelf",
  JOURNALD: "journald",
  JSON_FILE: "json-file",
  SPLUNK: "splunk",
  SYSLOG: "syslog",
} as const;
/**
 * @public
 */
export type LogDriver = (typeof LogDriver)[keyof typeof LogDriver];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  GPU: "GPU",
  MEMORY: "MEMORY",
  VCPU: "VCPU",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const EFSAuthorizationConfigIAM = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EFSAuthorizationConfigIAM = (typeof EFSAuthorizationConfigIAM)[keyof typeof EFSAuthorizationConfigIAM];

/**
 * @public
 * @enum
 */
export const EFSTransitEncryption = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EFSTransitEncryption = (typeof EFSTransitEncryption)[keyof typeof EFSTransitEncryption];

/**
 * @public
 * @enum
 */
export const FirelensConfigurationType = {
  FLUENTBIT: "fluentbit",
  FLUENTD: "fluentd",
} as const;
/**
 * @public
 */
export type FirelensConfigurationType = (typeof FirelensConfigurationType)[keyof typeof FirelensConfigurationType];

/**
 * @public
 * @enum
 */
export const PlatformCapability = {
  EC2: "EC2",
  FARGATE: "FARGATE",
} as const;
/**
 * @public
 */
export type PlatformCapability = (typeof PlatformCapability)[keyof typeof PlatformCapability];

/**
 * @public
 * @enum
 */
export const RetryAction = {
  EXIT: "EXIT",
  RETRY: "RETRY",
} as const;
/**
 * @public
 */
export type RetryAction = (typeof RetryAction)[keyof typeof RetryAction];

/**
 * @public
 * @enum
 */
export const JQStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type JQStatus = (typeof JQStatus)[keyof typeof JQStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNABLE: "RUNNABLE",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type ServiceEnvironmentStatus = (typeof ServiceEnvironmentStatus)[keyof typeof ServiceEnvironmentStatus];

/**
 * @public
 * @enum
 */
export const ServiceResourceIdName = {
  SAGEMAKER_TRAINING_JOB_ARN: "TrainingJobArn",
} as const;
/**
 * @public
 */
export type ServiceResourceIdName = (typeof ServiceResourceIdName)[keyof typeof ServiceResourceIdName];

/**
 * @public
 * @enum
 */
export const ServiceJobRetryAction = {
  EXIT: "EXIT",
  RETRY: "RETRY",
} as const;
/**
 * @public
 */
export type ServiceJobRetryAction = (typeof ServiceJobRetryAction)[keyof typeof ServiceJobRetryAction];

/**
 * @public
 * @enum
 */
export const ServiceJobType = {
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;
/**
 * @public
 */
export type ServiceJobType = (typeof ServiceJobType)[keyof typeof ServiceJobType];

/**
 * @public
 * @enum
 */
export const ServiceJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNABLE: "RUNNABLE",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  STARTING: "STARTING",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ServiceJobStatus = (typeof ServiceJobStatus)[keyof typeof ServiceJobStatus];

/**
 * @public
 * @enum
 */
export const JobDefinitionType = {
  Container: "container",
  Multinode: "multinode",
} as const;
/**
 * @public
 */
export type JobDefinitionType = (typeof JobDefinitionType)[keyof typeof JobDefinitionType];

/**
 * @public
 * @enum
 */
export const CRUpdateAllocationStrategy = {
  BEST_FIT_PROGRESSIVE: "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED: "SPOT_CAPACITY_OPTIMIZED",
  SPOT_PRICE_CAPACITY_OPTIMIZED: "SPOT_PRICE_CAPACITY_OPTIMIZED",
} as const;
/**
 * @public
 */
export type CRUpdateAllocationStrategy = (typeof CRUpdateAllocationStrategy)[keyof typeof CRUpdateAllocationStrategy];
