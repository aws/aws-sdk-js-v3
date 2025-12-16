import {
  AccessDeniedException,
  AccessDeniedException$,
  ClusterDeploymentType,
  ClusterStatus,
  ConflictException,
  ConflictException$,
  CreateDbCluster$,
  CreateDbClusterCommand,
  CreateDbClusterInput$,
  CreateDbClusterOutput$,
  CreateDbInstance$,
  CreateDbInstanceCommand,
  CreateDbInstanceInput$,
  CreateDbInstanceOutput$,
  CreateDbParameterGroup$,
  CreateDbParameterGroupCommand,
  CreateDbParameterGroupInput$,
  CreateDbParameterGroupOutput$,
  DataFusionRuntimeType,
  DbClusterSummary$,
  DbInstanceForClusterSummary$,
  DbInstanceSummary$,
  DbInstanceType,
  DbParameterGroupSummary$,
  DbStorageType,
  DeleteDbCluster$,
  DeleteDbClusterCommand,
  DeleteDbClusterInput$,
  DeleteDbClusterOutput$,
  DeleteDbInstance$,
  DeleteDbInstanceCommand,
  DeleteDbInstanceInput$,
  DeleteDbInstanceOutput$,
  DeploymentType,
  Duration$,
  DurationType,
  EngineType,
  FailoverMode,
  GetDbCluster$,
  GetDbClusterCommand,
  GetDbClusterInput$,
  GetDbClusterOutput$,
  GetDbInstance$,
  GetDbInstanceCommand,
  GetDbInstanceInput$,
  GetDbInstanceOutput$,
  GetDbParameterGroup$,
  GetDbParameterGroupCommand,
  GetDbParameterGroupInput$,
  GetDbParameterGroupOutput$,
  InfluxDBv2Parameters$,
  InfluxDBv3CoreParameters$,
  InfluxDBv3EnterpriseParameters$,
  InstanceMode,
  InternalServerException,
  InternalServerException$,
  ListDbClusters$,
  ListDbClustersCommand,
  ListDbClustersInput$,
  ListDbClustersOutput$,
  ListDbInstances$,
  ListDbInstancesCommand,
  ListDbInstancesForCluster$,
  ListDbInstancesForClusterCommand,
  ListDbInstancesForClusterInput$,
  ListDbInstancesForClusterOutput$,
  ListDbInstancesInput$,
  ListDbInstancesOutput$,
  ListDbParameterGroups$,
  ListDbParameterGroupsCommand,
  ListDbParameterGroupsInput$,
  ListDbParameterGroupsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogDeliveryConfiguration$,
  LogFormats,
  LogLevel,
  NetworkType,
  PercentOrAbsoluteLong$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Configuration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Status,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  TimestreamInfluxDB,
  TimestreamInfluxDBClient,
  TimestreamInfluxDBServiceException,
  TracingType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateDbCluster$,
  UpdateDbClusterCommand,
  UpdateDbClusterInput$,
  UpdateDbClusterOutput$,
  UpdateDbInstance$,
  UpdateDbInstanceCommand,
  UpdateDbInstanceInput$,
  UpdateDbInstanceOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  _Parameters$,
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
assert(typeof CreateDbCluster$ === "object");
assert(typeof CreateDbInstanceCommand === "function");
assert(typeof CreateDbInstance$ === "object");
assert(typeof CreateDbParameterGroupCommand === "function");
assert(typeof CreateDbParameterGroup$ === "object");
assert(typeof DeleteDbClusterCommand === "function");
assert(typeof DeleteDbCluster$ === "object");
assert(typeof DeleteDbInstanceCommand === "function");
assert(typeof DeleteDbInstance$ === "object");
assert(typeof GetDbClusterCommand === "function");
assert(typeof GetDbCluster$ === "object");
assert(typeof GetDbInstanceCommand === "function");
assert(typeof GetDbInstance$ === "object");
assert(typeof GetDbParameterGroupCommand === "function");
assert(typeof GetDbParameterGroup$ === "object");
assert(typeof ListDbClustersCommand === "function");
assert(typeof ListDbClusters$ === "object");
assert(typeof ListDbInstancesCommand === "function");
assert(typeof ListDbInstances$ === "object");
assert(typeof ListDbInstancesForClusterCommand === "function");
assert(typeof ListDbInstancesForCluster$ === "object");
assert(typeof ListDbParameterGroupsCommand === "function");
assert(typeof ListDbParameterGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDbClusterCommand === "function");
assert(typeof UpdateDbCluster$ === "object");
assert(typeof UpdateDbInstanceCommand === "function");
assert(typeof UpdateDbInstance$ === "object");
// structural schemas
assert(typeof CreateDbClusterInput$ === "object");
assert(typeof CreateDbClusterOutput$ === "object");
assert(typeof CreateDbInstanceInput$ === "object");
assert(typeof CreateDbInstanceOutput$ === "object");
assert(typeof CreateDbParameterGroupInput$ === "object");
assert(typeof CreateDbParameterGroupOutput$ === "object");
assert(typeof DbClusterSummary$ === "object");
assert(typeof DbInstanceForClusterSummary$ === "object");
assert(typeof DbInstanceSummary$ === "object");
assert(typeof DbParameterGroupSummary$ === "object");
assert(typeof DeleteDbClusterInput$ === "object");
assert(typeof DeleteDbClusterOutput$ === "object");
assert(typeof DeleteDbInstanceInput$ === "object");
assert(typeof DeleteDbInstanceOutput$ === "object");
assert(typeof Duration$ === "object");
assert(typeof GetDbClusterInput$ === "object");
assert(typeof GetDbClusterOutput$ === "object");
assert(typeof GetDbInstanceInput$ === "object");
assert(typeof GetDbInstanceOutput$ === "object");
assert(typeof GetDbParameterGroupInput$ === "object");
assert(typeof GetDbParameterGroupOutput$ === "object");
assert(typeof InfluxDBv2Parameters$ === "object");
assert(typeof InfluxDBv3CoreParameters$ === "object");
assert(typeof InfluxDBv3EnterpriseParameters$ === "object");
assert(typeof ListDbClustersInput$ === "object");
assert(typeof ListDbClustersOutput$ === "object");
assert(typeof ListDbInstancesForClusterInput$ === "object");
assert(typeof ListDbInstancesForClusterOutput$ === "object");
assert(typeof ListDbInstancesInput$ === "object");
assert(typeof ListDbInstancesOutput$ === "object");
assert(typeof ListDbParameterGroupsInput$ === "object");
assert(typeof ListDbParameterGroupsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogDeliveryConfiguration$ === "object");
assert(typeof _Parameters$ === "object");
assert(typeof PercentOrAbsoluteLong$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateDbClusterInput$ === "object");
assert(typeof UpdateDbClusterOutput$ === "object");
assert(typeof UpdateDbInstanceInput$ === "object");
assert(typeof UpdateDbInstanceOutput$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof TimestreamInfluxDBServiceException);
assert(typeof ValidationException$ === "object");
assert(TimestreamInfluxDBServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDbClusters === "function");
assert(typeof paginateListDbInstances === "function");
assert(typeof paginateListDbInstancesForCluster === "function");
assert(typeof paginateListDbParameterGroups === "function");
console.log(`TimestreamInfluxDB index test passed.`);
