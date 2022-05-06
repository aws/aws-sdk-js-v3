// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptAdministratorInvitationCommand,
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommand,
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "./commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommand,
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "./commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommand,
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "./commands/BatchImportFindingsCommand";
import {
  BatchUpdateFindingsCommand,
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "./commands/BatchUpdateFindingsCommand";
import {
  CreateActionTargetCommand,
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput,
} from "./commands/CreateActionTargetCommand";
import {
  CreateFindingAggregatorCommand,
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "./commands/CreateFindingAggregatorCommand";
import {
  CreateInsightCommand,
  CreateInsightCommandInput,
  CreateInsightCommandOutput,
} from "./commands/CreateInsightCommand";
import {
  CreateMembersCommand,
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "./commands/CreateMembersCommand";
import {
  DeclineInvitationsCommand,
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteActionTargetCommand,
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput,
} from "./commands/DeleteActionTargetCommand";
import {
  DeleteFindingAggregatorCommand,
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
} from "./commands/DeleteFindingAggregatorCommand";
import {
  DeleteInsightCommand,
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput,
} from "./commands/DeleteInsightCommand";
import {
  DeleteInvitationsCommand,
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommand,
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "./commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommand,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "./commands/DescribeActionTargetsCommand";
import { DescribeHubCommand, DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DescribeProductsCommand,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
} from "./commands/DescribeProductsCommand";
import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "./commands/DescribeStandardsCommand";
import {
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "./commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommand,
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "./commands/DisableImportFindingsForProductCommand";
import {
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisableSecurityHubCommand,
  DisableSecurityHubCommandInput,
  DisableSecurityHubCommandOutput,
} from "./commands/DisableSecurityHubCommand";
import {
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommand,
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommand,
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "./commands/EnableImportFindingsForProductCommand";
import {
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  EnableSecurityHubCommand,
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput,
} from "./commands/EnableSecurityHubCommand";
import {
  GetAdministratorAccountCommand,
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "./commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommand,
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "./commands/GetFindingAggregatorCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetInsightResultsCommand,
  GetInsightResultsCommandInput,
  GetInsightResultsCommandOutput,
} from "./commands/GetInsightResultsCommand";
import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetInvitationsCountCommand,
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommand,
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "./commands/GetMasterAccountCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  InviteMembersCommand,
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
} from "./commands/InviteMembersCommand";
import {
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "./commands/ListEnabledProductsForImportCommand";
import {
  ListFindingAggregatorsCommand,
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "./commands/ListFindingAggregatorsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateActionTargetCommand,
  UpdateActionTargetCommandInput,
  UpdateActionTargetCommandOutput,
} from "./commands/UpdateActionTargetCommand";
import {
  UpdateFindingAggregatorCommand,
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
} from "./commands/UpdateFindingAggregatorCommand";
import {
  UpdateFindingsCommand,
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput,
} from "./commands/UpdateFindingsCommand";
import {
  UpdateInsightCommand,
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput,
} from "./commands/UpdateInsightCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateSecurityHubConfigurationCommand,
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "./commands/UpdateSecurityHubConfigurationCommand";
import {
  UpdateStandardsControlCommand,
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "./commands/UpdateStandardsControlCommand";
import { SecurityHubClient } from "./SecurityHubClient";

/**
 * <p>Security Hub provides you with a comprehensive view of the security state of your Amazon Web Services environment and resources. It also provides you with the readiness status
 *          of your environment based on controls from supported security standards. Security Hub collects
 *          security data from Amazon Web Services accounts, services, and integrated third-party products and helps
 *          you analyze security trends in your environment to identify the highest priority security
 *          issues. For more information about Security Hub, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
 *                <i>Security HubUser
 *             Guide</i>
 *             </a>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the Amazon Web Services
 *          Region that is currently active or in the specific Amazon Web Services Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to.</p>
 *          <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of
 *          the member account with the administrator account is created only in the <code>us-west-2</code>
 *          Region. Security Hub must be enabled for the member account in the same Region that the invitation
 *          was sent from.</p>
 *          <p>The following throttling limits apply to using Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchEnableStandards</code> - <code>RateLimit</code> of 1
 *                request per second, <code>BurstLimit</code> of 1 request per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second.
 *                   <code>BurstLimit</code> of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateStandardsControl</code> - <code>RateLimit</code> of
 *                1 request per second, <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 */
export class SecurityHub extends SecurityHubClient {
  /**
   * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
   *          account that the invitation was sent from.</p>
   *          <p>This operation is only used by member accounts that are not added through
   *          Organizations.</p>
   *          <p>When the member account accepts the invitation, permission is granted to the administrator
   *          account to view findings generated in the member account.</p>
   */
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAdministratorInvitationCommandOutput>;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptAdministratorInvitationCommandOutput) => void),
    cb?: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): Promise<AcceptAdministratorInvitationCommandOutput> | void {
    const command = new AcceptAdministratorInvitationCommand(args);
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
   * @deprecated
   *
   * <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p>
   *          <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p>
   *          <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
   *          account that the invitation was sent from.</p>
   *          <p>This operation is only used by member accounts that are not added through
   *          Organizations.</p>
   *          <p>When the member account accepts the invitation, permission is granted to the administrator
   *          account to view findings generated in the member account.</p>
   */
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptInvitationCommandOutput) => void),
    cb?: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): Promise<AcceptInvitationCommandOutput> | void {
    const command = new AcceptInvitationCommand(args);
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
   * <p>Disables the standards specified by the provided
   *          <code>StandardsSubscriptionArns</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User
   *          Guide</i>.</p>
   */
  public batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisableStandardsCommandOutput>;
  public batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void
  ): void;
  public batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisableStandardsCommandOutput) => void
  ): void;
  public batchDisableStandards(
    args: BatchDisableStandardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisableStandardsCommandOutput) => void),
    cb?: (err: any, data?: BatchDisableStandardsCommandOutput) => void
  ): Promise<BatchDisableStandardsCommandOutput> | void {
    const command = new BatchDisableStandardsCommand(args);
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
   * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
   *          ARN for a standard, use the <code>DescribeStandards</code>
   *          operation.</p>
   *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
   *          section of the <i>Security Hub User Guide</i>.</p>
   */
  public batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEnableStandardsCommandOutput>;
  public batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void
  ): void;
  public batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEnableStandardsCommandOutput) => void
  ): void;
  public batchEnableStandards(
    args: BatchEnableStandardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchEnableStandardsCommandOutput) => void),
    cb?: (err: any, data?: BatchEnableStandardsCommandOutput) => void
  ): Promise<BatchEnableStandardsCommandOutput> | void {
    const command = new BatchEnableStandardsCommand(args);
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
   * <p>Imports security findings generated by a finding provider into Security Hub.
   *          This action is requested by the finding provider to import its findings into
   *          Security Hub.</p>
   *          <p>
   *             <code>BatchImportFindings</code> must be called by one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon Web Services account that is associated with a finding if you are using
   *                the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-providers.html#securityhub-custom-providers-bfi-reqs">default product ARN</a>
   *                or are a partner sending findings from within a customer's Amazon Web Services account.
   *                In these cases, the identifier of the account that you are calling <code>BatchImportFindings</code>
   *                from needs to be the same as the <code>AwsAccountId</code> attribute for the finding.</p>
   *             </li>
   *             <li>
   *                <p>An Amazon Web Services account that Security Hub has allow-listed for an official partner
   *                integration. In this case, you can call <code>BatchImportFindings</code> from the allow-listed
   *                account and send findings from different customer accounts in the same batch.</p>
   *             </li>
   *          </ul>
   *          <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
   *          larger than 240 Kb.</p>
   *          <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update
   *          the following finding fields and objects, which Security Hub customers use to manage their
   *          investigation workflow.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Note</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UserDefinedFields</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VerificationState</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Workflow</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Confidence</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Criticality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RelatedFindings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Severity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Types</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
   */
  public batchImportFindings(
    args: BatchImportFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchImportFindingsCommandOutput>;
  public batchImportFindings(
    args: BatchImportFindingsCommandInput,
    cb: (err: any, data?: BatchImportFindingsCommandOutput) => void
  ): void;
  public batchImportFindings(
    args: BatchImportFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchImportFindingsCommandOutput) => void
  ): void;
  public batchImportFindings(
    args: BatchImportFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchImportFindingsCommandOutput) => void),
    cb?: (err: any, data?: BatchImportFindingsCommandOutput) => void
  ): Promise<BatchImportFindingsCommandOutput> | void {
    const command = new BatchImportFindingsCommand(args);
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
   * <p>Used by Security Hub customers to update information about their investigation into a finding.
   *          Requested by administrator accounts or member accounts. Administrator accounts can update findings for
   *          their account and their member accounts. Member accounts can update findings for their
   *          account.</p>
   *          <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of
   *             <code>UpdatedAt</code> for a finding.</p>
   *          <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the
   *          following finding fields and objects.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Confidence</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Criticality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Note</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RelatedFindings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Severity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Types</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UserDefinedFields</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VerificationState</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Workflow</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can configure IAM policies to restrict access to fields and field values. For
   *          example, you might not want member accounts to be able to suppress findings or change the
   *          finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the
   *          <i>Security Hub User Guide</i>.</p>
   */
  public batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateFindingsCommandOutput>;
  public batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void
  ): void;
  public batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateFindingsCommandOutput) => void
  ): void;
  public batchUpdateFindings(
    args: BatchUpdateFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateFindingsCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateFindingsCommandOutput) => void
  ): Promise<BatchUpdateFindingsCommandOutput> | void {
    const command = new BatchUpdateFindingsCommand(args);
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
   * <p>Creates a custom action target in Security Hub.</p>
   *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
   *          in Amazon CloudWatch Events.</p>
   */
  public createActionTarget(
    args: CreateActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActionTargetCommandOutput>;
  public createActionTarget(
    args: CreateActionTargetCommandInput,
    cb: (err: any, data?: CreateActionTargetCommandOutput) => void
  ): void;
  public createActionTarget(
    args: CreateActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActionTargetCommandOutput) => void
  ): void;
  public createActionTarget(
    args: CreateActionTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateActionTargetCommandOutput) => void),
    cb?: (err: any, data?: CreateActionTargetCommandOutput) => void
  ): Promise<CreateActionTargetCommandOutput> | void {
    const command = new CreateActionTargetCommand(args);
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
   * <p>Used to enable finding aggregation. Must be called from the aggregation Region.</p>
   *          <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>.
   *       </p>
   */
  public createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingAggregatorCommandOutput>;
  public createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    cb: (err: any, data?: CreateFindingAggregatorCommandOutput) => void
  ): void;
  public createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingAggregatorCommandOutput) => void
  ): void;
  public createFindingAggregator(
    args: CreateFindingAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFindingAggregatorCommandOutput) => void),
    cb?: (err: any, data?: CreateFindingAggregatorCommandOutput) => void
  ): Promise<CreateFindingAggregatorCommandOutput> | void {
    const command = new CreateFindingAggregatorCommand(args);
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
   * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate
   *          to a security issue that requires attention or remediation.</p>
   *          <p>To group the related findings in the insight, use the
   *          <code>GroupByAttribute</code>.</p>
   */
  public createInsight(
    args: CreateInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInsightCommandOutput>;
  public createInsight(
    args: CreateInsightCommandInput,
    cb: (err: any, data?: CreateInsightCommandOutput) => void
  ): void;
  public createInsight(
    args: CreateInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInsightCommandOutput) => void
  ): void;
  public createInsight(
    args: CreateInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInsightCommandOutput) => void),
    cb?: (err: any, data?: CreateInsightCommandOutput) => void
  ): Promise<CreateInsightCommandOutput> | void {
    const command = new CreateInsightCommand(args);
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
   * <p>Creates a member association in Security Hub between the specified accounts and the account
   *          used to make the request, which is the administrator account. If you are integrated with
   *          Organizations, then the administrator account is designated by the organization management account.</p>
   *          <p>
   *             <code>CreateMembers</code> is always used to add accounts that are not organization
   *          members.</p>
   *          <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used
   *          in the following cases:</p>
   *          <ul>
   *             <li>
   *                <p>Security Hub is not configured to automatically add new organization accounts.</p>
   *             </li>
   *             <li>
   *                <p>The account was disassociated or deleted in Security Hub.</p>
   *             </li>
   *          </ul>
   *          <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you
   *          can use the <code>EnableSecurityHub</code> operation.</p>
   *          <p>For accounts that are not organization members, you create the account association and
   *          then send an invitation to the member account. To send the invitation, you use the
   *                <code>InviteMembers</code> operation. If the account owner accepts
   *          the invitation, the account becomes a member account in Security Hub.</p>
   *          <p>Accounts that are managed using Organizations do not receive an invitation. They
   *          automatically become a member account in Security Hub.</p>
   *          <ul>
   *             <li>
   *                <p>If the organization account does not have Security Hub enabled, then Security Hub and the default standards are automatically enabled. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p>
   *             </li>
   *             <li>
   *                <p>For organization accounts that already have Security Hub enabled, Security Hub does not make any other changes to those accounts. It does not change their enabled standards or controls.</p>
   *             </li>
   *          </ul>
   *          <p>A permissions policy is added that permits the administrator account to view the findings
   *          generated in the member account.</p>
   *          <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
   */
  public createMembers(
    args: CreateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembersCommandOutput>;
  public createMembers(
    args: CreateMembersCommandInput,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMembersCommandOutput) => void),
    cb?: (err: any, data?: CreateMembersCommandOutput) => void
  ): Promise<CreateMembersCommandOutput> | void {
    const command = new CreateMembersCommand(args);
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
   * <p>Declines invitations to become a member account.</p>
   *          <p>This operation is only used by accounts that are not part of an organization.
   *          Organization accounts do not receive invitations.</p>
   */
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineInvitationsCommandOutput>;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeclineInvitationsCommandOutput) => void),
    cb?: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): Promise<DeclineInvitationsCommandOutput> | void {
    const command = new DeclineInvitationsCommand(args);
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
   * <p>Deletes a custom action target from Security Hub.</p>
   *          <p>Deleting a custom action target does not affect any findings or insights that were
   *          already sent to Amazon CloudWatch Events using the custom action.</p>
   */
  public deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActionTargetCommandOutput>;
  public deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    cb: (err: any, data?: DeleteActionTargetCommandOutput) => void
  ): void;
  public deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActionTargetCommandOutput) => void
  ): void;
  public deleteActionTarget(
    args: DeleteActionTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteActionTargetCommandOutput) => void),
    cb?: (err: any, data?: DeleteActionTargetCommandOutput) => void
  ): Promise<DeleteActionTargetCommandOutput> | void {
    const command = new DeleteActionTargetCommand(args);
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
   * <p>Deletes a finding aggregator. When you delete the finding aggregator, you stop finding aggregation.</p>
   *          <p>When you stop finding aggregation, findings that were already aggregated to the aggregation Region are still visible from the aggregation Region. New findings and finding updates are not aggregated.
   *       </p>
   */
  public deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFindingAggregatorCommandOutput>;
  public deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    cb: (err: any, data?: DeleteFindingAggregatorCommandOutput) => void
  ): void;
  public deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFindingAggregatorCommandOutput) => void
  ): void;
  public deleteFindingAggregator(
    args: DeleteFindingAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFindingAggregatorCommandOutput) => void),
    cb?: (err: any, data?: DeleteFindingAggregatorCommandOutput) => void
  ): Promise<DeleteFindingAggregatorCommandOutput> | void {
    const command = new DeleteFindingAggregatorCommand(args);
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
   * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
   */
  public deleteInsight(
    args: DeleteInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInsightCommandOutput>;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInsightCommandOutput) => void),
    cb?: (err: any, data?: DeleteInsightCommandOutput) => void
  ): Promise<DeleteInsightCommandOutput> | void {
    const command = new DeleteInsightCommand(args);
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
   * <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p>
   *          <p>This operation is only used by accounts that are not part of an organization.
   *          Organization accounts do not receive invitations.</p>
   */
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvitationsCommandOutput>;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInvitationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): Promise<DeleteInvitationsCommandOutput> | void {
    const command = new DeleteInvitationsCommand(args);
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
   * <p>Deletes the specified member accounts from Security Hub.</p>
   *          <p>Can be used to delete member accounts that belong to an organization as well as member
   *          accounts that were invited manually.</p>
   */
  public deleteMembers(
    args: DeleteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembersCommandOutput>;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMembersCommandOutput) => void),
    cb?: (err: any, data?: DeleteMembersCommandOutput) => void
  ): Promise<DeleteMembersCommandOutput> | void {
    const command = new DeleteMembersCommand(args);
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
   * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
   */
  public describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionTargetsCommandOutput>;
  public describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void
  ): void;
  public describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionTargetsCommandOutput) => void
  ): void;
  public describeActionTargets(
    args: DescribeActionTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActionTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeActionTargetsCommandOutput) => void
  ): Promise<DescribeActionTargetsCommandOutput> | void {
    const command = new DescribeActionTargetsCommand(args);
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
   * <p>Returns details about the Hub resource in your account, including the
   *          <code>HubArn</code> and the time when you enabled Security Hub.</p>
   */
  public describeHub(args: DescribeHubCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHubCommandOutput>;
  public describeHub(args: DescribeHubCommandInput, cb: (err: any, data?: DescribeHubCommandOutput) => void): void;
  public describeHub(
    args: DescribeHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHubCommandOutput) => void
  ): void;
  public describeHub(
    args: DescribeHubCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHubCommandOutput) => void),
    cb?: (err: any, data?: DescribeHubCommandOutput) => void
  ): Promise<DescribeHubCommandOutput> | void {
    const command = new DescribeHubCommand(args);
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
   * <p>Returns information about the Organizations configuration for Security Hub. Can only be
   *          called from a Security Hub administrator account.</p>
   */
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): Promise<DescribeOrganizationConfigurationCommandOutput> | void {
    const command = new DescribeOrganizationConfigurationCommand(args);
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
   * <p>Returns information about product integrations in Security Hub.</p>
   *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
   *          the results only include that integration.</p>
   *          <p>If you do not provide an integration ARN, then the results include all of the available
   *          product integrations. </p>
   */
  public describeProducts(
    args: DescribeProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductsCommandOutput>;
  public describeProducts(
    args: DescribeProductsCommandInput,
    cb: (err: any, data?: DescribeProductsCommandOutput) => void
  ): void;
  public describeProducts(
    args: DescribeProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductsCommandOutput) => void
  ): void;
  public describeProducts(
    args: DescribeProductsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProductsCommandOutput) => void),
    cb?: (err: any, data?: DescribeProductsCommandOutput) => void
  ): Promise<DescribeProductsCommandOutput> | void {
    const command = new DescribeProductsCommand(args);
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
   * <p>Returns a list of the available standards in Security Hub.</p>
   *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
   */
  public describeStandards(
    args: DescribeStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStandardsCommandOutput>;
  public describeStandards(
    args: DescribeStandardsCommandInput,
    cb: (err: any, data?: DescribeStandardsCommandOutput) => void
  ): void;
  public describeStandards(
    args: DescribeStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStandardsCommandOutput) => void
  ): void;
  public describeStandards(
    args: DescribeStandardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStandardsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStandardsCommandOutput) => void
  ): Promise<DescribeStandardsCommandOutput> | void {
    const command = new DescribeStandardsCommand(args);
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
   * <p>Returns a list of security standards controls.</p>
   *          <p>For each control, the results include information about whether it is currently enabled,
   *          the severity, and a link to remediation information.</p>
   */
  public describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStandardsControlsCommandOutput>;
  public describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void
  ): void;
  public describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStandardsControlsCommandOutput) => void
  ): void;
  public describeStandardsControls(
    args: DescribeStandardsControlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStandardsControlsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStandardsControlsCommandOutput) => void
  ): Promise<DescribeStandardsControlsCommandOutput> | void {
    const command = new DescribeStandardsControlsCommand(args);
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
   * <p>Disables the integration of the specified product with Security Hub. After the integration is
   *          disabled, findings from that product are no longer sent to Security Hub.</p>
   */
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableImportFindingsForProductCommandOutput>;
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void
  ): void;
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void
  ): void;
  public disableImportFindingsForProduct(
    args: DisableImportFindingsForProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableImportFindingsForProductCommandOutput) => void),
    cb?: (err: any, data?: DisableImportFindingsForProductCommandOutput) => void
  ): Promise<DisableImportFindingsForProductCommandOutput> | void {
    const command = new DisableImportFindingsForProductCommand(args);
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
   * <p>Disables a Security Hub administrator account. Can only be called by the organization
   *          management account.</p>
   */
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): Promise<DisableOrganizationAdminAccountCommandOutput> | void {
    const command = new DisableOrganizationAdminAccountCommand(args);
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
   * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all
   *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
   *          <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated
   *          member accounts.</p>
   *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
   *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
   *          are disabled, and your administrator and member account associations are removed.</p>
   *          <p>If you want to save your existing findings, you must export them before you disable
   *          Security Hub.</p>
   */
  public disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSecurityHubCommandOutput>;
  public disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    cb: (err: any, data?: DisableSecurityHubCommandOutput) => void
  ): void;
  public disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSecurityHubCommandOutput) => void
  ): void;
  public disableSecurityHub(
    args: DisableSecurityHubCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableSecurityHubCommandOutput) => void),
    cb?: (err: any, data?: DisableSecurityHubCommandOutput) => void
  ): Promise<DisableSecurityHubCommandOutput> | void {
    const command = new DisableSecurityHubCommand(args);
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
   * <p>Disassociates the current Security Hub member account from the associated administrator
   *          account.</p>
   *          <p>This operation is only used by accounts that are not part of an organization. For
   *          organization accounts, only the administrator account can
   *          disassociate a member account.</p>
   */
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): Promise<DisassociateFromAdministratorAccountCommandOutput> | void {
    const command = new DisassociateFromAdministratorAccountCommand(args);
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
   * @deprecated
   *
   * <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p>
   *          <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p>
   *          <p>Disassociates the current Security Hub member account from the associated administrator
   *          account.</p>
   *          <p>This operation is only used by accounts that are not part of an organization. For
   *          organization accounts, only the administrator account can
   *          disassociate a member account.</p>
   */
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromMasterAccountCommandOutput>;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFromMasterAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): Promise<DisassociateFromMasterAccountCommandOutput> | void {
    const command = new DisassociateFromMasterAccountCommand(args);
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
   * <p>Disassociates the specified member accounts from the associated administrator account.</p>
   *          <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that
   *          were invited manually.</p>
   */
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembersCommandOutput>;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMembersCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): Promise<DisassociateMembersCommandOutput> | void {
    const command = new DisassociateMembersCommand(args);
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
   * <p>Enables the integration of a partner product with Security Hub. Integrated products send
   *          findings to Security Hub.</p>
   *          <p>When you enable a product integration, a permissions policy that grants permission for
   *          the product to send findings to Security Hub is applied.</p>
   */
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableImportFindingsForProductCommandOutput>;
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void
  ): void;
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void
  ): void;
  public enableImportFindingsForProduct(
    args: EnableImportFindingsForProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableImportFindingsForProductCommandOutput) => void),
    cb?: (err: any, data?: EnableImportFindingsForProductCommandOutput) => void
  ): Promise<EnableImportFindingsForProductCommandOutput> | void {
    const command = new EnableImportFindingsForProductCommand(args);
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
   * <p>Designates the Security Hub administrator account for an organization. Can only be called by
   *          the organization management account.</p>
   */
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): Promise<EnableOrganizationAdminAccountCommandOutput> | void {
    const command = new EnableOrganizationAdminAccountCommand(args);
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
   * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
   *          request.</p>
   *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
   *          from other services that are integrated with Security Hub.</p>
   *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
   *          automatically enable the following standards.</p>
   *          <ul>
   *             <li>
   *                <p>CIS Amazon Web Services Foundations</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Foundational Security Best Practices</p>
   *             </li>
   *          </ul>
   *          <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p>
   *          <p>To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   *          <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the
   *                <code>BatchDisableStandards</code> operation.</p>
   *          <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
   */
  public enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSecurityHubCommandOutput>;
  public enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    cb: (err: any, data?: EnableSecurityHubCommandOutput) => void
  ): void;
  public enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSecurityHubCommandOutput) => void
  ): void;
  public enableSecurityHub(
    args: EnableSecurityHubCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableSecurityHubCommandOutput) => void),
    cb?: (err: any, data?: EnableSecurityHubCommandOutput) => void
  ): Promise<EnableSecurityHubCommandOutput> | void {
    const command = new EnableSecurityHubCommand(args);
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
   * <p>Provides the details for the Security Hub administrator account for the current member account.</p>
   *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
   *          invited manually.</p>
   */
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdministratorAccountCommandOutput>;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAdministratorAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): Promise<GetAdministratorAccountCommandOutput> | void {
    const command = new GetAdministratorAccountCommand(args);
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
   * <p>Returns a list of the standards that are currently enabled.</p>
   */
  public getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnabledStandardsCommandOutput>;
  public getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void
  ): void;
  public getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnabledStandardsCommandOutput) => void
  ): void;
  public getEnabledStandards(
    args: GetEnabledStandardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnabledStandardsCommandOutput) => void),
    cb?: (err: any, data?: GetEnabledStandardsCommandOutput) => void
  ): Promise<GetEnabledStandardsCommandOutput> | void {
    const command = new GetEnabledStandardsCommand(args);
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
   * <p>Returns the current finding aggregation configuration.</p>
   */
  public getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingAggregatorCommandOutput>;
  public getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    cb: (err: any, data?: GetFindingAggregatorCommandOutput) => void
  ): void;
  public getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingAggregatorCommandOutput) => void
  ): void;
  public getFindingAggregator(
    args: GetFindingAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingAggregatorCommandOutput) => void),
    cb?: (err: any, data?: GetFindingAggregatorCommandOutput) => void
  ): Promise<GetFindingAggregatorCommandOutput> | void {
    const command = new GetFindingAggregatorCommand(args);
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
   * <p>Returns a list of findings that match the specified criteria.</p>
   *          <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
   */
  public getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  public getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
  public getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;
  public getFindings(
    args: GetFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsCommandOutput) => void
  ): Promise<GetFindingsCommandOutput> | void {
    const command = new GetFindingsCommand(args);
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
   * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
   */
  public getInsightResults(
    args: GetInsightResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightResultsCommandOutput>;
  public getInsightResults(
    args: GetInsightResultsCommandInput,
    cb: (err: any, data?: GetInsightResultsCommandOutput) => void
  ): void;
  public getInsightResults(
    args: GetInsightResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightResultsCommandOutput) => void
  ): void;
  public getInsightResults(
    args: GetInsightResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightResultsCommandOutput) => void),
    cb?: (err: any, data?: GetInsightResultsCommandOutput) => void
  ): Promise<GetInsightResultsCommandOutput> | void {
    const command = new GetInsightResultsCommand(args);
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
   * <p>Lists and describes insights for the specified insight ARNs.</p>
   */
  public getInsights(args: GetInsightsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightsCommandOutput>;
  public getInsights(args: GetInsightsCommandInput, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
  public getInsights(
    args: GetInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsCommandOutput) => void
  ): void;
  public getInsights(
    args: GetInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightsCommandOutput) => void),
    cb?: (err: any, data?: GetInsightsCommandOutput) => void
  ): Promise<GetInsightsCommandOutput> | void {
    const command = new GetInsightsCommand(args);
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
   * <p>Returns the count of all Security Hub membership invitations that were sent to the
   *          current member account, not including the currently accepted invitation. </p>
   */
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationsCountCommandOutput>;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInvitationsCountCommandOutput) => void),
    cb?: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): Promise<GetInvitationsCountCommandOutput> | void {
    const command = new GetInvitationsCountCommand(args);
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
   * @deprecated
   *
   * <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p>
   *          <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p>
   *          <p>Provides the details for the Security Hub administrator account for the current member account.</p>
   *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
   *          invited manually.</p>
   */
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMasterAccountCommandOutput>;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMasterAccountCommandOutput) => void),
    cb?: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): Promise<GetMasterAccountCommandOutput> | void {
    const command = new GetMasterAccountCommand(args);
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
   * <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p>
   *          <p>An administrator account can be either the delegated Security Hub administrator account for an
   *          organization or an administrator account that enabled Security Hub manually.</p>
   *          <p>The results include both member accounts that are managed using Organizations and accounts that
   *          were invited manually.</p>
   */
  public getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
  public getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
  public getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;
  public getMembers(
    args: GetMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMembersCommandOutput) => void),
    cb?: (err: any, data?: GetMembersCommandOutput) => void
  ): Promise<GetMembersCommandOutput> | void {
    const command = new GetMembersCommand(args);
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
   * <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that
   *          the invitation is sent from.</p>
   *          <p>This operation is only used to invite accounts that do not belong to an organization.
   *          Organization accounts do not receive invitations.</p>
   *          <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p>
   *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
   *          account, the administrator account can view the findings generated from the member account.</p>
   */
  public inviteMembers(
    args: InviteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteMembersCommandOutput>;
  public inviteMembers(
    args: InviteMembersCommandInput,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InviteMembersCommandOutput) => void),
    cb?: (err: any, data?: InviteMembersCommandOutput) => void
  ): Promise<InviteMembersCommandOutput> | void {
    const command = new InviteMembersCommand(args);
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
   * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
   *          findings from in Security Hub.</p>
   */
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnabledProductsForImportCommandOutput>;
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void
  ): void;
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void
  ): void;
  public listEnabledProductsForImport(
    args: ListEnabledProductsForImportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnabledProductsForImportCommandOutput) => void),
    cb?: (err: any, data?: ListEnabledProductsForImportCommandOutput) => void
  ): Promise<ListEnabledProductsForImportCommandOutput> | void {
    const command = new ListEnabledProductsForImportCommand(args);
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
   * <p>If finding aggregation is enabled, then <code>ListFindingAggregators</code> returns the ARN of the finding aggregator. You can run this operation from any Region.</p>
   */
  public listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingAggregatorsCommandOutput>;
  public listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    cb: (err: any, data?: ListFindingAggregatorsCommandOutput) => void
  ): void;
  public listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingAggregatorsCommandOutput) => void
  ): void;
  public listFindingAggregators(
    args: ListFindingAggregatorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingAggregatorsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingAggregatorsCommandOutput) => void
  ): Promise<ListFindingAggregatorsCommandOutput> | void {
    const command = new ListFindingAggregatorsCommand(args);
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
   * <p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p>
   *          <p>This operation is only used by accounts that are managed by invitation.
   *          Accounts that are managed using the integration with Organizations do not receive invitations.</p>
   */
  public listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  public listInvitations(
    args: ListInvitationsCommandInput,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInvitationsCommandOutput) => void),
    cb?: (err: any, data?: ListInvitationsCommandOutput) => void
  ): Promise<ListInvitationsCommandOutput> | void {
    const command = new ListInvitationsCommand(args);
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
   * <p>Lists details about all member accounts for the current Security Hub administrator
   *          account.</p>
   *          <p>The results include both member accounts that belong to an organization and member
   *          accounts that were invited manually.</p>
   */
  public listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  public listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  public listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMembersCommandOutput) => void),
    cb?: (err: any, data?: ListMembersCommandOutput) => void
  ): Promise<ListMembersCommandOutput> | void {
    const command = new ListMembersCommand(args);
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
   * <p>Lists the Security Hub administrator accounts. Can only be called by the organization
   *          management account.</p>
   */
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): Promise<ListOrganizationAdminAccountsCommandOutput> | void {
    const command = new ListOrganizationAdminAccountsCommand(args);
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
   * <p>Returns a list of tags associated with a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Adds one or more tags to a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes one or more tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates the name and description of a custom action target in Security Hub.</p>
   */
  public updateActionTarget(
    args: UpdateActionTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionTargetCommandOutput>;
  public updateActionTarget(
    args: UpdateActionTargetCommandInput,
    cb: (err: any, data?: UpdateActionTargetCommandOutput) => void
  ): void;
  public updateActionTarget(
    args: UpdateActionTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionTargetCommandOutput) => void
  ): void;
  public updateActionTarget(
    args: UpdateActionTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateActionTargetCommandOutput) => void),
    cb?: (err: any, data?: UpdateActionTargetCommandOutput) => void
  ): Promise<UpdateActionTargetCommandOutput> | void {
    const command = new UpdateActionTargetCommand(args);
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
   * <p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p>
   *          <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region.
   *       </p>
   */
  public updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingAggregatorCommandOutput>;
  public updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    cb: (err: any, data?: UpdateFindingAggregatorCommandOutput) => void
  ): void;
  public updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingAggregatorCommandOutput) => void
  ): void;
  public updateFindingAggregator(
    args: UpdateFindingAggregatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFindingAggregatorCommandOutput) => void),
    cb?: (err: any, data?: UpdateFindingAggregatorCommandOutput) => void
  ): Promise<UpdateFindingAggregatorCommandOutput> | void {
    const command = new UpdateFindingAggregatorCommand(args);
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
   * <p>
   *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
   *             <code>BatchUpdateFindings</code>.</p>
   *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
   *          findings that the filter attributes specify. Any member account that can view the finding
   *          also sees the update to the finding.</p>
   */
  public updateFindings(
    args: UpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsCommandOutput>;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFindingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): Promise<UpdateFindingsCommandOutput> | void {
    const command = new UpdateFindingsCommand(args);
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
   * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
   */
  public updateInsight(
    args: UpdateInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInsightCommandOutput>;
  public updateInsight(
    args: UpdateInsightCommandInput,
    cb: (err: any, data?: UpdateInsightCommandOutput) => void
  ): void;
  public updateInsight(
    args: UpdateInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInsightCommandOutput) => void
  ): void;
  public updateInsight(
    args: UpdateInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInsightCommandOutput) => void),
    cb?: (err: any, data?: UpdateInsightCommandOutput) => void
  ): Promise<UpdateInsightCommandOutput> | void {
    const command = new UpdateInsightCommand(args);
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
   * <p>Used to update the configuration related to Organizations. Can only be called from a
   *          Security Hub administrator account.</p>
   */
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): Promise<UpdateOrganizationConfigurationCommandOutput> | void {
    const command = new UpdateOrganizationConfigurationCommand(args);
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
   * <p>Updates configuration options for Security Hub.</p>
   */
  public updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityHubConfigurationCommandOutput>;
  public updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void
  ): void;
  public updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void
  ): void;
  public updateSecurityHubConfiguration(
    args: UpdateSecurityHubConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityHubConfigurationCommandOutput) => void
  ): Promise<UpdateSecurityHubConfigurationCommandOutput> | void {
    const command = new UpdateSecurityHubConfigurationCommand(args);
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
   * <p>Used to control whether an individual security standard control is enabled or
   *          disabled.</p>
   */
  public updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStandardsControlCommandOutput>;
  public updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void
  ): void;
  public updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStandardsControlCommandOutput) => void
  ): void;
  public updateStandardsControl(
    args: UpdateStandardsControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStandardsControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateStandardsControlCommandOutput) => void
  ): Promise<UpdateStandardsControlCommandOutput> | void {
    const command = new UpdateStandardsControlCommand(args);
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
