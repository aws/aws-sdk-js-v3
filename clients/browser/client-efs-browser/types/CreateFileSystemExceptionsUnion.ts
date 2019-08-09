import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemAlreadyExists } from "./FileSystemAlreadyExists";
import { FileSystemLimitExceeded } from "./FileSystemLimitExceeded";
import { InsufficientThroughputCapacity } from "./InsufficientThroughputCapacity";
import { ThroughputLimitExceeded } from "./ThroughputLimitExceeded";
export type CreateFileSystemExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemAlreadyExists
  | FileSystemLimitExceeded
  | InsufficientThroughputCapacity
  | ThroughputLimitExceeded;
