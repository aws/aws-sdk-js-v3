import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { DocumentVersionLimitExceeded } from "./DocumentVersionLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { DuplicateDocumentContent } from "./DuplicateDocumentContent";
import { DuplicateDocumentVersionName } from "./DuplicateDocumentVersionName";
import { InvalidDocumentContent } from "./InvalidDocumentContent";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentOperation } from "./InvalidDocumentOperation";
export type UpdateDocumentExceptionsUnion =
  | MaxDocumentSizeExceeded
  | DocumentVersionLimitExceeded
  | InternalServerError
  | DuplicateDocumentContent
  | DuplicateDocumentVersionName
  | InvalidDocumentContent
  | InvalidDocumentVersion
  | InvalidDocumentSchemaVersion
  | InvalidDocument
  | InvalidDocumentOperation;
