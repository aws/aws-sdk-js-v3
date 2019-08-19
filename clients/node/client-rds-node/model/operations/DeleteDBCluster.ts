import { DeleteDBClusterInput } from "../shapes/DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "../shapes/DeleteDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { DBClusterSnapshotAlreadyExistsFault } from "../shapes/DBClusterSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
