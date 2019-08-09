import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { BackupNotFound } from "./BackupNotFound";
import { InternalServerError } from "./InternalServerError";
export type DescribeBackupsExceptionsUnion =
  | BadRequest
  | FileSystemNotFound
  | BackupNotFound
  | InternalServerError;
