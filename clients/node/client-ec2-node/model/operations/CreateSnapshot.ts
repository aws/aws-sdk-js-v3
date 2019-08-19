import { CreateSnapshotInput } from "../shapes/CreateSnapshotInput";
import { CreateSnapshotOutput } from "../shapes/CreateSnapshotOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotInput
  },
  output: {
    shape: CreateSnapshotOutput
  },
  errors: []
};
