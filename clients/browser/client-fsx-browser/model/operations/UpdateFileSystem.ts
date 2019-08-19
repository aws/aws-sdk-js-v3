import { UpdateFileSystemInput } from "../shapes/UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "../shapes/UpdateFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { UnsupportedOperation } from "../shapes/UnsupportedOperation";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { MissingFileSystemConfiguration } from "../shapes/MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFileSystem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFileSystemInput
  },
  output: {
    shape: UpdateFileSystemOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: UnsupportedOperation
    },
    {
      shape: IncompatibleParameterError
    },
    {
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: MissingFileSystemConfiguration
    }
  ]
};
