import { CopyDBSnapshotInput } from "./CopyDBSnapshotInput";
import { CopyDBSnapshotOutput } from "./CopyDBSnapshotOutput";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
