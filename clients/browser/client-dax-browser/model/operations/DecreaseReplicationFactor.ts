import { DecreaseReplicationFactorInput } from "../shapes/DecreaseReplicationFactorInput";
import { DecreaseReplicationFactorOutput } from "../shapes/DecreaseReplicationFactorOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { NodeNotFoundFault } from "../shapes/NodeNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DecreaseReplicationFactor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DecreaseReplicationFactor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DecreaseReplicationFactorInput
  },
  output: {
    shape: DecreaseReplicationFactorOutput
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: NodeNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
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
