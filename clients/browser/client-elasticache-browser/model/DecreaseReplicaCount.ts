import { DecreaseReplicaCountInput } from "./DecreaseReplicaCountInput";
import { DecreaseReplicaCountOutput } from "./DecreaseReplicaCountOutput";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { NoOperationFault } from "./NoOperationFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
