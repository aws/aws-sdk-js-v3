import { InternalServerError } from "./InternalServerError";
import { InvalidDeletionIdException } from "./InvalidDeletionIdException";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeInventoryDeletionsExceptionsUnion =
  | InternalServerError
  | InvalidDeletionIdException
  | InvalidNextToken;
