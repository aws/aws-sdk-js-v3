import { CreateReplicationGroupInput } from "./CreateReplicationGroupInput";
import { CreateReplicationGroupOutput } from "./CreateReplicationGroupOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { ReplicationGroupAlreadyExistsFault } from "./ReplicationGroupAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./NodeGroupsPerReplicationGroupQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
