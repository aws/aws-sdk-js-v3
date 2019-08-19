import { CreateCacheClusterInput } from "../shapes/CreateCacheClusterInput";
import { CreateCacheClusterOutput } from "../shapes/CreateCacheClusterOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { CacheClusterAlreadyExistsFault } from "../shapes/CacheClusterAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "../shapes/CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "../shapes/ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "../shapes/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "../shapes/TagQuotaPerResourceExceeded";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCacheCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCacheCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCacheClusterInput
  },
  output: {
    shape: CreateCacheClusterOutput,
    resultWrapper: "CreateCacheClusterResult"
  },
  errors: [
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidReplicationGroupStateFault
    },
    {
      shape: CacheClusterAlreadyExistsFault
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
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
