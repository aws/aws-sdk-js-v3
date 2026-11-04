// smithy-typescript generated code
import type { UploadStatus } from "./enums";

/**
 * An attachment to a case communication. The attachment consists of the file name and the content of the file. Each attachment file size should not exceed 5 MB. File types that are supported include the following: pdf, jpeg,.doc, .log, .text
 *
 * @public
 */
export interface Attachment {
  /**
   * The name of the attachment file.
   *
   * @public
   */
  fileName?: string | undefined;

  /**
   * The content of the attachment file.
   *
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface AddAttachmentsToSetRequest {
  /**
   * The ID of the attachment set. If an `attachmentSetId` is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an `attachmentSetId` is specified, the attachments are added to the specified set, if it exists.
   *
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * One or more attachments to add to the set. You can add up to three attachments per set. The size limit is 5 MB per attachment.
   *
   * In the `Attachment` object, use the `data` parameter to specify the contents of the attachment file. In the previous request syntax, the value for `data` appear as `blob`, which is represented as a base64-encoded string. The value for `fileName` is the name of the attachment, such as `troubleshoot-screenshot.png`.
   *
   * @public
   */
  attachments: Attachment[] | undefined;

  /**
   * Specifies whether to validate the request without actually adding the attachments. When set to `true`, the request is validated but no attachments are stored, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The ID and expiry time of the attachment set returned by the AddAttachmentsToSet operation.
 *
 * @public
 */
export interface AddAttachmentsToSetResponse {
  /**
   * The ID of the attachment set. If an `attachmentSetId` was not specified, a new attachment set is created, and the ID of the set is returned in the response. If an `attachmentSetId` was specified, the attachments are added to the specified set, if it exists.
   *
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * The time and date when the attachment set expires.
   *
   * @public
   */
  expiryTime?: string | undefined;
}

/**
 * @public
 */
export interface AddCommunicationToCaseRequest {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId?: string | undefined;

  /**
   * The body of an email communication to add to the support case.
   *
   * @public
   */
  communicationBody: string | undefined;

  /**
   * The email addresses in the CC line of an email to be added to the support case.
   *
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * The ID of a set of one or more attachments for the communication to add to the case. Create the set by calling AddAttachmentsToSet. Each attachment in the set must be 5 MB or smaller. To attach files larger than 5 MB, use `uploadIds`.
   *
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * A list of upload IDs that identify attachments to add to the case. Each `uploadId` is returned by the GetAttachmentUploadLinks operation. The upload must reach the `attachment-ready` state by calling CompleteAttachmentUpload before it can be passed here. Use `uploadIds` to attach files of any supported size, including files larger than 5 MB.
   *
   * @public
   */
  uploadIds?: string[] | undefined;

  /**
   * Specifies whether to validate the request without actually adding the communication to the case. When set to `true`, the request is validated but the communication isn't added, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The result of the AddCommunicationToCase operation.
 *
 * @public
 */
export interface AddCommunicationToCaseResponse {
  /**
   * True if AddCommunicationToCase succeeds. Otherwise, returns an error.
   *
   * @public
   */
  result?: boolean | undefined;
}

/**
 * The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the DescribeAttachment operation.
 *
 * @public
 */
export interface AttachmentDetails {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The file name of the attachment.
   *
   * @public
   */
  fileName?: string | undefined;
}

/**
 * Identifies a single uploaded part of a multipart attachment upload. Pass a list of `CompletedUpload` objects to CompleteAttachmentUpload to finalize the upload.
 *
 * @public
 */
export interface CompletedUpload {
  /**
   * The index of the uploaded part. This is the same `partIndex` value returned for the corresponding entry in the `uploadUrls` field of the `GetAttachmentUploadLinks` response.
   *
   * @public
   */
  partIndex: number | undefined;

  /**
   * The ETag returned in the response headers when the part was uploaded to Amazon S3. The `ETag` value identifies the part contents.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadRequest {
  /**
   * The identifier associated with the upload to complete.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The list of parts being reported as completed in this call. Each entry must contain the `partIndex` of an uploaded part and the `ETag` returned by Amazon S3 when that part was uploaded.
   *
   * @public
   */
  completedUploads: CompletedUpload[] | undefined;

  /**
   * Specifies whether to validate the request without actually completing the upload. When set to `true`, the request is validated but the upload isn't finalized, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadResponse {
  /**
   * The status of the multipart upload after the operation finalizes the attachment. Valid values: `attachment-ready`, `attachment-not-ready`, and `failed`.
   *
   * @public
   */
  uploadStatus: UploadStatus | undefined;
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * The title of the support case. The title appears in the **Subject** field on the Amazon Web Services Support Center [Create Case](https://console.aws.amazon.com/support/home#/case/create) page.
   *
   * @public
   */
  subject: string | undefined;

  /**
   * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible `serviceCode` values.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the DescribeSeverityLevels operation to get the possible values for `severityCode`.
   *
   * For more information, see SeverityLevel and [Choosing a Severity](https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity) in the *Amazon Web Services Support User Guide*.
   *
   * > **Note:** The availability of severity levels depends on the support plan for the Amazon Web Services account.
   *
   * @public
   */
  severityCode?: string | undefined;

  /**
   * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
   *
   * @public
   */
  categoryCode?: string | undefined;

  /**
   * The communication body text that describes the issue. This text appears in the **Description** field on the Amazon Web Services Support Center [Create Case](https://console.aws.amazon.com/support/home#/case/create) page.
   *
   * @public
   */
  communicationBody: string | undefined;

  /**
   * A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the [Amazon Web Services SDKs](http://aws.amazon.com/tools/).
   *
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The type of issue for the case. You can specify `customer-service` or `technical`. If you don't specify a value, the default is `technical`.
   *
   * @public
   */
  issueType?: string | undefined;

  /**
   * The ID of a set of one or more attachments for the case. Create the set by using the AddAttachmentsToSet operation. Each attachment in the set must be 5 MB or smaller. To attach files larger than 5 MB, use `uploadIds`.
   *
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * A list of upload IDs that identify attachments to add to the case. Each `uploadId` is returned by the GetAttachmentUploadLinks operation. The upload must reach the `attachment-ready` state by calling CompleteAttachmentUpload before it can be passed here. Use `uploadIds` to attach files of any supported size, including files larger than 5 MB.
   *
   * @public
   */
  uploadIds?: string[] | undefined;

  /**
   * Specifies whether to validate the request without actually creating the case. When set to `true`, the request is validated but no case is created, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The support case ID returned by a successful completion of the CreateCase operation.
 *
 * @public
 */
export interface CreateCaseResponse {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string in the following format: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentRequest {
  /**
   * The ID of the attachment to return. Attachment IDs are returned by the DescribeCommunications operation.
   *
   * If the specified attachment is larger than 5 MB, this operation returns `InvalidParameterValueException`. To download attachments larger than 5 MB, use GetAttachmentDownloadLink.
   *
   * @public
   */
  attachmentId: string | undefined;

  /**
   * Specifies whether to validate the request without actually retrieving the attachment. When set to `true`, the request is validated but no attachment content is returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The content and file name of the attachment returned by the DescribeAttachment operation.
 *
 * @public
 */
export interface DescribeAttachmentResponse {
  /**
   * This object includes the attachment content and file name.
   *
   * In the previous response syntax, the value for the `data` parameter appears as `blob`, which is represented as a base64-encoded string. The value for `fileName` is the name of the attachment, such as `troubleshoot-screenshot.png`.
   *
   * @public
   */
  attachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentUploadStatusRequest {
  /**
   * The unique identifier for the upload. The `uploadId` is returned by GetAttachmentUploadLinks when you initiate the upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning upload status. When set to `true`, the request is validated but no status is returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The progress of a multipart attachment upload, returned by DescribeAttachmentUploadStatus.
 *
 * @public
 */
export interface UploadProgress {
  /**
   * The total number of parts that the file is split into.
   *
   * @public
   */
  totalParts?: number | undefined;

  /**
   * The number of parts that have been successfully uploaded.
   *
   * @public
   */
  completedPartsCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentUploadStatusResponse {
  /**
   * The current status of the multipart upload. Valid values: `attachment-ready`, `attachment-not-ready`, and `failed`.
   *
   * @public
   */
  uploadStatus: UploadStatus | undefined;

  /**
   * The name of the file being uploaded, including the file extension.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The progress of the multipart upload, including the total number of parts and the number of parts that have been successfully uploaded.
   *
   * @public
   */
  uploadProgress?: UploadProgress | undefined;
}

/**
 * @public
 */
export interface DescribeCasesRequest {
  /**
   * A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.
   *
   * @public
   */
  caseIdList?: string[] | undefined;

  /**
   * The ID displayed for a case in the Amazon Web Services Support Center user interface.
   *
   * @public
   */
  displayId?: string | undefined;

  /**
   * The start date for a filtered date search on support case communications. Case communications are available for 24 months after creation.
   *
   * @public
   */
  afterTime?: string | undefined;

  /**
   * The end date for a filtered date search on support case communications. Case communications are available for 24 months after creation.
   *
   * @public
   */
  beforeTime?: string | undefined;

  /**
   * Specifies whether to include resolved support cases in the `DescribeCases` response. By default, resolved cases aren't included.
   *
   * @public
   */
  includeResolvedCases?: boolean | undefined;

  /**
   * A resumption point for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return before paginating.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * Specifies whether to include communications in the `DescribeCases` response. By default, communications are included.
   *
   * @public
   */
  includeCommunications?: boolean | undefined;

  /**
   * Specifies whether to validate the request without actually returning case data. When set to `true`, the request is validated but no cases are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
 *
 * @public
 */
export interface Communication {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId?: string | undefined;

  /**
   * The text of the communication between the customer and Amazon Web Services Support.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * The identity of the account that submitted, or responded to, the support case. Customer entries include the IAM role as well as the email address (for example, "AdminRole (Role) <janedoe@example.com>). Entries from the Amazon Web Services Support team display "Amazon Web Services," and don't show an email address.
   *
   * @public
   */
  submittedBy?: string | undefined;

  /**
   * The time the communication was created.
   *
   * @public
   */
  timeCreated?: string | undefined;

  /**
   * Information about all attachments on the case communication. This includes attachments added through `AddAttachmentsToSet` and attachments uploaded through `GetAttachmentUploadLinks`.
   *
   * Use this field to enumerate every attachment on the communication. To download an attachment listed in this field, use GetAttachmentDownloadLink. `GetAttachmentDownloadLink` returns a presigned URL that works for attachments of any size.
   *
   * @public
   */
  attachments?: AttachmentDetails[] | undefined;

  /**
   * Information about the attachments to the case communication that are 5 MB or smaller. This field doesn't include attachments larger than 5 MB. To enumerate every attachment on the communication, including attachments larger than 5 MB, use the `attachments` field instead.
   *
   * @public
   */
  attachmentSet?: AttachmentDetails[] | undefined;
}

/**
 * The five most recent communications associated with the case.
 *
 * @public
 */
export interface RecentCaseCommunications {
  /**
   * The five most recent communications associated with the case.
   *
   * @public
   */
  communications?: Communication[] | undefined;

  /**
   * A resumption point for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a DescribeCases request. **CaseDetails** contains the following fields:
 *
 * - **caseId** - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*.
 * - **categoryCode** - The category of problem for the support case. Corresponds to the `CategoryCode` values returned by a call to DescribeServices.
 * - **displayId** - The identifier for the case on pages in the Amazon Web Services Support Center.
 * - **language** - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
 * - **nextToken** - A resumption point for pagination.
 * - **recentCommunications** - One or more Communication objects. Fields of these objects are `attachments`, `body`, `caseId`, `submittedBy`, and `timeCreated`.
 * - **serviceCode** - The identifier for the Amazon Web Services service that corresponds to the service code defined in the call to DescribeServices.
 * - **severityCode** - The severity code assigned to the case. Contains one of the values returned by the call to DescribeSeverityLevels. The possible values are: `low`, `normal`, `high`, `urgent`, and `critical`.
 * - **status** - The status of the case in the Amazon Web Services Support Center. Valid values:
 *
 *   - `all-open`
 *   - `customer-action-completed`
 *   - `opened`
 *   - `pending-customer-action`
 *   - `reopened`
 *   - `resolved`
 *   - `unassigned`
 *   - `work-in-progress`
 * - **subject** - The subject line of the case.
 * - **submittedBy** - The email address of the account that submitted the case.
 * - **timeCreated** - The time the case was created, in ISO-8601 format.
 *
 * @public
 */
export interface CaseDetails {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId?: string | undefined;

  /**
   * The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric string.
   *
   * @public
   */
  displayId?: string | undefined;

  /**
   * The subject line for the case in the Amazon Web Services Support Center.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * The status of the case.
   *
   * Valid values:
   *
   * - `all-open`
   * - `customer-action-completed`
   * - `opened`
   * - `pending-customer-action`
   * - `reopened`
   * - `resolved`
   * - `unassigned`
   * - `work-in-progress`
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The code for the Amazon Web Services service. You can get a list of codes and the corresponding service names by calling DescribeServices.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The category of problem for the support case.
   *
   * @public
   */
  categoryCode?: string | undefined;

  /**
   * The code for the severity level returned by the call to DescribeSeverityLevels.
   *
   * @public
   */
  severityCode?: string | undefined;

  /**
   * The email address of the account that submitted the case.
   *
   * @public
   */
  submittedBy?: string | undefined;

  /**
   * The time that the case was created in the Amazon Web Services Support Center.
   *
   * @public
   */
  timeCreated?: string | undefined;

  /**
   * The five most recent communications between you and Amazon Web Services Support Center, including the IDs of any attachments to the communications. Also includes a `nextToken` that you can use to retrieve earlier communications.
   *
   * @public
   */
  recentCommunications?: RecentCaseCommunications | undefined;

  /**
   * The email addresses that receive copies of communication about the case.
   *
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language?: string | undefined;
}

/**
 * Returns an array of [CaseDetails](https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html) objects and a `nextToken` that defines a point for pagination in the result set.
 *
 * @public
 */
export interface DescribeCasesResponse {
  /**
   * The details for the cases that match the request.
   *
   * @public
   */
  cases?: CaseDetails[] | undefined;

  /**
   * A resumption point for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommunicationsRequest {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The end date for a filtered date search on support case communications. Case communications are available for 24 months after creation.
   *
   * @public
   */
  beforeTime?: string | undefined;

  /**
   * The start date for a filtered date search on support case communications. Case communications are available for 24 months after creation.
   *
   * @public
   */
  afterTime?: string | undefined;

  /**
   * A resumption point for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return before paginating.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies whether to validate the request without actually returning communications. When set to `true`, the request is validated but no communications are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The communications returned by the DescribeCommunications operation.
 *
 * @public
 */
export interface DescribeCommunicationsResponse {
  /**
   * The communications for the case.
   *
   * @public
   */
  communications?: Communication[] | undefined;

  /**
   * A resumption point for pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsRequest {
  /**
   * The type of issue for the case. You can specify `customer-service` or `technical`. If you don't specify a value, the default is `technical`.
   *
   * @public
   */
  issueType: string | undefined;

  /**
   * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible `serviceCode` values.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language: string | undefined;

  /**
   * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
   *
   * @public
   */
  categoryCode: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning case option data. When set to `true`, the request is validated but no options are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * Date and time (UTC) format in RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
 *
 * @public
 */
export interface DateInterval {
  /**
   * A JSON object containing start and date time (UTC). Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * End Date Time (UTC). RFC 3339 format : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *
   * @public
   */
  endDateTime?: string | undefined;
}

/**
 * Time range object with `startTime` and `endTime` range in RFC 3339 format. `'HH:mm:ss.SSS'`.
 *
 * @public
 */
export interface SupportedHour {
  /**
   * Start Time. RFC 3339 format `'HH:mm:ss.SSS'`.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * End Time. RFC 3339 format `'HH:mm:ss.SSS'`.
   *
   * @public
   */
  endTime?: string | undefined;
}

/**
 * A JSON-formatted object that contains the CommunicationTypeOptions for creating a case for a certain communication channel. It is contained in the response from a DescribeCreateCaseOptions request. **CommunicationTypeOptions** contains the following fields:
 *
 * - **datesWithoutSupport** - A JSON-formatted list containing date and time ranges for periods without support in UTC time. Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
 * - **supportedHours** - A JSON-formatted list containing time ranges when support are available. Time format is RFC 3339 : 'HH:mm:ss.SSS'.
 * - **type** - A string value indicating the communication type that the aforementioned rules apply to. At the moment the type value can assume one of 3 values at the moment `chat`, `web` and `call`.
 *
 * @public
 */
export interface CommunicationTypeOptions {
  /**
   * A string value indicating the communication type. At the moment the type value can assume one of 3 values at the moment chat, web and call.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * A JSON-formatted list containing time ranges when support is available.
   *
   * @public
   */
  supportedHours?: SupportedHour[] | undefined;

  /**
   * A JSON-formatted list containing date and time ranges for periods without support
   *
   * @public
   */
  datesWithoutSupport?: DateInterval[] | undefined;
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsResponse {
  /**
   * Language availability can be any of the following:
   *
   * - available
   * - best_effort
   * - unavailable
   *
   * @public
   */
  languageAvailability?: string | undefined;

  /**
   * A JSON-formatted array that contains the available communication type options, along with the available support timeframes for the given inputs.
   *
   * @public
   */
  communicationTypes?: CommunicationTypeOptions[] | undefined;
}

/**
 * Information about why a request was throttled.
 *
 * @public
 */
export interface ThrottlingReason {
  /**
   * The reason that the request was throttled.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The resource that caused the request to be throttled.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * A JSON-formatted list of service codes available for Amazon Web Services services.
   *
   * @public
   */
  serviceCodeList?: string[] | undefined;

  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning the list of services. When set to `true`, the request is validated but no services are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the DescribeServices response for each Amazon Web Services service.
 *
 * @public
 */
export interface Category {
  /**
   * The category code for the support case.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The category name for the support case.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about an Amazon Web Services service returned by the DescribeServices operation.
 *
 * @public
 */
export interface Service {
  /**
   * The code for an Amazon Web Services service returned by the DescribeServices response. The `name` element contains the corresponding friendly name.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The friendly name for an Amazon Web Services service. The `code` element contains the corresponding code.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to Amazon Web Services Support when you call CreateCase.
   *
   * @public
   */
  categories?: Category[] | undefined;
}

/**
 * The list of Amazon Web Services services returned by the DescribeServices operation.
 *
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * A JSON-formatted list of Amazon Web Services services.
   *
   * @public
   */
  services?: Service[] | undefined;
}

/**
 * @public
 */
export interface DescribeSeverityLevelsRequest {
  /**
   * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the `language` parameter if you want support in that language.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning severity levels. When set to `true`, the request is validated but no severity levels are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see [Choosing a severity](https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity) in the *Amazon Web Services Support User Guide*.
 *
 * @public
 */
export interface SeverityLevel {
  /**
   * The code for case severity level.
   *
   * Valid values: `low` | `normal` | `high` | `urgent` | `critical`
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The name of the severity level that corresponds to the severity level code.
   *
   * > **Note:**
   * >
   * > The values returned by the API are different from the values that appear in the Amazon Web Services Support Center. For example, the API uses the code `low`, but the name appears as General guidance in Support Center.
   * >
   * > The following are the API code names and how they appear in the console:
   * >
   * > - `low` - General guidance
   * > - `normal` - System impaired
   * > - `high` - Production system impaired
   * > - `urgent` - Production system down
   * > - `critical` - Business-critical system down
   *
   * For more information, see [Choosing a severity](https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity) in the *Amazon Web Services Support User Guide*.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The list of severity levels returned by the DescribeSeverityLevels operation.
 *
 * @public
 */
export interface DescribeSeverityLevelsResponse {
  /**
   * The available severity levels for the support case. Available severity levels are defined by your service level agreement with Amazon Web Services.
   *
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesRequest {
  /**
   * The type of issue for the case. You can specify `customer-service` or `technical`.
   *
   * @public
   */
  issueType: string | undefined;

  /**
   * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible `serviceCode` values.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
   *
   * @public
   */
  categoryCode: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning supported languages. When set to `true`, the request is validated but no languages are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A JSON-formatted object that contains the available ISO 639-1 language `code`, `language` name and langauge `display` value. The language code is what should be used in the CreateCase call.
 *
 * @public
 */
export interface SupportedLanguage {
  /**
   * 2 digit ISO 639-1 code. e.g. `en`
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Full language description e.g. `ENGLISH`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * Language display value e.g. `ENGLISH`
   *
   * @public
   */
  display?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesResponse {
  /**
   * A JSON-formatted array that contains the available ISO 639-1 language codes.
   *
   * @public
   */
  supportedLanguages?: SupportedLanguage[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * The IDs of the Trusted Advisor checks to get the status.
   *
   * > **Note:** If you specify the check ID of a check that is automatically refreshed, you might see an `InvalidParameterValue` error.
   *
   * @public
   */
  checkIds: (string | null)[] | undefined;
}

/**
 * The refresh status of a Trusted Advisor check.
 *
 * @public
 */
export interface TrustedAdvisorCheckRefreshStatus {
  /**
   * The unique identifier for the Trusted Advisor check.
   *
   * @public
   */
  checkId: string | undefined;

  /**
   * The status of the Trusted Advisor check for which a refresh has been requested:
   *
   * - `none` - The check is not refreshed or the non-success status exceeds the timeout
   * - `enqueued` - The check refresh requests has entered the refresh queue
   * - `processing` - The check refresh request is picked up by the rule processing engine
   * - `success` - The check is successfully refreshed
   * - `abandoned` - The check refresh has failed
   *
   * @public
   */
  status: string | undefined;

  /**
   * The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.
   *
   * @public
   */
  millisUntilNextRefreshable: number | undefined;
}

/**
 * The statuses of the Trusted Advisor checks returned by the DescribeTrustedAdvisorCheckRefreshStatuses operation.
 *
 * @public
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * The refresh status of the specified Trusted Advisor checks.
   *
   * @public
   */
  statuses: TrustedAdvisorCheckRefreshStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  /**
   * The unique identifier for the Trusted Advisor check.
   *
   * @public
   */
  checkId: string | undefined;

  /**
   * The ISO 639-1 code for the language that you want your check results to appear in.
   *
   * The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:
   *
   * - Chinese, Simplified - `zh`
   * - Chinese, Traditional - `zh_TW`
   * - English - `en`
   * - French - `fr`
   * - German - `de`
   * - Indonesian - `id`
   * - Italian - `it`
   * - Japanese - `ja`
   * - Korean - `ko`
   * - Portuguese, Brazilian - `pt_BR`
   * - Spanish - `es`
   *
   * @public
   */
  language?: string | undefined;
}

/**
 * The estimated cost savings that might be realized if the recommended operations are taken.
 *
 * @public
 */
export interface TrustedAdvisorCostOptimizingSummary {
  /**
   * The estimated monthly savings that might be realized if the recommended operations are taken.
   *
   * @public
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * The estimated percentage of savings that might be realized if the recommended operations are taken.
   *
   * @public
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * The container for summary information that relates to the category of the Trusted Advisor check.
 *
 * @public
 */
export interface TrustedAdvisorCategorySpecificSummary {
  /**
   * The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.
   *
   * @public
   */
  costOptimizing?: TrustedAdvisorCostOptimizingSummary | undefined;
}

/**
 * Contains information about a resource identified by a Trusted Advisor check.
 *
 * @public
 */
export interface TrustedAdvisorResourceDetail {
  /**
   * The status code for the resource identified in the Trusted Advisor check.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The Amazon Web Services Region in which the identified resource is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The unique identifier for the identified resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as suppressed by the user.
   *
   * @public
   */
  isSuppressed?: boolean | undefined;

  /**
   * Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the TrustedAdvisorCheckDescription object returned by the call to DescribeTrustedAdvisorChecks. **Metadata** contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data.
   *
   * @public
   */
  metadata: (string | null)[] | undefined;
}

/**
 * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor DescribeTrustedAdvisorCheckSummaries.
 *
 * @public
 */
export interface TrustedAdvisorResourcesSummary {
  /**
   * The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.
   *
   * @public
   */
  resourcesProcessed: number | undefined;

  /**
   * The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.
   *
   * @public
   */
  resourcesFlagged: number | undefined;

  /**
   * The number of Amazon Web Services resources ignored by Trusted Advisor because information was unavailable.
   *
   * @public
   */
  resourcesIgnored: number | undefined;

  /**
   * The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as suppressed by the user.
   *
   * @public
   */
  resourcesSuppressed: number | undefined;
}

/**
 * The results of a Trusted Advisor check returned by DescribeTrustedAdvisorCheckResult.
 *
 * @public
 */
export interface TrustedAdvisorCheckResult {
  /**
   * The unique identifier for the Trusted Advisor check.
   *
   * @public
   */
  checkId: string | undefined;

  /**
   * The time of the last refresh of the check.
   *
   * @public
   */
  timestamp: string | undefined;

  /**
   * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
   *
   * @public
   */
  status: string | undefined;

  /**
   * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor DescribeTrustedAdvisorCheckSummaries.
   *
   * @public
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
   *
   * @public
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * The details about each resource listed in the check result.
   *
   * @public
   */
  flaggedResources: TrustedAdvisorResourceDetail[] | undefined;
}

/**
 * The result of the Trusted Advisor check returned by the DescribeTrustedAdvisorCheckResult operation.
 *
 * @public
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  /**
   * The detailed results of the Trusted Advisor check.
   *
   * @public
   */
  result?: TrustedAdvisorCheckResult | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorChecksRequest {
  /**
   * The ISO 639-1 code for the language that you want your checks to appear in.
   *
   * The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:
   *
   * - Chinese, Simplified - `zh`
   * - Chinese, Traditional - `zh_TW`
   * - English - `en`
   * - French - `fr`
   * - German - `de`
   * - Indonesian - `id`
   * - Italian - `it`
   * - Japanese - `ja`
   * - Korean - `ko`
   * - Portuguese, Brazilian - `pt_BR`
   * - Spanish - `es`
   *
   * @public
   */
  language: string | undefined;
}

/**
 * The description and metadata for a Trusted Advisor check.
 *
 * @public
 */
export interface TrustedAdvisorCheckDescription {
  /**
   * The unique identifier for the Trusted Advisor check.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The display name for the Trusted Advisor check.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Trusted Advisor check, which includes the alert criteria and recommended operations (contains HTML markup).
   *
   * @public
   */
  description: string | undefined;

  /**
   * The category of the Trusted Advisor check.
   *
   * @public
   */
  category: string | undefined;

  /**
   * The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the **Metadata** element of the TrustedAdvisorResourceDetail for the check. **Metadata** contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data.
   *
   * @public
   */
  metadata: (string | null)[] | undefined;
}

/**
 * Information about the Trusted Advisor checks returned by the DescribeTrustedAdvisorChecks operation.
 *
 * @public
 */
export interface DescribeTrustedAdvisorChecksResponse {
  /**
   * Information about all available Trusted Advisor checks.
   *
   * @public
   */
  checks: TrustedAdvisorCheckDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * The IDs of the Trusted Advisor checks.
   *
   * @public
   */
  checkIds: (string | null)[] | undefined;
}

/**
 * A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
 *
 * @public
 */
export interface TrustedAdvisorCheckSummary {
  /**
   * The unique identifier for the Trusted Advisor check.
   *
   * @public
   */
  checkId: string | undefined;

  /**
   * The time of the last refresh of the check.
   *
   * @public
   */
  timestamp: string | undefined;

  /**
   * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
   *
   * @public
   */
  status: string | undefined;

  /**
   * Specifies whether the Trusted Advisor check has flagged resources.
   *
   * @public
   */
  hasFlaggedResources?: boolean | undefined;

  /**
   * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor DescribeTrustedAdvisorCheckSummaries.
   *
   * @public
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
   *
   * @public
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;
}

/**
 * The summaries of the Trusted Advisor checks returned by the DescribeTrustedAdvisorCheckSummaries operation.
 *
 * @public
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * The summary information for the requested Trusted Advisor checks.
   *
   * @public
   */
  summaries: TrustedAdvisorCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetAttachmentDownloadLinkRequest {
  /**
   * The unique identifier of the attachment for which to retrieve a download link. Attachment IDs are returned in the `AttachmentDetails` objects in the `attachments` field of a Communication returned by DescribeCommunications or DescribeCases.
   *
   * @public
   */
  attachmentId: string | undefined;

  /**
   * Specifies whether to validate the request without actually returning a download link. When set to `true`, the request is validated but no URL is returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A presigned URL for downloading an attachment, along with the date and time the URL expires. Returned by GetAttachmentDownloadLink.
 *
 * @public
 */
export interface DownloadUrl {
  /**
   * The presigned HTTPS URL that you can use to download the attachment. Download URLs are served from `downloadv1.attachments.support.\{region\}.amazonaws.com`. The `downloadv1` prefix is subject to change.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The date and time, in ISO-8601 format, when the presigned URL expires. Download the attachment before this time.
   *
   * @public
   */
  expiryDate: string | undefined;
}

/**
 * @public
 */
export interface GetAttachmentDownloadLinkResponse {
  /**
   * The name of the attachment file, including the file extension.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The presigned download URL and the date and time the URL expires.
   *
   * @public
   */
  downloadUrl: DownloadUrl | undefined;
}

/**
 * The range of part indexes for which to return presigned upload URLs from GetAttachmentUploadLinks.
 *
 * @public
 */
export interface UploadRange {
  /**
   * The starting part index of the range, inclusive. Part indexes start at 1.
   *
   * @public
   */
  startIndex: number | undefined;

  /**
   * The ending part index of the range, exclusive. The range is half-open: `startIndex` is inclusive and `endIndex` is exclusive. For example, a range with `startIndex` of 1 and `endIndex` of 4 requests URLs for parts 1, 2, and 3. The range size (`endIndex` - `startIndex`) must not exceed 10. If you omit `endIndex`, the service defaults to `startIndex` + 10, capped by the total number of parts.
   *
   * @public
   */
  endIndex?: number | undefined;
}

/**
 * @public
 */
export interface GetAttachmentUploadLinksRequest {
  /**
   * The name of the file to upload, including the file extension. This value is required when you initiate a new upload.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The total size of the file in bytes. The service uses this value to calculate the total number of parts and the size of each part. Required when you initiate a new upload (when `uploadId` isn't provided). Valid range: 1 to 157,286,400 bytes (approximately 150 MB).
   *
   * @public
   */
  fileSizeBytes?: number | undefined;

  /**
   * The unique identifier of an in-progress multipart upload, returned by a previous call to `GetAttachmentUploadLinks`. Specify `uploadId` to retrieve additional presigned upload URLs for an upload that has already been initiated. Required when `fileSizeBytes` isn't provided. Length: 1 to 2,048 characters.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The range of part indexes for which to return presigned upload URLs. Use this parameter to page through the upload URLs for a large file across multiple calls. If you omit this parameter, the service determines the range to return.
   *
   * @public
   */
  uploadRange?: UploadRange | undefined;

  /**
   * Specifies whether to validate the request without actually generating upload URLs. When set to `true`, the request is validated but no URLs are returned, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A presigned URL for uploading a single part of a multipart attachment upload, along with the part index and the date and time the URL expires. Returned by GetAttachmentUploadLinks.
 *
 * @public
 */
export interface UploadUrl {
  /**
   * The presigned HTTPS URL that you use to upload a single part with HTTP `PUT`. Upload URLs are served from `uploadv1.attachments.support.\{region\}.amazonaws.com`. The `uploadv1` prefix is subject to change.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The index of the part that this URL uploads.
   *
   * @public
   */
  partIndex: number | undefined;

  /**
   * The date and time, in ISO-8601 format, when the presigned URL expires. Upload the part before this time.
   *
   * @public
   */
  expiryDate: string | undefined;
}

/**
 * @public
 */
export interface GetAttachmentUploadLinksResponse {
  /**
   * The unique identifier for the multipart upload. Use this value in subsequent calls to `GetAttachmentUploadLinks`, DescribeAttachmentUploadStatus, and CompleteAttachmentUpload, and to attach the upload to a case through the `uploadIds` parameter on CreateCase or AddCommunicationToCase.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The size, in bytes, of each part. Split the file into parts of this size before you upload them to the presigned URLs. For an upload with `n` total parts, parts 1 through `n` - 1 are exactly this size; the last part may be smaller. Maximum: 104,857,600 bytes (approximately 100 MB).
   *
   * @public
   */
  partSizeBytes: number | undefined;

  /**
   * The total number of parts that the file is split into. Upload one part to each presigned URL.
   *
   * @public
   */
  totalParts: number | undefined;

  /**
   * The next part index to request presigned URLs for. If all upload URLs for the file have been returned, this field is `null`. Use this value as the `startIndex` in `uploadRange` on a subsequent call to `GetAttachmentUploadLinks` to retrieve the next batch of upload URLs.
   *
   * @public
   */
  nextIndex?: number | undefined;

  /**
   * The list of presigned upload URLs for the requested range of parts. The list contains at most 10 URLs per call. Upload each part to its corresponding URL by using HTTP `PUT` before the URL expires.
   *
   * @public
   */
  uploadUrls: UploadUrl[] | undefined;
}

/**
 * @public
 */
export interface RefreshTrustedAdvisorCheckRequest {
  /**
   * The unique identifier for the Trusted Advisor check to refresh.
   *
   * > **Note:** Specifying the check ID of a check that is automatically refreshed causes an `InvalidParameterValue` error.
   *
   * @public
   */
  checkId: string | undefined;
}

/**
 * The current refresh status of a Trusted Advisor check.
 *
 * @public
 */
export interface RefreshTrustedAdvisorCheckResponse {
  /**
   * The current refresh status for a check, including the amount of time until the check is eligible for refresh.
   *
   * @public
   */
  status: TrustedAdvisorCheckRefreshStatus | undefined;
}

/**
 * @public
 */
export interface ResolveCaseRequest {
  /**
   * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-*12345678910-exen-2025-c4c1d2bf33c5cf47*
   *
   * @public
   */
  caseId?: string | undefined;

  /**
   * Specifies whether to validate the request without actually resolving the case. When set to `true`, the request is validated but the case isn't resolved, and the operation returns a `DryRunOperationException`. When omitted or set to `false`, the request runs normally.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * The status of the case returned by the ResolveCase operation.
 *
 * @public
 */
export interface ResolveCaseResponse {
  /**
   * The status of the case when the ResolveCase request was sent.
   *
   * @public
   */
  initialCaseStatus?: string | undefined;

  /**
   * The status of the case after the ResolveCase request was processed.
   *
   * @public
   */
  finalCaseStatus?: string | undefined;
}
