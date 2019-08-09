import { IncreaseReplicaCountInput } from "./IncreaseReplicaCountInput";
import { IncreaseReplicaCountOutput } from "./IncreaseReplicaCountOutput";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { NoOperationFault } from "./NoOperationFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
