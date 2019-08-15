import { BatchDeleteClusterSnapshotsInput } from "../shapes/BatchDeleteClusterSnapshotsInput";
import { BatchDeleteClusterSnapshotsOutput } from "../shapes/BatchDeleteClusterSnapshotsOutput";
import { BatchDeleteRequestSizeExceededFault } from "../shapes/BatchDeleteRequestSizeExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteClusterSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteClusterSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteClusterSnapshotsInput
  },
  output: {
    shape: BatchDeleteClusterSnapshotsOutput,
    resultWrapper: "BatchDeleteClusterSnapshotsResult"
  },
  errors: [
    {
      shape: BatchDeleteRequestSizeExceededFault
    }
  ]
};
