import {
  AutoScalingMetric,
  ChangeType,
  ChangesetStatus,
  CreateEnvironmentCommand,
  CreateKxChangesetCommand,
  CreateKxClusterCommand,
  CreateKxDatabaseCommand,
  CreateKxDataviewCommand,
  CreateKxEnvironmentCommand,
  CreateKxScalingGroupCommand,
  CreateKxUserCommand,
  CreateKxVolumeCommand,
  DeleteEnvironmentCommand,
  DeleteKxClusterCommand,
  DeleteKxClusterNodeCommand,
  DeleteKxDatabaseCommand,
  DeleteKxDataviewCommand,
  DeleteKxEnvironmentCommand,
  DeleteKxScalingGroupCommand,
  DeleteKxUserCommand,
  DeleteKxVolumeCommand,
  DnsStatus,
  EnvironmentStatus,
  ErrorDetails,
  FederationMode,
  Finspace,
  FinspaceClient,
  FinspaceServiceException,
  GetEnvironmentCommand,
  GetKxChangesetCommand,
  GetKxClusterCommand,
  GetKxConnectionStringCommand,
  GetKxDatabaseCommand,
  GetKxDataviewCommand,
  GetKxEnvironmentCommand,
  GetKxScalingGroupCommand,
  GetKxUserCommand,
  GetKxVolumeCommand,
  IPAddressType,
  KxAzMode,
  KxClusterCodeDeploymentStrategy,
  KxClusterStatus,
  KxClusterType,
  KxDataviewStatus,
  KxDeploymentStrategy,
  KxNAS1Type,
  KxNodeStatus,
  KxSavedownStorageType,
  KxScalingGroupStatus,
  KxVolumeStatus,
  KxVolumeType,
  ListEnvironmentsCommand,
  ListKxChangesetsCommand,
  ListKxClusterNodesCommand,
  ListKxClustersCommand,
  ListKxDatabasesCommand,
  ListKxDataviewsCommand,
  ListKxEnvironmentsCommand,
  ListKxScalingGroupsCommand,
  ListKxUsersCommand,
  ListKxVolumesCommand,
  ListTagsForResourceCommand,
  RuleAction,
  TagResourceCommand,
  TgwStatus,
  UntagResourceCommand,
  UpdateEnvironmentCommand,
  UpdateKxClusterCodeConfigurationCommand,
  UpdateKxClusterDatabasesCommand,
  UpdateKxDatabaseCommand,
  UpdateKxDataviewCommand,
  UpdateKxEnvironmentCommand,
  UpdateKxEnvironmentNetworkCommand,
  UpdateKxUserCommand,
  UpdateKxVolumeCommand,
  VolumeType,
  paginateListKxChangesets,
  paginateListKxClusterNodes,
  paginateListKxDatabases,
  paginateListKxDataviews,
  paginateListKxEnvironments,
  paginateListKxScalingGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FinspaceClient === "function");
assert(typeof Finspace === "function");
// commands
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateKxChangesetCommand === "function");
assert(typeof CreateKxClusterCommand === "function");
assert(typeof CreateKxDatabaseCommand === "function");
assert(typeof CreateKxDataviewCommand === "function");
assert(typeof CreateKxEnvironmentCommand === "function");
assert(typeof CreateKxScalingGroupCommand === "function");
assert(typeof CreateKxUserCommand === "function");
assert(typeof CreateKxVolumeCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteKxClusterCommand === "function");
assert(typeof DeleteKxClusterNodeCommand === "function");
assert(typeof DeleteKxDatabaseCommand === "function");
assert(typeof DeleteKxDataviewCommand === "function");
assert(typeof DeleteKxEnvironmentCommand === "function");
assert(typeof DeleteKxScalingGroupCommand === "function");
assert(typeof DeleteKxUserCommand === "function");
assert(typeof DeleteKxVolumeCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetKxChangesetCommand === "function");
assert(typeof GetKxClusterCommand === "function");
assert(typeof GetKxConnectionStringCommand === "function");
assert(typeof GetKxDatabaseCommand === "function");
assert(typeof GetKxDataviewCommand === "function");
assert(typeof GetKxEnvironmentCommand === "function");
assert(typeof GetKxScalingGroupCommand === "function");
assert(typeof GetKxUserCommand === "function");
assert(typeof GetKxVolumeCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListKxChangesetsCommand === "function");
assert(typeof ListKxClusterNodesCommand === "function");
assert(typeof ListKxClustersCommand === "function");
assert(typeof ListKxDatabasesCommand === "function");
assert(typeof ListKxDataviewsCommand === "function");
assert(typeof ListKxEnvironmentsCommand === "function");
assert(typeof ListKxScalingGroupsCommand === "function");
assert(typeof ListKxUsersCommand === "function");
assert(typeof ListKxVolumesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateKxClusterCodeConfigurationCommand === "function");
assert(typeof UpdateKxClusterDatabasesCommand === "function");
assert(typeof UpdateKxDatabaseCommand === "function");
assert(typeof UpdateKxDataviewCommand === "function");
assert(typeof UpdateKxEnvironmentCommand === "function");
assert(typeof UpdateKxEnvironmentNetworkCommand === "function");
assert(typeof UpdateKxUserCommand === "function");
assert(typeof UpdateKxVolumeCommand === "function");
// enums
assert(typeof AutoScalingMetric === "object");
assert(typeof ChangesetStatus === "object");
assert(typeof ChangeType === "object");
assert(typeof DnsStatus === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof ErrorDetails === "object");
assert(typeof FederationMode === "object");
assert(typeof IPAddressType === "object");
assert(typeof KxAzMode === "object");
assert(typeof KxClusterCodeDeploymentStrategy === "object");
assert(typeof KxClusterStatus === "object");
assert(typeof KxClusterType === "object");
assert(typeof KxDataviewStatus === "object");
assert(typeof KxDeploymentStrategy === "object");
assert(typeof KxNAS1Type === "object");
assert(typeof KxNodeStatus === "object");
assert(typeof KxSavedownStorageType === "object");
assert(typeof KxScalingGroupStatus === "object");
assert(typeof KxVolumeStatus === "object");
assert(typeof KxVolumeType === "object");
assert(typeof RuleAction === "object");
assert(typeof TgwStatus === "object");
assert(typeof VolumeType === "object");
// errors
assert(FinspaceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKxChangesets === "function");
assert(typeof paginateListKxClusterNodes === "function");
assert(typeof paginateListKxDatabases === "function");
assert(typeof paginateListKxDataviews === "function");
assert(typeof paginateListKxEnvironments === "function");
assert(typeof paginateListKxScalingGroups === "function");
console.log(`Finspace index test passed.`);
