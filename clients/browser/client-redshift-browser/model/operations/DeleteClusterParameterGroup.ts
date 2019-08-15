import { DeleteClusterParameterGroupInput } from "../shapes/DeleteClusterParameterGroupInput";
import { DeleteClusterParameterGroupOutput } from "../shapes/DeleteClusterParameterGroupOutput";
import { InvalidClusterParameterGroupStateFault } from "../shapes/InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterParameterGroupInput
  },
  output: {
    shape: DeleteClusterParameterGroupOutput
  },
  errors: [
    {
      shape: InvalidClusterParameterGroupStateFault
    },
    {
      shape: ClusterParameterGroupNotFoundFault
    }
  ]
};
