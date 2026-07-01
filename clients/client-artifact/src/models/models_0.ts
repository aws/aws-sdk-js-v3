// smithy-typescript generated code
import type {
  AcceptanceType,
  AgreementType,
  CustomerAgreementState,
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
 * <p>Account settings for the customer.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>Notification subscription status of the customer.</p>
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
   * <p>Account settings for the customer.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * <p>Validation exception message and name.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingsRequest {
  /**
   * <p>Desired notification subscription status.</p>
   * @public
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingsResponse {
  /**
   * <p>Account settings for the customer.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * <p>File content structure for compliance inquiry uploads.</p>
 * @public
 */
export interface InquiryFileContent {
  /**
   * <p>List of file sections/sheets to process.</p>
   * @public
   */
  fileSections?: string[] | undefined;

  /**
   * <p>Binary content of the uploaded file.</p>
   * @public
   */
  content: Uint8Array | undefined;
}

/**
 * <p>Content for creating a compliance inquiry - either a single query or file content.</p>
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
   * <p>Single text query for AI-generated answer.</p>
   * @public
   */
  export interface QueryMember {
    query: string;
    fileContent?: never;
    $unknown?: never;
  }

  /**
   * <p>File content with multiple questions.</p>
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
   * <p>Title of the inquiry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Content for creating a compliance inquiry - either a single query or file content.</p>
   * @public
   */
  inquiryContent: InquiryContent | undefined;

  /**
   * <p>Idempotency token for the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Support mode for inquiry processing. Only supported for file upload mode. Defaults to AI_ONLY if not specified.</p>
   * @public
   */
  supportMode?: InquirySupportMode | undefined;

  /**
   * <p>Tags to associate with the compliance inquiry resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Summary information about a compliance inquiry.</p>
 * @public
 */
export interface InquirySummary {
  /**
   * <p>ARN of the compliance inquiry resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Title of the inquiry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unique resource ID for the compliance inquiry.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Current processing status of the inquiry.</p>
   * @public
   */
  status: InquiryStatus | undefined;

  /**
   * <p>Status message providing additional context.</p>
   * @public
   */
  statusMessage: InquiryStatusMessage | undefined;

  /**
   * <p>Type of inquiry content (text or file).</p>
   * @public
   */
  inputSource: InputSource | undefined;

  /**
   * <p>Timestamp indicating when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateComplianceInquiryResponse {
  /**
   * <p>Summary information about the created compliance inquiry.</p>
   * @public
   */
  complianceInquirySummary?: InquirySummary | undefined;

  /**
   * <p>Tags associated with the compliance inquiry resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ExportComplianceInquiryRequest {
  /**
   * <p>Unique resource ID for the compliance inquiry.</p>
   * @public
   */
  complianceInquiryId: string | undefined;

  /**
   * <p>List of query identifiers to include in the export.</p>
   * @public
   */
  queryIdentifiers?: number[] | undefined;

  /**
   * <p>When true, include citations in the exported document.</p>
   * @public
   */
  includeCitations?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportComplianceInquiryResponse {
  /**
   * <p>Presigned S3 URL to access the exported compliance inquiry report.</p>
   * @public
   */
  documentPresignedUrl?: string | undefined;

  /**
   * <p>Tags associated with the compliance inquiry resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetComplianceInquiryMetadataRequest {
  /**
   * <p>Unique resource ID for the compliance inquiry.</p>
   * @public
   */
  complianceInquiryId: string | undefined;
}

/**
 * <p>Detailed information about a compliance inquiry.</p>
 * @public
 */
export interface InquiryDetail {
  /**
   * <p>ARN of the compliance inquiry resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Title of the inquiry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Unique resource ID for the compliance inquiry.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Current processing status of the inquiry.</p>
   * @public
   */
  status: InquiryStatus | undefined;

  /**
   * <p>Status message providing additional context.</p>
   * @public
   */
  statusMessage: InquiryStatusMessage | undefined;

  /**
   * <p>Type of inquiry content (text or file).</p>
   * @public
   */
  inputSource: InputSource | undefined;

  /**
   * <p>Timestamp indicating when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp indicating when the resource was last modified.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Support mode for this inquiry. AI_ONLY provides AI-generated responses. FULL_SUPPORT includes human expert review.</p>
   * @public
   */
  supportMode?: InquirySupportMode | undefined;
}

/**
 * @public
 */
export interface GetComplianceInquiryMetadataResponse {
  /**
   * <p>Detailed information about the compliance inquiry.</p>
   * @public
   */
  complianceInquiryDetail?: InquiryDetail | undefined;

  /**
   * <p>Tags associated with the compliance inquiry resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiriesRequest {
  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiriesResponse {
  /**
   * <p>List of compliance inquiry resources.</p>
   * @public
   */
  complianceInquiries?: InquirySummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiryQueriesRequest {
  /**
   * <p>Unique resource ID for the compliance inquiry.</p>
   * @public
   */
  complianceInquiryId: string | undefined;

  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Citation information for AI-generated responses.</p>
 * @public
 */
export interface Citation {
  /**
   * <p>Label identifying the compliance source.</p>
   * @public
   */
  sourceLabel?: string | undefined;

  /**
   * <p>Content text from the compliance source.</p>
   * @public
   */
  sourceContent?: string | undefined;

  /**
   * <p>Link to the compliance source.</p>
   * @public
   */
  sourceLink?: string | undefined;
}

/**
 * <p>A versioned snapshot of a response edit.</p>
 * @public
 */
export interface ResponseVersion {
  /**
   * <p>The response text for this version.</p>
   * @public
   */
  responseText: string | undefined;

  /**
   * <p>ISO 8601 timestamp of when this edit was made.</p>
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * <p>Summary information about a single query within a compliance inquiry.</p>
 * @public
 */
export interface QuerySummary {
  /**
   * <p>Sequential identifier of the query within the inquiry.</p>
   * @public
   */
  queryIdentifier: number | undefined;

  /**
   * <p>The actual query text.</p>
   * @public
   */
  query: string | undefined;

  /**
   * <p>Generated response to the query.</p>
   * @public
   */
  response?: string | undefined;

  /**
   * <p>Type of review for the response.</p>
   * @public
   */
  reviewType?: ReviewType | undefined;

  /**
   * <p>Supporting citations for the response.</p>
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * <p>Current processing status of the query.</p>
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * <p>Descriptive status message.</p>
   * @public
   */
  statusMessage: QueryStatusMessage | undefined;

  /**
   * <p>Timestamp when the query was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Ordered list of response version history entries, oldest first.</p>
   * @public
   */
  updatedResponseVersions?: ResponseVersion[] | undefined;
}

/**
 * @public
 */
export interface ListComplianceInquiryQueriesResponse {
  /**
   * <p>List of compliance query summaries.</p>
   * @public
   */
  queries?: QuerySummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomerAgreementsRequest {
  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary for customer-agreement resource.</p>
 * @public
 */
export interface CustomerAgreementSummary {
  /**
   * <p>Name of the customer-agreement resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>ARN of the customer-agreement resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Identifier of the customer-agreement resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>ARN of the agreement resource the customer-agreement resource represents.</p>
   * @public
   */
  agreementArn?: string | undefined;

  /**
   * <p>AWS account Id that owns the resource.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>ARN of the organization that owns the resource.</p>
   * @public
   */
  organizationArn?: string | undefined;

  /**
   * <p>Timestamp indicating when the agreement became effective.</p>
   * @public
   */
  effectiveStart?: Date | undefined;

  /**
   * <p>Timestamp indicating when the agreement was terminated.</p>
   * @public
   */
  effectiveEnd?: Date | undefined;

  /**
   * <p>State of the resource.</p>
   * @public
   */
  state?: CustomerAgreementState | undefined;

  /**
   * <p>Description of the resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Terms required to accept the agreement resource.</p>
   * @public
   */
  acceptanceTerms?: string[] | undefined;

  /**
   * <p>Terms required to terminate the customer-agreement resource.</p>
   * @public
   */
  terminateTerms?: string[] | undefined;

  /**
   * <p>Type of the customer-agreement resource.</p>
   * @public
   */
  type?: AgreementType | undefined;
}

/**
 * @public
 */
export interface ListCustomerAgreementsResponse {
  /**
   * <p>List of customer-agreement resources.</p>
   * @public
   */
  customerAgreements: CustomerAgreementSummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetReportRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;

  /**
   * <p>Unique download token provided by GetTermForReport API.</p>
   * @public
   */
  termToken: string | undefined;
}

/**
 * @public
 */
export interface GetReportResponse {
  /**
   * <p>Presigned S3 url to access the report content.</p>
   * @public
   */
  documentPresignedUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * <p>Full detail for report resource metadata.</p>
 * @public
 */
export interface ReportDetail {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Name for the report resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Description for the report resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp indicating the report resource effective start.</p>
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * <p>Timestamp indicating the report resource effective end.</p>
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was deleted.</p>
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * <p>Current state of the report resource</p>
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * <p>ARN for the report resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Series for the report resource.</p>
   * @public
   */
  series?: string | undefined;

  /**
   * <p>Category for the report resource.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>Associated company name for the report resource.</p>
   * @public
   */
  companyName?: string | undefined;

  /**
   * <p>Associated product name for the report resource.</p>
   * @public
   */
  productName?: string | undefined;

  /**
   * <p>Unique resource ARN for term resource.</p>
   * @public
   */
  termArn?: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>Acceptance type for report.</p>
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;

  /**
   * <p>Sequence number to enforce optimistic locking.</p>
   * @public
   */
  sequenceNumber?: number | undefined;

  /**
   * <p>The current state of the document upload.</p>
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * <p>The message associated with the current upload state.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataResponse {
  /**
   * <p>Report resource detail.</p>
   * @public
   */
  reportDetails?: ReportDetail | undefined;
}

/**
 * @public
 */
export interface GetTermForReportRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetTermForReportResponse {
  /**
   * <p>Presigned S3 url to access the term content.</p>
   * @public
   */
  documentPresignedUrl?: string | undefined;

  /**
   * <p>Unique token representing this request event.</p>
   * @public
   */
  termToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportsRequest {
  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary for report resource.</p>
 * @public
 */
export interface ReportSummary {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Name for the report resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Current state of the report resource.</p>
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * <p>ARN for the report resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The current state of the document upload.</p>
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * <p>Description for the report resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp indicating the report resource effective start.</p>
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * <p>Timestamp indicating the report resource effective end.</p>
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * <p>Series for the report resource.</p>
   * @public
   */
  series?: string | undefined;

  /**
   * <p>Category for the report resource.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>Associated company name for the report resource.</p>
   * @public
   */
  companyName?: string | undefined;

  /**
   * <p>Associated product name for the report resource.</p>
   * @public
   */
  productName?: string | undefined;

  /**
   * <p>The message associated with the current upload state.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>Acceptance type for report.</p>
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface ListReportsResponse {
  /**
   * <p>List of report resources.</p>
   * @public
   */
  reports?: ReportSummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportVersionsRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportVersionsResponse {
  /**
   * <p>List of report resources.</p>
   * @public
   */
  reports: ReportSummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags to add to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
