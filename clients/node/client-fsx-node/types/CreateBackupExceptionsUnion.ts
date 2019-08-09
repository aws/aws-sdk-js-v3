import { BadRequest } from "./BadRequest";
import { UnsupportedOperation } from "./UnsupportedOperation";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { BackupInProgress } from "./BackupInProgress";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { InternalServerError } from "./InternalServerError";
export type CreateBackupExceptionsUnion =
  | BadRequest
  | UnsupportedOperation
  | FileSystemNotFound
  | BackupInProgress
  | IncompatibleParameterError
  | ServiceLimitExceeded
  | InternalServerError;
