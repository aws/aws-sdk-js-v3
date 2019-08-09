import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "./IncorrectFileSystemLifeCycleState";
export type PutLifecycleConfigurationExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemNotFound
  | IncorrectFileSystemLifeCycleState;
