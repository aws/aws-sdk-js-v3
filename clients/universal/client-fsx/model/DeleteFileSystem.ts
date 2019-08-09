import { DeleteFileSystemInput } from "./DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "./DeleteFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
