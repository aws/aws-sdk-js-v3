import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
export type DescribeFileSystemsExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemNotFound;
