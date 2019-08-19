import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidFilterKey } from "./InvalidFilterKey";
export type ListDocumentsExceptionsUnion =
  | InternalServerError
  | InvalidNextToken
  | InvalidFilterKey;
