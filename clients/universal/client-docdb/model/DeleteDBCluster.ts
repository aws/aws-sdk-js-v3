import { DeleteDBClusterInput } from "./DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "./DeleteDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBClusterInput
  },
  output: {
    shape: DeleteDBClusterOutput,
    resultWrapper: "DeleteDBClusterResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: DBClusterSnapshotAlreadyExistsFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    }
  ]
};
