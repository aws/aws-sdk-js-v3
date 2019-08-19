import { DeleteBackupInput } from "../shapes/DeleteBackupInput";
import { DeleteBackupOutput } from "../shapes/DeleteBackupOutput";
import { BackupNotFoundException } from "../shapes/BackupNotFoundException";
import { BackupInUseException } from "../shapes/BackupInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBackupInput
  },
  output: {
    shape: DeleteBackupOutput
  },
  errors: [
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
