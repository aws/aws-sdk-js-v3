import { ModifyClusterSnapshotInput } from "./ModifyClusterSnapshotInput";
import { ModifyClusterSnapshotOutput } from "./ModifyClusterSnapshotOutput";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterSnapshotInput
  },
  output: {
    shape: ModifyClusterSnapshotOutput,
    resultWrapper: "ModifyClusterSnapshotResult"
  },
  errors: [
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
