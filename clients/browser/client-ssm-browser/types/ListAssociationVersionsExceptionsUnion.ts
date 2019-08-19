import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
export type ListAssociationVersionsExceptionsUnion =
  | InternalServerError
  | InvalidNextToken
  | AssociationDoesNotExist;
