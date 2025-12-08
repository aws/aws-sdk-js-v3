import {
  AccessDeniedException,
  ApplyPendingMaintenanceActionCommand,
  Auth,
  ConflictException,
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
  InternalServerException,
  ListClusterSnapshotsCommand,
  ListClustersCommand,
  ListPendingMaintenanceActionsCommand,
  ListTagsForResourceCommand,
  OptInType,
  ResourceNotFoundException,
  RestoreClusterFromSnapshotCommand,
  ServiceQuotaExceededException,
  SnapshotType,
  StartClusterCommand,
  Status,
  StopClusterCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateClusterCommand,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DocDBElasticServiceException);
assert(ConflictException.prototype instanceof DocDBElasticServiceException);
assert(InternalServerException.prototype instanceof DocDBElasticServiceException);
assert(ResourceNotFoundException.prototype instanceof DocDBElasticServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DocDBElasticServiceException);
assert(ThrottlingException.prototype instanceof DocDBElasticServiceException);
assert(ValidationException.prototype instanceof DocDBElasticServiceException);
assert(DocDBElasticServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClusterSnapshots === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListPendingMaintenanceActions === "function");
console.log(`DocDBElastic index test passed.`);
