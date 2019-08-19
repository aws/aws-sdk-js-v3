import { DecreaseReplicaCountInput } from "../shapes/DecreaseReplicaCountInput";
import { DecreaseReplicaCountOutput } from "../shapes/DecreaseReplicaCountOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "../shapes/InsufficientCacheClusterCapacityFault";
import { ClusterQuotaForCustomerExceededFault } from "../shapes/ClusterQuotaForCustomerExceededFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "../shapes/NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { NoOperationFault } from "../shapes/NoOperationFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DecreaseReplicaCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DecreaseReplicaCount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DecreaseReplicaCountInput
  },
  output: {
    shape: DecreaseReplicaCountOutput,
    resultWrapper: "DecreaseReplicaCountResult"
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
      shape: ServiceLinkedRoleNotFoundFault
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
