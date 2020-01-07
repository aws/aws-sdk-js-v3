import { DetectiveClient } from "./DetectiveClient";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { CreateGraphCommandInput, CreateGraphCommandOutput } from "./commands/CreateGraphCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { DeleteGraphCommandInput, DeleteGraphCommandOutput } from "./commands/DeleteGraphCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import { DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput } from "./commands/DisassociateMembershipCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { ListGraphsCommandInput, ListGraphsCommandOutput } from "./commands/ListGraphsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "./commands/RejectInvitationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <important>
 *             <p>Amazon Detective is currently in preview. The Detective API can only be used by accounts that
 *             are admitted into the preview.</p>
 *          </important>
 *          <p>Detective uses machine learning and purpose-built visualizations to help you analyze and
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
export declare class Detective extends DetectiveClient {
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Accepts an invitation for the member account to contribute data to a behavior graph.
     *          This operation can only be called by an invited member account. </p>
     *          <p>The request provides the ARN of behavior graph.</p>
     *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
     */
    acceptInvitation(args: AcceptInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInvitationCommandOutput>;
    acceptInvitation(args: AcceptInvitationCommandInput, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    acceptInvitation(args: AcceptInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Creates a new behavior graph for the calling account, and sets that account as the
     *          master account. This operation is called by the account that is enabling Detective.</p>
     *          <p>The operation also enables Detective for the calling account in the currently selected
     *          Region. It returns the ARN of the new behavior graph.</p>
     *          <p>
     *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
     *          the new behavior
     *          graph.</p>
     *          <p>An account can only be the master account for one behavior graph within a Region. If the
     *          same account calls <code>CreateGraph</code> with the same master account, it always returns
     *          the same behavior graph ARN. It does not create a new behavior graph.</p>
     */
    createGraph(args: CreateGraphCommandInput, options?: __HttpHandlerOptions): Promise<CreateGraphCommandOutput>;
    createGraph(args: CreateGraphCommandInput, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
    createGraph(args: CreateGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Sends a request to invite the specified AWS accounts to be member accounts in the
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
    createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
    createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    createMembers(args: CreateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Disables the specified behavior graph and queues it to be deleted. This operation
     *          removes the graph from each member account's list of behavior graphs.</p>
     *          <p>
     *             <code>DeleteGraph</code> can only be called by the master account for a behavior
     *          graph.</p>
     */
    deleteGraph(args: DeleteGraphCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGraphCommandOutput>;
    deleteGraph(args: DeleteGraphCommandInput, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
    deleteGraph(args: DeleteGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Deletes one or more member accounts from the master account behavior graph. This
     *          operation can only be called by a Detective master account. That account cannot use
     *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
     *          disable a behavior graph, the master account uses the <code>DeleteGraph</code> API
     *          method.</p>
     */
    deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
    deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    deleteMembers(args: DeleteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Removes the member account from the specified behavior graph. This operation can only be
     *          called by a member account that has the <code>ENABLED</code> status.</p>
     */
    disassociateMembership(args: DisassociateMembershipCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMembershipCommandOutput>;
    disassociateMembership(args: DisassociateMembershipCommandInput, cb: (err: any, data?: DisassociateMembershipCommandOutput) => void): void;
    disassociateMembership(args: DisassociateMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMembershipCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Returns the membership details for specified member accounts for a behavior
     *          graph.</p>
     */
    getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
    getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    getMembers(args: GetMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Returns the list of behavior graphs that the calling account is a master of. This
     *          operation can only be called by a master account.</p>
     *          <p>Because an account can currently only be the master of one behavior graph within a
     *          Region, the results always contain a single graph.</p>
     */
    listGraphs(args: ListGraphsCommandInput, options?: __HttpHandlerOptions): Promise<ListGraphsCommandOutput>;
    listGraphs(args: ListGraphsCommandInput, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
    listGraphs(args: ListGraphsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Retrieves the list of open and accepted behavior graph invitations for the member
     *          account. This operation can only be called by a member account.</p>
     *          <p>Open invitations are invitations that the member account has not responded to.</p>
     *          <p>The results do not include behavior graphs for which the member account declined the
     *          invitation. The results also do not include behavior graphs that the member account
     *          resigned from or was removed from.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Retrieves the list of member accounts for a behavior graph.
     *          Does not return member accounts that were removed from the behavior graph.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Amazon Detective is currently in preview.</p>
     *
     *          <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
     *          must be called by a member account that has the <code>INVITED</code> status.</p>
     */
    rejectInvitation(args: RejectInvitationCommandInput, options?: __HttpHandlerOptions): Promise<RejectInvitationCommandOutput>;
    rejectInvitation(args: RejectInvitationCommandInput, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
    rejectInvitation(args: RejectInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
}
