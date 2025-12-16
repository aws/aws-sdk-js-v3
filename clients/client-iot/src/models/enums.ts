// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AbortAction = {
  CANCEL: "CANCEL",
} as const;
/**
 * @public
 */
export type AbortAction = (typeof AbortAction)[keyof typeof AbortAction];

/**
 * @public
 * @enum
 */
export const JobExecutionFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type JobExecutionFailureType = (typeof JobExecutionFailureType)[keyof typeof JobExecutionFailureType];

/**
 * @public
 * @enum
 */
export const DynamoKeyType = {
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type DynamoKeyType = (typeof DynamoKeyType)[keyof typeof DynamoKeyType];

/**
 * @public
 * @enum
 */
export const CannedAccessControlList = {
  AuthenticatedRead: "authenticated-read",
  AwsExecRead: "aws-exec-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  BucketOwnerRead: "bucket-owner-read",
  LogDeliveryWrite: "log-delivery-write",
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
} as const;
/**
 * @public
 */
export type CannedAccessControlList = (typeof CannedAccessControlList)[keyof typeof CannedAccessControlList];

/**
 * @public
 * @enum
 */
export const MessageFormat = {
  JSON: "JSON",
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type MessageFormat = (typeof MessageFormat)[keyof typeof MessageFormat];

/**
 * @public
 * @enum
 */
export const ActionType = {
  CONNECT: "CONNECT",
  PUBLISH: "PUBLISH",
  RECEIVE: "RECEIVE",
  SUBSCRIBE: "SUBSCRIBE",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GREATER_THAN: "greater-than",
  GREATER_THAN_EQUALS: "greater-than-equals",
  IN_CIDR_SET: "in-cidr-set",
  IN_PORT_SET: "in-port-set",
  IN_SET: "in-set",
  LESS_THAN: "less-than",
  LESS_THAN_EQUALS: "less-than-equals",
  NOT_IN_CIDR_SET: "not-in-cidr-set",
  NOT_IN_PORT_SET: "not-in-port-set",
  NOT_IN_SET: "not-in-set",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const ConfidenceLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel];

/**
 * @public
 * @enum
 */
export const DimensionValueOperator = {
  IN: "IN",
  NOT_IN: "NOT_IN",
} as const;
/**
 * @public
 */
export type DimensionValueOperator = (typeof DimensionValueOperator)[keyof typeof DimensionValueOperator];

/**
 * @public
 * @enum
 */
export const VerificationState = {
  BENIGN_POSITIVE: "BENIGN_POSITIVE",
  FALSE_POSITIVE: "FALSE_POSITIVE",
  TRUE_POSITIVE: "TRUE_POSITIVE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type VerificationState = (typeof VerificationState)[keyof typeof VerificationState];

/**
 * @public
 * @enum
 */
export const AggregationTypeName = {
  CARDINALITY: "Cardinality",
  PERCENTILES: "Percentiles",
  STATISTICS: "Statistics",
} as const;
/**
 * @public
 */
export type AggregationTypeName = (typeof AggregationTypeName)[keyof typeof AggregationTypeName];

/**
 * @public
 * @enum
 */
export const AlertTargetType = {
  SNS: "SNS",
} as const;
/**
 * @public
 */
export type AlertTargetType = (typeof AlertTargetType)[keyof typeof AlertTargetType];

/**
 * @public
 * @enum
 */
export const ApplicationProtocol = {
  DEFAULT: "DEFAULT",
  HTTPS: "HTTPS",
  MQTT_WSS: "MQTT_WSS",
  SECURE_MQTT: "SECURE_MQTT",
} as const;
/**
 * @public
 */
export type ApplicationProtocol = (typeof ApplicationProtocol)[keyof typeof ApplicationProtocol];

/**
 * @public
 * @enum
 */
export const SbomValidationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type SbomValidationStatus = (typeof SbomValidationStatus)[keyof typeof SbomValidationStatus];

/**
 * @public
 * @enum
 */
export const ThingPrincipalType = {
  EXCLUSIVE_THING: "EXCLUSIVE_THING",
  NON_EXCLUSIVE_THING: "NON_EXCLUSIVE_THING",
} as const;
/**
 * @public
 */
export type ThingPrincipalType = (typeof ThingPrincipalType)[keyof typeof ThingPrincipalType];

/**
 * @public
 * @enum
 */
export const ConfigName = {
  CERT_AGE_THRESHOLD_IN_DAYS: "CERT_AGE_THRESHOLD_IN_DAYS",
  CERT_EXPIRATION_THRESHOLD_IN_DAYS: "CERT_EXPIRATION_THRESHOLD_IN_DAYS",
} as const;
/**
 * @public
 */
export type ConfigName = (typeof ConfigName)[keyof typeof ConfigName];

/**
 * @public
 * @enum
 */
export const AuditCheckRunStatus = {
  CANCELED: "CANCELED",
  COMPLETED_COMPLIANT: "COMPLETED_COMPLIANT",
  COMPLETED_NON_COMPLIANT: "COMPLETED_NON_COMPLIANT",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  WAITING_FOR_DATA_COLLECTION: "WAITING_FOR_DATA_COLLECTION",
} as const;
/**
 * @public
 */
export type AuditCheckRunStatus = (typeof AuditCheckRunStatus)[keyof typeof AuditCheckRunStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ACCOUNT_SETTINGS: "ACCOUNT_SETTINGS",
  CA_CERTIFICATE: "CA_CERTIFICATE",
  CLIENT_ID: "CLIENT_ID",
  COGNITO_IDENTITY_POOL: "COGNITO_IDENTITY_POOL",
  DEVICE_CERTIFICATE: "DEVICE_CERTIFICATE",
  IAM_ROLE: "IAM_ROLE",
  IOT_POLICY: "IOT_POLICY",
  ISSUER_CERTIFICATE: "ISSUER_CERTIFICATE",
  ROLE_ALIAS: "ROLE_ALIAS",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const AuditFindingSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type AuditFindingSeverity = (typeof AuditFindingSeverity)[keyof typeof AuditFindingSeverity];

/**
 * @public
 * @enum
 */
export const AuditFrequency = {
  BIWEEKLY: "BIWEEKLY",
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type AuditFrequency = (typeof AuditFrequency)[keyof typeof AuditFrequency];

/**
 * @public
 * @enum
 */
export const AuditMitigationActionsExecutionStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type AuditMitigationActionsExecutionStatus =
  (typeof AuditMitigationActionsExecutionStatus)[keyof typeof AuditMitigationActionsExecutionStatus];

/**
 * @public
 * @enum
 */
export const AuditMitigationActionsTaskStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AuditMitigationActionsTaskStatus =
  (typeof AuditMitigationActionsTaskStatus)[keyof typeof AuditMitigationActionsTaskStatus];

/**
 * @public
 * @enum
 */
export const AuditNotificationType = {
  SNS: "SNS",
} as const;
/**
 * @public
 */
export type AuditNotificationType = (typeof AuditNotificationType)[keyof typeof AuditNotificationType];

/**
 * @public
 * @enum
 */
export const AuditTaskStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AuditTaskStatus = (typeof AuditTaskStatus)[keyof typeof AuditTaskStatus];

/**
 * @public
 * @enum
 */
export const AuditTaskType = {
  ON_DEMAND_AUDIT_TASK: "ON_DEMAND_AUDIT_TASK",
  SCHEDULED_AUDIT_TASK: "SCHEDULED_AUDIT_TASK",
} as const;
/**
 * @public
 */
export type AuditTaskType = (typeof AuditTaskType)[keyof typeof AuditTaskType];

/**
 * @public
 * @enum
 */
export const AuthDecision = {
  ALLOWED: "ALLOWED",
  EXPLICIT_DENY: "EXPLICIT_DENY",
  IMPLICIT_DENY: "IMPLICIT_DENY",
} as const;
/**
 * @public
 */
export type AuthDecision = (typeof AuthDecision)[keyof typeof AuthDecision];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  AWS_SIGV4: "AWS_SIGV4",
  AWS_X509: "AWS_X509",
  CUSTOM_AUTH: "CUSTOM_AUTH",
  CUSTOM_AUTH_X509: "CUSTOM_AUTH_X509",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const AuthorizerStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AuthorizerStatus = (typeof AuthorizerStatus)[keyof typeof AuthorizerStatus];

/**
 * @public
 * @enum
 */
export const AutoRegistrationStatus = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type AutoRegistrationStatus = (typeof AutoRegistrationStatus)[keyof typeof AutoRegistrationStatus];

/**
 * @public
 * @enum
 */
export const CertificateProviderOperation = {
  CreateCertificateFromCsr: "CreateCertificateFromCsr",
} as const;
/**
 * @public
 */
export type CertificateProviderOperation =
  (typeof CertificateProviderOperation)[keyof typeof CertificateProviderOperation];

/**
 * @public
 * @enum
 */
export const CommandParameterType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  LONG: "LONG",
  STRING: "STRING",
  UNSIGNEDLONG: "UNSIGNEDLONG",
} as const;
/**
 * @public
 */
export type CommandParameterType = (typeof CommandParameterType)[keyof typeof CommandParameterType];

/**
 * @public
 * @enum
 */
export const CommandParameterValueComparisonOperator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUALS: "GREATER_THAN_EQUALS",
  IN_RANGE: "IN_RANGE",
  IN_SET: "IN_SET",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  NOT_IN_RANGE: "NOT_IN_RANGE",
  NOT_IN_SET: "NOT_IN_SET",
} as const;
/**
 * @public
 */
export type CommandParameterValueComparisonOperator =
  (typeof CommandParameterValueComparisonOperator)[keyof typeof CommandParameterValueComparisonOperator];

/**
 * @public
 * @enum
 */
export const CommandNamespace = {
  AWSIoT: "AWS-IoT",
  AWSIoTFleetWise: "AWS-IoT-FleetWise",
} as const;
/**
 * @public
 */
export type CommandNamespace = (typeof CommandNamespace)[keyof typeof CommandNamespace];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  CBOR: "CBOR",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const CustomMetricType = {
  IP_ADDRESS_LIST: "ip-address-list",
  NUMBER: "number",
  NUMBER_LIST: "number-list",
  STRING_LIST: "string-list",
} as const;
/**
 * @public
 */
export type CustomMetricType = (typeof CustomMetricType)[keyof typeof CustomMetricType];

/**
 * @public
 * @enum
 */
export const DimensionType = {
  TOPIC_FILTER: "TOPIC_FILTER",
} as const;
/**
 * @public
 */
export type DimensionType = (typeof DimensionType)[keyof typeof DimensionType];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  CREDENTIAL_PROVIDER: "CREDENTIAL_PROVIDER",
  DATA: "DATA",
  JOBS: "JOBS",
} as const;
/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 * @enum
 */
export const FleetMetricUnit = {
  Bits: "Bits",
  BitsSecond: "Bits/Second",
  Bytes: "Bytes",
  BytesSecond: "Bytes/Second",
  Count: "Count",
  CountSecond: "Count/Second",
  Gigabits: "Gigabits",
  GigabitsSecond: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  GigabytesSecond: "Gigabytes/Second",
  Kilobits: "Kilobits",
  KilobitsSecond: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  KilobytesSecond: "Kilobytes/Second",
  Megabits: "Megabits",
  MegabitsSecond: "Megabits/Second",
  Megabytes: "Megabytes",
  MegabytesSecond: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  TerabitsSecond: "Terabits/Second",
  Terabytes: "Terabytes",
  TerabytesSecond: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type FleetMetricUnit = (typeof FleetMetricUnit)[keyof typeof FleetMetricUnit];

/**
 * @public
 * @enum
 */
export const RetryableFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type RetryableFailureType = (typeof RetryableFailureType)[keyof typeof RetryableFailureType];

/**
 * @public
 * @enum
 */
export const JobEndBehavior = {
  CANCEL: "CANCEL",
  FORCE_CANCEL: "FORCE_CANCEL",
  STOP_ROLLOUT: "STOP_ROLLOUT",
} as const;
/**
 * @public
 */
export type JobEndBehavior = (typeof JobEndBehavior)[keyof typeof JobEndBehavior];

/**
 * @public
 * @enum
 */
export const TargetSelection = {
  CONTINUOUS: "CONTINUOUS",
  SNAPSHOT: "SNAPSHOT",
} as const;
/**
 * @public
 */
export type TargetSelection = (typeof TargetSelection)[keyof typeof TargetSelection];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  DISABLED: "DISABLED",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const PolicyTemplateName = {
  BLANK_POLICY: "BLANK_POLICY",
} as const;
/**
 * @public
 */
export type PolicyTemplateName = (typeof PolicyTemplateName)[keyof typeof PolicyTemplateName];

/**
 * @public
 * @enum
 */
export const CACertificateUpdateAction = {
  DEACTIVATE: "DEACTIVATE",
} as const;
/**
 * @public
 */
export type CACertificateUpdateAction = (typeof CACertificateUpdateAction)[keyof typeof CACertificateUpdateAction];

/**
 * @public
 * @enum
 */
export const DeviceCertificateUpdateAction = {
  DEACTIVATE: "DEACTIVATE",
} as const;
/**
 * @public
 */
export type DeviceCertificateUpdateAction =
  (typeof DeviceCertificateUpdateAction)[keyof typeof DeviceCertificateUpdateAction];

/**
 * @public
 * @enum
 */
export const AwsJobAbortCriteriaAbortAction = {
  CANCEL: "CANCEL",
} as const;
/**
 * @public
 */
export type AwsJobAbortCriteriaAbortAction =
  (typeof AwsJobAbortCriteriaAbortAction)[keyof typeof AwsJobAbortCriteriaAbortAction];

/**
 * @public
 * @enum
 */
export const AwsJobAbortCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type AwsJobAbortCriteriaFailureType =
  (typeof AwsJobAbortCriteriaFailureType)[keyof typeof AwsJobAbortCriteriaFailureType];

/**
 * @public
 * @enum
 */
export const Protocol = {
  HTTP: "HTTP",
  MQTT: "MQTT",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const OTAUpdateStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type OTAUpdateStatus = (typeof OTAUpdateStatus)[keyof typeof OTAUpdateStatus];

/**
 * @public
 * @enum
 */
export const PackageVersionStatus = {
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type PackageVersionStatus = (typeof PackageVersionStatus)[keyof typeof PackageVersionStatus];

/**
 * @public
 * @enum
 */
export const TemplateType = {
  FLEET_PROVISIONING: "FLEET_PROVISIONING",
  JITP: "JITP",
} as const;
/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRI: "FRI",
  MON: "MON",
  SAT: "SAT",
  SUN: "SUN",
  THU: "THU",
  TUE: "TUE",
  WED: "WED",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const TopicRuleDestinationStatus = {
  DELETING: "DELETING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TopicRuleDestinationStatus = (typeof TopicRuleDestinationStatus)[keyof typeof TopicRuleDestinationStatus];

/**
 * @public
 * @enum
 */
export const LogTargetType = {
  CLIENT_ID: "CLIENT_ID",
  DEFAULT: "DEFAULT",
  PRINCIPAL_ID: "PRINCIPAL_ID",
  SOURCE_IP: "SOURCE_IP",
  THING_GROUP: "THING_GROUP",
} as const;
/**
 * @public
 */
export type LogTargetType = (typeof LogTargetType)[keyof typeof LogTargetType];

/**
 * @public
 * @enum
 */
export const CertificateMode = {
  DEFAULT: "DEFAULT",
  SNI_ONLY: "SNI_ONLY",
} as const;
/**
 * @public
 */
export type CertificateMode = (typeof CertificateMode)[keyof typeof CertificateMode];

/**
 * @public
 * @enum
 */
export const CACertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type CACertificateStatus = (typeof CACertificateStatus)[keyof typeof CACertificateStatus];

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  PENDING_TRANSFER: "PENDING_TRANSFER",
  REGISTER_INACTIVE: "REGISTER_INACTIVE",
  REVOKED: "REVOKED",
} as const;
/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * @enum
 */
export const DetectMitigationActionsTaskStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type DetectMitigationActionsTaskStatus =
  (typeof DetectMitigationActionsTaskStatus)[keyof typeof DetectMitigationActionsTaskStatus];

/**
 * @public
 * @enum
 */
export const DomainConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DomainConfigurationStatus = (typeof DomainConfigurationStatus)[keyof typeof DomainConfigurationStatus];

/**
 * @public
 * @enum
 */
export const DomainType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  ENDPOINT: "ENDPOINT",
} as const;
/**
 * @public
 */
export type DomainType = (typeof DomainType)[keyof typeof DomainType];

/**
 * @public
 * @enum
 */
export const ServerCertificateStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type ServerCertificateStatus = (typeof ServerCertificateStatus)[keyof typeof ServerCertificateStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const EventType = {
  CA_CERTIFICATE: "CA_CERTIFICATE",
  CERTIFICATE: "CERTIFICATE",
  JOB: "JOB",
  JOB_EXECUTION: "JOB_EXECUTION",
  POLICY: "POLICY",
  THING: "THING",
  THING_GROUP: "THING_GROUP",
  THING_GROUP_HIERARCHY: "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP: "THING_GROUP_MEMBERSHIP",
  THING_TYPE: "THING_TYPE",
  THING_TYPE_ASSOCIATION: "THING_TYPE_ASSOCIATION",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;
/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const JobExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type JobExecutionStatus = (typeof JobExecutionStatus)[keyof typeof JobExecutionStatus];

/**
 * @public
 * @enum
 */
export const MitigationActionType = {
  ADD_THINGS_TO_THING_GROUP: "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING: "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS: "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION: "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE: "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE: "UPDATE_DEVICE_CERTIFICATE",
} as const;
/**
 * @public
 */
export type MitigationActionType = (typeof MitigationActionType)[keyof typeof MitigationActionType];

/**
 * @public
 * @enum
 */
export const DynamicGroupStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;
/**
 * @public
 */
export type DynamicGroupStatus = (typeof DynamicGroupStatus)[keyof typeof DynamicGroupStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PENDING_BUILD: "PENDING_BUILD",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const CommandExecutionStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type CommandExecutionStatus = (typeof CommandExecutionStatus)[keyof typeof CommandExecutionStatus];

/**
 * @public
 * @enum
 */
export const FieldType = {
  BOOLEAN: "Boolean",
  NUMBER: "Number",
  STRING: "String",
} as const;
/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * @enum
 */
export const ThingGroupIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;
/**
 * @public
 */
export type ThingGroupIndexingMode = (typeof ThingGroupIndexingMode)[keyof typeof ThingGroupIndexingMode];

/**
 * @public
 * @enum
 */
export const DeviceDefenderIndexingMode = {
  OFF: "OFF",
  VIOLATIONS: "VIOLATIONS",
} as const;
/**
 * @public
 */
export type DeviceDefenderIndexingMode = (typeof DeviceDefenderIndexingMode)[keyof typeof DeviceDefenderIndexingMode];

/**
 * @public
 * @enum
 */
export const TargetFieldOrder = {
  LatLon: "LatLon",
  LonLat: "LonLat",
} as const;
/**
 * @public
 */
export type TargetFieldOrder = (typeof TargetFieldOrder)[keyof typeof TargetFieldOrder];

/**
 * @public
 * @enum
 */
export const NamedShadowIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;
/**
 * @public
 */
export type NamedShadowIndexingMode = (typeof NamedShadowIndexingMode)[keyof typeof NamedShadowIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingConnectivityIndexingMode = {
  OFF: "OFF",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ThingConnectivityIndexingMode =
  (typeof ThingConnectivityIndexingMode)[keyof typeof ThingConnectivityIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingIndexingMode = {
  OFF: "OFF",
  REGISTRY: "REGISTRY",
  REGISTRY_AND_SHADOW: "REGISTRY_AND_SHADOW",
} as const;
/**
 * @public
 */
export type ThingIndexingMode = (typeof ThingIndexingMode)[keyof typeof ThingIndexingMode];

/**
 * @public
 * @enum
 */
export const DisconnectReasonValue = {
  AUTH_ERROR: "AUTH_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  CLIENT_INITIATED_DISCONNECT: "CLIENT_INITIATED_DISCONNECT",
  CONNECTION_LOST: "CONNECTION_LOST",
  CUSTOMAUTH_TTL_EXPIRATION: "CUSTOMAUTH_TTL_EXPIRATION",
  DUPLICATE_CLIENTID: "DUPLICATE_CLIENTID",
  FORBIDDEN_ACCESS: "FORBIDDEN_ACCESS",
  MQTT_KEEP_ALIVE_TIMEOUT: "MQTT_KEEP_ALIVE_TIMEOUT",
  NONE: "NONE",
  SERVER_ERROR: "SERVER_ERROR",
  SERVER_INITIATED_DISCONNECT: "SERVER_INITIATED_DISCONNECT",
  THROTTLED: "THROTTLED",
  UNKNOWN: "UNKNOWN",
  WEBSOCKET_TTL_EXPIRATION: "WEBSOCKET_TTL_EXPIRATION",
} as const;
/**
 * @public
 */
export type DisconnectReasonValue = (typeof DisconnectReasonValue)[keyof typeof DisconnectReasonValue];

/**
 * @public
 * @enum
 */
export const BehaviorCriteriaType = {
  MACHINE_LEARNING: "MACHINE_LEARNING",
  STATIC: "STATIC",
  STATISTICAL: "STATISTICAL",
} as const;
/**
 * @public
 */
export type BehaviorCriteriaType = (typeof BehaviorCriteriaType)[keyof typeof BehaviorCriteriaType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const DetectMitigationActionExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type DetectMitigationActionExecutionStatus =
  (typeof DetectMitigationActionExecutionStatus)[keyof typeof DetectMitigationActionExecutionStatus];

/**
 * @public
 * @enum
 */
export const SbomValidationResult = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type SbomValidationResult = (typeof SbomValidationResult)[keyof typeof SbomValidationResult];

/**
 * @public
 * @enum
 */
export const SbomValidationErrorCode = {
  FILE_SIZE_LIMIT_EXCEEDED: "FILE_SIZE_LIMIT_EXCEEDED",
  INCOMPATIBLE_FORMAT: "INCOMPATIBLE_FORMAT",
} as const;
/**
 * @public
 */
export type SbomValidationErrorCode = (typeof SbomValidationErrorCode)[keyof typeof SbomValidationErrorCode];

/**
 * @public
 * @enum
 */
export const ReportType = {
  ERRORS: "ERRORS",
  RESULTS: "RESULTS",
} as const;
/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 * @enum
 */
export const ViolationEventType = {
  ALARM_CLEARED: "alarm-cleared",
  ALARM_INVALIDATED: "alarm-invalidated",
  IN_ALARM: "in-alarm",
} as const;
/**
 * @public
 */
export type ViolationEventType = (typeof ViolationEventType)[keyof typeof ViolationEventType];

/**
 * @public
 * @enum
 */
export const PackageVersionAction = {
  DEPRECATE: "DEPRECATE",
  PUBLISH: "PUBLISH",
} as const;
/**
 * @public
 */
export type PackageVersionAction = (typeof PackageVersionAction)[keyof typeof PackageVersionAction];
