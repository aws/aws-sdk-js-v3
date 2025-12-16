import {
  ChangeType,
  Cluster$,
  ClusterAlreadyExistsFault,
  ClusterAlreadyExistsFault$,
  ClusterEndpointEncryptionType,
  ClusterNotFoundFault,
  ClusterNotFoundFault$,
  ClusterQuotaForCustomerExceededFault,
  ClusterQuotaForCustomerExceededFault$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateParameterGroup$,
  CreateParameterGroupCommand,
  CreateParameterGroupRequest$,
  CreateParameterGroupResponse$,
  CreateSubnetGroup$,
  CreateSubnetGroupCommand,
  CreateSubnetGroupRequest$,
  CreateSubnetGroupResponse$,
  DAX,
  DAXClient,
  DAXServiceException,
  DecreaseReplicationFactor$,
  DecreaseReplicationFactorCommand,
  DecreaseReplicationFactorRequest$,
  DecreaseReplicationFactorResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteParameterGroup$,
  DeleteParameterGroupCommand,
  DeleteParameterGroupRequest$,
  DeleteParameterGroupResponse$,
  DeleteSubnetGroup$,
  DeleteSubnetGroupCommand,
  DeleteSubnetGroupRequest$,
  DeleteSubnetGroupResponse$,
  DescribeClusters$,
  DescribeClustersCommand,
  DescribeClustersRequest$,
  DescribeClustersResponse$,
  DescribeDefaultParameters$,
  DescribeDefaultParametersCommand,
  DescribeDefaultParametersRequest$,
  DescribeDefaultParametersResponse$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsRequest$,
  DescribeEventsResponse$,
  DescribeParameterGroups$,
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsRequest$,
  DescribeParameterGroupsResponse$,
  DescribeParameters$,
  DescribeParametersCommand,
  DescribeParametersRequest$,
  DescribeParametersResponse$,
  DescribeSubnetGroups$,
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsRequest$,
  DescribeSubnetGroupsResponse$,
  Endpoint$,
  Event$,
  IncreaseReplicationFactor$,
  IncreaseReplicationFactorCommand,
  IncreaseReplicationFactorRequest$,
  IncreaseReplicationFactorResponse$,
  InsufficientClusterCapacityFault,
  InsufficientClusterCapacityFault$,
  InvalidARNFault,
  InvalidARNFault$,
  InvalidClusterStateFault,
  InvalidClusterStateFault$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterGroupStateFault,
  InvalidParameterGroupStateFault$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  IsModifiable,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  NetworkType,
  Node$,
  NodeNotFoundFault,
  NodeNotFoundFault$,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForClusterExceededFault$,
  NodeQuotaForCustomerExceededFault,
  NodeQuotaForCustomerExceededFault$,
  NodeTypeSpecificValue$,
  NotificationConfiguration$,
  Parameter$,
  ParameterGroup$,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupAlreadyExistsFault$,
  ParameterGroupNotFoundFault,
  ParameterGroupNotFoundFault$,
  ParameterGroupQuotaExceededFault,
  ParameterGroupQuotaExceededFault$,
  ParameterGroupStatus$,
  ParameterNameValue$,
  ParameterType,
  RebootNode$,
  RebootNodeCommand,
  RebootNodeRequest$,
  RebootNodeResponse$,
  SSEDescription$,
  SSESpecification$,
  SSEStatus,
  SecurityGroupMembership$,
  ServiceLinkedRoleNotFoundFault,
  ServiceLinkedRoleNotFoundFault$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceType,
  Subnet$,
  SubnetGroup$,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupAlreadyExistsFault$,
  SubnetGroupInUseFault,
  SubnetGroupInUseFault$,
  SubnetGroupNotFoundFault,
  SubnetGroupNotFoundFault$,
  SubnetGroupQuotaExceededFault,
  SubnetGroupQuotaExceededFault$,
  SubnetInUse,
  SubnetInUse$,
  SubnetNotAllowedFault,
  SubnetNotAllowedFault$,
  SubnetQuotaExceededFault,
  SubnetQuotaExceededFault$,
  Tag$,
  TagNotFoundFault,
  TagNotFoundFault$,
  TagQuotaPerResourceExceeded,
  TagQuotaPerResourceExceeded$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateParameterGroup$,
  UpdateParameterGroupCommand,
  UpdateParameterGroupRequest$,
  UpdateParameterGroupResponse$,
  UpdateSubnetGroup$,
  UpdateSubnetGroupCommand,
  UpdateSubnetGroupRequest$,
  UpdateSubnetGroupResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DAXClient === "function");
assert(typeof DAX === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateParameterGroupCommand === "function");
assert(typeof CreateParameterGroup$ === "object");
assert(typeof CreateSubnetGroupCommand === "function");
assert(typeof CreateSubnetGroup$ === "object");
assert(typeof DecreaseReplicationFactorCommand === "function");
assert(typeof DecreaseReplicationFactor$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteParameterGroupCommand === "function");
assert(typeof DeleteParameterGroup$ === "object");
assert(typeof DeleteSubnetGroupCommand === "function");
assert(typeof DeleteSubnetGroup$ === "object");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusters$ === "object");
assert(typeof DescribeDefaultParametersCommand === "function");
assert(typeof DescribeDefaultParameters$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeParameterGroupsCommand === "function");
assert(typeof DescribeParameterGroups$ === "object");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribeParameters$ === "object");
assert(typeof DescribeSubnetGroupsCommand === "function");
assert(typeof DescribeSubnetGroups$ === "object");
assert(typeof IncreaseReplicationFactorCommand === "function");
assert(typeof IncreaseReplicationFactor$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof RebootNodeCommand === "function");
assert(typeof RebootNode$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateParameterGroupCommand === "function");
assert(typeof UpdateParameterGroup$ === "object");
assert(typeof UpdateSubnetGroupCommand === "function");
assert(typeof UpdateSubnetGroup$ === "object");
// structural schemas
assert(typeof Cluster$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateParameterGroupRequest$ === "object");
assert(typeof CreateParameterGroupResponse$ === "object");
assert(typeof CreateSubnetGroupRequest$ === "object");
assert(typeof CreateSubnetGroupResponse$ === "object");
assert(typeof DecreaseReplicationFactorRequest$ === "object");
assert(typeof DecreaseReplicationFactorResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteParameterGroupRequest$ === "object");
assert(typeof DeleteParameterGroupResponse$ === "object");
assert(typeof DeleteSubnetGroupRequest$ === "object");
assert(typeof DeleteSubnetGroupResponse$ === "object");
assert(typeof DescribeClustersRequest$ === "object");
assert(typeof DescribeClustersResponse$ === "object");
assert(typeof DescribeDefaultParametersRequest$ === "object");
assert(typeof DescribeDefaultParametersResponse$ === "object");
assert(typeof DescribeEventsRequest$ === "object");
assert(typeof DescribeEventsResponse$ === "object");
assert(typeof DescribeParameterGroupsRequest$ === "object");
assert(typeof DescribeParameterGroupsResponse$ === "object");
assert(typeof DescribeParametersRequest$ === "object");
assert(typeof DescribeParametersResponse$ === "object");
assert(typeof DescribeSubnetGroupsRequest$ === "object");
assert(typeof DescribeSubnetGroupsResponse$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof Event$ === "object");
assert(typeof IncreaseReplicationFactorRequest$ === "object");
assert(typeof IncreaseReplicationFactorResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeTypeSpecificValue$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterGroup$ === "object");
assert(typeof ParameterGroupStatus$ === "object");
assert(typeof ParameterNameValue$ === "object");
assert(typeof RebootNodeRequest$ === "object");
assert(typeof RebootNodeResponse$ === "object");
assert(typeof SecurityGroupMembership$ === "object");
assert(typeof SSEDescription$ === "object");
assert(typeof SSESpecification$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SubnetGroup$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateParameterGroupRequest$ === "object");
assert(typeof UpdateParameterGroupResponse$ === "object");
assert(typeof UpdateSubnetGroupRequest$ === "object");
assert(typeof UpdateSubnetGroupResponse$ === "object");
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
assert(typeof ClusterAlreadyExistsFault$ === "object");
assert(ClusterNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof ClusterNotFoundFault$ === "object");
assert(ClusterQuotaForCustomerExceededFault.prototype instanceof DAXServiceException);
assert(typeof ClusterQuotaForCustomerExceededFault$ === "object");
assert(InsufficientClusterCapacityFault.prototype instanceof DAXServiceException);
assert(typeof InsufficientClusterCapacityFault$ === "object");
assert(InvalidARNFault.prototype instanceof DAXServiceException);
assert(typeof InvalidARNFault$ === "object");
assert(InvalidClusterStateFault.prototype instanceof DAXServiceException);
assert(typeof InvalidClusterStateFault$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof DAXServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterGroupStateFault.prototype instanceof DAXServiceException);
assert(typeof InvalidParameterGroupStateFault$ === "object");
assert(InvalidParameterValueException.prototype instanceof DAXServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidSubnet.prototype instanceof DAXServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof DAXServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(NodeNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof NodeNotFoundFault$ === "object");
assert(NodeQuotaForClusterExceededFault.prototype instanceof DAXServiceException);
assert(typeof NodeQuotaForClusterExceededFault$ === "object");
assert(NodeQuotaForCustomerExceededFault.prototype instanceof DAXServiceException);
assert(typeof NodeQuotaForCustomerExceededFault$ === "object");
assert(ParameterGroupAlreadyExistsFault.prototype instanceof DAXServiceException);
assert(typeof ParameterGroupAlreadyExistsFault$ === "object");
assert(ParameterGroupNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof ParameterGroupNotFoundFault$ === "object");
assert(ParameterGroupQuotaExceededFault.prototype instanceof DAXServiceException);
assert(typeof ParameterGroupQuotaExceededFault$ === "object");
assert(ServiceLinkedRoleNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof ServiceLinkedRoleNotFoundFault$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DAXServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(SubnetGroupAlreadyExistsFault.prototype instanceof DAXServiceException);
assert(typeof SubnetGroupAlreadyExistsFault$ === "object");
assert(SubnetGroupInUseFault.prototype instanceof DAXServiceException);
assert(typeof SubnetGroupInUseFault$ === "object");
assert(SubnetGroupNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof SubnetGroupNotFoundFault$ === "object");
assert(SubnetGroupQuotaExceededFault.prototype instanceof DAXServiceException);
assert(typeof SubnetGroupQuotaExceededFault$ === "object");
assert(SubnetInUse.prototype instanceof DAXServiceException);
assert(typeof SubnetInUse$ === "object");
assert(SubnetNotAllowedFault.prototype instanceof DAXServiceException);
assert(typeof SubnetNotAllowedFault$ === "object");
assert(SubnetQuotaExceededFault.prototype instanceof DAXServiceException);
assert(typeof SubnetQuotaExceededFault$ === "object");
assert(TagNotFoundFault.prototype instanceof DAXServiceException);
assert(typeof TagNotFoundFault$ === "object");
assert(TagQuotaPerResourceExceeded.prototype instanceof DAXServiceException);
assert(typeof TagQuotaPerResourceExceeded$ === "object");
assert(DAXServiceException.prototype instanceof Error);
console.log(`DAX index test passed.`);
