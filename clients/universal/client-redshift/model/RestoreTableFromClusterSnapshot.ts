import { RestoreTableFromClusterSnapshotInput } from "./RestoreTableFromClusterSnapshotInput";
import { RestoreTableFromClusterSnapshotOutput } from "./RestoreTableFromClusterSnapshotOutput";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InProgressTableRestoreQuotaExceededFault } from "./InProgressTableRestoreQuotaExceededFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { InvalidTableRestoreArgumentFault } from "./InvalidTableRestoreArgumentFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreTableFromClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreTableFromClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreTableFromClusterSnapshotInput
  },
  output: {
    shape: RestoreTableFromClusterSnapshotOutput,
    resultWrapper: "RestoreTableFromClusterSnapshotResult"
  },
  errors: [
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: InProgressTableRestoreQuotaExceededFault
    },
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: InvalidTableRestoreArgumentFault
    },
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: UnsupportedOperationFault
    }
  ]
};
