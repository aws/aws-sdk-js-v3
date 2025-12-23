import {
  AccessDeniedException,
  AccessDeniedException$,
  BadRequestException,
  BadRequestException$,
  Challenge$,
  ChallengeMetadata$,
  ChallengeMetadataSummary$,
  ConflictException,
  ConflictException$,
  Connector$,
  ConnectorStatus,
  ConnectorStatusReason,
  ConnectorSummary$,
  ConnectorType,
  CreateChallenge$,
  CreateChallengeCommand,
  CreateChallengeRequest$,
  CreateChallengeResponse$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorRequest$,
  CreateConnectorResponse$,
  DeleteChallenge$,
  DeleteChallengeCommand,
  DeleteChallengeRequest$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorRequest$,
  GetChallengeMetadata$,
  GetChallengeMetadataCommand,
  GetChallengeMetadataRequest$,
  GetChallengeMetadataResponse$,
  GetChallengePassword$,
  GetChallengePasswordCommand,
  GetChallengePasswordRequest$,
  GetChallengePasswordResponse$,
  GetConnector$,
  GetConnectorCommand,
  GetConnectorRequest$,
  GetConnectorResponse$,
  InternalServerException,
  InternalServerException$,
  IntuneConfiguration$,
  ListChallengeMetadata$,
  ListChallengeMetadataCommand,
  ListChallengeMetadataRequest$,
  ListChallengeMetadataResponse$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MobileDeviceManagement$,
  OpenIdConfiguration$,
  paginateListChallengeMetadata,
  paginateListConnectors,
  PcaConnectorScep,
  PcaConnectorScepClient,
  PcaConnectorScepServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PcaConnectorScepClient === "function");
assert(typeof PcaConnectorScep === "function");
// commands
assert(typeof CreateChallengeCommand === "function");
assert(typeof CreateChallenge$ === "object");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof DeleteChallengeCommand === "function");
assert(typeof DeleteChallenge$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof GetChallengeMetadataCommand === "function");
assert(typeof GetChallengeMetadata$ === "object");
assert(typeof GetChallengePasswordCommand === "function");
assert(typeof GetChallengePassword$ === "object");
assert(typeof GetConnectorCommand === "function");
assert(typeof GetConnector$ === "object");
assert(typeof ListChallengeMetadataCommand === "function");
assert(typeof ListChallengeMetadata$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof Challenge$ === "object");
assert(typeof ChallengeMetadata$ === "object");
assert(typeof ChallengeMetadataSummary$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorSummary$ === "object");
assert(typeof CreateChallengeRequest$ === "object");
assert(typeof CreateChallengeResponse$ === "object");
assert(typeof CreateConnectorRequest$ === "object");
assert(typeof CreateConnectorResponse$ === "object");
assert(typeof DeleteChallengeRequest$ === "object");
assert(typeof DeleteConnectorRequest$ === "object");
assert(typeof GetChallengeMetadataRequest$ === "object");
assert(typeof GetChallengeMetadataResponse$ === "object");
assert(typeof GetChallengePasswordRequest$ === "object");
assert(typeof GetChallengePasswordResponse$ === "object");
assert(typeof GetConnectorRequest$ === "object");
assert(typeof GetConnectorResponse$ === "object");
assert(typeof IntuneConfiguration$ === "object");
assert(typeof ListChallengeMetadataRequest$ === "object");
assert(typeof ListChallengeMetadataResponse$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MobileDeviceManagement$ === "object");
assert(typeof OpenIdConfiguration$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
// enums
assert(typeof ConnectorStatus === "object");
assert(typeof ConnectorStatusReason === "object");
assert(typeof ConnectorType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PcaConnectorScepServiceException);
assert(typeof ValidationException$ === "object");
assert(PcaConnectorScepServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChallengeMetadata === "function");
assert(typeof paginateListConnectors === "function");
console.log(`PcaConnectorScep index test passed.`);
