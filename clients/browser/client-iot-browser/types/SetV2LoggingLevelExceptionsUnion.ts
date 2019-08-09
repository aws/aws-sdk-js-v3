import { InternalException } from "./InternalException";
import { NotConfiguredException } from "./NotConfiguredException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type SetV2LoggingLevelExceptionsUnion =
  | InternalException
  | NotConfiguredException
  | InvalidRequestException
  | ServiceUnavailableException;
