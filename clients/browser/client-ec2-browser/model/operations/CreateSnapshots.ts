import { CreateSnapshotsInput } from "../shapes/CreateSnapshotsInput";
import { CreateSnapshotsOutput } from "../shapes/CreateSnapshotsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotsInput
  },
  output: {
    shape: CreateSnapshotsOutput
  },
  errors: []
};
