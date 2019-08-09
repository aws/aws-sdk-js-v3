import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentOperation } from "./InvalidDocumentOperation";
import { AssociatedInstances } from "./AssociatedInstances";
export type DeleteDocumentExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidDocumentOperation
  | AssociatedInstances;
