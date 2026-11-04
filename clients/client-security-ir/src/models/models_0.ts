// smithy-typescript generated code
import type {
  ActionType,
  AwsRegion,
  CaseAttachmentStatus,
  CaseStatus,
  ClosureCode,
  CommunicationType,
  CustomerType,
  EngagementType,
  ExecutionStatus,
  MembershipAccountRelationshipStatus,
  MembershipAccountRelationshipType,
  MembershipStatus,
  OptInFeatureName,
  PendingAction,
  ResolverType,
  SelfManagedCaseStatus,
  UsefulnessRating,
} from "./enums";

/**
 * @public
 */
export interface BatchGetMemberAccountDetailsRequest {
  /**
   * Required element used in combination with BatchGetMemberAccountDetails to identify the membership ID to query.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * Optional element to query the membership relationship status to a provided list of account IDs.
   *
   * > **Note:** AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be `123123123` which is nine digits, and with zero-prepend would be `000123123123`. Not zero-prepending to 12 digits could result in errors.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetMembershipAccountDetailError {
  /**
   * @public
   */
  accountId: string | undefined;

  /**
   * @public
   */
  error: string | undefined;

  /**
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipAccountDetailItem {
  /**
   * @public
   */
  accountId?: string | undefined;

  /**
   * @public
   */
  relationshipStatus?: MembershipAccountRelationshipStatus | undefined;

  /**
   * @public
   */
  relationshipType?: MembershipAccountRelationshipType | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberAccountDetailsResponse {
  /**
   * The response element providing responses for requests to GetMembershipAccountDetails.
   *
   * @public
   */
  items?: GetMembershipAccountDetailItem[] | undefined;

  /**
   * The response element providing error messages for requests to GetMembershipAccountDetails.
   *
   * @public
   */
  errors?: GetMembershipAccountDetailError[] | undefined;
}

/**
 * @public
 */
export interface ValidationExceptionField {
  /**
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CancelMembershipRequest {
  /**
   * Required element used in combination with CancelMembershipRequest to identify the membership ID to cancel.
   *
   * @public
   */
  membershipId: string | undefined;
}

/**
 * @public
 */
export interface CancelMembershipResponse {
  /**
   * The response element providing responses for requests to CancelMembershipRequest.
   *
   * @public
   */
  membershipId: string | undefined;
}

/**
 * @public
 */
export interface CloseCaseRequest {
  /**
   * Required element used in combination with CloseCase to identify the case ID to close.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface CloseCaseResponse {
  /**
   * A response element providing responses for requests to CloseCase. This element responds `Closed` if successful.
   *
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * A response element providing responses for requests to CloseCase. This element responds with the ISO-8601 formatted timestamp of the moment when the case was closed.
   *
   * @public
   */
  closedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ImpactedAwsRegion {
  /**
   * @public
   */
  region: AwsRegion | undefined;
}

/**
 * @public
 */
export interface ThreatActorIp {
  /**
   * @public
   */
  ipAddress: string | undefined;

  /**
   * @public
   */
  userAgent?: string | undefined;
}

/**
 * @public
 */
export interface Watcher {
  /**
   * @public
   */
  email: string | undefined;

  /**
   * @public
   */
  name?: string | undefined;

  /**
   * @public
   */
  jobTitle?: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * > **Note:** The `clientToken` field is an idempotency key used to ensure that repeated attempts for a single action will be ignored by the server during retries. A caller supplied unique ID (typically a UUID) should be provided.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Required element used in combination with CreateCase to identify the resolver type.
   *
   * @public
   */
  resolverType: ResolverType | undefined;

  /**
   * Required element used in combination with CreateCase to provide a title for the new case.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Required element used in combination with CreateCase
   *
   * to provide a description for the new case.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Required element used in combination with CreateCase to provide an engagement type for the new cases. Available engagement types include Security Incident | Investigation
   *
   * @public
   */
  engagementType: EngagementType | undefined;

  /**
   * Required element used in combination with CreateCase to provide an initial start date for the unauthorized activity.
   *
   * @public
   */
  reportedIncidentStartDate: Date | undefined;

  /**
   * Required element used in combination with CreateCase to provide a list of impacted accounts.
   *
   * > **Note:** AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be `123123123` which is nine digits, and with zero-prepend would be `000123123123`. Not zero-prepending to 12 digits could result in errors.
   *
   * @public
   */
  impactedAccounts: string[] | undefined;

  /**
   * Required element used in combination with CreateCase to provide a list of entities to receive notifications for case updates.
   *
   * @public
   */
  watchers: Watcher[] | undefined;

  /**
   * An optional element used in combination with CreateCase to provide a list of suspicious internet protocol addresses associated with unauthorized activity.
   *
   * @public
   */
  threatActorIpAddresses?: ThreatActorIp[] | undefined;

  /**
   * An optional element used in combination with CreateCase to provide a list of services impacted.
   *
   * @public
   */
  impactedServices?: string[] | undefined;

  /**
   * An optional element used in combination with CreateCase to provide a list of impacted regions.
   *
   * @public
   */
  impactedAwsRegions?: ImpactedAwsRegion[] | undefined;

  /**
   * An optional element used in combination with CreateCase to add customer specified tags to a case.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCaseResponse {
  /**
   * A response element providing responses for requests to CreateCase. This element responds with the case ID.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseCommentRequest {
  /**
   * Required element used in combination with CreateCaseComment to specify a case ID.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * > **Note:** The `clientToken` field is an idempotency key used to ensure that repeated attempts for a single action will be ignored by the server during retries. A caller supplied unique ID (typically a UUID) should be provided.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Required element used in combination with CreateCaseComment to add content for the new comment.
   *
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseCommentResponse {
  /**
   * Response element indicating the new comment ID.
   *
   * @public
   */
  commentId: string | undefined;
}

/**
 * @public
 */
export interface GetCaseRequest {
  /**
   * Required element for GetCase to identify the requested case ID.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface CaseAttachmentAttributes {
  /**
   * @public
   */
  attachmentId: string | undefined;

  /**
   * @public
   */
  fileName: string | undefined;

  /**
   * @public
   */
  attachmentStatus: CaseAttachmentStatus | undefined;

  /**
   * @public
   */
  creator: string | undefined;

  /**
   * @public
   */
  createdDate: Date | undefined;
}

/**
 * Represents a single metadata entry associated with a case. Each entry consists of a key-value pair that provides additional contextual information about the case, such as classification tags, custom attributes, or system-generated properties.
 *
 * @public
 */
export interface CaseMetadataEntry {
  /**
   * The identifier for the metadata field. This key uniquely identifies the type of metadata being stored, such as "severity", "category", or "assignee".
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value associated with the metadata key. This contains the actual data for the metadata field identified by the key.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface GetCaseResponse {
  /**
   * Response element for GetCase that provides the case title.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * Response element for GetCase that provides the case ARN
   *
   * @public
   */
  caseArn?: string | undefined;

  /**
   * Response element for GetCase that provides contents of the case description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Response element for GetCase that provides the case status. Options for statuses include `Submitted | Detection and Analysis | Eradication, Containment and Recovery | Post-Incident Activities | Closed`
   *
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * Response element for GetCase that provides the engagement type. Options for engagement type include `Active Security Event | Investigations`
   *
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * Response element for GetCase that provides the customer provided incident start date.
   *
   * @public
   */
  reportedIncidentStartDate?: Date | undefined;

  /**
   * Response element for GetCase that provides the actual incident start date as identified by data analysis during the investigation.
   *
   * @public
   */
  actualIncidentStartDate?: Date | undefined;

  /**
   * Response element for GetCase that provides the impacted regions.
   *
   * @public
   */
  impactedAwsRegions?: ImpactedAwsRegion[] | undefined;

  /**
   * Response element for GetCase that provides a list of suspicious IP addresses associated with unauthorized activity.
   *
   * @public
   */
  threatActorIpAddresses?: ThreatActorIp[] | undefined;

  /**
   * Response element for GetCase that identifies the case is waiting on customer input.
   *
   * @public
   */
  pendingAction?: PendingAction | undefined;

  /**
   * Response element for GetCase that provides a list of impacted accounts.
   *
   * @public
   */
  impactedAccounts?: string[] | undefined;

  /**
   * Response element for GetCase that provides a list of Watchers added to the case.
   *
   * @public
   */
  watchers?: Watcher[] | undefined;

  /**
   * Response element for GetCase that provides the date the case was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * Response element for GetCase that provides the date a case was last modified.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * Response element for GetCase that provides the summary code for why a case was closed.
   *
   * @public
   */
  closureCode?: ClosureCode | undefined;

  /**
   * Response element for GetCase that provides the current resolver types.
   *
   * @public
   */
  resolverType?: ResolverType | undefined;

  /**
   * Response element for GetCase that provides a list of impacted services.
   *
   * @public
   */
  impactedServices?: string[] | undefined;

  /**
   * Response element for GetCase that provides a list of current case attachments.
   *
   * @public
   */
  caseAttachments?: CaseAttachmentAttributes[] | undefined;

  /**
   * Response element for GetCase that provides the date a specified case was closed.
   *
   * @public
   */
  closedDate?: Date | undefined;

  /**
   * Case response metadata
   *
   * @public
   */
  caseMetadata?: CaseMetadataEntry[] | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentDownloadUrlRequest {
  /**
   * Required element for GetCaseAttachmentDownloadUrl to identify the case ID for downloading an attachment from.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Required element for GetCaseAttachmentDownloadUrl to identify the attachment ID for downloading an attachment.
   *
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentDownloadUrlResponse {
  /**
   * Response element providing the Amazon S3 presigned URL to download an attachment.
   *
   * @public
   */
  attachmentPresignedUrl: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentUploadUrlRequest {
  /**
   * Required element for GetCaseAttachmentUploadUrl to identify the case ID for uploading an attachment.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Required element for GetCaseAttachmentUploadUrl to identify the file name of the attachment to upload.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * Required element for GetCaseAttachmentUploadUrl to identify the size of the file attachment.
   *
   * @public
   */
  contentLength: number | undefined;

  /**
   * > **Note:** The `clientToken` field is an idempotency key used to ensure that repeated attempts for a single action will be ignored by the server during retries. A caller supplied unique ID (typically a UUID) should be provided.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCaseAttachmentUploadUrlResponse {
  /**
   * Response element providing the Amazon S3 presigned URL to upload the attachment.
   *
   * @public
   */
  attachmentPresignedUrl: string | undefined;
}

/**
 * @public
 */
export interface ListCaseEditsRequest {
  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to ListCaseEdits. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional element to identify how many results to obtain. There is a maximum value of 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Required element used with ListCaseEdits to identify the case to query.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface CaseEditItem {
  /**
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * @public
   */
  principal?: string | undefined;

  /**
   * @public
   */
  action?: string | undefined;

  /**
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListCaseEditsResponse {
  /**
   * An optional string that, if supplied on subsequent calls to ListCaseEdits, allows the API to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Response element for ListCaseEdits that includes the action, event timestamp, message, and principal for the response.
   *
   * @public
   */
  items?: CaseEditItem[] | undefined;

  /**
   * Response element for ListCaseEdits that identifies the total number of edits.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface ListCasesRequest {
  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to ListCases. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional element for ListCases to limit the number of responses.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCasesItem {
  /**
   * @public
   */
  caseId: string | undefined;

  /**
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * @public
   */
  title?: string | undefined;

  /**
   * @public
   */
  caseArn?: string | undefined;

  /**
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * @public
   */
  closedDate?: Date | undefined;

  /**
   * @public
   */
  resolverType?: ResolverType | undefined;

  /**
   * @public
   */
  pendingAction?: PendingAction | undefined;
}

/**
 * @public
 */
export interface ListCasesResponse {
  /**
   * An optional string that, if supplied on subsequent calls to ListCases, allows the API to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Response element for ListCases that includes caseARN, caseID, caseStatus, closedDate, createdDate, engagementType, lastUpdatedDate, pendingAction, resolverType, and title for each response.
   *
   * @public
   */
  items?: ListCasesItem[] | undefined;

  /**
   * Response element for ListCases providing the total number of responses.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface ListCommentsRequest {
  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to ListComments. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional element for ListComments to limit the number of responses.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Required element for ListComments to designate the case to query.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface ListCommentsItem {
  /**
   * @public
   */
  commentId: string | undefined;

  /**
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * @public
   */
  creator?: string | undefined;

  /**
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * @public
   */
  body?: string | undefined;
}

/**
 * @public
 */
export interface ListCommentsResponse {
  /**
   * An optional string that, if supplied on subsequent calls to ListComments, allows the API to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Response element for ListComments providing the body, commentID, createDate, creator, lastUpdatedBy and lastUpdatedDate for each response.
   *
   * @public
   */
  items?: ListCommentsItem[] | undefined;

  /**
   * Response element for ListComments identifying the number of responses.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsRequest {
  /**
   * Investigation performed by an agent for a security incident request
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Investigation performed by an agent for a security incident request, returning max results
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Investigation performed by an agent for a security incident per caseID
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * Represents user feedback for an investigation result. This structure captures the user's evaluation of the investigation's quality, usefulness, and any additional comments.
 *
 * @public
 */
export interface InvestigationFeedback {
  /**
   * User assessment of the investigation result's quality and helpfulness. This rating indicates how valuable the investigation findings were in addressing the case.
   *
   * @public
   */
  usefulness?: UsefulnessRating | undefined;

  /**
   * Optional user comments providing additional context about the investigation feedback. This allows users to explain their rating or provide suggestions for improvement.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * ISO 8601 timestamp when the feedback was submitted. This records when the user provided their assessment of the investigation results.
   *
   * @public
   */
  submittedAt?: Date | undefined;
}

/**
 * Represents an investigation action performed within a case. This structure captures the details of an automated or manual investigation, including its status, results, and user feedback.
 *
 * @public
 */
export interface InvestigationAction {
  /**
   * The unique identifier for this investigation action. This ID is used to track and reference the specific investigation throughout its lifecycle.
   *
   * @public
   */
  investigationId: string | undefined;

  /**
   * The type of investigation action being performed. This categorizes the investigation method or approach used in the case.
   *
   * @public
   */
  actionType: ActionType | undefined;

  /**
   * Human-readable summary of the investigation focus. This provides a brief description of what the investigation is examining or analyzing.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Detailed investigation results in rich markdown format. This field contains the comprehensive findings, analysis, and conclusions from the investigation.
   *
   * @public
   */
  content: string | undefined;

  /**
   * The current execution status of the investigation. This indicates whether the investigation is pending, in progress, completed, or failed.
   *
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * ISO 8601 timestamp of the most recent status update. This indicates when the investigation was last modified or when its status last changed.
   *
   * @public
   */
  lastUpdated: Date | undefined;

  /**
   * User feedback for this investigation result. This contains the user's assessment and comments about the quality and usefulness of the investigation findings.
   *
   * @public
   */
  feedback?: InvestigationFeedback | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsResponse {
  /**
   * Investigation performed by an agent for a security incident for next Token
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Investigation performed by an agent for a security incid…Unique identifier for the specific investigation&gt;
   *
   * @public
   */
  investigationActions: InvestigationAction[] | undefined;
}

/**
 * @public
 */
export interface SendFeedbackRequest {
  /**
   * Send feedback based on request caseID
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Send feedback based on request result ID
   *
   * @public
   */
  resultId: string | undefined;

  /**
   * Required enum value indicating user assessment of result q.....
   *
   * @public
   */
  usefulness: UsefulnessRating | undefined;

  /**
   * Send feedback based on request comments
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface SendFeedbackResponse {}

/**
 * @public
 */
export interface UpdateCaseRequest {
  /**
   * Required element for UpdateCase to identify the case ID for updates.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Optional element for UpdateCase to provide content for the title field.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * Optional element for UpdateCase to provide content for the description field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Optional element for UpdateCase to provide content for the customer reported incident start date field.
   *
   * @public
   */
  reportedIncidentStartDate?: Date | undefined;

  /**
   * Optional element for UpdateCase to provide content for the incident start date field.
   *
   * @public
   */
  actualIncidentStartDate?: Date | undefined;

  /**
   * Optional element for UpdateCase to provide content for the engagement type field. `Available engagement types include Security Incident | Investigation`.
   *
   * @public
   */
  engagementType?: EngagementType | undefined;

  /**
   * Optional element for UpdateCase to provide content to add additional watchers to a case.
   *
   * @public
   */
  watchersToAdd?: Watcher[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to remove existing watchers from a case.
   *
   * @public
   */
  watchersToDelete?: Watcher[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to add additional suspicious IP addresses related to a case.
   *
   * @public
   */
  threatActorIpAddressesToAdd?: ThreatActorIp[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to remove suspicious IP addresses from a case.
   *
   * @public
   */
  threatActorIpAddressesToDelete?: ThreatActorIp[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to add services impacted.
   *
   * @public
   */
  impactedServicesToAdd?: string[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to remove services impacted.
   *
   * @public
   */
  impactedServicesToDelete?: string[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to add regions impacted.
   *
   * @public
   */
  impactedAwsRegionsToAdd?: ImpactedAwsRegion[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to remove regions impacted.
   *
   * @public
   */
  impactedAwsRegionsToDelete?: ImpactedAwsRegion[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to add accounts impacted.
   *
   * > **Note:** AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be `123123123` which is nine digits, and with zero-prepend would be `000123123123`. Not zero-prepending to 12 digits could result in errors.
   *
   * @public
   */
  impactedAccountsToAdd?: string[] | undefined;

  /**
   * Optional element for UpdateCase to provide content to add accounts impacted.
   *
   * > **Note:** AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be `123123123` which is nine digits, and with zero-prepend would be `000123123123`. Not zero-prepending to 12 digits could result in errors.
   *
   * @public
   */
  impactedAccountsToDelete?: string[] | undefined;

  /**
   * Update the case request with case metadata
   *
   * @public
   */
  caseMetadata?: CaseMetadataEntry[] | undefined;
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
   * Required element for UpdateCaseComment to identify the case ID containing the comment to be updated.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Required element for UpdateCaseComment to identify the case ID to be updated.
   *
   * @public
   */
  commentId: string | undefined;

  /**
   * Required element for UpdateCaseComment to identify the content for the comment to be updated.
   *
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface UpdateCaseCommentResponse {
  /**
   * Response element for UpdateCaseComment providing the updated comment ID.
   *
   * @public
   */
  commentId: string | undefined;

  /**
   * Response element for UpdateCaseComment providing the updated comment content.
   *
   * @public
   */
  body?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCaseStatusRequest {
  /**
   * Required element for UpdateCaseStatus to identify the case to update.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Required element for UpdateCaseStatus to identify the status for a case. Options include `Submitted | Detection and Analysis | Containment, Eradication and Recovery | Post-incident Activities`.
   *
   * @public
   */
  caseStatus: SelfManagedCaseStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCaseStatusResponse {
  /**
   * Response element for UpdateCaseStatus showing the newly configured status.
   *
   * @public
   */
  caseStatus?: SelfManagedCaseStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResolverTypeRequest {
  /**
   * Required element for UpdateResolverType to identify the case to update.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Required element for UpdateResolverType to identify the new resolver.
   *
   * @public
   */
  resolverType: ResolverType | undefined;
}

/**
 * @public
 */
export interface UpdateResolverTypeResponse {
  /**
   * Response element for UpdateResolver identifying the case ID being updated.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Response element for UpdateResolver identifying the current status of the case.
   *
   * @public
   */
  caseStatus?: CaseStatus | undefined;

  /**
   * Response element for UpdateResolver identifying the current resolver of the case.
   *
   * @public
   */
  resolverType?: ResolverType | undefined;
}

/**
 * @public
 */
export interface IncidentResponder {
  /**
   * @public
   */
  name: string | undefined;

  /**
   * @public
   */
  jobTitle: string | undefined;

  /**
   * @public
   */
  email: string | undefined;

  /**
   * @public
   */
  communicationPreferences?: CommunicationType[] | undefined;
}

/**
 * @public
 */
export interface OptInFeature {
  /**
   * @public
   */
  featureName: OptInFeatureName | undefined;

  /**
   * @public
   */
  isEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface CreateMembershipRequest {
  /**
   * > **Note:** The `clientToken` field is an idempotency key used to ensure that repeated attempts for a single action will be ignored by the server during retries. A caller supplied unique ID (typically a UUID) should be provided.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Required element used in combination with CreateMembership to create a name for the membership.
   *
   * @public
   */
  membershipName: string | undefined;

  /**
   * Required element used in combination with CreateMembership to add customer incident response team members and trusted partners to the membership.
   *
   * @public
   */
  incidentResponseTeam: IncidentResponder[] | undefined;

  /**
   * Optional element to enable the monitoring and investigation opt-in features for the service.
   *
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;

  /**
   * Optional element for customer configured tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The `coverEntireOrganization` parameter is a boolean flag that determines whether the membership should be applied to the entire Amazon Web Services Organization. When set to true, the membership will be created for all accounts within the organization. When set to false, the membership will only be created for specified accounts.
   *
   * This parameter is optional. If not specified, the default value is false.
   *
   * - If set to *true*: The membership will automatically include all existing and future accounts in the Amazon Web Services Organization.
   * - If set to *false*: The membership will only apply to explicitly specified accounts.
   *
   * @public
   */
  coverEntireOrganization?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateMembershipResponse {
  /**
   * Response element for CreateMembership providing the newly created membership ID.
   *
   * @public
   */
  membershipId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingMetricsRequest {
  /**
   * The membership ID to retrieve metrics for.
   * @public
   */
  membershipId: string | undefined;

  /**
   * The start of the day-aligned UTC window, inclusive.
   * @public
   */
  startDate: Date | undefined;

  /**
   * The end of the day-aligned UTC window, inclusive.
   * @public
   */
  endDate: Date | undefined;
}

/**
 * Finding-lifecycle metrics for a membership over the requested date range.
 * @public
 */
export interface GetFindingMetricsResponse {
  /**
   * The number of findings ingested from AWS Security Hub during the requested date range.
   * @public
   */
  findingsIngestedSecurityHub: number | undefined;

  /**
   * The number of findings ingested from Amazon GuardDuty during the requested date range.
   * @public
   */
  findingsIngestedGuardDuty: number | undefined;

  /**
   * The number of findings triaged during the requested date range.
   * @public
   */
  findingsTriaged: number | undefined;

  /**
   * The number of triaged findings that were closed as false positives during the requested date range.
   * @public
   */
  findingsTriagedFalsePositive: number | undefined;

  /**
   * The number of findings investigated during the requested date range.
   * @public
   */
  findingsInvestigated: number | undefined;

  /**
   * The number of investigated findings that were closed as false positives during the requested date range.
   * @public
   */
  findingsInvestigatedFalsePositive: number | undefined;

  /**
   * The number of findings escalated during the requested date range.
   * @public
   */
  findingsEscalated: number | undefined;

  /**
   * The number of escalated findings that were closed as false positives during the requested date range.
   * @public
   */
  findingsEscalatedFalsePositive: number | undefined;

  /**
   * The number of findings confirmed as true positives during the requested date range.
   * @public
   */
  findingsTruePositive: number | undefined;

  /**
   * The number of findings whose investigation was in progress during the requested date range.
   * @public
   */
  findingsInvestigatedInProgress: number | undefined;

  /**
   * The number of findings whose escalation was in progress during the requested date range.
   * @public
   */
  findingsEscalatedInProgress: number | undefined;
}

/**
 * @public
 */
export interface GetMembershipRequest {
  /**
   * Required element for GetMembership to identify the membership ID to query.
   *
   * @public
   */
  membershipId: string | undefined;
}

/**
 * The `MembershipAccountsConfigurations` structure defines the configuration settings for managing membership accounts withinAmazon Web Services.
 *
 * This structure contains settings that determine how member accounts are configured and managed within your organization, including:
 *
 * - Account configuration preferences
 * - Membership validation rules
 * - Account access settings
 *
 * You can use this structure to define and maintain standardized configurations across multiple member accounts in your organization.
 *
 * @public
 */
export interface MembershipAccountsConfigurations {
  /**
   * The `coverEntireOrganization` field is a boolean value that determines whether the membership configuration applies to all accounts within an Amazon Web Services Organization.
   *
   * When set to `true`, the configuration will be applied across all accounts in the organization. When set to `false`, the configuration will only apply to specifically designated accounts under the AWS Organizational Units specificied.
   *
   * @public
   */
  coverEntireOrganization?: boolean | undefined;

  /**
   * A list of organizational unit IDs that follow the pattern `ou-[0-9a-z]\{4,32\}-[a-z0-9]\{8,32\}`. These IDs represent the organizational units within an Amazon Web Services Organizations structure that are covered by the membership.
   *
   * Each organizational unit ID in the list must:
   *
   * - Begin with the prefix 'ou-'
   * - Contain between 4 and 32 alphanumeric characters in the first segment
   * - Contain between 8 and 32 alphanumeric characters in the second segment
   *
   * @public
   */
  organizationalUnits?: string[] | undefined;
}

/**
 * @public
 */
export interface GetMembershipResponse {
  /**
   * Response element for GetMembership that provides the queried membership ID.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * Response element for GetMembership that provides the account configured to manage the membership.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Response element for GetMembership that provides the region configured to manage the membership.
   *
   * @public
   */
  region?: AwsRegion | undefined;

  /**
   * Response element for GetMembership that provides the configured membership name.
   *
   * @public
   */
  membershipName?: string | undefined;

  /**
   * Response element for GetMembership that provides the membership ARN.
   *
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * Response element for GetMembership that provides the current membership status.
   *
   * @public
   */
  membershipStatus?: MembershipStatus | undefined;

  /**
   * Response element for GetMembership that provides the configured membership activation timestamp.
   *
   * @public
   */
  membershipActivationTimestamp?: Date | undefined;

  /**
   * Response element for GetMembership that provides the configured membership name deactivation timestamp.
   *
   * @public
   */
  membershipDeactivationTimestamp?: Date | undefined;

  /**
   * Response element for GetMembership that provides the configured membership type. Options include `Standalone | Organizations`.
   *
   * @public
   */
  customerType?: CustomerType | undefined;

  /**
   * Response element for GetMembership that provides the number of accounts in the membership.
   *
   * @public
   */
  numberOfAccountsCovered?: number | undefined;

  /**
   * Response element for GetMembership that provides the configured membership incident response team members.
   *
   * @public
   */
  incidentResponseTeam?: IncidentResponder[] | undefined;

  /**
   * Response element for GetMembership that provides the if opt-in features have been enabled.
   *
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;

  /**
   * The `membershipAccountsConfigurations` field contains the configuration details for member accounts within the Amazon Web Services Organizations membership structure.
   *
   * This field returns a structure containing information about:
   *
   * - Account configurations for member accounts
   * - Membership settings and preferences
   * - Account-level permissions and roles
   *
   * @public
   */
  membershipAccountsConfigurations?: MembershipAccountsConfigurations | undefined;
}

/**
 * @public
 */
export interface ListMembershipItem {
  /**
   * @public
   */
  membershipId: string | undefined;

  /**
   * @public
   */
  accountId?: string | undefined;

  /**
   * @public
   */
  region?: AwsRegion | undefined;

  /**
   * @public
   */
  membershipArn?: string | undefined;

  /**
   * @public
   */
  membershipStatus?: MembershipStatus | undefined;
}

/**
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to ListMemberships. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request element for ListMemberships to limit the number of responses.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * An optional string that, if supplied on subsequent calls to ListMemberships, allows the API to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Request element for ListMemberships including the accountID, membershipARN, membershipID, membershipStatus, and region for each response.
   *
   * @public
   */
  items?: ListMembershipItem[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * Required element for ListTagsForResource to provide the ARN to identify a specific resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * Response element for ListTagsForResource providing content for each configured tag.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The `MembershipAccountsConfigurationsUpdate`structure represents the configuration updates for member accounts within an Amazon Web Services organization.
 *
 * This structure is used to modify existing account configurations and settings for members in the organization. When applying updates, ensure all required fields are properly specified to maintain account consistency.
 *
 * Key considerations when using this structure:
 *
 * - All configuration changes are validated before being applied
 * - Updates are processed asynchronously in the background
 * - Configuration changes may take several minutes to propagate across all affected accounts
 *
 * @public
 */
export interface MembershipAccountsConfigurationsUpdate {
  /**
   * The `coverEntireOrganization` field is a boolean value that determines whether the membership configuration should be applied across the entire Amazon Web Services Organization.
   *
   * When set to `true`, the configuration will be applied to all accounts within the organization. When set to `false`, the configuration will only apply to specifically designated accounts.
   *
   * @public
   */
  coverEntireOrganization?: boolean | undefined;

  /**
   * A list of organizational unit IDs to add to the membership configuration. Each organizational unit ID must match the pattern `ou-[0-9a-z]\{4,32\}-[a-z0-9]\{8,32\}`.
   *
   * The list must contain between 1 and 5 organizational unit IDs.
   *
   * @public
   */
  organizationalUnitsToAdd?: string[] | undefined;

  /**
   * A list of organizational unit IDs to remove from the membership configuration. Each organizational unit ID must match the pattern `ou-[0-9a-z]\{4,32\}-[a-z0-9]\{8,32\}`.
   *
   * The list must contain between 1 and 5 organizational unit IDs per invocation of the API request.
   *
   * @public
   */
  organizationalUnitsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipRequest {
  /**
   * Required element for UpdateMembership to identify the membership to update.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * Optional element for UpdateMembership to update the membership name.
   *
   * @public
   */
  membershipName?: string | undefined;

  /**
   * Optional element for UpdateMembership to update the membership name.
   *
   * @public
   */
  incidentResponseTeam?: IncidentResponder[] | undefined;

  /**
   * Optional element for UpdateMembership to enable or disable opt-in features for the service.
   *
   * @public
   */
  optInFeatures?: OptInFeature[] | undefined;

  /**
   * The `membershipAccountsConfigurationsUpdate` field in the `UpdateMembershipRequest` structure allows you to update the configuration settings for accounts within a membership.
   *
   * This field is optional and contains a structure of type `MembershipAccountsConfigurationsUpdate` that specifies the updated account configurations for the membership.
   *
   * @public
   */
  membershipAccountsConfigurationsUpdate?: MembershipAccountsConfigurationsUpdate | undefined;

  /**
   * The `undoMembershipCancellation` parameter is a boolean flag that indicates whether to reverse a previously requested membership cancellation. When set to true, this will revoke the cancellation request and maintain the membership status.
   *
   * This parameter is optional and can be used in scenarios where you need to restore a membership that was marked for cancellation but hasn't been fully terminated yet.
   *
   * - If set to `true`, the cancellation request will be revoked
   * - If set to `false` the service will throw a ValidationException.
   *
   * @public
   */
  undoMembershipCancellation?: boolean | undefined;
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
   * Required element for TagResource to identify the ARN for the resource to add a tag to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Required element for ListTagsForResource to provide the content for a tag.
   *
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
   * Required element for UnTagResource to identify the ARN for the resource to remove a tag from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Required element for UnTagResource to identify tag to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
