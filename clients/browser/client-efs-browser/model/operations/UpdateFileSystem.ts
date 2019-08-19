import { UpdateFileSystemInput } from "../shapes/UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "../shapes/UpdateFileSystemOutput";
import { BadRequest } from "../shapes/BadRequest";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "../shapes/IncorrectFileSystemLifeCycleState";
import { InsufficientThroughputCapacity } from "../shapes/InsufficientThroughputCapacity";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThroughputLimitExceeded } from "../shapes/ThroughputLimitExceeded";
import { TooManyRequests } from "../shapes/TooManyRequests";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFileSystem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFileSystem",
  http: {
    method: "PUT",
    requestUri: "/2015-02-01/file-systems/{FileSystemId}"
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
      shape: FileSystemNotFound
    },
    {
      shape: IncorrectFileSystemLifeCycleState
    },
    {
      shape: InsufficientThroughputCapacity
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThroughputLimitExceeded
    },
    {
      shape: TooManyRequests
    }
  ]
};
