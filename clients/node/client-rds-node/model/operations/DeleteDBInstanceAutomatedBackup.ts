import { DeleteDBInstanceAutomatedBackupInput } from "../shapes/DeleteDBInstanceAutomatedBackupInput";
import { DeleteDBInstanceAutomatedBackupOutput } from "../shapes/DeleteDBInstanceAutomatedBackupOutput";
import { InvalidDBInstanceAutomatedBackupStateFault } from "../shapes/InvalidDBInstanceAutomatedBackupStateFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "../shapes/DBInstanceAutomatedBackupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDBInstanceAutomatedBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBInstanceAutomatedBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBInstanceAutomatedBackupInput
  },
  output: {
    shape: DeleteDBInstanceAutomatedBackupOutput,
    resultWrapper: "DeleteDBInstanceAutomatedBackupResult"
  },
  errors: [
    {
      shape: InvalidDBInstanceAutomatedBackupStateFault
    },
    {
      shape: DBInstanceAutomatedBackupNotFoundFault
    }
  ]
};
