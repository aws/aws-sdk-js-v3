// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  DescribeCreateCaseOptionsCommand,
  DescribeCreateCaseOptionsCommandInput,
  DescribeCreateCaseOptionsCommandOutput,
} from "./commands/DescribeCreateCaseOptionsCommand";
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
  DescribeSupportedLanguagesCommand,
  DescribeSupportedLanguagesCommandInput,
  DescribeSupportedLanguagesCommandOutput,
} from "./commands/DescribeSupportedLanguagesCommand";
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
  DescribeTrustedAdvisorChecksCommand,
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "./commands/DescribeTrustedAdvisorChecksCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommand,
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  RefreshTrustedAdvisorCheckCommand,
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
} from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommand, ResolveCaseCommandInput, ResolveCaseCommandOutput } from "./commands/ResolveCaseCommand";
import { SupportClient, SupportClientConfig } from "./SupportClient";

const commands = {
  AddAttachmentsToSetCommand,
  AddCommunicationToCaseCommand,
  CreateCaseCommand,
  DescribeAttachmentCommand,
  DescribeCasesCommand,
  DescribeCommunicationsCommand,
  DescribeCreateCaseOptionsCommand,
  DescribeServicesCommand,
  DescribeSeverityLevelsCommand,
  DescribeSupportedLanguagesCommand,
  DescribeTrustedAdvisorCheckRefreshStatusesCommand,
  DescribeTrustedAdvisorCheckResultCommand,
  DescribeTrustedAdvisorChecksCommand,
  DescribeTrustedAdvisorCheckSummariesCommand,
  RefreshTrustedAdvisorCheckCommand,
  ResolveCaseCommand,
};

export interface Support {
  /**
   * @see {@link AddAttachmentsToSetCommand}
   */
  addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddAttachmentsToSetCommandOutput>;
  addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): void;
  addAttachmentsToSet(
    args: AddAttachmentsToSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void
  ): void;

  /**
   * @see {@link AddCommunicationToCaseCommand}
   */
  addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCommunicationToCaseCommandOutput>;
  addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): void;
  addCommunicationToCase(
    args: AddCommunicationToCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCaseCommand}
   */
  createCase(args: CreateCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateCaseCommandOutput>;
  createCase(args: CreateCaseCommandInput, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
  createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAttachmentCommand}
   */
  describeAttachment(
    args: DescribeAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttachmentCommandOutput>;
  describeAttachment(
    args: DescribeAttachmentCommandInput,
    cb: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): void;
  describeAttachment(
    args: DescribeAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCasesCommand}
   */
  describeCases(args: DescribeCasesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCasesCommandOutput>;
  describeCases(args: DescribeCasesCommandInput, cb: (err: any, data?: DescribeCasesCommandOutput) => void): void;
  describeCases(
    args: DescribeCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCommunicationsCommand}
   */
  describeCommunications(
    args: DescribeCommunicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommunicationsCommandOutput>;
  describeCommunications(
    args: DescribeCommunicationsCommandInput,
    cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): void;
  describeCommunications(
    args: DescribeCommunicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCreateCaseOptionsCommand}
   */
  describeCreateCaseOptions(
    args: DescribeCreateCaseOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCreateCaseOptionsCommandOutput>;
  describeCreateCaseOptions(
    args: DescribeCreateCaseOptionsCommandInput,
    cb: (err: any, data?: DescribeCreateCaseOptionsCommandOutput) => void
  ): void;
  describeCreateCaseOptions(
    args: DescribeCreateCaseOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCreateCaseOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSeverityLevelsCommand}
   */
  describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSeverityLevelsCommandOutput>;
  describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): void;
  describeSeverityLevels(
    args: DescribeSeverityLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSupportedLanguagesCommand}
   */
  describeSupportedLanguages(
    args: DescribeSupportedLanguagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSupportedLanguagesCommandOutput>;
  describeSupportedLanguages(
    args: DescribeSupportedLanguagesCommandInput,
    cb: (err: any, data?: DescribeSupportedLanguagesCommandOutput) => void
  ): void;
  describeSupportedLanguages(
    args: DescribeSupportedLanguagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSupportedLanguagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustedAdvisorCheckRefreshStatusesCommand}
   */
  describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>;
  describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void
  ): void;
  describeTrustedAdvisorCheckRefreshStatuses(
    args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustedAdvisorCheckResultCommand}
   */
  describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput>;
  describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void
  ): void;
  describeTrustedAdvisorCheckResult(
    args: DescribeTrustedAdvisorCheckResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustedAdvisorChecksCommand}
   */
  describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput>;
  describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): void;
  describeTrustedAdvisorChecks(
    args: DescribeTrustedAdvisorChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustedAdvisorCheckSummariesCommand}
   */
  describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput>;
  describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void
  ): void;
  describeTrustedAdvisorCheckSummaries(
    args: DescribeTrustedAdvisorCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link RefreshTrustedAdvisorCheckCommand}
   */
  refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput>;
  refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): void;
  refreshTrustedAdvisorCheck(
    args: RefreshTrustedAdvisorCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveCaseCommand}
   */
  resolveCase(args: ResolveCaseCommandInput, options?: __HttpHandlerOptions): Promise<ResolveCaseCommandOutput>;
  resolveCase(args: ResolveCaseCommandInput, cb: (err: any, data?: ResolveCaseCommandOutput) => void): void;
  resolveCase(
    args: ResolveCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveCaseCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Web Services Support</fullname>
 *          <p>The <i>Amazon Web Services Support API Reference</i> is intended for programmers who need detailed
 *             information about the Amazon Web Services Support operations and data types. You can use the API to manage
 *             your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return
 *             results in JSON format.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>You can also use the Amazon Web Services Support API to access features for <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a>. You can return a list of
 *             checks and their descriptions, get check results, specify checks to refresh, and get the
 *             refresh status of checks.</p>
 *          <p>You can manage your support cases with the following Amazon Web Services Support API operations:</p>
 *          <ul>
 *             <li>
 *                <p>The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations
 *                     create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                <p>The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to Amazon Web Services Support
 *                     cases.</p>
 *             </li>
 *             <li>
 *                <p>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return Amazon Web Service names, service codes, service categories, and problem
 *                     severity levels. You use these values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *          </ul>
 *          <p>You can also use the Amazon Web Services Support API to call the  Trusted Advisor operations. For more
 *             information, see <a href="https://docs.aws.amazon.com/">Trusted Advisor</a> in the
 *                 <i>Amazon Web Services Support User Guide</i>.</p>
 *          <p>For authentication of requests, Amazon Web Services Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *          <p>For more information about this service and the endpoints to use, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html">About the
 *                 Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 */
export class Support extends SupportClient implements Support {}
createAggregatedClient(commands, Support);
