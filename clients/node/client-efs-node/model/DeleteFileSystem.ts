import { DeleteFileSystemInput } from "./DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "./DeleteFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { FileSystemInUse } from "./FileSystemInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
