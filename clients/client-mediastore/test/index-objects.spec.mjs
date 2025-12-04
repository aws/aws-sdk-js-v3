import {
  ContainerLevelMetrics,
  ContainerStatus,
  CreateContainerCommand,
  DeleteContainerCommand,
  DeleteContainerPolicyCommand,
  DeleteCorsPolicyCommand,
  DeleteLifecyclePolicyCommand,
  DeleteMetricPolicyCommand,
  DescribeContainerCommand,
  GetContainerPolicyCommand,
  GetCorsPolicyCommand,
  GetLifecyclePolicyCommand,
  GetMetricPolicyCommand,
  ListContainersCommand,
  ListTagsForResourceCommand,
  MediaStore,
  MediaStoreClient,
  MediaStoreServiceException,
  MethodName,
  PutContainerPolicyCommand,
  PutCorsPolicyCommand,
  PutLifecyclePolicyCommand,
  PutMetricPolicyCommand,
  StartAccessLoggingCommand,
  StopAccessLoggingCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateListContainers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaStoreClient === "function")
assert(typeof MediaStore === "function")
// commands
assert(typeof CreateContainerCommand === "function")
assert(typeof DeleteContainerCommand === "function")
assert(typeof DeleteContainerPolicyCommand === "function")
assert(typeof DeleteCorsPolicyCommand === "function")
assert(typeof DeleteLifecyclePolicyCommand === "function")
assert(typeof DeleteMetricPolicyCommand === "function")
assert(typeof DescribeContainerCommand === "function")
assert(typeof GetContainerPolicyCommand === "function")
assert(typeof GetCorsPolicyCommand === "function")
assert(typeof GetLifecyclePolicyCommand === "function")
assert(typeof GetMetricPolicyCommand === "function")
assert(typeof ListContainersCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutContainerPolicyCommand === "function")
assert(typeof PutCorsPolicyCommand === "function")
assert(typeof PutLifecyclePolicyCommand === "function")
assert(typeof PutMetricPolicyCommand === "function")
assert(typeof StartAccessLoggingCommand === "function")
assert(typeof StopAccessLoggingCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof ContainerLevelMetrics === "object");
assert(typeof ContainerStatus === "object");
assert(typeof MethodName === "object");
// errors
assert(MediaStoreServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListContainers === "function")
console.log(`MediaStore index test passed.`);
