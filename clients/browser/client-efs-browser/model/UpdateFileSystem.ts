import { UpdateFileSystemInput } from "./UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "./UpdateFileSystemOutput";
import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "./IncorrectFileSystemLifeCycleState";
import { InsufficientThroughputCapacity } from "./InsufficientThroughputCapacity";
import { InternalServerError } from "./InternalServerError";
import { ThroughputLimitExceeded } from "./ThroughputLimitExceeded";
import { TooManyRequests } from "./TooManyRequests";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
