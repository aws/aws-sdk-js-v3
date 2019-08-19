import { ModifyCacheClusterInput } from "../shapes/ModifyCacheClusterInput";
import { ModifyCacheClusterOutput } from "../shapes/ModifyCacheClusterOutput";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidCacheSecurityGroupStateFault } from "../shapes/InvalidCacheSecurityGroupStateFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { NodeQuotaForClusterExceededFault } from "../shapes/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
