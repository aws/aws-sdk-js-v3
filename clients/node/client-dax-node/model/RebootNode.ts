import { RebootNodeInput } from "./RebootNodeInput";
import { RebootNodeOutput } from "./RebootNodeOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NodeNotFoundFault } from "./NodeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
