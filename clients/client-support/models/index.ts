import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p></p>
 */
export interface AddAttachmentsToSetRequest {
  __type?: "AddAttachmentsToSetRequest";
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> is not specified,
   *             a new attachment set is created, and the ID of the set is returned in the response. If
   *             an <code>attachmentSetId</code> is specified, the attachments are added to the specified
   *             set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>One or more attachments to add to the set. The limit is 3 attachments per set, and
   *             the size limit is 5 MB per attachment.</p>
   */
  attachments: Attachment[] | undefined;
}

export namespace AddAttachmentsToSetRequest {
  export const filterSensitiveLog = (obj: AddAttachmentsToSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddAttachmentsToSetRequest =>
    __isa(o, "AddAttachmentsToSetRequest");
}

/**
 * <p>The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.</p>
 */
export interface AddAttachmentsToSetResponse {
  __type?: "AddAttachmentsToSetResponse";
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> was not specified,
   *             a new attachment set is created, and the ID of the set is returned in the response. If
   *             an <code>attachmentSetId</code> was specified, the attachments are added to the
   *             specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>The time and date when the attachment set expires.</p>
   */
  expiryTime?: string;
}

export namespace AddAttachmentsToSetResponse {
  export const filterSensitiveLog = (
    obj: AddAttachmentsToSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddAttachmentsToSetResponse =>
    __isa(o, "AddAttachmentsToSetResponse");
}

/**
 * <p>To be written.</p>
 */
export interface AddCommunicationToCaseRequest {
  __type?: "AddCommunicationToCaseRequest";
  /**
   * <p>The ID of a set of one or more attachments for the communication to add to the
   *             case. Create the set by calling <a>AddAttachmentsToSet</a>
   *          </p>
   */
  attachmentSetId?: string;

  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The email addresses in the CC line of an email to be added to the support
   *             case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The body of an email communication to add to the support case.</p>
   */
  communicationBody: string | undefined;
}

export namespace AddCommunicationToCaseRequest {
  export const filterSensitiveLog = (
    obj: AddCommunicationToCaseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddCommunicationToCaseRequest =>
    __isa(o, "AddCommunicationToCaseRequest");
}

/**
 * <p>The result of the <a>AddCommunicationToCase</a> operation.</p>
 */
export interface AddCommunicationToCaseResponse {
  __type?: "AddCommunicationToCaseResponse";
  /**
   * <p>True if <a>AddCommunicationToCase</a> succeeds. Otherwise, returns an
   *             error.</p>
   */
  result?: boolean;
}

export namespace AddCommunicationToCaseResponse {
  export const filterSensitiveLog = (
    obj: AddCommunicationToCaseResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddCommunicationToCaseResponse =>
    __isa(o, "AddCommunicationToCaseResponse");
}

/**
 * <p>An attachment to a case communication. The attachment consists of the file name and
 *             the content of the file.</p>
 */
export interface Attachment {
  __type?: "Attachment";
  /**
   * <p>The content of the attachment file.</p>
   */
  data?: Uint8Array;

  /**
   * <p>The name of the attachment file.</p>
   */
  fileName?: string;
}

export namespace Attachment {
  export const filterSensitiveLog = (obj: Attachment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Attachment => __isa(o, "Attachment");
}

/**
 * <p>The file name and ID of an attachment to a case communication. You can use the ID
 *             to retrieve the attachment with the <a>DescribeAttachment</a>
 *             operation.</p>
 */
export interface AttachmentDetails {
  __type?: "AttachmentDetails";
  /**
   * <p>The ID of the attachment.</p>
   */
  attachmentId?: string;

  /**
   * <p>The file name of the attachment.</p>
   */
  fileName?: string;
}

export namespace AttachmentDetails {
  export const filterSensitiveLog = (obj: AttachmentDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentDetails =>
    __isa(o, "AttachmentDetails");
}

/**
 * <p>An attachment with the specified ID could not be found.</p>
 */
export interface AttachmentIdNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "AttachmentIdNotFound";
  $fault: "client";
  /**
   * <p>An attachment with the specified ID could not be found.</p>
   */
  message?: string;
}

export namespace AttachmentIdNotFound {
  export const filterSensitiveLog = (obj: AttachmentIdNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentIdNotFound =>
    __isa(o, "AttachmentIdNotFound");
}

/**
 * <p>The limit for the number of attachment sets created in a short period of time has
 *             been exceeded.</p>
 */
export interface AttachmentLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "AttachmentLimitExceeded";
  $fault: "client";
  /**
   * <p>The limit for the number of attachment sets created in a short period of time has
   *             been exceeded.</p>
   */
  message?: string;
}

export namespace AttachmentLimitExceeded {
  export const filterSensitiveLog = (obj: AttachmentLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentLimitExceeded =>
    __isa(o, "AttachmentLimitExceeded");
}

/**
 * <p>The expiration time of the attachment set has passed. The set expires 1 hour after
 *             it is created.</p>
 */
export interface AttachmentSetExpired
  extends __SmithyException,
    $MetadataBearer {
  name: "AttachmentSetExpired";
  $fault: "client";
  /**
   * <p>The expiration time of the attachment set has passed. The set expires 1 hour after
   *             it is created.</p>
   */
  message?: string;
}

export namespace AttachmentSetExpired {
  export const filterSensitiveLog = (obj: AttachmentSetExpired): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentSetExpired =>
    __isa(o, "AttachmentSetExpired");
}

/**
 * <p>An attachment set with the specified ID could not be found.</p>
 */
export interface AttachmentSetIdNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "AttachmentSetIdNotFound";
  $fault: "client";
  /**
   * <p>An attachment set with the specified ID could not be found.</p>
   */
  message?: string;
}

export namespace AttachmentSetIdNotFound {
  export const filterSensitiveLog = (obj: AttachmentSetIdNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentSetIdNotFound =>
    __isa(o, "AttachmentSetIdNotFound");
}

/**
 * <p>A limit for the size of an attachment set has been exceeded. The limits are 3
 *             attachments and 5 MB per attachment.</p>
 */
export interface AttachmentSetSizeLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "AttachmentSetSizeLimitExceeded";
  $fault: "client";
  /**
   * <p>A limit for the size of an attachment set has been exceeded. The limits are 3
   *             attachments and 5 MB per attachment.</p>
   */
  message?: string;
}

export namespace AttachmentSetSizeLimitExceeded {
  export const filterSensitiveLog = (
    obj: AttachmentSetSizeLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachmentSetSizeLimitExceeded =>
    __isa(o, "AttachmentSetSizeLimitExceeded");
}

/**
 * <p>The case creation limit for the account has been exceeded.</p>
 */
export interface CaseCreationLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "CaseCreationLimitExceeded";
  $fault: "client";
  /**
   * <p>An error message that indicates that you have exceeded the number of cases you can
   *             have open.</p>
   */
  message?: string;
}

export namespace CaseCreationLimitExceeded {
  export const filterSensitiveLog = (obj: CaseCreationLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaseCreationLimitExceeded =>
    __isa(o, "CaseCreationLimitExceeded");
}

/**
 * <p>A JSON-formatted object that contains the metadata for a support case. It is
 *             contained the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>caseId.</b> The AWS Support case ID requested or
 *                     returned in the call. The case ID is an alphanumeric string formatted as shown
 *                     in this example:
 *                     case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>categoryCode.</b> The category of problem for the
 *                     AWS Support case. Corresponds to the CategoryCode values returned by a call to
 *                         <a>DescribeServices</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>displayId.</b> The identifier for the case on pages
 *                     in the AWS Support Center.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>language.</b> The ISO 639-1 code for the language
 *                     in which AWS provides support. AWS Support currently supports English ("en") and
 *                     Japanese ("ja"). Language parameters must be passed explicitly for operations
 *                     that take them.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are
 *                         <code>attachments</code>, <code>body</code>, <code>caseId</code>,
 *                         <code>submittedBy</code>, and <code>timeCreated</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>nextToken.</b> A resumption point for
 *                     pagination.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>serviceCode.</b> The identifier for the AWS service
 *                     that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>severityCode.</b> The severity code assigned to the
 *                     case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are:
 *                         <code>low</code>, <code>normal</code>, <code>high</code>,
 *                         <code>urgent</code>, and <code>critical</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>status.</b> The status of the case in the AWS
 *                     Support Center. The possible values are: <code>resolved</code>,
 *                         <code>pending-customer-action</code>, <code>opened</code>,
 *                         <code>unassigned</code>, and <code>work-in-progress</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>subject.</b> The subject line of the
 *                     case.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>submittedBy.</b> The email address of the account
 *                     that submitted the case.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>timeCreated.</b> The time the case was created, in
 *                     ISO-8601 format.</p>
 *             </li>
 *          </ul>
 */
export interface CaseDetails {
  __type?: "CaseDetails";
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The category of problem for the AWS Support case.</p>
   */
  categoryCode?: string;

  /**
   * <p>The email addresses that receive copies of communication about the case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The ID displayed for the case in the AWS Support Center. This is a numeric
   *             string.</p>
   */
  displayId?: string;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>The five most recent communications between you and AWS Support Center, including
   *             the IDs of any attachments to the communications. Also includes a <code>nextToken</code>
   *             that you can use to retrieve earlier communications.</p>
   */
  recentCommunications?: RecentCaseCommunications;

  /**
   * <p>The code for the AWS service. You can get a list of codes and the corresponding
   *             service names by calling <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   */
  severityCode?: string;

  /**
   * <p>The status of the case. Valid values: <code>resolved</code> |
   *                 <code>pending-customer-action</code> | <code>opened</code> | <code>unassigned</code>
   *             | <code>work-in-progress</code>.</p>
   */
  status?: string;

  /**
   * <p>The subject line for the case in the AWS Support Center.</p>
   */
  subject?: string;

  /**
   * <p>The email address of the account that submitted the case.</p>
   */
  submittedBy?: string;

  /**
   * <p>The time that the case was case created in the AWS Support Center.</p>
   */
  timeCreated?: string;
}

export namespace CaseDetails {
  export const filterSensitiveLog = (obj: CaseDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaseDetails => __isa(o, "CaseDetails");
}

/**
 * <p>The requested <code>caseId</code> could not be located.</p>
 */
export interface CaseIdNotFound extends __SmithyException, $MetadataBearer {
  name: "CaseIdNotFound";
  $fault: "client";
  /**
   * <p>The requested <code>CaseId</code> could not be located.</p>
   */
  message?: string;
}

export namespace CaseIdNotFound {
  export const filterSensitiveLog = (obj: CaseIdNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaseIdNotFound =>
    __isa(o, "CaseIdNotFound");
}

/**
 * <p>A JSON-formatted name/value pair that represents the category name and category
 *             code of the problem, selected from the <a>DescribeServices</a> response for
 *             each AWS service.</p>
 */
export interface Category {
  __type?: "Category";
  /**
   * <p>The category code for the support case.</p>
   */
  code?: string;

  /**
   * <p>The category name for the support case.</p>
   */
  name?: string;
}

export namespace Category {
  export const filterSensitiveLog = (obj: Category): any => ({
    ...obj
  });
  export const isa = (o: any): o is Category => __isa(o, "Category");
}

/**
 * <p>A communication associated with an AWS Support case. The communication consists of
 *             the case ID, the message body, attachment information, the submitter of the
 *             communication, and the date and time of the communication.</p>
 */
export interface Communication {
  __type?: "Communication";
  /**
   * <p>Information about the attachments to the case communication.</p>
   */
  attachmentSet?: AttachmentDetails[];

  /**
   * <p>The text of the communication between the customer and AWS Support.</p>
   */
  body?: string;

  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The identity of the account that submitted, or responded to, the support case.
   *             Customer entries include the role or IAM user as well as the email address. For example,
   *             "AdminRole (Role) <someone@example.com>. Entries from the AWS Support team display
   *             "Amazon Web Services," and do not show an email address.
   *             </p>
   */
  submittedBy?: string;

  /**
   * <p>The time the communication was created.</p>
   */
  timeCreated?: string;
}

export namespace Communication {
  export const filterSensitiveLog = (obj: Communication): any => ({
    ...obj
  });
  export const isa = (o: any): o is Communication => __isa(o, "Communication");
}

export interface CreateCaseRequest {
  __type?: "CreateCaseRequest";
  /**
   * <p>The ID of a set of one or more attachments for the case. Create the set by using
   *                 <a>AddAttachmentsToSet</a>.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>The category of problem for the AWS Support case.</p>
   */
  categoryCode?: string;

  /**
   * <p>A list of email addresses that AWS Support copies on case correspondence.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The communication body text when you create an AWS Support case by calling <a>CreateCase</a>.</p>
   */
  communicationBody: string | undefined;

  /**
   * <p>The type of issue for the case. You can specify either "customer-service" or
   *             "technical." If you do not indicate a value, the default is "technical."</p>
   *         <note>
   *             <p>Service limit increases are not supported by the Support API; you must submit
   *                 service limit increase requests in <a href="https://console.aws.amazon.com/support">Support
   *                     Center</a>.</p>
   *         </note>
   */
  issueType?: string;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>The code for the AWS service returned by the call to <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   *         <note>
   *             <p>The availability of severity levels depends on the support plan for the
   *                 account.</p>
   *         </note>
   */
  severityCode?: string;

  /**
   * <p>The title of the AWS Support case.</p>
   */
  subject: string | undefined;
}

export namespace CreateCaseRequest {
  export const filterSensitiveLog = (obj: CreateCaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCaseRequest =>
    __isa(o, "CreateCaseRequest");
}

/**
 * <p>The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation.</p>
 */
export interface CreateCaseResponse {
  __type?: "CreateCaseResponse";
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

export namespace CreateCaseResponse {
  export const filterSensitiveLog = (obj: CreateCaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCaseResponse =>
    __isa(o, "CreateCaseResponse");
}

/**
 * <p>The limit for the number of <a>DescribeAttachment</a> requests in a
 *             short period of time has been exceeded.</p>
 */
export interface DescribeAttachmentLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "DescribeAttachmentLimitExceeded";
  $fault: "client";
  /**
   * <p>The limit for the number of <a>DescribeAttachment</a> requests in a
   *             short period of time has been exceeded.</p>
   */
  message?: string;
}

export namespace DescribeAttachmentLimitExceeded {
  export const filterSensitiveLog = (
    obj: DescribeAttachmentLimitExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAttachmentLimitExceeded =>
    __isa(o, "DescribeAttachmentLimitExceeded");
}

export interface DescribeAttachmentRequest {
  __type?: "DescribeAttachmentRequest";
  /**
   * <p>The ID of the attachment to return. Attachment IDs are returned by the <a>DescribeCommunications</a> operation.</p>
   */
  attachmentId: string | undefined;
}

export namespace DescribeAttachmentRequest {
  export const filterSensitiveLog = (obj: DescribeAttachmentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAttachmentRequest =>
    __isa(o, "DescribeAttachmentRequest");
}

/**
 * <p>The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.</p>
 */
export interface DescribeAttachmentResponse {
  __type?: "DescribeAttachmentResponse";
  /**
   * <p>The attachment content and file name.</p>
   */
  attachment?: Attachment;
}

export namespace DescribeAttachmentResponse {
  export const filterSensitiveLog = (obj: DescribeAttachmentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAttachmentResponse =>
    __isa(o, "DescribeAttachmentResponse");
}

export interface DescribeCasesRequest {
  __type?: "DescribeCasesRequest";
  /**
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * <p>A list of ID numbers of the support cases you want returned. The maximum number of
   *             cases is 100.</p>
   */
  caseIdList?: string[];

  /**
   * <p>The ID displayed for a case in the AWS Support Center user interface.</p>
   */
  displayId?: string;

  /**
   * <p>Specifies whether communications should be included in the <a>DescribeCases</a> results. The default is
   *             <i>true</i>.</p>
   */
  includeCommunications?: boolean;

  /**
   * <p>Specifies whether resolved support cases should be included in the <a>DescribeCases</a> results. The default is
   *             <i>false</i>.</p>
   */
  includeResolvedCases?: boolean;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export namespace DescribeCasesRequest {
  export const filterSensitiveLog = (obj: DescribeCasesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCasesRequest =>
    __isa(o, "DescribeCasesRequest");
}

/**
 * <p>Returns an array of <a>CaseDetails</a> objects and a
 *                 <code>nextToken</code> that defines a point for pagination in the result
 *             set.</p>
 */
export interface DescribeCasesResponse {
  __type?: "DescribeCasesResponse";
  /**
   * <p>The details for the cases that match the request.</p>
   */
  cases?: CaseDetails[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export namespace DescribeCasesResponse {
  export const filterSensitiveLog = (obj: DescribeCasesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCasesResponse =>
    __isa(o, "DescribeCasesResponse");
}

export interface DescribeCommunicationsRequest {
  __type?: "DescribeCommunicationsRequest";
  /**
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId: string | undefined;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export namespace DescribeCommunicationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeCommunicationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCommunicationsRequest =>
    __isa(o, "DescribeCommunicationsRequest");
}

/**
 * <p>The communications returned by the <a>DescribeCommunications</a>
 *             operation.</p>
 */
export interface DescribeCommunicationsResponse {
  __type?: "DescribeCommunicationsResponse";
  /**
   * <p>The communications for the case.</p>
   */
  communications?: Communication[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export namespace DescribeCommunicationsResponse {
  export const filterSensitiveLog = (
    obj: DescribeCommunicationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCommunicationsResponse =>
    __isa(o, "DescribeCommunicationsResponse");
}

export interface DescribeServicesRequest {
  __type?: "DescribeServicesRequest";
  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>A JSON-formatted list of service codes available for AWS services.</p>
   */
  serviceCodeList?: string[];
}

export namespace DescribeServicesRequest {
  export const filterSensitiveLog = (obj: DescribeServicesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeServicesRequest =>
    __isa(o, "DescribeServicesRequest");
}

/**
 * <p>The list of AWS services returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface DescribeServicesResponse {
  __type?: "DescribeServicesResponse";
  /**
   * <p>A JSON-formatted list of AWS services.</p>
   */
  services?: Service[];
}

export namespace DescribeServicesResponse {
  export const filterSensitiveLog = (obj: DescribeServicesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeServicesResponse =>
    __isa(o, "DescribeServicesResponse");
}

export interface DescribeSeverityLevelsRequest {
  __type?: "DescribeSeverityLevelsRequest";
  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;
}

export namespace DescribeSeverityLevelsRequest {
  export const filterSensitiveLog = (
    obj: DescribeSeverityLevelsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSeverityLevelsRequest =>
    __isa(o, "DescribeSeverityLevelsRequest");
}

/**
 * <p>The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.</p>
 */
export interface DescribeSeverityLevelsResponse {
  __type?: "DescribeSeverityLevelsResponse";
  /**
   * <p>The available severity levels for the support case. Available severity levels are
   *             defined by your service level agreement with AWS.</p>
   */
  severityLevels?: SeverityLevel[];
}

export namespace DescribeSeverityLevelsResponse {
  export const filterSensitiveLog = (
    obj: DescribeSeverityLevelsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSeverityLevelsResponse =>
    __isa(o, "DescribeSeverityLevelsResponse");
}

/**
 * <p></p>
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  __type?: "DescribeTrustedAdvisorCheckRefreshStatusesRequest";
  /**
   * <p>The IDs of the Trusted Advisor checks to get the status of. <b>Note:</b> Specifying the check ID of a check that is automatically refreshed
   *             causes an <code>InvalidParameterValue</code> error.</p>
   */
  checkIds: string[] | undefined;
}

export namespace DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckRefreshStatusesRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeTrustedAdvisorCheckRefreshStatusesRequest =>
    __isa(o, "DescribeTrustedAdvisorCheckRefreshStatusesRequest");
}

/**
 * <p>The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  __type?: "DescribeTrustedAdvisorCheckRefreshStatusesResponse";
  /**
   * <p>The refresh status of the specified Trusted Advisor checks.</p>
   */
  statuses: TrustedAdvisorCheckRefreshStatus[] | undefined;
}

export namespace DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckRefreshStatusesResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeTrustedAdvisorCheckRefreshStatusesResponse =>
    __isa(o, "DescribeTrustedAdvisorCheckRefreshStatusesResponse");
}

/**
 * <p></p>
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  __type?: "DescribeTrustedAdvisorCheckResultRequest";
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language?: string;
}

export namespace DescribeTrustedAdvisorCheckResultRequest {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckResultRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustedAdvisorCheckResultRequest =>
    __isa(o, "DescribeTrustedAdvisorCheckResultRequest");
}

/**
 * <p>The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  __type?: "DescribeTrustedAdvisorCheckResultResponse";
  /**
   * <p>The detailed results of the Trusted Advisor check.</p>
   */
  result?: TrustedAdvisorCheckResult;
}

export namespace DescribeTrustedAdvisorCheckResultResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckResultResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustedAdvisorCheckResultResponse =>
    __isa(o, "DescribeTrustedAdvisorCheckResultResponse");
}

/**
 * <p></p>
 */
export interface DescribeTrustedAdvisorChecksRequest {
  __type?: "DescribeTrustedAdvisorChecksRequest";
  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support
   *             currently supports English ("en") and Japanese ("ja"). Language parameters must be
   *             passed explicitly for operations that take them.</p>
   */
  language: string | undefined;
}

export namespace DescribeTrustedAdvisorChecksRequest {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorChecksRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustedAdvisorChecksRequest =>
    __isa(o, "DescribeTrustedAdvisorChecksRequest");
}

/**
 * <p>Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 */
export interface DescribeTrustedAdvisorChecksResponse {
  __type?: "DescribeTrustedAdvisorChecksResponse";
  /**
   * <p>Information about all available Trusted Advisor checks.</p>
   */
  checks: TrustedAdvisorCheckDescription[] | undefined;
}

export namespace DescribeTrustedAdvisorChecksResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorChecksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustedAdvisorChecksResponse =>
    __isa(o, "DescribeTrustedAdvisorChecksResponse");
}

export interface DescribeTrustedAdvisorCheckSummariesRequest {
  __type?: "DescribeTrustedAdvisorCheckSummariesRequest";
  /**
   * <p>The IDs of the Trusted Advisor checks.</p>
   */
  checkIds: string[] | undefined;
}

export namespace DescribeTrustedAdvisorCheckSummariesRequest {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckSummariesRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeTrustedAdvisorCheckSummariesRequest =>
    __isa(o, "DescribeTrustedAdvisorCheckSummariesRequest");
}

/**
 * <p>The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  __type?: "DescribeTrustedAdvisorCheckSummariesResponse";
  /**
   * <p>The summary information for the requested Trusted Advisor checks.</p>
   */
  summaries: TrustedAdvisorCheckSummary[] | undefined;
}

export namespace DescribeTrustedAdvisorCheckSummariesResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrustedAdvisorCheckSummariesResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeTrustedAdvisorCheckSummariesResponse =>
    __isa(o, "DescribeTrustedAdvisorCheckSummariesResponse");
}

/**
 * <p>An internal server error occurred.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>An internal server error occurred.</p>
   */
  message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerError =>
    __isa(o, "InternalServerError");
}

/**
 * <p>The five most recent communications associated with the case.</p>
 */
export interface RecentCaseCommunications {
  __type?: "RecentCaseCommunications";
  /**
   * <p>The five most recent communications associated with the case.</p>
   */
  communications?: Communication[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export namespace RecentCaseCommunications {
  export const filterSensitiveLog = (obj: RecentCaseCommunications): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecentCaseCommunications =>
    __isa(o, "RecentCaseCommunications");
}

/**
 * <p></p>
 */
export interface RefreshTrustedAdvisorCheckRequest {
  __type?: "RefreshTrustedAdvisorCheckRequest";
  /**
   * <p>The unique identifier for the Trusted Advisor check to refresh. <b>Note:</b> Specifying the check ID of a check that is
   *             automatically refreshed causes an <code>InvalidParameterValue</code> error.</p>
   */
  checkId: string | undefined;
}

export namespace RefreshTrustedAdvisorCheckRequest {
  export const filterSensitiveLog = (
    obj: RefreshTrustedAdvisorCheckRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshTrustedAdvisorCheckRequest =>
    __isa(o, "RefreshTrustedAdvisorCheckRequest");
}

/**
 * <p>The current refresh status of a Trusted Advisor check.</p>
 */
export interface RefreshTrustedAdvisorCheckResponse {
  __type?: "RefreshTrustedAdvisorCheckResponse";
  /**
   * <p>The current refresh status for a check, including the amount of time until the
   *             check is eligible for refresh.</p>
   */
  status: TrustedAdvisorCheckRefreshStatus | undefined;
}

export namespace RefreshTrustedAdvisorCheckResponse {
  export const filterSensitiveLog = (
    obj: RefreshTrustedAdvisorCheckResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshTrustedAdvisorCheckResponse =>
    __isa(o, "RefreshTrustedAdvisorCheckResponse");
}

export interface ResolveCaseRequest {
  __type?: "ResolveCaseRequest";
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an
   *             alphanumeric string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

export namespace ResolveCaseRequest {
  export const filterSensitiveLog = (obj: ResolveCaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResolveCaseRequest =>
    __isa(o, "ResolveCaseRequest");
}

/**
 * <p>The status of the case returned by the <a>ResolveCase</a>
 *             operation.</p>
 */
export interface ResolveCaseResponse {
  __type?: "ResolveCaseResponse";
  /**
   * <p>The status of the case after the <a>ResolveCase</a> request was
   *             processed.</p>
   */
  finalCaseStatus?: string;

  /**
   * <p>The status of the case when the <a>ResolveCase</a> request was
   *             sent.</p>
   */
  initialCaseStatus?: string;
}

export namespace ResolveCaseResponse {
  export const filterSensitiveLog = (obj: ResolveCaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResolveCaseResponse =>
    __isa(o, "ResolveCaseResponse");
}

/**
 * <p>Information about an AWS service returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface Service {
  __type?: "Service";
  /**
   * <p>A list of categories that describe the type of support issue a case describes.
   *             Categories consist of a category name and a category code. Category names and codes are
   *             passed to AWS Support when you call <a>CreateCase</a>.</p>
   */
  categories?: Category[];

  /**
   * <p>The code for an AWS service returned by the <a>DescribeServices</a>
   *             response. The <code>name</code> element contains the corresponding friendly
   *             name.</p>
   */
  code?: string;

  /**
   * <p>The friendly name for an AWS service. The <code>code</code> element contains the
   *             corresponding code.</p>
   */
  name?: string;
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj
  });
  export const isa = (o: any): o is Service => __isa(o, "Service");
}

/**
 * <p>A code and name pair that represents the severity level of a support case. The
 *             available values depend on the support plan for the account. For more information, see
 *                 <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a
 *                 Severity</a>.</p>
 */
export interface SeverityLevel {
  __type?: "SeverityLevel";
  /**
   * <p>The code for case severity level.</p>
   *         <p>Valid values: <code>low</code> | <code>normal</code> | <code>high</code> |
   *                 <code>urgent</code> | <code>critical</code>
   *          </p>
   */
  code?: string;

  /**
   * <p>The name of the severity level that corresponds to the severity level
   *             code.</p>
   *         <note>
   *             <p>The values returned by the API differ from the values that are displayed in the
   *                 AWS Support Center. For example, for the code "low", the API name is "Low", but the
   *                 name in the Support Center is "General guidance". These are the Support Center
   *                 code/name mappings:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <code>low</code>: General guidance</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <code>normal</code>: System impaired</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <code>high</code>: Production system impaired</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <code>urgent</code>: Production system down</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <code>critical</code>: Business-critical system down</p>
   *                 </li>
   *             </ul>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a
   *                 Severity</a>
   *          </p>
   */
  name?: string;
}

export namespace SeverityLevel {
  export const filterSensitiveLog = (obj: SeverityLevel): any => ({
    ...obj
  });
  export const isa = (o: any): o is SeverityLevel => __isa(o, "SeverityLevel");
}

/**
 * <p>The container for summary information that relates to the category of the Trusted
 *             Advisor check.</p>
 */
export interface TrustedAdvisorCategorySpecificSummary {
  __type?: "TrustedAdvisorCategorySpecificSummary";
  /**
   * <p>The summary information about cost savings for a Trusted Advisor check that is in
   *             the Cost Optimizing category.</p>
   */
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}

export namespace TrustedAdvisorCategorySpecificSummary {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorCategorySpecificSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCategorySpecificSummary =>
    __isa(o, "TrustedAdvisorCategorySpecificSummary");
}

/**
 * <p>The description and metadata for a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckDescription {
  __type?: "TrustedAdvisorCheckDescription";
  /**
   * <p>The category of the Trusted Advisor check.</p>
   */
  category: string | undefined;

  /**
   * <p>The description of the Trusted Advisor check, which includes the alert criteria and
   *             recommended actions (contains HTML markup).</p>
   */
  description: string | undefined;

  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  id: string | undefined;

  /**
   * <p>The column headings for the data returned by the Trusted Advisor check. The order
   *             of the headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a>
   *             for the check. <b>Metadata</b> contains all the data that is
   *             shown in the Excel download, even in those cases where the UI shows just summary data.
   *        </p>
   */
  metadata: string[] | undefined;

  /**
   * <p>The display name for the Trusted Advisor check.</p>
   */
  name: string | undefined;
}

export namespace TrustedAdvisorCheckDescription {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorCheckDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCheckDescription =>
    __isa(o, "TrustedAdvisorCheckDescription");
}

/**
 * <p>The refresh status of a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckRefreshStatus {
  __type?: "TrustedAdvisorCheckRefreshStatus";
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>The amount of time, in milliseconds, until the Trusted Advisor check is eligible
   *             for refresh.</p>
   */
  millisUntilNextRefreshable: number | undefined;

  /**
   * <p>The status of the Trusted Advisor check for which a refresh has been requested:
   *             </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>none:</code> The check is not refreshed or the non-success status
   *                     exceeds the timeout</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>enqueued:</code> The check refresh requests has entered the refresh
   *                     queue</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>processing:</code> The check refresh request is picked up by the rule
   *                     processing engine</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>success:</code> The check is successfully refreshed</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>abandoned:</code> The check refresh has failed</p>
   *             </li>
   *          </ul>
   */
  status: string | undefined;
}

export namespace TrustedAdvisorCheckRefreshStatus {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorCheckRefreshStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCheckRefreshStatus =>
    __isa(o, "TrustedAdvisorCheckRefreshStatus");
}

/**
 * <p>The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.</p>
 */
export interface TrustedAdvisorCheckResult {
  __type?: "TrustedAdvisorCheckResult";
  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is
   *             the only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>The details about each resource listed in the check result.</p>
   */
  flaggedResources: TrustedAdvisorResourceDetail[] | undefined;

  /**
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;
}

export namespace TrustedAdvisorCheckResult {
  export const filterSensitiveLog = (obj: TrustedAdvisorCheckResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCheckResult =>
    __isa(o, "TrustedAdvisorCheckResult");
}

/**
 * <p>A summary of a Trusted Advisor check result, including the alert status, last
 *             refresh, and number of resources examined.</p>
 */
export interface TrustedAdvisorCheckSummary {
  __type?: "TrustedAdvisorCheckSummary";
  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is
   *             the only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>Specifies whether the Trusted Advisor check has flagged resources.</p>
   */
  hasFlaggedResources?: boolean;

  /**
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;
}

export namespace TrustedAdvisorCheckSummary {
  export const filterSensitiveLog = (obj: TrustedAdvisorCheckSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCheckSummary =>
    __isa(o, "TrustedAdvisorCheckSummary");
}

/**
 * <p>The estimated cost savings that might be realized if the recommended actions are
 *             taken.</p>
 */
export interface TrustedAdvisorCostOptimizingSummary {
  __type?: "TrustedAdvisorCostOptimizingSummary";
  /**
   * <p>The estimated monthly savings that might be realized if the recommended actions are
   *             taken.</p>
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * <p>The estimated percentage of savings that might be realized if the recommended
   *             actions are taken.</p>
   */
  estimatedPercentMonthlySavings: number | undefined;
}

export namespace TrustedAdvisorCostOptimizingSummary {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorCostOptimizingSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorCostOptimizingSummary =>
    __isa(o, "TrustedAdvisorCostOptimizingSummary");
}

/**
 * <p>Contains information about a resource identified by a Trusted Advisor
 *             check.</p>
 */
export interface TrustedAdvisorResourceDetail {
  __type?: "TrustedAdvisorResourceDetail";
  /**
   * <p>Specifies whether the AWS resource was ignored by Trusted Advisor because it was
   *             marked as suppressed by the user.</p>
   */
  isSuppressed?: boolean;

  /**
   * <p>Additional information about the identified resource. The exact metadata and its
   *             order can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a>
   *             object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel
   *             download, even in those cases where the UI shows just summary data.</p>
   */
  metadata: string[] | undefined;

  /**
   * <p>The AWS region in which the identified resource is located.</p>
   */
  region?: string;

  /**
   * <p>The unique identifier for the identified resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The status code for the resource identified in the Trusted Advisor check.</p>
   */
  status: string | undefined;
}

export namespace TrustedAdvisorResourceDetail {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorResourceDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorResourceDetail =>
    __isa(o, "TrustedAdvisorResourceDetail");
}

/**
 * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
 */
export interface TrustedAdvisorResourcesSummary {
  __type?: "TrustedAdvisorResourcesSummary";
  /**
   * <p>The number of AWS resources that were flagged (listed) by the Trusted Advisor
   *             check.</p>
   */
  resourcesFlagged: number | undefined;

  /**
   * <p>The number of AWS resources ignored by Trusted Advisor because information was
   *             unavailable.</p>
   */
  resourcesIgnored: number | undefined;

  /**
   * <p>The number of AWS resources that were analyzed by the Trusted Advisor
   *             check.</p>
   */
  resourcesProcessed: number | undefined;

  /**
   * <p>The number of AWS resources ignored by Trusted Advisor because they were marked as
   *             suppressed by the user.</p>
   */
  resourcesSuppressed: number | undefined;
}

export namespace TrustedAdvisorResourcesSummary {
  export const filterSensitiveLog = (
    obj: TrustedAdvisorResourcesSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrustedAdvisorResourcesSummary =>
    __isa(o, "TrustedAdvisorResourcesSummary");
}
