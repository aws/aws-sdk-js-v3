import {
  AccessDeniedException,
  AccessDeniedException$,
  ClusterStatus,
  ClusterSummary$,
  ConflictException,
  ConflictException$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterInput$,
  CreateClusterOutput$,
  DSQL,
  DSQLClient,
  DSQLServiceException,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterInput$,
  DeleteClusterOutput$,
  DeleteClusterPolicy$,
  DeleteClusterPolicyCommand,
  DeleteClusterPolicyInput$,
  DeleteClusterPolicyOutput$,
  EncryptionDetails$,
  EncryptionStatus,
  EncryptionType,
  GetCluster$,
  GetClusterCommand,
  GetClusterInput$,
  GetClusterOutput$,
  GetClusterPolicy$,
  GetClusterPolicyCommand,
  GetClusterPolicyInput$,
  GetClusterPolicyOutput$,
  GetVpcEndpointServiceName$,
  GetVpcEndpointServiceNameCommand,
  GetVpcEndpointServiceNameInput$,
  GetVpcEndpointServiceNameOutput$,
  InternalServerException,
  InternalServerException$,
  ListClusters$,
  ListClustersCommand,
  ListClustersInput$,
  ListClustersOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MultiRegionProperties$,
  PutClusterPolicy$,
  PutClusterPolicyCommand,
  PutClusterPolicyInput$,
  PutClusterPolicyOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterInput$,
  UpdateClusterOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
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
assert(typeof CreateCluster$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteClusterPolicyCommand === "function");
assert(typeof DeleteClusterPolicy$ === "object");
assert(typeof GetClusterCommand === "function");
assert(typeof GetCluster$ === "object");
assert(typeof GetClusterPolicyCommand === "function");
assert(typeof GetClusterPolicy$ === "object");
assert(typeof GetVpcEndpointServiceNameCommand === "function");
assert(typeof GetVpcEndpointServiceName$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutClusterPolicyCommand === "function");
assert(typeof PutClusterPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
// structural schemas
assert(typeof ClusterSummary$ === "object");
assert(typeof CreateClusterInput$ === "object");
assert(typeof CreateClusterOutput$ === "object");
assert(typeof DeleteClusterInput$ === "object");
assert(typeof DeleteClusterOutput$ === "object");
assert(typeof DeleteClusterPolicyInput$ === "object");
assert(typeof DeleteClusterPolicyOutput$ === "object");
assert(typeof EncryptionDetails$ === "object");
assert(typeof GetClusterInput$ === "object");
assert(typeof GetClusterOutput$ === "object");
assert(typeof GetClusterPolicyInput$ === "object");
assert(typeof GetClusterPolicyOutput$ === "object");
assert(typeof GetVpcEndpointServiceNameInput$ === "object");
assert(typeof GetVpcEndpointServiceNameOutput$ === "object");
assert(typeof ListClustersInput$ === "object");
assert(typeof ListClustersOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MultiRegionProperties$ === "object");
assert(typeof PutClusterPolicyInput$ === "object");
assert(typeof PutClusterPolicyOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateClusterInput$ === "object");
assert(typeof UpdateClusterOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ClusterStatus === "object");
assert(typeof EncryptionStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DSQLServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DSQLServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DSQLServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DSQLServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DSQLServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DSQLServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DSQLServiceException);
assert(typeof ValidationException$ === "object");
assert(DSQLServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForClusterActive === "function");
assert(typeof waitForClusterNotExists === "function");
assert(typeof waitUntilClusterActive === "function");
assert(typeof waitUntilClusterNotExists === "function");
// paginators
assert(typeof paginateListClusters === "function");
console.log(`DSQL index test passed.`);
