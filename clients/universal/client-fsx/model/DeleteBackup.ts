import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteBackupOutput } from "./DeleteBackupOutput";
import { BadRequest } from "./BadRequest";
import { BackupInProgress } from "./BackupInProgress";
import { BackupNotFound } from "./BackupNotFound";
import { BackupRestoring } from "./BackupRestoring";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
