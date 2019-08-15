import { RemoveFromGlobalClusterInput } from "../shapes/RemoveFromGlobalClusterInput";
import { RemoveFromGlobalClusterOutput } from "../shapes/RemoveFromGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "../shapes/GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "../shapes/InvalidGlobalClusterStateFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
