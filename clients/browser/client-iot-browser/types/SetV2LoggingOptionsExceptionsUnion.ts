import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type SetV2LoggingOptionsExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException;
