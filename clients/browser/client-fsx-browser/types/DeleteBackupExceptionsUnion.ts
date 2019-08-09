import { BadRequest } from "./BadRequest";
import { BackupInProgress } from "./BackupInProgress";
import { BackupNotFound } from "./BackupNotFound";
import { BackupRestoring } from "./BackupRestoring";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InternalServerError } from "./InternalServerError";
export type DeleteBackupExceptionsUnion =
  | BadRequest
  | BackupInProgress
  | BackupNotFound
  | BackupRestoring
  | IncompatibleParameterError
  | InternalServerError;
