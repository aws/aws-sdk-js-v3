import { CreateBackupInput } from "../shapes/CreateBackupInput";
import { CreateBackupOutput } from "../shapes/CreateBackupOutput";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { TableInUseException } from "../shapes/TableInUseException";
import { ContinuousBackupsUnavailableException } from "../shapes/ContinuousBackupsUnavailableException";
import { BackupInUseException } from "../shapes/BackupInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBackupInput
  },
  output: {
    shape: CreateBackupOutput
  },
  errors: [
    {
      shape: TableNotFoundException
    },
    {
      shape: TableInUseException
    },
    {
      shape: ContinuousBackupsUnavailableException
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
