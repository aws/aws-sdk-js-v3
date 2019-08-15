import { DeleteFileSystemInput } from "../shapes/DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "../shapes/DeleteFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { FileSystemInUse } from "../shapes/FileSystemInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFileSystem",
  http: {
    method: "DELETE",
    requestUri: "/2015-02-01/file-systems/{FileSystemId}"
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
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: FileSystemInUse
    }
  ]
};
