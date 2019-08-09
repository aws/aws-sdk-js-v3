import { InternalException } from "./InternalException";
import { NotConfiguredException } from "./NotConfiguredException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetV2LoggingOptionsExceptionsUnion =
  | InternalException
  | NotConfiguredException
  | ServiceUnavailableException;
