import { InternalServerError } from "./InternalServerError";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeAssociationExecutionsExceptionsUnion =
  | InternalServerError
  | AssociationDoesNotExist
  | InvalidNextToken;
