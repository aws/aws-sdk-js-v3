import {
  AccessDeniedException,
  AccessorNetworkType,
  AccessorStatus,
  AccessorType,
  CreateAccessorCommand,
  CreateMemberCommand,
  CreateNetworkCommand,
  CreateNodeCommand,
  CreateProposalCommand,
  DeleteAccessorCommand,
  DeleteMemberCommand,
  DeleteNodeCommand,
  Edition,
  Framework,
  GetAccessorCommand,
  GetMemberCommand,
  GetNetworkCommand,
  GetNodeCommand,
  GetProposalCommand,
  IllegalActionException,
  InternalServiceErrorException,
  InvalidRequestException,
  InvitationStatus,
  ListAccessorsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListNetworksCommand,
  ListNodesCommand,
  ListProposalVotesCommand,
  ListProposalsCommand,
  ListTagsForResourceCommand,
  ManagedBlockchain,
  ManagedBlockchainClient,
  ManagedBlockchainServiceException,
  MemberStatus,
  NetworkStatus,
  NodeStatus,
  ProposalStatus,
  RejectInvitationCommand,
  ResourceAlreadyExistsException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  StateDBType,
  TagResourceCommand,
  ThresholdComparator,
  ThrottlingException,
  TooManyTagsException,
  UntagResourceCommand,
  UpdateMemberCommand,
  UpdateNodeCommand,
  VoteOnProposalCommand,
  VoteValue,
  paginateListAccessors,
  paginateListInvitations,
  paginateListMembers,
  paginateListNetworks,
  paginateListNodes,
  paginateListProposalVotes,
  paginateListProposals,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ManagedBlockchainClient === "function");
assert(typeof ManagedBlockchain === "function");
// commands
assert(typeof CreateAccessorCommand === "function");
assert(typeof CreateMemberCommand === "function");
assert(typeof CreateNetworkCommand === "function");
assert(typeof CreateNodeCommand === "function");
assert(typeof CreateProposalCommand === "function");
assert(typeof DeleteAccessorCommand === "function");
assert(typeof DeleteMemberCommand === "function");
assert(typeof DeleteNodeCommand === "function");
assert(typeof GetAccessorCommand === "function");
assert(typeof GetMemberCommand === "function");
assert(typeof GetNetworkCommand === "function");
assert(typeof GetNodeCommand === "function");
assert(typeof GetProposalCommand === "function");
assert(typeof ListAccessorsCommand === "function");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListMembersCommand === "function");
assert(typeof ListNetworksCommand === "function");
assert(typeof ListNodesCommand === "function");
assert(typeof ListProposalsCommand === "function");
assert(typeof ListProposalVotesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RejectInvitationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMemberCommand === "function");
assert(typeof UpdateNodeCommand === "function");
assert(typeof VoteOnProposalCommand === "function");
// enums
assert(typeof AccessorNetworkType === "object");
assert(typeof AccessorStatus === "object");
assert(typeof AccessorType === "object");
assert(typeof Edition === "object");
assert(typeof Framework === "object");
assert(typeof InvitationStatus === "object");
assert(typeof MemberStatus === "object");
assert(typeof NetworkStatus === "object");
assert(typeof NodeStatus === "object");
assert(typeof ProposalStatus === "object");
assert(typeof StateDBType === "object");
assert(typeof ThresholdComparator === "object");
assert(typeof VoteValue === "object");
// errors
assert(AccessDeniedException.prototype instanceof ManagedBlockchainServiceException);
assert(IllegalActionException.prototype instanceof ManagedBlockchainServiceException);
assert(InternalServiceErrorException.prototype instanceof ManagedBlockchainServiceException);
assert(InvalidRequestException.prototype instanceof ManagedBlockchainServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof ManagedBlockchainServiceException);
assert(ResourceLimitExceededException.prototype instanceof ManagedBlockchainServiceException);
assert(ResourceNotFoundException.prototype instanceof ManagedBlockchainServiceException);
assert(ResourceNotReadyException.prototype instanceof ManagedBlockchainServiceException);
assert(ThrottlingException.prototype instanceof ManagedBlockchainServiceException);
assert(TooManyTagsException.prototype instanceof ManagedBlockchainServiceException);
assert(ManagedBlockchainServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessors === "function");
assert(typeof paginateListInvitations === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListNetworks === "function");
assert(typeof paginateListNodes === "function");
assert(typeof paginateListProposalVotes === "function");
assert(typeof paginateListProposals === "function");
console.log(`ManagedBlockchain index test passed.`);
