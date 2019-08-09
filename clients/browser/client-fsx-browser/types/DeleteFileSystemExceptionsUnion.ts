import { BadRequest } from "./BadRequest";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { InternalServerError } from "./InternalServerError";
export type DeleteFileSystemExceptionsUnion =
  | BadRequest
  | IncompatibleParameterError
  | FileSystemNotFound
  | ServiceLimitExceeded
  | InternalServerError;
