import {
  AccessDeniedException,
  AccessDeniedException$,
  Accessor$,
  AccessorNetworkType,
  AccessorStatus,
  AccessorSummary$,
  AccessorType,
  ApprovalThresholdPolicy$,
  CreateAccessor$,
  CreateAccessorCommand,
  CreateAccessorInput$,
  CreateAccessorOutput$,
  CreateMember$,
  CreateMemberCommand,
  CreateMemberInput$,
  CreateMemberOutput$,
  CreateNetwork$,
  CreateNetworkCommand,
  CreateNetworkInput$,
  CreateNetworkOutput$,
  CreateNode$,
  CreateNodeCommand,
  CreateNodeInput$,
  CreateNodeOutput$,
  CreateProposal$,
  CreateProposalCommand,
  CreateProposalInput$,
  CreateProposalOutput$,
  DeleteAccessor$,
  DeleteAccessorCommand,
  DeleteAccessorInput$,
  DeleteAccessorOutput$,
  DeleteMember$,
  DeleteMemberCommand,
  DeleteMemberInput$,
  DeleteMemberOutput$,
  DeleteNode$,
  DeleteNodeCommand,
  DeleteNodeInput$,
  DeleteNodeOutput$,
  Edition,
  Framework,
  GetAccessor$,
  GetAccessorCommand,
  GetAccessorInput$,
  GetAccessorOutput$,
  GetMember$,
  GetMemberCommand,
  GetMemberInput$,
  GetMemberOutput$,
  GetNetwork$,
  GetNetworkCommand,
  GetNetworkInput$,
  GetNetworkOutput$,
  GetNode$,
  GetNodeCommand,
  GetNodeInput$,
  GetNodeOutput$,
  GetProposal$,
  GetProposalCommand,
  GetProposalInput$,
  GetProposalOutput$,
  IllegalActionException,
  IllegalActionException$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidRequestException,
  InvalidRequestException$,
  Invitation$,
  InvitationStatus,
  InviteAction$,
  ListAccessors$,
  ListAccessorsCommand,
  ListAccessorsInput$,
  ListAccessorsOutput$,
  ListInvitations$,
  ListInvitationsCommand,
  ListInvitationsInput$,
  ListInvitationsOutput$,
  ListMembers$,
  ListMembersCommand,
  ListMembersInput$,
  ListMembersOutput$,
  ListNetworks$,
  ListNetworksCommand,
  ListNetworksInput$,
  ListNetworksOutput$,
  ListNodes$,
  ListNodesCommand,
  ListNodesInput$,
  ListNodesOutput$,
  ListProposals$,
  ListProposalsCommand,
  ListProposalsInput$,
  ListProposalsOutput$,
  ListProposalVotes$,
  ListProposalVotesCommand,
  ListProposalVotesInput$,
  ListProposalVotesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogConfiguration$,
  LogConfigurations$,
  ManagedBlockchain,
  ManagedBlockchainClient,
  ManagedBlockchainServiceException,
  Member$,
  MemberConfiguration$,
  MemberFabricAttributes$,
  MemberFabricConfiguration$,
  MemberFabricLogPublishingConfiguration$,
  MemberFrameworkAttributes$,
  MemberFrameworkConfiguration$,
  MemberLogPublishingConfiguration$,
  MemberStatus,
  MemberSummary$,
  Network$,
  NetworkEthereumAttributes$,
  NetworkFabricAttributes$,
  NetworkFabricConfiguration$,
  NetworkFrameworkAttributes$,
  NetworkFrameworkConfiguration$,
  NetworkStatus,
  NetworkSummary$,
  Node$,
  NodeConfiguration$,
  NodeEthereumAttributes$,
  NodeFabricAttributes$,
  NodeFabricLogPublishingConfiguration$,
  NodeFrameworkAttributes$,
  NodeLogPublishingConfiguration$,
  NodeStatus,
  NodeSummary$,
  paginateListAccessors,
  paginateListInvitations,
  paginateListMembers,
  paginateListNetworks,
  paginateListNodes,
  paginateListProposals,
  paginateListProposalVotes,
  Proposal$,
  ProposalActions$,
  ProposalStatus,
  ProposalSummary$,
  RejectInvitation$,
  RejectInvitationCommand,
  RejectInvitationInput$,
  RejectInvitationOutput$,
  RemoveAction$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  StateDBType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThresholdComparator,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateMember$,
  UpdateMemberCommand,
  UpdateMemberInput$,
  UpdateMemberOutput$,
  UpdateNode$,
  UpdateNodeCommand,
  UpdateNodeInput$,
  UpdateNodeOutput$,
  VoteOnProposal$,
  VoteOnProposalCommand,
  VoteOnProposalInput$,
  VoteOnProposalOutput$,
  VoteSummary$,
  VoteValue,
  VotingPolicy$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ManagedBlockchainClient === "function");
assert(typeof ManagedBlockchain === "function");
// commands
assert(typeof CreateAccessorCommand === "function");
assert(typeof CreateAccessor$ === "object");
assert(typeof CreateMemberCommand === "function");
assert(typeof CreateMember$ === "object");
assert(typeof CreateNetworkCommand === "function");
assert(typeof CreateNetwork$ === "object");
assert(typeof CreateNodeCommand === "function");
assert(typeof CreateNode$ === "object");
assert(typeof CreateProposalCommand === "function");
assert(typeof CreateProposal$ === "object");
assert(typeof DeleteAccessorCommand === "function");
assert(typeof DeleteAccessor$ === "object");
assert(typeof DeleteMemberCommand === "function");
assert(typeof DeleteMember$ === "object");
assert(typeof DeleteNodeCommand === "function");
assert(typeof DeleteNode$ === "object");
assert(typeof GetAccessorCommand === "function");
assert(typeof GetAccessor$ === "object");
assert(typeof GetMemberCommand === "function");
assert(typeof GetMember$ === "object");
assert(typeof GetNetworkCommand === "function");
assert(typeof GetNetwork$ === "object");
assert(typeof GetNodeCommand === "function");
assert(typeof GetNode$ === "object");
assert(typeof GetProposalCommand === "function");
assert(typeof GetProposal$ === "object");
assert(typeof ListAccessorsCommand === "function");
assert(typeof ListAccessors$ === "object");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListInvitations$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListNetworksCommand === "function");
assert(typeof ListNetworks$ === "object");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodes$ === "object");
assert(typeof ListProposalsCommand === "function");
assert(typeof ListProposals$ === "object");
assert(typeof ListProposalVotesCommand === "function");
assert(typeof ListProposalVotes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RejectInvitationCommand === "function");
assert(typeof RejectInvitation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMemberCommand === "function");
assert(typeof UpdateMember$ === "object");
assert(typeof UpdateNodeCommand === "function");
assert(typeof UpdateNode$ === "object");
assert(typeof VoteOnProposalCommand === "function");
assert(typeof VoteOnProposal$ === "object");
// structural schemas
assert(typeof Accessor$ === "object");
assert(typeof AccessorSummary$ === "object");
assert(typeof ApprovalThresholdPolicy$ === "object");
assert(typeof CreateAccessorInput$ === "object");
assert(typeof CreateAccessorOutput$ === "object");
assert(typeof CreateMemberInput$ === "object");
assert(typeof CreateMemberOutput$ === "object");
assert(typeof CreateNetworkInput$ === "object");
assert(typeof CreateNetworkOutput$ === "object");
assert(typeof CreateNodeInput$ === "object");
assert(typeof CreateNodeOutput$ === "object");
assert(typeof CreateProposalInput$ === "object");
assert(typeof CreateProposalOutput$ === "object");
assert(typeof DeleteAccessorInput$ === "object");
assert(typeof DeleteAccessorOutput$ === "object");
assert(typeof DeleteMemberInput$ === "object");
assert(typeof DeleteMemberOutput$ === "object");
assert(typeof DeleteNodeInput$ === "object");
assert(typeof DeleteNodeOutput$ === "object");
assert(typeof GetAccessorInput$ === "object");
assert(typeof GetAccessorOutput$ === "object");
assert(typeof GetMemberInput$ === "object");
assert(typeof GetMemberOutput$ === "object");
assert(typeof GetNetworkInput$ === "object");
assert(typeof GetNetworkOutput$ === "object");
assert(typeof GetNodeInput$ === "object");
assert(typeof GetNodeOutput$ === "object");
assert(typeof GetProposalInput$ === "object");
assert(typeof GetProposalOutput$ === "object");
assert(typeof Invitation$ === "object");
assert(typeof InviteAction$ === "object");
assert(typeof ListAccessorsInput$ === "object");
assert(typeof ListAccessorsOutput$ === "object");
assert(typeof ListInvitationsInput$ === "object");
assert(typeof ListInvitationsOutput$ === "object");
assert(typeof ListMembersInput$ === "object");
assert(typeof ListMembersOutput$ === "object");
assert(typeof ListNetworksInput$ === "object");
assert(typeof ListNetworksOutput$ === "object");
assert(typeof ListNodesInput$ === "object");
assert(typeof ListNodesOutput$ === "object");
assert(typeof ListProposalsInput$ === "object");
assert(typeof ListProposalsOutput$ === "object");
assert(typeof ListProposalVotesInput$ === "object");
assert(typeof ListProposalVotesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof LogConfigurations$ === "object");
assert(typeof Member$ === "object");
assert(typeof MemberConfiguration$ === "object");
assert(typeof MemberFabricAttributes$ === "object");
assert(typeof MemberFabricConfiguration$ === "object");
assert(typeof MemberFabricLogPublishingConfiguration$ === "object");
assert(typeof MemberFrameworkAttributes$ === "object");
assert(typeof MemberFrameworkConfiguration$ === "object");
assert(typeof MemberLogPublishingConfiguration$ === "object");
assert(typeof MemberSummary$ === "object");
assert(typeof Network$ === "object");
assert(typeof NetworkEthereumAttributes$ === "object");
assert(typeof NetworkFabricAttributes$ === "object");
assert(typeof NetworkFabricConfiguration$ === "object");
assert(typeof NetworkFrameworkAttributes$ === "object");
assert(typeof NetworkFrameworkConfiguration$ === "object");
assert(typeof NetworkSummary$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeConfiguration$ === "object");
assert(typeof NodeEthereumAttributes$ === "object");
assert(typeof NodeFabricAttributes$ === "object");
assert(typeof NodeFabricLogPublishingConfiguration$ === "object");
assert(typeof NodeFrameworkAttributes$ === "object");
assert(typeof NodeLogPublishingConfiguration$ === "object");
assert(typeof NodeSummary$ === "object");
assert(typeof Proposal$ === "object");
assert(typeof ProposalActions$ === "object");
assert(typeof ProposalSummary$ === "object");
assert(typeof RejectInvitationInput$ === "object");
assert(typeof RejectInvitationOutput$ === "object");
assert(typeof RemoveAction$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateMemberInput$ === "object");
assert(typeof UpdateMemberOutput$ === "object");
assert(typeof UpdateNodeInput$ === "object");
assert(typeof UpdateNodeOutput$ === "object");
assert(typeof VoteOnProposalInput$ === "object");
assert(typeof VoteOnProposalOutput$ === "object");
assert(typeof VoteSummary$ === "object");
assert(typeof VotingPolicy$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(IllegalActionException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof IllegalActionException$ === "object");
assert(InternalServiceErrorException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidRequestException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotReadyException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(ThrottlingException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof ManagedBlockchainServiceException);
assert(typeof TooManyTagsException$ === "object");
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
