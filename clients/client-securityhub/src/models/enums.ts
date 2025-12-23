// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SeverityLabel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type SeverityLabel = (typeof SeverityLabel)[keyof typeof SeverityLabel];

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
export const WorkflowStatus = {
  NEW: "NEW",
  NOTIFIED: "NOTIFIED",
  RESOLVED: "RESOLVED",
  SUPPRESSED: "SUPPRESSED",
} as const;
/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 * @enum
 */
export const AutomationRulesActionType = {
  FINDING_FIELDS_UPDATE: "FINDING_FIELDS_UPDATE",
} as const;
/**
 * @public
 */
export type AutomationRulesActionType = (typeof AutomationRulesActionType)[keyof typeof AutomationRulesActionType];

/**
 * @public
 * @enum
 */
export const ActorSessionMfaStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ActorSessionMfaStatus = (typeof ActorSessionMfaStatus)[keyof typeof ActorSessionMfaStatus];

/**
 * @public
 * @enum
 */
export const AdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus];

/**
 * @public
 * @enum
 */
export const AllowedOperators = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type AllowedOperators = (typeof AllowedOperators)[keyof typeof AllowedOperators];

/**
 * @public
 * @enum
 */
export const ConfigurationPolicyAssociationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ConfigurationPolicyAssociationStatus =
  (typeof ConfigurationPolicyAssociationStatus)[keyof typeof ConfigurationPolicyAssociationStatus];

/**
 * @public
 * @enum
 */
export const AssociationType = {
  APPLIED: "APPLIED",
  INHERITED: "INHERITED",
} as const;
/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * @enum
 */
export const AutoEnableStandards = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AutoEnableStandards = (typeof AutoEnableStandards)[keyof typeof AutoEnableStandards];

/**
 * @public
 * @enum
 */
export const AutomationRulesActionTypeV2 = {
  EXTERNAL_INTEGRATION: "EXTERNAL_INTEGRATION",
  FINDING_FIELDS_UPDATE: "FINDING_FIELDS_UPDATE",
} as const;
/**
 * @public
 */
export type AutomationRulesActionTypeV2 =
  (typeof AutomationRulesActionTypeV2)[keyof typeof AutomationRulesActionTypeV2];

/**
 * @public
 * @enum
 */
export const StringFilterComparison = {
  CONTAINS: "CONTAINS",
  CONTAINS_WORD: "CONTAINS_WORD",
  EQUALS: "EQUALS",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
  PREFIX_NOT_EQUALS: "PREFIX_NOT_EQUALS",
} as const;
/**
 * @public
 */
export type StringFilterComparison = (typeof StringFilterComparison)[keyof typeof StringFilterComparison];

/**
 * @public
 * @enum
 */
export const DateRangeUnit = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type DateRangeUnit = (typeof DateRangeUnit)[keyof typeof DateRangeUnit];

/**
 * @public
 * @enum
 */
export const MapFilterComparison = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type MapFilterComparison = (typeof MapFilterComparison)[keyof typeof MapFilterComparison];

/**
 * @public
 * @enum
 */
export const RuleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

/**
 * @public
 * @enum
 */
export const RuleStatusV2 = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RuleStatusV2 = (typeof RuleStatusV2)[keyof typeof RuleStatusV2];

/**
 * @public
 * @enum
 */
export const AwsIamAccessKeyStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type AwsIamAccessKeyStatus = (typeof AwsIamAccessKeyStatus)[keyof typeof AwsIamAccessKeyStatus];

/**
 * @public
 * @enum
 */
export const AwsS3BucketNotificationConfigurationS3KeyFilterRuleName = {
  PREFIX: "Prefix",
  SUFFIX: "Suffix",
} as const;
/**
 * @public
 */
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName =
  (typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName)[keyof typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName];

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  FAILED: "FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PASSED: "PASSED",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * @public
 * @enum
 */
export const ConnectionDirection = {
  INBOUND: "INBOUND",
  OUTBOUND: "OUTBOUND",
} as const;
/**
 * @public
 */
export type ConnectionDirection = (typeof ConnectionDirection)[keyof typeof ConnectionDirection];

/**
 * @public
 * @enum
 */
export const MalwareState = {
  OBSERVED: "OBSERVED",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVED: "REMOVED",
} as const;
/**
 * @public
 */
export type MalwareState = (typeof MalwareState)[keyof typeof MalwareState];

/**
 * @public
 * @enum
 */
export const MalwareType = {
  ADWARE: "ADWARE",
  BLENDED_THREAT: "BLENDED_THREAT",
  BOTNET_AGENT: "BOTNET_AGENT",
  COIN_MINER: "COIN_MINER",
  EXPLOIT_KIT: "EXPLOIT_KIT",
  KEYLOGGER: "KEYLOGGER",
  MACRO: "MACRO",
  POTENTIALLY_UNWANTED: "POTENTIALLY_UNWANTED",
  RANSOMWARE: "RANSOMWARE",
  REMOTE_ACCESS: "REMOTE_ACCESS",
  ROOTKIT: "ROOTKIT",
  SPYWARE: "SPYWARE",
  TROJAN: "TROJAN",
  VIRUS: "VIRUS",
  WORM: "WORM",
} as const;
/**
 * @public
 */
export type MalwareType = (typeof MalwareType)[keyof typeof MalwareType];

/**
 * @public
 * @enum
 */
export const NetworkDirection = {
  IN: "IN",
  OUT: "OUT",
} as const;
/**
 * @public
 */
export type NetworkDirection = (typeof NetworkDirection)[keyof typeof NetworkDirection];

/**
 * @public
 * @enum
 */
export const RecordState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type RecordState = (typeof RecordState)[keyof typeof RecordState];

/**
 * @public
 * @enum
 */
export const Partition = {
  AWS: "aws",
  AWS_CN: "aws-cn",
  AWS_US_GOV: "aws-us-gov",
} as const;
/**
 * @public
 */
export type Partition = (typeof Partition)[keyof typeof Partition];

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorCategory = {
  BACKDOOR: "BACKDOOR",
  CARD_STEALER: "CARD_STEALER",
  COMMAND_AND_CONTROL: "COMMAND_AND_CONTROL",
  DROP_SITE: "DROP_SITE",
  EXPLOIT_SITE: "EXPLOIT_SITE",
  KEYLOGGER: "KEYLOGGER",
} as const;
/**
 * @public
 */
export type ThreatIntelIndicatorCategory =
  (typeof ThreatIntelIndicatorCategory)[keyof typeof ThreatIntelIndicatorCategory];

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  HASH_MD5: "HASH_MD5",
  HASH_SHA1: "HASH_SHA1",
  HASH_SHA256: "HASH_SHA256",
  HASH_SHA512: "HASH_SHA512",
  IPV4_ADDRESS: "IPV4_ADDRESS",
  IPV6_ADDRESS: "IPV6_ADDRESS",
  MUTEX: "MUTEX",
  PROCESS: "PROCESS",
  URL: "URL",
} as const;
/**
 * @public
 */
export type ThreatIntelIndicatorType = (typeof ThreatIntelIndicatorType)[keyof typeof ThreatIntelIndicatorType];

/**
 * @public
 * @enum
 */
export const VulnerabilityExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;
/**
 * @public
 */
export type VulnerabilityExploitAvailable =
  (typeof VulnerabilityExploitAvailable)[keyof typeof VulnerabilityExploitAvailable];

/**
 * @public
 * @enum
 */
export const VulnerabilityFixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;
/**
 * @public
 */
export type VulnerabilityFixAvailable = (typeof VulnerabilityFixAvailable)[keyof typeof VulnerabilityFixAvailable];

/**
 * @public
 * @enum
 */
export const WorkflowState = {
  ASSIGNED: "ASSIGNED",
  DEFERRED: "DEFERRED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];

/**
 * @public
 * @enum
 */
export const StandardsControlsUpdatable = {
  NOT_READY_FOR_UPDATES: "NOT_READY_FOR_UPDATES",
  READY_FOR_UPDATES: "READY_FOR_UPDATES",
} as const;
/**
 * @public
 */
export type StandardsControlsUpdatable = (typeof StandardsControlsUpdatable)[keyof typeof StandardsControlsUpdatable];

/**
 * @public
 * @enum
 */
export const StandardsStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  INCOMPLETE: "INCOMPLETE",
  PENDING: "PENDING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type StandardsStatus = (typeof StandardsStatus)[keyof typeof StandardsStatus];

/**
 * @public
 * @enum
 */
export const StatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED: "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED",
  NO_AVAILABLE_CONFIGURATION_RECORDER: "NO_AVAILABLE_CONFIGURATION_RECORDER",
} as const;
/**
 * @public
 */
export type StatusReasonCode = (typeof StatusReasonCode)[keyof typeof StatusReasonCode];

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ROOT: "ROOT",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const ParameterValueType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type ParameterValueType = (typeof ParameterValueType)[keyof typeof ParameterValueType];

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * @enum
 */
export const SeverityRating = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type SeverityRating = (typeof SeverityRating)[keyof typeof SeverityRating];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  READY: "READY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const UnprocessedErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INVALID_INPUT: "INVALID_INPUT",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  NOT_FOUND: "NOT_FOUND",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type UnprocessedErrorCode = (typeof UnprocessedErrorCode)[keyof typeof UnprocessedErrorCode];

/**
 * @public
 * @enum
 */
export const BatchUpdateFindingsV2UnprocessedFindingErrorCode = {
  ConflictException: "ConflictException",
  InternalServerException: "InternalServerException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ValidationException: "ValidationException",
} as const;
/**
 * @public
 */
export type BatchUpdateFindingsV2UnprocessedFindingErrorCode =
  (typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode)[keyof typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode];

/**
 * @public
 * @enum
 */
export const OcsfBooleanField = {
  COMPLIANCE_ASSESSMENTS_MEETS_CRITERIA: "compliance.assessments.meets_criteria",
  VULNERABILITIES_IS_EXPLOIT_AVAILABLE: "vulnerabilities.is_exploit_available",
  VULNERABILITIES_IS_FIX_AVAILABLE: "vulnerabilities.is_fix_available",
} as const;
/**
 * @public
 */
export type OcsfBooleanField = (typeof OcsfBooleanField)[keyof typeof OcsfBooleanField];

/**
 * @public
 * @enum
 */
export const OcsfDateField = {
  FINDING_INFO_CREATED_TIME_DT: "finding_info.created_time_dt",
  FINDING_INFO_FIRST_SEEN_TIME_DT: "finding_info.first_seen_time_dt",
  FINDING_INFO_LAST_SEEN_TIME_DT: "finding_info.last_seen_time_dt",
  FINDING_INFO_MODIFIED_TIME_DT: "finding_info.modified_time_dt",
  RESOURCES_IMAGE_CREATED_TIME_DT: "resources.image.created_time_dt",
  RESOURCES_IMAGE_LAST_USED_TIME_DT: "resources.image.last_used_time_dt",
  RESOURCES_MODIFIED_TIME_DT: "resources.modified_time_dt",
} as const;
/**
 * @public
 */
export type OcsfDateField = (typeof OcsfDateField)[keyof typeof OcsfDateField];

/**
 * @public
 * @enum
 */
export const OcsfIpField = {
  EVIDENCES_DST_ENDPOINT_IP: "evidences.dst_endpoint.ip",
  EVIDENCES_SRC_ENDPOINT_IP: "evidences.src_endpoint.ip",
} as const;
/**
 * @public
 */
export type OcsfIpField = (typeof OcsfIpField)[keyof typeof OcsfIpField];

/**
 * @public
 * @enum
 */
export const OcsfMapField = {
  COMPLIANCE_CONTROL_PARAMETERS: "compliance.control_parameters",
  DATABUCKET_TAGS: "databucket.tags",
  FINDING_INFO_TAGS: "finding_info.tags",
  RESOURCES_TAGS: "resources.tags",
} as const;
/**
 * @public
 */
export type OcsfMapField = (typeof OcsfMapField)[keyof typeof OcsfMapField];

/**
 * @public
 * @enum
 */
export const OcsfNumberField = {
  ACTIVITY_ID: "activity_id",
  COMPLIANCE_STATUS_ID: "compliance.status_id",
  CONFIDENCE_SCORE: "confidence_score",
  EVIDENCES_API_RESPONSE_CODE: "evidences.api.response.code",
  EVIDENCES_DST_ENDPOINT_AUTONOMOUS_SYSTEM_NUMBER: "evidences.dst_endpoint.autonomous_system.number",
  EVIDENCES_DST_ENDPOINT_PORT: "evidences.dst_endpoint.port",
  EVIDENCES_SRC_ENDPOINT_AUTONOMOUS_SYSTEM_NUMBER: "evidences.src_endpoint.autonomous_system.number",
  EVIDENCES_SRC_ENDPOINT_PORT: "evidences.src_endpoint.port",
  FINDING_INFO_RELATED_EVENTS_COUNT: "finding_info.related_events_count",
  RESOURCES_IMAGE_IN_USE_COUNT: "resources.image.in_use_count",
  SEVERITY_ID: "severity_id",
  STATUS_ID: "status_id",
  VENDOR_ATTRIBUTES_SEVERITY_ID: "vendor_attributes.severity_id",
  VULNERABILITIES_CVE_CVSS_BASE_SCORE: "vulnerabilities.cve.cvss.base_score",
} as const;
/**
 * @public
 */
export type OcsfNumberField = (typeof OcsfNumberField)[keyof typeof OcsfNumberField];

/**
 * @public
 * @enum
 */
export const OcsfStringField = {
  ACTIVITY_NAME: "activity_name",
  CLASS_NAME: "class_name",
  CLOUD_ACCOUNT_NAME: "cloud.account.name",
  CLOUD_ACCOUNT_UID: "cloud.account.uid",
  CLOUD_PROVIDER: "cloud.provider",
  CLOUD_REGION: "cloud.region",
  COMMENT: "comment",
  COMPLIANCE_ASSESSMENTS_CATEGORY: "compliance.assessments.category",
  COMPLIANCE_ASSESSMENTS_NAME: "compliance.assessments.name",
  COMPLIANCE_CONTROL: "compliance.control",
  COMPLIANCE_STANDARDS: "compliance.standards",
  COMPLIANCE_STATUS: "compliance.status",
  DATABUCKET_ENCRYPTION_DETAILS_ALGORITHM: "databucket.encryption_details.algorithm",
  DATABUCKET_ENCRYPTION_DETAILS_KEY_UID: "databucket.encryption_details.key_uid",
  DATABUCKET_FILE_DATA_CLASSIFICATIONS_CLASSIFIER_DETAILS_TYPE: "databucket.file.data_classifications.classifier_details.type",
  EVIDENCES_ACTOR_USER_ACCOUNT_UID: "evidences.actor.user.account.uid",
  EVIDENCES_API_OPERATION: "evidences.api.operation",
  EVIDENCES_API_RESPONSE_ERROR_MESSAGE: "evidences.api.response.error_message",
  EVIDENCES_API_SERVICE_NAME: "evidences.api.service.name",
  EVIDENCES_CONNECTION_INFO_DIRECTION: "evidences.connection_info.direction",
  EVIDENCES_CONNECTION_INFO_PROTOCOL_NAME: "evidences.connection_info.protocol_name",
  EVIDENCES_DST_ENDPOINT_AUTONOMOUS_SYSTEM_NAME: "evidences.dst_endpoint.autonomous_system.name",
  EVIDENCES_DST_ENDPOINT_LOCATION_CITY: "evidences.dst_endpoint.location.city",
  EVIDENCES_DST_ENDPOINT_LOCATION_COUNTRY: "evidences.dst_endpoint.location.country",
  EVIDENCES_SRC_ENDPOINT_AUTONOMOUS_SYSTEM_NAME: "evidences.src_endpoint.autonomous_system.name",
  EVIDENCES_SRC_ENDPOINT_HOSTNAME: "evidences.src_endpoint.hostname",
  EVIDENCES_SRC_ENDPOINT_LOCATION_CITY: "evidences.src_endpoint.location.city",
  EVIDENCES_SRC_ENDPOINT_LOCATION_COUNTRY: "evidences.src_endpoint.location.country",
  FINDING_INFO_ANALYTIC_NAME: "finding_info.analytic.name",
  FINDING_INFO_DESC: "finding_info.desc",
  FINDING_INFO_RELATED_EVENTS_PRODUCT_UID: "finding_info.related_events.product.uid",
  FINDING_INFO_RELATED_EVENTS_TITLE: "finding_info.related_events.title",
  FINDING_INFO_RELATED_EVENTS_TRAITS_CATEGORY: "finding_info.related_events.traits.category",
  FINDING_INFO_RELATED_EVENTS_UID: "finding_info.related_events.uid",
  FINDING_INFO_SRC_URL: "finding_info.src_url",
  FINDING_INFO_TITLE: "finding_info.title",
  FINDING_INFO_TYPES: "finding_info.types",
  FINDING_INFO_UID: "finding_info.uid",
  MALWARE_NAME: "malware.name",
  MALWARE_SCAN_INFO_UID: "malware_scan_info.uid",
  MALWARE_SEVERITY: "malware.severity",
  METADATA_PRODUCT_NAME: "metadata.product.name",
  METADATA_PRODUCT_UID: "metadata.product.uid",
  METADATA_PRODUCT_VENDOR_NAME: "metadata.product.vendor_name",
  METADATA_UID: "metadata.uid",
  REMEDIATION_DESC: "remediation.desc",
  REMEDIATION_REFERENCES: "remediation.references",
  RESOURCES_CLOUD_FUNCTION_LAYERS_UID_ALT: "resources.cloud_function.layers.uid_alt",
  RESOURCES_CLOUD_FUNCTION_RUNTIME: "resources.cloud_function.runtime",
  RESOURCES_CLOUD_FUNCTION_USER_UID: "resources.cloud_function.user.uid",
  RESOURCES_CLOUD_PARTITION: "resources.cloud_partition",
  RESOURCES_DEVICE_ENCRYPTION_DETAILS_KEY_UID: "resources.device.encryption_details.key_uid",
  RESOURCES_DEVICE_IMAGE_UID: "resources.device.image.uid",
  RESOURCES_IMAGE_ARCHITECTURE: "resources.image.architecture",
  RESOURCES_IMAGE_REGISTRY_UID: "resources.image.registry_uid",
  RESOURCES_IMAGE_REPOSITORY_NAME: "resources.image.repository_name",
  RESOURCES_IMAGE_UID: "resources.image.uid",
  RESOURCES_REGION: "resources.region",
  RESOURCES_SUBNET_INFO_UID: "resources.subnet_info.uid",
  RESOURCES_TYPE: "resources.type",
  RESOURCES_UID: "resources.uid",
  RESOURCES_VPC_UID: "resources.vpc_uid",
  SEVERITY: "severity",
  STATUS: "status",
  VENDOR_ATTRIBUTES_SEVERITY: "vendor_attributes.severity",
  VULNERABILITIES_AFFECTED_CODE_FILE_PATH: "vulnerabilities.affected_code.file.path",
  VULNERABILITIES_AFFECTED_PACKAGES_NAME: "vulnerabilities.affected_packages.name",
  VULNERABILITIES_CVE_EPSS_SCORE: "vulnerabilities.cve.epss.score",
  VULNERABILITIES_CVE_UID: "vulnerabilities.cve.uid",
  VULNERABILITIES_FIX_COVERAGE: "vulnerabilities.fix_coverage",
  VULNERABILITIES_RELATED_VULNERABILITIES: "vulnerabilities.related_vulnerabilities",
} as const;
/**
 * @public
 */
export type OcsfStringField = (typeof OcsfStringField)[keyof typeof OcsfStringField];

/**
 * @public
 * @enum
 */
export const ConnectorAuthStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ConnectorAuthStatus = (typeof ConnectorAuthStatus)[keyof typeof ConnectorAuthStatus];

/**
 * @public
 * @enum
 */
export const ConnectorProviderName = {
  JIRA_CLOUD: "JIRA_CLOUD",
  SERVICENOW: "SERVICENOW",
} as const;
/**
 * @public
 */
export type ConnectorProviderName = (typeof ConnectorProviderName)[keyof typeof ConnectorProviderName];

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  CONNECTED: "CONNECTED",
  FAILED_TO_CONNECT: "FAILED_TO_CONNECT",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  PENDING_CONFIGURATION: "PENDING_CONFIGURATION",
} as const;
/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * @enum
 */
export const ControlFindingGenerator = {
  SECURITY_CONTROL: "SECURITY_CONTROL",
  STANDARD_CONTROL: "STANDARD_CONTROL",
} as const;
/**
 * @public
 */
export type ControlFindingGenerator = (typeof ControlFindingGenerator)[keyof typeof ControlFindingGenerator];

/**
 * @public
 * @enum
 */
export const TicketCreationMode = {
  DRYRUN: "DRYRUN",
} as const;
/**
 * @public
 */
export type TicketCreationMode = (typeof TicketCreationMode)[keyof typeof TicketCreationMode];

/**
 * @public
 * @enum
 */
export const SecurityControlProperty = {
  Parameters: "Parameters",
} as const;
/**
 * @public
 */
export type SecurityControlProperty = (typeof SecurityControlProperty)[keyof typeof SecurityControlProperty];

/**
 * @public
 * @enum
 */
export const OrganizationConfigurationConfigurationType = {
  CENTRAL: "CENTRAL",
  LOCAL: "LOCAL",
} as const;
/**
 * @public
 */
export type OrganizationConfigurationConfigurationType =
  (typeof OrganizationConfigurationConfigurationType)[keyof typeof OrganizationConfigurationConfigurationType];

/**
 * @public
 * @enum
 */
export const OrganizationConfigurationStatus = {
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type OrganizationConfigurationStatus =
  (typeof OrganizationConfigurationStatus)[keyof typeof OrganizationConfigurationStatus];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const IntegrationV2Type = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;
/**
 * @public
 */
export type IntegrationV2Type = (typeof IntegrationV2Type)[keyof typeof IntegrationV2Type];

/**
 * @public
 * @enum
 */
export const SecurityHubFeature = {
  SECURITY_HUB: "SecurityHub",
  SECURITY_HUB_V2: "SecurityHubV2",
} as const;
/**
 * @public
 */
export type SecurityHubFeature = (typeof SecurityHubFeature)[keyof typeof SecurityHubFeature];

/**
 * @public
 * @enum
 */
export const FindingHistoryUpdateSourceType = {
  BATCH_IMPORT_FINDINGS: "BATCH_IMPORT_FINDINGS",
  BATCH_UPDATE_FINDINGS: "BATCH_UPDATE_FINDINGS",
} as const;
/**
 * @public
 */
export type FindingHistoryUpdateSourceType =
  (typeof FindingHistoryUpdateSourceType)[keyof typeof FindingHistoryUpdateSourceType];

/**
 * @public
 * @enum
 */
export const FindingsTrendsStringField = {
  ACCOUNT_ID: "account_id",
  COMPLIANCE_CONTROL: "finding_control_id",
  COMPLIANCE_STATUS: "finding_compliance_status",
  CVE_ID: "finding_cve_ids",
  FINDING_ACTIVITY_NAME: "finding_activity_name",
  FINDING_CLASS: "finding_class_name",
  FINDING_STATUS: "finding_status",
  FINDING_TYPE: "finding_types",
  PROVIDER_NAME: "finding_provider",
  REGION: "region",
} as const;
/**
 * @public
 */
export type FindingsTrendsStringField = (typeof FindingsTrendsStringField)[keyof typeof FindingsTrendsStringField];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const GroupByField = {
  ACTIVITY_NAME: "activity_name",
  CLASS_NAME: "class_name",
  CLOUD_ACCOUNT_NAME: "cloud.account.name",
  CLOUD_ACCOUNT_UID: "cloud.account.uid",
  CLOUD_PROVIDER: "cloud.provider",
  CLOUD_REGION: "cloud.region",
  COMPLIANCE_ASSESSMENTS_NAME: "compliance.assessments.name",
  COMPLIANCE_CONTROL: "compliance.control",
  COMPLIANCE_STANDARDS: "compliance.standards",
  COMPLIANCE_STATUS: "compliance.status",
  FINDING_INFO_ANALYTIC_NAME: "finding_info.analytic.name",
  FINDING_INFO_RELATED_EVENTS_TRAITS_CATEGORY: "finding_info.related_events.traits.category",
  FINDING_INFO_TITLE: "finding_info.title",
  FINDING_INFO_TYPES: "finding_info.types",
  METADATA_PRODUCT_NAME: "metadata.product.name",
  METADATA_PRODUCT_UID: "metadata.product.uid",
  RESOURCES_TYPE: "resources.type",
  RESOURCES_UID: "resources.uid",
  SEVERITY: "severity",
  STATUS: "status",
  VENDOR_ATTRIBUTES_SEVERITY: "vendor_attributes.severity",
  VULNERABILITIES_AFFECTED_PACKAGES_NAME: "vulnerabilities.affected_packages.name",
  VULNERABILITIES_FIX_COVERAGE: "vulnerabilities.fix_coverage",
} as const;
/**
 * @public
 */
export type GroupByField = (typeof GroupByField)[keyof typeof GroupByField];

/**
 * @public
 * @enum
 */
export const GranularityField = {
  DAILY: "Daily",
  MONTHLY: "Monthly",
  WEEKLY: "Weekly",
} as const;
/**
 * @public
 */
export type GranularityField = (typeof GranularityField)[keyof typeof GranularityField];

/**
 * @public
 * @enum
 */
export const ResourcesDateField = {
  RESOURCE_CREATION_TIME_DT: "ResourceCreationTime",
  RESOURCE_DETAIL_CAPTURE_TIME_DT: "ResourceDetailCaptureTime",
} as const;
/**
 * @public
 */
export type ResourcesDateField = (typeof ResourcesDateField)[keyof typeof ResourcesDateField];

/**
 * @public
 * @enum
 */
export const ResourcesMapField = {
  TAG: "ResourceTags",
} as const;
/**
 * @public
 */
export type ResourcesMapField = (typeof ResourcesMapField)[keyof typeof ResourcesMapField];

/**
 * @public
 * @enum
 */
export const ResourcesNumberField = {
  SEVERITY_CRITICAL: "FindingsSummary.Severities.Critical",
  SEVERITY_FATAL: "FindingsSummary.Severities.Fatal",
  SEVERITY_HIGH: "FindingsSummary.Severities.High",
  SEVERITY_INFORMATIONAL: "FindingsSummary.Severities.Informational",
  SEVERITY_LOW: "FindingsSummary.Severities.Low",
  SEVERITY_MEDIUM: "FindingsSummary.Severities.Medium",
  SEVERITY_OTHER: "FindingsSummary.Severities.Other",
  SEVERITY_UNKNOWN: "FindingsSummary.Severities.Unknown",
  TOTAL_FINDINGS: "FindingsSummary.TotalFindings",
} as const;
/**
 * @public
 */
export type ResourcesNumberField = (typeof ResourcesNumberField)[keyof typeof ResourcesNumberField];

/**
 * @public
 * @enum
 */
export const ResourcesStringField = {
  ACCOUNT_ID: "AccountId",
  FINDING_TYPE: "FindingsSummary.FindingType",
  PRODUCT_NAME: "FindingsSummary.ProductName",
  REGION: "Region",
  RESOURCE_CATEGORY: "ResourceCategory",
  RESOURCE_GUID: "ResourceGuid",
  RESOURCE_ID: "ResourceId",
  RESOURCE_NAME: "ResourceName",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type ResourcesStringField = (typeof ResourcesStringField)[keyof typeof ResourcesStringField];

/**
 * @public
 * @enum
 */
export const ResourceGroupByField = {
  ACCOUNT_ID: "AccountId",
  FINDING_TYPE: "FindingsSummary.FindingType",
  REGION: "Region",
  RESOURCE_CATEGORY: "ResourceCategory",
  RESOURCE_NAME: "ResourceName",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type ResourceGroupByField = (typeof ResourceGroupByField)[keyof typeof ResourceGroupByField];

/**
 * @public
 * @enum
 */
export const ResourcesTrendsStringField = {
  ACCOUNT_ID: "account_id",
  REGION: "region",
  RESOURCE_CATEGORY: "resource_category",
  RESOURCE_TYPE: "resource_type",
} as const;
/**
 * @public
 */
export type ResourcesTrendsStringField = (typeof ResourcesTrendsStringField)[keyof typeof ResourcesTrendsStringField];

/**
 * @public
 * @enum
 */
export const ResourceCategory = {
  AI_ML: "AI/ML",
  CODE: "Code",
  COMPUTE: "Compute",
  DATABASE: "Database",
  IDENTITY: "Identity",
  NETWORK: "Network",
  OTHER: "Other",
  STORAGE: "Storage",
} as const;
/**
 * @public
 */
export type ResourceCategory = (typeof ResourceCategory)[keyof typeof ResourceCategory];

/**
 * @public
 * @enum
 */
export const RegionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type RegionAvailabilityStatus = (typeof RegionAvailabilityStatus)[keyof typeof RegionAvailabilityStatus];
