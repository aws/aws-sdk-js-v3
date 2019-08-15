import { CopySnapshotInput } from "../shapes/CopySnapshotInput";
import { CopySnapshotOutput } from "../shapes/CopySnapshotOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopySnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopySnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopySnapshotInput
  },
  output: {
    shape: CopySnapshotOutput
  },
  errors: []
};
