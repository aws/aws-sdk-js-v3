// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DetectiveClient } from "./DetectiveClient";

/**
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
export class Detective extends DetectiveClient {
  /**
   * <p>Accepts an invitation for the member account to contribute data to a behavior graph.
   *          This operation can only be called by an invited member account. </p>
   *          <p>The request provides the ARN of behavior graph.</p>
   *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
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
   * <p>Gets data source package information for the behavior graph.</p>
   */
  public batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetGraphMemberDatasourcesCommandOutput>;
  public batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    cb: (err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void
  ): void;
  public batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void
  ): void;
  public batchGetGraphMemberDatasources(
    args: BatchGetGraphMemberDatasourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetGraphMemberDatasourcesCommandOutput) => void
  ): Promise<BatchGetGraphMemberDatasourcesCommandOutput> | void {
    const command = new BatchGetGraphMemberDatasourcesCommand(args);
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
   * <p>Gets information on the data source package history for an account.</p>
   */
  public batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMembershipDatasourcesCommandOutput>;
  public batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    cb: (err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void
  ): void;
  public batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void
  ): void;
  public batchGetMembershipDatasources(
    args: BatchGetMembershipDatasourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetMembershipDatasourcesCommandOutput) => void
  ): Promise<BatchGetMembershipDatasourcesCommandOutput> | void {
    const command = new BatchGetMembershipDatasourcesCommand(args);
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
   * <p>Creates a new behavior graph for the calling account, and sets that account as the
   *          administrator account. This operation is called by the account that is enabling Detective.</p>
   *          <p>Before you try to enable Detective, make sure that your account has been
   *          enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this
   *          requirement, you cannot enable Detective. If you do meet the GuardDuty
   *          prerequisite, then when you make the request to enable Detective, it checks
   *          whether your data volume is within the Detective quota. If it exceeds the quota,
   *          then you cannot enable Detective. </p>
   *          <p>The operation also enables Detective for the calling account in the currently
   *          selected Region. It returns the ARN of the new behavior graph.</p>
   *          <p>
   *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
   *          the new behavior graph.</p>
   *          <p>An account can only be the administrator account for one behavior graph within a Region.
   *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
   *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
   */
  public createGraph(args: CreateGraphCommandInput, options?: __HttpHandlerOptions): Promise<CreateGraphCommandOutput>;
  public createGraph(args: CreateGraphCommandInput, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
  public createGraph(
    args: CreateGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphCommandOutput) => void
  ): void;
  public createGraph(
    args: CreateGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGraphCommandOutput) => void),
    cb?: (err: any, data?: CreateGraphCommandOutput) => void
  ): Promise<CreateGraphCommandOutput> | void {
    const command = new CreateGraphCommand(args);
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
   *             <code>CreateMembers</code> is used to send invitations to accounts. For the organization
   *          behavior graph, the Detective administrator account uses
   *             <code>CreateMembers</code> to enable organization accounts as member accounts.</p>
   *          <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified
   *             Amazon Web Services accounts to be member accounts in the behavior graph. This operation
   *          can only be called by the administrator account for a behavior graph. </p>
   *          <p>
   *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
   *          The administrator can optionally specify to not send invitation emails to the member
   *          accounts. This would be used when the administrator manages their member accounts
   *          centrally.</p>
   *          <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code>
   *          attempts to enable the accounts. The organization accounts do not receive
   *          invitations.</p>
   *          <p>The request provides the behavior graph ARN and the list of accounts to invite or to
   *          enable.</p>
   *          <p>The response separates the requested accounts into two lists:</p>
   *          <ul>
   *             <li>
   *                <p>The accounts that <code>CreateMembers</code> was able to process. For invited
   *                accounts, includes member accounts that are being verified, that have passed
   *                verification and are to be invited, and that have failed verification. For
   *                organization accounts in the organization behavior graph, includes accounts that can
   *                be enabled and that cannot be enabled.</p>
   *             </li>
   *             <li>
   *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
   *                includes accounts that were already invited to be member accounts in the behavior
   *                graph.</p>
   *             </li>
   *          </ul>
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
   * <p>Disables the specified behavior graph and queues it to be deleted. This operation
   *          removes the behavior graph from each member account's list of behavior graphs.</p>
   *          <p>
   *             <code>DeleteGraph</code> can only be called by the administrator account for a behavior
   *          graph.</p>
   */
  public deleteGraph(args: DeleteGraphCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGraphCommandOutput>;
  public deleteGraph(args: DeleteGraphCommandInput, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
  public deleteGraph(
    args: DeleteGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphCommandOutput) => void
  ): void;
  public deleteGraph(
    args: DeleteGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGraphCommandOutput) => void),
    cb?: (err: any, data?: DeleteGraphCommandOutput) => void
  ): Promise<DeleteGraphCommandOutput> | void {
    const command = new DeleteGraphCommand(args);
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
   * <p>Removes the specified member accounts from the behavior graph. The removed accounts no
   *          longer contribute data to the behavior graph. This operation can only be called by the
   *          administrator account for the behavior graph.</p>
   *          <p>For invited accounts, the removed accounts are deleted from the list of accounts in the
   *          behavior graph. To restore the account, the administrator account must send another
   *          invitation.</p>
   *          <p>For organization accounts in the organization behavior graph, the Detective
   *          administrator account can always enable the organization account again. Organization
   *          accounts that are not enabled as member accounts are not included in the
   *             <code>ListMembers</code> results for the organization behavior graph.</p>
   *          <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own
   *          account from the behavior graph. To disable a behavior graph, the administrator account
   *          uses the <code>DeleteGraph</code> API method.</p>
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
   * <p>Returns information about the configuration for the organization behavior graph.
   *          Currently indicates whether to automatically enable new organization accounts as member
   *          accounts.</p>
   *          <p>Can only be called by the Detective administrator account for the organization. </p>
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
   * <p>Removes the Detective administrator account in the current Region. Deletes the
   *          organization behavior graph.</p>
   *          <p>Can only be called by the organization management account.</p>
   *          <p>Removing the Detective administrator account does not affect the delegated
   *          administrator account for Detective in Organizations.</p>
   *          <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
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
   * <p>Removes the member account from the specified behavior graph. This operation can only be
   *          called by an invited member account that has the <code>ENABLED</code> status.</p>
   *          <p>
   *             <code>DisassociateMembership</code> cannot be called by an organization account in the
   *          organization behavior graph. For the organization behavior graph, the Detective
   *          administrator account determines which organization accounts to enable or disable as member
   *          accounts.</p>
   */
  public disassociateMembership(
    args: DisassociateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembershipCommandOutput>;
  public disassociateMembership(
    args: DisassociateMembershipCommandInput,
    cb: (err: any, data?: DisassociateMembershipCommandOutput) => void
  ): void;
  public disassociateMembership(
    args: DisassociateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembershipCommandOutput) => void
  ): void;
  public disassociateMembership(
    args: DisassociateMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMembershipCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMembershipCommandOutput) => void
  ): Promise<DisassociateMembershipCommandOutput> | void {
    const command = new DisassociateMembershipCommand(args);
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
   * <p>Designates the Detective administrator account for the organization in the
   *          current Region.</p>
   *          <p>If the account does not have Detective enabled, then enables Detective
   *          for that account and creates a new behavior graph.</p>
   *          <p>Can only be called by the organization management account.</p>
   *          <p>If the organization has a delegated administrator account in Organizations, then the
   *             Detective administrator account must be either the delegated administrator
   *          account or the organization management account.</p>
   *          <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other
   *          than the organization management account, Detective calls Organizations to
   *          make that account the delegated administrator account for Detective. The
   *          organization management account cannot be the delegated administrator account.</p>
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
   * <p>Returns the membership details for specified member accounts for a behavior
   *          graph.</p>
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
   * <p>Lists data source packages in the behavior graph.</p>
   */
  public listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasourcePackagesCommandOutput>;
  public listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    cb: (err: any, data?: ListDatasourcePackagesCommandOutput) => void
  ): void;
  public listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasourcePackagesCommandOutput) => void
  ): void;
  public listDatasourcePackages(
    args: ListDatasourcePackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasourcePackagesCommandOutput) => void),
    cb?: (err: any, data?: ListDatasourcePackagesCommandOutput) => void
  ): Promise<ListDatasourcePackagesCommandOutput> | void {
    const command = new ListDatasourcePackagesCommand(args);
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
   * <p>Returns the list of behavior graphs that the calling account is an administrator account
   *          of. This operation can only be called by an administrator account.</p>
   *          <p>Because an account can currently only be the administrator of one behavior graph within
   *          a Region, the results always contain a single behavior graph.</p>
   */
  public listGraphs(args: ListGraphsCommandInput, options?: __HttpHandlerOptions): Promise<ListGraphsCommandOutput>;
  public listGraphs(args: ListGraphsCommandInput, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
  public listGraphs(
    args: ListGraphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphsCommandOutput) => void
  ): void;
  public listGraphs(
    args: ListGraphsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGraphsCommandOutput) => void),
    cb?: (err: any, data?: ListGraphsCommandOutput) => void
  ): Promise<ListGraphsCommandOutput> | void {
    const command = new ListGraphsCommand(args);
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
   * <p>Retrieves the list of open and accepted behavior graph invitations for the member
   *          account. This operation can only be called by an invited member account.</p>
   *          <p>Open invitations are invitations that the member account has not responded to.</p>
   *          <p>The results do not include behavior graphs for which the member account declined the
   *          invitation. The results also do not include behavior graphs that the member account
   *          resigned from or was removed from.</p>
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
   * <p>Retrieves the list of member accounts for a behavior graph.</p>
   *          <p>For invited accounts, the results do not include member accounts that were removed from
   *          the behavior graph.</p>
   *          <p>For the organization behavior graph, the results do not include organization accounts
   *          that the Detective administrator account has not enabled as member
   *          accounts.</p>
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
   * <p>Returns information about the Detective administrator account for an
   *          organization. Can only be called by the organization management account.</p>
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
   * <p>Returns the tag values that are assigned to a behavior graph.</p>
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
   * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
   *          must be called by an invited member account that has the <code>INVITED</code>
   *          status.</p>
   *          <p>
   *             <code>RejectInvitation</code> cannot be called by an organization account in the
   *          organization behavior graph. In the organization behavior graph, organization accounts do
   *          not receive an invitation.</p>
   */
  public rejectInvitation(
    args: RejectInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInvitationCommandOutput>;
  public rejectInvitation(
    args: RejectInvitationCommandInput,
    cb: (err: any, data?: RejectInvitationCommandOutput) => void
  ): void;
  public rejectInvitation(
    args: RejectInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInvitationCommandOutput) => void
  ): void;
  public rejectInvitation(
    args: RejectInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectInvitationCommandOutput) => void),
    cb?: (err: any, data?: RejectInvitationCommandOutput) => void
  ): Promise<RejectInvitationCommandOutput> | void {
    const command = new RejectInvitationCommand(args);
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
   * <p>Sends a request to enable data ingest for a member account that has a status of
   *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
   *          <p>For valid member accounts, the status is updated as follows.</p>
   *          <ul>
   *             <li>
   *                <p>If Detective enabled the member account, then the new status is
   *                   <code>ENABLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If Detective cannot enable the member account, the status remains
   *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
   *             </li>
   *          </ul>
   */
  public startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringMemberCommandOutput>;
  public startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void
  ): void;
  public startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void
  ): void;
  public startMonitoringMember(
    args: StartMonitoringMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMonitoringMemberCommandOutput) => void),
    cb?: (err: any, data?: StartMonitoringMemberCommandOutput) => void
  ): Promise<StartMonitoringMemberCommandOutput> | void {
    const command = new StartMonitoringMemberCommand(args);
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
   * <p>Applies tag values to a behavior graph.</p>
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
   * <p>Removes tags from a behavior graph.</p>
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
   * <p>Starts a data source packages for the behavior graph.</p>
   */
  public updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasourcePackagesCommandOutput>;
  public updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    cb: (err: any, data?: UpdateDatasourcePackagesCommandOutput) => void
  ): void;
  public updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasourcePackagesCommandOutput) => void
  ): void;
  public updateDatasourcePackages(
    args: UpdateDatasourcePackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatasourcePackagesCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatasourcePackagesCommandOutput) => void
  ): Promise<UpdateDatasourcePackagesCommandOutput> | void {
    const command = new UpdateDatasourcePackagesCommand(args);
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
   * <p>Updates the configuration for the Organizations integration in the current Region.
   *          Can only be called by the Detective administrator account for the
   *          organization.</p>
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
}
