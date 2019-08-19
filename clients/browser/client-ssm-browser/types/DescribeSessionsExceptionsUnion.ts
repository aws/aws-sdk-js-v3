import { InternalServerError } from "./InternalServerError";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeSessionsExceptionsUnion =
  | InternalServerError
  | InvalidFilterKey
  | InvalidNextToken;
