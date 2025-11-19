// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessRequestStatus = {
  APPROVED: "Approved",
  EXPIRED: "Expired",
  PENDING: "Pending",
  REJECTED: "Rejected",
  REVOKED: "Revoked",
} as const;
/**
 * @public
 */
export type AccessRequestStatus = (typeof AccessRequestStatus)[keyof typeof AccessRequestStatus];

/**
 * @public
 * @enum
 */
export const AccessType = {
  JUSTINTIME: "JustInTime",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const ResourceTypeForTagging = {
  ASSOCIATION: "Association",
  AUTOMATION: "Automation",
  DOCUMENT: "Document",
  MAINTENANCE_WINDOW: "MaintenanceWindow",
  MANAGED_INSTANCE: "ManagedInstance",
  OPSMETADATA: "OpsMetadata",
  OPS_ITEM: "OpsItem",
  PARAMETER: "Parameter",
  PATCH_BASELINE: "PatchBaseline",
} as const;
/**
 * @public
 */
export type ResourceTypeForTagging = (typeof ResourceTypeForTagging)[keyof typeof ResourceTypeForTagging];

/**
 * @public
 * @enum
 */
export const ExternalAlarmState = {
  ALARM: "ALARM",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ExternalAlarmState = (typeof ExternalAlarmState)[keyof typeof ExternalAlarmState];

/**
 * @public
 * @enum
 */
export const AssociationComplianceSeverity = {
  Critical: "CRITICAL",
  High: "HIGH",
  Low: "LOW",
  Medium: "MEDIUM",
  Unspecified: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type AssociationComplianceSeverity =
  (typeof AssociationComplianceSeverity)[keyof typeof AssociationComplianceSeverity];

/**
 * @public
 * @enum
 */
export const AssociationSyncCompliance = {
  Auto: "AUTO",
  Manual: "MANUAL",
} as const;
/**
 * @public
 */
export type AssociationSyncCompliance = (typeof AssociationSyncCompliance)[keyof typeof AssociationSyncCompliance];

/**
 * @public
 * @enum
 */
export const AssociationStatusName = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
} as const;
/**
 * @public
 */
export type AssociationStatusName = (typeof AssociationStatusName)[keyof typeof AssociationStatusName];

/**
 * @public
 * @enum
 */
export const Fault = {
  Client: "Client",
  Server: "Server",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type Fault = (typeof Fault)[keyof typeof Fault];

/**
 * @public
 * @enum
 */
export const AttachmentsSourceKey = {
  AttachmentReference: "AttachmentReference",
  S3FileUrl: "S3FileUrl",
  SourceUrl: "SourceUrl",
} as const;
/**
 * @public
 */
export type AttachmentsSourceKey = (typeof AttachmentsSourceKey)[keyof typeof AttachmentsSourceKey];

/**
 * @public
 * @enum
 */
export const DocumentFormat = {
  JSON: "JSON",
  TEXT: "TEXT",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type DocumentFormat = (typeof DocumentFormat)[keyof typeof DocumentFormat];

/**
 * @public
 * @enum
 */
export const DocumentType = {
  ApplicationConfiguration: "ApplicationConfiguration",
  ApplicationConfigurationSchema: "ApplicationConfigurationSchema",
  AutoApprovalPolicy: "AutoApprovalPolicy",
  Automation: "Automation",
  ChangeCalendar: "ChangeCalendar",
  ChangeTemplate: "Automation.ChangeTemplate",
  CloudFormation: "CloudFormation",
  Command: "Command",
  ConformancePackTemplate: "ConformancePackTemplate",
  DeploymentStrategy: "DeploymentStrategy",
  ManualApprovalPolicy: "ManualApprovalPolicy",
  Package: "Package",
  Policy: "Policy",
  ProblemAnalysis: "ProblemAnalysis",
  ProblemAnalysisTemplate: "ProblemAnalysisTemplate",
  QuickSetup: "QuickSetup",
  Session: "Session",
} as const;
/**
 * @public
 */
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];

/**
 * @public
 * @enum
 */
export const DocumentHashType = {
  SHA1: "Sha1",
  SHA256: "Sha256",
} as const;
/**
 * @public
 */
export type DocumentHashType = (typeof DocumentHashType)[keyof typeof DocumentHashType];

/**
 * @public
 * @enum
 */
export const DocumentParameterType = {
  String: "String",
  StringList: "StringList",
} as const;
/**
 * @public
 */
export type DocumentParameterType = (typeof DocumentParameterType)[keyof typeof DocumentParameterType];

/**
 * @public
 * @enum
 */
export const PlatformType = {
  LINUX: "Linux",
  MACOS: "MacOS",
  WINDOWS: "Windows",
} as const;
/**
 * @public
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

/**
 * @public
 * @enum
 */
export const ReviewStatus = {
  APPROVED: "APPROVED",
  NOT_REVIEWED: "NOT_REVIEWED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  Active: "Active",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * @enum
 */
export const OpsItemDataType = {
  SEARCHABLE_STRING: "SearchableString",
  STRING: "String",
} as const;
/**
 * @public
 */
export type OpsItemDataType = (typeof OpsItemDataType)[keyof typeof OpsItemDataType];

/**
 * @public
 * @enum
 */
export const PatchComplianceLevel = {
  Critical: "CRITICAL",
  High: "HIGH",
  Informational: "INFORMATIONAL",
  Low: "LOW",
  Medium: "MEDIUM",
  Unspecified: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type PatchComplianceLevel = (typeof PatchComplianceLevel)[keyof typeof PatchComplianceLevel];

/**
 * @public
 * @enum
 */
export const PatchFilterKey = {
  AdvisoryId: "ADVISORY_ID",
  Arch: "ARCH",
  BugzillaId: "BUGZILLA_ID",
  CVEId: "CVE_ID",
  Classification: "CLASSIFICATION",
  Epoch: "EPOCH",
  MsrcSeverity: "MSRC_SEVERITY",
  Name: "NAME",
  PatchId: "PATCH_ID",
  PatchSet: "PATCH_SET",
  Priority: "PRIORITY",
  Product: "PRODUCT",
  ProductFamily: "PRODUCT_FAMILY",
  Release: "RELEASE",
  Repository: "REPOSITORY",
  Section: "SECTION",
  Security: "SECURITY",
  Severity: "SEVERITY",
  Version: "VERSION",
} as const;
/**
 * @public
 */
export type PatchFilterKey = (typeof PatchFilterKey)[keyof typeof PatchFilterKey];

/**
 * @public
 * @enum
 */
export const PatchComplianceStatus = {
  Compliant: "COMPLIANT",
  NonCompliant: "NON_COMPLIANT",
} as const;
/**
 * @public
 */
export type PatchComplianceStatus = (typeof PatchComplianceStatus)[keyof typeof PatchComplianceStatus];

/**
 * @public
 * @enum
 */
export const OperatingSystem = {
  AlmaLinux: "ALMA_LINUX",
  AmazonLinux: "AMAZON_LINUX",
  AmazonLinux2: "AMAZON_LINUX_2",
  AmazonLinux2022: "AMAZON_LINUX_2022",
  AmazonLinux2023: "AMAZON_LINUX_2023",
  CentOS: "CENTOS",
  Debian: "DEBIAN",
  MacOS: "MACOS",
  OracleLinux: "ORACLE_LINUX",
  Raspbian: "RASPBIAN",
  RedhatEnterpriseLinux: "REDHAT_ENTERPRISE_LINUX",
  Rocky_Linux: "ROCKY_LINUX",
  Suse: "SUSE",
  Ubuntu: "UBUNTU",
  Windows: "WINDOWS",
} as const;
/**
 * @public
 */
export type OperatingSystem = (typeof OperatingSystem)[keyof typeof OperatingSystem];

/**
 * @public
 * @enum
 */
export const PatchAction = {
  AllowAsDependency: "ALLOW_AS_DEPENDENCY",
  Block: "BLOCK",
} as const;
/**
 * @public
 */
export type PatchAction = (typeof PatchAction)[keyof typeof PatchAction];

/**
 * @public
 * @enum
 */
export const ResourceDataSyncS3Format = {
  JSON_SERDE: "JsonSerDe",
} as const;
/**
 * @public
 */
export type ResourceDataSyncS3Format = (typeof ResourceDataSyncS3Format)[keyof typeof ResourceDataSyncS3Format];

/**
 * @public
 * @enum
 */
export const InventorySchemaDeleteOption = {
  DELETE_SCHEMA: "DeleteSchema",
  DISABLE_SCHEMA: "DisableSchema",
} as const;
/**
 * @public
 */
export type InventorySchemaDeleteOption =
  (typeof InventorySchemaDeleteOption)[keyof typeof InventorySchemaDeleteOption];

/**
 * @public
 * @enum
 */
export const DescribeActivationsFilterKeys = {
  ACTIVATION_IDS: "ActivationIds",
  DEFAULT_INSTANCE_NAME: "DefaultInstanceName",
  IAM_ROLE: "IamRole",
} as const;
/**
 * @public
 */
export type DescribeActivationsFilterKeys =
  (typeof DescribeActivationsFilterKeys)[keyof typeof DescribeActivationsFilterKeys];

/**
 * @public
 * @enum
 */
export const AssociationExecutionFilterKey = {
  CreatedTime: "CreatedTime",
  ExecutionId: "ExecutionId",
  Status: "Status",
} as const;
/**
 * @public
 */
export type AssociationExecutionFilterKey =
  (typeof AssociationExecutionFilterKey)[keyof typeof AssociationExecutionFilterKey];

/**
 * @public
 * @enum
 */
export const AssociationFilterOperatorType = {
  Equal: "EQUAL",
  GreaterThan: "GREATER_THAN",
  LessThan: "LESS_THAN",
} as const;
/**
 * @public
 */
export type AssociationFilterOperatorType =
  (typeof AssociationFilterOperatorType)[keyof typeof AssociationFilterOperatorType];

/**
 * @public
 * @enum
 */
export const AssociationExecutionTargetsFilterKey = {
  ResourceId: "ResourceId",
  ResourceType: "ResourceType",
  Status: "Status",
} as const;
/**
 * @public
 */
export type AssociationExecutionTargetsFilterKey =
  (typeof AssociationExecutionTargetsFilterKey)[keyof typeof AssociationExecutionTargetsFilterKey];

/**
 * @public
 * @enum
 */
export const AutomationExecutionFilterKey = {
  AUTOMATION_SUBTYPE: "AutomationSubtype",
  AUTOMATION_TYPE: "AutomationType",
  CURRENT_ACTION: "CurrentAction",
  DOCUMENT_NAME_PREFIX: "DocumentNamePrefix",
  EXECUTION_ID: "ExecutionId",
  EXECUTION_STATUS: "ExecutionStatus",
  OPS_ITEM_ID: "OpsItemId",
  PARENT_EXECUTION_ID: "ParentExecutionId",
  START_TIME_AFTER: "StartTimeAfter",
  START_TIME_BEFORE: "StartTimeBefore",
  TAG_KEY: "TagKey",
  TARGET_RESOURCE_GROUP: "TargetResourceGroup",
} as const;
/**
 * @public
 */
export type AutomationExecutionFilterKey =
  (typeof AutomationExecutionFilterKey)[keyof typeof AutomationExecutionFilterKey];

/**
 * @public
 * @enum
 */
export const AutomationExecutionStatus = {
  APPROVED: "Approved",
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
  CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
  COMPLETED_WITH_FAILURE: "CompletedWithFailure",
  COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
  EXITED: "Exited",
  FAILED: "Failed",
  INPROGRESS: "InProgress",
  PENDING: "Pending",
  PENDING_APPROVAL: "PendingApproval",
  PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
  REJECTED: "Rejected",
  RUNBOOK_INPROGRESS: "RunbookInProgress",
  SCHEDULED: "Scheduled",
  SUCCESS: "Success",
  TIMEDOUT: "TimedOut",
  WAITING: "Waiting",
} as const;
/**
 * @public
 */
export type AutomationExecutionStatus = (typeof AutomationExecutionStatus)[keyof typeof AutomationExecutionStatus];

/**
 * @public
 * @enum
 */
export const AutomationSubtype = {
  AccessRequest: "AccessRequest",
  ChangeRequest: "ChangeRequest",
} as const;
/**
 * @public
 */
export type AutomationSubtype = (typeof AutomationSubtype)[keyof typeof AutomationSubtype];

/**
 * @public
 * @enum
 */
export const AutomationType = {
  CrossAccount: "CrossAccount",
  Local: "Local",
} as const;
/**
 * @public
 */
export type AutomationType = (typeof AutomationType)[keyof typeof AutomationType];

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  Auto: "Auto",
  Interactive: "Interactive",
} as const;
/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const StepExecutionFilterKey = {
  ACTION: "Action",
  PARENT_STEP_EXECUTION_ID: "ParentStepExecutionId",
  PARENT_STEP_ITERATION: "ParentStepIteration",
  PARENT_STEP_ITERATOR_VALUE: "ParentStepIteratorValue",
  START_TIME_AFTER: "StartTimeAfter",
  START_TIME_BEFORE: "StartTimeBefore",
  STEP_EXECUTION_ID: "StepExecutionId",
  STEP_EXECUTION_STATUS: "StepExecutionStatus",
  STEP_NAME: "StepName",
} as const;
/**
 * @public
 */
export type StepExecutionFilterKey = (typeof StepExecutionFilterKey)[keyof typeof StepExecutionFilterKey];

/**
 * @public
 * @enum
 */
export const DocumentPermissionType = {
  SHARE: "Share",
} as const;
/**
 * @public
 */
export type DocumentPermissionType = (typeof DocumentPermissionType)[keyof typeof DocumentPermissionType];

/**
 * @public
 * @enum
 */
export const PatchDeploymentStatus = {
  Approved: "APPROVED",
  ExplicitApproved: "EXPLICIT_APPROVED",
  ExplicitRejected: "EXPLICIT_REJECTED",
  PendingApproval: "PENDING_APPROVAL",
} as const;
/**
 * @public
 */
export type PatchDeploymentStatus = (typeof PatchDeploymentStatus)[keyof typeof PatchDeploymentStatus];

/**
 * @public
 * @enum
 */
export const InstanceInformationFilterKey = {
  ACTIVATION_IDS: "ActivationIds",
  AGENT_VERSION: "AgentVersion",
  ASSOCIATION_STATUS: "AssociationStatus",
  IAM_ROLE: "IamRole",
  INSTANCE_IDS: "InstanceIds",
  PING_STATUS: "PingStatus",
  PLATFORM_TYPES: "PlatformTypes",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type InstanceInformationFilterKey =
  (typeof InstanceInformationFilterKey)[keyof typeof InstanceInformationFilterKey];

/**
 * @public
 * @enum
 */
export const PingStatus = {
  CONNECTION_LOST: "ConnectionLost",
  INACTIVE: "Inactive",
  ONLINE: "Online",
} as const;
/**
 * @public
 */
export type PingStatus = (typeof PingStatus)[keyof typeof PingStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EC2_INSTANCE: "EC2Instance",
  MANAGED_INSTANCE: "ManagedInstance",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  AWS_EC2_INSTANCE: "AWS::EC2::Instance",
  AWS_IOT_THING: "AWS::IoT::Thing",
  AWS_SSM_MANAGEDINSTANCE: "AWS::SSM::ManagedInstance",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const PatchComplianceDataState = {
  AvailableSecurityUpdate: "AVAILABLE_SECURITY_UPDATE",
  Failed: "FAILED",
  Installed: "INSTALLED",
  InstalledOther: "INSTALLED_OTHER",
  InstalledPendingReboot: "INSTALLED_PENDING_REBOOT",
  InstalledRejected: "INSTALLED_REJECTED",
  Missing: "MISSING",
  NotApplicable: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type PatchComplianceDataState = (typeof PatchComplianceDataState)[keyof typeof PatchComplianceDataState];

/**
 * @public
 * @enum
 */
export const PatchOperationType = {
  INSTALL: "Install",
  SCAN: "Scan",
} as const;
/**
 * @public
 */
export type PatchOperationType = (typeof PatchOperationType)[keyof typeof PatchOperationType];

/**
 * @public
 * @enum
 */
export const RebootOption = {
  NO_REBOOT: "NoReboot",
  REBOOT_IF_NEEDED: "RebootIfNeeded",
} as const;
/**
 * @public
 */
export type RebootOption = (typeof RebootOption)[keyof typeof RebootOption];

/**
 * @public
 * @enum
 */
export const InstancePatchStateOperatorType = {
  EQUAL: "Equal",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type InstancePatchStateOperatorType =
  (typeof InstancePatchStateOperatorType)[keyof typeof InstancePatchStateOperatorType];

/**
 * @public
 * @enum
 */
export const InstancePropertyFilterOperator = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type InstancePropertyFilterOperator =
  (typeof InstancePropertyFilterOperator)[keyof typeof InstancePropertyFilterOperator];

/**
 * @public
 * @enum
 */
export const InstancePropertyFilterKey = {
  ACTIVATION_IDS: "ActivationIds",
  AGENT_VERSION: "AgentVersion",
  ASSOCIATION_STATUS: "AssociationStatus",
  DOCUMENT_NAME: "DocumentName",
  IAM_ROLE: "IamRole",
  INSTANCE_IDS: "InstanceIds",
  PING_STATUS: "PingStatus",
  PLATFORM_TYPES: "PlatformTypes",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type InstancePropertyFilterKey = (typeof InstancePropertyFilterKey)[keyof typeof InstancePropertyFilterKey];

/**
 * @public
 * @enum
 */
export const InventoryDeletionStatus = {
  COMPLETE: "Complete",
  IN_PROGRESS: "InProgress",
} as const;
/**
 * @public
 */
export type InventoryDeletionStatus = (typeof InventoryDeletionStatus)[keyof typeof InventoryDeletionStatus];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowExecutionStatus = {
  Cancelled: "CANCELLED",
  Cancelling: "CANCELLING",
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
  Pending: "PENDING",
  SkippedOverlapping: "SKIPPED_OVERLAPPING",
  Success: "SUCCESS",
  TimedOut: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type MaintenanceWindowExecutionStatus =
  (typeof MaintenanceWindowExecutionStatus)[keyof typeof MaintenanceWindowExecutionStatus];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowTaskType = {
  Automation: "AUTOMATION",
  Lambda: "LAMBDA",
  RunCommand: "RUN_COMMAND",
  StepFunctions: "STEP_FUNCTIONS",
} as const;
/**
 * @public
 */
export type MaintenanceWindowTaskType = (typeof MaintenanceWindowTaskType)[keyof typeof MaintenanceWindowTaskType];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowResourceType = {
  Instance: "INSTANCE",
  ResourceGroup: "RESOURCE_GROUP",
} as const;
/**
 * @public
 */
export type MaintenanceWindowResourceType =
  (typeof MaintenanceWindowResourceType)[keyof typeof MaintenanceWindowResourceType];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowTaskCutoffBehavior = {
  CancelTask: "CANCEL_TASK",
  ContinueTask: "CONTINUE_TASK",
} as const;
/**
 * @public
 */
export type MaintenanceWindowTaskCutoffBehavior =
  (typeof MaintenanceWindowTaskCutoffBehavior)[keyof typeof MaintenanceWindowTaskCutoffBehavior];

/**
 * @public
 * @enum
 */
export const OpsItemFilterKey = {
  ACCESS_REQUEST_APPROVER_ARN: "AccessRequestByApproverArn",
  ACCESS_REQUEST_APPROVER_ID: "AccessRequestByApproverId",
  ACCESS_REQUEST_IS_REPLICA: "AccessRequestByIsReplica",
  ACCESS_REQUEST_REQUESTER_ARN: "AccessRequestByRequesterArn",
  ACCESS_REQUEST_REQUESTER_ID: "AccessRequestByRequesterId",
  ACCESS_REQUEST_SOURCE_ACCOUNT_ID: "AccessRequestBySourceAccountId",
  ACCESS_REQUEST_SOURCE_OPS_ITEM_ID: "AccessRequestBySourceOpsItemId",
  ACCESS_REQUEST_SOURCE_REGION: "AccessRequestBySourceRegion",
  ACCESS_REQUEST_TARGET_RESOURCE_ID: "AccessRequestByTargetResourceId",
  ACCOUNT_ID: "AccountId",
  ACTUAL_END_TIME: "ActualEndTime",
  ACTUAL_START_TIME: "ActualStartTime",
  AUTOMATION_ID: "AutomationId",
  CATEGORY: "Category",
  CHANGE_REQUEST_APPROVER_ARN: "ChangeRequestByApproverArn",
  CHANGE_REQUEST_APPROVER_NAME: "ChangeRequestByApproverName",
  CHANGE_REQUEST_REQUESTER_ARN: "ChangeRequestByRequesterArn",
  CHANGE_REQUEST_REQUESTER_NAME: "ChangeRequestByRequesterName",
  CHANGE_REQUEST_TARGETS_RESOURCE_GROUP: "ChangeRequestByTargetsResourceGroup",
  CHANGE_REQUEST_TEMPLATE: "ChangeRequestByTemplate",
  CREATED_BY: "CreatedBy",
  CREATED_TIME: "CreatedTime",
  INSIGHT_TYPE: "InsightByType",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  OPERATIONAL_DATA: "OperationalData",
  OPERATIONAL_DATA_KEY: "OperationalDataKey",
  OPERATIONAL_DATA_VALUE: "OperationalDataValue",
  OPSITEM_ID: "OpsItemId",
  OPSITEM_TYPE: "OpsItemType",
  PLANNED_END_TIME: "PlannedEndTime",
  PLANNED_START_TIME: "PlannedStartTime",
  PRIORITY: "Priority",
  RESOURCE_ID: "ResourceId",
  SEVERITY: "Severity",
  SOURCE: "Source",
  STATUS: "Status",
  TITLE: "Title",
} as const;
/**
 * @public
 */
export type OpsItemFilterKey = (typeof OpsItemFilterKey)[keyof typeof OpsItemFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemFilterOperator = {
  CONTAINS: "Contains",
  EQUAL: "Equal",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
} as const;
/**
 * @public
 */
export type OpsItemFilterOperator = (typeof OpsItemFilterOperator)[keyof typeof OpsItemFilterOperator];

/**
 * @public
 * @enum
 */
export const OpsItemStatus = {
  APPROVED: "Approved",
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
  CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
  CLOSED: "Closed",
  COMPLETED_WITH_FAILURE: "CompletedWithFailure",
  COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  OPEN: "Open",
  PENDING: "Pending",
  PENDING_APPROVAL: "PendingApproval",
  PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
  REJECTED: "Rejected",
  RESOLVED: "Resolved",
  REVOKED: "Revoked",
  RUNBOOK_IN_PROGRESS: "RunbookInProgress",
  SCHEDULED: "Scheduled",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type OpsItemStatus = (typeof OpsItemStatus)[keyof typeof OpsItemStatus];

/**
 * @public
 * @enum
 */
export const ParametersFilterKey = {
  KEY_ID: "KeyId",
  NAME: "Name",
  TYPE: "Type",
} as const;
/**
 * @public
 */
export type ParametersFilterKey = (typeof ParametersFilterKey)[keyof typeof ParametersFilterKey];

/**
 * @public
 * @enum
 */
export const ParameterTier = {
  ADVANCED: "Advanced",
  INTELLIGENT_TIERING: "Intelligent-Tiering",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type ParameterTier = (typeof ParameterTier)[keyof typeof ParameterTier];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  SECURE_STRING: "SecureString",
  STRING: "String",
  STRING_LIST: "StringList",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const PatchSet = {
  Application: "APPLICATION",
  Os: "OS",
} as const;
/**
 * @public
 */
export type PatchSet = (typeof PatchSet)[keyof typeof PatchSet];

/**
 * @public
 * @enum
 */
export const PatchProperty = {
  PatchClassification: "CLASSIFICATION",
  PatchMsrcSeverity: "MSRC_SEVERITY",
  PatchPriority: "PRIORITY",
  PatchProductFamily: "PRODUCT_FAMILY",
  PatchSeverity: "SEVERITY",
  Product: "PRODUCT",
} as const;
/**
 * @public
 */
export type PatchProperty = (typeof PatchProperty)[keyof typeof PatchProperty];

/**
 * @public
 * @enum
 */
export const SessionFilterKey = {
  ACCESS_TYPE: "AccessType",
  INVOKED_AFTER: "InvokedAfter",
  INVOKED_BEFORE: "InvokedBefore",
  OWNER: "Owner",
  SESSION_ID: "SessionId",
  STATUS: "Status",
  TARGET_ID: "Target",
} as const;
/**
 * @public
 */
export type SessionFilterKey = (typeof SessionFilterKey)[keyof typeof SessionFilterKey];

/**
 * @public
 * @enum
 */
export const SessionState = {
  ACTIVE: "Active",
  HISTORY: "History",
} as const;
/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  CONNECTED: "Connected",
  CONNECTING: "Connecting",
  DISCONNECTED: "Disconnected",
  FAILED: "Failed",
  TERMINATED: "Terminated",
  TERMINATING: "Terminating",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * @enum
 */
export const CalendarState = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type CalendarState = (typeof CalendarState)[keyof typeof CalendarState];

/**
 * @public
 * @enum
 */
export const CommandInvocationStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  DELAYED: "Delayed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type CommandInvocationStatus = (typeof CommandInvocationStatus)[keyof typeof CommandInvocationStatus];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "connected",
  NOT_CONNECTED: "notconnected",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const AttachmentHashType = {
  SHA256: "Sha256",
} as const;
/**
 * @public
 */
export type AttachmentHashType = (typeof AttachmentHashType)[keyof typeof AttachmentHashType];

/**
 * @public
 * @enum
 */
export const ImpactType = {
  MUTATING: "Mutating",
  NON_MUTATING: "NonMutating",
  UNDETERMINED: "Undetermined",
} as const;
/**
 * @public
 */
export type ImpactType = (typeof ImpactType)[keyof typeof ImpactType];

/**
 * @public
 * @enum
 */
export const ExecutionPreviewStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type ExecutionPreviewStatus = (typeof ExecutionPreviewStatus)[keyof typeof ExecutionPreviewStatus];

/**
 * @public
 * @enum
 */
export const InventoryQueryOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type InventoryQueryOperatorType = (typeof InventoryQueryOperatorType)[keyof typeof InventoryQueryOperatorType];

/**
 * @public
 * @enum
 */
export const InventoryAttributeDataType = {
  NUMBER: "number",
  STRING: "string",
} as const;
/**
 * @public
 */
export type InventoryAttributeDataType = (typeof InventoryAttributeDataType)[keyof typeof InventoryAttributeDataType];

/**
 * @public
 * @enum
 */
export const NotificationEvent = {
  ALL: "All",
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type NotificationEvent = (typeof NotificationEvent)[keyof typeof NotificationEvent];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  Command: "Command",
  Invocation: "Invocation",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 * @enum
 */
export const OpsFilterOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  LESS_THAN: "LessThan",
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type OpsFilterOperatorType = (typeof OpsFilterOperatorType)[keyof typeof OpsFilterOperatorType];

/**
 * @public
 * @enum
 */
export const AssociationFilterKey = {
  AssociationId: "AssociationId",
  AssociationName: "AssociationName",
  InstanceId: "InstanceId",
  LastExecutedAfter: "LastExecutedAfter",
  LastExecutedBefore: "LastExecutedBefore",
  Name: "Name",
  ResourceGroupName: "ResourceGroupName",
  Status: "AssociationStatusName",
} as const;
/**
 * @public
 */
export type AssociationFilterKey = (typeof AssociationFilterKey)[keyof typeof AssociationFilterKey];

/**
 * @public
 * @enum
 */
export const CommandFilterKey = {
  DOCUMENT_NAME: "DocumentName",
  EXECUTION_STAGE: "ExecutionStage",
  INVOKED_AFTER: "InvokedAfter",
  INVOKED_BEFORE: "InvokedBefore",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type CommandFilterKey = (typeof CommandFilterKey)[keyof typeof CommandFilterKey];

/**
 * @public
 * @enum
 */
export const CommandPluginStatus = {
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type CommandPluginStatus = (typeof CommandPluginStatus)[keyof typeof CommandPluginStatus];

/**
 * @public
 * @enum
 */
export const CommandStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type CommandStatus = (typeof CommandStatus)[keyof typeof CommandStatus];

/**
 * @public
 * @enum
 */
export const ComplianceQueryOperatorType = {
  BeginWith: "BEGIN_WITH",
  Equal: "EQUAL",
  GreaterThan: "GREATER_THAN",
  LessThan: "LESS_THAN",
  NotEqual: "NOT_EQUAL",
} as const;
/**
 * @public
 */
export type ComplianceQueryOperatorType =
  (typeof ComplianceQueryOperatorType)[keyof typeof ComplianceQueryOperatorType];

/**
 * @public
 * @enum
 */
export const ComplianceSeverity = {
  Critical: "CRITICAL",
  High: "HIGH",
  Informational: "INFORMATIONAL",
  Low: "LOW",
  Medium: "MEDIUM",
  Unspecified: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type ComplianceSeverity = (typeof ComplianceSeverity)[keyof typeof ComplianceSeverity];

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  Compliant: "COMPLIANT",
  NonCompliant: "NON_COMPLIANT",
} as const;
/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * @public
 * @enum
 */
export const DocumentMetadataEnum = {
  DocumentReviews: "DocumentReviews",
} as const;
/**
 * @public
 */
export type DocumentMetadataEnum = (typeof DocumentMetadataEnum)[keyof typeof DocumentMetadataEnum];

/**
 * @public
 * @enum
 */
export const DocumentReviewCommentType = {
  Comment: "Comment",
} as const;
/**
 * @public
 */
export type DocumentReviewCommentType = (typeof DocumentReviewCommentType)[keyof typeof DocumentReviewCommentType];

/**
 * @public
 * @enum
 */
export const DocumentFilterKey = {
  DocumentType: "DocumentType",
  Name: "Name",
  Owner: "Owner",
  PlatformTypes: "PlatformTypes",
} as const;
/**
 * @public
 */
export type DocumentFilterKey = (typeof DocumentFilterKey)[keyof typeof DocumentFilterKey];

/**
 * @public
 * @enum
 */
export const NodeFilterKey = {
  ACCOUNT_ID: "AccountId",
  AGENT_TYPE: "AgentType",
  AGENT_VERSION: "AgentVersion",
  COMPUTER_NAME: "ComputerName",
  INSTANCE_ID: "InstanceId",
  INSTANCE_STATUS: "InstanceStatus",
  IP_ADDRESS: "IpAddress",
  MANAGED_STATUS: "ManagedStatus",
  ORGANIZATIONAL_UNIT_ID: "OrganizationalUnitId",
  ORGANIZATIONAL_UNIT_PATH: "OrganizationalUnitPath",
  PLATFORM_NAME: "PlatformName",
  PLATFORM_TYPE: "PlatformType",
  PLATFORM_VERSION: "PlatformVersion",
  REGION: "Region",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type NodeFilterKey = (typeof NodeFilterKey)[keyof typeof NodeFilterKey];

/**
 * @public
 * @enum
 */
export const NodeFilterOperatorType = {
  BEGIN_WITH: "BeginWith",
  EQUAL: "Equal",
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type NodeFilterOperatorType = (typeof NodeFilterOperatorType)[keyof typeof NodeFilterOperatorType];

/**
 * @public
 * @enum
 */
export const ManagedStatus = {
  ALL: "All",
  MANAGED: "Managed",
  UNMANAGED: "Unmanaged",
} as const;
/**
 * @public
 */
export type ManagedStatus = (typeof ManagedStatus)[keyof typeof ManagedStatus];

/**
 * @public
 * @enum
 */
export const NodeAggregatorType = {
  COUNT: "Count",
} as const;
/**
 * @public
 */
export type NodeAggregatorType = (typeof NodeAggregatorType)[keyof typeof NodeAggregatorType];

/**
 * @public
 * @enum
 */
export const NodeAttributeName = {
  AGENT_VERSION: "AgentVersion",
  PLATFORM_NAME: "PlatformName",
  PLATFORM_TYPE: "PlatformType",
  PLATFORM_VERSION: "PlatformVersion",
  REGION: "Region",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type NodeAttributeName = (typeof NodeAttributeName)[keyof typeof NodeAttributeName];

/**
 * @public
 * @enum
 */
export const NodeTypeName = {
  INSTANCE: "Instance",
} as const;
/**
 * @public
 */
export type NodeTypeName = (typeof NodeTypeName)[keyof typeof NodeTypeName];

/**
 * @public
 * @enum
 */
export const OpsItemEventFilterKey = {
  OPSITEM_ID: "OpsItemId",
} as const;
/**
 * @public
 */
export type OpsItemEventFilterKey = (typeof OpsItemEventFilterKey)[keyof typeof OpsItemEventFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemEventFilterOperator = {
  EQUAL: "Equal",
} as const;
/**
 * @public
 */
export type OpsItemEventFilterOperator = (typeof OpsItemEventFilterOperator)[keyof typeof OpsItemEventFilterOperator];

/**
 * @public
 * @enum
 */
export const OpsItemRelatedItemsFilterKey = {
  ASSOCIATION_ID: "AssociationId",
  RESOURCE_TYPE: "ResourceType",
  RESOURCE_URI: "ResourceUri",
} as const;
/**
 * @public
 */
export type OpsItemRelatedItemsFilterKey =
  (typeof OpsItemRelatedItemsFilterKey)[keyof typeof OpsItemRelatedItemsFilterKey];

/**
 * @public
 * @enum
 */
export const OpsItemRelatedItemsFilterOperator = {
  EQUAL: "Equal",
} as const;
/**
 * @public
 */
export type OpsItemRelatedItemsFilterOperator =
  (typeof OpsItemRelatedItemsFilterOperator)[keyof typeof OpsItemRelatedItemsFilterOperator];

/**
 * @public
 * @enum
 */
export const LastResourceDataSyncStatus = {
  FAILED: "Failed",
  INPROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type LastResourceDataSyncStatus = (typeof LastResourceDataSyncStatus)[keyof typeof LastResourceDataSyncStatus];

/**
 * @public
 * @enum
 */
export const ComplianceUploadType = {
  Complete: "COMPLETE",
  Partial: "PARTIAL",
} as const;
/**
 * @public
 */
export type ComplianceUploadType = (typeof ComplianceUploadType)[keyof typeof ComplianceUploadType];

/**
 * @public
 * @enum
 */
export const SignalType = {
  APPROVE: "Approve",
  REJECT: "Reject",
  RESUME: "Resume",
  REVOKE: "Revoke",
  START_STEP: "StartStep",
  STOP_STEP: "StopStep",
} as const;
/**
 * @public
 */
export type SignalType = (typeof SignalType)[keyof typeof SignalType];

/**
 * @public
 * @enum
 */
export const StopType = {
  CANCEL: "Cancel",
  COMPLETE: "Complete",
} as const;
/**
 * @public
 */
export type StopType = (typeof StopType)[keyof typeof StopType];

/**
 * @public
 * @enum
 */
export const DocumentReviewAction = {
  Approve: "Approve",
  Reject: "Reject",
  SendForReview: "SendForReview",
  UpdateReview: "UpdateReview",
} as const;
/**
 * @public
 */
export type DocumentReviewAction = (typeof DocumentReviewAction)[keyof typeof DocumentReviewAction];
