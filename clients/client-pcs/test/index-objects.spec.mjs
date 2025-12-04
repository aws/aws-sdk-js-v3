import {
  AccountingMode,
  ClusterStatus,
  ComputeNodeGroupStatus,
  CreateClusterCommand,
  CreateComputeNodeGroupCommand,
  CreateQueueCommand,
  DeleteClusterCommand,
  DeleteComputeNodeGroupCommand,
  DeleteQueueCommand,
  EndpointType,
  GetClusterCommand,
  GetComputeNodeGroupCommand,
  GetQueueCommand,
  ListClustersCommand,
  ListComputeNodeGroupsCommand,
  ListQueuesCommand,
  ListTagsForResourceCommand,
  NetworkType,
  PCS,
  PCSClient,
  PCSServiceException,
  PurchaseOption,
  QueueStatus,
  RegisterComputeNodeGroupInstanceCommand,
  SchedulerType,
  Size,
  SlurmRestMode,
  SpotAllocationStrategy,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateComputeNodeGroupCommand,
  UpdateQueueCommand,
  paginateListClusters,
  paginateListComputeNodeGroups,
  paginateListQueues,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PCSClient === "function");
assert(typeof PCS === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateComputeNodeGroupCommand === "function");
assert(typeof CreateQueueCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteComputeNodeGroupCommand === "function");
assert(typeof DeleteQueueCommand === "function");
assert(typeof GetClusterCommand === "function");
assert(typeof GetComputeNodeGroupCommand === "function");
assert(typeof GetQueueCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListComputeNodeGroupsCommand === "function");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterComputeNodeGroupInstanceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateComputeNodeGroupCommand === "function");
assert(typeof UpdateQueueCommand === "function");
// enums
assert(typeof AccountingMode === "object");
assert(typeof ClusterStatus === "object");
assert(typeof ComputeNodeGroupStatus === "object");
assert(typeof EndpointType === "object");
assert(typeof NetworkType === "object");
assert(typeof PurchaseOption === "object");
assert(typeof QueueStatus === "object");
assert(typeof SchedulerType === "object");
assert(typeof Size === "object");
assert(typeof SlurmRestMode === "object");
assert(typeof SpotAllocationStrategy === "object");
// errors
assert(PCSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClusters === "function");
assert(typeof paginateListComputeNodeGroups === "function");
assert(typeof paginateListQueues === "function");
console.log(`PCS index test passed.`);
