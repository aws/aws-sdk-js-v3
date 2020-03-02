import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
 */
export interface ApprovalThresholdPolicy {
  __type?: "ApprovalThresholdPolicy";
  /**
   * <p>The duration from the time that a proposal is created until it expires. If members cast neither the required number of <code>YES</code> votes to approve the proposal nor the number of <code>NO</code> votes required to reject it before the duration expires, the proposal is <code>EXPIRED</code> and <code>ProposalActions</code> are not carried out.</p>
   */
  ProposalDurationInHours?: number;

  /**
   * <p>Determines whether the vote percentage must be greater than the <code>ThresholdPercentage</code> or must be greater than or equal to the <code>ThreholdPercentage</code> to be approved.</p>
   */
  ThresholdComparator?: ThresholdComparator | string;

  /**
   * <p>The percentage of votes among all members that must be <code>YES</code> for a proposal to be approved. For example, a <code>ThresholdPercentage</code> value of <code>50</code> indicates 50%. The <code>ThresholdComparator</code> determines the precise comparison. If a <code>ThresholdPercentage</code> value of <code>50</code> is specified on a network with 10 members, along with a <code>ThresholdComparator</code> value of <code>GREATER_THAN</code>, this indicates that 6 <code>YES</code> votes are required for the proposal to be approved.</p>
   */
  ThresholdPercentage?: number;
}

export namespace ApprovalThresholdPolicy {
  export function isa(o: any): o is ApprovalThresholdPolicy {
    return __isa(o, "ApprovalThresholdPolicy");
  }
}

export interface CreateMemberInput {
  __type?: "CreateMemberInput";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique identifier of the invitation that is sent to the member to join the network.</p>
   */
  InvitationId: string | undefined;

  /**
   * <p>Member configuration parameters.</p>
   */
  MemberConfiguration: MemberConfiguration | undefined;

  /**
   * <p>The unique identifier of the network in which the member is created.</p>
   */
  NetworkId: string | undefined;
}

export namespace CreateMemberInput {
  export function isa(o: any): o is CreateMemberInput {
    return __isa(o, "CreateMemberInput");
  }
}

export interface CreateMemberOutput {
  __type?: "CreateMemberOutput";
  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId?: string;
}

export namespace CreateMemberOutput {
  export function isa(o: any): o is CreateMemberOutput {
    return __isa(o, "CreateMemberOutput");
  }
}

export interface CreateNetworkInput {
  __type?: "CreateNetworkInput";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An optional description for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework: Framework | string | undefined;

  /**
   * <p>
   *          Configuration properties of the blockchain framework relevant to the network configuration.
   *       </p>
   */
  FrameworkConfiguration?: NetworkFrameworkConfiguration;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion: string | undefined;

  /**
   * <p>Configuration properties for the first member within the network.</p>
   */
  MemberConfiguration: MemberConfiguration | undefined;

  /**
   * <p>The name of the network.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *          The voting rules used by the network to determine if a proposal is approved.
   *       </p>
   */
  VotingPolicy: VotingPolicy | undefined;
}

export namespace CreateNetworkInput {
  export function isa(o: any): o is CreateNetworkInput {
    return __isa(o, "CreateNetworkInput");
  }
}

export interface CreateNetworkOutput {
  __type?: "CreateNetworkOutput";
  /**
   * <p>The unique identifier for the first member within the network.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier for the network.</p>
   */
  NetworkId?: string;
}

export namespace CreateNetworkOutput {
  export function isa(o: any): o is CreateNetworkOutput {
    return __isa(o, "CreateNetworkOutput");
  }
}

export interface CreateNodeInput {
  __type?: "CreateNodeInput";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network in which this node runs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The properties of a node configuration.</p>
   */
  NodeConfiguration: NodeConfiguration | undefined;
}

export namespace CreateNodeInput {
  export function isa(o: any): o is CreateNodeInput {
    return __isa(o, "CreateNodeInput");
  }
}

export interface CreateNodeOutput {
  __type?: "CreateNodeOutput";
  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId?: string;
}

export namespace CreateNodeOutput {
  export function isa(o: any): o is CreateNodeOutput {
    return __isa(o, "CreateNodeOutput");
  }
}

export interface CreateProposalInput {
  __type?: "CreateProposalInput";
  /**
   * <p>The type of actions proposed, such as inviting a member or removing a member. The types of <code>Actions</code> in a proposal are mutually exclusive. For example, a proposal with <code>Invitations</code> actions cannot also contain <code>Removals</code> actions.</p>
   */
  Actions: ProposalActions | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string | undefined;
}

export namespace CreateProposalInput {
  export function isa(o: any): o is CreateProposalInput {
    return __isa(o, "CreateProposalInput");
  }
}

export interface CreateProposalOutput {
  __type?: "CreateProposalOutput";
  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId?: string;
}

export namespace CreateProposalOutput {
  export function isa(o: any): o is CreateProposalOutput {
    return __isa(o, "CreateProposalOutput");
  }
}

export interface DeleteMemberInput {
  __type?: "DeleteMemberInput";
  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network from which the member is removed.</p>
   */
  NetworkId: string | undefined;
}

export namespace DeleteMemberInput {
  export function isa(o: any): o is DeleteMemberInput {
    return __isa(o, "DeleteMemberInput");
  }
}

export interface DeleteMemberOutput {
  __type?: "DeleteMemberOutput";
}

export namespace DeleteMemberOutput {
  export function isa(o: any): o is DeleteMemberOutput {
    return __isa(o, "DeleteMemberOutput");
  }
}

export interface DeleteNodeInput {
  __type?: "DeleteNodeInput";
  /**
   * <p>The unique identifier of the member that owns this node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network that the node belongs to.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

export namespace DeleteNodeInput {
  export function isa(o: any): o is DeleteNodeInput {
    return __isa(o, "DeleteNodeInput");
  }
}

export interface DeleteNodeOutput {
  __type?: "DeleteNodeOutput";
}

export namespace DeleteNodeOutput {
  export function isa(o: any): o is DeleteNodeOutput {
    return __isa(o, "DeleteNodeOutput");
  }
}

export enum Edition {
  STANDARD = "STANDARD",
  STARTER = "STARTER"
}

export enum Framework {
  HYPERLEDGER_FABRIC = "HYPERLEDGER_FABRIC"
}

export interface GetMemberInput {
  __type?: "GetMemberInput";
  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   */
  NetworkId: string | undefined;
}

export namespace GetMemberInput {
  export function isa(o: any): o is GetMemberInput {
    return __isa(o, "GetMemberInput");
  }
}

export interface GetMemberOutput {
  __type?: "GetMemberOutput";
  /**
   * <p>The properties of a member.</p>
   */
  Member?: Member;
}

export namespace GetMemberOutput {
  export function isa(o: any): o is GetMemberOutput {
    return __isa(o, "GetMemberOutput");
  }
}

export interface GetNetworkInput {
  __type?: "GetNetworkInput";
  /**
   * <p>The unique identifier of the network to get information about.</p>
   */
  NetworkId: string | undefined;
}

export namespace GetNetworkInput {
  export function isa(o: any): o is GetNetworkInput {
    return __isa(o, "GetNetworkInput");
  }
}

export interface GetNetworkOutput {
  __type?: "GetNetworkOutput";
  /**
   * <p>An object containing network configuration parameters.</p>
   */
  Network?: Network;
}

export namespace GetNetworkOutput {
  export function isa(o: any): o is GetNetworkOutput {
    return __isa(o, "GetNetworkOutput");
  }
}

export interface GetNodeInput {
  __type?: "GetNodeInput";
  /**
   * <p>The unique identifier of the member that owns the node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network to which the node belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

export namespace GetNodeInput {
  export function isa(o: any): o is GetNodeInput {
    return __isa(o, "GetNodeInput");
  }
}

export interface GetNodeOutput {
  __type?: "GetNodeOutput";
  /**
   * <p>Properties of the node configuration.</p>
   */
  Node?: Node;
}

export namespace GetNodeOutput {
  export function isa(o: any): o is GetNodeOutput {
    return __isa(o, "GetNodeOutput");
  }
}

export interface GetProposalInput {
  __type?: "GetProposalInput";
  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId: string | undefined;
}

export namespace GetProposalInput {
  export function isa(o: any): o is GetProposalInput {
    return __isa(o, "GetProposalInput");
  }
}

export interface GetProposalOutput {
  __type?: "GetProposalOutput";
  /**
   * <p>Information about a proposal.</p>
   */
  Proposal?: Proposal;
}

export namespace GetProposalOutput {
  export function isa(o: any): o is GetProposalOutput {
    return __isa(o, "GetProposalOutput");
  }
}

/**
 * <p></p>
 */
export interface IllegalActionException
  extends __SmithyException,
    $MetadataBearer {
  name: "IllegalActionException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalActionException {
  export function isa(o: any): o is IllegalActionException {
    return __isa(o, "IllegalActionException");
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export interface InternalServiceErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
}

export namespace InternalServiceErrorException {
  export function isa(o: any): o is InternalServiceErrorException {
    return __isa(o, "InternalServiceErrorException");
  }
}

/**
 * <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>An invitation to an AWS account to create a member and join the network.</p>
 */
export interface Invitation {
  __type?: "Invitation";
  /**
   * <p>The date and time that the invitation was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The unique identifier for the invitation.</p>
   */
  InvitationId?: string;

  /**
   * <p>A summary of network configuration properties.</p>
   */
  NetworkSummary?: NetworkSummary;

  /**
   * <p>The status of the invitation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The invitee has not created a member to join the network, and the invitation has not yet expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTING</code> - The invitee has begun creating a member, and creation has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTED</code> - The invitee created a member and joined the network using the <code>InvitationID</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The invitee rejected the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - The invitee neither created a member nor rejected the invitation before the <code>ExpirationDate</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: InvitationStatus | string;
}

export namespace Invitation {
  export function isa(o: any): o is Invitation {
    return __isa(o, "Invitation");
  }
}

export enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  ACCEPTING = "ACCEPTING",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED"
}

/**
 * <p>An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p>
 */
export interface InviteAction {
  __type?: "InviteAction";
  /**
   * <p>The AWS account ID to invite.</p>
   */
  Principal: string | undefined;
}

export namespace InviteAction {
  export function isa(o: any): o is InviteAction {
    return __isa(o, "InviteAction");
  }
}

export interface ListInvitationsInput {
  __type?: "ListInvitationsInput";
  /**
   * <p>The maximum number of invitations to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsInput {
  export function isa(o: any): o is ListInvitationsInput {
    return __isa(o, "ListInvitationsInput");
  }
}

export interface ListInvitationsOutput {
  __type?: "ListInvitationsOutput";
  /**
   * <p>The invitations for the network.</p>
   */
  Invitations?: Array<Invitation>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsOutput {
  export function isa(o: any): o is ListInvitationsOutput {
    return __isa(o, "ListInvitationsOutput");
  }
}

export interface ListMembersInput {
  __type?: "ListMembersInput";
  /**
   * <p>An optional Boolean value. If provided, the request is limited either to
   *          members that the current AWS account owns (<code>true</code>) or that other AWS accounts
   *          own (<code>false</code>). If omitted, all members are listed.</p>
   */
  IsOwned?: boolean;

  /**
   * <p>The maximum number of members to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The optional name of the member to list.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the network for which to list members.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional status specifier. If provided, only members currently in this status are listed.</p>
   */
  Status?: MemberStatus | string;
}

export namespace ListMembersInput {
  export function isa(o: any): o is ListMembersInput {
    return __isa(o, "ListMembersInput");
  }
}

export interface ListMembersOutput {
  __type?: "ListMembersOutput";
  /**
   * <p>An array of <code>MemberSummary</code> objects. Each object contains details about a network member.</p>
   */
  Members?: Array<MemberSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListMembersOutput {
  export function isa(o: any): o is ListMembersOutput {
    return __isa(o, "ListMembersOutput");
  }
}

export interface ListNetworksInput {
  __type?: "ListNetworksInput";
  /**
   * <p>An optional framework specifier. If provided, only networks of this framework type are listed.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>The maximum number of networks to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional status specifier. If provided, only networks currently in this status are listed.</p>
   */
  Status?: NetworkStatus | string;
}

export namespace ListNetworksInput {
  export function isa(o: any): o is ListNetworksInput {
    return __isa(o, "ListNetworksInput");
  }
}

export interface ListNetworksOutput {
  __type?: "ListNetworksOutput";
  /**
   * <p>An array of <code>NetworkSummary</code> objects that contain configuration properties for each network.</p>
   */
  Networks?: Array<NetworkSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListNetworksOutput {
  export function isa(o: any): o is ListNetworksOutput {
    return __isa(o, "ListNetworksOutput");
  }
}

export interface ListNodesInput {
  __type?: "ListNodesInput";
  /**
   * <p>The maximum number of nodes to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique identifier of the member who owns the nodes to list.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the network for which to list nodes.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional status specifier. If provided, only nodes currently in this status are listed.</p>
   */
  Status?: NodeStatus | string;
}

export namespace ListNodesInput {
  export function isa(o: any): o is ListNodesInput {
    return __isa(o, "ListNodesInput");
  }
}

export interface ListNodesOutput {
  __type?: "ListNodesOutput";
  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NodeSummary</code> objects that contain configuration properties for each node.</p>
   */
  Nodes?: Array<NodeSummary>;
}

export namespace ListNodesOutput {
  export function isa(o: any): o is ListNodesOutput {
    return __isa(o, "ListNodesOutput");
  }
}

export interface ListProposalVotesInput {
  __type?: "ListProposalVotesInput";
  /**
   * <p>
   *          The maximum number of votes to return.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId: string | undefined;
}

export namespace ListProposalVotesInput {
  export function isa(o: any): o is ListProposalVotesInput {
    return __isa(o, "ListProposalVotesInput");
  }
}

export interface ListProposalVotesOutput {
  __type?: "ListProposalVotesOutput";
  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>
   *          The listing of votes.
   *       </p>
   */
  ProposalVotes?: Array<VoteSummary>;
}

export namespace ListProposalVotesOutput {
  export function isa(o: any): o is ListProposalVotesOutput {
    return __isa(o, "ListProposalVotesOutput");
  }
}

export interface ListProposalsInput {
  __type?: "ListProposalsInput";
  /**
   * <p>
   *          The maximum number of proposals to return.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListProposalsInput {
  export function isa(o: any): o is ListProposalsInput {
    return __isa(o, "ListProposalsInput");
  }
}

export interface ListProposalsOutput {
  __type?: "ListProposalsOutput";
  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The summary of each proposal made on the network.</p>
   */
  Proposals?: Array<ProposalSummary>;
}

export namespace ListProposalsOutput {
  export function isa(o: any): o is ListProposalsOutput {
    return __isa(o, "ListProposalsOutput");
  }
}

/**
 * <p>Member configuration properties.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An optional description for the member.</p>
   */
  Description?: string;

  /**
   * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
   */
  FrameworkAttributes?: MemberFrameworkAttributes;

  /**
   * <p>The unique identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   */
  NetworkId?: string;

  /**
   * <p>The status of a member.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The AWS account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The AWS account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;
}

export namespace Member {
  export function isa(o: any): o is Member {
    return __isa(o, "Member");
  }
}

/**
 * <p>Configuration properties of the member.</p>
 */
export interface MemberConfiguration {
  __type?: "MemberConfiguration";
  /**
   * <p>An optional description of the member.</p>
   */
  Description?: string;

  /**
   * <p>Configuration properties of the blockchain framework relevant to the member.</p>
   */
  FrameworkConfiguration: MemberFrameworkConfiguration | undefined;

  /**
   * <p>The name of the member.</p>
   */
  Name: string | undefined;
}

export namespace MemberConfiguration {
  export function isa(o: any): o is MemberConfiguration {
    return __isa(o, "MemberConfiguration");
  }
}

/**
 * <p>Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricAttributes {
  __type?: "MemberFabricAttributes";
  /**
   * <p>The user name for the initial administrator user for the member.</p>
   */
  AdminUsername?: string;

  /**
   * <p>The endpoint used to access the member's certificate authority.</p>
   */
  CaEndpoint?: string;
}

export namespace MemberFabricAttributes {
  export function isa(o: any): o is MemberFabricAttributes {
    return __isa(o, "MemberFabricAttributes");
  }
}

/**
 * <p>Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricConfiguration {
  __type?: "MemberFabricConfiguration";
  /**
   * <p>The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(‘), double quote(“), forward slash(/), backward slash(\), @, or a space.</p>
   */
  AdminPassword: string | undefined;

  /**
   * <p>The user name for the member's initial administrative user.</p>
   */
  AdminUsername: string | undefined;
}

export namespace MemberFabricConfiguration {
  export function isa(o: any): o is MemberFabricConfiguration {
    return __isa(o, "MemberFabricConfiguration");
  }
}

/**
 * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface MemberFrameworkAttributes {
  __type?: "MemberFrameworkAttributes";
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: MemberFabricAttributes;
}

export namespace MemberFrameworkAttributes {
  export function isa(o: any): o is MemberFrameworkAttributes {
    return __isa(o, "MemberFrameworkAttributes");
  }
}

/**
 * <p>Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface MemberFrameworkConfiguration {
  __type?: "MemberFrameworkConfiguration";
  /**
   * <p>Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: MemberFabricConfiguration;
}

export namespace MemberFrameworkConfiguration {
  export function isa(o: any): o is MemberFrameworkConfiguration {
    return __isa(o, "MemberFrameworkConfiguration");
  }
}

export enum MemberStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING"
}

/**
 * <p>A summary of configuration properties for a member.</p>
 */
export interface MemberSummary {
  __type?: "MemberSummary";
  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An optional description of the member.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>An indicator of whether the member is owned by your AWS account or a different AWS account.</p>
   */
  IsOwned?: boolean;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>The status of the member.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The AWS account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The AWS account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;
}

export namespace MemberSummary {
  export function isa(o: any): o is MemberSummary {
    return __isa(o, "MemberSummary");
  }
}

/**
 * <p>Network configuration properties.</p>
 */
export interface Network {
  __type?: "Network";
  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Attributes of the blockchain framework for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>Attributes of the blockchain framework that the network uses.</p>
   */
  FrameworkAttributes?: NetworkFrameworkAttributes;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the network.</p>
   */
  Status?: NetworkStatus | string;

  /**
   * <p>The voting rules for the network to decide if a proposal is accepted.</p>
   */
  VotingPolicy?: VotingPolicy;

  /**
   * <p>The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.</p>
   */
  VpcEndpointServiceName?: string;
}

export namespace Network {
  export function isa(o: any): o is Network {
    return __isa(o, "Network");
  }
}

/**
 * <p>Attributes of Hyperledger Fabric for a network.</p>
 */
export interface NetworkFabricAttributes {
  __type?: "NetworkFabricAttributes";
  /**
   * <p>The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see <a href="https://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition?: Edition | string;

  /**
   * <p>The endpoint of the ordering service for the network.</p>
   */
  OrderingServiceEndpoint?: string;
}

export namespace NetworkFabricAttributes {
  export function isa(o: any): o is NetworkFabricAttributes {
    return __isa(o, "NetworkFabricAttributes");
  }
}

/**
 * <p>Hyperledger Fabric configuration properties for the network.</p>
 */
export interface NetworkFabricConfiguration {
  __type?: "NetworkFabricConfiguration";
  /**
   * <p>The edition of Amazon Managed Blockchain that the network uses. For more information, see <a href="https://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition: Edition | string | undefined;
}

export namespace NetworkFabricConfiguration {
  export function isa(o: any): o is NetworkFabricConfiguration {
    return __isa(o, "NetworkFabricConfiguration");
  }
}

/**
 * <p>Attributes relevant to the network for the blockchain framework that the network uses.</p>
 */
export interface NetworkFrameworkAttributes {
  __type?: "NetworkFrameworkAttributes";
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NetworkFabricAttributes;
}

export namespace NetworkFrameworkAttributes {
  export function isa(o: any): o is NetworkFrameworkAttributes {
    return __isa(o, "NetworkFrameworkAttributes");
  }
}

/**
 * <p>
 *          Configuration properties relevant to the network for the blockchain framework that the network uses.
 *       </p>
 */
export interface NetworkFrameworkConfiguration {
  __type?: "NetworkFrameworkConfiguration";
  /**
   * <p>
   *          Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric.
   *       </p>
   */
  Fabric?: NetworkFabricConfiguration;
}

export namespace NetworkFrameworkConfiguration {
  export function isa(o: any): o is NetworkFrameworkConfiguration {
    return __isa(o, "NetworkFrameworkConfiguration");
  }
}

export enum NetworkStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING"
}

/**
 * <p>A summary of network configuration properties.</p>
 */
export interface NetworkSummary {
  __type?: "NetworkSummary";
  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An optional description of the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the network.</p>
   */
  Status?: NetworkStatus | string;
}

export namespace NetworkSummary {
  export function isa(o: any): o is NetworkSummary {
    return __isa(o, "NetworkSummary");
  }
}

/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface Node {
  __type?: "Node";
  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Attributes of the blockchain framework being used.</p>
   */
  FrameworkAttributes?: NodeFrameworkAttributes;

  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The instance type of the node.</p>
   */
  InstanceType?: string;

  /**
   * <p>The unique identifier of the member to which the node belongs.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the network that the node is in.</p>
   */
  NetworkId?: string;

  /**
   * <p>The status of the node.</p>
   */
  Status?: NodeStatus | string;
}

export namespace Node {
  export function isa(o: any): o is Node {
    return __isa(o, "Node");
  }
}

/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface NodeConfiguration {
  __type?: "NodeConfiguration";
  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The Amazon Managed Blockchain instance type for the node.</p>
   */
  InstanceType: string | undefined;
}

export namespace NodeConfiguration {
  export function isa(o: any): o is NodeConfiguration {
    return __isa(o, "NodeConfiguration");
  }
}

/**
 * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
 */
export interface NodeFabricAttributes {
  __type?: "NodeFabricAttributes";
  /**
   * <p>The endpoint that identifies the peer node for all services except peer channel-based event services.</p>
   */
  PeerEndpoint?: string;

  /**
   * <p>The endpoint that identifies the peer node for peer channel-based event services.</p>
   */
  PeerEventEndpoint?: string;
}

export namespace NodeFabricAttributes {
  export function isa(o: any): o is NodeFabricAttributes {
    return __isa(o, "NodeFabricAttributes");
  }
}

/**
 * <p>Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses.</p>
 */
export interface NodeFrameworkAttributes {
  __type?: "NodeFrameworkAttributes";
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NodeFabricAttributes;
}

export namespace NodeFrameworkAttributes {
  export function isa(o: any): o is NodeFrameworkAttributes {
    return __isa(o, "NodeFrameworkAttributes");
  }
}

export enum NodeStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED"
}

/**
 * <p>A summary of configuration properties for a peer node.</p>
 */
export interface NodeSummary {
  __type?: "NodeSummary";
  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The EC2 instance type for the node.</p>
   */
  InstanceType?: string;

  /**
   * <p>The status of the node.</p>
   */
  Status?: NodeStatus | string;
}

export namespace NodeSummary {
  export function isa(o: any): o is NodeSummary {
    return __isa(o, "NodeSummary");
  }
}

/**
 * <p>Properties of a proposal on a Managed Blockchain network.</p>
 */
export interface Proposal {
  __type?: "Proposal";
  /**
   * <p>The actions to perform on the network if the proposal is <code>APPROVED</code>.</p>
   */
  Actions?: ProposalActions;

  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   */
  CreationDate?: Date;

  /**
   * <p>The description of the proposal.</p>
   */
  Description?: string;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out.
   *       </p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId?: string;

  /**
   * <p>
   *          The current total of <code>NO</code> votes cast on the proposal by members.
   *       </p>
   */
  NoVoteCount?: number;

  /**
   * <p>
   *          The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of <code>YES</code> votes and <code>NO</code> votes.
   *       </p>
   */
  OutstandingVoteCount?: number;

  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId?: string;

  /**
   * <p>The unique identifier of the member that created the proposal.</p>
   */
  ProposedByMemberId?: string;

  /**
   * <p>The name of the member that created the proposal.</p>
   */
  ProposedByMemberName?: string;

  /**
   * <p>The status of the proposal. Values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved could not be completed because of an error.</p>
   *             </li>
   *          </ul>
   */
  Status?: ProposalStatus | string;

  /**
   * <p>
   *          The current total of <code>YES</code> votes cast on the proposal by members.
   *       </p>
   */
  YesVoteCount?: number;
}

export namespace Proposal {
  export function isa(o: any): o is Proposal {
    return __isa(o, "Proposal");
  }
}

/**
 * <p>
 *          The actions to carry out if a proposal is <code>APPROVED</code>.
 *       </p>
 */
export interface ProposalActions {
  __type?: "ProposalActions";
  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to invite an AWS account to create a member and join the network.
   *       </p>
   */
  Invitations?: Array<InviteAction>;

  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network.
   *       </p>
   */
  Removals?: Array<RemoveAction>;
}

export namespace ProposalActions {
  export function isa(o: any): o is ProposalActions {
    return __isa(o, "ProposalActions");
  }
}

export enum ProposalStatus {
  ACTION_FAILED = "ACTION_FAILED",
  APPROVED = "APPROVED",
  EXPIRED = "EXPIRED",
  IN_PROGRESS = "IN_PROGRESS",
  REJECTED = "REJECTED"
}

/**
 * <p>Properties of a proposal.</p>
 */
export interface ProposalSummary {
  __type?: "ProposalSummary";
  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   */
  CreationDate?: Date;

  /**
   * <p>
   *          The description of the proposal.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>.  After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out.
   *       </p>
   */
  ExpirationDate?: Date;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId?: string;

  /**
   * <p>
   *          The unique identifier of the member that created the proposal.
   *       </p>
   */
  ProposedByMemberId?: string;

  /**
   * <p>
   *          The name of the member that created the proposal.
   *       </p>
   */
  ProposedByMemberName?: string;

  /**
   * <p>The status of the proposal. Values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved could not be completed because of an error.</p>
   *             </li>
   *          </ul>
   */
  Status?: ProposalStatus | string;
}

export namespace ProposalSummary {
  export function isa(o: any): o is ProposalSummary {
    return __isa(o, "ProposalSummary");
  }
}

export interface RejectInvitationInput {
  __type?: "RejectInvitationInput";
  /**
   * <p>The unique identifier of the invitation to reject.</p>
   */
  InvitationId: string | undefined;
}

export namespace RejectInvitationInput {
  export function isa(o: any): o is RejectInvitationInput {
    return __isa(o, "RejectInvitationInput");
  }
}

export interface RejectInvitationOutput {
  __type?: "RejectInvitationOutput";
}

export namespace RejectInvitationOutput {
  export function isa(o: any): o is RejectInvitationOutput {
    return __isa(o, "RejectInvitationOutput");
  }
}

/**
 * <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p>
 */
export interface RemoveAction {
  __type?: "RemoveAction";
  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string | undefined;
}

export namespace RemoveAction {
  export function isa(o: any): o is RemoveAction {
    return __isa(o, "RemoveAction");
  }
}

/**
 * <p>A resource request is issued for a resource that already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
 */
export interface ResourceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export function isa(o: any): o is ResourceLimitExceededException {
    return __isa(o, "ResourceLimitExceededException");
  }
}

/**
 * <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The requested resource exists but is not in a status that can complete the operation.</p>
 */
export interface ResourceNotReadyException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotReadyException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotReadyException {
  export function isa(o: any): o is ResourceNotReadyException {
    return __isa(o, "ResourceNotReadyException");
  }
}

export enum ThresholdComparator {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO"
}

/**
 * <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

export interface VoteOnProposalInput {
  __type?: "VoteOnProposalInput";
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId: string | undefined;

  /**
   * <p>
   *          The value of the vote.
   *       </p>
   */
  Vote: VoteValue | string | undefined;

  /**
   * <p>The unique identifier of the member casting the vote.
   *       </p>
   */
  VoterMemberId: string | undefined;
}

export namespace VoteOnProposalInput {
  export function isa(o: any): o is VoteOnProposalInput {
    return __isa(o, "VoteOnProposalInput");
  }
}

export interface VoteOnProposalOutput {
  __type?: "VoteOnProposalOutput";
}

export namespace VoteOnProposalOutput {
  export function isa(o: any): o is VoteOnProposalOutput {
    return __isa(o, "VoteOnProposalOutput");
  }
}

/**
 * <p>
 *          Properties of an individual vote that a member cast for a proposal.
 *       </p>
 */
export interface VoteSummary {
  __type?: "VoteSummary";
  /**
   * <p>
   *          The unique identifier of the member that cast the vote.
   *       </p>
   */
  MemberId?: string;

  /**
   * <p>
   *          The name of the member that cast the vote.
   *       </p>
   */
  MemberName?: string;

  /**
   * <p>
   *          The vote value, either <code>YES</code> or <code>NO</code>.
   *       </p>
   */
  Vote?: VoteValue | string;
}

export namespace VoteSummary {
  export function isa(o: any): o is VoteSummary {
    return __isa(o, "VoteSummary");
  }
}

export enum VoteValue {
  NO = "NO",
  YES = "YES"
}

/**
 * <p>
 *          The voting rules for the network to decide if a proposal is accepted
 *       </p>
 */
export interface VotingPolicy {
  __type?: "VotingPolicy";
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   */
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
}

export namespace VotingPolicy {
  export function isa(o: any): o is VotingPolicy {
    return __isa(o, "VotingPolicy");
  }
}
