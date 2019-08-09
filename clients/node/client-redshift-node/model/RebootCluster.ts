import { RebootClusterInput } from "./RebootClusterInput";
import { RebootClusterOutput } from "./RebootClusterOutput";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
