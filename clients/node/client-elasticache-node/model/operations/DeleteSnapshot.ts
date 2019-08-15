import { DeleteSnapshotInput } from "../shapes/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "../shapes/DeleteSnapshotOutput";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { InvalidSnapshotStateFault } from "../shapes/InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
