import { ModifyGlobalClusterInput } from "./ModifyGlobalClusterInput";
import { ModifyGlobalClusterOutput } from "./ModifyGlobalClusterOutput";
import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
