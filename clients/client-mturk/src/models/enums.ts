// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  Approved: "Approved",
  Rejected: "Rejected",
  Submitted: "Submitted",
} as const;
/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * @public
 * @enum
 */
export const Comparator = {
  DoesNotExist: "DoesNotExist",
  EqualTo: "EqualTo",
  Exists: "Exists",
  GreaterThan: "GreaterThan",
  GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
  In: "In",
  LessThan: "LessThan",
  LessThanOrEqualTo: "LessThanOrEqualTo",
  NotEqualTo: "NotEqualTo",
  NotIn: "NotIn",
} as const;
/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 * @enum
 */
export const HITAccessActions = {
  Accept: "Accept",
  DiscoverPreviewAndAccept: "DiscoverPreviewAndAccept",
  PreviewAndAccept: "PreviewAndAccept",
} as const;
/**
 * @public
 */
export type HITAccessActions = (typeof HITAccessActions)[keyof typeof HITAccessActions];

/**
 * @public
 * @enum
 */
export const HITReviewStatus = {
  MarkedForReview: "MarkedForReview",
  NotReviewed: "NotReviewed",
  ReviewedAppropriate: "ReviewedAppropriate",
  ReviewedInappropriate: "ReviewedInappropriate",
} as const;
/**
 * @public
 */
export type HITReviewStatus = (typeof HITReviewStatus)[keyof typeof HITReviewStatus];

/**
 * @public
 * @enum
 */
export const HITStatus = {
  Assignable: "Assignable",
  Disposed: "Disposed",
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
  Unassignable: "Unassignable",
} as const;
/**
 * @public
 */
export type HITStatus = (typeof HITStatus)[keyof typeof HITStatus];

/**
 * @public
 * @enum
 */
export const QualificationTypeStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
/**
 * @public
 */
export type QualificationTypeStatus = (typeof QualificationTypeStatus)[keyof typeof QualificationTypeStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  AssignmentAbandoned: "AssignmentAbandoned",
  AssignmentAccepted: "AssignmentAccepted",
  AssignmentApproved: "AssignmentApproved",
  AssignmentRejected: "AssignmentRejected",
  AssignmentReturned: "AssignmentReturned",
  AssignmentSubmitted: "AssignmentSubmitted",
  HITCreated: "HITCreated",
  HITDisposed: "HITDisposed",
  HITExpired: "HITExpired",
  HITExtended: "HITExtended",
  HITReviewable: "HITReviewable",
  Ping: "Ping",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const QualificationStatus = {
  Granted: "Granted",
  Revoked: "Revoked",
} as const;
/**
 * @public
 */
export type QualificationStatus = (typeof QualificationStatus)[keyof typeof QualificationStatus];

/**
 * @public
 * @enum
 */
export const ReviewableHITStatus = {
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
} as const;
/**
 * @public
 */
export type ReviewableHITStatus = (typeof ReviewableHITStatus)[keyof typeof ReviewableHITStatus];

/**
 * @public
 * @enum
 */
export const ReviewPolicyLevel = {
  Assignment: "Assignment",
  HIT: "HIT",
} as const;
/**
 * @public
 */
export type ReviewPolicyLevel = (typeof ReviewPolicyLevel)[keyof typeof ReviewPolicyLevel];

/**
 * @public
 * @enum
 */
export const ReviewActionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  Intended: "Intended",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type ReviewActionStatus = (typeof ReviewActionStatus)[keyof typeof ReviewActionStatus];

/**
 * @public
 * @enum
 */
export const NotifyWorkersFailureCode = {
  HardFailure: "HardFailure",
  SoftFailure: "SoftFailure",
} as const;
/**
 * @public
 */
export type NotifyWorkersFailureCode = (typeof NotifyWorkersFailureCode)[keyof typeof NotifyWorkersFailureCode];

/**
 * @public
 * @enum
 */
export const NotificationTransport = {
  Email: "Email",
  SNS: "SNS",
  SQS: "SQS",
} as const;
/**
 * @public
 */
export type NotificationTransport = (typeof NotificationTransport)[keyof typeof NotificationTransport];
