import { CopyDBSnapshotInput } from "../shapes/CopyDBSnapshotInput";
import { CopyDBSnapshotOutput } from "../shapes/CopyDBSnapshotOutput";
import { DBSnapshotAlreadyExistsFault } from "../shapes/DBSnapshotAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "../shapes/InvalidDBSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyDBSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyDBSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyDBSnapshotInput
  },
  output: {
    shape: CopyDBSnapshotOutput,
    resultWrapper: "CopyDBSnapshotResult"
  },
  errors: [
    {
      shape: DBSnapshotAlreadyExistsFault
    },
    {
      shape: DBSnapshotNotFoundFault
    },
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
