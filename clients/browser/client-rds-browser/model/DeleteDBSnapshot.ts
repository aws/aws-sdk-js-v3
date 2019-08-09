import { DeleteDBSnapshotInput } from "./DeleteDBSnapshotInput";
import { DeleteDBSnapshotOutput } from "./DeleteDBSnapshotOutput";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDBSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBSnapshotInput
  },
  output: {
    shape: DeleteDBSnapshotOutput,
    resultWrapper: "DeleteDBSnapshotResult"
  },
  errors: [
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: DBSnapshotNotFoundFault
    }
  ]
};
