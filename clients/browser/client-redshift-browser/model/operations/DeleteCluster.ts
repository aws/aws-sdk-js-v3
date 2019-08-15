import { DeleteClusterInput } from "../shapes/DeleteClusterInput";
import { DeleteClusterOutput } from "../shapes/DeleteClusterOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterSnapshotAlreadyExistsFault } from "../shapes/ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotQuotaExceededFault } from "../shapes/ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterInput
  },
  output: {
    shape: DeleteClusterOutput,
    resultWrapper: "DeleteClusterResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterSnapshotAlreadyExistsFault
    },
    {
      shape: ClusterSnapshotQuotaExceededFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
