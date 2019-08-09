import { DuplicateInstanceId } from "./DuplicateInstanceId";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidOutputFolder } from "./InvalidOutputFolder";
import { InvalidParameters } from "./InvalidParameters";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { InvalidRole } from "./InvalidRole";
import { InvalidNotificationConfig } from "./InvalidNotificationConfig";
export type SendCommandExceptionsUnion =
  | DuplicateInstanceId
  | InternalServerError
  | InvalidInstanceId
  | InvalidDocument
  | InvalidDocumentVersion
  | InvalidOutputFolder
  | InvalidParameters
  | UnsupportedPlatformType
  | MaxDocumentSizeExceeded
  | InvalidRole
  | InvalidNotificationConfig;
