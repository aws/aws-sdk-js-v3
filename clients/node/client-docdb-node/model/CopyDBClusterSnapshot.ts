import { CopyDBClusterSnapshotInput } from "./CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "./CopyDBClusterSnapshotOutput";
import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CopyDBClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyDBClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyDBClusterSnapshotInput
  },
  output: {
    shape: CopyDBClusterSnapshotOutput,
    resultWrapper: "CopyDBClusterSnapshotResult"
  },
  errors: [
    {
      shape: DBClusterSnapshotAlreadyExistsFault
    },
    {
      shape: DBClusterSnapshotNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
