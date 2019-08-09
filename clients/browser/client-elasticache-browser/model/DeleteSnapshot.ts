import { DeleteSnapshotInput } from "./DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "./DeleteSnapshotOutput";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidSnapshotStateFault } from "./InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSnapshotInput
  },
  output: {
    shape: DeleteSnapshotOutput,
    resultWrapper: "DeleteSnapshotResult"
  },
  errors: [
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: InvalidSnapshotStateFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
