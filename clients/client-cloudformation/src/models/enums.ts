// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountFilterType = {
  DIFFERENCE: "DIFFERENCE",
  INTERSECTION: "INTERSECTION",
  NONE: "NONE",
  UNION: "UNION",
} as const;
/**
 * @public
 */
export type AccountFilterType = (typeof AccountFilterType)[keyof typeof AccountFilterType];

/**
 * @public
 * @enum
 */
export const AccountGateStatus = {
  FAILED: "FAILED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AccountGateStatus = (typeof AccountGateStatus)[keyof typeof AccountGateStatus];

/**
 * @public
 * @enum
 */
export const ThirdPartyType = {
  HOOK: "HOOK",
  MODULE: "MODULE",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type ThirdPartyType = (typeof ThirdPartyType)[keyof typeof ThirdPartyType];

/**
 * @public
 * @enum
 */
export const VersionBump = {
  MAJOR: "MAJOR",
  MINOR: "MINOR",
} as const;
/**
 * @public
 */
export type VersionBump = (typeof VersionBump)[keyof typeof VersionBump];

/**
 * @public
 * @enum
 */
export const AfterValueFrom = {
  TEMPLATE: "TEMPLATE",
} as const;
/**
 * @public
 */
export type AfterValueFrom = (typeof AfterValueFrom)[keyof typeof AfterValueFrom];

/**
 * @public
 * @enum
 */
export const AnnotationSeverityLevel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type AnnotationSeverityLevel = (typeof AnnotationSeverityLevel)[keyof typeof AnnotationSeverityLevel];

/**
 * @public
 * @enum
 */
export const AnnotationStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type AnnotationStatus = (typeof AnnotationStatus)[keyof typeof AnnotationStatus];

/**
 * @public
 * @enum
 */
export const AttributeChangeType = {
  Add: "Add",
  Modify: "Modify",
  Remove: "Remove",
  SyncWithActual: "SyncWithActual",
} as const;
/**
 * @public
 */
export type AttributeChangeType = (typeof AttributeChangeType)[keyof typeof AttributeChangeType];

/**
 * @public
 * @enum
 */
export const BeaconStackOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BeaconStackOperationStatus = (typeof BeaconStackOperationStatus)[keyof typeof BeaconStackOperationStatus];

/**
 * @public
 * @enum
 */
export const BeforeValueFrom = {
  ACTUAL_STATE: "ACTUAL_STATE",
  PREVIOUS_DEPLOYMENT_STATE: "PREVIOUS_DEPLOYMENT_STATE",
} as const;
/**
 * @public
 */
export type BeforeValueFrom = (typeof BeforeValueFrom)[keyof typeof BeforeValueFrom];

/**
 * @public
 * @enum
 */
export const CallAs = {
  DELEGATED_ADMIN: "DELEGATED_ADMIN",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type CallAs = (typeof CallAs)[keyof typeof CallAs];

/**
 * @public
 * @enum
 */
export const Capability = {
  CAPABILITY_AUTO_EXPAND: "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM: "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM: "CAPABILITY_NAMED_IAM",
} as const;
/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 * @enum
 */
export const Category = {
  ACTIVATED: "ACTIVATED",
  AWS_TYPES: "AWS_TYPES",
  REGISTERED: "REGISTERED",
  THIRD_PARTY: "THIRD_PARTY",
} as const;
/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  Add: "Add",
  Dynamic: "Dynamic",
  Import: "Import",
  Modify: "Modify",
  Remove: "Remove",
  SyncWithActual: "SyncWithActual",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ChangeSource = {
  Automatic: "Automatic",
  DirectModification: "DirectModification",
  NoModification: "NoModification",
  ParameterReference: "ParameterReference",
  ResourceAttribute: "ResourceAttribute",
  ResourceReference: "ResourceReference",
} as const;
/**
 * @public
 */
export type ChangeSource = (typeof ChangeSource)[keyof typeof ChangeSource];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  Dynamic: "Dynamic",
  Static: "Static",
} as const;
/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const ResourceAttribute = {
  CreationPolicy: "CreationPolicy",
  DeletionPolicy: "DeletionPolicy",
  Metadata: "Metadata",
  Properties: "Properties",
  Tags: "Tags",
  UpdatePolicy: "UpdatePolicy",
  UpdateReplacePolicy: "UpdateReplacePolicy",
} as const;
/**
 * @public
 */
export type ResourceAttribute = (typeof ResourceAttribute)[keyof typeof ResourceAttribute];

/**
 * @public
 * @enum
 */
export const RequiresRecreation = {
  Always: "Always",
  Conditionally: "Conditionally",
  Never: "Never",
} as const;
/**
 * @public
 */
export type RequiresRecreation = (typeof RequiresRecreation)[keyof typeof RequiresRecreation];

/**
 * @public
 * @enum
 */
export const PolicyAction = {
  Delete: "Delete",
  ReplaceAndDelete: "ReplaceAndDelete",
  ReplaceAndRetain: "ReplaceAndRetain",
  ReplaceAndSnapshot: "ReplaceAndSnapshot",
  Retain: "Retain",
  Snapshot: "Snapshot",
} as const;
/**
 * @public
 */
export type PolicyAction = (typeof PolicyAction)[keyof typeof PolicyAction];

/**
 * @public
 * @enum
 */
export const Replacement = {
  Conditional: "Conditional",
  False: "False",
  True: "True",
} as const;
/**
 * @public
 */
export type Replacement = (typeof Replacement)[keyof typeof Replacement];

/**
 * @public
 * @enum
 */
export const DriftIgnoredReason = {
  MANAGED_BY_AWS: "MANAGED_BY_AWS",
  WRITE_ONLY_PROPERTY: "WRITE_ONLY_PROPERTY",
} as const;
/**
 * @public
 */
export type DriftIgnoredReason = (typeof DriftIgnoredReason)[keyof typeof DriftIgnoredReason];

/**
 * @public
 * @enum
 */
export const StackResourceDriftStatus = {
  DELETED: "DELETED",
  IN_SYNC: "IN_SYNC",
  MODIFIED: "MODIFIED",
  NOT_CHECKED: "NOT_CHECKED",
  UNKNOWN: "UNKNOWN",
  UNSUPPORTED: "UNSUPPORTED",
} as const;
/**
 * @public
 */
export type StackResourceDriftStatus = (typeof StackResourceDriftStatus)[keyof typeof StackResourceDriftStatus];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  Resource: "Resource",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const HookFailureMode = {
  FAIL: "FAIL",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type HookFailureMode = (typeof HookFailureMode)[keyof typeof HookFailureMode];

/**
 * @public
 * @enum
 */
export const HookInvocationPoint = {
  PRE_PROVISION: "PRE_PROVISION",
} as const;
/**
 * @public
 */
export type HookInvocationPoint = (typeof HookInvocationPoint)[keyof typeof HookInvocationPoint];

/**
 * @public
 * @enum
 */
export const HookTargetType = {
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type HookTargetType = (typeof HookTargetType)[keyof typeof HookTargetType];

/**
 * @public
 * @enum
 */
export const ChangeSetHooksStatus = {
  PLANNED: "PLANNED",
  PLANNING: "PLANNING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type ChangeSetHooksStatus = (typeof ChangeSetHooksStatus)[keyof typeof ChangeSetHooksStatus];

/**
 * @public
 * @enum
 */
export const ChangeSetStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ChangeSetStatus = (typeof ChangeSetStatus)[keyof typeof ChangeSetStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  AVAILABLE: "AVAILABLE",
  EXECUTE_COMPLETE: "EXECUTE_COMPLETE",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  OBSOLETE: "OBSOLETE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const ChangeSetType = {
  CREATE: "CREATE",
  IMPORT: "IMPORT",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type ChangeSetType = (typeof ChangeSetType)[keyof typeof ChangeSetType];

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  REVERT_DRIFT: "REVERT_DRIFT",
} as const;
/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

/**
 * @public
 * @enum
 */
export const OnStackFailure = {
  DELETE: "DELETE",
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type OnStackFailure = (typeof OnStackFailure)[keyof typeof OnStackFailure];

/**
 * @public
 * @enum
 */
export const GeneratedTemplateDeletionPolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type GeneratedTemplateDeletionPolicy =
  (typeof GeneratedTemplateDeletionPolicy)[keyof typeof GeneratedTemplateDeletionPolicy];

/**
 * @public
 * @enum
 */
export const GeneratedTemplateUpdateReplacePolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type GeneratedTemplateUpdateReplacePolicy =
  (typeof GeneratedTemplateUpdateReplacePolicy)[keyof typeof GeneratedTemplateUpdateReplacePolicy];

/**
 * @public
 * @enum
 */
export const OnFailure = {
  DELETE: "DELETE",
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type OnFailure = (typeof OnFailure)[keyof typeof OnFailure];

/**
 * @public
 * @enum
 */
export const ConcurrencyMode = {
  SOFT_FAILURE_TOLERANCE: "SOFT_FAILURE_TOLERANCE",
  STRICT_FAILURE_TOLERANCE: "STRICT_FAILURE_TOLERANCE",
} as const;
/**
 * @public
 */
export type ConcurrencyMode = (typeof ConcurrencyMode)[keyof typeof ConcurrencyMode];

/**
 * @public
 * @enum
 */
export const RegionConcurrencyType = {
  PARALLEL: "PARALLEL",
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type RegionConcurrencyType = (typeof RegionConcurrencyType)[keyof typeof RegionConcurrencyType];

/**
 * @public
 * @enum
 */
export const PermissionModels = {
  SELF_MANAGED: "SELF_MANAGED",
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type PermissionModels = (typeof PermissionModels)[keyof typeof PermissionModels];

/**
 * @public
 * @enum
 */
export const DeletionMode = {
  FORCE_DELETE_STACK: "FORCE_DELETE_STACK",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];

/**
 * @public
 * @enum
 */
export const RegistryType = {
  HOOK: "HOOK",
  MODULE: "MODULE",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type RegistryType = (typeof RegistryType)[keyof typeof RegistryType];

/**
 * @public
 * @enum
 */
export const StackDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKED: "NOT_CHECKED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type StackDriftStatus = (typeof StackDriftStatus)[keyof typeof StackDriftStatus];

/**
 * @public
 * @enum
 */
export const DetailedStatus = {
  CONFIGURATION_COMPLETE: "CONFIGURATION_COMPLETE",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type DetailedStatus = (typeof DetailedStatus)[keyof typeof DetailedStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  HOOK_INVOCATION_ERROR: "HOOK_INVOCATION_ERROR",
  PROGRESS_EVENT: "PROGRESS_EVENT",
  PROVISIONING_ERROR: "PROVISIONING_ERROR",
  STACK_EVENT: "STACK_EVENT",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const HookStatus = {
  HOOK_COMPLETE_FAILED: "HOOK_COMPLETE_FAILED",
  HOOK_COMPLETE_SUCCEEDED: "HOOK_COMPLETE_SUCCEEDED",
  HOOK_FAILED: "HOOK_FAILED",
  HOOK_IN_PROGRESS: "HOOK_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type HookStatus = (typeof HookStatus)[keyof typeof HookStatus];

/**
 * @public
 * @enum
 */
export const OperationType = {
  CONTINUE_ROLLBACK: "CONTINUE_ROLLBACK",
  CREATE_CHANGESET: "CREATE_CHANGESET",
  CREATE_STACK: "CREATE_STACK",
  DELETE_STACK: "DELETE_STACK",
  ROLLBACK: "ROLLBACK",
  UPDATE_STACK: "UPDATE_STACK",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SKIPPED: "DELETE_SKIPPED",
  EXPORT_COMPLETE: "EXPORT_COMPLETE",
  EXPORT_FAILED: "EXPORT_FAILED",
  EXPORT_IN_PROGRESS: "EXPORT_IN_PROGRESS",
  EXPORT_ROLLBACK_COMPLETE: "EXPORT_ROLLBACK_COMPLETE",
  EXPORT_ROLLBACK_FAILED: "EXPORT_ROLLBACK_FAILED",
  EXPORT_ROLLBACK_IN_PROGRESS: "EXPORT_ROLLBACK_IN_PROGRESS",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_FAILED: "IMPORT_FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const ValidationStatus = {
  FAILED: "FAILED",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus];

/**
 * @public
 * @enum
 */
export const GeneratedTemplateResourceStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type GeneratedTemplateResourceStatus =
  (typeof GeneratedTemplateResourceStatus)[keyof typeof GeneratedTemplateResourceStatus];

/**
 * @public
 * @enum
 */
export const WarningType = {
  EXCLUDED_PROPERTIES: "EXCLUDED_PROPERTIES",
  EXCLUDED_RESOURCES: "EXCLUDED_RESOURCES",
  MUTUALLY_EXCLUSIVE_PROPERTIES: "MUTUALLY_EXCLUSIVE_PROPERTIES",
  MUTUALLY_EXCLUSIVE_TYPES: "MUTUALLY_EXCLUSIVE_TYPES",
  UNSUPPORTED_PROPERTIES: "UNSUPPORTED_PROPERTIES",
} as const;
/**
 * @public
 */
export type WarningType = (typeof WarningType)[keyof typeof WarningType];

/**
 * @public
 * @enum
 */
export const GeneratedTemplateStatus = {
  COMPLETE: "COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  FAILED: "FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;
/**
 * @public
 */
export type GeneratedTemplateStatus = (typeof GeneratedTemplateStatus)[keyof typeof GeneratedTemplateStatus];

/**
 * @public
 * @enum
 */
export const OrganizationStatus = {
  DISABLED: "DISABLED",
  DISABLED_PERMANENTLY: "DISABLED_PERMANENTLY",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus];

/**
 * @public
 * @enum
 */
export const IdentityProvider = {
  AWS_Marketplace: "AWS_Marketplace",
  Bitbucket: "Bitbucket",
  GitHub: "GitHub",
} as const;
/**
 * @public
 */
export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];

/**
 * @public
 * @enum
 */
export const PublisherStatus = {
  UNVERIFIED: "UNVERIFIED",
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type PublisherStatus = (typeof PublisherStatus)[keyof typeof PublisherStatus];

/**
 * @public
 * @enum
 */
export const ResourceScanStatus = {
  COMPLETE: "COMPLETE",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ResourceScanStatus = (typeof ResourceScanStatus)[keyof typeof ResourceScanStatus];

/**
 * @public
 * @enum
 */
export const StackDriftDetectionStatus = {
  DETECTION_COMPLETE: "DETECTION_COMPLETE",
  DETECTION_FAILED: "DETECTION_FAILED",
  DETECTION_IN_PROGRESS: "DETECTION_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type StackDriftDetectionStatus = (typeof StackDriftDetectionStatus)[keyof typeof StackDriftDetectionStatus];

/**
 * @public
 * @enum
 */
export const StackInstanceDetailedStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_IMPORT: "FAILED_IMPORT",
  INOPERABLE: "INOPERABLE",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SKIPPED_SUSPENDED_ACCOUNT: "SKIPPED_SUSPENDED_ACCOUNT",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type StackInstanceDetailedStatus =
  (typeof StackInstanceDetailedStatus)[keyof typeof StackInstanceDetailedStatus];

/**
 * @public
 * @enum
 */
export const StackInstanceStatus = {
  CURRENT: "CURRENT",
  INOPERABLE: "INOPERABLE",
  OUTDATED: "OUTDATED",
} as const;
/**
 * @public
 */
export type StackInstanceStatus = (typeof StackInstanceStatus)[keyof typeof StackInstanceStatus];

/**
 * @public
 * @enum
 */
export const StackRefactorExecutionStatus = {
  AVAILABLE: "AVAILABLE",
  EXECUTE_COMPLETE: "EXECUTE_COMPLETE",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  OBSOLETE: "OBSOLETE",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type StackRefactorExecutionStatus =
  (typeof StackRefactorExecutionStatus)[keyof typeof StackRefactorExecutionStatus];

/**
 * @public
 * @enum
 */
export const StackRefactorStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type StackRefactorStatus = (typeof StackRefactorStatus)[keyof typeof StackRefactorStatus];

/**
 * @public
 * @enum
 */
export const DifferenceType = {
  ADD: "ADD",
  NOT_EQUAL: "NOT_EQUAL",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type DifferenceType = (typeof DifferenceType)[keyof typeof DifferenceType];

/**
 * @public
 * @enum
 */
export const StackStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS",
  REVIEW_IN_PROGRESS: "REVIEW_IN_PROGRESS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type StackStatus = (typeof StackStatus)[keyof typeof StackStatus];

/**
 * @public
 * @enum
 */
export const StackSetDriftDetectionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type StackSetDriftDetectionStatus =
  (typeof StackSetDriftDetectionStatus)[keyof typeof StackSetDriftDetectionStatus];

/**
 * @public
 * @enum
 */
export const StackSetDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKED: "NOT_CHECKED",
} as const;
/**
 * @public
 */
export type StackSetDriftStatus = (typeof StackSetDriftStatus)[keyof typeof StackSetDriftStatus];

/**
 * @public
 * @enum
 */
export const StackSetStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
} as const;
/**
 * @public
 */
export type StackSetStatus = (typeof StackSetStatus)[keyof typeof StackSetStatus];

/**
 * @public
 * @enum
 */
export const StackSetOperationAction = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  DETECT_DRIFT: "DETECT_DRIFT",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type StackSetOperationAction = (typeof StackSetOperationAction)[keyof typeof StackSetOperationAction];

/**
 * @public
 * @enum
 */
export const StackSetOperationStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type StackSetOperationStatus = (typeof StackSetOperationStatus)[keyof typeof StackSetOperationStatus];

/**
 * @public
 * @enum
 */
export const DeprecatedStatus = {
  DEPRECATED: "DEPRECATED",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type DeprecatedStatus = (typeof DeprecatedStatus)[keyof typeof DeprecatedStatus];

/**
 * @public
 * @enum
 */
export const ProvisioningType = {
  FULLY_MUTABLE: "FULLY_MUTABLE",
  IMMUTABLE: "IMMUTABLE",
  NON_PROVISIONABLE: "NON_PROVISIONABLE",
} as const;
/**
 * @public
 */
export type ProvisioningType = (typeof ProvisioningType)[keyof typeof ProvisioningType];

/**
 * @public
 * @enum
 */
export const TypeTestsStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_TESTED: "NOT_TESTED",
  PASSED: "PASSED",
} as const;
/**
 * @public
 */
export type TypeTestsStatus = (typeof TypeTestsStatus)[keyof typeof TypeTestsStatus];

/**
 * @public
 * @enum
 */
export const Visibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * @enum
 */
export const TemplateFormat = {
  JSON: "JSON",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type TemplateFormat = (typeof TemplateFormat)[keyof typeof TemplateFormat];

/**
 * @public
 * @enum
 */
export const HookTargetAction = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  IMPORT: "IMPORT",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type HookTargetAction = (typeof HookTargetAction)[keyof typeof HookTargetAction];

/**
 * @public
 * @enum
 */
export const TemplateStage = {
  Original: "Original",
  Processed: "Processed",
} as const;
/**
 * @public
 */
export type TemplateStage = (typeof TemplateStage)[keyof typeof TemplateStage];

/**
 * @public
 * @enum
 */
export const ListHookResultsTargetType = {
  CHANGE_SET: "CHANGE_SET",
  CLOUD_CONTROL: "CLOUD_CONTROL",
  RESOURCE: "RESOURCE",
  STACK: "STACK",
} as const;
/**
 * @public
 */
export type ListHookResultsTargetType = (typeof ListHookResultsTargetType)[keyof typeof ListHookResultsTargetType];

/**
 * @public
 * @enum
 */
export const ScanType = {
  FULL: "FULL",
  PARTIAL: "PARTIAL",
} as const;
/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * @enum
 */
export const StackInstanceFilterName = {
  DETAILED_STATUS: "DETAILED_STATUS",
  DRIFT_STATUS: "DRIFT_STATUS",
  LAST_OPERATION_ID: "LAST_OPERATION_ID",
} as const;
/**
 * @public
 */
export type StackInstanceFilterName = (typeof StackInstanceFilterName)[keyof typeof StackInstanceFilterName];

/**
 * @public
 * @enum
 */
export const StackRefactorActionType = {
  CREATE: "CREATE",
  MOVE: "MOVE",
} as const;
/**
 * @public
 */
export type StackRefactorActionType = (typeof StackRefactorActionType)[keyof typeof StackRefactorActionType];

/**
 * @public
 * @enum
 */
export const StackRefactorDetection = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type StackRefactorDetection = (typeof StackRefactorDetection)[keyof typeof StackRefactorDetection];

/**
 * @public
 * @enum
 */
export const StackRefactorActionEntity = {
  RESOURCE: "RESOURCE",
  STACK: "STACK",
} as const;
/**
 * @public
 */
export type StackRefactorActionEntity = (typeof StackRefactorActionEntity)[keyof typeof StackRefactorActionEntity];

/**
 * @public
 * @enum
 */
export const OperationResultFilterName = {
  OPERATION_RESULT_STATUS: "OPERATION_RESULT_STATUS",
} as const;
/**
 * @public
 */
export type OperationResultFilterName = (typeof OperationResultFilterName)[keyof typeof OperationResultFilterName];

/**
 * @public
 * @enum
 */
export const StackSetOperationResultStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type StackSetOperationResultStatus =
  (typeof StackSetOperationResultStatus)[keyof typeof StackSetOperationResultStatus];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const HandlerErrorCode = {
  AccessDenied: "AccessDenied",
  AlreadyExists: "AlreadyExists",
  GeneralServiceException: "GeneralServiceException",
  HandlerInternalFailure: "HandlerInternalFailure",
  InternalFailure: "InternalFailure",
  InvalidCredentials: "InvalidCredentials",
  InvalidRequest: "InvalidRequest",
  InvalidTypeConfiguration: "InvalidTypeConfiguration",
  NetworkFailure: "NetworkFailure",
  NonCompliant: "NonCompliant",
  NotFound: "NotFound",
  NotUpdatable: "NotUpdatable",
  ResourceConflict: "ResourceConflict",
  ServiceInternalError: "ServiceInternalError",
  ServiceLimitExceeded: "ServiceLimitExceeded",
  ServiceTimeout: "NotStabilized",
  Throttling: "Throttling",
  Unknown: "Unknown",
  UnsupportedTarget: "UnsupportedTarget",
} as const;
/**
 * @public
 */
export type HandlerErrorCode = (typeof HandlerErrorCode)[keyof typeof HandlerErrorCode];

/**
 * @public
 * @enum
 */
export const ResourceSignalStatus = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ResourceSignalStatus = (typeof ResourceSignalStatus)[keyof typeof ResourceSignalStatus];
