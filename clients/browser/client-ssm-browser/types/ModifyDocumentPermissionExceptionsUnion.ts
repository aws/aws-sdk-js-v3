import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidPermissionType } from "./InvalidPermissionType";
import { DocumentPermissionLimit } from "./DocumentPermissionLimit";
import { DocumentLimitExceeded } from "./DocumentLimitExceeded";
export type ModifyDocumentPermissionExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidPermissionType
  | DocumentPermissionLimit
  | DocumentLimitExceeded;
