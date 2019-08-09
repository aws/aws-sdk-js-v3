import { CopySnapshotInput } from "./CopySnapshotInput";
import { CopySnapshotOutput } from "./CopySnapshotOutput";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidSnapshotStateFault } from "./InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
