import { DeleteSnapshotCopyGrantInput } from "../shapes/DeleteSnapshotCopyGrantInput";
import { DeleteSnapshotCopyGrantOutput } from "../shapes/DeleteSnapshotCopyGrantOutput";
import { InvalidSnapshotCopyGrantStateFault } from "../shapes/InvalidSnapshotCopyGrantStateFault";
import { SnapshotCopyGrantNotFoundFault } from "../shapes/SnapshotCopyGrantNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSnapshotCopyGrant: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSnapshotCopyGrant",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSnapshotCopyGrantInput
  },
  output: {
    shape: DeleteSnapshotCopyGrantOutput
  },
  errors: [
    {
      shape: InvalidSnapshotCopyGrantStateFault
    },
    {
      shape: SnapshotCopyGrantNotFoundFault
    }
  ]
};
