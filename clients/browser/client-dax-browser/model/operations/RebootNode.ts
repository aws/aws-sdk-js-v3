import { RebootNodeInput } from "../shapes/RebootNodeInput";
import { RebootNodeOutput } from "../shapes/RebootNodeOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { NodeNotFoundFault } from "../shapes/NodeNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RebootNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootNode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootNodeInput
  },
  output: {
    shape: RebootNodeOutput
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
