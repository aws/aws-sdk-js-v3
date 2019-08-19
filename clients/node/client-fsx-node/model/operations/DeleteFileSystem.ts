import { DeleteFileSystemInput } from "../shapes/DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "../shapes/DeleteFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { IncompatibleParameterError } from "../shapes/IncompatibleParameterError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { ServiceLimitExceeded } from "../shapes/ServiceLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFileSystem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFileSystemInput
  },
  output: {
    shape: DeleteFileSystemOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: IncompatibleParameterError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: ServiceLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
