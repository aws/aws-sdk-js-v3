import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeInstancePatchesExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidFilter
  | InvalidNextToken;
