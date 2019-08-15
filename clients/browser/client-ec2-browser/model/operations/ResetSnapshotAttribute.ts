import { ResetSnapshotAttributeInput } from "../shapes/ResetSnapshotAttributeInput";
import { ResetSnapshotAttributeOutput } from "../shapes/ResetSnapshotAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetSnapshotAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetSnapshotAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetSnapshotAttributeInput
  },
  output: {
    shape: ResetSnapshotAttributeOutput
  },
  errors: []
};
