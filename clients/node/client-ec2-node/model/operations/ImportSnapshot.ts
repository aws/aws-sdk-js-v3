import { ImportSnapshotInput } from "../shapes/ImportSnapshotInput";
import { ImportSnapshotOutput } from "../shapes/ImportSnapshotOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportSnapshotInput
  },
  output: {
    shape: ImportSnapshotOutput
  },
  errors: []
};
