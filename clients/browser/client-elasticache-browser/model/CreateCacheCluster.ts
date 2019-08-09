import { CreateCacheClusterInput } from "./CreateCacheClusterInput";
import { CreateCacheClusterOutput } from "./CreateCacheClusterOutput";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { CacheClusterAlreadyExistsFault } from "./CacheClusterAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
