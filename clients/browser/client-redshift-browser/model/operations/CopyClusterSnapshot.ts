import { CopyClusterSnapshotInput } from "../shapes/CopyClusterSnapshotInput";
import { CopyClusterSnapshotOutput } from "../shapes/CopyClusterSnapshotOutput";
import { ClusterSnapshotAlreadyExistsFault } from "../shapes/ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { ClusterSnapshotQuotaExceededFault } from "../shapes/ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyClusterSnapshotInput
  },
  output: {
    shape: CopyClusterSnapshotOutput,
    resultWrapper: "CopyClusterSnapshotResult"
  },
  errors: [
    {
      shape: ClusterSnapshotAlreadyExistsFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: ClusterSnapshotQuotaExceededFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
