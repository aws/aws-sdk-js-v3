// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ManagedBlockchainClient } from "./ManagedBlockchainClient";

/**
 * <p></p>
 *          <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority.</p>
 *         <p>Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as <code>CreateMember</code> and <code>DeleteMember</code> don't apply to Ethereum.</p>
 *         <p>The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated.</p>
 */
export class ManagedBlockchain extends ManagedBlockchainClient {
  /**
   * <important>
   *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
   *         subject to change. We recommend that you use this feature only with
   *         test scenarios, and not in production environments.</p>
   *          </important>
   *          <p>Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor object is a container that has the information
   *          required for token based access to your Ethereum nodes.</p>
   */
  public createAccessor(
    args: CreateAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessorCommandOutput>;
  public createAccessor(
    args: CreateAccessorCommandInput,
    cb: (err: any, data?: CreateAccessorCommandOutput) => void
  ): void;
  public createAccessor(
    args: CreateAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessorCommandOutput) => void
  ): void;
  public createAccessor(
    args: CreateAccessorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessorCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessorCommandOutput) => void
  ): Promise<CreateAccessorCommandOutput> | void {
    const command = new CreateAccessorCommand(args);
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
   * <p>Creates a member within a Managed Blockchain network.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public createMember(
    args: CreateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMemberCommandOutput>;
  public createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
  public createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;
  public createMember(
    args: CreateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMemberCommandOutput) => void),
    cb?: (err: any, data?: CreateMemberCommandOutput) => void
  ): Promise<CreateMemberCommandOutput> | void {
    const command = new CreateMemberCommand(args);
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
   * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkCommandOutput) => void
  ): Promise<CreateNetworkCommandOutput> | void {
    const command = new CreateNetworkCommand(args);
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
   * <p>Creates a node on the specified blockchain network.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public createNode(args: CreateNodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateNodeCommandOutput>;
  public createNode(args: CreateNodeCommandInput, cb: (err: any, data?: CreateNodeCommandOutput) => void): void;
  public createNode(
    args: CreateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;
  public createNode(
    args: CreateNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNodeCommandOutput) => void),
    cb?: (err: any, data?: CreateNodeCommandOutput) => void
  ): Promise<CreateNodeCommandOutput> | void {
    const command = new CreateNodeCommand(args);
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
   * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProposalCommandOutput) => void),
    cb?: (err: any, data?: CreateProposalCommandOutput) => void
  ): Promise<CreateProposalCommandOutput> | void {
    const command = new CreateProposalCommand(args);
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
   * <important>
   *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
   *         subject to change. We recommend that you use this feature only with
   *         test scenarios, and not in production environments.</p>
   *          </important>
   *          <p>Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the
   *          information required for token based access to your Ethereum nodes including, the
   *          <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes
   *          from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the
   *          <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or
   *          HTTP requests. However, WebSocket connections that were initiated while the accessor was in the
   *          <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).</p>
   */
  public deleteAccessor(
    args: DeleteAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessorCommandOutput>;
  public deleteAccessor(
    args: DeleteAccessorCommandInput,
    cb: (err: any, data?: DeleteAccessorCommandOutput) => void
  ): void;
  public deleteAccessor(
    args: DeleteAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessorCommandOutput) => void
  ): void;
  public deleteAccessor(
    args: DeleteAccessorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessorCommandOutput) => void
  ): Promise<DeleteAccessorCommandOutput> | void {
    const command = new DeleteAccessorCommand(args);
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
   * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last Amazon Web Services account, the network is deleted also.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  public deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteMemberCommandOutput) => void
  ): Promise<DeleteMemberCommandOutput> | void {
    const command = new DeleteMemberCommand(args);
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
   * <p>Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public deleteNode(args: DeleteNodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNodeCommandOutput>;
  public deleteNode(args: DeleteNodeCommandInput, cb: (err: any, data?: DeleteNodeCommandOutput) => void): void;
  public deleteNode(
    args: DeleteNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;
  public deleteNode(
    args: DeleteNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNodeCommandOutput) => void),
    cb?: (err: any, data?: DeleteNodeCommandOutput) => void
  ): Promise<DeleteNodeCommandOutput> | void {
    const command = new DeleteNodeCommand(args);
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
   * <important>
   *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
   *         subject to change. We recommend that you use this feature only with
   *         test scenarios, and not in production environments.</p>
   *          </important>
   *          <p>Returns detailed information about an accessor. An accessor object is a container that has the
   *          information required for token based access to your Ethereum nodes.</p>
   */
  public getAccessor(args: GetAccessorCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessorCommandOutput>;
  public getAccessor(args: GetAccessorCommandInput, cb: (err: any, data?: GetAccessorCommandOutput) => void): void;
  public getAccessor(
    args: GetAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessorCommandOutput) => void
  ): void;
  public getAccessor(
    args: GetAccessorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessorCommandOutput) => void),
    cb?: (err: any, data?: GetAccessorCommandOutput) => void
  ): Promise<GetAccessorCommandOutput> | void {
    const command = new GetAccessorCommand(args);
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
   * <p>Returns detailed information about a member.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  public getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  public getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  public getMember(
    args: GetMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMemberCommandOutput) => void),
    cb?: (err: any, data?: GetMemberCommandOutput) => void
  ): Promise<GetMemberCommandOutput> | void {
    const command = new GetMemberCommand(args);
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
   * <p>Returns detailed information about a network.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
  public getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkCommandOutput) => void
  ): Promise<GetNetworkCommandOutput> | void {
    const command = new GetNetworkCommand(args);
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
   * <p>Returns detailed information about a node.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public getNode(args: GetNodeCommandInput, options?: __HttpHandlerOptions): Promise<GetNodeCommandOutput>;
  public getNode(args: GetNodeCommandInput, cb: (err: any, data?: GetNodeCommandOutput) => void): void;
  public getNode(
    args: GetNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNodeCommandOutput) => void
  ): void;
  public getNode(
    args: GetNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNodeCommandOutput) => void),
    cb?: (err: any, data?: GetNodeCommandOutput) => void
  ): Promise<GetNodeCommandOutput> | void {
    const command = new GetNodeCommand(args);
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
   * <p>Returns detailed information about a proposal.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public getProposal(args: GetProposalCommandInput, options?: __HttpHandlerOptions): Promise<GetProposalCommandOutput>;
  public getProposal(args: GetProposalCommandInput, cb: (err: any, data?: GetProposalCommandOutput) => void): void;
  public getProposal(
    args: GetProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProposalCommandOutput) => void
  ): void;
  public getProposal(
    args: GetProposalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProposalCommandOutput) => void),
    cb?: (err: any, data?: GetProposalCommandOutput) => void
  ): Promise<GetProposalCommandOutput> | void {
    const command = new GetProposalCommand(args);
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
   * <important>
   *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
   *         subject to change. We recommend that you use this feature only with
   *         test scenarios, and not in production environments.</p>
   *          </important>
   *          <p>Returns a list of the accessors and their properties. Accessor objects are containers that have the
   *          information required for token based access to your Ethereum nodes.</p>
   */
  public listAccessors(
    args: ListAccessorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessorsCommandOutput>;
  public listAccessors(
    args: ListAccessorsCommandInput,
    cb: (err: any, data?: ListAccessorsCommandOutput) => void
  ): void;
  public listAccessors(
    args: ListAccessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessorsCommandOutput) => void
  ): void;
  public listAccessors(
    args: ListAccessorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessorsCommandOutput) => void),
    cb?: (err: any, data?: ListAccessorsCommandOutput) => void
  ): Promise<ListAccessorsCommandOutput> | void {
    const command = new ListAccessorsCommand(args);
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
   * <p>Returns a list of all invitations for the current Amazon Web Services account.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
   * <p>Returns a list of the members in a network and properties of their configurations.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
   * <p>Returns information about the networks in which the current Amazon Web Services account participates.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public listNetworks(
    args: ListNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworksCommandOutput>;
  public listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworksCommandOutput) => void),
    cb?: (err: any, data?: ListNetworksCommandOutput) => void
  ): Promise<ListNetworksCommandOutput> | void {
    const command = new ListNetworksCommand(args);
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
   * <p>Returns information about the nodes within a network.</p>
   *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
   */
  public listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  public listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  public listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNodesCommandOutput) => void),
    cb?: (err: any, data?: ListNodesCommandOutput) => void
  ): Promise<ListNodesCommandOutput> | void {
    const command = new ListNodesCommand(args);
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
   * <p>Returns a list of proposals for the network.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProposalsCommandOutput) => void),
    cb?: (err: any, data?: ListProposalsCommandOutput) => void
  ): Promise<ListProposalsCommandOutput> | void {
    const command = new ListProposalsCommand(args);
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
   * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProposalVotesCommandOutput) => void),
    cb?: (err: any, data?: ListProposalVotesCommandOutput) => void
  ): Promise<ListProposalVotesCommandOutput> | void {
    const command = new ListProposalVotesCommand(args);
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
   * <p>Returns a list of tags for the specified resource. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
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
   * <p>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
   * <p>Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value.</p>
   *          <p>When you specify a tag key that already exists, the tag value is overwritten with the new value. Use <code>UntagResource</code> to remove tag keys.</p>
   *          <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
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
   * <p>Removes the specified tags from the Amazon Managed Blockchain resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
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
   * <p>Updates a member configuration with new parameters.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public updateMember(
    args: UpdateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberCommandOutput>;
  public updateMember(args: UpdateMemberCommandInput, cb: (err: any, data?: UpdateMemberCommandOutput) => void): void;
  public updateMember(
    args: UpdateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberCommandOutput) => void
  ): void;
  public updateMember(
    args: UpdateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMemberCommandOutput) => void),
    cb?: (err: any, data?: UpdateMemberCommandOutput) => void
  ): Promise<UpdateMemberCommandOutput> | void {
    const command = new UpdateMemberCommand(args);
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
   * <p>Updates a node configuration with new parameters.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  public updateNode(args: UpdateNodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodeCommandOutput>;
  public updateNode(args: UpdateNodeCommandInput, cb: (err: any, data?: UpdateNodeCommandOutput) => void): void;
  public updateNode(
    args: UpdateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodeCommandOutput) => void
  ): void;
  public updateNode(
    args: UpdateNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNodeCommandOutput) => void),
    cb?: (err: any, data?: UpdateNodeCommandOutput) => void
  ): Promise<UpdateNodeCommandOutput> | void {
    const command = new UpdateNodeCommand(args);
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
   * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VoteOnProposalCommandOutput) => void),
    cb?: (err: any, data?: VoteOnProposalCommandOutput) => void
  ): Promise<VoteOnProposalCommandOutput> | void {
    const command = new VoteOnProposalCommand(args);
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
