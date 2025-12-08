import {
  ChangeType,
  ClusterAlreadyExistsFault,
  ClusterEndpointEncryptionType,
  ClusterNotFoundFault,
  ClusterQuotaForCustomerExceededFault,
  CreateClusterCommand,
  CreateParameterGroupCommand,
  CreateSubnetGroupCommand,
  DAX,
  DAXClient,
  DAXServiceException,
  DecreaseReplicationFactorCommand,
  DeleteClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSubnetGroupCommand,
  DescribeClustersCommand,
  DescribeDefaultParametersCommand,
  DescribeEventsCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeSubnetGroupsCommand,
  IncreaseReplicationFactorCommand,
  InsufficientClusterCapacityFault,
  InvalidARNFault,
  InvalidClusterStateFault,
  InvalidParameterCombinationException,
  InvalidParameterGroupStateFault,
  InvalidParameterValueException,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  IsModifiable,
  ListTagsCommand,
  NetworkType,
  NodeNotFoundFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterType,
  RebootNodeCommand,
  SSEStatus,
  ServiceLinkedRoleNotFoundFault,
  ServiceQuotaExceededException,
  SourceType,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupInUseFault,
  SubnetGroupNotFoundFault,
  SubnetGroupQuotaExceededFault,
  SubnetInUse,
  SubnetNotAllowedFault,
  SubnetQuotaExceededFault,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateParameterGroupCommand,
  UpdateSubnetGroupCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DAXClient === "function");
assert(typeof DAX === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateParameterGroupCommand === "function");
assert(typeof CreateSubnetGroupCommand === "function");
assert(typeof DecreaseReplicationFactorCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteParameterGroupCommand === "function");
assert(typeof DeleteSubnetGroupCommand === "function");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeDefaultParametersCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeParameterGroupsCommand === "function");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribeSubnetGroupsCommand === "function");
assert(typeof IncreaseReplicationFactorCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof RebootNodeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateParameterGroupCommand === "function");
assert(typeof UpdateSubnetGroupCommand === "function");
// enums
assert(typeof ChangeType === "object");
assert(typeof ClusterEndpointEncryptionType === "object");
assert(typeof IsModifiable === "object");
assert(typeof NetworkType === "object");
assert(typeof ParameterType === "object");
assert(typeof SourceType === "object");
assert(typeof SSEStatus === "object");
// errors
assert(ClusterAlreadyExistsFault.prototype instanceof DAXServiceException);
assert(ClusterNotFoundFault.prototype instanceof DAXServiceException);
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof DAXServiceException);
assert(InsufficientClusterCapacityFault.prototype instanceof DAXServiceException);
assert(InvalidARNFault.prototype instanceof DAXServiceException);
assert(InvalidClusterStateFault.prototype instanceof DAXServiceException);
assert(InvalidParameterCombinationException.prototype instanceof DAXServiceException);
assert(InvalidParameterGroupStateFault.prototype instanceof DAXServiceException);
assert(InvalidParameterValueException.prototype instanceof DAXServiceException);
assert(InvalidSubnet.prototype instanceof DAXServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof DAXServiceException);
assert(NodeNotFoundFault.prototype instanceof DAXServiceException);
assert(NodeQuotaForClusterExceededFault.prototype instanceof DAXServiceException);
assert(NodeQuotaForCustomerExceededFault.prototype instanceof DAXServiceException);
assert(ParameterGroupAlreadyExistsFault.prototype instanceof DAXServiceException);
assert(ParameterGroupNotFoundFault.prototype instanceof DAXServiceException);
assert(ParameterGroupQuotaExceededFault.prototype instanceof DAXServiceException);
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof DAXServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DAXServiceException);
assert(SubnetGroupAlreadyExistsFault.prototype instanceof DAXServiceException);
assert(SubnetGroupInUseFault.prototype instanceof DAXServiceException);
assert(SubnetGroupNotFoundFault.prototype instanceof DAXServiceException);
assert(SubnetGroupQuotaExceededFault.prototype instanceof DAXServiceException);
assert(SubnetInUse.prototype instanceof DAXServiceException);
assert(SubnetNotAllowedFault.prototype instanceof DAXServiceException);
assert(SubnetQuotaExceededFault.prototype instanceof DAXServiceException);
assert(TagNotFoundFault.prototype instanceof DAXServiceException);
assert(TagQuotaPerResourceExceeded.prototype instanceof DAXServiceException);
assert(DAXServiceException.prototype instanceof Error);
console.log(`DAX index test passed.`);
