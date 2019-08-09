import { CreateBackupInput } from "./CreateBackupInput";
import { CreateBackupOutput } from "./CreateBackupOutput";
import { BadRequest } from "./BadRequest";
import { UnsupportedOperation } from "./UnsupportedOperation";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { BackupInProgress } from "./BackupInProgress";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
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
      shape: BadRequest
    },
    {
      shape: UnsupportedOperation
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: BackupInProgress
    },
    {
      shape: IncompatibleParameterError
    },
    {
      shape: ServiceLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
