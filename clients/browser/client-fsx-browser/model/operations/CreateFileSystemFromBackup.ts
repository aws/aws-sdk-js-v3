import { CreateFileSystemFromBackupInput } from "../shapes/CreateFileSystemFromBackupInput";
import { CreateFileSystemFromBackupOutput } from "../shapes/CreateFileSystemFromBackupOutput";
import { BadRequest } from "../shapes/BadRequest";
import { ActiveDirectoryError } from "../shapes/ActiveDirectoryError";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
import { InvalidNetworkSettings } from "../shapes/InvalidNetworkSettings";
import { ServiceLimitExceeded } from "../shapes/ServiceLimitExceeded";
import { BackupNotFound } from "../shapes/BackupNotFound";
import { InternalServerError } from "../shapes/InternalServerError";
import { MissingFileSystemConfiguration } from "../shapes/MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
