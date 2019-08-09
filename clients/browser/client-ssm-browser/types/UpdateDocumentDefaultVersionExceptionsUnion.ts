import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
export type UpdateDocumentDefaultVersionExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidDocumentVersion
  | InvalidDocumentSchemaVersion;
