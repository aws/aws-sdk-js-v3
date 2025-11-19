// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AllowAWSToRetainLogs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AllowAWSToRetainLogs = (typeof AllowAWSToRetainLogs)[keyof typeof AllowAWSToRetainLogs];

/**
 * @public
 * @enum
 */
export const CertificateProviderType = {
  PEM: "PEM",
} as const;
/**
 * @public
 */
export type CertificateProviderType = (typeof CertificateProviderType)[keyof typeof CertificateProviderType];

/**
 * @public
 * @enum
 */
export const TemplateParameterDataType = {
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type TemplateParameterDataType = (typeof TemplateParameterDataType)[keyof typeof TemplateParameterDataType];

/**
 * @public
 * @enum
 */
export const PersistentAppUI = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PersistentAppUI = (typeof PersistentAppUI)[keyof typeof PersistentAppUI];

/**
 * @public
 * @enum
 */
export const ContainerProviderType = {
  EKS: "EKS",
} as const;
/**
 * @public
 */
export type ContainerProviderType = (typeof ContainerProviderType)[keyof typeof ContainerProviderType];

/**
 * @public
 * @enum
 */
export const FailureReason = {
  CLUSTER_UNAVAILABLE: "CLUSTER_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  USER_ERROR: "USER_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * @enum
 */
export const JobRunState = {
  CANCELLED: "CANCELLED",
  CANCEL_PENDING: "CANCEL_PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
 * @enum
 */
export const EndpointState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  TERMINATED: "TERMINATED",
  TERMINATED_WITH_ERRORS: "TERMINATED_WITH_ERRORS",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type EndpointState = (typeof EndpointState)[keyof typeof EndpointState];

/**
 * @public
 * @enum
 */
export const VirtualClusterState = {
  ARRESTED: "ARRESTED",
  RUNNING: "RUNNING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type VirtualClusterState = (typeof VirtualClusterState)[keyof typeof VirtualClusterState];
