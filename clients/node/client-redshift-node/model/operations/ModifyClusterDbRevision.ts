import { ModifyClusterDbRevisionInput } from "../shapes/ModifyClusterDbRevisionInput";
import { ModifyClusterDbRevisionOutput } from "../shapes/ModifyClusterDbRevisionOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { ClusterOnLatestRevisionFault } from "../shapes/ClusterOnLatestRevisionFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
