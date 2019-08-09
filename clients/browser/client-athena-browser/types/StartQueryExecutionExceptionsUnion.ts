import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type StartQueryExecutionExceptionsUnion =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException;
