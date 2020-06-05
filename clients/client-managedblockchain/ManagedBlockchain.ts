import { ManagedBlockchainClient } from "./ManagedBlockchainClient";
import {
  CreateMemberCommand,
  CreateMemberCommandInput,
  CreateMemberCommandOutput
} from "./commands/CreateMemberCommand";
import {
  CreateNetworkCommand,
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput
} from "./commands/CreateNetworkCommand";
import {
  CreateNodeCommand,
  CreateNodeCommandInput,
  CreateNodeCommandOutput
} from "./commands/CreateNodeCommand";
import {
  CreateProposalCommand,
  CreateProposalCommandInput,
  CreateProposalCommandOutput
} from "./commands/CreateProposalCommand";
import {
  DeleteMemberCommand,
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput
} from "./commands/DeleteMemberCommand";
import {
  DeleteNodeCommand,
  DeleteNodeCommandInput,
  DeleteNodeCommandOutput
} from "./commands/DeleteNodeCommand";
import {
  GetMemberCommand,
  GetMemberCommandInput,
  GetMemberCommandOutput
} from "./commands/GetMemberCommand";
import {
  GetNetworkCommand,
  GetNetworkCommandInput,
  GetNetworkCommandOutput
} from "./commands/GetNetworkCommand";
import {
  GetNodeCommand,
  GetNodeCommandInput,
  GetNodeCommandOutput
} from "./commands/GetNodeCommand";
import {
  GetProposalCommand,
  GetProposalCommandInput,
  GetProposalCommandOutput
} from "./commands/GetProposalCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "./commands/ListInvitationsCommand";
import {
  ListMembersCommand,
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "./commands/ListMembersCommand";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput
} from "./commands/ListNetworksCommand";
import {
  ListNodesCommand,
  ListNodesCommandInput,
  ListNodesCommandOutput
} from "./commands/ListNodesCommand";
import {
  ListProposalVotesCommand,
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput
} from "./commands/ListProposalVotesCommand";
import {
  ListProposalsCommand,
  ListProposalsCommandInput,
  ListProposalsCommandOutput
} from "./commands/ListProposalsCommand";
import {
  RejectInvitationCommand,
  RejectInvitationCommandInput,
  RejectInvitationCommandOutput
} from "./commands/RejectInvitationCommand";
import {
  VoteOnProposalCommand,
  VoteOnProposalCommandInput,
  VoteOnProposalCommandOutput
} from "./commands/VoteOnProposalCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p></p>
 *          <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Currently, Managed Blockchain supports the Hyperledger Fabric open source framework. </p>
 */
export class ManagedBlockchain extends ManagedBlockchainClient {
  /**
   * <p>Creates a member within a Managed Blockchain network.</p>
   */
  public createMember(
    args: CreateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMemberCommandOutput>;
  public createMember(
    args: CreateMemberCommandInput,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;
  public createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;
  public createMember(
    args: CreateMemberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateMemberCommandOutput) => void),
    cb?: (err: any, data?: CreateMemberCommandOutput) => void
  ): Promise<CreateMemberCommandOutput> | void {
    const command = new CreateMemberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
   */
  public createNetwork(
    args: CreateNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkCommandOutput>;
  public createNetwork(
    args: CreateNetworkCommandInput,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
  public createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
  public createNetwork(
    args: CreateNetworkCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkCommandOutput) => void
  ): Promise<CreateNetworkCommandOutput> | void {
    const command = new CreateNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a peer node in a member.</p>
   */
  public createNode(
    args: CreateNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodeCommandOutput>;
  public createNode(
    args: CreateNodeCommandInput,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;
  public createNode(
    args: CreateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;
  public createNode(
    args: CreateNodeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateNodeCommandOutput) => void),
    cb?: (err: any, data?: CreateNodeCommandOutput) => void
  ): Promise<CreateNodeCommandOutput> | void {
    const command = new CreateNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
   */
  public createProposal(
    args: CreateProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProposalCommandOutput>;
  public createProposal(
    args: CreateProposalCommandInput,
    cb: (err: any, data?: CreateProposalCommandOutput) => void
  ): void;
  public createProposal(
    args: CreateProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProposalCommandOutput) => void
  ): void;
  public createProposal(
    args: CreateProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateProposalCommandOutput) => void),
    cb?: (err: any, data?: CreateProposalCommandOutput) => void
  ): Promise<CreateProposalCommandOutput> | void {
    const command = new CreateProposalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last AWS account, the network is deleted also.</p>
   */
  public deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  public deleteMember(
    args: DeleteMemberCommandInput,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteMemberCommandOutput) => void
  ): Promise<DeleteMemberCommandOutput> | void {
    const command = new DeleteMemberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.</p>
   */
  public deleteNode(
    args: DeleteNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNodeCommandOutput>;
  public deleteNode(
    args: DeleteNodeCommandInput,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;
  public deleteNode(
    args: DeleteNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;
  public deleteNode(
    args: DeleteNodeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteNodeCommandOutput) => void),
    cb?: (err: any, data?: DeleteNodeCommandOutput) => void
  ): Promise<DeleteNodeCommandOutput> | void {
    const command = new DeleteNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about a member.</p>
   */
  public getMember(
    args: GetMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemberCommandOutput>;
  public getMember(
    args: GetMemberCommandInput,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  public getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  public getMember(
    args: GetMemberCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetMemberCommandOutput) => void),
    cb?: (err: any, data?: GetMemberCommandOutput) => void
  ): Promise<GetMemberCommandOutput> | void {
    const command = new GetMemberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about a network.</p>
   */
  public getNetwork(
    args: GetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkCommandOutput>;
  public getNetwork(
    args: GetNetworkCommandInput,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetNetworkCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkCommandOutput) => void
  ): Promise<GetNetworkCommandOutput> | void {
    const command = new GetNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about a peer node.</p>
   */
  public getNode(
    args: GetNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNodeCommandOutput>;
  public getNode(
    args: GetNodeCommandInput,
    cb: (err: any, data?: GetNodeCommandOutput) => void
  ): void;
  public getNode(
    args: GetNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNodeCommandOutput) => void
  ): void;
  public getNode(
    args: GetNodeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetNodeCommandOutput) => void),
    cb?: (err: any, data?: GetNodeCommandOutput) => void
  ): Promise<GetNodeCommandOutput> | void {
    const command = new GetNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about a proposal.</p>
   */
  public getProposal(
    args: GetProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProposalCommandOutput>;
  public getProposal(
    args: GetProposalCommandInput,
    cb: (err: any, data?: GetProposalCommandOutput) => void
  ): void;
  public getProposal(
    args: GetProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProposalCommandOutput) => void
  ): void;
  public getProposal(
    args: GetProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetProposalCommandOutput) => void),
    cb?: (err: any, data?: GetProposalCommandOutput) => void
  ): Promise<GetProposalCommandOutput> | void {
    const command = new GetProposalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a listing of all invitations made on the specified network.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListInvitationsCommandOutput) => void),
    cb?: (err: any, data?: ListInvitationsCommandOutput) => void
  ): Promise<ListInvitationsCommandOutput> | void {
    const command = new ListInvitationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a listing of the members in a network and properties of their configurations.</p>
   */
  public listMembers(
    args: ListMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembersCommandOutput>;
  public listMembers(
    args: ListMembersCommandInput,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMembersCommandOutput) => void),
    cb?: (err: any, data?: ListMembersCommandOutput) => void
  ): Promise<ListMembersCommandOutput> | void {
    const command = new ListMembersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the networks in which the current AWS account has members.</p>
   */
  public listNetworks(
    args: ListNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworksCommandOutput>;
  public listNetworks(
    args: ListNetworksCommandInput,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListNetworksCommandOutput) => void),
    cb?: (err: any, data?: ListNetworksCommandOutput) => void
  ): Promise<ListNetworksCommandOutput> | void {
    const command = new ListNetworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the nodes within a network.</p>
   */
  public listNodes(
    args: ListNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodesCommandOutput>;
  public listNodes(
    args: ListNodesCommandInput,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListNodesCommandOutput) => void),
    cb?: (err: any, data?: ListNodesCommandOutput) => void
  ): Promise<ListNodesCommandOutput> | void {
    const command = new ListNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a listing of proposals for the network.</p>
   */
  public listProposals(
    args: ListProposalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProposalsCommandOutput>;
  public listProposals(
    args: ListProposalsCommandInput,
    cb: (err: any, data?: ListProposalsCommandOutput) => void
  ): void;
  public listProposals(
    args: ListProposalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProposalsCommandOutput) => void
  ): void;
  public listProposals(
    args: ListProposalsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProposalsCommandOutput) => void),
    cb?: (err: any, data?: ListProposalsCommandOutput) => void
  ): Promise<ListProposalsCommandOutput> | void {
    const command = new ListProposalsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
   */
  public listProposalVotes(
    args: ListProposalVotesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProposalVotesCommandOutput>;
  public listProposalVotes(
    args: ListProposalVotesCommandInput,
    cb: (err: any, data?: ListProposalVotesCommandOutput) => void
  ): void;
  public listProposalVotes(
    args: ListProposalVotesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProposalVotesCommandOutput) => void
  ): void;
  public listProposalVotes(
    args: ListProposalVotesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProposalVotesCommandOutput) => void),
    cb?: (err: any, data?: ListProposalVotesCommandOutput) => void
  ): Promise<ListProposalVotesCommandOutput> | void {
    const command = new ListProposalVotesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RejectInvitationCommandOutput) => void),
    cb?: (err: any, data?: RejectInvitationCommandOutput) => void
  ): Promise<RejectInvitationCommandOutput> | void {
    const command = new RejectInvitationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.</p>
   */
  public voteOnProposal(
    args: VoteOnProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VoteOnProposalCommandOutput>;
  public voteOnProposal(
    args: VoteOnProposalCommandInput,
    cb: (err: any, data?: VoteOnProposalCommandOutput) => void
  ): void;
  public voteOnProposal(
    args: VoteOnProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VoteOnProposalCommandOutput) => void
  ): void;
  public voteOnProposal(
    args: VoteOnProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: VoteOnProposalCommandOutput) => void),
    cb?: (err: any, data?: VoteOnProposalCommandOutput) => void
  ): Promise<VoteOnProposalCommandOutput> | void {
    const command = new VoteOnProposalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
