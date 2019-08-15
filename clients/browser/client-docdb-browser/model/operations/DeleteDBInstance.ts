import { DeleteDBInstanceInput } from "../shapes/DeleteDBInstanceInput";
import { DeleteDBInstanceOutput } from "../shapes/DeleteDBInstanceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "../shapes/DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBInstanceInput
  },
  output: {
    shape: DeleteDBInstanceOutput,
    resultWrapper: "DeleteDBInstanceResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBSnapshotAlreadyExistsFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: InvalidDBClusterStateFault
    }
  ]
};
