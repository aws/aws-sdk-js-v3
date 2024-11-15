// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssignOpportunityCommand,
  AssignOpportunityCommandInput,
  AssignOpportunityCommandOutput,
} from "./commands/AssignOpportunityCommand";
import {
  AssociateOpportunityCommand,
  AssociateOpportunityCommandInput,
  AssociateOpportunityCommandOutput,
} from "./commands/AssociateOpportunityCommand";
import {
  CreateOpportunityCommand,
  CreateOpportunityCommandInput,
  CreateOpportunityCommandOutput,
} from "./commands/CreateOpportunityCommand";
import {
  DisassociateOpportunityCommand,
  DisassociateOpportunityCommandInput,
  DisassociateOpportunityCommandOutput,
} from "./commands/DisassociateOpportunityCommand";
import {
  GetAwsOpportunitySummaryCommand,
  GetAwsOpportunitySummaryCommandInput,
  GetAwsOpportunitySummaryCommandOutput,
} from "./commands/GetAwsOpportunitySummaryCommand";
import {
  GetEngagementInvitationCommand,
  GetEngagementInvitationCommandInput,
  GetEngagementInvitationCommandOutput,
} from "./commands/GetEngagementInvitationCommand";
import {
  GetOpportunityCommand,
  GetOpportunityCommandInput,
  GetOpportunityCommandOutput,
} from "./commands/GetOpportunityCommand";
import {
  ListEngagementInvitationsCommand,
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "./commands/ListEngagementInvitationsCommand";
import {
  ListOpportunitiesCommand,
  ListOpportunitiesCommandInput,
  ListOpportunitiesCommandOutput,
} from "./commands/ListOpportunitiesCommand";
import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "./commands/ListSolutionsCommand";
import {
  RejectEngagementInvitationCommand,
  RejectEngagementInvitationCommandInput,
  RejectEngagementInvitationCommandOutput,
} from "./commands/RejectEngagementInvitationCommand";
import {
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementByAcceptingInvitationTaskCommandInput,
  StartEngagementByAcceptingInvitationTaskCommandOutput,
} from "./commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  StartEngagementFromOpportunityTaskCommand,
  StartEngagementFromOpportunityTaskCommandInput,
  StartEngagementFromOpportunityTaskCommandOutput,
} from "./commands/StartEngagementFromOpportunityTaskCommand";
import {
  UpdateOpportunityCommand,
  UpdateOpportunityCommandInput,
  UpdateOpportunityCommandOutput,
} from "./commands/UpdateOpportunityCommand";
import { PartnerCentralSellingClient, PartnerCentralSellingClientConfig } from "./PartnerCentralSellingClient";

const commands = {
  AssignOpportunityCommand,
  AssociateOpportunityCommand,
  CreateOpportunityCommand,
  DisassociateOpportunityCommand,
  GetAwsOpportunitySummaryCommand,
  GetEngagementInvitationCommand,
  GetOpportunityCommand,
  ListEngagementInvitationsCommand,
  ListOpportunitiesCommand,
  ListSolutionsCommand,
  RejectEngagementInvitationCommand,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementFromOpportunityTaskCommand,
  UpdateOpportunityCommand,
};

export interface PartnerCentralSelling {
  /**
   * @see {@link AssignOpportunityCommand}
   */
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignOpportunityCommandOutput>;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateOpportunityCommand}
   */
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOpportunityCommandOutput>;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpportunityCommand}
   */
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpportunityCommandOutput>;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOpportunityCommand}
   */
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOpportunityCommandOutput>;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAwsOpportunitySummaryCommand}
   */
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAwsOpportunitySummaryCommandOutput>;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngagementInvitationCommand}
   */
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEngagementInvitationCommandOutput>;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpportunityCommand}
   */
  getOpportunity(
    args: GetOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpportunityCommandOutput>;
  getOpportunity(args: GetOpportunityCommandInput, cb: (err: any, data?: GetOpportunityCommandOutput) => void): void;
  getOpportunity(
    args: GetOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementInvitationsCommand}
   */
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementInvitationsCommandOutput>;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunitiesCommand}
   */
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpportunitiesCommandOutput>;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionsCommand}
   */
  listSolutions(args: ListSolutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSolutionsCommandOutput>;
  listSolutions(args: ListSolutionsCommandInput, cb: (err: any, data?: ListSolutionsCommandOutput) => void): void;
  listSolutions(
    args: ListSolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectEngagementInvitationCommand}
   */
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectEngagementInvitationCommandOutput>;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementByAcceptingInvitationTaskCommand}
   */
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementByAcceptingInvitationTaskCommandOutput>;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementFromOpportunityTaskCommand}
   */
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementFromOpportunityTaskCommandOutput>;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpportunityCommand}
   */
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpportunityCommandOutput>;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;
}

/**
 * <fullname>AWS Partner Central API for Selling</fullname>
 *          <p>
 *             <b>AWS Partner Central API for Selling Reference Guide</b>
 *          </p>
 *          <p>This Amazon Web Services (AWS) Partner Central API reference is
 *       designed to help <a href="http://aws.amazon.com/partners/programs/">AWS
 *         Partners</a> integrate Customer Relationship Management (CRM)
 *       systems with AWS Partner Central. Partners can automate interactions with
 *       AWS Partner Central, which helps to ensure effective engagements in joint
 *       business activities.</p>
 *          <p>The API provides standard AWS API functionality. Access it by
 *       either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your
 *       programming language or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with
 *         AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p>
 *          <p class="title">
 *             <b>Features offered by AWS Partner Central API</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <b>Opportunity management:</b>
 *           Manages coselling opportunities through API actions such as
 *             <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>,
 *             <code>ListOpportunities</code>, <code>GetOpportunity</code>, and
 *             <code>AssignOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>AWS referral management:</b>
 *           Manages referrals shared by AWS using actions such as
 *             <code>ListEngagementInvitations</code>,
 *             <code>GetEngagementInvitation</code>,
 *             <code>StartEngagementByAcceptingInvitation</code>, and
 *             <code>RejectEngagementInvitation</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Entity association:</b>
 *           Associates related entities such as <i>AWS Products</i>,
 *             <i>Partner Solutions</i>, and <i>AWS
 *             Marketplace Private Offers</i> with opportunities using the
 *           actions <code>AssociateOpportunity</code>, and
 *             <code>DisassociateOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>View AWS opportunity
 *             details:</b> Retrieves real-time summaries of AWS
 *           opportunities using the <code>GetAWSOpportunitySummary</code>
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>List solutions:</b> Provides
 *           list APIs for listing partner offers using
 *           <code>ListSolutions</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Event subscription:</b>
 *           Subscribe to real-time opportunity updates through AWS EventBridge by
 *           using actions such as <i>Opportunity Created</i>,
 *             <i>Opportunity Updated</i>, <i>Engagement
 *             Invitation Accepted</i>, <i>Engagement Invitation
 *             Rejected</i>, and <i>Engagement Invitation
 *             Created</i>.</p>
 *             </li>
 *          </ol>
 * @public
 */
export class PartnerCentralSelling extends PartnerCentralSellingClient implements PartnerCentralSelling {}
createAggregatedClient(commands, PartnerCentralSelling);
