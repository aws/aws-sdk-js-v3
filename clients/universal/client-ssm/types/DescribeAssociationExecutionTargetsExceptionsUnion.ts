import { InternalServerError } from "./InternalServerError";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidNextToken } from "./InvalidNextToken";
import { AssociationExecutionDoesNotExist } from "./AssociationExecutionDoesNotExist";
export type DescribeAssociationExecutionTargetsExceptionsUnion =
  | InternalServerError
  | AssociationDoesNotExist
  | InvalidNextToken
  | AssociationExecutionDoesNotExist;
