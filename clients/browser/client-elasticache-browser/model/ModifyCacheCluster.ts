import { ModifyCacheClusterInput } from "./ModifyCacheClusterInput";
import { ModifyCacheClusterOutput } from "./ModifyCacheClusterOutput";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyCacheCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCacheCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyCacheClusterInput
  },
  output: {
    shape: ModifyCacheClusterOutput,
    resultWrapper: "ModifyCacheClusterResult"
  },
  errors: [
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: InvalidCacheSecurityGroupStateFault
    },
    {
      shape: InsufficientCacheClusterCapacityFault
    },
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: NodeQuotaForClusterExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: CacheParameterGroupNotFoundFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
