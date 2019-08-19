import { BadRequest } from "./BadRequest";
import { ActiveDirectoryError } from "./ActiveDirectoryError";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InvalidNetworkSettings } from "./InvalidNetworkSettings";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { BackupNotFound } from "./BackupNotFound";
import { InternalServerError } from "./InternalServerError";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
export type CreateFileSystemFromBackupExceptionsUnion =
  | BadRequest
  | ActiveDirectoryError
  | IncompatibleParameterError
  | InvalidNetworkSettings
  | ServiceLimitExceeded
  | BackupNotFound
  | InternalServerError
  | MissingFileSystemConfiguration;
