import { ModifyClusterSnapshotInput } from "../shapes/ModifyClusterSnapshotInput";
import { ModifyClusterSnapshotOutput } from "../shapes/ModifyClusterSnapshotOutput";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
