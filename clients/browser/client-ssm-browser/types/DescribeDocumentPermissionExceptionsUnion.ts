import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidPermissionType } from "./InvalidPermissionType";
export type DescribeDocumentPermissionExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidPermissionType;
