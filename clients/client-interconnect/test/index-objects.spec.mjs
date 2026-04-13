import {
  AcceptConnectionProposal$,
  AcceptConnectionProposalCommand,
  AcceptConnectionProposalRequest$,
  AcceptConnectionProposalResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AttachPoint$,
  AttachPointDescriptor$,
  AttachPointType,
  Bandwidths$,
  Connection$,
  ConnectionState,
  ConnectionSummary$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionRequest$,
  CreateConnectionResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteConnectionResponse$,
  DescribeConnectionProposal$,
  DescribeConnectionProposalCommand,
  DescribeConnectionProposalRequest$,
  DescribeConnectionProposalResponse$,
  Environment$,
  EnvironmentState,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  Interconnect,
  InterconnectClient,
  InterconnectClientException,
  InterconnectClientException$,
  InterconnectServerException,
  InterconnectServerException$,
  InterconnectServiceException,
  InterconnectValidationException,
  InterconnectValidationException$,
  ListAttachPoints$,
  ListAttachPointsCommand,
  ListAttachPointsRequest$,
  ListAttachPointsResponse$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsRequest$,
  ListConnectionsResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListAttachPoints,
  paginateListConnections,
  paginateListEnvironments,
  Provider$,
  RemoteAccountIdentifier$,
  RemoteAccountIdentifierType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnection$,
  UpdateConnectionCommand,
  UpdateConnectionRequest$,
  UpdateConnectionResponse$,
  waitForConnectionAvailable,
  waitForConnectionDeleted,
  waitUntilConnectionAvailable,
  waitUntilConnectionDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InterconnectClient === "function");
assert(typeof Interconnect === "function");
// commands
assert(typeof AcceptConnectionProposalCommand === "function");
assert(typeof AcceptConnectionProposal$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DescribeConnectionProposalCommand === "function");
assert(typeof DescribeConnectionProposal$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof ListAttachPointsCommand === "function");
assert(typeof ListAttachPoints$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
// structural schemas
assert(typeof AcceptConnectionProposalRequest$ === "object");
assert(typeof AcceptConnectionProposalResponse$ === "object");
assert(typeof AttachPoint$ === "object");
assert(typeof AttachPointDescriptor$ === "object");
assert(typeof Bandwidths$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionSummary$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateConnectionResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DescribeConnectionProposalRequest$ === "object");
assert(typeof DescribeConnectionProposalResponse$ === "object");
assert(typeof Environment$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof ListAttachPointsRequest$ === "object");
assert(typeof ListAttachPointsResponse$ === "object");
assert(typeof ListConnectionsRequest$ === "object");
assert(typeof ListConnectionsResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Provider$ === "object");
assert(typeof RemoteAccountIdentifier$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectionRequest$ === "object");
assert(typeof UpdateConnectionResponse$ === "object");
// enums
assert(typeof AttachPointType === "object");
assert(typeof ConnectionState === "object");
assert(typeof EnvironmentState === "object");
assert(typeof RemoteAccountIdentifierType === "object");
// errors
assert(AccessDeniedException.prototype instanceof InterconnectServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InterconnectClientException.prototype instanceof InterconnectServiceException);
assert(typeof InterconnectClientException$ === "object");
assert(InterconnectServerException.prototype instanceof InterconnectServiceException);
assert(typeof InterconnectServerException$ === "object");
assert(InterconnectValidationException.prototype instanceof InterconnectServiceException);
assert(typeof InterconnectValidationException$ === "object");
assert(ResourceNotFoundException.prototype instanceof InterconnectServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof InterconnectServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof InterconnectServiceException);
assert(typeof ThrottlingException$ === "object");
assert(InterconnectServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForConnectionAvailable === "function");
assert(typeof waitForConnectionDeleted === "function");
assert(typeof waitUntilConnectionAvailable === "function");
assert(typeof waitUntilConnectionDeleted === "function");
// paginators
assert(typeof paginateListAttachPoints === "function");
assert(typeof paginateListConnections === "function");
assert(typeof paginateListEnvironments === "function");
console.log(`Interconnect index test passed.`);
