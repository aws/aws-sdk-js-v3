import { DetectiveClient } from "./DetectiveClient";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
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
  DisassociateMembershipCommand,
  DisassociateMembershipCommandInput,
  DisassociateMembershipCommandOutput,
} from "./commands/DisassociateMembershipCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "./commands/ListGraphsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Detective uses machine learning and purpose-built visualizations to help you analyze and
 *          investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically
 *          extracts time-based events such as login attempts, API calls, and network traffic from
 *          AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
 *          Amazon GuardDuty.</p>
 *          <p>The Detective API primarily supports the creation and management of behavior graphs. A
 *          behavior graph contains the extracted data from a set of member accounts, and is created
 *          and managed by a master account.</p>
 *          <p>Every behavior graph is specific to a Region. You can only use the API to manage graphs
 *          that belong to the Region that is associated with the currently selected endpoint.</p>
 *          <p>A Detective master account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p>
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
 *          </ul>
 *          <p>A member account can use the Detective API to do the following:</p>
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
   * <p>Creates a new behavior graph for the calling account, and sets that account as the
   *          master account. This operation is called by the account that is enabling Detective.</p>
   *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
   *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
   *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
   *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
   *          quota, then you cannot enable Detective. </p>
   *          <p>The operation also enables Detective for the calling account in the currently selected
   *          Region. It returns the ARN of the new behavior graph.</p>
   *          <p>
   *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
   *          the new behavior graph.</p>
   *          <p>An account can only be the master account for one behavior graph within a Region. If the
   *          same account calls <code>CreateGraph</code> with the same master account, it always returns
   *          the same behavior graph ARN. It does not create a new behavior graph.</p>
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
   * <p>Sends a request to invite the specified AWS accounts to be member accounts in the
   *          behavior graph. This operation can only be called by the master account for a behavior
   *          graph. </p>
   *          <p>
   *             <code>CreateMembers</code> verifies the accounts and then sends invitations to the
   *          verified accounts.</p>
   *          <p>The request provides the behavior graph ARN and the list of accounts to invite.</p>
   *          <p>The response separates the requested accounts into two lists:</p>
   *          <ul>
   *             <li>
   *                <p>The accounts that <code>CreateMembers</code> was able to start the verification
   *                for. This list includes member accounts that are being verified, that have passed
   *                verification and are being sent an invitation, and that have failed
   *                verification.</p>
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
   *          removes the graph from each member account's list of behavior graphs.</p>
   *          <p>
   *             <code>DeleteGraph</code> can only be called by the master account for a behavior
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
   * <p>Deletes one or more member accounts from the master account behavior graph. This
   *          operation can only be called by a Detective master account. That account cannot use
   *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
   *          disable a behavior graph, the master account uses the <code>DeleteGraph</code> API
   *          method.</p>
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
   * <p>Removes the member account from the specified behavior graph. This operation can only be
   *          called by a member account that has the <code>ENABLED</code> status.</p>
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
   * <p>Returns the list of behavior graphs that the calling account is a master of. This
   *          operation can only be called by a master account.</p>
   *          <p>Because an account can currently only be the master of one behavior graph within a
   *          Region, the results always contain a single graph.</p>
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
   *          account. This operation can only be called by a member account.</p>
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
   * <p>Retrieves the list of member accounts for a behavior graph. Does not return member
   *          accounts that were removed from the behavior graph.</p>
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
   * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
   *          must be called by a member account that has the <code>INVITED</code> status.</p>
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
   *          <code>ACCEPTED_BUT_DISABLED</code>.</p>
   *          <p>For valid member accounts, the status is updated as follows.</p>
   *          <ul>
   *             <li>
   *                <p>If Detective enabled the member account, then the new status is
   *                <code>ENABLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If Detective cannot enable the member account, the status remains
   *                <code>ACCEPTED_BUT_DISABLED</code>. </p>
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
}
