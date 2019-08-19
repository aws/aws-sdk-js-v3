import { DocumentAlreadyExists } from "./DocumentAlreadyExists";
import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocumentContent } from "./InvalidDocumentContent";
import { DocumentLimitExceeded } from "./DocumentLimitExceeded";
import { InvalidDocumentSchemaVersion } from "./InvalidDocumentSchemaVersion";
export type CreateDocumentExceptionsUnion =
  | DocumentAlreadyExists
  | MaxDocumentSizeExceeded
  | InternalServerError
  | InvalidDocumentContent
  | DocumentLimitExceeded
  | InvalidDocumentSchemaVersion;
