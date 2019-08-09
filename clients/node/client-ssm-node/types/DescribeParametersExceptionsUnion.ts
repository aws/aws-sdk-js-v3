import { InternalServerError } from "./InternalServerError";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterOption } from "./InvalidFilterOption";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeParametersExceptionsUnion =
  | InternalServerError
  | InvalidFilterKey
  | InvalidFilterOption
  | InvalidFilterValue
  | InvalidNextToken;
