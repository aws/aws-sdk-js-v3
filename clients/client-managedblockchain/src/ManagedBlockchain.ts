// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAccessorCommand,
  CreateAccessorCommandInput,
  CreateAccessorCommandOutput,
} from "./commands/CreateAccessorCommand";
import {
  CreateMemberCommand,
  CreateMemberCommandInput,
  CreateMemberCommandOutput,
} from "./commands/CreateMemberCommand";
import {
  CreateNetworkCommand,
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput,
} from "./commands/CreateNetworkCommand";
import { CreateNodeCommand, CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import {
  CreateProposalCommand,
  CreateProposalCommandInput,
  CreateProposalCommandOutput,
} from "./commands/CreateProposalCommand";
import {
  DeleteAccessorCommand,
  DeleteAccessorCommandInput,
  DeleteAccessorCommandOutput,
} from "./commands/DeleteAccessorCommand";
import {
  DeleteMemberCommand,
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput,
} from "./commands/DeleteMemberCommand";
import { DeleteNodeCommand, DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import { GetAccessorCommand, GetAccessorCommandInput, GetAccessorCommandOutput } from "./commands/GetAccessorCommand";
import { GetMemberCommand, GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetNetworkCommand, GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import { GetNodeCommand, GetNodeCommandInput, GetNodeCommandOutput } from "./commands/GetNodeCommand";
import { GetProposalCommand, GetProposalCommandInput, GetProposalCommandOutput } from "./commands/GetProposalCommand";
import {
  ListAccessorsCommand,
  ListAccessorsCommandInput,
  ListAccessorsCommandOutput,
} from "./commands/ListAccessorsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "./commands/ListNetworksCommand";
import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import {
  ListProposalsCommand,
  ListProposalsCommandInput,
  ListProposalsCommandOutput,
} from "./commands/ListProposalsCommand";
import {
  ListProposalVotesCommand,
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput,
} from "./commands/ListProposalVotesCommand";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMemberCommand,
  UpdateMemberCommandInput,
  UpdateMemberCommandOutput,
} from "./commands/UpdateMemberCommand";
import { UpdateNodeCommand, UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import {
  VoteOnProposalCommand,
  VoteOnProposalCommandInput,
  VoteOnProposalCommandOutput,
} from "./commands/VoteOnProposalCommand";
import { ManagedBlockchainClient, ManagedBlockchainClientConfig } from "./ManagedBlockchainClient";

const commands = {
  CreateAccessorCommand,
  CreateMemberCommand,
  CreateNetworkCommand,
  CreateNodeCommand,
  CreateProposalCommand,
  DeleteAccessorCommand,
  DeleteMemberCommand,
  DeleteNodeCommand,
  GetAccessorCommand,
  GetMemberCommand,
  GetNetworkCommand,
  GetNodeCommand,
  GetProposalCommand,
  ListAccessorsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListNetworksCommand,
  ListNodesCommand,
  ListProposalsCommand,
  ListProposalVotesCommand,
  ListTagsForResourceCommand,
  RejectInvitationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMemberCommand,
  UpdateNodeCommand,
  VoteOnProposalCommand,
};

export interface ManagedBlockchain {
  /**
   * @see {@link CreateAccessorCommand}
   */
  createAccessor(
    args: CreateAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessorCommandOutput>;
  createAccessor(args: CreateAccessorCommandInput, cb: (err: any, data?: CreateAccessorCommandOutput) => void): void;
  createAccessor(
    args: CreateAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMemberCommand}
   */
  createMember(args: CreateMemberCommandInput, options?: __HttpHandlerOptions): Promise<CreateMemberCommandOutput>;
  createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
  createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkCommand}
   */
  createNetwork(args: CreateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkCommandOutput>;
  createNetwork(args: CreateNetworkCommandInput, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
  createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeCommand}
   */
  createNode(args: CreateNodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateNodeCommandOutput>;
  createNode(args: CreateNodeCommandInput, cb: (err: any, data?: CreateNodeCommandOutput) => void): void;
  createNode(
    args: CreateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProposalCommand}
   */
  createProposal(
    args: CreateProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProposalCommandOutput>;
  createProposal(args: CreateProposalCommandInput, cb: (err: any, data?: CreateProposalCommandOutput) => void): void;
  createProposal(
    args: CreateProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProposalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessorCommand}
   */
  deleteAccessor(
    args: DeleteAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessorCommandOutput>;
  deleteAccessor(args: DeleteAccessorCommandInput, cb: (err: any, data?: DeleteAccessorCommandOutput) => void): void;
  deleteAccessor(
    args: DeleteAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(args: DeleteMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemberCommandOutput>;
  deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNodeCommand}
   */
  deleteNode(args: DeleteNodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNodeCommandOutput>;
  deleteNode(args: DeleteNodeCommandInput, cb: (err: any, data?: DeleteNodeCommandOutput) => void): void;
  deleteNode(
    args: DeleteNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessorCommand}
   */
  getAccessor(args: GetAccessorCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessorCommandOutput>;
  getAccessor(args: GetAccessorCommandInput, cb: (err: any, data?: GetAccessorCommandOutput) => void): void;
  getAccessor(
    args: GetAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemberCommand}
   */
  getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkCommand}
   */
  getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
  getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
  getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNodeCommand}
   */
  getNode(args: GetNodeCommandInput, options?: __HttpHandlerOptions): Promise<GetNodeCommandOutput>;
  getNode(args: GetNodeCommandInput, cb: (err: any, data?: GetNodeCommandOutput) => void): void;
  getNode(
    args: GetNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProposalCommand}
   */
  getProposal(args: GetProposalCommandInput, options?: __HttpHandlerOptions): Promise<GetProposalCommandOutput>;
  getProposal(args: GetProposalCommandInput, cb: (err: any, data?: GetProposalCommandOutput) => void): void;
  getProposal(
    args: GetProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProposalCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessorsCommand}
   */
  listAccessors(args: ListAccessorsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessorsCommandOutput>;
  listAccessors(args: ListAccessorsCommandInput, cb: (err: any, data?: ListAccessorsCommandOutput) => void): void;
  listAccessors(
    args: ListAccessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessorsCommandOutput) => void
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
   * @see {@link ListNetworksCommand}
   */
  listNetworks(args: ListNetworksCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProposalsCommand}
   */
  listProposals(args: ListProposalsCommandInput, options?: __HttpHandlerOptions): Promise<ListProposalsCommandOutput>;
  listProposals(args: ListProposalsCommandInput, cb: (err: any, data?: ListProposalsCommandOutput) => void): void;
  listProposals(
    args: ListProposalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProposalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProposalVotesCommand}
   */
  listProposalVotes(
    args: ListProposalVotesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProposalVotesCommandOutput>;
  listProposalVotes(
    args: ListProposalVotesCommandInput,
    cb: (err: any, data?: ListProposalVotesCommandOutput) => void
  ): void;
  listProposalVotes(
    args: ListProposalVotesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProposalVotesCommandOutput) => void
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
   * @see {@link UpdateMemberCommand}
   */
  updateMember(args: UpdateMemberCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMemberCommandOutput>;
  updateMember(args: UpdateMemberCommandInput, cb: (err: any, data?: UpdateMemberCommandOutput) => void): void;
  updateMember(
    args: UpdateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodeCommand}
   */
  updateNode(args: UpdateNodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodeCommandOutput>;
  updateNode(args: UpdateNodeCommandInput, cb: (err: any, data?: UpdateNodeCommandOutput) => void): void;
  updateNode(
    args: UpdateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link VoteOnProposalCommand}
   */
  voteOnProposal(
    args: VoteOnProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VoteOnProposalCommandOutput>;
  voteOnProposal(args: VoteOnProposalCommandInput, cb: (err: any, data?: VoteOnProposalCommandOutput) => void): void;
  voteOnProposal(
    args: VoteOnProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VoteOnProposalCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p></p>
 *          <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority.</p>
 *          <p>Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as <code>CreateMember</code> and <code>DeleteMember</code> don't apply to Ethereum.</p>
 *          <p>The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated.</p>
 */
export class ManagedBlockchain extends ManagedBlockchainClient implements ManagedBlockchain {}
createAggregatedClient(commands, ManagedBlockchain);
