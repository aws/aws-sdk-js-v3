import { CreateReplicationGroupInput } from "../shapes/CreateReplicationGroupInput";
import { CreateReplicationGroupOutput } from "../shapes/CreateReplicationGroupOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { ReplicationGroupAlreadyExistsFault } from "../shapes/ReplicationGroupAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "../shapes/CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "../shapes/ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "../shapes/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "../shapes/TagQuotaPerResourceExceeded";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "../shapes/NodeGroupsPerReplicationGroupQuotaExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateReplicationGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReplicationGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReplicationGroupInput
  },
  output: {
    shape: CreateReplicationGroupOutput,
    resultWrapper: "CreateReplicationGroupResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: ReplicationGroupAlreadyExistsFault
    },
    {
      shape: InsufficientCacheClusterCapacityFault
    },
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: CacheSubnetGroupNotFoundFault
    },
    {
      shape: ClusterQuotaForCustomerExceededFault
    },
    {
      shape: NodeQuotaForClusterExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: CacheParameterGroupNotFoundFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: TagQuotaPerResourceExceeded
    },
    {
      shape: NodeGroupsPerReplicationGroupQuotaExceededFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
