import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
export type StopQueryExecutionExceptionsUnion =
  | InternalServerException
  | InvalidRequestException;
