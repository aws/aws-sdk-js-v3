import { CreateBackupInput } from "./CreateBackupInput";
import { CreateBackupOutput } from "./CreateBackupOutput";
import { TableNotFoundException } from "./TableNotFoundException";
import { TableInUseException } from "./TableInUseException";
import { ContinuousBackupsUnavailableException } from "./ContinuousBackupsUnavailableException";
import { BackupInUseException } from "./BackupInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
