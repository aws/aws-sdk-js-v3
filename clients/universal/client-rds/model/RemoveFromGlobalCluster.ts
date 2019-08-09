import { RemoveFromGlobalClusterInput } from "./RemoveFromGlobalClusterInput";
import { RemoveFromGlobalClusterOutput } from "./RemoveFromGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveFromGlobalCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveFromGlobalCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveFromGlobalClusterInput
  },
  output: {
    shape: RemoveFromGlobalClusterOutput,
    resultWrapper: "RemoveFromGlobalClusterResult"
  },
  errors: [
    {
      shape: GlobalClusterNotFoundFault
    },
    {
      shape: InvalidGlobalClusterStateFault
    },
    {
      shape: DBClusterNotFoundFault
    }
  ]
};
