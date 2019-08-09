import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidNextToken } from "./InvalidNextToken";
export type DescribeEffectiveInstanceAssociationsExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidNextToken;
