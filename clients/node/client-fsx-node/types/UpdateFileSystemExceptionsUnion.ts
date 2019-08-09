import { BadRequest } from "./BadRequest";
import { UnsupportedOperation } from "./UnsupportedOperation";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
export type UpdateFileSystemExceptionsUnion =
  | BadRequest
  | UnsupportedOperation
  | IncompatibleParameterError
  | InternalServerError
  | FileSystemNotFound
  | MissingFileSystemConfiguration;
