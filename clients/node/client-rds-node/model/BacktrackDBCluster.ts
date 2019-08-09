import { BacktrackDBClusterInput } from "./BacktrackDBClusterInput";
import { BacktrackDBClusterOutput } from "./BacktrackDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
