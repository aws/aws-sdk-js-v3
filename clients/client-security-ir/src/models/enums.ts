// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionType = {
  EVIDENCE_COLLECTION: "Evidence",
  INVESTIGATION_ANALYSIS: "Investigation",
  SUMMARIZATION: "Summarization",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const AwsRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_EAST_2: "ap-east-2",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_NORTHEAST_3: "ap-northeast-3",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTHEAST_4: "ap-southeast-4",
  AP_SOUTHEAST_5: "ap-southeast-5",
  AP_SOUTHEAST_6: "ap-southeast-6",
  AP_SOUTHEAST_7: "ap-southeast-7",
  AP_SOUTH_1: "ap-south-1",
  AP_SOUTH_2: "ap-south-2",
  CA_CENTRAL_1: "ca-central-1",
  CA_WEST_1: "ca-west-1",
  CN_NORTHWEST_1: "cn-northwest-1",
  CN_NORTH_1: "cn-north-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_CENTRAL_2: "eu-central-2",
  EU_NORTH_1: "eu-north-1",
  EU_SOUTH_1: "eu-south-1",
  EU_SOUTH_2: "eu-south-2",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  IL_CENTRAL_1: "il-central-1",
  ME_CENTRAL_1: "me-central-1",
  ME_SOUTH_1: "me-south-1",
  MX_CENTRAL_1: "mx-central-1",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type AwsRegion = (typeof AwsRegion)[keyof typeof AwsRegion];

/**
 * @public
 * @enum
 */
export const MembershipAccountRelationshipStatus = {
  ASSOCIATED: "Associated",
  DISASSOCIATED: "Disassociated",
  UNASSOCIATED: "Unassociated",
} as const;
/**
 * @public
 */
export type MembershipAccountRelationshipStatus =
  (typeof MembershipAccountRelationshipStatus)[keyof typeof MembershipAccountRelationshipStatus];

/**
 * @public
 * @enum
 */
export const MembershipAccountRelationshipType = {
  ORGANIZATION: "Organization",
  UNRELATED: "Unrelated",
} as const;
/**
 * @public
 */
export type MembershipAccountRelationshipType =
  (typeof MembershipAccountRelationshipType)[keyof typeof MembershipAccountRelationshipType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CaseStatus = {
  ACKNOWLEDGED: "Acknowledged",
  CLOSED: "Closed",
  CONTAINMENT_ERADICATION_AND_RECOVERY: "Containment, Eradication and Recovery",
  DETECTION_AND_ANALYSIS: "Detection and Analysis",
  POST_INCIDENT_ACTIVITIES: "Post-incident Activities",
  READY_TO_CLOSE: "Ready to Close",
  SUBMITTED: "Submitted",
} as const;
/**
 * @public
 */
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];

/**
 * @public
 * @enum
 */
export const EngagementType = {
  INVESTIGATION: "Investigation",
  SECURITY_INCIDENT: "Security Incident",
} as const;
/**
 * @public
 */
export type EngagementType = (typeof EngagementType)[keyof typeof EngagementType];

/**
 * @public
 * @enum
 */
export const ResolverType = {
  AWS: "AWS",
  SELF: "Self",
} as const;
/**
 * @public
 */
export type ResolverType = (typeof ResolverType)[keyof typeof ResolverType];

/**
 * @public
 * @enum
 */
export const CaseAttachmentStatus = {
  FAILED: "Failed",
  PENDING: "Pending",
  VERIFIED: "Verified",
} as const;
/**
 * @public
 */
export type CaseAttachmentStatus = (typeof CaseAttachmentStatus)[keyof typeof CaseAttachmentStatus];

/**
 * @public
 * @enum
 */
export const ClosureCode = {
  DUPLICATE: "Duplicate",
  FALSE_POSITIVE: "False Positive",
  INVESTIGATION_COMPLETED: "Investigation Completed",
  NOT_RESOLVED: "Not Resolved",
} as const;
/**
 * @public
 */
export type ClosureCode = (typeof ClosureCode)[keyof typeof ClosureCode];

/**
 * @public
 * @enum
 */
export const PendingAction = {
  CUSTOMER: "Customer",
  NONE: "None",
} as const;
/**
 * @public
 */
export type PendingAction = (typeof PendingAction)[keyof typeof PendingAction];

/**
 * @public
 * @enum
 */
export const UsefulnessRating = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;
/**
 * @public
 */
export type UsefulnessRating = (typeof UsefulnessRating)[keyof typeof UsefulnessRating];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  WAITING: "Waiting",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const SelfManagedCaseStatus = {
  CONTAINMENT_ERADICATION_AND_RECOVERY: "Containment, Eradication and Recovery",
  DETECTION_AND_ANALYSIS: "Detection and Analysis",
  POST_INCIDENT_ACTIVITIES: "Post-incident Activities",
  SUBMITTED: "Submitted",
} as const;
/**
 * @public
 */
export type SelfManagedCaseStatus = (typeof SelfManagedCaseStatus)[keyof typeof SelfManagedCaseStatus];

/**
 * @public
 * @enum
 */
export const CommunicationType = {
  CASE_ACKNOWLEDGED: "Case Acknowledged",
  CASE_ATTACHMENT_URL_UPLOADED: "Case Attachment Url Uploaded",
  CASE_CLOSED: "Case Closed",
  CASE_COMMENT_ADDED: "Case Comment Added",
  CASE_COMMENT_UPDATED: "Case Comment Updated",
  CASE_CREATED: "Case Created",
  CASE_PENDING_CUSTOMER_ACTION_REMINDER: "Case Pending Customer Action Reminder",
  CASE_UPDATED: "Case Updated",
  CASE_UPDATED_TO_SERVICE_MANAGED: "Case Updated To Service Managed",
  CASE_UPDATE_CASE_STATUS: "Case Status Updated",
  DEREGISTER_DELEGATED_ADMINISTRATOR: "Deregister Delegated Administrator",
  DISABLE_AWS_SERVICE_ACCESS: "Disable AWS Service Access",
  MEMBERSHIP_CANCELLED: "Membership Cancelled",
  MEMBERSHIP_CREATED: "Membership Created",
  MEMBERSHIP_UPDATED: "Membership Updated",
  REGISTER_DELEGATED_ADMINISTRATOR: "Register Delegated Administrator",
} as const;
/**
 * @public
 */
export type CommunicationType = (typeof CommunicationType)[keyof typeof CommunicationType];

/**
 * @public
 * @enum
 */
export const OptInFeatureName = {
  TRIAGE: "Triage",
} as const;
/**
 * @public
 */
export type OptInFeatureName = (typeof OptInFeatureName)[keyof typeof OptInFeatureName];

/**
 * @public
 * @enum
 */
export const CustomerType = {
  ORGANIZATION: "Organization",
  STANDALONE: "Standalone",
} as const;
/**
 * @public
 */
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType];

/**
 * @public
 * @enum
 */
export const MembershipStatus = {
  ACTIVE: "Active",
  CANCELLED: "Cancelled",
  TERMINATED: "Terminated",
} as const;
/**
 * @public
 */
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
