import { BacktrackDBClusterInput } from "../shapes/BacktrackDBClusterInput";
import { BacktrackDBClusterOutput } from "../shapes/BacktrackDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BacktrackDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BacktrackDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BacktrackDBClusterInput
  },
  output: {
    shape: BacktrackDBClusterOutput,
    resultWrapper: "BacktrackDBClusterResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    }
  ]
};
