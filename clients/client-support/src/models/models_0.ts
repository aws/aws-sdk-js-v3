// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SupportServiceException as __BaseException } from "./SupportServiceException";

/**
 * <p>An attachment to a case communication. The attachment consists of the file name and
 *             the content of the file.</p>
 */
export interface Attachment {
  /**
   * <p>The name of the attachment file.</p>
   */
  fileName?: string;

  /**
   * <p>The content of the attachment file.</p>
   */
  data?: Uint8Array;
}

export interface AddAttachmentsToSetRequest {
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> is not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> is specified, the attachments are added to the
   *             specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>One or more attachments to add to the set. You can add up to three attachments per
   *             set. The size limit is 5 MB per attachment.</p>
   *          <p>In the <code>Attachment</code> object, use the <code>data</code> parameter to specify
   *             the contents of the attachment file. In the previous request syntax, the value for
   *                 <code>data</code> appear as <code>blob</code>, which is represented as a
   *             base64-encoded string. The value for <code>fileName</code> is the name of the
   *             attachment, such as <code>troubleshoot-screenshot.png</code>.</p>
   */
  attachments: Attachment[] | undefined;
}

/**
 * <p>The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.</p>
 */
export interface AddAttachmentsToSetResponse {
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> was not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> was specified, the attachments are added to the
   *             specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>The time and date when the attachment set expires.</p>
   */
  expiryTime?: string;
}

/**
 * <p>The limit for the number of attachment sets created in a short period of time has been
 *             exceeded.</p>
 */
export class AttachmentLimitExceeded extends __BaseException {
  readonly name: "AttachmentLimitExceeded" = "AttachmentLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentLimitExceeded, __BaseException>) {
    super({
      name: "AttachmentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentLimitExceeded.prototype);
  }
}

/**
 * <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 */
export class AttachmentSetExpired extends __BaseException {
  readonly name: "AttachmentSetExpired" = "AttachmentSetExpired";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetExpired, __BaseException>) {
    super({
      name: "AttachmentSetExpired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetExpired.prototype);
  }
}

/**
 * <p>An attachment set with the specified ID could not be found.</p>
 */
export class AttachmentSetIdNotFound extends __BaseException {
  readonly name: "AttachmentSetIdNotFound" = "AttachmentSetIdNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetIdNotFound, __BaseException>) {
    super({
      name: "AttachmentSetIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetIdNotFound.prototype);
  }
}

/**
 * <p>A limit for the size of an attachment set has been exceeded. The limits are three
 *             attachments and 5 MB per attachment.</p>
 */
export class AttachmentSetSizeLimitExceeded extends __BaseException {
  readonly name: "AttachmentSetSizeLimitExceeded" = "AttachmentSetSizeLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetSizeLimitExceeded, __BaseException>) {
    super({
      name: "AttachmentSetSizeLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetSizeLimitExceeded.prototype);
  }
}

/**
 * <p>An internal server error occurred.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

export interface AddCommunicationToCaseRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The body of an email communication to add to the support case.</p>
   */
  communicationBody: string | undefined;

  /**
   * <p>The email addresses in the CC line of an email to be added to the support case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The ID of a set of one or more attachments for the communication to add to the case.
   *             Create the set by calling <a>AddAttachmentsToSet</a>
   *          </p>
   */
  attachmentSetId?: string;
}

/**
 * <p>The result of the <a>AddCommunicationToCase</a> operation.</p>
 */
export interface AddCommunicationToCaseResponse {
  /**
   * <p>True if <a>AddCommunicationToCase</a> succeeds. Otherwise, returns an
   *             error.</p>
   */
  result?: boolean;
}

/**
 * <p>The requested <code>caseId</code> couldn't be located.</p>
 */
export class CaseIdNotFound extends __BaseException {
  readonly name: "CaseIdNotFound" = "CaseIdNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseIdNotFound, __BaseException>) {
    super({
      name: "CaseIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseIdNotFound.prototype);
  }
}

/**
 * <p>The file name and ID of an attachment to a case communication. You can use the ID to
 *             retrieve the attachment with the <a>DescribeAttachment</a> operation.</p>
 */
export interface AttachmentDetails {
  /**
   * <p>The ID of the attachment.</p>
   */
  attachmentId?: string;

  /**
   * <p>The file name of the attachment.</p>
   */
  fileName?: string;
}

/**
 * <p>An attachment with the specified ID could not be found.</p>
 */
export class AttachmentIdNotFound extends __BaseException {
  readonly name: "AttachmentIdNotFound" = "AttachmentIdNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentIdNotFound, __BaseException>) {
    super({
      name: "AttachmentIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentIdNotFound.prototype);
  }
}

/**
 * <p>The case creation limit for the account has been exceeded.</p>
 */
export class CaseCreationLimitExceeded extends __BaseException {
  readonly name: "CaseCreationLimitExceeded" = "CaseCreationLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseCreationLimitExceeded, __BaseException>) {
    super({
      name: "CaseCreationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseCreationLimitExceeded.prototype);
  }
}

export interface CreateCaseRequest {
  /**
   * <p>The title of the support case. The title appears in the <b>Subject</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   */
  subject: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   */
  serviceCode?: string;

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
   */
  severityCode?: string;

  /**
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   */
  categoryCode?: string;

  /**
   * <p>The communication body text that describes the issue. This text appears in the
   *                 <b>Description</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   */
  communicationBody: string | undefined;

  /**
   * <p>A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support
   *             identifies the account that creates the case when you specify your Amazon Web Services credentials in
   *             an HTTP POST method or use the <a href="http://aws.amazon.com/tools/">Amazon Web Services SDKs</a>.
   *         </p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;

  /**
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>. If you don't specify a value, the default is
   *                 <code>technical</code>.</p>
   */
  issueType?: string;

  /**
   * <p>The ID of a set of one or more attachments for the case. Create the set by using the
   *                 <a>AddAttachmentsToSet</a> operation.</p>
   */
  attachmentSetId?: string;
}

/**
 * <p>The support case ID returned by a successful completion of the <a>CreateCase</a> operation.</p>
 */
export interface CreateCaseResponse {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string in the following format:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

/**
 * <p>The limit for the number of <a>DescribeAttachment</a> requests in a short
 *             period of time has been exceeded.</p>
 */
export class DescribeAttachmentLimitExceeded extends __BaseException {
  readonly name: "DescribeAttachmentLimitExceeded" = "DescribeAttachmentLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeAttachmentLimitExceeded, __BaseException>) {
    super({
      name: "DescribeAttachmentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeAttachmentLimitExceeded.prototype);
  }
}

export interface DescribeAttachmentRequest {
  /**
   * <p>The ID of the attachment to return. Attachment IDs are returned by the <a>DescribeCommunications</a> operation.</p>
   */
  attachmentId: string | undefined;
}

/**
 * <p>The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.</p>
 */
export interface DescribeAttachmentResponse {
  /**
   * <p>This object includes the attachment content and file name.</p>
   *          <p>In the previous response syntax, the value for the <code>data</code> parameter appears
   *             as <code>blob</code>, which is represented as a base64-encoded string. The value for
   *                 <code>fileName</code> is the name of the attachment, such as
   *                 <code>troubleshoot-screenshot.png</code>.</p>
   */
  attachment?: Attachment;
}

export interface DescribeCasesRequest {
  /**
   * <p>A list of ID numbers of the support cases you want returned. The maximum number of
   *             cases is 100.</p>
   */
  caseIdList?: string[];

  /**
   * <p>The ID displayed for a case in the Amazon Web Services Support Center user interface.</p>
   */
  displayId?: string;

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
   * <p>Specifies whether to include resolved support cases in the <code>DescribeCases</code>
   *             response. By default, resolved cases aren't included.</p>
   */
  includeResolvedCases?: boolean;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;

  /**
   * <p>Specifies whether to include communications in the <code>DescribeCases</code>
   *             response. By default, communications are included.</p>
   */
  includeCommunications?: boolean;
}

/**
 * <p>A communication associated with a support case. The communication consists of the case
 *             ID, the message body, attachment information, the submitter of the communication, and
 *             the date and time of the communication.</p>
 */
export interface Communication {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The text of the communication between the customer and Amazon Web Services Support.</p>
   */
  body?: string;

  /**
   * <p>The identity of the account that submitted, or responded to, the support case.
   *             Customer entries include the role or IAM user as well as the email address. For example,
   *             "AdminRole (Role) <janedoe@example.com>. Entries from the Amazon Web Services Support team display
   *             "Amazon Web Services," and don't show an email address.
   *             </p>
   */
  submittedBy?: string;

  /**
   * <p>The time the communication was created.</p>
   */
  timeCreated?: string;

  /**
   * <p>Information about the attachments to the case communication.</p>
   */
  attachmentSet?: AttachmentDetails[];
}

/**
 * <p>The five most recent communications associated with the case.</p>
 */
export interface RecentCaseCommunications {
  /**
   * <p>The five most recent communications associated with the case.</p>
   */
  communications?: Communication[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
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
 *                         case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p>
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
 * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
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
 */
export interface CaseDetails {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * <p>The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric
   *             string.</p>
   */
  displayId?: string;

  /**
   * <p>The subject line for the case in the Amazon Web Services Support Center.</p>
   */
  subject?: string;

  /**
   * <p>The status of the case.</p>
   *          <p>Valid values:</p>
   *          <ul>
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
   */
  status?: string;

  /**
   * <p>The code for the Amazon Web Services service. You can get a list of codes and the corresponding
   *             service names by calling <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * <p>The category of problem for the support case.</p>
   */
  categoryCode?: string;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   */
  severityCode?: string;

  /**
   * <p>The email address of the account that submitted the case.</p>
   */
  submittedBy?: string;

  /**
   * <p>The time that the case was created in the Amazon Web Services Support Center.</p>
   */
  timeCreated?: string;

  /**
   * <p>The five most recent communications between you and Amazon Web Services Support Center, including the
   *             IDs of any attachments to the communications. Also includes a <code>nextToken</code>
   *             that you can use to retrieve earlier communications.</p>
   */
  recentCommunications?: RecentCaseCommunications;

  /**
   * <p>The email addresses that receive copies of communication about the case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * <p>Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a>
 *             objects and a <code>nextToken</code> that defines a point for pagination in the result
 *             set.</p>
 */
export interface DescribeCasesResponse {
  /**
   * <p>The details for the cases that match the request.</p>
   */
  cases?: CaseDetails[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export interface DescribeCommunicationsRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId: string | undefined;

  /**
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;
}

/**
 * <p>The communications returned by the <a>DescribeCommunications</a>
 *             operation.</p>
 */
export interface DescribeCommunicationsResponse {
  /**
   * <p>The communications for the case.</p>
   */
  communications?: Communication[];

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export interface DescribeServicesRequest {
  /**
   * <p>A JSON-formatted list of service codes available for Amazon Web Services services.</p>
   */
  serviceCodeList?: string[];

  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * <p>A JSON-formatted name/value pair that represents the category name and category code
 *             of the problem, selected from the <a>DescribeServices</a> response for each
 *             Amazon Web Services service.</p>
 */
export interface Category {
  /**
   * <p>The category code for the support case.</p>
   */
  code?: string;

  /**
   * <p>The category name for the support case.</p>
   */
  name?: string;
}

/**
 * <p>Information about an Amazon Web Services service returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface Service {
  /**
   * <p>The code for an Amazon Web Services service returned by the <a>DescribeServices</a>
   *             response. The <code>name</code> element contains the corresponding friendly name.</p>
   */
  code?: string;

  /**
   * <p>The friendly name for an Amazon Web Services service. The <code>code</code> element contains the
   *             corresponding code.</p>
   */
  name?: string;

  /**
   * <p>A list of categories that describe the type of support issue a case describes.
   *             Categories consist of a category name and a category code. Category names and codes are
   *             passed to Amazon Web Services Support when you call <a>CreateCase</a>.</p>
   */
  categories?: Category[];
}

/**
 * <p>The list of Amazon Web Services services returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface DescribeServicesResponse {
  /**
   * <p>A JSON-formatted list of Amazon Web Services services.</p>
   */
  services?: Service[];
}

export interface DescribeSeverityLevelsRequest {
  /**
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * <p>A code and name pair that represents the severity level of a support case. The
 *             available values depend on the support plan for the account. For more information, see
 *                 <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a
 *                 severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 */
export interface SeverityLevel {
  /**
   * <p>The code for case severity level.</p>
   *          <p>Valid values: <code>low</code> | <code>normal</code> | <code>high</code> |
   *                 <code>urgent</code> | <code>critical</code>
   *          </p>
   */
  code?: string;

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
   */
  name?: string;
}

/**
 * <p>The list of severity levels returned by the <a>DescribeSeverityLevels</a>
 *             operation.</p>
 */
export interface DescribeSeverityLevelsResponse {
  /**
   * <p>The available severity levels for the support case. Available severity levels are
   *             defined by your service level agreement with Amazon Web Services.</p>
   */
  severityLevels?: SeverityLevel[];
}

export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * <p>The IDs of the Trusted Advisor checks to get the status.</p>
   *          <note>
   *             <p>If you specify the check ID of a check that is automatically refreshed, you might
   *                 see an <code>InvalidParameterValue</code> error.</p>
   *          </note>
   */
  checkIds: string[] | undefined;
}

/**
 * <p>The refresh status of a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckRefreshStatus {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
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
   */
  status: string | undefined;

  /**
   * <p>The amount of time, in milliseconds, until the Trusted Advisor check is eligible for
   *             refresh.</p>
   */
  millisUntilNextRefreshable: number | undefined;
}

/**
 * <p>The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * <p>The refresh status of the specified Trusted Advisor checks.</p>
   */
  statuses: TrustedAdvisorCheckRefreshStatus[] | undefined;
}

/**
 * <p></p>
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
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
   */
  language?: string;
}

/**
 * <p>The estimated cost savings that might be realized if the recommended operations are
 *             taken.</p>
 */
export interface TrustedAdvisorCostOptimizingSummary {
  /**
   * <p>The estimated monthly savings that might be realized if the recommended operations are
   *             taken.</p>
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * <p>The estimated percentage of savings that might be realized if the recommended
   *             operations are taken.</p>
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * <p>The container for summary information that relates to the category of the Trusted Advisor
 *             check.</p>
 */
export interface TrustedAdvisorCategorySpecificSummary {
  /**
   * <p>The summary information about cost savings for a Trusted Advisor check that is in the Cost
   *             Optimizing category.</p>
   */
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}

/**
 * <p>Contains information about a resource identified by a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorResourceDetail {
  /**
   * <p>The status code for the resource identified in the Trusted Advisor check.</p>
   */
  status: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the identified resource is located.</p>
   */
  region?: string;

  /**
   * <p>The unique identifier for the identified resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as
   *             suppressed by the user.</p>
   */
  isSuppressed?: boolean;

  /**
   * <p>Additional information about the identified resource. The exact metadata and its order
   *             can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a>
   *             object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel
   *             download, even in those cases where the UI shows just summary data.</p>
   */
  metadata: string[] | undefined;
}

/**
 * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
 */
export interface TrustedAdvisorResourcesSummary {
  /**
   * <p>The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.</p>
   */
  resourcesProcessed: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.</p>
   */
  resourcesFlagged: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because information was
   *             unavailable.</p>
   */
  resourcesIgnored: number | undefined;

  /**
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as
   *             suppressed by the user.</p>
   */
  resourcesSuppressed: number | undefined;
}

/**
 * <p>The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.</p>
 */
export interface TrustedAdvisorCheckResult {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * <p>The details about each resource listed in the check result.</p>
   */
  flaggedResources: TrustedAdvisorResourceDetail[] | undefined;
}

/**
 * <p>The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  /**
   * <p>The detailed results of the Trusted Advisor check.</p>
   */
  result?: TrustedAdvisorCheckResult;
}

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
   */
  language: string | undefined;
}

/**
 * <p>The description and metadata for a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckDescription {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  id: string | undefined;

  /**
   * <p>The display name for the Trusted Advisor check.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the Trusted Advisor check, which includes the alert criteria and
   *             recommended operations (contains HTML markup).</p>
   */
  description: string | undefined;

  /**
   * <p>The category of the Trusted Advisor check.</p>
   */
  category: string | undefined;

  /**
   * <p>The column headings for the data returned by the Trusted Advisor check. The order of the
   *             headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a>
   *             for the check. <b>Metadata</b> contains all the data that is
   *             shown in the Excel download, even in those cases where the UI shows just summary data.
   *         </p>
   */
  metadata: string[] | undefined;
}

/**
 * <p>Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 */
export interface DescribeTrustedAdvisorChecksResponse {
  /**
   * <p>Information about all available Trusted Advisor checks.</p>
   */
  checks: TrustedAdvisorCheckDescription[] | undefined;
}

export interface DescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * <p>The IDs of the Trusted Advisor checks.</p>
   */
  checkIds: string[] | undefined;
}

/**
 * <p>A summary of a Trusted Advisor check result, including the alert status, last refresh, and
 *             number of resources examined.</p>
 */
export interface TrustedAdvisorCheckSummary {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * <p>Specifies whether the Trusted Advisor check has flagged resources.</p>
   */
  hasFlaggedResources?: boolean;

  /**
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;
}

/**
 * <p>The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * <p>The summary information for the requested Trusted Advisor checks.</p>
   */
  summaries: TrustedAdvisorCheckSummary[] | undefined;
}

/**
 * <p></p>
 */
export interface RefreshTrustedAdvisorCheckRequest {
  /**
   * <p>The unique identifier for the Trusted Advisor check to refresh.</p>
   *          <note>
   *             <p>Specifying the check ID of a check that is automatically refreshed causes an
   *                     <code>InvalidParameterValue</code> error.</p>
   *          </note>
   */
  checkId: string | undefined;
}

/**
 * <p>The current refresh status of a Trusted Advisor check.</p>
 */
export interface RefreshTrustedAdvisorCheckResponse {
  /**
   * <p>The current refresh status for a check, including the amount of time until the check
   *             is eligible for refresh.</p>
   */
  status: TrustedAdvisorCheckRefreshStatus | undefined;
}

export interface ResolveCaseRequest {
  /**
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

/**
 * <p>The status of the case returned by the <a>ResolveCase</a> operation.</p>
 */
export interface ResolveCaseResponse {
  /**
   * <p>The status of the case when the <a>ResolveCase</a> request was sent.</p>
   */
  initialCaseStatus?: string;

  /**
   * <p>The status of the case after the <a>ResolveCase</a> request was
   *             processed.</p>
   */
  finalCaseStatus?: string;
}

/**
 * @internal
 */
export const AttachmentFilterSensitiveLog = (obj: Attachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAttachmentsToSetRequestFilterSensitiveLog = (obj: AddAttachmentsToSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAttachmentsToSetResponseFilterSensitiveLog = (obj: AddAttachmentsToSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCommunicationToCaseRequestFilterSensitiveLog = (obj: AddCommunicationToCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCommunicationToCaseResponseFilterSensitiveLog = (obj: AddCommunicationToCaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentDetailsFilterSensitiveLog = (obj: AttachmentDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCaseRequestFilterSensitiveLog = (obj: CreateCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCaseResponseFilterSensitiveLog = (obj: CreateCaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttachmentRequestFilterSensitiveLog = (obj: DescribeAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAttachmentResponseFilterSensitiveLog = (obj: DescribeAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCasesRequestFilterSensitiveLog = (obj: DescribeCasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommunicationFilterSensitiveLog = (obj: Communication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecentCaseCommunicationsFilterSensitiveLog = (obj: RecentCaseCommunications): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaseDetailsFilterSensitiveLog = (obj: CaseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCasesResponseFilterSensitiveLog = (obj: DescribeCasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCommunicationsRequestFilterSensitiveLog = (obj: DescribeCommunicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCommunicationsResponseFilterSensitiveLog = (obj: DescribeCommunicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServicesRequestFilterSensitiveLog = (obj: DescribeServicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoryFilterSensitiveLog = (obj: Category): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServicesResponseFilterSensitiveLog = (obj: DescribeServicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSeverityLevelsRequestFilterSensitiveLog = (obj: DescribeSeverityLevelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SeverityLevelFilterSensitiveLog = (obj: SeverityLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSeverityLevelsResponseFilterSensitiveLog = (obj: DescribeSeverityLevelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckRefreshStatusesRequestFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckRefreshStatusesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCheckRefreshStatusFilterSensitiveLog = (obj: TrustedAdvisorCheckRefreshStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckRefreshStatusesResponseFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckRefreshStatusesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckResultRequestFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckResultRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCostOptimizingSummaryFilterSensitiveLog = (
  obj: TrustedAdvisorCostOptimizingSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCategorySpecificSummaryFilterSensitiveLog = (
  obj: TrustedAdvisorCategorySpecificSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorResourceDetailFilterSensitiveLog = (obj: TrustedAdvisorResourceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorResourcesSummaryFilterSensitiveLog = (obj: TrustedAdvisorResourcesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCheckResultFilterSensitiveLog = (obj: TrustedAdvisorCheckResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckResultResponseFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckResultResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorChecksRequestFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorChecksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCheckDescriptionFilterSensitiveLog = (obj: TrustedAdvisorCheckDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorChecksResponseFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorChecksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckSummariesRequestFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckSummariesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustedAdvisorCheckSummaryFilterSensitiveLog = (obj: TrustedAdvisorCheckSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustedAdvisorCheckSummariesResponseFilterSensitiveLog = (
  obj: DescribeTrustedAdvisorCheckSummariesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RefreshTrustedAdvisorCheckRequestFilterSensitiveLog = (obj: RefreshTrustedAdvisorCheckRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RefreshTrustedAdvisorCheckResponseFilterSensitiveLog = (obj: RefreshTrustedAdvisorCheckResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolveCaseRequestFilterSensitiveLog = (obj: ResolveCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolveCaseResponseFilterSensitiveLog = (obj: ResolveCaseResponse): any => ({
  ...obj,
});
