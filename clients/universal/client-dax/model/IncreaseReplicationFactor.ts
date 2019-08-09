import { IncreaseReplicationFactorInput } from "./IncreaseReplicationFactorInput";
import { IncreaseReplicationFactorOutput } from "./IncreaseReplicationFactorOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const IncreaseReplicationFactor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IncreaseReplicationFactor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IncreaseReplicationFactorInput
  },
  output: {
    shape: IncreaseReplicationFactorOutput
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: NodeQuotaForClusterExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
