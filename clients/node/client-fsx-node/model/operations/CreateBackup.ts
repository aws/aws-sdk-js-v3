import { CreateBackupInput } from "../shapes/CreateBackupInput";
import { CreateBackupOutput } from "../shapes/CreateBackupOutput";
import { BadRequest } from "../shapes/BadRequest";
import { UnsupportedOperation } from "../shapes/UnsupportedOperation";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { BackupInProgress } from "../shapes/BackupInProgress";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
import { ServiceLimitExceeded } from "../shapes/ServiceLimitExceeded";
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
