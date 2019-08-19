import { BadRequest } from "./BadRequest";
import { ActiveDirectoryError } from "./ActiveDirectoryError";
import { IncompatibleParameterError } from "./IncompatibleParameterError";
import { InvalidImportPath } from "./InvalidImportPath";
import { InvalidExportPath } from "./InvalidExportPath";
import { InvalidNetworkSettings } from "./InvalidNetworkSettings";
import { ServiceLimitExceeded } from "./ServiceLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { MissingFileSystemConfiguration } from "./MissingFileSystemConfiguration";
export type CreateFileSystemExceptionsUnion =
  | BadRequest
  | ActiveDirectoryError
  | IncompatibleParameterError
  | InvalidImportPath
  | InvalidExportPath
  | InvalidNetworkSettings
  | ServiceLimitExceeded
  | InternalServerError
  | MissingFileSystemConfiguration;
