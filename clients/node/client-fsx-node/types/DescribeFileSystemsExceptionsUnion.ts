import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { InternalServerError } from "./InternalServerError";
export type DescribeFileSystemsExceptionsUnion =
  | BadRequest
  | FileSystemNotFound
  | InternalServerError;
