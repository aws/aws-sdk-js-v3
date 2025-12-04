import {
  ChangeType,
  ClusterEndpointEncryptionType,
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
  IsModifiable,
  ListTagsCommand,
  NetworkType,
  ParameterType,
  RebootNodeCommand,
  SSEStatus,
  SourceType,
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
assert(DAXServiceException.prototype instanceof Error);
console.log(`DAX index test passed.`);
