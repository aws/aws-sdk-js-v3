// smithy-typescript generated code
import type { UploadStatus } from "./enums";

/**
 * <p>An attachment to a case communication. The attachment consists of the file name and
 *             the content of the file. Each attachment file size should not exceed 5 MB. File types that are supported include the following: pdf, jpeg,.doc, .log, .text </p>
 * @public
 */
export interface Attachment {
  /**
   * <p>The name of the attachment file.</p>
   * @public
   */
  fileName?: string | undefined;

  /**
   * <p>The content of the attachment file.</p>
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface AddAttachmentsToSetRequest {
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> is not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> is specified, the attachments are added to the
   *             specified set, if it exists.</p>
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * <p>One or more attachments to add to the set. You can add up to three attachments per
   *             set. The size limit is 5 MB per attachment.</p>
   *          <p>In the <code>Attachment</code> object, use the <code>data</code> parameter to specify
   *             the contents of the attachment file. In the previous request syntax, the value for
   *                 <code>data</code> appear as <code>blob</code>, which is represented as a
   *             base64-encoded string. The value for <code>fileName</code> is the name of the
   *             attachment, such as <code>troubleshoot-screenshot.png</code>.</p>
   * @public
   */
  attachments: Attachment[] | undefined;

  /**
   * <p>Specifies whether to validate the request without actually adding the attachments. When set
   *          to <code>true</code>, the request is validated but no attachments are stored, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.</p>
 * @public
 */
export interface AddAttachmentsToSetResponse {
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> was not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> was specified, the attachments are added to the
   *             specified set, if it exists.</p>
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * <p>The time and date when the attachment set expires.</p>
   * @public
   */
  expiryTime?: string | undefined;
}

/**
 * @public
 */
export interface AddCommunicationToCaseRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId?: string | undefined;

  /**
   * <p>The body of an email communication to add to the support case.</p>
   * @public
   */
  communicationBody: string | undefined;

  /**
   * <p>The email addresses in the CC line of an email to be added to the support case.</p>
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * <p>The ID of a set of one or more attachments for the communication to add to the case.
   *             Create the set by calling <a>AddAttachmentsToSet</a>. Each attachment in the
   *             set must be 5 MB or smaller. To attach files larger than 5 MB, use <code>uploadIds</code>.</p>
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * <p>A list of upload IDs that identify attachments to add to the case. Each
   *             <code>uploadId</code> is returned by the <a>GetAttachmentUploadLinks</a>
   *          operation. The upload must reach the <code>attachment-ready</code> state by calling <a>CompleteAttachmentUpload</a> before it can be passed here.
   *          Use
   *             <code>uploadIds</code> to attach files of any supported size, including files larger than
   *          5 MB.</p>
   * @public
   */
  uploadIds?: string[] | undefined;

  /**
   * <p>Specifies whether to validate the request without actually adding the communication to the
   *          case. When set to <code>true</code>, the request is validated but the communication isn't
   *          added, and the operation returns a <code>DryRunOperationException</code>. When omitted or set
   *          to <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The result of the <a>AddCommunicationToCase</a> operation.</p>
 * @public
 */
export interface AddCommunicationToCaseResponse {
  /**
   * <p>True if <a>AddCommunicationToCase</a> succeeds. Otherwise, returns an
   *             error.</p>
   * @public
   */
  result?: boolean | undefined;
}

/**
 * <p>The file name and ID of an attachment to a case communication. You can use the ID to
 *             retrieve the attachment with the <a>DescribeAttachment</a> operation.</p>
 * @public
 */
export interface AttachmentDetails {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * <p>The file name of the attachment.</p>
   * @public
   */
  fileName?: string | undefined;
}

/**
 * <p>Identifies a single uploaded part of a multipart attachment upload. Pass a list of
 *             <code>CompletedUpload</code> objects to <a>CompleteAttachmentUpload</a> to
 *          finalize the upload.</p>
 * @public
 */
export interface CompletedUpload {
  /**
   * <p>The index of the uploaded part. This is the same <code>partIndex</code> value returned for the corresponding entry in the <code>uploadUrls</code> field of the <code>GetAttachmentUploadLinks</code> response.</p>
   * @public
   */
  partIndex: number | undefined;

  /**
   * <p>The ETag returned in the response headers when the part was uploaded to Amazon S3. The <code>ETag</code> value identifies the part contents.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadRequest {
  /**
   * <p>The identifier associated with the upload to complete.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The list of parts being reported as completed in this call. Each entry must contain the <code>partIndex</code> of an uploaded part and the <code>ETag</code> returned by Amazon S3 when that part was uploaded.</p>
   * @public
   */
  completedUploads: CompletedUpload[] | undefined;

  /**
   * <p>Specifies whether to validate the request without actually completing the upload. When set
   *          to <code>true</code>, the request is validated but the upload isn't finalized, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadResponse {
  /**
   * <p>The status of the multipart upload after the operation finalizes the
   *          attachment. Valid values: <code>attachment-ready</code>, <code>attachment-not-ready</code>,
   *          and <code>failed</code>.</p>
   * @public
   */
  uploadStatus: UploadStatus | undefined;
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * <p>The title of the support case. The title appears in the <b>Subject</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   * @public
   */
  subject: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>A value that indicates the urgency of the case. This value determines the response
   *             time according to your service level agreement with Amazon Web Services Support. You can use the <a>DescribeSeverityLevels</a> operation to get the possible values for
   *                 <code>severityCode</code>. </p>
   *          <p>For more information, see <a>SeverityLevel</a> and <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a
   *                 Severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   *          <note>
   *             <p>The availability of severity levels depends on the support plan for the
   *                 Amazon Web Services account.</p>
   *          </note>
   * @public
   */
  severityCode?: string | undefined;

  /**
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   * @public
   */
  categoryCode?: string | undefined;

  /**
   * <p>The communication body text that describes the issue. This text appears in the
   *                 <b>Description</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   * @public
   */
  communicationBody: string | undefined;

  /**
   * <p>A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support
   *             identifies the account that creates the case when you specify your Amazon Web Services credentials in
   *             an HTTP POST method or use the <a href="http://aws.amazon.com/tools/">Amazon Web Services SDKs</a>.
   *         </p>
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>. If you don't specify a value, the default is
   *                 <code>technical</code>.</p>
   * @public
   */
  issueType?: string | undefined;

  /**
   * <p>The ID of a set of one or more attachments for the case. Create the set by using the
   *                 <a>AddAttachmentsToSet</a> operation. Each attachment in the set must be 5
   *             MB or smaller. To attach files larger than 5 MB, use <code>uploadIds</code>.</p>
   * @public
   */
  attachmentSetId?: string | undefined;

  /**
   * <p>A list of upload IDs that identify attachments to add to the case. Each
   *             <code>uploadId</code> is returned by the <a>GetAttachmentUploadLinks</a>
   *          operation. The upload must reach the <code>attachment-ready</code> state by calling <a>CompleteAttachmentUpload</a> before it can be passed here.
   *          Use
   *             <code>uploadIds</code> to attach files of any supported size, including files larger than
   *          5 MB.</p>
   * @public
   */
  uploadIds?: string[] | undefined;

  /**
   * <p>Specifies whether to validate the request without actually creating the case. When set to
   *             <code>true</code>, the request is validated but no case is created, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The support case ID returned by a successful completion of the <a>CreateCase</a> operation.</p>
 * @public
 */
export interface CreateCaseResponse {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string in the following format:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentRequest {
  /**
   * <p>The ID of the attachment to return. Attachment IDs are returned by the <a>DescribeCommunications</a> operation.</p>
   *          <p>If the specified attachment is larger than 5 MB, this operation returns
   *                 <code>InvalidParameterValueException</code>. To download attachments larger than 5
   *             MB, use <a>GetAttachmentDownloadLink</a>.</p>
   * @public
   */
  attachmentId: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually retrieving the attachment. When
   *          set to <code>true</code>, the request is validated but no attachment content is returned, and
   *          the operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.</p>
 * @public
 */
export interface DescribeAttachmentResponse {
  /**
   * <p>This object includes the attachment content and file name.</p>
   *          <p>In the previous response syntax, the value for the <code>data</code> parameter appears
   *             as <code>blob</code>, which is represented as a base64-encoded string. The value for
   *                 <code>fileName</code> is the name of the attachment, such as
   *                 <code>troubleshoot-screenshot.png</code>.</p>
   * @public
   */
  attachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentUploadStatusRequest {
  /**
   * <p>The unique identifier for the upload. The <code>uploadId</code> is returned by
   *             <a>GetAttachmentUploadLinks</a> when you initiate the upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning upload status. When
   *          set to <code>true</code>, the request is validated but no status is returned, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The progress of a multipart attachment upload, returned by <a>DescribeAttachmentUploadStatus</a>.</p>
 * @public
 */
export interface UploadProgress {
  /**
   * <p>The total number of parts that the file is split into.</p>
   * @public
   */
  totalParts?: number | undefined;

  /**
   * <p>The number of parts that have been successfully uploaded.</p>
   * @public
   */
  completedPartsCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAttachmentUploadStatusResponse {
  /**
   * <p>The current status of the multipart upload. Valid values: <code>attachment-ready</code>,
   *             <code>attachment-not-ready</code>, and <code>failed</code>.</p>
   * @public
   */
  uploadStatus: UploadStatus | undefined;

  /**
   * <p>The name of the file being uploaded, including the file extension.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The progress of the multipart upload, including the total number of parts and the number
   *          of parts that have been successfully uploaded.</p>
   * @public
   */
  uploadProgress?: UploadProgress | undefined;
}

/**
 * @public
 */
export interface DescribeCasesRequest {
  /**
   * <p>A list of ID numbers of the support cases you want returned. The maximum number of
   *             cases is 100.</p>
   * @public
   */
  caseIdList?: string[] | undefined;

  /**
   * <p>The ID displayed for a case in the Amazon Web Services Support Center user interface.</p>
   * @public
   */
  displayId?: string | undefined;

  /**
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 24 months after creation.</p>
   * @public
   */
  afterTime?: string | undefined;

  /**
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 24 months after creation.</p>
   * @public
   */
  beforeTime?: string | undefined;

  /**
   * <p>Specifies whether to include resolved support cases in the <code>DescribeCases</code>
   *             response. By default, resolved cases aren't included.</p>
   * @public
   */
  includeResolvedCases?: boolean | undefined;

  /**
   * <p>A resumption point for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>Specifies whether to include communications in the <code>DescribeCases</code>
   *             response. By default, communications are included.</p>
   * @public
   */
  includeCommunications?: boolean | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning case data. When set
   *          to <code>true</code>, the request is validated but no cases are returned, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A communication associated with a support case. The communication consists of the case
 *             ID, the message body, attachment information, the submitter of the communication, and
 *             the date and time of the communication.</p>
 * @public
 */
export interface Communication {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId?: string | undefined;

  /**
   * <p>The text of the communication between the customer and Amazon Web Services Support.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>The identity of the account that submitted, or responded to, the support case.
   *             Customer entries include the IAM role as well as the email address (for example,
   *             "AdminRole (Role) <janedoe@example.com>). Entries from the Amazon Web Services Support team display
   *             "Amazon Web Services," and don't show an email address.
   *             </p>
   * @public
   */
  submittedBy?: string | undefined;

  /**
   * <p>The time the communication was created.</p>
   * @public
   */
  timeCreated?: string | undefined;

  /**
   * <p>Information about all attachments on the case communication. This includes attachments added through <code>AddAttachmentsToSet</code> and attachments uploaded through <code>GetAttachmentUploadLinks</code>.</p>
   *          <p>Use this field to enumerate every attachment on the communication. To download an attachment listed in this field, use <a>GetAttachmentDownloadLink</a>. <code>GetAttachmentDownloadLink</code> returns a presigned URL that works for attachments of any size. </p>
   * @public
   */
  attachments?: AttachmentDetails[] | undefined;

  /**
   * <p>Information about the attachments to the case communication that are 5 MB or smaller.
   *             This field doesn't include attachments larger than 5 MB. To enumerate every attachment on
   *             the communication, including attachments larger than 5 MB, use the
   *                 <code>attachments</code> field instead.</p>
   * @public
   */
  attachmentSet?: AttachmentDetails[] | undefined;
}

/**
 * <p>The five most recent communications associated with the case.</p>
 * @public
 */
export interface RecentCaseCommunications {
  /**
   * <p>The five most recent communications associated with the case.</p>
   * @public
   */
  communications?: Communication[] | undefined;

  /**
   * <p>A resumption point for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A JSON-formatted object that contains the metadata for a support case. It is contained
 *             in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>caseId</b> - The support case ID requested
 *                     or returned in the call. The case ID is an alphanumeric string formatted as
 *                     shown in this example:
 *                         case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>categoryCode</b> - The category of problem
 *                     for the support case. Corresponds to the <code>CategoryCode</code> values
 *                     returned by a call to <a>DescribeServices</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>displayId</b> - The identifier for the case
 *                     on pages in the Amazon Web Services Support Center.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>language</b> - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
 * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
 * code for the <code>language</code> parameter if you want support in that language.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>nextToken</b> - A resumption point for
 *                     pagination.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are
 *                         <code>attachments</code>, <code>body</code>, <code>caseId</code>,
 *                         <code>submittedBy</code>, and <code>timeCreated</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>serviceCode</b> - The identifier for the
 *                     Amazon Web Services service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>severityCode</b> - The severity code
 *                     assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are:
 *                         <code>low</code>, <code>normal</code>, <code>high</code>,
 *                         <code>urgent</code>, and <code>critical</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>status</b> - The status of the case in the
 *                     Amazon Web Services Support Center. Valid values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>all-open</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>customer-action-completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>opened</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>pending-customer-action</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>reopened</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>resolved</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>unassigned</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>work-in-progress</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>subject</b> - The subject line of the
 *                     case.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>submittedBy</b> - The email address of the
 *                     account that submitted the case.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>timeCreated</b> - The time the case was
 *                     created, in ISO-8601 format.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CaseDetails {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId?: string | undefined;

  /**
   * <p>The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric
   *             string.</p>
   * @public
   */
  displayId?: string | undefined;

  /**
   * <p>The subject line for the case in the Amazon Web Services Support Center.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>The status of the case.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>all-open</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-action-completed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opened</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-customer-action</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reopened</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolved</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unassigned</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>work-in-progress</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service. You can get a list of codes and the corresponding
   *             service names by calling <a>DescribeServices</a>.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The category of problem for the support case.</p>
   * @public
   */
  categoryCode?: string | undefined;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   * @public
   */
  severityCode?: string | undefined;

  /**
   * <p>The email address of the account that submitted the case.</p>
   * @public
   */
  submittedBy?: string | undefined;

  /**
   * <p>The time that the case was created in the Amazon Web Services Support Center.</p>
   * @public
   */
  timeCreated?: string | undefined;

  /**
   * <p>The five most recent communications between you and Amazon Web Services Support Center, including the
   *             IDs of any attachments to the communications. Also includes a <code>nextToken</code>
   *             that you can use to retrieve earlier communications.</p>
   * @public
   */
  recentCommunications?: RecentCaseCommunications | undefined;

  /**
   * <p>The email addresses that receive copies of communication about the case.</p>
   * @public
   */
  ccEmailAddresses?: string[] | undefined;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language?: string | undefined;
}

/**
 * <p>Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a>
 *             objects and a <code>nextToken</code> that defines a point for pagination in the result
 *             set.</p>
 * @public
 */
export interface DescribeCasesResponse {
  /**
   * <p>The details for the cases that match the request.</p>
   * @public
   */
  cases?: CaseDetails[] | undefined;

  /**
   * <p>A resumption point for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommunicationsRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 24 months after creation.</p>
   * @public
   */
  beforeTime?: string | undefined;

  /**
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 24 months after creation.</p>
   * @public
   */
  afterTime?: string | undefined;

  /**
   * <p>A resumption point for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning communications. When
   *          set to <code>true</code>, the request is validated but no communications are returned, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The communications returned by the <a>DescribeCommunications</a>
 *             operation.</p>
 * @public
 */
export interface DescribeCommunicationsResponse {
  /**
   * <p>The communications for the case.</p>
   * @public
   */
  communications?: Communication[] | undefined;

  /**
   * <p>A resumption point for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsRequest {
  /**
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>. If you don't specify a value, the default is
   *                 <code>technical</code>.</p>
   * @public
   */
  issueType: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language: string | undefined;

  /**
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   * @public
   */
  categoryCode: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning case option data.
   *          When set to <code>true</code>, the request is validated but no options are returned, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>Date and time (UTC) format in RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.</p>
 * @public
 */
export interface DateInterval {
  /**
   * <p>
   *         A JSON object containing start and date time (UTC). Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *         </p>
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * <p>
   *         End Date Time (UTC). RFC 3339 format : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *         </p>
   * @public
   */
  endDateTime?: string | undefined;
}

/**
 * <p>Time range object with <code>startTime</code> and <code>endTime</code> range in RFC 3339 format. <code>'HH:mm:ss.SSS'</code>.</p>
 * @public
 */
export interface SupportedHour {
  /**
   * <p>
   *         Start Time. RFC 3339 format <code>'HH:mm:ss.SSS'</code>.
   *         </p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>
   *         End Time. RFC 3339 format <code>'HH:mm:ss.SSS'</code>.
   *         </p>
   * @public
   */
  endTime?: string | undefined;
}

/**
 * <p>A JSON-formatted object that contains the CommunicationTypeOptions for creating a case for a certain
 *         communication channel. It is contained in the response from a <a>DescribeCreateCaseOptions</a> request. <b>CommunicationTypeOptions</b> contains the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>datesWithoutSupport</b> -
 *                     A JSON-formatted list containing date and time ranges for periods
 *                     without support in UTC time. Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
 *                     </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>supportedHours</b> -
 *                     A JSON-formatted list containing time ranges when support are available.
 *                     Time format is RFC 3339 : 'HH:mm:ss.SSS'.
 *                     </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>type</b> -
 *                    A string value indicating the communication type that the aforementioned rules apply to. At the moment
 *                    the type value can assume one of 3 values at the moment <code>chat</code>, <code>web</code> and
 *                    <code>call</code>.
 *                     </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CommunicationTypeOptions {
  /**
   * <p>
   *         A string value indicating the communication type. At the moment the type value can assume one of 3 values at the moment chat, web and call.
   *         </p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>
   *         A JSON-formatted list containing time ranges when support is available.
   *         </p>
   * @public
   */
  supportedHours?: SupportedHour[] | undefined;

  /**
   * <p>
   *         A JSON-formatted list containing date and time ranges for periods without support
   *         </p>
   * @public
   */
  datesWithoutSupport?: DateInterval[] | undefined;
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsResponse {
  /**
   * <p>Language availability can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     available
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                     best_effort
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                     unavailable
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  languageAvailability?: string | undefined;

  /**
   * <p>
   *         A JSON-formatted array that contains the available communication type options, along with the available support
   *         timeframes for the given inputs.
   *         </p>
   * @public
   */
  communicationTypes?: CommunicationTypeOptions[] | undefined;
}

/**
 * <p>Information about why a request was throttled.</p>
 * @public
 */
export interface ThrottlingReason {
  /**
   * <p>The reason that the request was throttled.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The resource that caused the request to be throttled.</p>
   * @public
   */
  resource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * <p>A JSON-formatted list of service codes available for Amazon Web Services services.</p>
   * @public
   */
  serviceCodeList?: string[] | undefined;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning the list of services.
   *          When set to <code>true</code>, the request is validated but no services are returned, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A JSON-formatted name/value pair that represents the category name and category code
 *             of the problem, selected from the <a>DescribeServices</a> response for each
 *             Amazon Web Services service.</p>
 * @public
 */
export interface Category {
  /**
   * <p>The category code for the support case.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The category name for the support case.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Information about an Amazon Web Services service returned by the <a>DescribeServices</a>
 *             operation.</p>
 * @public
 */
export interface Service {
  /**
   * <p>The code for an Amazon Web Services service returned by the <a>DescribeServices</a>
   *             response. The <code>name</code> element contains the corresponding friendly name.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The friendly name for an Amazon Web Services service. The <code>code</code> element contains the
   *             corresponding code.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list of categories that describe the type of support issue a case describes.
   *             Categories consist of a category name and a category code. Category names and codes are
   *             passed to Amazon Web Services Support when you call <a>CreateCase</a>.</p>
   * @public
   */
  categories?: Category[] | undefined;
}

/**
 * <p>The list of Amazon Web Services services returned by the <a>DescribeServices</a>
 *             operation.</p>
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * <p>A JSON-formatted list of Amazon Web Services services.</p>
   * @public
   */
  services?: Service[] | undefined;
}

/**
 * @public
 */
export interface DescribeSeverityLevelsRequest {
  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning severity levels. When
   *          set to <code>true</code>, the request is validated but no severity levels are returned, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A code and name pair that represents the severity level of a support case. The
 *             available values depend on the support plan for the account. For more information, see
 *                 <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a
 *                 severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @public
 */
export interface SeverityLevel {
  /**
   * <p>The code for case severity level.</p>
   *          <p>Valid values: <code>low</code> | <code>normal</code> | <code>high</code> |
   *                 <code>urgent</code> | <code>critical</code>
   *          </p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The name of the severity level that corresponds to the severity level code.</p>
   *          <note>
   *             <p>The values returned by the API are different from the values that appear in the
   *                 Amazon Web Services Support Center. For example, the API uses the code <code>low</code>, but the name
   *                 appears as General guidance in Support Center. </p>
   *             <p>The following are the API code names and how they appear in the console:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>low</code> - General guidance</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>normal</code> - System impaired</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>high</code> - Production system impaired</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>urgent</code> - Production system down</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>critical</code> - Business-critical system down</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a
   *                 severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The list of severity levels returned by the <a>DescribeSeverityLevels</a>
 *             operation.</p>
 * @public
 */
export interface DescribeSeverityLevelsResponse {
  /**
   * <p>The available severity levels for the support case. Available severity levels are
   *             defined by your service level agreement with Amazon Web Services.</p>
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesRequest {
  /**
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>.</p>
   * @public
   */
  issueType: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   * @public
   */
  categoryCode: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning supported languages.
   *          When set to <code>true</code>, the request is validated but no languages are returned, and the
   *          operation returns a <code>DryRunOperationException</code>. When omitted or set to
   *             <code>false</code>, the request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>
 *             A JSON-formatted object that contains the available ISO 639-1 language <code>code</code>,
 *             <code>language</code> name and langauge <code>display</code> value. The language code is what should be used
 *             in the <a>CreateCase</a> call.
 *         </p>
 * @public
 */
export interface SupportedLanguage {
  /**
   * <p>
   *         2 digit ISO 639-1 code. e.g. <code>en</code>
   *          </p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>
   *         Full language description e.g. <code>ENGLISH</code>
   *          </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>
   *             Language display value e.g. <code>ENGLISH</code>
   *          </p>
   * @public
   */
  display?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesResponse {
  /**
   * <p>
   *         A JSON-formatted array that contains the available ISO 639-1 language codes.
   *         </p>
   * @public
   */
  supportedLanguages?: SupportedLanguage[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * <p>The IDs of the Trusted Advisor checks to get the status.</p>
   *          <note>
   *             <p>If you specify the check ID of a check that is automatically refreshed, you might
   *                 see an <code>InvalidParameterValue</code> error.</p>
   *          </note>
   * @public
   */
  checkIds: (string | null)[] | undefined;
}

/**
 * <p>The refresh status of a Trusted Advisor check.</p>
 * @public
 */
export interface TrustedAdvisorCheckRefreshStatus {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   * @public
   */
  checkId: string | undefined;

  /**
   * <p>The status of the Trusted Advisor check for which a refresh has been requested:
   *             </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>none</code> - The check is not refreshed or the non-success
   *                     status exceeds the timeout</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enqueued</code> - The check refresh requests has entered the
   *                     refresh queue</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processing</code> - The check refresh request is picked up by the
   *                     rule processing engine</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>success</code> - The check is successfully refreshed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>abandoned</code> - The check refresh has failed</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The amount of time, in milliseconds, until the Trusted Advisor check is eligible for
   *             refresh.</p>
   * @public
   */
  millisUntilNextRefreshable: number | undefined;
}

/**
 * <p>The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.</p>
 * @public
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * <p>The refresh status of the specified Trusted Advisor checks.</p>
   * @public
   */
  statuses: TrustedAdvisorCheckRefreshStatus[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   * @public
   */
  checkId: string | undefined;

  /**
   * <p>The ISO 639-1 code for the language that you want your check results to appear
   *             in.</p>
   *          <p>The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:</p>
   *          <ul>
   *             <li>
   *                <p>Chinese, Simplified - <code>zh</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Chinese, Traditional - <code>zh_TW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>English - <code>en</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>French - <code>fr</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>German - <code>de</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Indonesian - <code>id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Italian - <code>it</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Japanese - <code>ja</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Korean - <code>ko</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Portuguese, Brazilian - <code>pt_BR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Spanish - <code>es</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  language?: string | undefined;
}

/**
 * <p>The estimated cost savings that might be realized if the recommended operations are
 *             taken.</p>
 * @public
 */
export interface TrustedAdvisorCostOptimizingSummary {
  /**
   * <p>The estimated monthly savings that might be realized if the recommended operations are
   *             taken.</p>
   * @public
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * <p>The estimated percentage of savings that might be realized if the recommended
   *             operations are taken.</p>
   * @public
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * <p>The container for summary information that relates to the category of the Trusted Advisor
 *             check.</p>
 * @public
 */
export interface TrustedAdvisorCategorySpecificSummary {
  /**
   * <p>The summary information about cost savings for a Trusted Advisor check that is in the Cost
   *             Optimizing category.</p>
   * @public
   */
  costOptimizing?: TrustedAdvisorCostOptimizingSummary | undefined;
}

/**
 * <p>Contains information about a resource identified by a Trusted Advisor check.</p>
 * @public
 */
export interface TrustedAdvisorResourceDetail {
  /**
   * <p>The status code for the resource identified in the Trusted Advisor check.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the identified resource is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The unique identifier for the identified resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as
   *             suppressed by the user.</p>
   * @public
   */
  isSuppressed?: boolean | undefined;

  /**
   * <p>Additional information about the identified resource. The exact metadata and its order
   *             can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a>
   *             object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel
   *             download, even in those cases where the UI shows just summary data.</p>
   * @public
   */
  metadata: (string | null)[] | undefined;
}

/**
 * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
 * @public
 */
export interface TrustedAdvisorResourcesSummary {
  /**
   * <p>The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.</p>
   * @public
   */
  resourcesProcessed: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.</p>
   * @public
   */
  resourcesFlagged: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because information was
   *             unavailable.</p>
   * @public
   */
  resourcesIgnored: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as
   *             suppressed by the user.</p>
   * @public
   */
  resourcesSuppressed: number | undefined;
}

/**
 * <p>The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.</p>
 * @public
 */
export interface TrustedAdvisorCheckResult {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   * @public
   */
  checkId: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   * @public
   */
  timestamp: string | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   * @public
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   * @public
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * <p>The details about each resource listed in the check result.</p>
   * @public
   */
  flaggedResources: TrustedAdvisorResourceDetail[] | undefined;
}

/**
 * <p>The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.</p>
 * @public
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  /**
   * <p>The detailed results of the Trusted Advisor check.</p>
   * @public
   */
  result?: TrustedAdvisorCheckResult | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorChecksRequest {
  /**
   * <p>The ISO 639-1 code for the language that you want your checks to appear in.</p>
   *          <p>The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:</p>
   *          <ul>
   *             <li>
   *                <p>Chinese, Simplified - <code>zh</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Chinese, Traditional - <code>zh_TW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>English - <code>en</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>French - <code>fr</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>German - <code>de</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Indonesian - <code>id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Italian - <code>it</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Japanese - <code>ja</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Korean - <code>ko</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Portuguese, Brazilian - <code>pt_BR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Spanish - <code>es</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  language: string | undefined;
}

/**
 * <p>The description and metadata for a Trusted Advisor check.</p>
 * @public
 */
export interface TrustedAdvisorCheckDescription {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The display name for the Trusted Advisor check.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Trusted Advisor check, which includes the alert criteria and
   *             recommended operations (contains HTML markup).</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The category of the Trusted Advisor check.</p>
   * @public
   */
  category: string | undefined;

  /**
   * <p>The column headings for the data returned by the Trusted Advisor check. The order of the
   *             headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a>
   *             for the check. <b>Metadata</b> contains all the data that is
   *             shown in the Excel download, even in those cases where the UI shows just summary data.
   *         </p>
   * @public
   */
  metadata: (string | null)[] | undefined;
}

/**
 * <p>Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 * @public
 */
export interface DescribeTrustedAdvisorChecksResponse {
  /**
   * <p>Information about all available Trusted Advisor checks.</p>
   * @public
   */
  checks: TrustedAdvisorCheckDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * <p>The IDs of the Trusted Advisor checks.</p>
   * @public
   */
  checkIds: (string | null)[] | undefined;
}

/**
 * <p>A summary of a Trusted Advisor check result, including the alert status, last refresh, and
 *             number of resources examined.</p>
 * @public
 */
export interface TrustedAdvisorCheckSummary {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   * @public
   */
  checkId: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   * @public
   */
  timestamp: string | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>Specifies whether the Trusted Advisor check has flagged resources.</p>
   * @public
   */
  hasFlaggedResources?: boolean | undefined;

  /**
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   * @public
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   * @public
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;
}

/**
 * <p>The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.</p>
 * @public
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * <p>The summary information for the requested Trusted Advisor checks.</p>
   * @public
   */
  summaries: TrustedAdvisorCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetAttachmentDownloadLinkRequest {
  /**
   * <p>The unique identifier of the attachment for which to retrieve a download link. Attachment
   *          IDs are returned in the <code>AttachmentDetails</code> objects in the <code>attachments</code>
   *          field of a <a>Communication</a> returned by <a>DescribeCommunications</a>
   *          or <a>DescribeCases</a>.</p>
   * @public
   */
  attachmentId: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually returning a download link. When
   *          set to <code>true</code>, the request is validated but no URL is returned, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A presigned URL for downloading an attachment, along with the date and time the URL
 *          expires. Returned by <a>GetAttachmentDownloadLink</a>.</p>
 * @public
 */
export interface DownloadUrl {
  /**
   * <p>The presigned HTTPS URL that you can use to download the attachment. Download URLs are
   *          served from <code>downloadv1.attachments.support.\{region\}.amazonaws.com</code>. The
   *             <code>downloadv1</code> prefix is subject to change.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The date and time, in ISO-8601 format, when the presigned URL expires. Download the
   *          attachment before this time.</p>
   * @public
   */
  expiryDate: string | undefined;
}

/**
 * @public
 */
export interface GetAttachmentDownloadLinkResponse {
  /**
   * <p>The name of the attachment file, including the file extension.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The presigned download URL and the date and time the URL expires.</p>
   * @public
   */
  downloadUrl: DownloadUrl | undefined;
}

/**
 * <p>The range of part indexes for which to return presigned upload URLs from <a>GetAttachmentUploadLinks</a>.</p>
 * @public
 */
export interface UploadRange {
  /**
   * <p>The starting part index of the range, inclusive. Part indexes start at 1.</p>
   * @public
   */
  startIndex: number | undefined;

  /**
   * <p>The ending part index of the range, exclusive. The range is half-open:
   *             <code>startIndex</code> is inclusive and <code>endIndex</code> is exclusive. For example,
   *          a range with <code>startIndex</code> of 1 and <code>endIndex</code> of 4 requests URLs for
   *          parts 1, 2, and 3. The range size (<code>endIndex</code> - <code>startIndex</code>)
   *          must not exceed 10. If you omit <code>endIndex</code>, the service defaults to
   *             <code>startIndex</code> + 10, capped by the total number of parts.</p>
   * @public
   */
  endIndex?: number | undefined;
}

/**
 * @public
 */
export interface GetAttachmentUploadLinksRequest {
  /**
   * <p>The name of the file to upload, including the file extension. This value is required when
   *          you initiate a new upload.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The total size of the file in bytes. The service uses this value to calculate the total
   *          number of parts and the size of each part. Required when you initiate a new upload (when
   *             <code>uploadId</code> isn't provided). Valid range: 1 to 157,286,400 bytes (approximately
   *          150 MB).</p>
   * @public
   */
  fileSizeBytes?: number | undefined;

  /**
   * <p>The unique identifier of an in-progress multipart upload, returned by a previous call to
   *             <code>GetAttachmentUploadLinks</code>. Specify <code>uploadId</code> to retrieve additional
   *          presigned upload URLs for an upload that has already been initiated. Required when
   *             <code>fileSizeBytes</code> isn't provided. Length: 1 to 2,048 characters.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The range of part indexes for which to return presigned upload URLs. Use this parameter
   *          to page through the upload URLs for a large file across multiple calls. If you omit this
   *          parameter, the service determines the range to return.</p>
   * @public
   */
  uploadRange?: UploadRange | undefined;

  /**
   * <p>Specifies whether to validate the request without actually generating upload URLs. When
   *          set to <code>true</code>, the request is validated but no URLs are returned, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A presigned URL for uploading a single part of a multipart attachment upload, along with
 *          the part index and the date and time the URL expires. Returned by <a>GetAttachmentUploadLinks</a>.</p>
 * @public
 */
export interface UploadUrl {
  /**
   * <p>The presigned HTTPS URL that you use to upload a single part with HTTP
   *             <code>PUT</code>. Upload URLs are served from
   *             <code>uploadv1.attachments.support.\{region\}.amazonaws.com</code>. The
   *             <code>uploadv1</code> prefix is subject to change.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The index of the part that this URL uploads.</p>
   * @public
   */
  partIndex: number | undefined;

  /**
   * <p>The date and time, in ISO-8601 format, when the presigned URL expires. Upload the part
   *          before this time.</p>
   * @public
   */
  expiryDate: string | undefined;
}

/**
 * @public
 */
export interface GetAttachmentUploadLinksResponse {
  /**
   * <p>The unique identifier for the multipart upload. Use this value in subsequent calls to
   *             <code>GetAttachmentUploadLinks</code>, <a>DescribeAttachmentUploadStatus</a>,
   *          and <a>CompleteAttachmentUpload</a>, and to attach the upload to a case through the
   *             <code>uploadIds</code> parameter on <a>CreateCase</a> or <a>AddCommunicationToCase</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The size, in bytes, of each part. Split the file into parts of this size before you upload
   *          them to the presigned URLs. For an upload with <code>n</code> total parts, parts 1 through
   *             <code>n</code> - 1 are exactly this size; the last part may be smaller. Maximum:
   *          104,857,600 bytes (approximately 100 MB).</p>
   * @public
   */
  partSizeBytes: number | undefined;

  /**
   * <p>The total number of parts that the file is split into. Upload one part to each presigned
   *          URL.</p>
   * @public
   */
  totalParts: number | undefined;

  /**
   * <p>The next part index to request presigned URLs for. If all upload URLs for the file have
   *          been returned, this field is <code>null</code>. Use this value as the <code>startIndex</code> in
   *             <code>uploadRange</code> on a subsequent call to <code>GetAttachmentUploadLinks</code> to
   *          retrieve the next batch of upload URLs.</p>
   * @public
   */
  nextIndex?: number | undefined;

  /**
   * <p>The list of presigned upload URLs for the requested range of parts. The list contains at
   *          most 10 URLs per call. Upload each part to its corresponding URL by using HTTP
   *             <code>PUT</code> before the URL expires.</p>
   * @public
   */
  uploadUrls: UploadUrl[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RefreshTrustedAdvisorCheckRequest {
  /**
   * <p>The unique identifier for the Trusted Advisor check to refresh.</p>
   *          <note>
   *             <p>Specifying the check ID of a check that is automatically refreshed causes an
   *                     <code>InvalidParameterValue</code> error.</p>
   *          </note>
   * @public
   */
  checkId: string | undefined;
}

/**
 * <p>The current refresh status of a Trusted Advisor check.</p>
 * @public
 */
export interface RefreshTrustedAdvisorCheckResponse {
  /**
   * <p>The current refresh status for a check, including the amount of time until the check
   *             is eligible for refresh.</p>
   * @public
   */
  status: TrustedAdvisorCheckRefreshStatus | undefined;
}

/**
 * @public
 */
export interface ResolveCaseRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-exen-2025-c4c1d2bf33c5cf47</i>
   *          </p>
   * @public
   */
  caseId?: string | undefined;

  /**
   * <p>Specifies whether to validate the request without actually resolving the case. When set
   *          to <code>true</code>, the request is validated but the case isn't resolved, and the operation
   *          returns a <code>DryRunOperationException</code>. When omitted or set to <code>false</code>, the
   *          request runs normally.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>The status of the case returned by the <a>ResolveCase</a> operation.</p>
 * @public
 */
export interface ResolveCaseResponse {
  /**
   * <p>The status of the case when the <a>ResolveCase</a> request was sent.</p>
   * @public
   */
  initialCaseStatus?: string | undefined;

  /**
   * <p>The status of the case after the <a>ResolveCase</a> request was
   *             processed.</p>
   * @public
   */
  finalCaseStatus?: string | undefined;
}
