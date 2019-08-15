import { RestoreTableFromBackupInput } from "../shapes/RestoreTableFromBackupInput";
import { RestoreTableFromBackupOutput } from "../shapes/RestoreTableFromBackupOutput";
import { TableAlreadyExistsException } from "../shapes/TableAlreadyExistsException";
import { TableInUseException } from "../shapes/TableInUseException";
import { BackupNotFoundException } from "../shapes/BackupNotFoundException";
import { BackupInUseException } from "../shapes/BackupInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreTableFromBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreTableFromBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreTableFromBackupInput
  },
  output: {
    shape: RestoreTableFromBackupOutput
  },
  errors: [
    {
      shape: TableAlreadyExistsException
    },
    {
      shape: TableInUseException
    },
    {
      shape: BackupNotFoundException
    },
    {
      shape: BackupInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
