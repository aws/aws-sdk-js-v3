import { IncreaseReplicaCountInput } from "../shapes/IncreaseReplicaCountInput";
import { IncreaseReplicaCountOutput } from "../shapes/IncreaseReplicaCountOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { ClusterQuotaForCustomerExceededFault } from "../shapes/ClusterQuotaForCustomerExceededFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "../shapes/NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { NoOperationFault } from "../shapes/NoOperationFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const IncreaseReplicaCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IncreaseReplicaCount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IncreaseReplicaCountInput
  },
  output: {
    shape: IncreaseReplicaCountOutput,
    resultWrapper: "IncreaseReplicaCountResult"
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
      shape: ClusterQuotaForCustomerExceededFault
    },
    {
      shape: NodeGroupsPerReplicationGroupQuotaExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: NoOperationFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
