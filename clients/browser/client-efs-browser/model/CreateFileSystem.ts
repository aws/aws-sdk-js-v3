import { CreateFileSystemInput } from "./CreateFileSystemInput";
import { CreateFileSystemOutput } from "./CreateFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemAlreadyExists } from "./FileSystemAlreadyExists";
import { FileSystemLimitExceeded } from "./FileSystemLimitExceeded";
import { InsufficientThroughputCapacity } from "./InsufficientThroughputCapacity";
import { ThroughputLimitExceeded } from "./ThroughputLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFileSystem",
  http: {
    method: "POST",
    requestUri: "/2015-02-01/file-systems"
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
      shape: InternalServerError
    },
    {
      shape: FileSystemAlreadyExists
    },
    {
      shape: FileSystemLimitExceeded
    },
    {
      shape: InsufficientThroughputCapacity
    },
    {
      shape: ThroughputLimitExceeded
    }
  ]
};
