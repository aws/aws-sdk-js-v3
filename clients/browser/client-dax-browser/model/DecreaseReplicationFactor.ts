import { DecreaseReplicationFactorInput } from "./DecreaseReplicationFactorInput";
import { DecreaseReplicationFactorOutput } from "./DecreaseReplicationFactorOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NodeNotFoundFault } from "./NodeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
