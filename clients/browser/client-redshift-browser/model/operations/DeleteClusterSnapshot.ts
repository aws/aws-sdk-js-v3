import { DeleteClusterSnapshotInput } from "../shapes/DeleteClusterSnapshotInput";
import { DeleteClusterSnapshotOutput } from "../shapes/DeleteClusterSnapshotOutput";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
