import {
  ApplyPendingMaintenanceActionCommand,
  Auth,
  CopyClusterSnapshotCommand,
  CreateClusterCommand,
  CreateClusterSnapshotCommand,
  DeleteClusterCommand,
  DeleteClusterSnapshotCommand,
  DocDBElastic,
  DocDBElasticClient,
  DocDBElasticServiceException,
  GetClusterCommand,
  GetClusterSnapshotCommand,
  GetPendingMaintenanceActionCommand,
  ListClusterSnapshotsCommand,
  ListClustersCommand,
  ListPendingMaintenanceActionsCommand,
  ListTagsForResourceCommand,
  OptInType,
  RestoreClusterFromSnapshotCommand,
  SnapshotType,
  StartClusterCommand,
  Status,
  StopClusterCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  paginateListClusterSnapshots,
  paginateListClusters,
  paginateListPendingMaintenanceActions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DocDBElasticClient === "function");
assert(typeof DocDBElastic === "function");
// commands
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof CopyClusterSnapshotCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateClusterSnapshotCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteClusterSnapshotCommand === "function");
assert(typeof GetClusterCommand === "function");
assert(typeof GetClusterSnapshotCommand === "function");
assert(typeof GetPendingMaintenanceActionCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusterSnapshotsCommand === "function");
assert(typeof ListPendingMaintenanceActionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RestoreClusterFromSnapshotCommand === "function");
assert(typeof StartClusterCommand === "function");
assert(typeof StopClusterCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateClusterCommand === "function");
// enums
assert(typeof Auth === "object");
assert(typeof OptInType === "object");
assert(typeof SnapshotType === "object");
assert(typeof Status === "object");
// errors
assert(DocDBElasticServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClusterSnapshots === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListPendingMaintenanceActions === "function");
console.log(`DocDBElastic index test passed.`);
