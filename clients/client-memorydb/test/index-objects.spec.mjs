import {
  AZStatus,
  AuthenticationType,
  BatchUpdateClusterCommand,
  CopySnapshotCommand,
  CreateACLCommand,
  CreateClusterCommand,
  CreateMultiRegionClusterCommand,
  CreateParameterGroupCommand,
  CreateSnapshotCommand,
  CreateSubnetGroupCommand,
  CreateUserCommand,
  DataTieringStatus,
  DeleteACLCommand,
  DeleteClusterCommand,
  DeleteMultiRegionClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSnapshotCommand,
  DeleteSubnetGroupCommand,
  DeleteUserCommand,
  DescribeACLsCommand,
  DescribeClustersCommand,
  DescribeEngineVersionsCommand,
  DescribeEventsCommand,
  DescribeMultiRegionClustersCommand,
  DescribeMultiRegionParameterGroupsCommand,
  DescribeMultiRegionParametersCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeReservedNodesCommand,
  DescribeReservedNodesOfferingsCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeSubnetGroupsCommand,
  DescribeUsersCommand,
  FailoverShardCommand,
  InputAuthenticationType,
  IpDiscovery,
  ListAllowedMultiRegionClusterUpdatesCommand,
  ListAllowedNodeTypeUpdatesCommand,
  ListTagsCommand,
  MemoryDB,
  MemoryDBClient,
  MemoryDBServiceException,
  NetworkType,
  PurchaseReservedNodesOfferingCommand,
  ResetParameterGroupCommand,
  ServiceUpdateStatus,
  ServiceUpdateType,
  SourceType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateACLCommand,
  UpdateClusterCommand,
  UpdateMultiRegionClusterCommand,
  UpdateParameterGroupCommand,
  UpdateStrategy,
  UpdateSubnetGroupCommand,
  UpdateUserCommand,
  paginateDescribeACLs,
  paginateDescribeClusters,
  paginateDescribeEngineVersions,
  paginateDescribeEvents,
  paginateDescribeMultiRegionClusters,
  paginateDescribeParameterGroups,
  paginateDescribeParameters,
  paginateDescribeReservedNodes,
  paginateDescribeReservedNodesOfferings,
  paginateDescribeServiceUpdates,
  paginateDescribeSnapshots,
  paginateDescribeSubnetGroups,
  paginateDescribeUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MemoryDBClient === "function")
assert(typeof MemoryDB === "function")
// commands
assert(typeof BatchUpdateClusterCommand === "function")
assert(typeof CopySnapshotCommand === "function")
assert(typeof CreateACLCommand === "function")
assert(typeof CreateClusterCommand === "function")
assert(typeof CreateMultiRegionClusterCommand === "function")
assert(typeof CreateParameterGroupCommand === "function")
assert(typeof CreateSnapshotCommand === "function")
assert(typeof CreateSubnetGroupCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof DeleteACLCommand === "function")
assert(typeof DeleteClusterCommand === "function")
assert(typeof DeleteMultiRegionClusterCommand === "function")
assert(typeof DeleteParameterGroupCommand === "function")
assert(typeof DeleteSnapshotCommand === "function")
assert(typeof DeleteSubnetGroupCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DescribeACLsCommand === "function")
assert(typeof DescribeClustersCommand === "function")
assert(typeof DescribeEngineVersionsCommand === "function")
assert(typeof DescribeEventsCommand === "function")
assert(typeof DescribeMultiRegionClustersCommand === "function")
assert(typeof DescribeMultiRegionParameterGroupsCommand === "function")
assert(typeof DescribeMultiRegionParametersCommand === "function")
assert(typeof DescribeParameterGroupsCommand === "function")
assert(typeof DescribeParametersCommand === "function")
assert(typeof DescribeReservedNodesCommand === "function")
assert(typeof DescribeReservedNodesOfferingsCommand === "function")
assert(typeof DescribeServiceUpdatesCommand === "function")
assert(typeof DescribeSnapshotsCommand === "function")
assert(typeof DescribeSubnetGroupsCommand === "function")
assert(typeof DescribeUsersCommand === "function")
assert(typeof FailoverShardCommand === "function")
assert(typeof ListAllowedMultiRegionClusterUpdatesCommand === "function")
assert(typeof ListAllowedNodeTypeUpdatesCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof PurchaseReservedNodesOfferingCommand === "function")
assert(typeof ResetParameterGroupCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateACLCommand === "function")
assert(typeof UpdateClusterCommand === "function")
assert(typeof UpdateMultiRegionClusterCommand === "function")
assert(typeof UpdateParameterGroupCommand === "function")
assert(typeof UpdateSubnetGroupCommand === "function")
assert(typeof UpdateUserCommand === "function")
// enums
assert(typeof AuthenticationType === "object");
assert(typeof AZStatus === "object");
assert(typeof DataTieringStatus === "object");
assert(typeof InputAuthenticationType === "object");
assert(typeof IpDiscovery === "object");
assert(typeof NetworkType === "object");
assert(typeof ServiceUpdateStatus === "object");
assert(typeof ServiceUpdateType === "object");
assert(typeof SourceType === "object");
assert(typeof UpdateStrategy === "object");
// errors
assert(MemoryDBServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeACLs === "function")
assert(typeof paginateDescribeClusters === "function")
assert(typeof paginateDescribeEngineVersions === "function")
assert(typeof paginateDescribeEvents === "function")
assert(typeof paginateDescribeMultiRegionClusters === "function")
assert(typeof paginateDescribeParameterGroups === "function")
assert(typeof paginateDescribeParameters === "function")
assert(typeof paginateDescribeReservedNodes === "function")
assert(typeof paginateDescribeReservedNodesOfferings === "function")
assert(typeof paginateDescribeServiceUpdates === "function")
assert(typeof paginateDescribeSnapshots === "function")
assert(typeof paginateDescribeSubnetGroups === "function")
assert(typeof paginateDescribeUsers === "function")
console.log(`MemoryDB index test passed.`);
