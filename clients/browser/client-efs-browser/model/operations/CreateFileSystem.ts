import { CreateFileSystemInput } from "../shapes/CreateFileSystemInput";
import { CreateFileSystemOutput } from "../shapes/CreateFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemAlreadyExists } from "../shapes/FileSystemAlreadyExists";
import { FileSystemLimitExceeded } from "../shapes/FileSystemLimitExceeded";
import { InsufficientThroughputCapacity } from "../shapes/InsufficientThroughputCapacity";
import { ThroughputLimitExceeded } from "../shapes/ThroughputLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
