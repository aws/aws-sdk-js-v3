import { CreateFileSystemInput } from "./CreateFileSystemInput";
import { CreateFileSystemOutput } from "./CreateFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { ActiveDirectoryError } from "./ActiveDirectoryError";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InvalidImportPath } from "./InvalidImportPath";
import { InvalidExportPath } from "./InvalidExportPath";
import { InvalidNetworkSettings } from "./InvalidNetworkSettings";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFileSystem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFileSystemInput
  },
  output: {
    shape: CreateFileSystemOutput
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
      shape: InvalidImportPath
    },
    {
      shape: InvalidExportPath
    },
    {
      shape: InvalidNetworkSettings
    },
    {
      shape: ServiceLimitExceeded
    },
    {
      shape: InternalServerError
    },
    {
      shape: MissingFileSystemConfiguration
    }
  ]
};
