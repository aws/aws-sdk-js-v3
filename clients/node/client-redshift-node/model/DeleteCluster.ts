import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
