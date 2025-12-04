import {
  AcceptChannelHandshakeCommand,
  AssociationType,
  CancelChannelHandshakeCommand,
  Coverage,
  CreateChannelHandshakeCommand,
  CreateProgramManagementAccountCommand,
  CreateRelationshipCommand,
  DeleteProgramManagementAccountCommand,
  DeleteRelationshipCommand,
  GetRelationshipCommand,
  HandshakeStatus,
  HandshakeType,
  ListChannelHandshakesCommand,
  ListProgramManagementAccountsCommand,
  ListProgramManagementAccountsSortName,
  ListRelationshipsCommand,
  ListRelationshipsSortName,
  ListTagsForResourceCommand,
  ParticipantType,
  PartnerCentralChannel,
  PartnerCentralChannelClient,
  PartnerCentralChannelServiceException,
  Program,
  ProgramManagementAccountStatus,
  ProgramManagementAccountTypeSortName,
  Provider,
  RejectChannelHandshakeCommand,
  ResaleAccountModel,
  RevokeServicePeriodTypeSortName,
  Sector,
  ServicePeriodType,
  SortOrder,
  StartServicePeriodTypeSortName,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProgramManagementAccountCommand,
  UpdateRelationshipCommand,
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
assert(typeof CancelChannelHandshakeCommand === "function");
assert(typeof CreateChannelHandshakeCommand === "function");
assert(typeof CreateProgramManagementAccountCommand === "function");
assert(typeof CreateRelationshipCommand === "function");
assert(typeof DeleteProgramManagementAccountCommand === "function");
assert(typeof DeleteRelationshipCommand === "function");
assert(typeof GetRelationshipCommand === "function");
assert(typeof ListChannelHandshakesCommand === "function");
assert(typeof ListProgramManagementAccountsCommand === "function");
assert(typeof ListRelationshipsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RejectChannelHandshakeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateProgramManagementAccountCommand === "function");
assert(typeof UpdateRelationshipCommand === "function");
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
// errors
assert(PartnerCentralChannelServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannelHandshakes === "function");
assert(typeof paginateListProgramManagementAccounts === "function");
assert(typeof paginateListRelationships === "function");
console.log(`PartnerCentralChannel index test passed.`);
