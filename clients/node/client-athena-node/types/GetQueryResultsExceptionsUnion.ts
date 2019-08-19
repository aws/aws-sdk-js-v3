import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
export type GetQueryResultsExceptionsUnion =
  | InternalServerException
  | InvalidRequestException;
