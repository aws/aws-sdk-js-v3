import {
  AccessDeniedException,
  CdcPropagateTags,
  CdcStatus,
  ClientSideTimestampsStatus,
  ConflictException,
  CreateKeyspaceCommand,
  CreateTableCommand,
  CreateTypeCommand,
  DeleteKeyspaceCommand,
  DeleteTableCommand,
  DeleteTypeCommand,
  EncryptionType,
  GetKeyspaceCommand,
  GetTableAutoScalingSettingsCommand,
  GetTableCommand,
  GetTypeCommand,
  InternalServerException,
  KeyspaceStatus,
  Keyspaces,
  KeyspacesClient,
  KeyspacesServiceException,
  ListKeyspacesCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  ListTypesCommand,
  PointInTimeRecoveryStatus,
  ResourceNotFoundException,
  RestoreTableCommand,
  Rs,
  ServiceQuotaExceededException,
  SortOrder,
  TableStatus,
  TagResourceCommand,
  ThroughputMode,
  TimeToLiveStatus,
  TypeStatus,
  UntagResourceCommand,
  UpdateKeyspaceCommand,
  UpdateTableCommand,
  ValidationException,
  ViewType,
  paginateListKeyspaces,
  paginateListTables,
  paginateListTagsForResource,
  paginateListTypes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KeyspacesClient === "function");
assert(typeof Keyspaces === "function");
// commands
assert(typeof CreateKeyspaceCommand === "function");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTypeCommand === "function");
assert(typeof DeleteKeyspaceCommand === "function");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTypeCommand === "function");
assert(typeof GetKeyspaceCommand === "function");
assert(typeof GetTableCommand === "function");
assert(typeof GetTableAutoScalingSettingsCommand === "function");
assert(typeof GetTypeCommand === "function");
assert(typeof ListKeyspacesCommand === "function");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTypesCommand === "function");
assert(typeof RestoreTableCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateKeyspaceCommand === "function");
assert(typeof UpdateTableCommand === "function");
// enums
assert(typeof CdcPropagateTags === "object");
assert(typeof CdcStatus === "object");
assert(typeof ClientSideTimestampsStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof KeyspaceStatus === "object");
assert(typeof PointInTimeRecoveryStatus === "object");
assert(typeof Rs === "object");
assert(typeof SortOrder === "object");
assert(typeof TableStatus === "object");
assert(typeof ThroughputMode === "object");
assert(typeof TimeToLiveStatus === "object");
assert(typeof TypeStatus === "object");
assert(typeof ViewType === "object");
// errors
assert(AccessDeniedException.prototype instanceof KeyspacesServiceException);
assert(ConflictException.prototype instanceof KeyspacesServiceException);
assert(InternalServerException.prototype instanceof KeyspacesServiceException);
assert(ResourceNotFoundException.prototype instanceof KeyspacesServiceException);
assert(ServiceQuotaExceededException.prototype instanceof KeyspacesServiceException);
assert(ValidationException.prototype instanceof KeyspacesServiceException);
assert(KeyspacesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKeyspaces === "function");
assert(typeof paginateListTables === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTypes === "function");
console.log(`Keyspaces index test passed.`);
