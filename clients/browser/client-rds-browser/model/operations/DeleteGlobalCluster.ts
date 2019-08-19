import { DeleteGlobalClusterInput } from "../shapes/DeleteGlobalClusterInput";
import { DeleteGlobalClusterOutput } from "../shapes/DeleteGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "../shapes/GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "../shapes/InvalidGlobalClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGlobalCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGlobalCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGlobalClusterInput
  },
  output: {
    shape: DeleteGlobalClusterOutput,
    resultWrapper: "DeleteGlobalClusterResult"
  },
  errors: [
    {
      shape: GlobalClusterNotFoundFault
    },
    {
      shape: InvalidGlobalClusterStateFault
    }
  ]
};
