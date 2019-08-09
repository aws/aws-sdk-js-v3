import { DeleteDBInstanceAutomatedBackupInput } from "./DeleteDBInstanceAutomatedBackupInput";
import { DeleteDBInstanceAutomatedBackupOutput } from "./DeleteDBInstanceAutomatedBackupOutput";
import { InvalidDBInstanceAutomatedBackupStateFault } from "./InvalidDBInstanceAutomatedBackupStateFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "./DBInstanceAutomatedBackupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
