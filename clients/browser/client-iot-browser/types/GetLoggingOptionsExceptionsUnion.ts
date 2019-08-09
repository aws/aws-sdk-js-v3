import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetLoggingOptionsExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException;
