import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "./IncorrectFileSystemLifeCycleState";
import { InsufficientThroughputCapacity } from "./InsufficientThroughputCapacity";
import { InternalServerError } from "./InternalServerError";
import { ThroughputLimitExceeded } from "./ThroughputLimitExceeded";
import { TooManyRequests } from "./TooManyRequests";
export type UpdateFileSystemExceptionsUnion =
  | BadRequest
  | FileSystemNotFound
  | IncorrectFileSystemLifeCycleState
  | InsufficientThroughputCapacity
  | InternalServerError
  | ThroughputLimitExceeded
  | TooManyRequests;
