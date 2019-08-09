import { CreateDBClusterSnapshotInput } from "./CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "./CreateDBClusterSnapshotOutput";
import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
