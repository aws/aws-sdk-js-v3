import { CopyClusterSnapshotInput } from "./CopyClusterSnapshotInput";
import { CopyClusterSnapshotOutput } from "./CopyClusterSnapshotOutput";
import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
