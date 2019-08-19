import { CopySnapshotInput } from "../shapes/CopySnapshotInput";
import { CopySnapshotOutput } from "../shapes/CopySnapshotOutput";
import { SnapshotAlreadyExistsFault } from "../shapes/SnapshotAlreadyExistsFault";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidSnapshotStateFault } from "../shapes/InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopySnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopySnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopySnapshotInput
  },
  output: {
    shape: CopySnapshotOutput,
    resultWrapper: "CopySnapshotResult"
  },
  errors: [
    {
      shape: SnapshotAlreadyExistsFault
    },
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: SnapshotQuotaExceededFault
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
