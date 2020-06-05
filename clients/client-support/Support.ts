import { SupportClient } from "./SupportClient";
import {
  AddAttachmentsToSetCommand,
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput
} from "./commands/AddAttachmentsToSetCommand";
import {
  AddCommunicationToCaseCommand,
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput
} from "./commands/AddCommunicationToCaseCommand";
import {
  CreateCaseCommand,
  CreateCaseCommandInput,
  CreateCaseCommandOutput
} from "./commands/CreateCaseCommand";
import {
  DescribeAttachmentCommand,
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput
} from "./commands/DescribeAttachmentCommand";
import {
  DescribeCasesCommand,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput
} from "./commands/DescribeCasesCommand";
import {
  DescribeCommunicationsCommand,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput
} from "./commands/DescribeCommunicationsCommand";
import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput
} from "./commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommand,
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput
} from "./commands/DescribeSeverityLevelsCommand";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommand,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
} from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import {
  DescribeTrustedAdvisorCheckResultCommand,
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput
} from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommand,
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput
} from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  DescribeTrustedAdvisorChecksCommand,
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput
} from "./commands/DescribeTrustedAdvisorChecksCommand";
import {
  RefreshTrustedAdvisorCheckCommand,
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput
} from "./commands/RefreshTrustedAdvisorCheckCommand";
import {
  ResolveCaseCommand,
  ResolveCaseCommandInput,
  ResolveCaseCommandOutput
} from "./commands/ResolveCaseCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Support</fullname>
 *         <p>The AWS Support API reference is intended for programmers who need detailed
 *             information about the AWS Support operations and data types. This service enables you to
 *             manage your AWS Support cases programmatically. It uses HTTP methods that return results
 *             in JSON format.</p>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Service names, issue categories, and available severity
 *                         levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case creation, case details, and case
 *                         resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve
 *                     information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add
 *                     communications and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service
 *             for Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun
 *                     a specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *                 AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
export class Support extends SupportClient {
  /**
   * <p>Adds one or more attachments to an attachment set. If an
   *                 <code>attachmentSetId</code> is not specified, a new attachment set is created, and
   *             the ID of the set is returned in the response. If an <code>attachmentSetId</code> is
   *             specified, the attachments are added to the specified set, if it exists.</p>
   *         <p>An attachment set is a temporary container for attachments that are to be added to
   *             a case or case communication. The set is available for one hour after it is created; the
   *                 <code>expiryTime</code> returned in the response indicates when the set expires. The
   *             maximum number of attachments in a set is 3, and the maximum size of any attachment in
   *             the set is 5 MB.</p>
   */
  public addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddAttachmentsToSetCommandOutput>;
  public addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): void;
  public addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): void;
  public addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddAttachmentsToSetCommandOutput) => void),
    cb?: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): Promise<AddAttachmentsToSetCommandOutput> | void {
    const command = new AddAttachmentsToSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds additional customer communication to an AWS Support case. You use the
   *                 <code>caseId</code> value to identify the case to add communication to. You can list
   *             a set of email addresses to copy on the communication using the
   *                 <code>ccEmailAddresses</code> value. The <code>communicationBody</code> value
   *             contains the text of the communication.</p>
   *         <p>The response indicates the success or failure of the request.</p>
   *         <p>This operation implements a subset of the features of the AWS Support
   *             Center.</p>
   */
  public addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCommunicationToCaseCommandOutput>;
  public addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): void;
  public addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): void;
  public addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddCommunicationToCaseCommandOutput) => void),
    cb?: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): Promise<AddCommunicationToCaseCommandOutput> | void {
    const command = new AddCommunicationToCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new case in the AWS Support Center. This operation is modeled on the
   *             behavior of the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. Its parameters require you to specify the following
   *             information:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>issueType.</b> The type of issue for the case. You
   *                     can specify either "customer-service" or "technical." If you do not indicate a
   *                     value, the default is "technical."</p>
   *                 <note>
   *                     <p>Service limit increases are not supported by the Support API; you must
   *                         submit service limit increase requests in <a href="https://console.aws.amazon.com/support">Support Center</a>.</p>
   *                     <p>The <code>caseId</code> is not the <code>displayId</code> that appears
   *                         in <a href="https://console.aws.amazon.com/support">Support Center</a>. You can use
   *                         the <a>DescribeCases</a> API to get the
   *                         <code>displayId</code>.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>serviceCode.</b> The code for an AWS service. You
   *                     can get the possible <code>serviceCode</code> values by calling <a>DescribeServices</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>categoryCode.</b> The category for the service
   *                     defined for the <code>serviceCode</code> value. You also get the category code
   *                     for a service by calling <a>DescribeServices</a>. Each AWS service
   *                     defines its own set of category codes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>severityCode.</b> A value that indicates the
   *                     urgency of the case, which in turn determines the response time according to
   *                     your service level agreement with AWS Support. You can get the possible
   *                         <code>severityCode</code> values by calling <a>DescribeSeverityLevels</a>. For more information about the meaning
   *                     of the codes, see <a>SeverityLevel</a> and <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing
   *                         a Severity</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>subject.</b> The <b>Subject</b> field on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>communicationBody.</b> The <b>Description</b> field on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a>
   *                     page.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>attachmentSetId.</b> The ID of a set of attachments
   *                     that has been created by using <a>AddAttachmentsToSet</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>language.</b> The human language in which AWS
   *                     Support handles the case. English and Japanese are currently
   *                     supported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>ccEmailAddresses.</b> The AWS Support Center
   *                         <b>CC</b> field on the <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. You can list email
   *                     addresses to be copied on any correspondence about the case. The account that
   *                     opens the case is already identified by passing the AWS Credentials in the HTTP
   *                     POST method or in a method or function call from one of the programming
   *                     languages supported by an <a href="http://aws.amazon.com/tools/">AWS SDK</a>.
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>To add additional communication or attachments to an existing case, use <a>AddCommunicationToCase</a>.</p>
   *         </note>
   *         <p>A successful <a>CreateCase</a> request returns an AWS Support case
   *             number. Case numbers are used by the <a>DescribeCases</a> operation to
   *             retrieve existing AWS Support cases.</p>
   */
  public createCase(
    args: CreateCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCaseCommandOutput>;
  public createCase(
    args: CreateCaseCommandInput,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  public createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  public createCase(
    args: CreateCaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCaseCommandOutput) => void),
    cb?: (err: any, data?: CreateCaseCommandOutput) => void
  ): Promise<CreateCaseCommandOutput> | void {
    const command = new CreateCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the attachment that has the specified ID. Attachment IDs are generated by
   *             the case management system when you add an attachment to a case or case communication.
   *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
   *             returned by the <a>DescribeCommunications</a> operation.</p>
   */
  public describeAttachment(
    args: DescribeAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttachmentCommandOutput>;
  public describeAttachment(
    args: DescribeAttachmentCommandInput,
    cb: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): void;
  public describeAttachment(
    args: DescribeAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): void;
  public describeAttachment(
    args: DescribeAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAttachmentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): Promise<DescribeAttachmentCommandOutput> | void {
    const command = new DescribeAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of cases that you specify by passing one or more case IDs. In
   *             addition, you can filter the cases by date by setting values for the
   *                 <code>afterTime</code> and <code>beforeTime</code> request parameters. You can set
   *             values for the <code>includeResolvedCases</code> and <code>includeCommunications</code>
   *             request parameters to control how much information is returned.</p>
   *         <p>Case data is available for 12 months after creation. If a case was created more
   *             than 12 months ago, a request for data might cause an error.</p>
   *         <p>The response returns the following in JSON format:</p>
   *         <ul>
   *             <li>
   *                 <p>One or more <a>CaseDetails</a> data types.</p>
   *             </li>
   *             <li>
   *                 <p>One or more <code>nextToken</code> values, which specify where to paginate
   *                     the returned records represented by the <code>CaseDetails</code>
   *                     objects.</p>
   *             </li>
   *          </ul>
   */
  public describeCases(
    args: DescribeCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCasesCommandOutput>;
  public describeCases(
    args: DescribeCasesCommandInput,
    cb: (err: any, data?: DescribeCasesCommandOutput) => void
  ): void;
  public describeCases(
    args: DescribeCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCasesCommandOutput) => void
  ): void;
  public describeCases(
    args: DescribeCasesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCasesCommandOutput) => void
  ): Promise<DescribeCasesCommandOutput> | void {
    const command = new DescribeCasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns communications (and attachments) for one or more support cases. You can use
   *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
   *             can use the <code>caseId</code> parameter to restrict the results to a particular
   *             case.</p>
   *         <p>Case data is available for 12 months after creation. If a case was created more
   *             than 12 months ago, a request for data might cause an error.</p>
   *         <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
   *             control the pagination of the result set. Set <code>maxResults</code> to the number of
   *             cases you want displayed on each page, and use <code>nextToken</code> to specify the
   *             resumption of pagination.</p>
   */
  public describeCommunications(
    args: DescribeCommunicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommunicationsCommandOutput>;
  public describeCommunications(
    args: DescribeCommunicationsCommandInput,
    cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): void;
  public describeCommunications(
    args: DescribeCommunicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): void;
  public describeCommunications(
    args: DescribeCommunicationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCommunicationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): Promise<DescribeCommunicationsCommandOutput> | void {
    const command = new DescribeCommunicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the current list of AWS services and a list of service categories that
   *             applies to each one. You then use service names and categories in your <a>CreateCase</a> requests. Each AWS service has its own set of
   *             categories.</p>
   *         <p>The service codes and category codes correspond to the values that are displayed in
   *             the <b>Service</b> and <b>Category</b> drop-down lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those
   *             fields, however, do not necessarily match the service codes and categories returned by
   *             the <code>DescribeServices</code> request. Always use the service codes and categories
   *             obtained programmatically. This practice ensures that you always have the most recent
   *             set of service and category codes.</p>
   */
  public describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  public describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeServicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServicesCommandOutput) => void
  ): Promise<DescribeServicesCommandOutput> | void {
    const command = new DescribeServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of severity levels that you can assign to an AWS Support case. The
   *             severity level for a case is also a field in the <a>CaseDetails</a> data type
   *             included in any <a>CreateCase</a> request.</p>
   */
  public describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSeverityLevelsCommandOutput>;
  public describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): void;
  public describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): void;
  public describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSeverityLevelsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): Promise<DescribeSeverityLevelsCommandOutput> | void {
    const command = new DescribeSeverityLevelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the refresh status of the Trusted Advisor checks that have the specified
   *             check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p>
   *         <note>
   *             <p>Some checks are refreshed automatically, and their refresh statuses cannot be
   *                 retrieved by using this operation. Use of the
   *                     <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation for these
   *                 checks causes an <code>InvalidParameterValue</code> error.</p>
   *         </note>
   */
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
    ) => void
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the results of the Trusted Advisor check that has the specified check ID.
   *             Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p>
   *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
   *             contains these three objects:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorCategorySpecificSummary</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorResourceDetail</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorResourcesSummary</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>In addition, the response contains these fields:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>status.</b> The alert status of the check: "ok"
   *                     (green), "warning" (yellow), "error" (red), or "not_available".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>timestamp.</b> The time of the last refresh of the
   *                     check.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>checkId.</b> The unique identifier for the
   *                     check.</p>
   *             </li>
   *          </ul>
   */
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput>;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckResultCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckResultCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeTrustedAdvisorCheckResultCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeTrustedAdvisorCheckResultCommandOutput
    ) => void
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about all available Trusted Advisor checks, including name, ID,
   *             category, description, and metadata. You must specify a language code; English ("en")
   *             and Japanese ("ja") are currently supported. The response contains a <a>TrustedAdvisorCheckDescription</a> for each check. The region must be set to
   *             us-east-1.</p>
   */
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput>;
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): void;
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): void;
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput> | void {
    const command = new DescribeTrustedAdvisorChecksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the summaries of the results of the Trusted Advisor checks that have the
   *             specified check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p>
   *         <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
   *             objects.</p>
   */
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput>;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckSummariesCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckSummariesCommandOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeTrustedAdvisorCheckSummariesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeTrustedAdvisorCheckSummariesCommandOutput
    ) => void
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a refresh of the Trusted Advisor check that has the specified check ID.
   *             Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p>
   *         <note>
   *             <p>Some checks are refreshed automatically, and they cannot be refreshed by using
   *                 this operation. Use of the <code>RefreshTrustedAdvisorCheck</code> operation for
   *                 these checks causes an <code>InvalidParameterValue</code> error.</p>
   *         </note>
   *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object,
   *             which contains these fields:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>status.</b> The refresh status of the check:
   *                     </p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>none:</code> The check is not refreshed or the non-success
   *                             status exceeds the timeout</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>enqueued:</code> The check refresh requests has entered the
   *                             refresh queue</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>processing:</code> The check refresh request is picked up by
   *                             the rule processing engine</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>success:</code> The check is successfully refreshed</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>abandoned:</code> The check refresh has failed</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>millisUntilNextRefreshable.</b> The amount of time,
   *                     in milliseconds, until the check is eligible for refresh.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>checkId.</b> The unique identifier for the
   *                     check.</p>
   *             </li>
   *          </ul>
   */
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput>;
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): void;
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): void;
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void),
    cb?: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput> | void {
    const command = new RefreshTrustedAdvisorCheckCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Takes a <code>caseId</code> and returns the initial state of the case along with
   *             the state of the case after the call to <a>ResolveCase</a>
   *             completed.</p>
   */
  public resolveCase(
    args: ResolveCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveCaseCommandOutput>;
  public resolveCase(
    args: ResolveCaseCommandInput,
    cb: (err: any, data?: ResolveCaseCommandOutput) => void
  ): void;
  public resolveCase(
    args: ResolveCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveCaseCommandOutput) => void
  ): void;
  public resolveCase(
    args: ResolveCaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ResolveCaseCommandOutput) => void),
    cb?: (err: any, data?: ResolveCaseCommandOutput) => void
  ): Promise<ResolveCaseCommandOutput> | void {
    const command = new ResolveCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
