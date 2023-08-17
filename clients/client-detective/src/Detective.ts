// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  BatchGetGraphMemberDatasourcesCommand,
  BatchGetGraphMemberDatasourcesCommandInput,
  BatchGetGraphMemberDatasourcesCommandOutput,
} from "./commands/BatchGetGraphMemberDatasourcesCommand";
import {
  BatchGetMembershipDatasourcesCommand,
  BatchGetMembershipDatasourcesCommandInput,
  BatchGetMembershipDatasourcesCommandOutput,
} from "./commands/BatchGetMembershipDatasourcesCommand";
import { CreateGraphCommand, CreateGraphCommandInput, CreateGraphCommandOutput } from "./commands/CreateGraphCommand";
import {
  CreateMembersCommand,
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "./commands/CreateMembersCommand";
import { DeleteGraphCommand, DeleteGraphCommandInput, DeleteGraphCommandOutput } from "./commands/DeleteGraphCommand";
import {
  DeleteMembersCommand,
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "./commands/DeleteMembersCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateMembershipCommand,
  DisassociateMembershipCommandInput,
  DisassociateMembershipCommandOutput,
} from "./commands/DisassociateMembershipCommand";
import {
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  ListDatasourcePackagesCommand,
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput,
} from "./commands/ListDatasourcePackagesCommand";
import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "./commands/ListGraphsCommand";
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
import {
  RejectInvitationCommand,
  RejectInvitationCommandInput,
  RejectInvitationCommandOutput,
} from "./commands/RejectInvitationCommand";
import {
  StartMonitoringMemberCommand,
  StartMonitoringMemberCommandInput,
  StartMonitoringMemberCommandOutput,
} from "./commands/StartMonitoringMemberCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatasourcePackagesCommand,
  UpdateDatasourcePackagesCommandInput,
  UpdateDatasourcePackagesCommandOutput,
} from "./commands/UpdateDatasourcePackagesCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import { DetectiveClient, DetectiveClientConfig } from "./DetectiveClient";

const commands = {
  AcceptInvitationCommand,
  BatchGetGraphMemberDatasourcesCommand,
  BatchGetMembershipDatasourcesCommand,
  CreateGraphCommand,
  CreateMembersCommand,
  DeleteGraphCommand,
  DeleteMembersCommand,
  DescribeOrganizationConfigurationCommand,
  DisableOrganizationAdminAccountCommand,
  DisassociateMembershipCommand,
  EnableOrganizationAdminAccountCommand,
  GetMembersCommand,
  ListDatasourcePackagesCommand,
  ListGraphsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListTagsForResourceCommand,
  RejectInvitationCommand,
  StartMonitoringMemberCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasourcePackagesCommand,
  UpdateOrganizationConfigurationCommand,
};

export interface Detective {
  /**
   * @see {@link AcceptInvitationCommand}
   */
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetGraphMemberDatasourcesCommand}
   */
  batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetGraphMemberDatasourcesCommandOutput>;
  batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    cb: (err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void
  ): void;
  batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetMembershipDatasourcesCommand}
   */
  batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMembershipDatasourcesCommandOutput>;
  batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    cb: (err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void
  ): void;
  batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphCommand}
   */
  createGraph(args: CreateGraphCommandInput, options?: __HttpHandlerOptions): Promise<CreateGraphCommandOutput>;
  createGraph(args: CreateGraphCommandInput, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
  createGraph(
    args: CreateGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembersCommand}
   */
  createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
  createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
  createMembers(
    args: CreateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGraphCommand}
   */
  deleteGraph(args: DeleteGraphCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGraphCommandOutput>;
  deleteGraph(args: DeleteGraphCommandInput, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
  deleteGraph(
    args: DeleteGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembersCommand}
   */
  deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
  deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
  deleteMembers(
    args: DeleteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   */
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOrganizationAdminAccountCommand}
   */
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMembershipCommand}
   */
  disassociateMembership(
    args: DisassociateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembershipCommandOutput>;
  disassociateMembership(
    args: DisassociateMembershipCommandInput,
    cb: (err: any, data?: DisassociateMembershipCommandOutput) => void
  ): void;
  disassociateMembership(
    args: DisassociateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOrganizationAdminAccountCommand}
   */
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembersCommand}
   */
  getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
  getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
  getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasourcePackagesCommand}
   */
  listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasourcePackagesCommandOutput>;
  listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    cb: (err: any, data?: ListDatasourcePackagesCommandOutput) => void
  ): void;
  listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasourcePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphsCommand}
   */
  listGraphs(args: ListGraphsCommandInput, options?: __HttpHandlerOptions): Promise<ListGraphsCommandOutput>;
  listGraphs(args: ListGraphsCommandInput, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
  listGraphs(
    args: ListGraphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvitationsCommand}
   */
  listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
  listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   */
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInvitationCommand}
   */
  rejectInvitation(
    args: RejectInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInvitationCommandOutput>;
  rejectInvitation(
    args: RejectInvitationCommandInput,
    cb: (err: any, data?: RejectInvitationCommandOutput) => void
  ): void;
  rejectInvitation(
    args: RejectInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMonitoringMemberCommand}
   */
  startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringMemberCommandOutput>;
  startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void
  ): void;
  startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasourcePackagesCommand}
   */
  updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasourcePackagesCommandOutput>;
  updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    cb: (err: any, data?: UpdateDatasourcePackagesCommandOutput) => void
  ): void;
  updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasourcePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationConfigurationCommand}
   */
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Detective uses machine learning and purpose-built visualizations to help you to
 *          analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such
 *          as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
 *             Amazon GuardDuty.</p>
 *          <p>The Detective API primarily supports the creation and management of behavior
 *          graphs. A behavior graph contains the extracted data from a set of member accounts, and is
 *          created and managed by an administrator account.</p>
 *          <p>To add a member account to the behavior graph, the administrator account sends an
 *          invitation to the account. When the account accepts the invitation, it becomes a member
 *          account in the behavior graph.</p>
 *          <p>Detective is also integrated with Organizations. The organization
 *          management account designates the Detective administrator account for the
 *          organization. That account becomes the administrator account for the organization behavior
 *          graph. The Detective administrator account is also the delegated administrator
 *          account for Detective in Organizations.</p>
 *          <p>The Detective administrator account can enable any organization account as a
 *          member account in the organization behavior graph. The organization accounts do not receive
 *          invitations. The Detective administrator account can also invite other accounts to
 *          the organization behavior graph.</p>
 *          <p>Every behavior graph is specific to a Region. You can only use the API to manage
 *          behavior graphs that belong to the Region that is associated with the currently selected
 *          endpoint.</p>
 *          <p>The administrator account for a behavior graph can use the Detective API to do
 *          the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable and disable Detective. Enabling Detective creates a new
 *                behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>View the list of member accounts in a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Add member accounts to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove member accounts from a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Apply tags to a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>The organization management account can use the Detective API to select the
 *          delegated administrator for Detective.</p>
 *          <p>The Detective administrator account for an organization can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Perform all of the functions of an administrator account.</p>
 *             </li>
 *             <li>
 *                <p>Determine whether to automatically enable new organization accounts as member
 *                accounts in the organization behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>An invited member account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>View the list of behavior graphs that they are invited to.</p>
 *             </li>
 *             <li>
 *                <p>Accept an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Decline an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove their account from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>
 *          <note>
 *             <p>We replaced the term "master account" with the term "administrator account." An
 *             administrator account is used to centrally manage multiple accounts. In the case of
 *                Detective, the administrator account manages the accounts in their behavior
 *             graph.</p>
 *          </note>
 */
export class Detective extends DetectiveClient implements Detective {}
createAggregatedClient(commands, Detective);
