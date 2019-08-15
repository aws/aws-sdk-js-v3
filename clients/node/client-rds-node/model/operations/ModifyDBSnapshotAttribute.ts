import { ModifyDBSnapshotAttributeInput } from "../shapes/ModifyDBSnapshotAttributeInput";
import { ModifyDBSnapshotAttributeOutput } from "../shapes/ModifyDBSnapshotAttributeOutput";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "../shapes/InvalidDBSnapshotStateFault";
import { SharedSnapshotQuotaExceededFault } from "../shapes/SharedSnapshotQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
