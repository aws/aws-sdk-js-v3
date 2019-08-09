import { ModifyClusterDbRevisionInput } from "./ModifyClusterDbRevisionInput";
import { ModifyClusterDbRevisionOutput } from "./ModifyClusterDbRevisionOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterOnLatestRevisionFault } from "./ClusterOnLatestRevisionFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterDbRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterDbRevision",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterDbRevisionInput
  },
  output: {
    shape: ModifyClusterDbRevisionOutput,
    resultWrapper: "ModifyClusterDbRevisionResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: ClusterOnLatestRevisionFault
    },
    {
      shape: InvalidClusterStateFault
    }
  ]
};
