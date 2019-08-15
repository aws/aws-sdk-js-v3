import { PromoteReadReplicaDBClusterInput } from "../shapes/PromoteReadReplicaDBClusterInput";
import { PromoteReadReplicaDBClusterOutput } from "../shapes/PromoteReadReplicaDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PromoteReadReplicaDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PromoteReadReplicaDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PromoteReadReplicaDBClusterInput
  },
  output: {
    shape: PromoteReadReplicaDBClusterOutput,
    resultWrapper: "PromoteReadReplicaDBClusterResult"
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
