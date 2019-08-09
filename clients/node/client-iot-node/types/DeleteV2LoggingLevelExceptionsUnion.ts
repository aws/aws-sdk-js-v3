import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteV2LoggingLevelExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException;
