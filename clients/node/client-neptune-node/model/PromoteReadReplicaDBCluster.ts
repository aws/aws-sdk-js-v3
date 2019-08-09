import { PromoteReadReplicaDBClusterInput } from "./PromoteReadReplicaDBClusterInput";
import { PromoteReadReplicaDBClusterOutput } from "./PromoteReadReplicaDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
