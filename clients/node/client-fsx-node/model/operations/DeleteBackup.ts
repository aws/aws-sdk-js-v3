import { DeleteBackupInput } from "../shapes/DeleteBackupInput";
import { DeleteBackupOutput } from "../shapes/DeleteBackupOutput";
import { BadRequest } from "../shapes/BadRequest";
import { BackupInProgress } from "../shapes/BackupInProgress";
import { BackupNotFound } from "../shapes/BackupNotFound";
import { BackupRestoring } from "../shapes/BackupRestoring";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
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
      shape: BadRequest
    },
    {
      shape: BackupInProgress
    },
    {
      shape: BackupNotFound
    },
    {
      shape: BackupRestoring
    },
    {
      shape: IncompatibleParameterError
    },
    {
      shape: InternalServerError
    }
  ]
};
