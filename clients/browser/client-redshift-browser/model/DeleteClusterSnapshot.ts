import { DeleteClusterSnapshotInput } from "./DeleteClusterSnapshotInput";
import { DeleteClusterSnapshotOutput } from "./DeleteClusterSnapshotOutput";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterSnapshotInput
  },
  output: {
    shape: DeleteClusterSnapshotOutput,
    resultWrapper: "DeleteClusterSnapshotResult"
  },
  errors: [
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    }
  ]
};
