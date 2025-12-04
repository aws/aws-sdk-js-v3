import {
  ClusterDeploymentType,
  ClusterStatus,
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
  ListDbClustersCommand,
  ListDbInstancesCommand,
  ListDbInstancesForClusterCommand,
  ListDbParameterGroupsCommand,
  ListTagsForResourceCommand,
  LogFormats,
  LogLevel,
  NetworkType,
  Status,
  TagResourceCommand,
  TimestreamInfluxDB,
  TimestreamInfluxDBClient,
  TimestreamInfluxDBServiceException,
  TracingType,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
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
// errors
assert(TimestreamInfluxDBServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDbClusters === "function");
assert(typeof paginateListDbInstances === "function");
assert(typeof paginateListDbInstancesForCluster === "function");
assert(typeof paginateListDbParameterGroups === "function");
console.log(`TimestreamInfluxDB index test passed.`);
