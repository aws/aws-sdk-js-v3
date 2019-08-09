import { CreateFileSystemFromBackupInput } from "./CreateFileSystemFromBackupInput";
import { CreateFileSystemFromBackupOutput } from "./CreateFileSystemFromBackupOutput";
import { BadRequest } from "./BadRequest";
import { ActiveDirectoryError } from "./ActiveDirectoryError";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InvalidNetworkSettings } from "./InvalidNetworkSettings";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { BackupNotFound } from "./BackupNotFound";
import { InternalServerError } from "./InternalServerError";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFileSystemFromBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFileSystemFromBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFileSystemFromBackupInput
  },
  output: {
    shape: CreateFileSystemFromBackupOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: ActiveDirectoryError
    },
    {
      shape: IncompatibleParameterError
    },
    {
      shape: InvalidNetworkSettings
    },
    {
      shape: ServiceLimitExceeded
    },
    {
      shape: BackupNotFound
    },
    {
      shape: InternalServerError
    },
    {
      shape: MissingFileSystemConfiguration
    }
  ]
};
