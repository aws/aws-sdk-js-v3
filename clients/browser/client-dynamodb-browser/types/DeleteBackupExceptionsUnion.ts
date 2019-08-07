import { BackupNotFoundException } from "./BackupNotFoundException";
import { BackupInUseException } from "./BackupInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type DeleteBackupExceptionsUnion =
  | BackupNotFoundException
  | BackupInUseException
  | LimitExceededException
  | InternalServerError;
