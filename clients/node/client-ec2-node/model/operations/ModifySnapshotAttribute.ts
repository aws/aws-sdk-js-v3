import { ModifySnapshotAttributeInput } from "../shapes/ModifySnapshotAttributeInput";
import { ModifySnapshotAttributeOutput } from "../shapes/ModifySnapshotAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifySnapshotAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifySnapshotAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifySnapshotAttributeInput
  },
  output: {
    shape: ModifySnapshotAttributeOutput
  },
  errors: []
};
