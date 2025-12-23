import {
  AccessDeniedException,
  AccessDeniedException$,
  AutoScalingPolicy$,
  AutoScalingSettings$,
  AutoScalingSpecification$,
  CapacitySpecification$,
  CapacitySpecificationSummary$,
  CdcPropagateTags,
  CdcSpecification$,
  CdcSpecificationSummary$,
  CdcStatus,
  ClientSideTimestamps$,
  ClientSideTimestampsStatus,
  ClusteringKey$,
  ColumnDefinition$,
  Comment$,
  ConflictException,
  ConflictException$,
  CreateKeyspace$,
  CreateKeyspaceCommand,
  CreateKeyspaceRequest$,
  CreateKeyspaceResponse$,
  CreateTable$,
  CreateTableCommand,
  CreateTableRequest$,
  CreateTableResponse$,
  CreateType$,
  CreateTypeCommand,
  CreateTypeRequest$,
  CreateTypeResponse$,
  DeleteKeyspace$,
  DeleteKeyspaceCommand,
  DeleteKeyspaceRequest$,
  DeleteKeyspaceResponse$,
  DeleteTable$,
  DeleteTableCommand,
  DeleteTableRequest$,
  DeleteTableResponse$,
  DeleteType$,
  DeleteTypeCommand,
  DeleteTypeRequest$,
  DeleteTypeResponse$,
  EncryptionSpecification$,
  EncryptionType,
  FieldDefinition$,
  GetKeyspace$,
  GetKeyspaceCommand,
  GetKeyspaceRequest$,
  GetKeyspaceResponse$,
  GetTable$,
  GetTableAutoScalingSettings$,
  GetTableAutoScalingSettingsCommand,
  GetTableAutoScalingSettingsRequest$,
  GetTableAutoScalingSettingsResponse$,
  GetTableCommand,
  GetTableRequest$,
  GetTableResponse$,
  GetType$,
  GetTypeCommand,
  GetTypeRequest$,
  GetTypeResponse$,
  InternalServerException,
  InternalServerException$,
  Keyspaces,
  KeyspacesClient,
  KeyspacesServiceException,
  KeyspaceStatus,
  KeyspaceSummary$,
  ListKeyspaces$,
  ListKeyspacesCommand,
  ListKeyspacesRequest$,
  ListKeyspacesResponse$,
  ListTables$,
  ListTablesCommand,
  ListTablesRequest$,
  ListTablesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTypes$,
  ListTypesCommand,
  ListTypesRequest$,
  ListTypesResponse$,
  paginateListKeyspaces,
  paginateListTables,
  paginateListTagsForResource,
  paginateListTypes,
  PartitionKey$,
  PointInTimeRecovery$,
  PointInTimeRecoveryStatus,
  PointInTimeRecoverySummary$,
  ReplicaAutoScalingSpecification$,
  ReplicaSpecification$,
  ReplicaSpecificationSummary$,
  ReplicationGroupStatus$,
  ReplicationSpecification$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreTable$,
  RestoreTableCommand,
  RestoreTableRequest$,
  RestoreTableResponse$,
  Rs,
  SchemaDefinition$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  StaticColumn$,
  TableStatus,
  TableSummary$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetTrackingScalingPolicyConfiguration$,
  ThroughputMode,
  TimeToLive$,
  TimeToLiveStatus,
  TypeStatus,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateKeyspace$,
  UpdateKeyspaceCommand,
  UpdateKeyspaceRequest$,
  UpdateKeyspaceResponse$,
  UpdateTable$,
  UpdateTableCommand,
  UpdateTableRequest$,
  UpdateTableResponse$,
  ValidationException,
  ValidationException$,
  ViewType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KeyspacesClient === "function");
assert(typeof Keyspaces === "function");
// commands
assert(typeof CreateKeyspaceCommand === "function");
assert(typeof CreateKeyspace$ === "object");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTable$ === "object");
assert(typeof CreateTypeCommand === "function");
assert(typeof CreateType$ === "object");
assert(typeof DeleteKeyspaceCommand === "function");
assert(typeof DeleteKeyspace$ === "object");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTable$ === "object");
assert(typeof DeleteTypeCommand === "function");
assert(typeof DeleteType$ === "object");
assert(typeof GetKeyspaceCommand === "function");
assert(typeof GetKeyspace$ === "object");
assert(typeof GetTableCommand === "function");
assert(typeof GetTable$ === "object");
assert(typeof GetTableAutoScalingSettingsCommand === "function");
assert(typeof GetTableAutoScalingSettings$ === "object");
assert(typeof GetTypeCommand === "function");
assert(typeof GetType$ === "object");
assert(typeof ListKeyspacesCommand === "function");
assert(typeof ListKeyspaces$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTypesCommand === "function");
assert(typeof ListTypes$ === "object");
assert(typeof RestoreTableCommand === "function");
assert(typeof RestoreTable$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateKeyspaceCommand === "function");
assert(typeof UpdateKeyspace$ === "object");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTable$ === "object");
// structural schemas
assert(typeof AutoScalingPolicy$ === "object");
assert(typeof AutoScalingSettings$ === "object");
assert(typeof AutoScalingSpecification$ === "object");
assert(typeof CapacitySpecification$ === "object");
assert(typeof CapacitySpecificationSummary$ === "object");
assert(typeof CdcSpecification$ === "object");
assert(typeof CdcSpecificationSummary$ === "object");
assert(typeof ClientSideTimestamps$ === "object");
assert(typeof ClusteringKey$ === "object");
assert(typeof ColumnDefinition$ === "object");
assert(typeof Comment$ === "object");
assert(typeof CreateKeyspaceRequest$ === "object");
assert(typeof CreateKeyspaceResponse$ === "object");
assert(typeof CreateTableRequest$ === "object");
assert(typeof CreateTableResponse$ === "object");
assert(typeof CreateTypeRequest$ === "object");
assert(typeof CreateTypeResponse$ === "object");
assert(typeof DeleteKeyspaceRequest$ === "object");
assert(typeof DeleteKeyspaceResponse$ === "object");
assert(typeof DeleteTableRequest$ === "object");
assert(typeof DeleteTableResponse$ === "object");
assert(typeof DeleteTypeRequest$ === "object");
assert(typeof DeleteTypeResponse$ === "object");
assert(typeof EncryptionSpecification$ === "object");
assert(typeof FieldDefinition$ === "object");
assert(typeof GetKeyspaceRequest$ === "object");
assert(typeof GetKeyspaceResponse$ === "object");
assert(typeof GetTableAutoScalingSettingsRequest$ === "object");
assert(typeof GetTableAutoScalingSettingsResponse$ === "object");
assert(typeof GetTableRequest$ === "object");
assert(typeof GetTableResponse$ === "object");
assert(typeof GetTypeRequest$ === "object");
assert(typeof GetTypeResponse$ === "object");
assert(typeof KeyspaceSummary$ === "object");
assert(typeof ListKeyspacesRequest$ === "object");
assert(typeof ListKeyspacesResponse$ === "object");
assert(typeof ListTablesRequest$ === "object");
assert(typeof ListTablesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTypesRequest$ === "object");
assert(typeof ListTypesResponse$ === "object");
assert(typeof PartitionKey$ === "object");
assert(typeof PointInTimeRecovery$ === "object");
assert(typeof PointInTimeRecoverySummary$ === "object");
assert(typeof ReplicaAutoScalingSpecification$ === "object");
assert(typeof ReplicaSpecification$ === "object");
assert(typeof ReplicaSpecificationSummary$ === "object");
assert(typeof ReplicationGroupStatus$ === "object");
assert(typeof ReplicationSpecification$ === "object");
assert(typeof RestoreTableRequest$ === "object");
assert(typeof RestoreTableResponse$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof StaticColumn$ === "object");
assert(typeof TableSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetTrackingScalingPolicyConfiguration$ === "object");
assert(typeof TimeToLive$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateKeyspaceRequest$ === "object");
assert(typeof UpdateKeyspaceResponse$ === "object");
assert(typeof UpdateTableRequest$ === "object");
assert(typeof UpdateTableResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof KeyspacesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof KeyspacesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KeyspacesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof KeyspacesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof KeyspacesServiceException);
assert(typeof ValidationException$ === "object");
assert(KeyspacesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKeyspaces === "function");
assert(typeof paginateListTables === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTypes === "function");
console.log(`Keyspaces index test passed.`);
