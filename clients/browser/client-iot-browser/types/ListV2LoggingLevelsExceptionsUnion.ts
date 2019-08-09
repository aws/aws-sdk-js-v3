import { InternalException } from "./InternalException";
import { NotConfiguredException } from "./NotConfiguredException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListV2LoggingLevelsExceptionsUnion =
  | InternalException
  | NotConfiguredException
  | InvalidRequestException
  | ServiceUnavailableException;
