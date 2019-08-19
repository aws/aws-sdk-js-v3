import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidAggregatorException } from "./InvalidAggregatorException";
export type GetOpsSummaryExceptionsUnion =
  | InternalServerError
  | InvalidFilter
  | InvalidNextToken
  | InvalidTypeNameException
  | InvalidAggregatorException;
