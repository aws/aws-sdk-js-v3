import { StopDBInstanceInput } from "../shapes/StopDBInstanceInput";
import { StopDBInstanceOutput } from "../shapes/StopDBInstanceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "../shapes/DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDBInstanceInput
  },
  output: {
    shape: StopDBInstanceOutput,
    resultWrapper: "StopDBInstanceResult"
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
