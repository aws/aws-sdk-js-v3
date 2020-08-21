import { SupportClient } from "./SupportClient";
import {
  AddAttachmentsToSetCommand,
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
} from "./commands/AddAttachmentsToSetCommand";
import {
  AddCommunicationToCaseCommand,
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
} from "./commands/AddCommunicationToCaseCommand";
import { CreateCaseCommand, CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import {
  DescribeAttachmentCommand,
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput,
} from "./commands/DescribeAttachmentCommand";
import {
  DescribeCasesCommand,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
} from "./commands/DescribeCasesCommand";
import {
  DescribeCommunicationsCommand,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "./commands/DescribeCommunicationsCommand";
import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "./commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommand,
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
} from "./commands/DescribeSeverityLevelsCommand";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommand,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import {
  DescribeTrustedAdvisorCheckResultCommand,
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommand,
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  DescribeTrustedAdvisorChecksCommand,
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "./commands/DescribeTrustedAdvisorChecksCommand";
import {
  RefreshTrustedAdvisorCheckCommand,
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
} from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommand, ResolveCaseCommandInput, ResolveCaseCommandOutput } from "./commands/ResolveCaseCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Support</fullname>
 *         <p>The AWS Support API reference is intended for programmers who need detailed information
 *             about the AWS Support operations and data types. This service enables you to manage your AWS
 *             Support cases programmatically. It uses HTTP methods that return results in JSON
 *             format.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">AWS Trusted Advisor</a> features. You can
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
 *                         resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve information
 *                     about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add
 *                     communications and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service for
 *             Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check that you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a
 *                     specified check.</p>
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
   * <p>Adds one or more attachments to an attachment set. </p>
   *         <p>An attachment set is a temporary container for attachments that you add to a case or
   *             case communication. The set is available for 1 hour after it's created. The
   *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddAttachmentsToSetCommandOutput) => void),
    cb?: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): Promise<AddAttachmentsToSetCommandOutput> | void {
    const command = new AddAttachmentsToSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code>
   *             parameter to identify the case to which to add communication. You can list a set of
   *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
   *             parameter. The <code>communicationBody</code> value contains the text of the
   *             communication.</p>
   *
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddCommunicationToCaseCommandOutput) => void),
    cb?: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): Promise<AddCommunicationToCaseCommandOutput> | void {
    const command = new AddCommunicationToCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case
   *             in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
   *                 Case</a> page.</p>
   *         <p>The AWS Support API doesn't support requesting service limit increases. You can submit a
   *             service limit increase in the following ways: </p>
   *         <ul>
   *             <li>
   *                 <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
   *             </li>
   *             <li>
   *                 <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
   *             </li>
   *          </ul>
   *         <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use
   *             the <a>DescribeCases</a> operation and specify the case number to get
   *             existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
   *             attachments to an existing case.</p>
   *         <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
   *             the <a href="https://console.aws.amazon.com/support">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public createCase(args: CreateCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateCaseCommandOutput>;
  public createCase(args: CreateCaseCommandInput, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
  public createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  public createCase(
    args: CreateCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCaseCommandOutput) => void),
    cb?: (err: any, data?: CreateCaseCommandOutput) => void
  ): Promise<CreateCaseCommandOutput> | void {
    const command = new CreateCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the attachment that has the specified ID. Attachments can include screenshots,
   *             error logs, or other files that describe your issue. Attachment IDs are generated by the
   *             case management system when you add an attachment to a case or case communication.
   *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
   *             returned by the <a>DescribeCommunications</a> operation.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAttachmentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): Promise<DescribeAttachmentCommandOutput> | void {
    const command = new DescribeAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use
   *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by
   *             date. You can set values for the <code>includeResolvedCases</code> and
   *                 <code>includeCommunications</code> parameters to specify how much information to
   *             return.</p>
   *         <p>The response returns the following in JSON format:</p>
   *         <ul>
   *             <li>
   *                 <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p>
   *             </li>
   *             <li>
   *                 <p>One or more <code>nextToken</code> values, which specify where to paginate the
   *                     returned records represented by the <code>CaseDetails</code> objects.</p>
   *             </li>
   *          </ul>
   *         <p>Case data is available for 12 months after creation. If a case was created more than
   *             12 months ago, a request might return an error.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCasesCommandOutput) => void
  ): Promise<DescribeCasesCommandOutput> | void {
    const command = new DescribeCasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns communications and attachments for one or more support cases. Use the
   *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
   *             can use the <code>caseId</code> parameter to restrict the results to a specific
   *             case.</p>
   *         <p>Case data is available for 12 months after creation. If a case was created more than
   *             12 months ago, a request for data might cause an error.</p>
   *         <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
   *             control the pagination of the results. Set <code>maxResults</code> to the number of
   *             cases that you want to display on each page, and use <code>nextToken</code> to specify
   *             the resumption of pagination.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCommunicationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): Promise<DescribeCommunicationsCommandOutput> | void {
    const command = new DescribeCommunicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the current list of AWS services and a list of service categories for each
   *             service. You then use service names and categories in your <a>CreateCase</a>
   *             requests. Each AWS service has its own set of categories.</p>
   *         <p>The service codes and category codes correspond to the values that appear in the
   *                 <b>Service</b> and <b>Category</b> lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields
   *             don't necessarily match the service codes and categories returned by the
   *                 <code>DescribeServices</code> operation. Always use the service codes and categories
   *             that the <code>DescribeServices</code> operation returns, so that you have the most
   *             recent set of service and category codes.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServicesCommandOutput) => void
  ): Promise<DescribeServicesCommandOutput> | void {
    const command = new DescribeServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of severity levels that you can assign to an AWS Support case. The severity
   *             level for a case is also a field in the <a>CaseDetails</a> data type that you
   *             include for a <a>CreateCase</a> request.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSeverityLevelsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): Promise<DescribeSeverityLevelsCommandOutput> | void {
    const command = new DescribeSeverityLevelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the refresh status of the AWS Trusted Advisor checks that have the specified check
   *             IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
   *         <p>Some checks are refreshed automatically, and you can't return their refresh statuses
   *             by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you
   *             call this operation for these checks, you might see an
   *                 <code>InvalidParameterValue</code> error.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You
   *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
   *             operation.</p>
   *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
   *             contains these three objects:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorCategorySpecificSummary</a>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorResourceDetail</a>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>TrustedAdvisorResourcesSummary</a>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>In addition, the response contains these fields:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>status</b> - The alert status of the check:
   *                     "ok" (green), "warning" (yellow), "error" (red), or "not_available".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>timestamp</b> - The time of the last refresh
   *                     of the check.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>checkId</b> - The unique identifier for the
   *                     check.</p>
   *             </li>
   *          </ul>
   *
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput>;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about all available AWS Trusted Advisor checks, including the name, ID,
   *             category, description, and metadata. You must specify a language code. The AWS Support API
   *             currently supports English ("en") and Japanese ("ja"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the
   *             AWS Region to us-east-1.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput> | void {
    const command = new DescribeTrustedAdvisorChecksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the results for the AWS Trusted Advisor check summaries for the check IDs that you
   *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
   *         <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
   *             objects.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput>;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void
  ): void;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> | void {
    const command = new DescribeTrustedAdvisorCheckSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the
   *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
   *             operation.</p>
   *         <note>
   *             <p>Some checks are refreshed automatically. If you call the
   *                     <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
   *                 the <code>InvalidParameterValue</code> error.</p>
   *         </note>
   *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
   *             object.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void),
    cb?: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput> | void {
    const command = new RefreshTrustedAdvisorCheckCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the
   *             initial and final state of the case.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
   *                         API. </p>
   *                 </li>
   *                <li>
   *                     <p>If you call the AWS Support API from an account that does not have a
   *                         Business or Enterprise support plan, the
   *                             <code>SubscriptionRequiredException</code> error message appears. For
   *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public resolveCase(args: ResolveCaseCommandInput, options?: __HttpHandlerOptions): Promise<ResolveCaseCommandOutput>;
  public resolveCase(args: ResolveCaseCommandInput, cb: (err: any, data?: ResolveCaseCommandOutput) => void): void;
  public resolveCase(
    args: ResolveCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveCaseCommandOutput) => void
  ): void;
  public resolveCase(
    args: ResolveCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveCaseCommandOutput) => void),
    cb?: (err: any, data?: ResolveCaseCommandOutput) => void
  ): Promise<ResolveCaseCommandOutput> | void {
    const command = new ResolveCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
