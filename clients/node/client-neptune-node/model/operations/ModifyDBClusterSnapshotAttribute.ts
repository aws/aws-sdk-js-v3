import { ModifyDBClusterSnapshotAttributeInput } from "../shapes/ModifyDBClusterSnapshotAttributeInput";
import { ModifyDBClusterSnapshotAttributeOutput } from "../shapes/ModifyDBClusterSnapshotAttributeOutput";
import { DBClusterSnapshotNotFoundFault } from "../shapes/DBClusterSnapshotNotFoundFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { SharedSnapshotQuotaExceededFault } from "../shapes/SharedSnapshotQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyDBClusterSnapshotAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBClusterSnapshotAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBClusterSnapshotAttributeInput
  },
  output: {
    shape: ModifyDBClusterSnapshotAttributeOutput,
    resultWrapper: "ModifyDBClusterSnapshotAttributeResult"
  },
  errors: [
    {
      shape: DBClusterSnapshotNotFoundFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    },
    {
      shape: SharedSnapshotQuotaExceededFault
    }
  ]
};
