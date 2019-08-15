import { BatchModifyClusterSnapshotsInput } from "../shapes/BatchModifyClusterSnapshotsInput";
import { BatchModifyClusterSnapshotsOutput } from "../shapes/BatchModifyClusterSnapshotsOutput";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { BatchModifyClusterSnapshotsLimitExceededFault } from "../shapes/BatchModifyClusterSnapshotsLimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
