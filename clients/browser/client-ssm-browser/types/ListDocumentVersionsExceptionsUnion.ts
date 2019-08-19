import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidDocument } from "./InvalidDocument";
export type ListDocumentVersionsExceptionsUnion =
  | InternalServerError
  | InvalidNextToken
  | InvalidDocument;
