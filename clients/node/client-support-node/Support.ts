import { SupportClient } from "./SupportClient";
import { AddAttachmentsToSetInput } from "./types/AddAttachmentsToSetInput";
import { AddAttachmentsToSetOutput } from "./types/AddAttachmentsToSetOutput";
import { AddCommunicationToCaseInput } from "./types/AddCommunicationToCaseInput";
import { AddCommunicationToCaseOutput } from "./types/AddCommunicationToCaseOutput";
import { AttachmentIdNotFound } from "./types/AttachmentIdNotFound";
import { AttachmentLimitExceeded } from "./types/AttachmentLimitExceeded";
import { AttachmentSetExpired } from "./types/AttachmentSetExpired";
import { AttachmentSetIdNotFound } from "./types/AttachmentSetIdNotFound";
import { AttachmentSetSizeLimitExceeded } from "./types/AttachmentSetSizeLimitExceeded";
import { CaseCreationLimitExceeded } from "./types/CaseCreationLimitExceeded";
import { CaseIdNotFound } from "./types/CaseIdNotFound";
import { CreateCaseInput } from "./types/CreateCaseInput";
import { CreateCaseOutput } from "./types/CreateCaseOutput";
import { DescribeAttachmentInput } from "./types/DescribeAttachmentInput";
import { DescribeAttachmentLimitExceeded } from "./types/DescribeAttachmentLimitExceeded";
import { DescribeAttachmentOutput } from "./types/DescribeAttachmentOutput";
import { DescribeCasesInput } from "./types/DescribeCasesInput";
import { DescribeCasesOutput } from "./types/DescribeCasesOutput";
import { DescribeCommunicationsInput } from "./types/DescribeCommunicationsInput";
import { DescribeCommunicationsOutput } from "./types/DescribeCommunicationsOutput";
import { DescribeServicesInput } from "./types/DescribeServicesInput";
import { DescribeServicesOutput } from "./types/DescribeServicesOutput";
import { DescribeSeverityLevelsInput } from "./types/DescribeSeverityLevelsInput";
import { DescribeSeverityLevelsOutput } from "./types/DescribeSeverityLevelsOutput";
import { DescribeTrustedAdvisorCheckRefreshStatusesInput } from "./types/DescribeTrustedAdvisorCheckRefreshStatusesInput";
import { DescribeTrustedAdvisorCheckRefreshStatusesOutput } from "./types/DescribeTrustedAdvisorCheckRefreshStatusesOutput";
import { DescribeTrustedAdvisorCheckResultInput } from "./types/DescribeTrustedAdvisorCheckResultInput";
import { DescribeTrustedAdvisorCheckResultOutput } from "./types/DescribeTrustedAdvisorCheckResultOutput";
import { DescribeTrustedAdvisorCheckSummariesInput } from "./types/DescribeTrustedAdvisorCheckSummariesInput";
import { DescribeTrustedAdvisorCheckSummariesOutput } from "./types/DescribeTrustedAdvisorCheckSummariesOutput";
import { DescribeTrustedAdvisorChecksInput } from "./types/DescribeTrustedAdvisorChecksInput";
import { DescribeTrustedAdvisorChecksOutput } from "./types/DescribeTrustedAdvisorChecksOutput";
import { InternalServerError } from "./types/InternalServerError";
import { RefreshTrustedAdvisorCheckInput } from "./types/RefreshTrustedAdvisorCheckInput";
import { RefreshTrustedAdvisorCheckOutput } from "./types/RefreshTrustedAdvisorCheckOutput";
import { ResolveCaseInput } from "./types/ResolveCaseInput";
import { ResolveCaseOutput } from "./types/ResolveCaseOutput";
import { AddAttachmentsToSetCommand } from "./commands/AddAttachmentsToSetCommand";
import { AddCommunicationToCaseCommand } from "./commands/AddCommunicationToCaseCommand";
import { CreateCaseCommand } from "./commands/CreateCaseCommand";
import { DescribeAttachmentCommand } from "./commands/DescribeAttachmentCommand";
import { DescribeCasesCommand } from "./commands/DescribeCasesCommand";
import { DescribeCommunicationsCommand } from "./commands/DescribeCommunicationsCommand";
import { DescribeServicesCommand } from "./commands/DescribeServicesCommand";
import { DescribeSeverityLevelsCommand } from "./commands/DescribeSeverityLevelsCommand";
import { DescribeTrustedAdvisorCheckRefreshStatusesCommand } from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import { DescribeTrustedAdvisorCheckResultCommand } from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import { DescribeTrustedAdvisorCheckSummariesCommand } from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import { DescribeTrustedAdvisorChecksCommand } from "./commands/DescribeTrustedAdvisorChecksCommand";
import { RefreshTrustedAdvisorCheckCommand } from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommand } from "./commands/ResolveCaseCommand";

export class Support extends SupportClient {
  /**
   * <p>Adds one or more attachments to an attachment set. If an <code>attachmentSetId</code> is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an <code>attachmentSetId</code> is specified, the attachments are added to the specified set, if it exists.</p> <p>An attachment set is a temporary container for attachments that are to be added to a case or case communication. The set is available for one hour after it is created; the <code>expiryTime</code> returned in the response indicates when the set expires. The maximum number of attachments in a set is 3, and the maximum size of any attachment in the set is 5 MB.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {AttachmentSetIdNotFound} <p>An attachment set with the specified ID could not be found.</p>
   *   - {AttachmentSetExpired} <p>The expiration time of the attachment set has passed. The set expires 1 hour after it is created.</p>
   *   - {AttachmentSetSizeLimitExceeded} <p>A limit for the size of an attachment set has been exceeded. The limits are 3 attachments and 5 MB per attachment.</p>
   *   - {AttachmentLimitExceeded} <p>The limit for the number of attachment sets created in a short period of time has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addAttachmentsToSet(
    args: AddAttachmentsToSetInput
  ): Promise<AddAttachmentsToSetOutput>;
  public addAttachmentsToSet(
    args: AddAttachmentsToSetInput,
    cb: (err: any, data?: AddAttachmentsToSetOutput) => void
  ): void;
  public addAttachmentsToSet(
    args: AddAttachmentsToSetInput,
    cb?: (err: any, data?: AddAttachmentsToSetOutput) => void
  ): Promise<AddAttachmentsToSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddAttachmentsToSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds additional customer communication to an AWS Support case. You use the <code>caseId</code> value to identify the case to add communication to. You can list a set of email addresses to copy on the communication using the <code>ccEmailAddresses</code> value. The <code>communicationBody</code> value contains the text of the communication.</p> <p>The response indicates the success or failure of the request.</p> <p>This operation implements a subset of the features of the AWS Support Center.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {CaseIdNotFound} <p>The requested <code>caseId</code> could not be located.</p>
   *   - {AttachmentSetIdNotFound} <p>An attachment set with the specified ID could not be found.</p>
   *   - {AttachmentSetExpired} <p>The expiration time of the attachment set has passed. The set expires 1 hour after it is created.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addCommunicationToCase(
    args: AddCommunicationToCaseInput
  ): Promise<AddCommunicationToCaseOutput>;
  public addCommunicationToCase(
    args: AddCommunicationToCaseInput,
    cb: (err: any, data?: AddCommunicationToCaseOutput) => void
  ): void;
  public addCommunicationToCase(
    args: AddCommunicationToCaseInput,
    cb?: (err: any, data?: AddCommunicationToCaseOutput) => void
  ): Promise<AddCommunicationToCaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddCommunicationToCaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new case in the AWS Support Center. This operation is modeled on the behavior of the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. Its parameters require you to specify the following information: </p> <ul> <li> <p> <b>issueType.</b> The type of issue for the case. You can specify either "customer-service" or "technical." If you do not indicate a value, the default is "technical." </p> </li> <li> <p> <b>serviceCode.</b> The code for an AWS service. You obtain the <code>serviceCode</code> by calling <a>DescribeServices</a>. </p> </li> <li> <p> <b>categoryCode.</b> The category for the service defined for the <code>serviceCode</code> value. You also obtain the category code for a service by calling <a>DescribeServices</a>. Each AWS service defines its own set of category codes. </p> </li> <li> <p> <b>severityCode.</b> A value that indicates the urgency of the case, which in turn determines the response time according to your service level agreement with AWS Support. You obtain the SeverityCode by calling <a>DescribeSeverityLevels</a>.</p> </li> <li> <p> <b>subject.</b> The <b>Subject</b> field on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p> <b>communicationBody.</b> The <b>Description</b> field on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p> <b>attachmentSetId.</b> The ID of a set of attachments that has been created by using <a>AddAttachmentsToSet</a>.</p> </li> <li> <p> <b>language.</b> The human language in which AWS Support handles the case. English and Japanese are currently supported.</p> </li> <li> <p> <b>ccEmailAddresses.</b> The AWS Support Center <b>CC</b> field on the <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. You can list email addresses to be copied on any correspondence about the case. The account that opens the case is already identified by passing the AWS Credentials in the HTTP POST method or in a method or function call from one of the programming languages supported by an <a href="http://aws.amazon.com/tools/">AWS SDK</a>. </p> </li> </ul> <note> <p>To add additional communication or attachments to an existing case, use <a>AddCommunicationToCase</a>.</p> </note> <p>A successful <a>CreateCase</a> request returns an AWS Support case number. Case numbers are used by the <a>DescribeCases</a> operation to retrieve existing AWS Support cases. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {CaseCreationLimitExceeded} <p>The case creation limit for the account has been exceeded.</p>
   *   - {AttachmentSetIdNotFound} <p>An attachment set with the specified ID could not be found.</p>
   *   - {AttachmentSetExpired} <p>The expiration time of the attachment set has passed. The set expires 1 hour after it is created.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCase(args: CreateCaseInput): Promise<CreateCaseOutput>;
  public createCase(
    args: CreateCaseInput,
    cb: (err: any, data?: CreateCaseOutput) => void
  ): void;
  public createCase(
    args: CreateCaseInput,
    cb?: (err: any, data?: CreateCaseOutput) => void
  ): Promise<CreateCaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the attachment that has the specified ID. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {DescribeAttachmentLimitExceeded} <p>The limit for the number of <a>DescribeAttachment</a> requests in a short period of time has been exceeded.</p>
   *   - {AttachmentIdNotFound} <p>An attachment with the specified ID could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAttachment(
    args: DescribeAttachmentInput
  ): Promise<DescribeAttachmentOutput>;
  public describeAttachment(
    args: DescribeAttachmentInput,
    cb: (err: any, data?: DescribeAttachmentOutput) => void
  ): void;
  public describeAttachment(
    args: DescribeAttachmentInput,
    cb?: (err: any, data?: DescribeAttachmentOutput) => void
  ): Promise<DescribeAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of cases that you specify by passing one or more case IDs. In addition, you can filter the cases by date by setting values for the <code>afterTime</code> and <code>beforeTime</code> request parameters. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> request parameters to control how much information is returned. </p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a>CaseDetails</a> data types. </p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {CaseIdNotFound} <p>The requested <code>caseId</code> could not be located.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCases(args: DescribeCasesInput): Promise<DescribeCasesOutput>;
  public describeCases(
    args: DescribeCasesInput,
    cb: (err: any, data?: DescribeCasesOutput) => void
  ): void;
  public describeCases(
    args: DescribeCasesInput,
    cb?: (err: any, data?: DescribeCasesOutput) => void
  ): Promise<DescribeCasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns communications (and attachments) for one or more support cases. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a particular case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the result set. Set <code>maxResults</code> to the number of cases you want displayed on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {CaseIdNotFound} <p>The requested <code>caseId</code> could not be located.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCommunications(
    args: DescribeCommunicationsInput
  ): Promise<DescribeCommunicationsOutput>;
  public describeCommunications(
    args: DescribeCommunicationsInput,
    cb: (err: any, data?: DescribeCommunicationsOutput) => void
  ): void;
  public describeCommunications(
    args: DescribeCommunicationsInput,
    cb?: (err: any, data?: DescribeCommunicationsOutput) => void
  ): Promise<DescribeCommunicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCommunicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current list of AWS services and a list of service categories that applies to each one. You then use service names and categories in your <a>CreateCase</a> requests. Each AWS service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that are displayed in the <b>Service</b> and <b>Category</b> drop-down lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields, however, do not necessarily match the service codes and categories returned by the <code>DescribeServices</code> request. Always use the service codes and categories obtained programmatically. This practice ensures that you always have the most recent set of service and category codes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServices(
    args: DescribeServicesInput
  ): Promise<DescribeServicesOutput>;
  public describeServices(
    args: DescribeServicesInput,
    cb: (err: any, data?: DescribeServicesOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesInput,
    cb?: (err: any, data?: DescribeServicesOutput) => void
  ): Promise<DescribeServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of severity levels that you can assign to an AWS Support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type included in any <a>CreateCase</a> request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSeverityLevels(
    args: DescribeSeverityLevelsInput
  ): Promise<DescribeSeverityLevelsOutput>;
  public describeSeverityLevels(
    args: DescribeSeverityLevelsInput,
    cb: (err: any, data?: DescribeSeverityLevelsOutput) => void
  ): void;
  public describeSeverityLevels(
    args: DescribeSeverityLevelsInput,
    cb?: (err: any, data?: DescribeSeverityLevelsOutput) => void
  ): Promise<DescribeSeverityLevelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSeverityLevelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <note> <p>Some checks are refreshed automatically, and their refresh statuses cannot be retrieved by using this operation. Use of the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation for these checks causes an <code>InvalidParameterValue</code> error.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesInput
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesOutput>;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesInput,
    cb: (
      err: any,
      data?: DescribeTrustedAdvisorCheckRefreshStatusesOutput
    ) => void
  ): void;
  public describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesInput,
    cb?: (
      err: any,
      data?: DescribeTrustedAdvisorCheckRefreshStatusesOutput
    ) => void
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the results of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status.</b> The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".</p> </li> <li> <p> <b>timestamp.</b> The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId.</b> The unique identifier for the check.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultInput
  ): Promise<DescribeTrustedAdvisorCheckResultOutput>;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckResultOutput) => void
  ): void;
  public describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultInput,
    cb?: (err: any, data?: DescribeTrustedAdvisorCheckResultOutput) => void
  ): Promise<DescribeTrustedAdvisorCheckResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrustedAdvisorCheckResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the summaries of the results of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesInput
  ): Promise<DescribeTrustedAdvisorCheckSummariesOutput>;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesOutput) => void
  ): void;
  public describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesInput,
    cb?: (err: any, data?: DescribeTrustedAdvisorCheckSummariesOutput) => void
  ): Promise<DescribeTrustedAdvisorCheckSummariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrustedAdvisorCheckSummariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all available Trusted Advisor checks, including name, ID, category, description, and metadata. You must specify a language code; English ("en") and Japanese ("ja") are currently supported. The response contains a <a>TrustedAdvisorCheckDescription</a> for each check.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksInput
  ): Promise<DescribeTrustedAdvisorChecksOutput>;
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksInput,
    cb: (err: any, data?: DescribeTrustedAdvisorChecksOutput) => void
  ): void;
  public describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksInput,
    cb?: (err: any, data?: DescribeTrustedAdvisorChecksOutput) => void
  ): Promise<DescribeTrustedAdvisorChecksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrustedAdvisorChecksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a refresh of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <note> <p>Some checks are refreshed automatically, and they cannot be refreshed by using this operation. Use of the <code>RefreshTrustedAdvisorCheck</code> operation for these checks causes an <code>InvalidParameterValue</code> error.</p> </note> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object, which contains these fields:</p> <ul> <li> <p> <b>status.</b> The refresh status of the check: "none", "enqueued", "processing", "success", or "abandoned".</p> </li> <li> <p> <b>millisUntilNextRefreshable.</b> The amount of time, in milliseconds, until the check is eligible for refresh.</p> </li> <li> <p> <b>checkId.</b> The unique identifier for the check.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckInput
  ): Promise<RefreshTrustedAdvisorCheckOutput>;
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckInput,
    cb: (err: any, data?: RefreshTrustedAdvisorCheckOutput) => void
  ): void;
  public refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckInput,
    cb?: (err: any, data?: RefreshTrustedAdvisorCheckOutput) => void
  ): Promise<RefreshTrustedAdvisorCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RefreshTrustedAdvisorCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Takes a <code>caseId</code> and returns the initial state of the case along with the state of the case after the call to <a>ResolveCase</a> completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An internal server error occurred.</p>
   *   - {CaseIdNotFound} <p>The requested <code>caseId</code> could not be located.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resolveCase(args: ResolveCaseInput): Promise<ResolveCaseOutput>;
  public resolveCase(
    args: ResolveCaseInput,
    cb: (err: any, data?: ResolveCaseOutput) => void
  ): void;
  public resolveCase(
    args: ResolveCaseInput,
    cb?: (err: any, data?: ResolveCaseOutput) => void
  ): Promise<ResolveCaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResolveCaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
