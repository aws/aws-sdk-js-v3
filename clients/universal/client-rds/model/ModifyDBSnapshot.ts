import { ModifyDBSnapshotInput } from "./ModifyDBSnapshotInput";
import { ModifyDBSnapshotOutput } from "./ModifyDBSnapshotOutput";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDBSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBSnapshotInput
  },
  output: {
    shape: ModifyDBSnapshotOutput,
    resultWrapper: "ModifyDBSnapshotResult"
  },
  errors: [
    {
      shape: DBSnapshotNotFoundFault
    }
  ]
};
