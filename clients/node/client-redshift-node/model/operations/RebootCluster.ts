import { RebootClusterInput } from "../shapes/RebootClusterInput";
import { RebootClusterOutput } from "../shapes/RebootClusterOutput";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RebootCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootClusterInput
  },
  output: {
    shape: RebootClusterOutput,
    resultWrapper: "RebootClusterResult"
  },
  errors: [
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterNotFoundFault
    }
  ]
};
