import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type SetLoggingOptionsExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException;
