import { DeleteSnapshotInput } from "./DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "./DeleteSnapshotOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSnapshotInput
  },
  output: {
    shape: DeleteSnapshotOutput
  },
  errors: []
};
