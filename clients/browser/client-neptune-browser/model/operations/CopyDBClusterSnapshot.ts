import { CopyDBClusterSnapshotInput } from "../shapes/CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "../shapes/CopyDBClusterSnapshotOutput";
import { DBClusterSnapshotAlreadyExistsFault } from "../shapes/DBClusterSnapshotAlreadyExistsFault";
import { DBClusterSnapshotNotFoundFault } from "../shapes/DBClusterSnapshotNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
