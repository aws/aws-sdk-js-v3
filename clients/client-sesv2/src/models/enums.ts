// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ContactLanguage = {
  EN: "EN",
  JA: "JA",
} as const;
/**
 * @public
 */
export type ContactLanguage = (typeof ContactLanguage)[keyof typeof ContactLanguage];

/**
 * @public
 * @enum
 */
export const MailType = {
  MARKETING: "MARKETING",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;
/**
 * @public
 */
export type MailType = (typeof MailType)[keyof typeof MailType];

/**
 * @public
 * @enum
 */
export const ReviewStatus = {
  DENIED: "DENIED",
  FAILED: "FAILED",
  GRANTED: "GRANTED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];

/**
 * @public
 * @enum
 */
export const AttachmentContentDisposition = {
  ATTACHMENT: "ATTACHMENT",
  INLINE: "INLINE",
} as const;
/**
 * @public
 */
export type AttachmentContentDisposition =
  (typeof AttachmentContentDisposition)[keyof typeof AttachmentContentDisposition];

/**
 * @public
 * @enum
 */
export const AttachmentContentTransferEncoding = {
  BASE64: "BASE64",
  QUOTED_PRINTABLE: "QUOTED_PRINTABLE",
  SEVEN_BIT: "SEVEN_BIT",
} as const;
/**
 * @public
 */
export type AttachmentContentTransferEncoding =
  (typeof AttachmentContentTransferEncoding)[keyof typeof AttachmentContentTransferEncoding];

/**
 * @public
 * @enum
 */
export const MetricDimensionName = {
  CONFIGURATION_SET: "CONFIGURATION_SET",
  EMAIL_IDENTITY: "EMAIL_IDENTITY",
  ISP: "ISP",
} as const;
/**
 * @public
 */
export type MetricDimensionName = (typeof MetricDimensionName)[keyof typeof MetricDimensionName];

/**
 * @public
 * @enum
 */
export const Metric = {
  CLICK: "CLICK",
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  DELIVERY_CLICK: "DELIVERY_CLICK",
  DELIVERY_COMPLAINT: "DELIVERY_COMPLAINT",
  DELIVERY_OPEN: "DELIVERY_OPEN",
  OPEN: "OPEN",
  PERMANENT_BOUNCE: "PERMANENT_BOUNCE",
  SEND: "SEND",
  TRANSIENT_BOUNCE: "TRANSIENT_BOUNCE",
} as const;
/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * @enum
 */
export const MetricNamespace = {
  VDM: "VDM",
} as const;
/**
 * @public
 */
export type MetricNamespace = (typeof MetricNamespace)[keyof typeof MetricNamespace];

/**
 * @public
 * @enum
 */
export const QueryErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;
/**
 * @public
 */
export type QueryErrorCode = (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

/**
 * @public
 * @enum
 */
export const BehaviorOnMxFailure = {
  REJECT_MESSAGE: "REJECT_MESSAGE",
  USE_DEFAULT_VALUE: "USE_DEFAULT_VALUE",
} as const;
/**
 * @public
 */
export type BehaviorOnMxFailure = (typeof BehaviorOnMxFailure)[keyof typeof BehaviorOnMxFailure];

/**
 * @public
 * @enum
 */
export const BounceType = {
  PERMANENT: "PERMANENT",
  TRANSIENT: "TRANSIENT",
  UNDETERMINED: "UNDETERMINED",
} as const;
/**
 * @public
 */
export type BounceType = (typeof BounceType)[keyof typeof BounceType];

/**
 * @public
 * @enum
 */
export const BulkEmailStatus = {
  ACCOUNT_DAILY_QUOTA_EXCEEDED: "ACCOUNT_DAILY_QUOTA_EXCEEDED",
  ACCOUNT_SENDING_PAUSED: "ACCOUNT_SENDING_PAUSED",
  ACCOUNT_SUSPENDED: "ACCOUNT_SUSPENDED",
  ACCOUNT_THROTTLED: "ACCOUNT_THROTTLED",
  CONFIGURATION_SET_NOT_FOUND: "CONFIGURATION_SET_NOT_FOUND",
  CONFIGURATION_SET_SENDING_PAUSED: "CONFIGURATION_SET_SENDING_PAUSED",
  FAILED: "FAILED",
  INVALID_PARAMETER: "INVALID_PARAMETER",
  INVALID_SENDING_POOL_NAME: "INVALID_SENDING_POOL_NAME",
  MAIL_FROM_DOMAIN_NOT_VERIFIED: "MAIL_FROM_DOMAIN_NOT_VERIFIED",
  MESSAGE_REJECTED: "MESSAGE_REJECTED",
  SUCCESS: "SUCCESS",
  TEMPLATE_NOT_FOUND: "TEMPLATE_NOT_FOUND",
  TRANSIENT_FAILURE: "TRANSIENT_FAILURE",
} as const;
/**
 * @public
 */
export type BulkEmailStatus = (typeof BulkEmailStatus)[keyof typeof BulkEmailStatus];

/**
 * @public
 * @enum
 */
export const DimensionValueSource = {
  EMAIL_HEADER: "EMAIL_HEADER",
  LINK_TAG: "LINK_TAG",
  MESSAGE_TAG: "MESSAGE_TAG",
} as const;
/**
 * @public
 */
export type DimensionValueSource = (typeof DimensionValueSource)[keyof typeof DimensionValueSource];

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  OPT_IN: "OPT_IN",
  OPT_OUT: "OPT_OUT",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * @enum
 */
export const ContactListImportAction = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ContactListImportAction = (typeof ContactListImportAction)[keyof typeof ContactListImportAction];

/**
 * @public
 * @enum
 */
export const TlsPolicy = {
  OPTIONAL: "OPTIONAL",
  REQUIRE: "REQUIRE",
} as const;
/**
 * @public
 */
export type TlsPolicy = (typeof TlsPolicy)[keyof typeof TlsPolicy];

/**
 * @public
 * @enum
 */
export const SuppressionListReason = {
  BOUNCE: "BOUNCE",
  COMPLAINT: "COMPLAINT",
} as const;
/**
 * @public
 */
export type SuppressionListReason = (typeof SuppressionListReason)[keyof typeof SuppressionListReason];

/**
 * @public
 * @enum
 */
export const HttpsPolicy = {
  OPTIONAL: "OPTIONAL",
  REQUIRE: "REQUIRE",
  REQUIRE_OPEN_ONLY: "REQUIRE_OPEN_ONLY",
} as const;
/**
 * @public
 */
export type HttpsPolicy = (typeof HttpsPolicy)[keyof typeof HttpsPolicy];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  BOUNCE: "BOUNCE",
  CLICK: "CLICK",
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  DELIVERY_DELAY: "DELIVERY_DELAY",
  OPEN: "OPEN",
  REJECT: "REJECT",
  RENDERING_FAILURE: "RENDERING_FAILURE",
  SEND: "SEND",
  SUBSCRIPTION: "SUBSCRIPTION",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const ScalingMode = {
  MANAGED: "MANAGED",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ScalingMode = (typeof ScalingMode)[keyof typeof ScalingMode];

/**
 * @public
 * @enum
 */
export const DeliverabilityTestStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DeliverabilityTestStatus = (typeof DeliverabilityTestStatus)[keyof typeof DeliverabilityTestStatus];

/**
 * @public
 * @enum
 */
export const DkimSigningAttributesOrigin = {
  AWS_SES: "AWS_SES",
  AWS_SES_AF_SOUTH_1: "AWS_SES_AF_SOUTH_1",
  AWS_SES_AP_NORTHEAST_1: "AWS_SES_AP_NORTHEAST_1",
  AWS_SES_AP_NORTHEAST_2: "AWS_SES_AP_NORTHEAST_2",
  AWS_SES_AP_NORTHEAST_3: "AWS_SES_AP_NORTHEAST_3",
  AWS_SES_AP_SOUTHEAST_1: "AWS_SES_AP_SOUTHEAST_1",
  AWS_SES_AP_SOUTHEAST_2: "AWS_SES_AP_SOUTHEAST_2",
  AWS_SES_AP_SOUTHEAST_3: "AWS_SES_AP_SOUTHEAST_3",
  AWS_SES_AP_SOUTH_1: "AWS_SES_AP_SOUTH_1",
  AWS_SES_AP_SOUTH_2: "AWS_SES_AP_SOUTH_2",
  AWS_SES_CA_CENTRAL_1: "AWS_SES_CA_CENTRAL_1",
  AWS_SES_EU_CENTRAL_1: "AWS_SES_EU_CENTRAL_1",
  AWS_SES_EU_CENTRAL_2: "AWS_SES_EU_CENTRAL_2",
  AWS_SES_EU_NORTH_1: "AWS_SES_EU_NORTH_1",
  AWS_SES_EU_SOUTH_1: "AWS_SES_EU_SOUTH_1",
  AWS_SES_EU_WEST_1: "AWS_SES_EU_WEST_1",
  AWS_SES_EU_WEST_2: "AWS_SES_EU_WEST_2",
  AWS_SES_EU_WEST_3: "AWS_SES_EU_WEST_3",
  AWS_SES_IL_CENTRAL_1: "AWS_SES_IL_CENTRAL_1",
  AWS_SES_ME_CENTRAL_1: "AWS_SES_ME_CENTRAL_1",
  AWS_SES_ME_SOUTH_1: "AWS_SES_ME_SOUTH_1",
  AWS_SES_SA_EAST_1: "AWS_SES_SA_EAST_1",
  AWS_SES_US_EAST_1: "AWS_SES_US_EAST_1",
  AWS_SES_US_EAST_2: "AWS_SES_US_EAST_2",
  AWS_SES_US_WEST_1: "AWS_SES_US_WEST_1",
  AWS_SES_US_WEST_2: "AWS_SES_US_WEST_2",
  EXTERNAL: "EXTERNAL",
} as const;
/**
 * @public
 */
export type DkimSigningAttributesOrigin =
  (typeof DkimSigningAttributesOrigin)[keyof typeof DkimSigningAttributesOrigin];

/**
 * @public
 * @enum
 */
export const DkimSigningKeyLength = {
  RSA_1024_BIT: "RSA_1024_BIT",
  RSA_2048_BIT: "RSA_2048_BIT",
} as const;
/**
 * @public
 */
export type DkimSigningKeyLength = (typeof DkimSigningKeyLength)[keyof typeof DkimSigningKeyLength];

/**
 * @public
 * @enum
 */
export const DkimStatus = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;
/**
 * @public
 */
export type DkimStatus = (typeof DkimStatus)[keyof typeof DkimStatus];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  MANAGED_DOMAIN: "MANAGED_DOMAIN",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const DeliveryEventType = {
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  PERMANENT_BOUNCE: "PERMANENT_BOUNCE",
  SEND: "SEND",
  TRANSIENT_BOUNCE: "TRANSIENT_BOUNCE",
  UNDETERMINED_BOUNCE: "UNDETERMINED_BOUNCE",
} as const;
/**
 * @public
 */
export type DeliveryEventType = (typeof DeliveryEventType)[keyof typeof DeliveryEventType];

/**
 * @public
 * @enum
 */
export const EngagementEventType = {
  CLICK: "CLICK",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type EngagementEventType = (typeof EngagementEventType)[keyof typeof EngagementEventType];

/**
 * @public
 * @enum
 */
export const MetricAggregation = {
  RATE: "RATE",
  VOLUME: "VOLUME",
} as const;
/**
 * @public
 */
export type MetricAggregation = (typeof MetricAggregation)[keyof typeof MetricAggregation];

/**
 * @public
 * @enum
 */
export const DataFormat = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * @enum
 */
export const SuppressionListImportAction = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type SuppressionListImportAction =
  (typeof SuppressionListImportAction)[keyof typeof SuppressionListImportAction];

/**
 * @public
 * @enum
 */
export const Status = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const SendingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  REINSTATED: "REINSTATED",
} as const;
/**
 * @public
 */
export type SendingStatus = (typeof SendingStatus)[keyof typeof SendingStatus];

/**
 * @public
 * @enum
 */
export const WarmupStatus = {
  DONE: "DONE",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type WarmupStatus = (typeof WarmupStatus)[keyof typeof WarmupStatus];

/**
 * @public
 * @enum
 */
export const DeliverabilityDashboardAccountStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  PENDING_EXPIRATION: "PENDING_EXPIRATION",
} as const;
/**
 * @public
 */
export type DeliverabilityDashboardAccountStatus =
  (typeof DeliverabilityDashboardAccountStatus)[keyof typeof DeliverabilityDashboardAccountStatus];

/**
 * @public
 * @enum
 */
export const ExportSourceType = {
  MESSAGE_INSIGHTS: "MESSAGE_INSIGHTS",
  METRICS_DATA: "METRICS_DATA",
} as const;
/**
 * @public
 */
export type ExportSourceType = (typeof ExportSourceType)[keyof typeof ExportSourceType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const MailFromDomainStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;
/**
 * @public
 */
export type MailFromDomainStatus = (typeof MailFromDomainStatus)[keyof typeof MailFromDomainStatus];

/**
 * @public
 * @enum
 */
export const VerificationError = {
  DNS_SERVER_ERROR: "DNS_SERVER_ERROR",
  HOST_NOT_FOUND: "HOST_NOT_FOUND",
  INVALID_VALUE: "INVALID_VALUE",
  REPLICATION_ACCESS_DENIED: "REPLICATION_ACCESS_DENIED",
  REPLICATION_PRIMARY_BYO_DKIM_NOT_SUPPORTED: "REPLICATION_PRIMARY_BYO_DKIM_NOT_SUPPORTED",
  REPLICATION_PRIMARY_INVALID_REGION: "REPLICATION_PRIMARY_INVALID_REGION",
  REPLICATION_PRIMARY_NOT_FOUND: "REPLICATION_PRIMARY_NOT_FOUND",
  REPLICATION_REPLICA_AS_PRIMARY_NOT_SUPPORTED: "REPLICATION_REPLICA_AS_PRIMARY_NOT_SUPPORTED",
  SERVICE_ERROR: "SERVICE_ERROR",
  TYPE_NOT_FOUND: "TYPE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type VerificationError = (typeof VerificationError)[keyof typeof VerificationError];

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;
/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 * @enum
 */
export const ReputationEntityType = {
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type ReputationEntityType = (typeof ReputationEntityType)[keyof typeof ReputationEntityType];

/**
 * @public
 * @enum
 */
export const RecommendationImpact = {
  HIGH: "HIGH",
  LOW: "LOW",
} as const;
/**
 * @public
 */
export type RecommendationImpact = (typeof RecommendationImpact)[keyof typeof RecommendationImpact];

/**
 * @public
 * @enum
 */
export const ImportDestinationType = {
  CONTACT_LIST: "CONTACT_LIST",
  SUPPRESSION_LIST: "SUPPRESSION_LIST",
} as const;
/**
 * @public
 */
export type ImportDestinationType = (typeof ImportDestinationType)[keyof typeof ImportDestinationType];

/**
 * @public
 * @enum
 */
export const ListRecommendationsFilterKey = {
  IMPACT: "IMPACT",
  RESOURCE_ARN: "RESOURCE_ARN",
  STATUS: "STATUS",
  TYPE: "TYPE",
} as const;
/**
 * @public
 */
export type ListRecommendationsFilterKey =
  (typeof ListRecommendationsFilterKey)[keyof typeof ListRecommendationsFilterKey];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  FIXED: "FIXED",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  BIMI: "BIMI",
  BOUNCE: "BOUNCE",
  COMPLAINT: "COMPLAINT",
  DKIM: "DKIM",
  DMARC: "DMARC",
  FEEDBACK_3P: "FEEDBACK_3P",
  IP_LISTING: "IP_LISTING",
  SPF: "SPF",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const ReputationEntityFilterKey = {
  ENTITY_REFERENCE_PREFIX: "ENTITY_REFERENCE_PREFIX",
  ENTITY_TYPE: "ENTITY_TYPE",
  REPUTATION_IMPACT: "REPUTATION_IMPACT",
  STATUS: "SENDING_STATUS",
} as const;
/**
 * @public
 */
export type ReputationEntityFilterKey = (typeof ReputationEntityFilterKey)[keyof typeof ReputationEntityFilterKey];

/**
 * @public
 * @enum
 */
export const ListTenantResourcesFilterKey = {
  RESOURCE_TYPE: "RESOURCE_TYPE",
} as const;
/**
 * @public
 */
export type ListTenantResourcesFilterKey =
  (typeof ListTenantResourcesFilterKey)[keyof typeof ListTenantResourcesFilterKey];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONFIGURATION_SET: "CONFIGURATION_SET",
  EMAIL_IDENTITY: "EMAIL_IDENTITY",
  EMAIL_TEMPLATE: "EMAIL_TEMPLATE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
