import { BatchModifyClusterSnapshotsInput } from "./BatchModifyClusterSnapshotsInput";
import { BatchModifyClusterSnapshotsOutput } from "./BatchModifyClusterSnapshotsOutput";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { BatchModifyClusterSnapshotsLimitExceededFault } from "./BatchModifyClusterSnapshotsLimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchModifyClusterSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchModifyClusterSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchModifyClusterSnapshotsInput
  },
  output: {
    shape: BatchModifyClusterSnapshotsOutput,
    resultWrapper: "BatchModifyClusterSnapshotsResult"
  },
  errors: [
    {
      shape: InvalidRetentionPeriodFault
    },
    {
      shape: BatchModifyClusterSnapshotsLimitExceededFault
    }
  ]
};
