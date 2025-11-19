// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ImageStatus = {
  AVAILABLE: "AVAILABLE",
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  DISABLED: "DISABLED",
  DISTRIBUTING: "DISTRIBUTING",
  FAILED: "FAILED",
  INTEGRATING: "INTEGRATING",
  PENDING: "PENDING",
  TESTING: "TESTING",
} as const;
/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 * @enum
 */
export const BuildType = {
  IMPORT: "IMPORT",
  IMPORT_ISO: "IMPORT_ISO",
  SCHEDULED: "SCHEDULED",
  USER_INITIATED: "USER_INITIATED",
} as const;
/**
 * @public
 */
export type BuildType = (typeof BuildType)[keyof typeof BuildType];

/**
 * @public
 * @enum
 */
export const Platform = {
  LINUX: "Linux",
  MACOS: "macOS",
  WINDOWS: "Windows",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const ProductCodeType = {
  MARKETPLACE: "marketplace",
} as const;
/**
 * @public
 */
export type ProductCodeType = (typeof ProductCodeType)[keyof typeof ProductCodeType];

/**
 * @public
 * @enum
 */
export const ComponentStatus = {
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type ComponentStatus = (typeof ComponentStatus)[keyof typeof ComponentStatus];

/**
 * @public
 * @enum
 */
export const ComponentType = {
  BUILD: "BUILD",
  TEST: "TEST",
} as const;
/**
 * @public
 */
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];

/**
 * @public
 * @enum
 */
export const ComponentFormat = {
  SHELL: "SHELL",
} as const;
/**
 * @public
 */
export type ComponentFormat = (typeof ComponentFormat)[keyof typeof ComponentFormat];

/**
 * @public
 * @enum
 */
export const ContainerRepositoryService = {
  ECR: "ECR",
} as const;
/**
 * @public
 */
export type ContainerRepositoryService = (typeof ContainerRepositoryService)[keyof typeof ContainerRepositoryService];

/**
 * @public
 * @enum
 */
export const ContainerType = {
  DOCKER: "DOCKER",
} as const;
/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * @public
 * @enum
 */
export const EbsVolumeType = {
  GP2: "gp2",
  GP3: "gp3",
  IO1: "io1",
  IO2: "io2",
  SC1: "sc1",
  ST1: "st1",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type EbsVolumeType = (typeof EbsVolumeType)[keyof typeof EbsVolumeType];

/**
 * @public
 * @enum
 */
export const DiskImageFormat = {
  RAW: "RAW",
  VHD: "VHD",
  VMDK: "VMDK",
} as const;
/**
 * @public
 */
export type DiskImageFormat = (typeof DiskImageFormat)[keyof typeof DiskImageFormat];

/**
 * @public
 * @enum
 */
export const SsmParameterDataType = {
  AWS_EC2_IMAGE: "aws:ec2:image",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type SsmParameterDataType = (typeof SsmParameterDataType)[keyof typeof SsmParameterDataType];

/**
 * @public
 * @enum
 */
export const OnWorkflowFailure = {
  ABORT: "ABORT",
  CONTINUE: "CONTINUE",
} as const;
/**
 * @public
 */
export type OnWorkflowFailure = (typeof OnWorkflowFailure)[keyof typeof OnWorkflowFailure];

/**
 * @public
 * @enum
 */
export const PipelineExecutionStartCondition = {
  EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
  EXPRESSION_MATCH_ONLY: "EXPRESSION_MATCH_ONLY",
} as const;
/**
 * @public
 */
export type PipelineExecutionStartCondition =
  (typeof PipelineExecutionStartCondition)[keyof typeof PipelineExecutionStartCondition];

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 * @enum
 */
export const TenancyType = {
  DEDICATED: "dedicated",
  DEFAULT: "default",
  HOST: "host",
} as const;
/**
 * @public
 */
export type TenancyType = (typeof TenancyType)[keyof typeof TenancyType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyDetailActionType = {
  DELETE: "DELETE",
  DEPRECATE: "DEPRECATE",
  DISABLE: "DISABLE",
} as const;
/**
 * @public
 */
export type LifecyclePolicyDetailActionType =
  (typeof LifecyclePolicyDetailActionType)[keyof typeof LifecyclePolicyDetailActionType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyTimeUnit = {
  DAYS: "DAYS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type LifecyclePolicyTimeUnit = (typeof LifecyclePolicyTimeUnit)[keyof typeof LifecyclePolicyTimeUnit];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyDetailFilterType = {
  AGE: "AGE",
  COUNT: "COUNT",
} as const;
/**
 * @public
 */
export type LifecyclePolicyDetailFilterType =
  (typeof LifecyclePolicyDetailFilterType)[keyof typeof LifecyclePolicyDetailFilterType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyResourceType = {
  AMI_IMAGE: "AMI_IMAGE",
  CONTAINER_IMAGE: "CONTAINER_IMAGE",
} as const;
/**
 * @public
 */
export type LifecyclePolicyResourceType =
  (typeof LifecyclePolicyResourceType)[keyof typeof LifecyclePolicyResourceType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type LifecyclePolicyStatus = (typeof LifecyclePolicyStatus)[keyof typeof LifecyclePolicyStatus];

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  BUILD: "BUILD",
  DISTRIBUTION: "DISTRIBUTION",
  TEST: "TEST",
} as const;
/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 * @enum
 */
export const ImageType = {
  AMI: "AMI",
  DOCKER: "DOCKER",
} as const;
/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 * @enum
 */
export const ImageSource = {
  AMAZON_MANAGED: "AMAZON_MANAGED",
  AWS_MARKETPLACE: "AWS_MARKETPLACE",
  CUSTOM: "CUSTOM",
  IMPORTED: "IMPORTED",
} as const;
/**
 * @public
 */
export type ImageSource = (typeof ImageSource)[keyof typeof ImageSource];

/**
 * @public
 * @enum
 */
export const ImageScanStatus = {
  ABANDONED: "ABANDONED",
  COLLECTING: "COLLECTING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SCANNING: "SCANNING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ImageScanStatus = (typeof ImageScanStatus)[keyof typeof ImageScanStatus];

/**
 * @public
 * @enum
 */
export const LifecycleExecutionStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type LifecycleExecutionStatus = (typeof LifecycleExecutionStatus)[keyof typeof LifecycleExecutionStatus];

/**
 * @public
 * @enum
 */
export const MarketplaceResourceType = {
  COMPONENT_ARTIFACT: "COMPONENT_ARTIFACT",
  COMPONENT_DATA: "COMPONENT_DATA",
} as const;
/**
 * @public
 */
export type MarketplaceResourceType = (typeof MarketplaceResourceType)[keyof typeof MarketplaceResourceType];

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 * @enum
 */
export const WorkflowExecutionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  ROLLBACK_COMPLETED: "ROLLBACK_COMPLETED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type WorkflowExecutionStatus = (typeof WorkflowExecutionStatus)[keyof typeof WorkflowExecutionStatus];

/**
 * @public
 * @enum
 */
export const WorkflowStepExecutionRollbackStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type WorkflowStepExecutionRollbackStatus =
  (typeof WorkflowStepExecutionRollbackStatus)[keyof typeof WorkflowStepExecutionRollbackStatus];

/**
 * @public
 * @enum
 */
export const WorkflowStepExecutionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type WorkflowStepExecutionStatus =
  (typeof WorkflowStepExecutionStatus)[keyof typeof WorkflowStepExecutionStatus];

/**
 * @public
 * @enum
 */
export const Ownership = {
  AMAZON: "Amazon",
  AWS_MARKETPLACE: "AWSMarketplace",
  SELF: "Self",
  SHARED: "Shared",
  THIRDPARTY: "ThirdParty",
} as const;
/**
 * @public
 */
export type Ownership = (typeof Ownership)[keyof typeof Ownership];

/**
 * @public
 * @enum
 */
export const LifecycleExecutionResourceActionName = {
  AVAILABLE: "AVAILABLE",
  DELETE: "DELETE",
  DEPRECATE: "DEPRECATE",
  DISABLE: "DISABLE",
} as const;
/**
 * @public
 */
export type LifecycleExecutionResourceActionName =
  (typeof LifecycleExecutionResourceActionName)[keyof typeof LifecycleExecutionResourceActionName];

/**
 * @public
 * @enum
 */
export const LifecycleExecutionResourceStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type LifecycleExecutionResourceStatus =
  (typeof LifecycleExecutionResourceStatus)[keyof typeof LifecycleExecutionResourceStatus];

/**
 * @public
 * @enum
 */
export const WorkflowStepActionType = {
  RESUME: "RESUME",
  STOP: "STOP",
} as const;
/**
 * @public
 */
export type WorkflowStepActionType = (typeof WorkflowStepActionType)[keyof typeof WorkflowStepActionType];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];
