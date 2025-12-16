import {
  AccessDeniedException,
  AccessDeniedException$,
  ApplyPendingMaintenanceAction$,
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionInput$,
  ApplyPendingMaintenanceActionOutput$,
  Auth,
  Cluster$,
  ClusterInList$,
  ClusterSnapshot$,
  ClusterSnapshotInList$,
  ConflictException,
  ConflictException$,
  CopyClusterSnapshot$,
  CopyClusterSnapshotCommand,
  CopyClusterSnapshotInput$,
  CopyClusterSnapshotOutput$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterInput$,
  CreateClusterOutput$,
  CreateClusterSnapshot$,
  CreateClusterSnapshotCommand,
  CreateClusterSnapshotInput$,
  CreateClusterSnapshotOutput$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterInput$,
  DeleteClusterOutput$,
  DeleteClusterSnapshot$,
  DeleteClusterSnapshotCommand,
  DeleteClusterSnapshotInput$,
  DeleteClusterSnapshotOutput$,
  DocDBElastic,
  DocDBElasticClient,
  DocDBElasticServiceException,
  GetCluster$,
  GetClusterCommand,
  GetClusterInput$,
  GetClusterOutput$,
  GetClusterSnapshot$,
  GetClusterSnapshotCommand,
  GetClusterSnapshotInput$,
  GetClusterSnapshotOutput$,
  GetPendingMaintenanceAction$,
  GetPendingMaintenanceActionCommand,
  GetPendingMaintenanceActionInput$,
  GetPendingMaintenanceActionOutput$,
  InternalServerException,
  InternalServerException$,
  ListClusterSnapshots$,
  ListClusterSnapshotsCommand,
  ListClusterSnapshotsInput$,
  ListClusterSnapshotsOutput$,
  ListClusters$,
  ListClustersCommand,
  ListClustersInput$,
  ListClustersOutput$,
  ListPendingMaintenanceActions$,
  ListPendingMaintenanceActionsCommand,
  ListPendingMaintenanceActionsInput$,
  ListPendingMaintenanceActionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OptInType,
  PendingMaintenanceActionDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePendingMaintenanceAction$,
  RestoreClusterFromSnapshot$,
  RestoreClusterFromSnapshotCommand,
  RestoreClusterFromSnapshotInput$,
  RestoreClusterFromSnapshotOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Shard$,
  SnapshotType,
  StartCluster$,
  StartClusterCommand,
  StartClusterInput$,
  StartClusterOutput$,
  Status,
  StopCluster$,
  StopClusterCommand,
  StopClusterInput$,
  StopClusterOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterInput$,
  UpdateClusterOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
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
assert(typeof ApplyPendingMaintenanceAction$ === "object");
assert(typeof CopyClusterSnapshotCommand === "function");
assert(typeof CopyClusterSnapshot$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateClusterSnapshotCommand === "function");
assert(typeof CreateClusterSnapshot$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteClusterSnapshotCommand === "function");
assert(typeof DeleteClusterSnapshot$ === "object");
assert(typeof GetClusterCommand === "function");
assert(typeof GetCluster$ === "object");
assert(typeof GetClusterSnapshotCommand === "function");
assert(typeof GetClusterSnapshot$ === "object");
assert(typeof GetPendingMaintenanceActionCommand === "function");
assert(typeof GetPendingMaintenanceAction$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListClusterSnapshotsCommand === "function");
assert(typeof ListClusterSnapshots$ === "object");
assert(typeof ListPendingMaintenanceActionsCommand === "function");
assert(typeof ListPendingMaintenanceActions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RestoreClusterFromSnapshotCommand === "function");
assert(typeof RestoreClusterFromSnapshot$ === "object");
assert(typeof StartClusterCommand === "function");
assert(typeof StartCluster$ === "object");
assert(typeof StopClusterCommand === "function");
assert(typeof StopCluster$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
// structural schemas
assert(typeof ApplyPendingMaintenanceActionInput$ === "object");
assert(typeof ApplyPendingMaintenanceActionOutput$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterInList$ === "object");
assert(typeof ClusterSnapshot$ === "object");
assert(typeof ClusterSnapshotInList$ === "object");
assert(typeof CopyClusterSnapshotInput$ === "object");
assert(typeof CopyClusterSnapshotOutput$ === "object");
assert(typeof CreateClusterInput$ === "object");
assert(typeof CreateClusterOutput$ === "object");
assert(typeof CreateClusterSnapshotInput$ === "object");
assert(typeof CreateClusterSnapshotOutput$ === "object");
assert(typeof DeleteClusterInput$ === "object");
assert(typeof DeleteClusterOutput$ === "object");
assert(typeof DeleteClusterSnapshotInput$ === "object");
assert(typeof DeleteClusterSnapshotOutput$ === "object");
assert(typeof GetClusterInput$ === "object");
assert(typeof GetClusterOutput$ === "object");
assert(typeof GetClusterSnapshotInput$ === "object");
assert(typeof GetClusterSnapshotOutput$ === "object");
assert(typeof GetPendingMaintenanceActionInput$ === "object");
assert(typeof GetPendingMaintenanceActionOutput$ === "object");
assert(typeof ListClustersInput$ === "object");
assert(typeof ListClusterSnapshotsInput$ === "object");
assert(typeof ListClusterSnapshotsOutput$ === "object");
assert(typeof ListClustersOutput$ === "object");
assert(typeof ListPendingMaintenanceActionsInput$ === "object");
assert(typeof ListPendingMaintenanceActionsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PendingMaintenanceActionDetails$ === "object");
assert(typeof ResourcePendingMaintenanceAction$ === "object");
assert(typeof RestoreClusterFromSnapshotInput$ === "object");
assert(typeof RestoreClusterFromSnapshotOutput$ === "object");
assert(typeof Shard$ === "object");
assert(typeof StartClusterInput$ === "object");
assert(typeof StartClusterOutput$ === "object");
assert(typeof StopClusterInput$ === "object");
assert(typeof StopClusterOutput$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateClusterInput$ === "object");
assert(typeof UpdateClusterOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof Auth === "object");
assert(typeof OptInType === "object");
assert(typeof SnapshotType === "object");
assert(typeof Status === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DocDBElasticServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DocDBElasticServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DocDBElasticServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DocDBElasticServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DocDBElasticServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DocDBElasticServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DocDBElasticServiceException);
assert(typeof ValidationException$ === "object");
assert(DocDBElasticServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClusterSnapshots === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListPendingMaintenanceActions === "function");
console.log(`DocDBElastic index test passed.`);
