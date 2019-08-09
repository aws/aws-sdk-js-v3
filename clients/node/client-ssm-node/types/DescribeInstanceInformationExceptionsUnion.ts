import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidInstanceInformationFilterValue } from "./InvalidInstanceInformationFilterValue";
import { InvalidFilterKey } from "./InvalidFilterKey";
export type DescribeInstanceInformationExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidNextToken
  | InvalidInstanceInformationFilterValue
  | InvalidFilterKey;
