import { ModifyDBSnapshotAttributeInput } from "./ModifyDBSnapshotAttributeInput";
import { ModifyDBSnapshotAttributeOutput } from "./ModifyDBSnapshotAttributeOutput";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { SharedSnapshotQuotaExceededFault } from "./SharedSnapshotQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDBSnapshotAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBSnapshotAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBSnapshotAttributeInput
  },
  output: {
    shape: ModifyDBSnapshotAttributeOutput,
    resultWrapper: "ModifyDBSnapshotAttributeResult"
  },
  errors: [
    {
      shape: DBSnapshotNotFoundFault
    },
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: SharedSnapshotQuotaExceededFault
    }
  ]
};
