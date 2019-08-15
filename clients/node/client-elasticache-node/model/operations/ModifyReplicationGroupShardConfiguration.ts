import { ModifyReplicationGroupShardConfigurationInput } from "../shapes/ModifyReplicationGroupShardConfigurationInput";
import { ModifyReplicationGroupShardConfigurationOutput } from "../shapes/ModifyReplicationGroupShardConfigurationOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "../shapes/NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyReplicationGroupShardConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationGroupShardConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationGroupShardConfigurationInput
  },
  output: {
    shape: ModifyReplicationGroupShardConfigurationOutput,
    resultWrapper: "ModifyReplicationGroupShardConfigurationResult"
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
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InsufficientCacheClusterCapacityFault
    },
    {
      shape: NodeGroupsPerReplicationGroupQuotaExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
