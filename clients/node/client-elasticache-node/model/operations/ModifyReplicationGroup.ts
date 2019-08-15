import { ModifyReplicationGroupInput } from "../shapes/ModifyReplicationGroupInput";
import { ModifyReplicationGroupOutput } from "../shapes/ModifyReplicationGroupOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
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

export const ModifyReplicationGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationGroupInput
  },
  output: {
    shape: ModifyReplicationGroupOutput,
    resultWrapper: "ModifyReplicationGroupResult"
  },
  errors: [
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidReplicationGroupStateFault
    },
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
