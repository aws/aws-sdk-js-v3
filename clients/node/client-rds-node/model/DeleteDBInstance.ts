import { DeleteDBInstanceInput } from "./DeleteDBInstanceInput";
import { DeleteDBInstanceOutput } from "./DeleteDBInstanceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBInstanceAutomatedBackupQuotaExceededFault } from "./DBInstanceAutomatedBackupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    },
    {
      shape: DBInstanceAutomatedBackupQuotaExceededFault
    }
  ]
};
