import {
  AccessDeniedException,
  ClusterDeploymentType,
  ClusterStatus,
  ConflictException,
  CreateDbClusterCommand,
  CreateDbInstanceCommand,
  CreateDbParameterGroupCommand,
  DataFusionRuntimeType,
  DbInstanceType,
  DbStorageType,
  DeleteDbClusterCommand,
  DeleteDbInstanceCommand,
  DeploymentType,
  DurationType,
  EngineType,
  FailoverMode,
  GetDbClusterCommand,
  GetDbInstanceCommand,
  GetDbParameterGroupCommand,
  InstanceMode,
  InternalServerException,
  ListDbClustersCommand,
  ListDbInstancesCommand,
  ListDbInstancesForClusterCommand,
  ListDbParameterGroupsCommand,
  ListTagsForResourceCommand,
  LogFormats,
  LogLevel,
  NetworkType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Status,
  TagResourceCommand,
  ThrottlingException,
  TimestreamInfluxDB,
  TimestreamInfluxDBClient,
  TimestreamInfluxDBServiceException,
  TracingType,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListDbClusters,
  paginateListDbInstances,
  paginateListDbInstancesForCluster,
  paginateListDbParameterGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TimestreamInfluxDBClient === "function");
assert(typeof TimestreamInfluxDB === "function");
// commands
assert(typeof CreateDbClusterCommand === "function");
assert(typeof CreateDbInstanceCommand === "function");
assert(typeof CreateDbParameterGroupCommand === "function");
assert(typeof DeleteDbClusterCommand === "function");
assert(typeof DeleteDbInstanceCommand === "function");
assert(typeof GetDbClusterCommand === "function");
assert(typeof GetDbInstanceCommand === "function");
assert(typeof GetDbParameterGroupCommand === "function");
assert(typeof ListDbClustersCommand === "function");
assert(typeof ListDbInstancesCommand === "function");
assert(typeof ListDbInstancesForClusterCommand === "function");
assert(typeof ListDbParameterGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDbClusterCommand === "function");
assert(typeof UpdateDbInstanceCommand === "function");
// enums
assert(typeof ClusterDeploymentType === "object");
assert(typeof ClusterStatus === "object");
assert(typeof DataFusionRuntimeType === "object");
assert(typeof DbInstanceType === "object");
assert(typeof DbStorageType === "object");
assert(typeof DeploymentType === "object");
assert(typeof DurationType === "object");
assert(typeof EngineType === "object");
assert(typeof FailoverMode === "object");
assert(typeof InstanceMode === "object");
assert(typeof LogFormats === "object");
assert(typeof LogLevel === "object");
assert(typeof NetworkType === "object");
assert(typeof Status === "object");
assert(typeof TracingType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof TimestreamInfluxDBServiceException);
assert(ConflictException.prototype instanceof TimestreamInfluxDBServiceException);
assert(InternalServerException.prototype instanceof TimestreamInfluxDBServiceException);
assert(ResourceNotFoundException.prototype instanceof TimestreamInfluxDBServiceException);
assert(ServiceQuotaExceededException.prototype instanceof TimestreamInfluxDBServiceException);
assert(ThrottlingException.prototype instanceof TimestreamInfluxDBServiceException);
assert(ValidationException.prototype instanceof TimestreamInfluxDBServiceException);
assert(TimestreamInfluxDBServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDbClusters === "function");
assert(typeof paginateListDbInstances === "function");
assert(typeof paginateListDbInstancesForCluster === "function");
assert(typeof paginateListDbParameterGroups === "function");
console.log(`TimestreamInfluxDB index test passed.`);
