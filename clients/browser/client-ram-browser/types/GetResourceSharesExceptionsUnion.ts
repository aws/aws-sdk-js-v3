import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetResourceSharesExceptionsUnion =
  | UnknownResourceException
  | MalformedArnException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServerInternalException
  | ServiceUnavailableException;
