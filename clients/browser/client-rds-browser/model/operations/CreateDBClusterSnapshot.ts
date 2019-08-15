import { CreateDBClusterSnapshotInput } from "../shapes/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "../shapes/CreateDBClusterSnapshotOutput";
import { DBClusterSnapshotAlreadyExistsFault } from "../shapes/DBClusterSnapshotAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBClusterSnapshotInput
  },
  output: {
    shape: CreateDBClusterSnapshotOutput,
    resultWrapper: "CreateDBClusterSnapshotResult"
  },
  errors: [
    {
      shape: DBClusterSnapshotAlreadyExistsFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    }
  ]
};
