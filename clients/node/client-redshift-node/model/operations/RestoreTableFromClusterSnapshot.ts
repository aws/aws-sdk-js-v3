import { RestoreTableFromClusterSnapshotInput } from "../shapes/RestoreTableFromClusterSnapshotInput";
import { RestoreTableFromClusterSnapshotOutput } from "../shapes/RestoreTableFromClusterSnapshotOutput";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { InProgressTableRestoreQuotaExceededFault } from "../shapes/InProgressTableRestoreQuotaExceededFault";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { InvalidTableRestoreArgumentFault } from "../shapes/InvalidTableRestoreArgumentFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
