// smithy-typescript generated code
import {
  AcceptanceType,
  AgreementType,
  CustomerAgreementState,
  NotificationSubscriptionStatus,
  PublishedState,
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
