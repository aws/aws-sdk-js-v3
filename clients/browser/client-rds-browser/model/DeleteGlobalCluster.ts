import { DeleteGlobalClusterInput } from "./DeleteGlobalClusterInput";
import { DeleteGlobalClusterOutput } from "./DeleteGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
