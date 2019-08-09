import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { FileSystemInUse } from "./FileSystemInUse";
export type DeleteFileSystemExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemNotFound
  | FileSystemInUse;
