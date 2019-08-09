import { DeleteDBClusterSnapshotInput } from "./DeleteDBClusterSnapshotInput";
import { DeleteDBClusterSnapshotOutput } from "./DeleteDBClusterSnapshotOutput";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDBClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBClusterSnapshotInput
  },
  output: {
    shape: DeleteDBClusterSnapshotOutput,
    resultWrapper: "DeleteDBClusterSnapshotResult"
  },
  errors: [
    {
      shape: InvalidDBClusterSnapshotStateFault
    },
    {
      shape: DBClusterSnapshotNotFoundFault
    }
  ]
};
