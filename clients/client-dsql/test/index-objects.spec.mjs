import {
  AccessDeniedException,
  ClusterStatus,
  ConflictException,
  CreateClusterCommand,
  DSQL,
  DSQLClient,
  DSQLServiceException,
  DeleteClusterCommand,
  DeleteClusterPolicyCommand,
  EncryptionStatus,
  EncryptionType,
  GetClusterCommand,
  GetClusterPolicyCommand,
  GetVpcEndpointServiceNameCommand,
  InternalServerException,
  ListClustersCommand,
  ListTagsForResourceCommand,
  PutClusterPolicyCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateClusterCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListClusters,
  waitForClusterActive,
  waitForClusterNotExists,
  waitUntilClusterActive,
  waitUntilClusterNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DSQLClient === "function");
assert(typeof DSQL === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteClusterPolicyCommand === "function");
assert(typeof GetClusterCommand === "function");
assert(typeof GetClusterPolicyCommand === "function");
assert(typeof GetVpcEndpointServiceNameCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutClusterPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateClusterCommand === "function");
// enums
assert(typeof ClusterStatus === "object");
assert(typeof EncryptionStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DSQLServiceException);
assert(ConflictException.prototype instanceof DSQLServiceException);
assert(InternalServerException.prototype instanceof DSQLServiceException);
assert(ResourceNotFoundException.prototype instanceof DSQLServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DSQLServiceException);
assert(ThrottlingException.prototype instanceof DSQLServiceException);
assert(ValidationException.prototype instanceof DSQLServiceException);
assert(DSQLServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForClusterActive === "function");
assert(typeof waitForClusterNotExists === "function");
assert(typeof waitUntilClusterActive === "function");
assert(typeof waitUntilClusterNotExists === "function");
// paginators
assert(typeof paginateListClusters === "function");
console.log(`DSQL index test passed.`);
