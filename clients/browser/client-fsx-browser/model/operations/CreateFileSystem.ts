import { CreateFileSystemInput } from "../shapes/CreateFileSystemInput";
import { CreateFileSystemOutput } from "../shapes/CreateFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { ActiveDirectoryError } from "../shapes/ActiveDirectoryError";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
import { InvalidImportPath } from "../shapes/InvalidImportPath";
import { InvalidExportPath } from "../shapes/InvalidExportPath";
import { InvalidNetworkSettings } from "../shapes/InvalidNetworkSettings";
import { ServiceLimitExceeded } from "../shapes/ServiceLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { MissingFileSystemConfiguration } from "../shapes/MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
