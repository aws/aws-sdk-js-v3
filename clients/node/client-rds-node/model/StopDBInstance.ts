import { StopDBInstanceInput } from "./StopDBInstanceInput";
import { StopDBInstanceOutput } from "./StopDBInstanceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
