import { DeleteDBClusterSnapshotInput } from "../shapes/DeleteDBClusterSnapshotInput";
import { DeleteDBClusterSnapshotOutput } from "../shapes/DeleteDBClusterSnapshotOutput";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { DBClusterSnapshotNotFoundFault } from "../shapes/DBClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
