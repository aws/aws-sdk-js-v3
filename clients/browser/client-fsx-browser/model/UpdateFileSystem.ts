import { UpdateFileSystemInput } from "./UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "./UpdateFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { UnsupportedOperation } from "./UnsupportedOperation";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
