// smithy-typescript generated code
import type {
  AcceptanceType,
  AgreementType,
  CustomerAgreementState,
  FeedbackRating,
  FeedbackReasonCode,
  InputSource,
  InquiryStatus,
  InquiryStatusMessage,
  InquirySupportMode,
  NotificationSubscriptionStatus,
  PublishedState,
  QueryStatus,
  QueryStatusMessage,
  ReviewType,
  UploadState,
} from "./enums";

/**
 * Account settings for the customer.
 *
 * @public
 */
export interface AccountSettings {
  /**
   * Notification subscription status of the customer.
   *
   * @public
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * Account settings for the customer.
   *
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * Validation exception message and name.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Name of validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingsRequest {
  /**
   * Desired notification subscription status.
   *
   * @public
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingsResponse {
  /**
   * Account settings for the customer.
   *
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * File content structure for compliance inquiry uploads.
 *
 * @public
 */
export interface InquiryFileContent {
  /**
   * List of file sections/sheets to process.
   *
   * @public
   */
  fileSections?: string[] | undefined;

  /**
   * Binary content of the uploaded file.
   *
   * @public
   */
  content: Uint8Array | undefined;
}

/**
 * Content for creating a compliance inquiry - either a single query or file content.
 *
 * @public
 */
export type InquiryContent =
  | InquiryContent.FileContentMember
  | InquiryContent.QueryMember
  | InquiryContent.$UnknownMember;

/**
 * @public
 */
export namespace InquiryContent {
  /**
   * Single text query for AI-generated answer.
   *
   * @public
   */
  export interface QueryMember {
    query: string;
    fileContent?: never;
    $unknown?: never;
  }

  /**
   * File content with multiple questions.
   *
   * @public
   */
  export interface FileContentMember {
    query?: never;
    fileContent: InquiryFileContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    query?: never;
    fileContent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    query: (value: string) => T;
    fileContent: (value: InquiryFileContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateComplianceInquiryRequest {
  /**
   * Title of the inquiry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Content for creating a compliance inquiry - either a single query or file content.
   *
   * @public
   */
  inquiryContent: InquiryContent | undefined;

  /**
   * Idempotency token for the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Support mode for inquiry processing. Only supported for file upload mode. Defaults to AI_ONLY if not specified.
   *
   * @public
   */
  supportMode?: InquirySupportMode | undefined;

  /**
   * Tags to associate with the compliance inquiry resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Summary information about a compliance inquiry.
 *
 * @public
 */
export interface InquirySummary {
  /**
   * ARN of the compliance inquiry resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Title of the inquiry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unique resource ID for the compliance inquiry.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Current processing status of the inquiry.
   *
   * @public
   */
  status: InquiryStatus | undefined;

  /**
   * Status message providing additional context.
   *
   * @public
   */
  statusMessage: InquiryStatusMessage | undefined;

  /**
   * Type of inquiry content (text or file).
   *
   * @public
   */
  inputSource: InputSource | undefined;

  /**
   * Timestamp indicating when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateComplianceInquiryResponse {
  /**
   * Summary information about the created compliance inquiry.
   *
   * @public
   */
  complianceInquirySummary?: InquirySummary | undefined;

  /**
   * Tags associated with the compliance inquiry resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ExportComplianceInquiryRequest {
  /**
   * Unique resource ID for the compliance inquiry.
   *
   * @public
   */
  complianceInquiryId: string | undefined;

  /**
   * List of query identifiers to include in the export.
   *
   * @public
   */
  queryIdentifiers?: number[] | undefined;

  /**
   * When true, include citations in the exported document.
   *
   * @public
   */
  includeCitations?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportComplianceInquiryResponse {
  /**
   * Presigned S3 URL to access the exported compliance inquiry report.
   *
   * @public
   */
  documentPresignedUrl?: string | undefined;

  /**
   * Tags associated with the compliance inquiry resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetComplianceInquiryMetadataRequest {
  /**
   * Unique resource ID for the compliance inquiry.
   *
   * @public
   */
  complianceInquiryId: string | undefined;
}

/**
 * Detailed information about a compliance inquiry.
 *
 * @public
 */
export interface InquiryDetail {
  /**
   * ARN of the compliance inquiry resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Title of the inquiry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Unique resource ID for the compliance inquiry.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Current processing status of the inquiry.
   *
   * @public
   */
  status: InquiryStatus | undefined;

  /**
   * Status message providing additional context.
   *
   * @public
   */
  statusMessage: InquiryStatusMessage | undefined;

  /**
   * Type of inquiry content (text or file).
   *
   * @public
   */
  inputSource: InputSource | undefined;

  /**
   * Timestamp indicating when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp indicating when the resource was last modified.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Support mode for this inquiry. AI_ONLY provides AI-generated responses.
   *
   * @public
   */
  supportMode?: InquirySupportMode | undefined;
}

/**
 * @public
 */
export interface GetComplianceInquiryMetadataResponse {
  /**
   * Detailed information about the compliance inquiry.
   *
   * @public
   */
  complianceInquiryDetail?: InquiryDetail | undefined;

  /**
   * Tags associated with the compliance inquiry resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiriesRequest {
  /**
   * Maximum number of resources to return in the paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiriesResponse {
  /**
   * List of compliance inquiry resources.
   *
   * @public
   */
  complianceInquiries?: InquirySummary[] | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiryQueriesRequest {
  /**
   * Unique resource ID for the compliance inquiry.
   *
   * @public
   */
  complianceInquiryId: string | undefined;

  /**
   * Maximum number of resources to return in the paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Citation information for AI-generated responses.
 *
 * @public
 */
export interface Citation {
  /**
   * Label identifying the compliance source.
   *
   * @public
   */
  sourceLabel?: string | undefined;

  /**
   * Content text from the compliance source.
   *
   * @public
   */
  sourceContent?: string | undefined;

  /**
   * Link to the compliance source.
   *
   * @public
   */
  sourceLink?: string | undefined;
}

/**
 * A versioned snapshot of a response edit.
 *
 * @public
 */
export interface ResponseVersion {
  /**
   * The response text for this version.
   *
   * @public
   */
  responseText: string | undefined;

  /**
   * ISO 8601 timestamp of when this edit was made.
   *
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * Summary information about a single query within a compliance inquiry.
 *
 * @public
 */
export interface QuerySummary {
  /**
   * Sequential identifier of the query within the inquiry.
   *
   * @public
   */
  queryIdentifier: number | undefined;

  /**
   * The actual query text.
   *
   * @public
   */
  query: string | undefined;

  /**
   * Generated response to the query.
   *
   * @public
   */
  response?: string | undefined;

  /**
   * Type of review for the response.
   *
   * @public
   */
  reviewType?: ReviewType | undefined;

  /**
   * Supporting citations for the response.
   *
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * Current processing status of the query.
   *
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * Descriptive status message.
   *
   * @public
   */
  statusMessage: QueryStatusMessage | undefined;

  /**
   * Timestamp when the query was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Ordered list of response version history entries, oldest first.
   *
   * @public
   */
  updatedResponseVersions?: ResponseVersion[] | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiryQueriesResponse {
  /**
   * List of compliance query summaries.
   *
   * @public
   */
  queries?: QuerySummary[] | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutComplianceInquiryFeedbackRequest {
  /**
   * The unique identifier for the compliance inquiry.
   *
   * @public
   */
  complianceInquiryId: string | undefined;

  /**
   * The sequential identifier of the query to provide feedback on.
   *
   * @public
   */
  queryIdentifier?: number | undefined;

  /**
   * The rating for the feedback. Valid values are THUMBS_UP and THUMBS_DOWN.
   *
   * @public
   */
  rating: FeedbackRating | undefined;

  /**
   * The response revision ID. Use this value to prevent submitting feedback on a stale response.
   *
   * @public
   */
  responseRevisionId?: number | undefined;

  /**
   * The reason codes that describe why you rated the response. Valid values are OTHER, PARTIAL_RESPONSE, and IRRELEVANT_RESPONSE.
   *
   * @public
   */
  reasonCodes?: FeedbackReasonCode[] | undefined;

  /**
   * An optional comment for the feedback.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutComplianceInquiryFeedbackResponse {
  /**
   * The timestamp when the feedback was submitted.
   *
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListCustomerAgreementsRequest {
  /**
   * Maximum number of resources to return in the paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary for customer-agreement resource.
 *
 * @public
 */
export interface CustomerAgreementSummary {
  /**
   * Name of the customer-agreement resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ARN of the customer-agreement resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Identifier of the customer-agreement resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * ARN of the agreement resource the customer-agreement resource represents.
   *
   * @public
   */
  agreementArn?: string | undefined;

  /**
   * AWS account Id that owns the resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * ARN of the organization that owns the resource.
   *
   * @public
   */
  organizationArn?: string | undefined;

  /**
   * Timestamp indicating when the agreement became effective.
   *
   * @public
   */
  effectiveStart?: Date | undefined;

  /**
   * Timestamp indicating when the agreement was terminated.
   *
   * @public
   */
  effectiveEnd?: Date | undefined;

  /**
   * State of the resource.
   *
   * @public
   */
  state?: CustomerAgreementState | undefined;

  /**
   * Description of the resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Terms required to accept the agreement resource.
   *
   * @public
   */
  acceptanceTerms?: string[] | undefined;

  /**
   * Terms required to terminate the customer-agreement resource.
   *
   * @public
   */
  terminateTerms?: string[] | undefined;

  /**
   * Type of the customer-agreement resource.
   *
   * @public
   */
  type?: AgreementType | undefined;
}

/**
 * @public
 */
export interface ListCustomerAgreementsResponse {
  /**
   * List of customer-agreement resources.
   *
   * @public
   */
  customerAgreements: CustomerAgreementSummary[] | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetReportRequest {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Version for the report resource.
   *
   * @public
   */
  reportVersion?: number | undefined;

  /**
   * Unique download token provided by GetTermForReport API.
   *
   * @public
   */
  termToken: string | undefined;
}

/**
 * @public
 */
export interface GetReportResponse {
  /**
   * Presigned S3 url to access the report content.
   *
   * @public
   */
  documentPresignedUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataRequest {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Version for the report resource.
   *
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * Full detail for report resource metadata.
 *
 * @public
 */
export interface ReportDetail {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Name for the report resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description for the report resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Timestamp indicating the report resource effective start.
   *
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * Timestamp indicating the report resource effective end.
   *
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * Timestamp indicating when the report resource was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp indicating when the report resource was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * Timestamp indicating when the report resource was deleted.
   *
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * Current state of the report resource
   *
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * ARN for the report resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Series for the report resource.
   *
   * @public
   */
  series?: string | undefined;

  /**
   * Category for the report resource.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * Associated company name for the report resource.
   *
   * @public
   */
  companyName?: string | undefined;

  /**
   * Associated product name for the report resource.
   *
   * @public
   */
  productName?: string | undefined;

  /**
   * Unique resource ARN for term resource.
   *
   * @public
   */
  termArn?: string | undefined;

  /**
   * Version for the report resource.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * Acceptance type for report.
   *
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;

  /**
   * Sequence number to enforce optimistic locking.
   *
   * @public
   */
  sequenceNumber?: number | undefined;

  /**
   * The current state of the document upload.
   *
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * The message associated with the current upload state.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataResponse {
  /**
   * Report resource detail.
   *
   * @public
   */
  reportDetails?: ReportDetail | undefined;
}

/**
 * @public
 */
export interface GetTermForReportRequest {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Version for the report resource.
   *
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetTermForReportResponse {
  /**
   * Presigned S3 url to access the term content.
   *
   * @public
   */
  documentPresignedUrl?: string | undefined;

  /**
   * Unique token representing this request event.
   *
   * @public
   */
  termToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportsRequest {
  /**
   * Maximum number of resources to return in the paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary for report resource.
 *
 * @public
 */
export interface ReportSummary {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Name for the report resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Current state of the report resource.
   *
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * ARN for the report resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Version for the report resource.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The current state of the document upload.
   *
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * Description for the report resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Timestamp indicating the report resource effective start.
   *
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * Timestamp indicating the report resource effective end.
   *
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * Series for the report resource.
   *
   * @public
   */
  series?: string | undefined;

  /**
   * Category for the report resource.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * Associated company name for the report resource.
   *
   * @public
   */
  companyName?: string | undefined;

  /**
   * Associated product name for the report resource.
   *
   * @public
   */
  productName?: string | undefined;

  /**
   * The message associated with the current upload state.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * Acceptance type for report.
   *
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface ListReportsResponse {
  /**
   * List of report resources.
   *
   * @public
   */
  reports?: ReportSummary[] | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportVersionsRequest {
  /**
   * Unique resource ID for the report resource.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Maximum number of resources to return in the paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportVersionsResponse {
  /**
   * List of report resources.
   *
   * @public
   */
  reports: ReportSummary[] | undefined;

  /**
   * Pagination token to request the next page of resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
