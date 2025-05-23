// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SecurityIRServiceException as __BaseException } from "./SecurityIRServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AwsRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_NORTHEAST_3: "ap-northeast-3",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTHEAST_4: "ap-southeast-4",
  AP_SOUTHEAST_5: "ap-southeast-5",
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
 */
export interface BatchGetMemberAccountDetailsRequest {
  /**
   * <p>Required element used in combination with BatchGetMemberAccountDetails to identify the membership ID to query. </p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>Optional element to query the membership relationship status to a provided list of account IDs.</p>
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetMembershipAccountDetailError {
  /**
   * <p/>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p/>
   * @public
   */
  error: string | undefined;

  /**
   * <p/>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MembershipAccountRelationshipStatus = {
  ASSOCIATED: "Associated",
  DISASSOCIATED: "Disassociated",
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
} as const;

/**
 * @public
 */
export type MembershipAccountRelationshipType =
  (typeof MembershipAccountRelationshipType)[keyof typeof MembershipAccountRelationshipType];

/**
 * <p/>
 * @public
 */
export interface GetMembershipAccountDetailItem {
  /**
   * <p/>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p/>
   * @public
   */
  relationshipStatus?: MembershipAccountRelationshipStatus | undefined;

  /**
   * <p/>
   * @public
   */
  relationshipType?: MembershipAccountRelationshipType | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberAccountDetailsResponse {
  /**
   * <p>The response element providing responses for requests to GetMembershipAccountDetails.</p>
   * @public
   */
  items?: GetMembershipAccountDetailItem[] | undefined;

  /**
   * <p>The response element providing errors messages for requests to GetMembershipAccountDetails.</p>
   * @public
   */
  errors?: GetMembershipAccountDetailError[] | undefined;
}

/**
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Element providing the ID of the resource affected.
   * @public
   */
  resourceId: string | undefined;

  /**
   * Element providing the type of the resource affected.
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * Element providing advice to clients on when the call can be safely retried.
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p/>
 * @public
 */
export class InvalidTokenException extends __BaseException {
  readonly name: "InvalidTokenException" = "InvalidTokenException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
  }
}

/**
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p/>
 * @public
 */
export class SecurityIncidentResponseNotActiveException extends __BaseException {
  readonly name: "SecurityIncidentResponseNotActiveException" = "SecurityIncidentResponseNotActiveException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecurityIncidentResponseNotActiveException, __BaseException>) {
    super({
      name: "SecurityIncidentResponseNotActiveException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecurityIncidentResponseNotActiveException.prototype);
  }
}

/**
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * Element that provides the ID of the resource affected.
   * @public
   */
  resourceId: string | undefined;

  /**
   * Element that provides the type of the resource affected.
   * @public
   */
  resourceType: string | undefined;

  /**
   * Element that provides the originating service who made the call.
   * @public
   */
  serviceCode: string | undefined;

  /**
   * Element that provides the quota that was exceeded.
   * @public
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p/>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * Element providing the service code of the originating service.
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * Element providing the quota of the originating service.
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * Element providing advice to clients on when the call can be safely retried.
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p/>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p/>
   * @public
   */
  name: string | undefined;

  /**
   * <p/>
   * @public
   */
  message: string | undefined;
}

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
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Element that provides the reason the request failed validation.
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * Element that provides the list of field(s) that caused the error, if applicable.
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface CancelMembershipRequest {
  /**
   * <p>Required element used in combination with CancelMembershipRequest to identify the membership ID to cancel. </p>
   * @public
   */
  membershipId: string | undefined;
}

/**
 * @public
 */
export interface CancelMembershipResponse {
  /**
   * <p>The response element providing responses for requests to CancelMembershipRequest.</p>
   * @public
   */
  membershipId: string | undefined;
}

/**
 * @public
 */
export interface CloseCaseRequest {
  /**
   * <p>Required element used in combination with CloseCase to identify the case ID to close.</p>
   * @public
   */
  caseId: string | undefined;
}

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
 */
export interface CloseCaseResponse {
  /**
   * <p>A response element providing responses for requests to CloseCase. This element responds with the case status following the action. </p>
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * <p>A response element providing responses for requests to CloseCase. This element responds with the case closure date following the action. </p>
   * @public
   */
  closedDate?: Date | undefined;
}

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
 * <p/>
 * @public
 */
export interface ImpactedAwsRegion {
  /**
   * <p/>
   * @public
   */
  region: AwsRegion | undefined;
}

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
 * <p/>
 * @public
 */
export interface ThreatActorIp {
  /**
   * <p/>
   * @public
   */
  ipAddress: string | undefined;

  /**
   * <p/>
   * @public
   */
  userAgent?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface Watcher {
  /**
   * <p/>
   * @public
   */
  email: string | undefined;

  /**
   * <p/>
   * @public
   */
  name?: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobTitle?: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * <p>Required element used in combination with CreateCase.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Required element used in combination with CreateCase to identify the resolver type. Available resolvers include self-supported | aws-supported. </p>
   * @public
   */
  resolverType: ResolverType | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide a title for the new case.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide a description for the new case.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide an engagement type for the new cases. Available engagement types include Security Incident | Investigation </p>
   * @public
   */
  engagementType: EngagementType | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide an initial start date for the unauthorized activity. </p>
   * @public
   */
  reportedIncidentStartDate: Date | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide a list of impacted accounts.</p>
   * @public
   */
  impactedAccounts: string[] | undefined;

  /**
   * <p>Required element used in combination with CreateCase to provide a list of entities to receive notifications for case updates. </p>
   * @public
   */
  watchers: Watcher[] | undefined;

  /**
   * <p>An optional element used in combination with CreateCase to provide a list of suspicious internet protocol addresses associated with unauthorized activity. </p>
   * @public
   */
  threatActorIpAddresses?: ThreatActorIp[] | undefined;

  /**
   * <p>An optional element used in combination with CreateCase to provide a list of services impacted.</p>
   * @public
   */
  impactedServices?: string[] | undefined;

  /**
   * <p>An optional element used in combination with CreateCase to provide a list of impacted regions.</p>
   * @public
   */
  impactedAwsRegions?: ImpactedAwsRegion[] | undefined;

  /**
   * <p>An optional element used in combination with CreateCase to add customer specified tags to a case.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCaseResponse {
  /**
   * <p>A response element providing responses for requests to CreateCase. This element responds with the case ID. </p>
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseCommentRequest {
  /**
   * <p>Required element used in combination with CreateCaseComment to specify a case ID.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>An optional element used in combination with CreateCaseComment.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Required element used in combination with CreateCaseComment to add content for the new comment.</p>
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseCommentResponse {
  /**
   * <p>Response element indicating the new comment ID.</p>
   * @public
   */
  commentId: string | undefined;
}

/**
 * @public
 */
export interface GetCaseRequest {
  /**
   * <p>Required element for GetCase to identify the requested case ID.</p>
   * @public
   */
  caseId: string | undefined;
}

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
 * <p/>
 * @public
 */
export interface CaseAttachmentAttributes {
  /**
   * <p/>
   * @public
   */
  attachmentId: string | undefined;

  /**
   * <p/>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p/>
   * @public
   */
  attachmentStatus: CaseAttachmentStatus | undefined;

  /**
   * <p/>
   * @public
   */
  creator: string | undefined;

  /**
   * <p/>
   * @public
   */
  createdDate: Date | undefined;
}

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
 */
export interface GetCaseResponse {
  /**
   * <p>Response element for GetCase that provides the case title.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>Response element for GetCase that provides the case ARN</p>
   * @public
   */
  caseArn?: string | undefined;

  /**
   * <p>Response element for GetCase that provides contents of the case description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Response element for GetCase that provides the case status. Options for statuses include <code>Submitted | Detection and Analysis | Eradication, Containment and Recovery | Post-Incident Activities | Closed </code> </p>
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * <p>Response element for GetCase that provides the engagement type. Options for engagement type include <code>Active Security Event | Investigations</code> </p>
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * <p>Response element for GetCase that provides the customer provided incident start date.</p>
   * @public
   */
  reportedIncidentStartDate?: Date | undefined;

  /**
   * <p>Response element for GetCase that provides the actual incident start date as identified by data analysis during the investigation. </p>
   * @public
   */
  actualIncidentStartDate?: Date | undefined;

  /**
   * <p>Response element for GetCase that provides the impacted regions.</p>
   * @public
   */
  impactedAwsRegions?: ImpactedAwsRegion[] | undefined;

  /**
   * <p>Response element for GetCase that provides a list of suspicious IP addresses associated with unauthorized activity. </p>
   * @public
   */
  threatActorIpAddresses?: ThreatActorIp[] | undefined;

  /**
   * <p>Response element for GetCase that provides identifies the case is waiting on customer input.</p>
   * @public
   */
  pendingAction?: PendingAction | undefined;

  /**
   * <p>Response element for GetCase that provides a list of impacted accounts.</p>
   * @public
   */
  impactedAccounts?: string[] | undefined;

  /**
   * <p>Response element for GetCase that provides a list of Watchers added to the case.</p>
   * @public
   */
  watchers?: Watcher[] | undefined;

  /**
   * <p>Response element for GetCase that provides the date the case was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>Response element for GetCase that provides the date a case was last modified.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>Response element for GetCase that provides the summary code for why a case was closed.</p>
   * @public
   */
  closureCode?: ClosureCode | undefined;

  /**
   * <p>Response element for GetCase that provides the current resolver types. Options include <code> self-supported | AWS-supported</code>. </p>
   * @public
   */
  resolverType?: ResolverType | undefined;

  /**
   * <p>Response element for GetCase that provides a list of impacted services.</p>
   * @public
   */
  impactedServices?: string[] | undefined;

  /**
   * <p>Response element for GetCase that provides a list of current case attachments.</p>
   * @public
   */
  caseAttachments?: CaseAttachmentAttributes[] | undefined;

  /**
   * <p>Response element for GetCase that provides the date a specified case was closed.</p>
   * @public
   */
  closedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentDownloadUrlRequest {
  /**
   * <p>Required element for GetCaseAttachmentDownloadUrl to identify the case ID for downloading an attachment from. </p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Required element for GetCaseAttachmentDownloadUrl to identify the attachment ID for downloading an attachment. </p>
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentDownloadUrlResponse {
  /**
   * <p>Response element providing the Amazon S3 presigned URL to download an attachment.</p>
   * @public
   */
  attachmentPresignedUrl: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentUploadUrlRequest {
  /**
   * <p>Required element for GetCaseAttachmentUploadUrl to identify the case ID for uploading an attachment to. </p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Required element for GetCaseAttachmentUploadUrl to identify the file name of the attachment to upload. </p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>Required element for GetCaseAttachmentUploadUrl to identify the size od the file attachment.</p>
   * @public
   */
  contentLength: number | undefined;

  /**
   * <p>Optional element for customer provided token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentUploadUrlResponse {
  /**
   * <p>Response element providing the Amazon S3 presigned UTL to upload the attachment.</p>
   * @public
   */
  attachmentPresignedUrl: string | undefined;
}

/**
 * @public
 */
export interface ListCaseEditsRequest {
  /**
   * <p>Optional element for a customer provided token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional element to identify how many results to obtain. There is a maximum value of 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Required element used with ListCaseEdits to identify the case to query.</p>
   * @public
   */
  caseId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface CaseEditItem {
  /**
   * <p/>
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  principal?: string | undefined;

  /**
   * <p/>
   * @public
   */
  action?: string | undefined;

  /**
   * <p/>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListCaseEditsResponse {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Response element for ListCaseEdits that includes the action, eventtimestamp, message, and principal for the response. </p>
   * @public
   */
  items?: CaseEditItem[] | undefined;

  /**
   * <p>Response element for ListCaseEdits that identifies the total number of edits.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface ListCasesRequest {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional element for ListCases to limit the number of responses.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListCasesItem {
  /**
   * <p/>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p/>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  title?: string | undefined;

  /**
   * <p/>
   * @public
   */
  caseArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * <p/>
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * <p/>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  closedDate?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  resolverType?: ResolverType | undefined;

  /**
   * <p/>
   * @public
   */
  pendingAction?: PendingAction | undefined;
}

/**
 * @public
 */
export interface ListCasesResponse {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Response element for ListCases that includes caseARN, caseID, caseStatus, closedDate, createdDate, engagementType, lastUpdatedDate, pendingAction, resolverType, and title for each response. </p>
   * @public
   */
  items?: ListCasesItem[] | undefined;

  /**
   * <p>Response element for ListCases providing the total number of responses.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface ListCommentsRequest {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional element for ListComments to limit the number of responses.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Required element for ListComments to designate the case to query.</p>
   * @public
   */
  caseId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListCommentsItem {
  /**
   * <p/>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p/>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p/>
   * @public
   */
  creator?: string | undefined;

  /**
   * <p/>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  body?: string | undefined;
}

/**
 * @public
 */
export interface ListCommentsResponse {
  /**
   * <p>Optional request elements.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Response element for ListComments providing the body, commentID, createDate, creator, lastUpdatedBy and lastUpdatedDate for each response. </p>
   * @public
   */
  items?: ListCommentsItem[] | undefined;

  /**
   * <p>Response element for ListComments identifying the number of responses.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRequest {
  /**
   * <p>Required element for UpdateCase to identify the case ID for updates.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content for the title field.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content for the description field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content for the customer reported incident start date field. </p>
   * @public
   */
  reportedIncidentStartDate?: Date | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content for the incident start date field.</p>
   * @public
   */
  actualIncidentStartDate?: Date | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content for the engagement type field. <code>Available engagement types include Security Incident | Investigation</code>. </p>
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add additional watchers to a case.</p>
   * @public
   */
  watchersToAdd?: Watcher[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to remove existing watchers from a case.</p>
   * @public
   */
  watchersToDelete?: Watcher[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add additional suspicious IP addresses related to a case. </p>
   * @public
   */
  threatActorIpAddressesToAdd?: ThreatActorIp[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to remove suspicious IP addresses from a case.</p>
   * @public
   */
  threatActorIpAddressesToDelete?: ThreatActorIp[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add services impacted.</p>
   * @public
   */
  impactedServicesToAdd?: string[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to remove services impacted.</p>
   * @public
   */
  impactedServicesToDelete?: string[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add regions impacted.</p>
   * @public
   */
  impactedAwsRegionsToAdd?: ImpactedAwsRegion[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to remove regions impacted.</p>
   * @public
   */
  impactedAwsRegionsToDelete?: ImpactedAwsRegion[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add accounts impacted.</p>
   * @public
   */
  impactedAccountsToAdd?: string[] | undefined;

  /**
   * <p>Optional element for UpdateCase to provide content to add accounts impacted.</p>
   * @public
   */
  impactedAccountsToDelete?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCaseResponse {}

/**
 * @public
 */
export interface UpdateCaseCommentRequest {
  /**
   * <p>Required element for UpdateCaseComment to identify the case ID containing the comment to be updated. </p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Required element for UpdateCaseComment to identify the case ID to be updated.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>Required element for UpdateCaseComment to identify the content for the comment to be updated.</p>
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface UpdateCaseCommentResponse {
  /**
   * <p>Response element for UpdateCaseComment providing the updated comment ID.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>Response element for UpdateCaseComment providing the updated comment content.</p>
   * @public
   */
  body?: string | undefined;
}

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
 */
export interface UpdateCaseStatusRequest {
  /**
   * <p>Required element for UpdateCaseStatus to identify the case to update.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Required element for UpdateCaseStatus to identify the status for a case. Options include <code>Submitted | Detection and Analysis | Containment, Eradication and Recovery | Post-incident Activities</code>. </p>
   * @public
   */
  caseStatus: SelfManagedCaseStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCaseStatusResponse {
  /**
   * <p>Response element for UpdateCaseStatus showing the newly configured status.</p>
   * @public
   */
  caseStatus?: SelfManagedCaseStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResolverTypeRequest {
  /**
   * <p>Required element for UpdateResolverType to identify the case to update.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Required element for UpdateResolverType to identify the new resolver.</p>
   * @public
   */
  resolverType: ResolverType | undefined;
}

/**
 * @public
 */
export interface UpdateResolverTypeResponse {
  /**
   * <p>Response element for UpdateResolver identifying the case ID being updated.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>Response element for UpdateResolver identifying the current status of the case.</p>
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * <p>Response element for UpdateResolver identifying the current resolver of the case.</p>
   * @public
   */
  resolverType?: ResolverType | undefined;
}

/**
 * <p/>
 * @public
 */
export interface IncidentResponder {
  /**
   * <p/>
   * @public
   */
  name: string | undefined;

  /**
   * <p/>
   * @public
   */
  jobTitle: string | undefined;

  /**
   * <p/>
   * @public
   */
  email: string | undefined;
}

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
 * <p/>
 * @public
 */
export interface OptInFeature {
  /**
   * <p/>
   * @public
   */
  featureName: OptInFeatureName | undefined;

  /**
   * <p/>
   * @public
   */
  isEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface CreateMembershipRequest {
  /**
   * <p>An optional element used in combination with CreateMembership.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Required element use in combination with CreateMembership to create a name for the membership.</p>
   * @public
   */
  membershipName: string | undefined;

  /**
   * <p>Required element use in combination with CreateMembership to add customer incident response team members and trusted partners to the membership. </p>
   * @public
   */
  incidentResponseTeam: IncidentResponder[] | undefined;

  /**
   * <p>Optional element to enable the monitoring and investigation opt-in features for the service.</p>
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;

  /**
   * <p>Optional element for customer configured tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMembershipResponse {
  /**
   * <p>Response element for CreateMembership providing the newly created membership ID.</p>
   * @public
   */
  membershipId: string | undefined;
}

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
 */
export interface GetMembershipRequest {
  /**
   * <p>Required element for GetMembership to identify the membership ID to query.</p>
   * @public
   */
  membershipId: string | undefined;
}

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

/**
 * @public
 */
export interface GetMembershipResponse {
  /**
   * <p>Response element for GetMembership that provides the queried membership ID.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured account for managing the membership. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured region for managing the membership.</p>
   * @public
   */
  region?: AwsRegion | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured membership name.</p>
   * @public
   */
  membershipName?: string | undefined;

  /**
   * <p>Response element for GetMembership that provides the membership ARN.</p>
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * <p>Response element for GetMembership that provides the current membership status.</p>
   * @public
   */
  membershipStatus?: MembershipStatus | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured membership activation timestamp.</p>
   * @public
   */
  membershipActivationTimestamp?: Date | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured membership name deactivation timestamp. </p>
   * @public
   */
  membershipDeactivationTimestamp?: Date | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured membership type. Options include <code> Standalone | Organizations</code>. </p>
   * @public
   */
  customerType?: CustomerType | undefined;

  /**
   * <p>Response element for GetMembership that provides the number of accounts in the membership.</p>
   * @public
   */
  numberOfAccountsCovered?: number | undefined;

  /**
   * <p>Response element for GetMembership that provides the configured membership incident response team members. </p>
   * @public
   */
  incidentResponseTeam?: IncidentResponder[] | undefined;

  /**
   * <p>Response element for GetMembership that provides the if opt-in features have been enabled.</p>
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListMembershipItem {
  /**
   * <p/>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p/>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p/>
   * @public
   */
  region?: AwsRegion | undefined;

  /**
   * <p/>
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  membershipStatus?: MembershipStatus | undefined;
}

/**
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request element for ListMemberships to limit the number of responses.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * <p>Optional element.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request element for ListMemberships including the accountID, membershipARN, membershipID, membershipStatus, and region for each response. </p>
   * @public
   */
  items?: ListMembershipItem[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Required element for ListTagsForResource to provide the ARN to identify a specific resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>Response element for ListTagsForResource providing content for each configured tag.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipRequest {
  /**
   * <p>Required element for UpdateMembership to identify the membership to update.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>Optional element for UpdateMembership to update the membership name.</p>
   * @public
   */
  membershipName?: string | undefined;

  /**
   * <p>Optional element for UpdateMembership to update the membership name.</p>
   * @public
   */
  incidentResponseTeam?: IncidentResponder[] | undefined;

  /**
   * <p>Optional element for UpdateMembership to enable or disable opt-in features for the service.</p>
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipResponse {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>Required element for TagResource to identify the ARN for the resource to add a tag to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Required element for ListTagsForResource to provide the content for a tag.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>Required element for UnTagResource to identify the ARN for the resource to remove a tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Required element for UnTagResource to identify tag to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ThreatActorIpFilterSensitiveLog = (obj: ThreatActorIp): any => ({
  ...obj,
  ...(obj.ipAddress && { ipAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WatcherFilterSensitiveLog = (obj: Watcher): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.jobTitle && { jobTitle: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateCaseRequestFilterSensitiveLog = (obj: CreateCaseRequest): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.watchers && { watchers: obj.watchers.map((item) => WatcherFilterSensitiveLog(item)) }),
  ...(obj.threatActorIpAddresses && {
    threatActorIpAddresses: obj.threatActorIpAddresses.map((item) => ThreatActorIpFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateCaseCommentRequestFilterSensitiveLog = (obj: CreateCaseCommentRequest): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CaseAttachmentAttributesFilterSensitiveLog = (obj: CaseAttachmentAttributes): any => ({
  ...obj,
  ...(obj.fileName && { fileName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCaseResponseFilterSensitiveLog = (obj: GetCaseResponse): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.threatActorIpAddresses && {
    threatActorIpAddresses: obj.threatActorIpAddresses.map((item) => ThreatActorIpFilterSensitiveLog(item)),
  }),
  ...(obj.watchers && { watchers: obj.watchers.map((item) => WatcherFilterSensitiveLog(item)) }),
  ...(obj.caseAttachments && {
    caseAttachments: obj.caseAttachments.map((item) => CaseAttachmentAttributesFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetCaseAttachmentDownloadUrlResponseFilterSensitiveLog = (
  obj: GetCaseAttachmentDownloadUrlResponse
): any => ({
  ...obj,
  ...(obj.attachmentPresignedUrl && { attachmentPresignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCaseAttachmentUploadUrlRequestFilterSensitiveLog = (obj: GetCaseAttachmentUploadUrlRequest): any => ({
  ...obj,
  ...(obj.fileName && { fileName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCaseAttachmentUploadUrlResponseFilterSensitiveLog = (obj: GetCaseAttachmentUploadUrlResponse): any => ({
  ...obj,
  ...(obj.attachmentPresignedUrl && { attachmentPresignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCasesItemFilterSensitiveLog = (obj: ListCasesItem): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCasesResponseFilterSensitiveLog = (obj: ListCasesResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ListCasesItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListCommentsItemFilterSensitiveLog = (obj: ListCommentsItem): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCommentsResponseFilterSensitiveLog = (obj: ListCommentsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ListCommentsItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateCaseRequestFilterSensitiveLog = (obj: UpdateCaseRequest): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.watchersToAdd && { watchersToAdd: obj.watchersToAdd.map((item) => WatcherFilterSensitiveLog(item)) }),
  ...(obj.watchersToDelete && {
    watchersToDelete: obj.watchersToDelete.map((item) => WatcherFilterSensitiveLog(item)),
  }),
  ...(obj.threatActorIpAddressesToAdd && {
    threatActorIpAddressesToAdd: obj.threatActorIpAddressesToAdd.map((item) => ThreatActorIpFilterSensitiveLog(item)),
  }),
  ...(obj.threatActorIpAddressesToDelete && {
    threatActorIpAddressesToDelete: obj.threatActorIpAddressesToDelete.map((item) =>
      ThreatActorIpFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateCaseCommentRequestFilterSensitiveLog = (obj: UpdateCaseCommentRequest): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateCaseCommentResponseFilterSensitiveLog = (obj: UpdateCaseCommentResponse): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IncidentResponderFilterSensitiveLog = (obj: IncidentResponder): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.jobTitle && { jobTitle: SENSITIVE_STRING }),
  ...(obj.email && { email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMembershipRequestFilterSensitiveLog = (obj: CreateMembershipRequest): any => ({
  ...obj,
  ...(obj.membershipName && { membershipName: SENSITIVE_STRING }),
  ...(obj.incidentResponseTeam && {
    incidentResponseTeam: obj.incidentResponseTeam.map((item) => IncidentResponderFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetMembershipResponseFilterSensitiveLog = (obj: GetMembershipResponse): any => ({
  ...obj,
  ...(obj.membershipName && { membershipName: SENSITIVE_STRING }),
  ...(obj.incidentResponseTeam && {
    incidentResponseTeam: obj.incidentResponseTeam.map((item) => IncidentResponderFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateMembershipRequestFilterSensitiveLog = (obj: UpdateMembershipRequest): any => ({
  ...obj,
  ...(obj.membershipName && { membershipName: SENSITIVE_STRING }),
  ...(obj.incidentResponseTeam && {
    incidentResponseTeam: obj.incidentResponseTeam.map((item) => IncidentResponderFilterSensitiveLog(item)),
  }),
});
