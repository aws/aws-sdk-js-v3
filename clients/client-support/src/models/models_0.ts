// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SupportServiceException as __BaseException } from "./SupportServiceException";

/**
 * @public
 * <p>An attachment to a case communication. The attachment consists of the file name and
 *             the content of the file.</p>
 */
export interface Attachment {
  /**
   * @public
   * <p>The name of the attachment file.</p>
   */
  fileName?: string;

  /**
   * @public
   * <p>The content of the attachment file.</p>
   */
  data?: Uint8Array;
}

/**
 * @public
 */
export interface AddAttachmentsToSetRequest {
  /**
   * @public
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> is not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> is specified, the attachments are added to the
   *             specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * @public
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
 * @public
 * <p>The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.</p>
 */
export interface AddAttachmentsToSetResponse {
  /**
   * @public
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> was not specified, a
   *             new attachment set is created, and the ID of the set is returned in the response. If an
   *                 <code>attachmentSetId</code> was specified, the attachments are added to the
   *             specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * @public
   * <p>The time and date when the attachment set expires.</p>
   */
  expiryTime?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AddCommunicationToCaseRequest {
  /**
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * @public
   * <p>The body of an email communication to add to the support case.</p>
   */
  communicationBody: string | undefined;

  /**
   * @public
   * <p>The email addresses in the CC line of an email to be added to the support case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * @public
   * <p>The ID of a set of one or more attachments for the communication to add to the case.
   *             Create the set by calling <a>AddAttachmentsToSet</a>
   *          </p>
   */
  attachmentSetId?: string;
}

/**
 * @public
 * <p>The result of the <a>AddCommunicationToCase</a> operation.</p>
 */
export interface AddCommunicationToCaseResponse {
  /**
   * @public
   * <p>True if <a>AddCommunicationToCase</a> succeeds. Otherwise, returns an
   *             error.</p>
   */
  result?: boolean;
}

/**
 * @public
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
 * @public
 * <p>The file name and ID of an attachment to a case communication. You can use the ID to
 *             retrieve the attachment with the <a>DescribeAttachment</a> operation.</p>
 */
export interface AttachmentDetails {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  attachmentId?: string;

  /**
   * @public
   * <p>The file name of the attachment.</p>
   */
  fileName?: string;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * @public
   * <p>The title of the support case. The title appears in the <b>Subject</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   */
  subject: string | undefined;

  /**
   * @public
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   */
  serviceCode?: string;

  /**
   * @public
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
   * @public
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   */
  categoryCode?: string;

  /**
   * @public
   * <p>The communication body text that describes the issue. This text appears in the
   *                 <b>Description</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   */
  communicationBody: string | undefined;

  /**
   * @public
   * <p>A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support
   *             identifies the account that creates the case when you specify your Amazon Web Services credentials in
   *             an HTTP POST method or use the <a href="http://aws.amazon.com/tools/">Amazon Web Services SDKs</a>.
   *         </p>
   */
  ccEmailAddresses?: string[];

  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;

  /**
   * @public
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>. If you don't specify a value, the default is
   *                 <code>technical</code>.</p>
   */
  issueType?: string;

  /**
   * @public
   * <p>The ID of a set of one or more attachments for the case. Create the set by using the
   *                 <a>AddAttachmentsToSet</a> operation.</p>
   */
  attachmentSetId?: string;
}

/**
 * @public
 * <p>The support case ID returned by a successful completion of the <a>CreateCase</a> operation.</p>
 */
export interface CreateCaseResponse {
  /**
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string in the following format:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment to return. Attachment IDs are returned by the <a>DescribeCommunications</a> operation.</p>
   */
  attachmentId: string | undefined;
}

/**
 * @public
 * <p>The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.</p>
 */
export interface DescribeAttachmentResponse {
  /**
   * @public
   * <p>This object includes the attachment content and file name.</p>
   *          <p>In the previous response syntax, the value for the <code>data</code> parameter appears
   *             as <code>blob</code>, which is represented as a base64-encoded string. The value for
   *                 <code>fileName</code> is the name of the attachment, such as
   *                 <code>troubleshoot-screenshot.png</code>.</p>
   */
  attachment?: Attachment;
}

/**
 * @public
 */
export interface DescribeCasesRequest {
  /**
   * @public
   * <p>A list of ID numbers of the support cases you want returned. The maximum number of
   *             cases is 100.</p>
   */
  caseIdList?: string[];

  /**
   * @public
   * <p>The ID displayed for a case in the Amazon Web Services Support Center user interface.</p>
   */
  displayId?: string;

  /**
   * @public
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * @public
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * @public
   * <p>Specifies whether to include resolved support cases in the <code>DescribeCases</code>
   *             response. By default, resolved cases aren't included.</p>
   */
  includeResolvedCases?: boolean;

  /**
   * @public
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;

  /**
   * @public
   * <p>Specifies whether to include communications in the <code>DescribeCases</code>
   *             response. By default, communications are included.</p>
   */
  includeCommunications?: boolean;
}

/**
 * @public
 * <p>A communication associated with a support case. The communication consists of the case
 *             ID, the message body, attachment information, the submitter of the communication, and
 *             the date and time of the communication.</p>
 */
export interface Communication {
  /**
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * @public
   * <p>The text of the communication between the customer and Amazon Web Services Support.</p>
   */
  body?: string;

  /**
   * @public
   * <p>The identity of the account that submitted, or responded to, the support case.
   *             Customer entries include the IAM role as well as the email address (for example,
   *             "AdminRole (Role) <janedoe@example.com>). Entries from the Amazon Web Services Support team display
   *             "Amazon Web Services," and don't show an email address.
   *             </p>
   */
  submittedBy?: string;

  /**
   * @public
   * <p>The time the communication was created.</p>
   */
  timeCreated?: string;

  /**
   * @public
   * <p>Information about the attachments to the case communication.</p>
   */
  attachmentSet?: AttachmentDetails[];
}

/**
 * @public
 * <p>The five most recent communications associated with the case.</p>
 */
export interface RecentCaseCommunications {
  /**
   * @public
   * <p>The five most recent communications associated with the case.</p>
   */
  communications?: Communication[];

  /**
   * @public
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

/**
 * @public
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
 * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
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
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;

  /**
   * @public
   * <p>The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric
   *             string.</p>
   */
  displayId?: string;

  /**
   * @public
   * <p>The subject line for the case in the Amazon Web Services Support Center.</p>
   */
  subject?: string;

  /**
   * @public
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
   * @public
   * <p>The code for the Amazon Web Services service. You can get a list of codes and the corresponding
   *             service names by calling <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The category of problem for the support case.</p>
   */
  categoryCode?: string;

  /**
   * @public
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   */
  severityCode?: string;

  /**
   * @public
   * <p>The email address of the account that submitted the case.</p>
   */
  submittedBy?: string;

  /**
   * @public
   * <p>The time that the case was created in the Amazon Web Services Support Center.</p>
   */
  timeCreated?: string;

  /**
   * @public
   * <p>The five most recent communications between you and Amazon Web Services Support Center, including the
   *             IDs of any attachments to the communications. Also includes a <code>nextToken</code>
   *             that you can use to retrieve earlier communications.</p>
   */
  recentCommunications?: RecentCaseCommunications;

  /**
   * @public
   * <p>The email addresses that receive copies of communication about the case.</p>
   */
  ccEmailAddresses?: string[];

  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * @public
 * <p>Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a>
 *             objects and a <code>nextToken</code> that defines a point for pagination in the result
 *             set.</p>
 */
export interface DescribeCasesResponse {
  /**
   * @public
   * <p>The details for the cases that match the request.</p>
   */
  cases?: CaseDetails[];

  /**
   * @public
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeCommunicationsRequest {
  /**
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>The end date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * @public
   * <p>The start date for a filtered date search on support case communications. Case
   *             communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * @public
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The communications returned by the <a>DescribeCommunications</a>
 *             operation.</p>
 */
export interface DescribeCommunicationsResponse {
  /**
   * @public
   * <p>The communications for the case.</p>
   */
  communications?: Communication[];

  /**
   * @public
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsRequest {
  /**
   * @public
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>. If you don't specify a value, the default is
   *                 <code>technical</code>.</p>
   */
  issueType: string | undefined;

  /**
   * @public
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language: string | undefined;

  /**
   * @public
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   */
  categoryCode: string | undefined;
}

/**
 * @public
 * <p>Date and time (UTC) format in RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.</p>
 */
export interface DateInterval {
  /**
   * @public
   * <p>
   *         A JSON object containing start and date time (UTC). Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *         </p>
   */
  startDateTime?: string;

  /**
   * @public
   * <p>
   *         End Date Time (UTC). RFC 3339 format : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'.
   *         </p>
   */
  endDateTime?: string;
}

/**
 * @public
 * <p>Time range object with <code>startTime</code> and <code>endTime</code> range in RFC 3339 format. <code>'HH:mm:ss.SSS'</code>.</p>
 */
export interface SupportedHour {
  /**
   * @public
   * <p>
   *         Start Time. RFC 3339 format <code>'HH:mm:ss.SSS'</code>.
   *         </p>
   */
  startTime?: string;

  /**
   * @public
   * <p>
   *         End Time. RFC 3339 format <code>'HH:mm:ss.SSS'</code>.
   *         </p>
   */
  endTime?: string;
}

/**
 * @public
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
 */
export interface CommunicationTypeOptions {
  /**
   * @public
   * <p>
   *         A string value indicating the communication type. At the moment the type value can assume one of 3 values at the moment chat, web and call.
   *         </p>
   */
  type?: string;

  /**
   * @public
   * <p>
   *         A JSON-formatted list containing time ranges when support is available.
   *         </p>
   */
  supportedHours?: SupportedHour[];

  /**
   * @public
   * <p>
   *         A JSON-formatted list containing date and time ranges for periods without support
   *         </p>
   */
  datesWithoutSupport?: DateInterval[];
}

/**
 * @public
 */
export interface DescribeCreateCaseOptionsResponse {
  /**
   * @public
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
   */
  languageAvailability?: string;

  /**
   * @public
   * <p>
   *         A JSON-formatted array that contains the available communication type options, along with the available support
   *         timeframes for the given inputs.
   *         </p>
   */
  communicationTypes?: CommunicationTypeOptions[];
}

/**
 * @public
 * <p>
 *         You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *         </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * @public
   * <p>A JSON-formatted list of service codes available for Amazon Web Services services.</p>
   */
  serviceCodeList?: string[];

  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * @public
 * <p>A JSON-formatted name/value pair that represents the category name and category code
 *             of the problem, selected from the <a>DescribeServices</a> response for each
 *             Amazon Web Services service.</p>
 */
export interface Category {
  /**
   * @public
   * <p>The category code for the support case.</p>
   */
  code?: string;

  /**
   * @public
   * <p>The category name for the support case.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about an Amazon Web Services service returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface Service {
  /**
   * @public
   * <p>The code for an Amazon Web Services service returned by the <a>DescribeServices</a>
   *             response. The <code>name</code> element contains the corresponding friendly name.</p>
   */
  code?: string;

  /**
   * @public
   * <p>The friendly name for an Amazon Web Services service. The <code>code</code> element contains the
   *             corresponding code.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A list of categories that describe the type of support issue a case describes.
   *             Categories consist of a category name and a category code. Category names and codes are
   *             passed to Amazon Web Services Support when you call <a>CreateCase</a>.</p>
   */
  categories?: Category[];
}

/**
 * @public
 * <p>The list of Amazon Web Services services returned by the <a>DescribeServices</a>
 *             operation.</p>
 */
export interface DescribeServicesResponse {
  /**
   * @public
   * <p>A JSON-formatted list of Amazon Web Services services.</p>
   */
  services?: Service[];
}

/**
 * @public
 */
export interface DescribeSeverityLevelsRequest {
  /**
   * @public
   * <p>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support
   * currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1
   * code for the <code>language</code> parameter if you want support in that language.</p>
   */
  language?: string;
}

/**
 * @public
 * <p>A code and name pair that represents the severity level of a support case. The
 *             available values depend on the support plan for the account. For more information, see
 *                 <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a
 *                 severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 */
export interface SeverityLevel {
  /**
   * @public
   * <p>The code for case severity level.</p>
   *          <p>Valid values: <code>low</code> | <code>normal</code> | <code>high</code> |
   *                 <code>urgent</code> | <code>critical</code>
   *          </p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>The list of severity levels returned by the <a>DescribeSeverityLevels</a>
 *             operation.</p>
 */
export interface DescribeSeverityLevelsResponse {
  /**
   * @public
   * <p>The available severity levels for the support case. Available severity levels are
   *             defined by your service level agreement with Amazon Web Services.</p>
   */
  severityLevels?: SeverityLevel[];
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesRequest {
  /**
   * @public
   * <p>The type of issue for the case. You can specify <code>customer-service</code> or
   *                 <code>technical</code>.</p>
   */
  issueType: string | undefined;

  /**
   * @public
   * <p>The code for the Amazon Web Services service. You can use the <a>DescribeServices</a>
   *             operation to get the possible <code>serviceCode</code> values.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each
   *             Amazon Web Services service defines its own set of category codes.</p>
   */
  categoryCode: string | undefined;
}

/**
 * @public
 * <p>
 *             A JSON-formatted object that contains the available ISO 639-1 language <code>code</code>,
 *             <code>language</code> name and langauge <code>display</code> value. The language code is what should be used
 *             in the <a>CreateCase</a> call.
 *         </p>
 */
export interface SupportedLanguage {
  /**
   * @public
   * <p>
   *         2 digit ISO 639-1 code. e.g. <code>en</code>
   *          </p>
   */
  code?: string;

  /**
   * @public
   * <p>
   *         Full language description e.g. <code>ENGLISH</code>
   *          </p>
   */
  language?: string;

  /**
   * @public
   * <p>
   *             Language display value e.g. <code>ENGLISH</code>
   *          </p>
   */
  display?: string;
}

/**
 * @public
 */
export interface DescribeSupportedLanguagesResponse {
  /**
   * @public
   * <p>
   *         A JSON-formatted array that contains the available ISO 639-1 language codes.
   *         </p>
   */
  supportedLanguages?: SupportedLanguage[];
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * @public
   * <p>The IDs of the Trusted Advisor checks to get the status.</p>
   *          <note>
   *             <p>If you specify the check ID of a check that is automatically refreshed, you might
   *                 see an <code>InvalidParameterValue</code> error.</p>
   *          </note>
   */
  checkIds: string[] | undefined;
}

/**
 * @public
 * <p>The refresh status of a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckRefreshStatus {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The amount of time, in milliseconds, until the Trusted Advisor check is eligible for
   *             refresh.</p>
   */
  millisUntilNextRefreshable: number | undefined;
}

/**
 * @public
 * <p>The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * @public
   * <p>The refresh status of the specified Trusted Advisor checks.</p>
   */
  statuses: TrustedAdvisorCheckRefreshStatus[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The estimated cost savings that might be realized if the recommended operations are
 *             taken.</p>
 */
export interface TrustedAdvisorCostOptimizingSummary {
  /**
   * @public
   * <p>The estimated monthly savings that might be realized if the recommended operations are
   *             taken.</p>
   */
  estimatedMonthlySavings: number | undefined;

  /**
   * @public
   * <p>The estimated percentage of savings that might be realized if the recommended
   *             operations are taken.</p>
   */
  estimatedPercentMonthlySavings: number | undefined;
}

/**
 * @public
 * <p>The container for summary information that relates to the category of the Trusted Advisor
 *             check.</p>
 */
export interface TrustedAdvisorCategorySpecificSummary {
  /**
   * @public
   * <p>The summary information about cost savings for a Trusted Advisor check that is in the Cost
   *             Optimizing category.</p>
   */
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}

/**
 * @public
 * <p>Contains information about a resource identified by a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorResourceDetail {
  /**
   * @public
   * <p>The status code for the resource identified in the Trusted Advisor check.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the identified resource is located.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The unique identifier for the identified resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as
   *             suppressed by the user.</p>
   */
  isSuppressed?: boolean;

  /**
   * @public
   * <p>Additional information about the identified resource. The exact metadata and its order
   *             can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a>
   *             object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel
   *             download, even in those cases where the UI shows just summary data.</p>
   */
  metadata: string[] | undefined;
}

/**
 * @public
 * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
 */
export interface TrustedAdvisorResourcesSummary {
  /**
   * @public
   * <p>The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.</p>
   */
  resourcesProcessed: number | undefined;

  /**
   * @public
   * <p>The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.</p>
   */
  resourcesFlagged: number | undefined;

  /**
   * @public
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because information was
   *             unavailable.</p>
   */
  resourcesIgnored: number | undefined;

  /**
   * @public
   * <p>The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as
   *             suppressed by the user.</p>
   */
  resourcesSuppressed: number | undefined;
}

/**
 * @public
 * <p>The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.</p>
 */
export interface TrustedAdvisorCheckResult {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * @public
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;

  /**
   * @public
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * @public
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;

  /**
   * @public
   * <p>The details about each resource listed in the check result.</p>
   */
  flaggedResources: TrustedAdvisorResourceDetail[] | undefined;
}

/**
 * @public
 * <p>The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  /**
   * @public
   * <p>The detailed results of the Trusted Advisor check.</p>
   */
  result?: TrustedAdvisorCheckResult;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorChecksRequest {
  /**
   * @public
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
 * @public
 * <p>The description and metadata for a Trusted Advisor check.</p>
 */
export interface TrustedAdvisorCheckDescription {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The display name for the Trusted Advisor check.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the Trusted Advisor check, which includes the alert criteria and
   *             recommended operations (contains HTML markup).</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The category of the Trusted Advisor check.</p>
   */
  category: string | undefined;

  /**
   * @public
   * <p>The column headings for the data returned by the Trusted Advisor check. The order of the
   *             headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a>
   *             for the check. <b>Metadata</b> contains all the data that is
   *             shown in the Excel download, even in those cases where the UI shows just summary data.
   *         </p>
   */
  metadata: string[] | undefined;
}

/**
 * @public
 * <p>Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 */
export interface DescribeTrustedAdvisorChecksResponse {
  /**
   * @public
   * <p>Information about all available Trusted Advisor checks.</p>
   */
  checks: TrustedAdvisorCheckDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * @public
   * <p>The IDs of the Trusted Advisor checks.</p>
   */
  checkIds: string[] | undefined;
}

/**
 * @public
 * <p>A summary of a Trusted Advisor check result, including the alert status, last refresh, and
 *             number of resources examined.</p>
 */
export interface TrustedAdvisorCheckSummary {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string | undefined;

  /**
   * @public
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string | undefined;

  /**
   * @public
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or
   *             "not_available".</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Specifies whether the Trusted Advisor check has flagged resources.</p>
   */
  hasFlaggedResources?: boolean;

  /**
   * @public
   * <p>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.</p>
   */
  resourcesSummary: TrustedAdvisorResourcesSummary | undefined;

  /**
   * @public
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the
   *             only category that is currently supported.</p>
   */
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary | undefined;
}

/**
 * @public
 * <p>The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * @public
   * <p>The summary information for the requested Trusted Advisor checks.</p>
   */
  summaries: TrustedAdvisorCheckSummary[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface RefreshTrustedAdvisorCheckRequest {
  /**
   * @public
   * <p>The unique identifier for the Trusted Advisor check to refresh.</p>
   *          <note>
   *             <p>Specifying the check ID of a check that is automatically refreshed causes an
   *                     <code>InvalidParameterValue</code> error.</p>
   *          </note>
   */
  checkId: string | undefined;
}

/**
 * @public
 * <p>The current refresh status of a Trusted Advisor check.</p>
 */
export interface RefreshTrustedAdvisorCheckResponse {
  /**
   * @public
   * <p>The current refresh status for a check, including the amount of time until the check
   *             is eligible for refresh.</p>
   */
  status: TrustedAdvisorCheckRefreshStatus | undefined;
}

/**
 * @public
 */
export interface ResolveCaseRequest {
  /**
   * @public
   * <p>The support case ID requested or returned in the call. The case ID is an alphanumeric
   *             string formatted as shown in this example:
   *                 case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>
   *          </p>
   */
  caseId?: string;
}

/**
 * @public
 * <p>The status of the case returned by the <a>ResolveCase</a> operation.</p>
 */
export interface ResolveCaseResponse {
  /**
   * @public
   * <p>The status of the case when the <a>ResolveCase</a> request was sent.</p>
   */
  initialCaseStatus?: string;

  /**
   * @public
   * <p>The status of the case after the <a>ResolveCase</a> request was
   *             processed.</p>
   */
  finalCaseStatus?: string;
}
