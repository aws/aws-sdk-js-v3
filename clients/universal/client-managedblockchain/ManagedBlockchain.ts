import { ManagedBlockchainClient } from "./ManagedBlockchainClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { CreateMemberInput } from "./types/CreateMemberInput";
import { CreateMemberOutput } from "./types/CreateMemberOutput";
import { CreateNetworkInput } from "./types/CreateNetworkInput";
import { CreateNetworkOutput } from "./types/CreateNetworkOutput";
import { CreateNodeInput } from "./types/CreateNodeInput";
import { CreateNodeOutput } from "./types/CreateNodeOutput";
import { CreateProposalInput } from "./types/CreateProposalInput";
import { CreateProposalOutput } from "./types/CreateProposalOutput";
import { DeleteMemberInput } from "./types/DeleteMemberInput";
import { DeleteMemberOutput } from "./types/DeleteMemberOutput";
import { DeleteNodeInput } from "./types/DeleteNodeInput";
import { DeleteNodeOutput } from "./types/DeleteNodeOutput";
import { GetMemberInput } from "./types/GetMemberInput";
import { GetMemberOutput } from "./types/GetMemberOutput";
import { GetNetworkInput } from "./types/GetNetworkInput";
import { GetNetworkOutput } from "./types/GetNetworkOutput";
import { GetNodeInput } from "./types/GetNodeInput";
import { GetNodeOutput } from "./types/GetNodeOutput";
import { GetProposalInput } from "./types/GetProposalInput";
import { GetProposalOutput } from "./types/GetProposalOutput";
import { IllegalActionException } from "./types/IllegalActionException";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListInvitationsInput } from "./types/ListInvitationsInput";
import { ListInvitationsOutput } from "./types/ListInvitationsOutput";
import { ListMembersInput } from "./types/ListMembersInput";
import { ListMembersOutput } from "./types/ListMembersOutput";
import { ListNetworksInput } from "./types/ListNetworksInput";
import { ListNetworksOutput } from "./types/ListNetworksOutput";
import { ListNodesInput } from "./types/ListNodesInput";
import { ListNodesOutput } from "./types/ListNodesOutput";
import { ListProposalVotesInput } from "./types/ListProposalVotesInput";
import { ListProposalVotesOutput } from "./types/ListProposalVotesOutput";
import { ListProposalsInput } from "./types/ListProposalsInput";
import { ListProposalsOutput } from "./types/ListProposalsOutput";
import { RejectInvitationInput } from "./types/RejectInvitationInput";
import { RejectInvitationOutput } from "./types/RejectInvitationOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceNotReadyException } from "./types/ResourceNotReadyException";
import { ThrottlingException } from "./types/ThrottlingException";
import { VoteOnProposalInput } from "./types/VoteOnProposalInput";
import { VoteOnProposalOutput } from "./types/VoteOnProposalOutput";
import { CreateMemberCommand } from "./commands/CreateMemberCommand";
import { CreateNetworkCommand } from "./commands/CreateNetworkCommand";
import { CreateNodeCommand } from "./commands/CreateNodeCommand";
import { CreateProposalCommand } from "./commands/CreateProposalCommand";
import { DeleteMemberCommand } from "./commands/DeleteMemberCommand";
import { DeleteNodeCommand } from "./commands/DeleteNodeCommand";
import { GetMemberCommand } from "./commands/GetMemberCommand";
import { GetNetworkCommand } from "./commands/GetNetworkCommand";
import { GetNodeCommand } from "./commands/GetNodeCommand";
import { GetProposalCommand } from "./commands/GetProposalCommand";
import { ListInvitationsCommand } from "./commands/ListInvitationsCommand";
import { ListMembersCommand } from "./commands/ListMembersCommand";
import { ListNetworksCommand } from "./commands/ListNetworksCommand";
import { ListNodesCommand } from "./commands/ListNodesCommand";
import { ListProposalVotesCommand } from "./commands/ListProposalVotesCommand";
import { ListProposalsCommand } from "./commands/ListProposalsCommand";
import { RejectInvitationCommand } from "./commands/RejectInvitationCommand";
import { VoteOnProposalCommand } from "./commands/VoteOnProposalCommand";

export class ManagedBlockchain extends ManagedBlockchainClient {
  /**
   * <p>Creates a member within a Managed Blockchain network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource request is issued for a resource that already exists.</p>
   *   - {ResourceNotReadyException} <p>The requested resource exists but is not in a status that can complete the operation.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMember(args: CreateMemberInput): Promise<CreateMemberOutput>;
  public createMember(
    args: CreateMemberInput,
    cb: (err: any, data?: CreateMemberOutput) => void
  ): void;
  public createMember(
    args: CreateMemberInput,
    cb?: (err: any, data?: CreateMemberOutput) => void
  ): Promise<CreateMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource request is issued for a resource that already exists.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetwork(args: CreateNetworkInput): Promise<CreateNetworkOutput>;
  public createNetwork(
    args: CreateNetworkInput,
    cb: (err: any, data?: CreateNetworkOutput) => void
  ): void;
  public createNetwork(
    args: CreateNetworkInput,
    cb?: (err: any, data?: CreateNetworkOutput) => void
  ): Promise<CreateNetworkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a peer node in a member.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource request is issued for a resource that already exists.</p>
   *   - {ResourceNotReadyException} <p>The requested resource exists but is not in a status that can complete the operation.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNode(args: CreateNodeInput): Promise<CreateNodeOutput>;
  public createNode(
    args: CreateNodeInput,
    cb: (err: any, data?: CreateNodeOutput) => void
  ): void;
  public createNode(
    args: CreateNodeInput,
    cb?: (err: any, data?: CreateNodeOutput) => void
  ): Promise<CreateNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ResourceNotReadyException} <p>The requested resource exists but is not in a status that can complete the operation.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProposal(
    args: CreateProposalInput
  ): Promise<CreateProposalOutput>;
  public createProposal(
    args: CreateProposalInput,
    cb: (err: any, data?: CreateProposalOutput) => void
  ): void;
  public createProposal(
    args: CreateProposalInput,
    cb?: (err: any, data?: CreateProposalOutput) => void
  ): Promise<CreateProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProposalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last AWS account, the network is deleted also.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ResourceNotReadyException} <p>The requested resource exists but is not in a status that can complete the operation.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMember(args: DeleteMemberInput): Promise<DeleteMemberOutput>;
  public deleteMember(
    args: DeleteMemberInput,
    cb: (err: any, data?: DeleteMemberOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberInput,
    cb?: (err: any, data?: DeleteMemberOutput) => void
  ): Promise<DeleteMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ResourceNotReadyException} <p>The requested resource exists but is not in a status that can complete the operation.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNode(args: DeleteNodeInput): Promise<DeleteNodeOutput>;
  public deleteNode(
    args: DeleteNodeInput,
    cb: (err: any, data?: DeleteNodeOutput) => void
  ): void;
  public deleteNode(
    args: DeleteNodeInput,
    cb?: (err: any, data?: DeleteNodeOutput) => void
  ): Promise<DeleteNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about a member.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMember(args: GetMemberInput): Promise<GetMemberOutput>;
  public getMember(
    args: GetMemberInput,
    cb: (err: any, data?: GetMemberOutput) => void
  ): void;
  public getMember(
    args: GetMemberInput,
    cb?: (err: any, data?: GetMemberOutput) => void
  ): Promise<GetMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about a network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNetwork(args: GetNetworkInput): Promise<GetNetworkOutput>;
  public getNetwork(
    args: GetNetworkInput,
    cb: (err: any, data?: GetNetworkOutput) => void
  ): void;
  public getNetwork(
    args: GetNetworkInput,
    cb?: (err: any, data?: GetNetworkOutput) => void
  ): Promise<GetNetworkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNetworkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about a peer node.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNode(args: GetNodeInput): Promise<GetNodeOutput>;
  public getNode(
    args: GetNodeInput,
    cb: (err: any, data?: GetNodeOutput) => void
  ): void;
  public getNode(
    args: GetNodeInput,
    cb?: (err: any, data?: GetNodeOutput) => void
  ): Promise<GetNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about a proposal.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getProposal(args: GetProposalInput): Promise<GetProposalOutput>;
  public getProposal(
    args: GetProposalInput,
    cb: (err: any, data?: GetProposalOutput) => void
  ): void;
  public getProposal(
    args: GetProposalInput,
    cb?: (err: any, data?: GetProposalOutput) => void
  ): Promise<GetProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetProposalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a listing of all invitations made on the specified network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInvitations(
    args: ListInvitationsInput
  ): Promise<ListInvitationsOutput>;
  public listInvitations(
    args: ListInvitationsInput,
    cb: (err: any, data?: ListInvitationsOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsInput,
    cb?: (err: any, data?: ListInvitationsOutput) => void
  ): Promise<ListInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a listing of the members in a network and properties of their configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMembers(args: ListMembersInput): Promise<ListMembersOutput>;
  public listMembers(
    args: ListMembersInput,
    cb: (err: any, data?: ListMembersOutput) => void
  ): void;
  public listMembers(
    args: ListMembersInput,
    cb?: (err: any, data?: ListMembersOutput) => void
  ): Promise<ListMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the networks in which the current AWS account has members.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNetworks(args: ListNetworksInput): Promise<ListNetworksOutput>;
  public listNetworks(
    args: ListNetworksInput,
    cb: (err: any, data?: ListNetworksOutput) => void
  ): void;
  public listNetworks(
    args: ListNetworksInput,
    cb?: (err: any, data?: ListNetworksOutput) => void
  ): Promise<ListNetworksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNetworksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the nodes within a network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNodes(args: ListNodesInput): Promise<ListNodesOutput>;
  public listNodes(
    args: ListNodesInput,
    cb: (err: any, data?: ListNodesOutput) => void
  ): void;
  public listNodes(
    args: ListNodesInput,
    cb?: (err: any, data?: ListNodesOutput) => void
  ): Promise<ListNodesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNodesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProposalVotes(
    args: ListProposalVotesInput
  ): Promise<ListProposalVotesOutput>;
  public listProposalVotes(
    args: ListProposalVotesInput,
    cb: (err: any, data?: ListProposalVotesOutput) => void
  ): void;
  public listProposalVotes(
    args: ListProposalVotesInput,
    cb?: (err: any, data?: ListProposalVotesOutput) => void
  ): Promise<ListProposalVotesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProposalVotesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a listing of proposals for the network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProposals(args: ListProposalsInput): Promise<ListProposalsOutput>;
  public listProposals(
    args: ListProposalsInput,
    cb: (err: any, data?: ListProposalsOutput) => void
  ): void;
  public listProposals(
    args: ListProposalsInput,
    cb?: (err: any, data?: ListProposalsOutput) => void
  ): Promise<ListProposalsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProposalsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {IllegalActionException} <p/>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectInvitation(
    args: RejectInvitationInput
  ): Promise<RejectInvitationOutput>;
  public rejectInvitation(
    args: RejectInvitationInput,
    cb: (err: any, data?: RejectInvitationOutput) => void
  ): void;
  public rejectInvitation(
    args: RejectInvitationInput,
    cb?: (err: any, data?: RejectInvitationOutput) => void
  ): Promise<RejectInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
   *   - {IllegalActionException} <p/>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ResourceNotFoundException} <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
   *   - {ThrottlingException} <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
   *   - {InternalServiceErrorException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public voteOnProposal(
    args: VoteOnProposalInput
  ): Promise<VoteOnProposalOutput>;
  public voteOnProposal(
    args: VoteOnProposalInput,
    cb: (err: any, data?: VoteOnProposalOutput) => void
  ): void;
  public voteOnProposal(
    args: VoteOnProposalInput,
    cb?: (err: any, data?: VoteOnProposalOutput) => void
  ): Promise<VoteOnProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VoteOnProposalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
