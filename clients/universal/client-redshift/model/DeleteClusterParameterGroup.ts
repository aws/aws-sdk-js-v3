import { DeleteClusterParameterGroupInput } from "./DeleteClusterParameterGroupInput";
import { DeleteClusterParameterGroupOutput } from "./DeleteClusterParameterGroupOutput";
import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
