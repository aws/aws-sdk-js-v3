import { ModifyGlobalClusterInput } from "../shapes/ModifyGlobalClusterInput";
import { ModifyGlobalClusterOutput } from "../shapes/ModifyGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "../shapes/GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "../shapes/InvalidGlobalClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyGlobalCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyGlobalCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyGlobalClusterInput
  },
  output: {
    shape: ModifyGlobalClusterOutput,
    resultWrapper: "ModifyGlobalClusterResult"
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
