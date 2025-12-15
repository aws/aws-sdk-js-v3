import {
  AcceptChannelHandshake$,
  AcceptChannelHandshakeCommand,
  AcceptChannelHandshakeDetail$,
  AcceptChannelHandshakeRequest$,
  AcceptChannelHandshakeResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AssociationType,
  CancelChannelHandshake$,
  CancelChannelHandshakeCommand,
  CancelChannelHandshakeDetail$,
  CancelChannelHandshakeRequest$,
  CancelChannelHandshakeResponse$,
  ChannelHandshakePayload$,
  ChannelHandshakeSummary$,
  ConflictException,
  ConflictException$,
  Coverage,
  CreateChannelHandshake$,
  CreateChannelHandshakeCommand,
  CreateChannelHandshakeDetail$,
  CreateChannelHandshakeRequest$,
  CreateChannelHandshakeResponse$,
  CreateProgramManagementAccount$,
  CreateProgramManagementAccountCommand,
  CreateProgramManagementAccountDetail$,
  CreateProgramManagementAccountRequest$,
  CreateProgramManagementAccountResponse$,
  CreateRelationship$,
  CreateRelationshipCommand,
  CreateRelationshipDetail$,
  CreateRelationshipRequest$,
  CreateRelationshipResponse$,
  DeleteProgramManagementAccount$,
  DeleteProgramManagementAccountCommand,
  DeleteProgramManagementAccountRequest$,
  DeleteProgramManagementAccountResponse$,
  DeleteRelationship$,
  DeleteRelationshipCommand,
  DeleteRelationshipRequest$,
  DeleteRelationshipResponse$,
  GetRelationship$,
  GetRelationshipCommand,
  GetRelationshipRequest$,
  GetRelationshipResponse$,
  HandshakeDetail$,
  HandshakeStatus,
  HandshakeType,
  InternalServerException,
  InternalServerException$,
  ListChannelHandshakes$,
  ListChannelHandshakesCommand,
  ListChannelHandshakesRequest$,
  ListChannelHandshakesResponse$,
  ListChannelHandshakesTypeFilters$,
  ListChannelHandshakesTypeSort$,
  ListProgramManagementAccounts$,
  ListProgramManagementAccountsCommand,
  ListProgramManagementAccountsRequest$,
  ListProgramManagementAccountsResponse$,
  ListProgramManagementAccountsSortBase$,
  ListProgramManagementAccountsSortName,
  ListRelationships$,
  ListRelationshipsCommand,
  ListRelationshipsRequest$,
  ListRelationshipsResponse$,
  ListRelationshipsSortBase$,
  ListRelationshipsSortName,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ParticipantType,
  PartnerCentralChannel,
  PartnerCentralChannelClient,
  PartnerCentralChannelServiceException,
  PartnerLedSupport$,
  Program,
  ProgramManagementAccountHandshakeDetail$,
  ProgramManagementAccountStatus,
  ProgramManagementAccountSummary$,
  ProgramManagementAccountTypeFilters$,
  ProgramManagementAccountTypeSort$,
  ProgramManagementAccountTypeSortName,
  Provider,
  RejectChannelHandshake$,
  RejectChannelHandshakeCommand,
  RejectChannelHandshakeDetail$,
  RejectChannelHandshakeRequest$,
  RejectChannelHandshakeResponse$,
  RelationshipDetail$,
  RelationshipSummary$,
  ResaleAccountModel,
  ResoldBusiness$,
  ResoldEnterprise$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokeServicePeriodHandshakeDetail$,
  RevokeServicePeriodPayload$,
  RevokeServicePeriodTypeFilters$,
  RevokeServicePeriodTypeSort$,
  RevokeServicePeriodTypeSortName,
  Sector,
  ServicePeriodType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  StartServicePeriodHandshakeDetail$,
  StartServicePeriodPayload$,
  StartServicePeriodTypeFilters$,
  StartServicePeriodTypeSort$,
  StartServicePeriodTypeSortName,
  SupportPlan$,
  Tag$,
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
  UpdateProgramManagementAccount$,
  UpdateProgramManagementAccountCommand,
  UpdateProgramManagementAccountDetail$,
  UpdateProgramManagementAccountRequest$,
  UpdateProgramManagementAccountResponse$,
  UpdateRelationship$,
  UpdateRelationshipCommand,
  UpdateRelationshipDetail$,
  UpdateRelationshipRequest$,
  UpdateRelationshipResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListChannelHandshakes,
  paginateListProgramManagementAccounts,
  paginateListRelationships,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralChannelClient === "function");
assert(typeof PartnerCentralChannel === "function");
// commands
assert(typeof AcceptChannelHandshakeCommand === "function");
assert(typeof AcceptChannelHandshake$ === "object");
assert(typeof CancelChannelHandshakeCommand === "function");
assert(typeof CancelChannelHandshake$ === "object");
assert(typeof CreateChannelHandshakeCommand === "function");
assert(typeof CreateChannelHandshake$ === "object");
assert(typeof CreateProgramManagementAccountCommand === "function");
assert(typeof CreateProgramManagementAccount$ === "object");
assert(typeof CreateRelationshipCommand === "function");
assert(typeof CreateRelationship$ === "object");
assert(typeof DeleteProgramManagementAccountCommand === "function");
assert(typeof DeleteProgramManagementAccount$ === "object");
assert(typeof DeleteRelationshipCommand === "function");
assert(typeof DeleteRelationship$ === "object");
assert(typeof GetRelationshipCommand === "function");
assert(typeof GetRelationship$ === "object");
assert(typeof ListChannelHandshakesCommand === "function");
assert(typeof ListChannelHandshakes$ === "object");
assert(typeof ListProgramManagementAccountsCommand === "function");
assert(typeof ListProgramManagementAccounts$ === "object");
assert(typeof ListRelationshipsCommand === "function");
assert(typeof ListRelationships$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RejectChannelHandshakeCommand === "function");
assert(typeof RejectChannelHandshake$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateProgramManagementAccountCommand === "function");
assert(typeof UpdateProgramManagementAccount$ === "object");
assert(typeof UpdateRelationshipCommand === "function");
assert(typeof UpdateRelationship$ === "object");
// structural schemas
assert(typeof AcceptChannelHandshakeDetail$ === "object");
assert(typeof AcceptChannelHandshakeRequest$ === "object");
assert(typeof AcceptChannelHandshakeResponse$ === "object");
assert(typeof CancelChannelHandshakeDetail$ === "object");
assert(typeof CancelChannelHandshakeRequest$ === "object");
assert(typeof CancelChannelHandshakeResponse$ === "object");
assert(typeof ChannelHandshakePayload$ === "object");
assert(typeof ChannelHandshakeSummary$ === "object");
assert(typeof CreateChannelHandshakeDetail$ === "object");
assert(typeof CreateChannelHandshakeRequest$ === "object");
assert(typeof CreateChannelHandshakeResponse$ === "object");
assert(typeof CreateProgramManagementAccountDetail$ === "object");
assert(typeof CreateProgramManagementAccountRequest$ === "object");
assert(typeof CreateProgramManagementAccountResponse$ === "object");
assert(typeof CreateRelationshipDetail$ === "object");
assert(typeof CreateRelationshipRequest$ === "object");
assert(typeof CreateRelationshipResponse$ === "object");
assert(typeof DeleteProgramManagementAccountRequest$ === "object");
assert(typeof DeleteProgramManagementAccountResponse$ === "object");
assert(typeof DeleteRelationshipRequest$ === "object");
assert(typeof DeleteRelationshipResponse$ === "object");
assert(typeof GetRelationshipRequest$ === "object");
assert(typeof GetRelationshipResponse$ === "object");
assert(typeof HandshakeDetail$ === "object");
assert(typeof ListChannelHandshakesRequest$ === "object");
assert(typeof ListChannelHandshakesResponse$ === "object");
assert(typeof ListChannelHandshakesTypeFilters$ === "object");
assert(typeof ListChannelHandshakesTypeSort$ === "object");
assert(typeof ListProgramManagementAccountsRequest$ === "object");
assert(typeof ListProgramManagementAccountsResponse$ === "object");
assert(typeof ListProgramManagementAccountsSortBase$ === "object");
assert(typeof ListRelationshipsRequest$ === "object");
assert(typeof ListRelationshipsResponse$ === "object");
assert(typeof ListRelationshipsSortBase$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PartnerLedSupport$ === "object");
assert(typeof ProgramManagementAccountHandshakeDetail$ === "object");
assert(typeof ProgramManagementAccountSummary$ === "object");
assert(typeof ProgramManagementAccountTypeFilters$ === "object");
assert(typeof ProgramManagementAccountTypeSort$ === "object");
assert(typeof RejectChannelHandshakeDetail$ === "object");
assert(typeof RejectChannelHandshakeRequest$ === "object");
assert(typeof RejectChannelHandshakeResponse$ === "object");
assert(typeof RelationshipDetail$ === "object");
assert(typeof RelationshipSummary$ === "object");
assert(typeof ResoldBusiness$ === "object");
assert(typeof ResoldEnterprise$ === "object");
assert(typeof RevokeServicePeriodHandshakeDetail$ === "object");
assert(typeof RevokeServicePeriodPayload$ === "object");
assert(typeof RevokeServicePeriodTypeFilters$ === "object");
assert(typeof RevokeServicePeriodTypeSort$ === "object");
assert(typeof StartServicePeriodHandshakeDetail$ === "object");
assert(typeof StartServicePeriodPayload$ === "object");
assert(typeof StartServicePeriodTypeFilters$ === "object");
assert(typeof StartServicePeriodTypeSort$ === "object");
assert(typeof SupportPlan$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateProgramManagementAccountDetail$ === "object");
assert(typeof UpdateProgramManagementAccountRequest$ === "object");
assert(typeof UpdateProgramManagementAccountResponse$ === "object");
assert(typeof UpdateRelationshipDetail$ === "object");
assert(typeof UpdateRelationshipRequest$ === "object");
assert(typeof UpdateRelationshipResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AssociationType === "object");
assert(typeof Coverage === "object");
assert(typeof HandshakeStatus === "object");
assert(typeof HandshakeType === "object");
assert(typeof ListProgramManagementAccountsSortName === "object");
assert(typeof ListRelationshipsSortName === "object");
assert(typeof ParticipantType === "object");
assert(typeof Program === "object");
assert(typeof ProgramManagementAccountStatus === "object");
assert(typeof ProgramManagementAccountTypeSortName === "object");
assert(typeof Provider === "object");
assert(typeof ResaleAccountModel === "object");
assert(typeof RevokeServicePeriodTypeSortName === "object");
assert(typeof Sector === "object");
assert(typeof ServicePeriodType === "object");
assert(typeof SortOrder === "object");
assert(typeof StartServicePeriodTypeSortName === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralChannelServiceException);
assert(typeof ValidationException$ === "object");
assert(PartnerCentralChannelServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannelHandshakes === "function");
assert(typeof paginateListProgramManagementAccounts === "function");
assert(typeof paginateListRelationships === "function");
console.log(`PartnerCentralChannel index test passed.`);
